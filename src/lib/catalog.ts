import "server-only";

import { cacheLife, cacheTag } from "next/cache";

import { type Product, seedProducts } from "@/data/products";
import { jsonStore } from "@/lib/json-store";

export { DATA_DIR } from "@/lib/json-store";

/** Live catalog managed from /admin (data/catalog.json). Seeded from `seedProducts` on first read. */
const store = jsonStore<{ products: Product[] }>("catalog.json", () => ({ products: seedProducts }));

export const CATALOG_TAG = "catalog";

async function readProducts(): Promise<Product[]> {
  const data = await store.read();
  if (!Array.isArray(data.products)) throw new Error("catalog.json has no products array");
  return data.products;
}

/** All products, in shop order. Cached until an admin write calls `updateTag(CATALOG_TAG)`. */
export async function listProducts(): Promise<Product[]> {
  "use cache";
  cacheTag(CATALOG_TAG);
  cacheLife("max");
  return readProducts();
}

export async function getProduct(slug: string): Promise<Product | undefined> {
  const products = await listProducts();
  return products.find((product) => product.slug === slug);
}

/**
 * Read-modify-write the catalog from an uncached read, one mutation at a time.
 * Callers (server actions) must call `updateTag(CATALOG_TAG)` afterwards.
 */
export function mutateCatalog<T>(change: (products: Product[]) => Promise<{ products: Product[]; result: T }>): Promise<T> {
  return store.mutate(async (data) => {
    const { products, result } = await change(data.products);
    return { data: { products }, result };
  });
}
