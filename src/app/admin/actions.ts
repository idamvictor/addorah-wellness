"use server";

import { updateTag } from "next/cache";
import { redirect } from "next/navigation";

import { categories, type CategorySlug } from "@/data/categories";
import { type OrderStatus, orderStatuses } from "@/data/orders";
import { type PriceSet, type Product, productBadges, type ProductBadge, type ProductStatus, productStatuses } from "@/data/products";
import { checkPassword, createSession, destroySession, requireAdmin } from "@/lib/admin-session";
import { CATALOG_TAG, mutateCatalog } from "@/lib/catalog";
import { updateOrder } from "@/lib/orders";
import { deleteUploadedImage, saveProductImage } from "@/lib/uploads";

export type FormState = { error?: string; fieldErrors?: Record<string, string> } | undefined;

// ---------- auth ----------

export async function login(_state: FormState, formData: FormData): Promise<FormState> {
  const password = String(formData.get("password") ?? "");
  if (!checkPassword(password)) {
    // Slow down guessing.
    await new Promise((resolve) => setTimeout(resolve, 800));
    return { error: "Incorrect password." };
  }
  await createSession();
  redirect("/admin");
}

export async function logout() {
  await destroySession();
  redirect("/admin/login");
}

// ---------- parsing ----------

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const slugify = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

const text = (formData: FormData, key: string) => String(formData.get(key) ?? "").trim();

/** Empty → undefined; otherwise a finite number ≥ 0 or an error. */
function money(formData: FormData, key: string, errors: Record<string, string>): number | undefined {
  const raw = text(formData, key).replace(/[,\s₦]/g, "");
  if (!raw) return undefined;
  const value = Number(raw);
  if (!Number.isFinite(value) || value < 0) {
    errors[key] = "Enter a number of 0 or more.";
    return undefined;
  }
  return Math.round(value * 100) / 100;
}

function priceSet(formData: FormData, prefix: string, errors: Record<string, string>): PriceSet | undefined {
  const price = money(formData, `${prefix}.price`, errors);
  const compareAt = money(formData, `${prefix}.compareAt`, errors);
  const subscribe = money(formData, `${prefix}.subscribe`, errors);
  if (price === undefined) {
    if (compareAt !== undefined || subscribe !== undefined) errors[`${prefix}.price`] = "Set a price to override this.";
    return undefined;
  }
  return { price, ...(compareAt !== undefined && { compareAt }), ...(subscribe !== undefined && { subscribe }) };
}

type Parsed = { fields: Omit<Product, "slug" | "image">; image?: File };

function parseProduct(formData: FormData): { parsed?: Parsed; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  const name = text(formData, "name");
  if (!name) errors.name = "Name is required.";
  const shortName = text(formData, "shortName") || name;

  const status = text(formData, "status") as ProductStatus;
  if (!productStatuses.some((option) => option.value === status)) errors.status = "Choose a status.";

  const badgeValues = new Set(productBadges.map((badge) => badge.value));
  const badges = formData.getAll("badges").map(String).filter((value): value is ProductBadge => badgeValues.has(value as ProductBadge));

  const categoryValues = new Set(categories.map((category) => category.slug));
  const productCategories = formData
    .getAll("categories")
    .map(String)
    .filter((value): value is CategorySlug => categoryValues.has(value as CategorySlug));

  const price = money(formData, "price", errors);
  const compareAtPrice = money(formData, "compareAtPrice", errors);
  if (status === "available" && price === undefined) errors.price ??= "Available products need a price.";
  if (price !== undefined && compareAtPrice !== undefined && compareAtPrice <= price) {
    errors.compareAtPrice = "Compare-at price should be higher than the price (or leave it empty).";
  }

  const reviewRaw = text(formData, "reviewCount");
  const reviewCount = reviewRaw ? Number(reviewRaw) : undefined;
  if (reviewCount !== undefined && (!Number.isInteger(reviewCount) || reviewCount < 0)) {
    errors.reviewCount = "Enter a whole number of 0 or more.";
  }

  const pagePrice = priceSet(formData, "pagePrice", errors);

  const variantPrices: Record<string, PriceSet> = {};
  const variantCount = Number(text(formData, "variantCount")) || 0;
  for (let i = 0; i < Math.min(variantCount, 50); i++) {
    const variantName = text(formData, `variant.${i}.name`);
    const set = priceSet(formData, `variant.${i}`, errors);
    if (variantName && set) variantPrices[variantName] = set;
  }

  const image = formData.get("image");
  const upload = image instanceof File && image.size > 0 ? image : undefined;

  if (Object.keys(errors).length) return { errors };

  const fields: Parsed["fields"] = {
    name,
    shortName,
    tagline: text(formData, "tagline") || undefined,
    description: text(formData, "description") || undefined,
    price,
    compareAtPrice,
    priceFrom: formData.get("priceFrom") === "on" || undefined,
    badges,
    categories: productCategories,
    status,
    hasDetailPage: formData.get("hasDetailPage") === "on",
    reviewCount,
    pagePrice,
    variantPrices: Object.keys(variantPrices).length ? variantPrices : undefined,
  };
  return { parsed: { fields, image: upload }, errors };
}

