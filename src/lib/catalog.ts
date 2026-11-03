import "server-only";

import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";

import { cacheLife, cacheTag } from "next/cache";

import { type Product, seedProducts } from "@/data/products";

/** Live catalog managed from /admin. Seeded from `seedProducts` on first read. */
export const DATA_DIR = path.join(process.cwd(), "data");
const CATALOG_FILE = path.join(DATA_DIR, "catalog.json");

export const CATALOG_TAG = "catalog";

type CatalogFile = { products: Product[] };

async function readCatalogFile(): Promise<Product[]> {
  try {
    const raw = await readFile(CATALOG_FILE, "utf8");
    const parsed = JSON.parse(raw) as CatalogFile;
    if (!Array.isArray(parsed.products)) throw new Error("catalog.json has no products array");
    return parsed.products;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== "ENOENT") throw error;
    await writeCatalogFile(seedProducts);
    return seedProducts;
  }
}

async function writeCatalogFile(products: Product[]) {
  await mkdir(DATA_DIR, { recursive: true });
  const tmp = `${CATALOG_FILE}.${process.pid}.${Date.now()}.tmp`;
  await writeFile(tmp, `${JSON.stringify({ products } satisfies CatalogFile, null, 2)}\n`, "utf8");
  await rename(tmp, CATALOG_FILE);
}

/** All products, in shop order. Cached until an admin write calls `updateTag(CATALOG_TAG)`. */
export async function listProducts(): Promise<Product[]> {
  "use cache";
  cacheTag(CATALOG_TAG);
  cacheLife("max");
  return readCatalogFile();
}

export async function getProduct(slug: string): Promise<Product | undefined> {
  const products = await listProducts();
  return products.find((product) => product.slug === slug);
}

let queue: Promise<unknown> = Promise.resolve();

/**
 * Read-modify-write the catalog from an uncached read, one mutation at a time.
 * Callers (server actions) must call `updateTag(CATALOG_TAG)` afterwards.
 */
export function mutateCatalog<T>(change: (products: Product[]) => Promise<{ products: Product[]; result: T }>): Promise<T> {
  const run = queue.then(async () => {
    const { products, result } = await change(await readCatalogFile());
    await writeCatalogFile(products);
    return result;
  });
  queue = run.catch(() => undefined);
  return run;
}
