import "server-only";

import { accessoryPages } from "@/data/product-pages/accessories";
import { machinePages } from "@/data/product-pages/machines";
import type { Product } from "@/data/products";
import { accessoryPrice, prebioticPacks, prebioticPrices, variantPrice } from "@/lib/pricing";

/**
 * Every unit price a shopper can legitimately put in the cart for this product
 * (base, page price, each variant / pack, one-time or subscribe). Checkout rejects
 * any cart line whose price isn't in this set, so client prices are never trusted.
 */
export function allowedPrices(product: Product): number[] {
  const prices = new Set<number>();
  const add = (value: number | undefined) => {
    if (value !== undefined && Number.isFinite(value)) prices.add(Math.round(value * 100) / 100);
  };

  add(product.price);

  const accessory = accessoryPages[product.slug];
  if (accessory) {
    for (const name of [undefined, ...(accessory.variants?.options.map((option) => option.name) ?? [])]) {
      const price = accessoryPrice(product, accessory, name);
      add(price.oneTime);
      add(price.subscribe);
    }
  }

  const machine = machinePages[product.slug];
  if (machine) {
    for (const option of machine.buyBox.variants?.options ?? []) add(variantPrice(product, option.name).price);
  }

  if (product.slug === "hydrogen-prebiotic") {
    for (const pack of prebioticPacks) {
      const price = prebioticPrices(product, pack);
      add(price.oneTime);
      add(price.subscribe);
    }
  }

  return [...prices];
}

export function isAllowedPrice(product: Product, price: number) {
  return allowedPrices(product).some((allowed) => Math.abs(allowed - price) < 0.005);
}