/** Drops undefined keys so catalog.json stays tidy. */
const clean = (product: Product) => JSON.parse(JSON.stringify(product)) as Product;

// ---------- mutations ----------

export async function createProduct(_state: FormState, formData: FormData): Promise<FormState> {
  await requireAdmin();
  const { parsed, errors } = parseProduct(formData);

  const slug = text(formData, "slug") || slugify(text(formData, "name"));
  if (!SLUG.test(slug)) errors.slug = "Use lowercase letters, numbers and dashes, e.g. echo-travel-case.";
  if (!(formData.get("image") instanceof File) || (formData.get("image") as File).size === 0) {
    errors.image = "Upload a product image.";
  }
  if (!parsed || Object.keys(errors).length) return { error: "Please fix the highlighted fields.", fieldErrors: errors };

  const saved = await saveProductImage(slug, parsed.image!);
  if ("error" in saved) return { error: saved.error, fieldErrors: { image: saved.error } };

  const result = await mutateCatalog(async (products) => {
    if (products.some((product) => product.slug === slug)) return { products, result: "exists" as const };
    return { products: [...products, clean({ ...parsed.fields, slug, image: saved.url })], result: "ok" as const };
  });

  if (result === "exists") {
    await deleteUploadedImage(saved.url);
    return { error: "A product with this slug already exists.", fieldErrors: { slug: "Already in use." } };
  }

  updateTag(CATALOG_TAG);
  redirect(`/admin?saved=${encodeURIComponent(slug)}`);
}

export async function updateProduct(slug: string, _state: FormState, formData: FormData): Promise<FormState> {
  await requireAdmin();
  const { parsed, errors } = parseProduct(formData);
  if (!parsed) return { error: "Please fix the highlighted fields.", fieldErrors: errors };

  let newImage: string | undefined;
  if (parsed.image) {
    const saved = await saveProductImage(slug, parsed.image);
    if ("error" in saved) return { error: saved.error, fieldErrors: { image: saved.error } };
    newImage = saved.url;
  }

  const previous = await mutateCatalog(async (products) => {
    const index = products.findIndex((product) => product.slug === slug);
    if (index < 0) return { products, result: null };
    const current = products[index];
    const next = clean({
      // Keep fields the form doesn't edit (e.g. carouselImage).
      ...current,
      ...parsed.fields,
      slug,
      image: newImage ?? current.image,
    });
    const list = [...products];
    list[index] = next;
    return { products: list, result: current };
  });

  if (!previous) {
    await deleteUploadedImage(newImage);
    return { error: "This product no longer exists." };
  }
  if (newImage) await deleteUploadedImage(previous.image);

  updateTag(CATALOG_TAG);
  redirect(`/admin?saved=${encodeURIComponent(slug)}`);
}

export async function deleteProduct(formData: FormData) {
  await requireAdmin();
  const slug = text(formData, "slug");

  const removed = await mutateCatalog(async (products) => {
    const product = products.find((item) => item.slug === slug);
    return { products: products.filter((item) => item.slug !== slug), result: product };
  });
  if (removed) await deleteUploadedImage(removed.image);

  updateTag(CATALOG_TAG);
  redirect(`/admin?deleted=${encodeURIComponent(removed?.name ?? slug)}`);
}

// ---------- orders ----------

export async function updateOrderStatus(id: string, _state: FormState, formData: FormData): Promise<FormState> {
  await requireAdmin();
  const status = text(formData, "status") as OrderStatus;
  if (!orderStatuses.some((option) => option.value === status)) return { error: "Choose a status." };
  const note = text(formData, "note").slice(0, 500) || undefined;

  const updated = await updateOrder(id, (order) => {
    if (order.status === status && !note) return order;
    return { ...order, status, history: [...order.history, { status, at: new Date().toISOString(), ...(note && { note }) }] };
  });
  if (!updated) return { error: "This order no longer exists." };

  redirect(`/admin/orders/${id}?saved=1`);
}
