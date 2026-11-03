"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { ProductCard } from "@/components/sections/product-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getCategory, shopFilterCategories } from "@/data/categories";
import type { Product } from "@/data/products";
import { cn } from "@/lib/utils";
import { useCatalog } from "@/providers/catalog-provider";

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price, low to high" },
  { value: "price-desc", label: "Price, high to low" },
  { value: "name-asc", label: "Alphabetically, A–Z" },
] as const;

type SortValue = (typeof sortOptions)[number]["value"];

// Waitlist items have no price; keep them at the end of price sorts.
const priceOf = (product: Product, fallback: number) => product.price ?? fallback;

function sortProducts(list: Product[], sort: SortValue) {
  switch (sort) {
    case "price-asc":
      return [...list].sort((a, b) => priceOf(a, Infinity) - priceOf(b, Infinity));
    case "price-desc":
      return [...list].sort((a, b) => priceOf(b, -Infinity) - priceOf(a, -Infinity));
    case "name-asc":
      return [...list].sort((a, b) => a.name.localeCompare(b.name));
    default:
      return list;
  }
}

const chipClass =
  "flex h-[34px] shrink-0 items-center justify-center rounded-lg border-[0.8px] border-stone px-3 text-sm leading-[14px] font-medium tracking-[0.28px] text-stone transition-colors hover:border-ink hover:text-ink";
const chipActiveClass = "border-ink bg-ink text-white hover:text-white";

export function ShopGrid() {
  const products = useCatalog();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const category = getCategory(searchParams.get("category"));
  const sortParam = searchParams.get("sort");
  const sort: SortValue = sortOptions.some((option) => option.value === sortParam)
    ? (sortParam as SortValue)
    : "featured";

  const visible = sortProducts(
    category ? products.filter((product) => product.categories.includes(category.slug)) : products,
    sort,
  );

  // Categories reached from the header dropdown get a chip even if they are
  // not one of the default filter chips.
  const chipSlugs =
    category && !shopFilterCategories.includes(category.slug)
      ? [...shopFilterCategories, category.slug]
      : shopFilterCategories;

  const hrefFor = (slug?: string) => {
    const params = new URLSearchParams(searchParams);
    if (slug) params.set("category", slug);
    else params.delete("category");
    const query = params.toString();
    return query ? `${pathname}?${query}` : pathname;
  };

  const setSort = (value: SortValue | null) => {
    const params = new URLSearchParams(searchParams);
    if (!value || value === "featured") params.delete("sort");
    else params.set("sort", value);
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  return (
    <>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <nav aria-label="Filter by category" className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
          <ul className="flex gap-2">
            <li>
              <Link href={hrefFor()} scroll={false} className={cn(chipClass, !category && chipActiveClass)}>
                Shop All
              </Link>
            </li>
            {chipSlugs.map((slug) => (
              <li key={slug}>
                <Link
                  href={hrefFor(slug)}
                  scroll={false}
                  className={cn(chipClass, category?.slug === slug && chipActiveClass)}
                >
                  {getCategory(slug)?.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Select
          items={sortOptions}
          value={sort}
          onValueChange={(value) => setSort(value as SortValue | null)}
        >
          <SelectTrigger
            aria-label="Sort products"
            className="h-6 gap-2 self-end border-0 bg-transparent p-0 text-base leading-6 font-medium text-ink shadow-none focus-visible:ring-0 [&>[data-slot=select-icon]]:hidden"
          >
            <span>Sort by</span>
            <span className="sr-only">
              <SelectValue />
            </span>
            <Image src="/images/shop/sort-dropdown.png" alt="" width={24} height={24} />
          </SelectTrigger>
          <SelectContent align="end">
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {visible.length > 0 ? (
        <ul className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:gap-x-12 lg:gap-y-8 xl:grid-cols-3">
          {visible.map((product) => (
            <li key={product.slug}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-16 flex flex-col items-center gap-4 py-16 text-center">
          <p className="text-lg text-ink">No products in {category?.name} yet.</p>
          <Link href={hrefFor()} scroll={false} className="text-sm font-semibold underline">
            View all products
          </Link>
        </div>
      )}
    </>
  );
}
