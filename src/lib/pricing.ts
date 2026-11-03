import type { AccessoryPageContent, AccessoryPrice } from "@/data/product-pages/accessory";
import type { PriceSet, Product } from "@/data/products";

const toAccessory = (set: PriceSet): AccessoryPrice => ({
  oneTime: set.price,
  compareAt: set.compareAt,
  subscribe: set.subscribe,
});

/** Admin overrides win over the prices written into the designed page. */
export function accessoryPrice(product: Product, content: AccessoryPageContent, variant?: string): AccessoryPrice {
  const override = variant ? product.variantPrices?.[variant] : undefined;
  if (override) return toAccessory(override);
  const designed = content.variants?.options.find((option) => option.name === variant)?.price;
  if (designed) return designed;
  return product.pagePrice ? toAccessory(product.pagePrice) : content.price;
}

/** Machine pages: one price for every variant unless the admin set one. */
export function variantPrice(product: Product, variant?: string): { price: number; compareAt?: number } {
  const override = variant ? product.variantPrices?.[variant] : undefined;
  if (override) return { price: override.price, compareAt: override.compareAt };
  return { price: product.price ?? 0, compareAt: product.compareAtPrice };
}

export const prebioticPacks = [
  { label: "30-Day Supply", multiple: 1 },
  { label: "60-day Supply", multiple: 2 },
  { label: "90-day Supply", multiple: 3 },
];

const PREBIOTIC_SUBSCRIBE_DISCOUNT = 0.3;

export function prebioticPrices(product: Product, pack = prebioticPacks[0]) {
  const override = product.variantPrices?.[pack.label];
  const oneTime = override?.price ?? (product.price ?? 0) * pack.multiple;
  const compare = override ? (override.compareAt ?? 0) : (product.compareAtPrice ?? 0) * pack.multiple;
  const subscribe = override?.subscribe ?? Math.round(oneTime * (1 - PREBIOTIC_SUBSCRIBE_DISCOUNT) * 100) / 100;
  return { oneTime, compare, subscribe, saving: oneTime - subscribe };
}
