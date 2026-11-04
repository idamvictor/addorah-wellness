"use server";

import { redirect } from "next/navigation";

import { MAX_LINE_QTY, nigerianStates, type OrderLine, type PaymentMethod, paymentMethods } from "@/data/orders";
import { listProducts } from "@/lib/catalog";
import { isAllowedPrice } from "@/lib/order-pricing";
import { createOrder } from "@/lib/orders";

export type CheckoutState =
  | {
      error?: string;
      fieldErrors?: Record<string, string>;
      /** Cart lines the server refused (removed, unavailable or repriced). */
      problems?: { slug: string; variant?: string; message: string }[];
    }
  | undefined;

const text = (formData: FormData, key: string, max = 200) => String(formData.get(key) ?? "").trim().slice(0, max);

type ClientLine = { slug: string; variant?: string; price: number; qty: number };

function parseCart(raw: string): ClientLine[] | undefined {
  try {
    const value: unknown = JSON.parse(raw);
    if (!Array.isArray(value) || value.length === 0 || value.length > 30) return undefined;
    const lines = value.map((item) => {
      const line = item as Record<string, unknown>;
      return {
        slug: String(line.slug ?? ""),
        variant: typeof line.variant === "string" && line.variant ? line.variant.slice(0, 200) : undefined,
        price: Number(line.price),
        qty: Number(line.qty),
      };
    });
    return lines.every((line) => line.slug && Number.isFinite(line.price)) ? lines : undefined;
  } catch {
    return undefined;
  }
}

/** Places an order (no online payment). Prices are re-checked against the live catalog. */
export async function placeOrder(_state: CheckoutState, formData: FormData): Promise<CheckoutState> {
  // Honeypot: real shoppers never see or fill this field.
  if (text(formData, "company")) return { error: "Something went wrong. Please try again." };

  const errors: Record<string, string> = {};
  const name = text(formData, "name", 120);
  const email = text(formData, "email", 200).toLowerCase();
  const phone = text(formData, "phone", 30);
  const address = text(formData, "address", 300);
  const city = text(formData, "city", 100);
  const state = text(formData, "state", 50);
  const notes = text(formData, "notes", 500);
  const paymentMethod = text(formData, "paymentMethod") as PaymentMethod;

  if (name.length < 2) errors.name = "Enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.email = "Enter a valid email address.";
  const digits = phone.replace(/\D/g, "");
  if (!/^\+?[\d\s()-]+$/.test(phone) || digits.length < 10 || digits.length > 15) {
    errors.phone = "Enter a valid phone number, e.g. 0803 123 4567.";
  }
  if (address.length < 5) errors.address = "Enter your delivery address.";
  if (city.length < 2) errors.city = "Enter your city or town.";
  if (!nigerianStates.includes(state)) errors.state = "Choose your state.";
  if (!paymentMethods.some((method) => method.value === paymentMethod)) errors.paymentMethod = "Choose how you’ll pay.";

  const cart = parseCart(String(formData.get("cart") ?? ""));
  if (!cart) return { error: "Your cart is empty or couldn’t be read. Please add your items again." };
  if (Object.keys(errors).length) return { error: "Please check the highlighted fields.", fieldErrors: errors };

  const products = await listProducts();
  const problems: NonNullable<CheckoutState>["problems"] = [];
  const lines: OrderLine[] = [];

  for (const item of cart) {
    const product = products.find((candidate) => candidate.slug === item.slug);
    const qty = Math.trunc(item.qty);
    if (!product) {
      problems.push({ slug: item.slug, variant: item.variant, message: "This item is no longer available." });
    } else if (product.status !== "available") {
      problems.push({ slug: item.slug, variant: item.variant, message: `${product.shortName} is not available to order right now.` });
    } else if (!isAllowedPrice(product, item.price)) {
      problems.push({
        slug: item.slug,
        variant: item.variant,
        message: `The price of ${product.shortName} has changed. Please remove it and add it again.`,
      });
    } else if (!(qty >= 1 && qty <= MAX_LINE_QTY)) {
      problems.push({ slug: item.slug, variant: item.variant, message: `Choose between 1 and ${MAX_LINE_QTY} of ${product.shortName}.` });
    } else {
      lines.push({ slug: product.slug, name: product.name, variant: item.variant, price: item.price, qty, image: product.image });
    }
  }

  if (problems.length) {
    return { error: "Some items in your cart need attention before you can order.", problems };
  }

  const subtotal = Math.round(lines.reduce((sum, line) => sum + line.price * line.qty, 0) * 100) / 100;
  const deliveryFee = 0;

  const order = await createOrder({
    customer: { name, email, phone },
    delivery: { address, city, state, ...(notes && { notes }) },
    paymentMethod,
    lines,
    subtotal,
    deliveryFee,
    total: subtotal + deliveryFee,
  });

  redirect(`/checkout/success/${order.id}`);
}
