import "server-only";

import { accessoryPages } from "@/data/product-pages/accessories";
import { machinePages } from "@/data/product-pages/machines";
import type { PriceSet, Product } from "@/data/products";
import { prebioticPacks, prebioticPrices } from "@/lib/pricing";

export type PriceEditor = {
  /** Accessory pages carry their own base price, separate from the shop card price. */
  base?: { default: PriceSet; subscribe: boolean };
  variants?: { label: string; subscribe: boolean; options: { name: string; default: PriceSet }[] };
};

/** What the admin can price for this product's designed page, with the design's defaults as placeholders. */
export function priceEditorFor(product: Product): PriceEditor {
  const accessory = accessoryPages[product.slug];
  if (accessory) {
    const base: PriceSet = {
      price: accessory.price.oneTime,
      compareAt: accessory.price.compareAt,
      subscribe: accessory.price.subscribe,
    };
    const options = accessory.variants?.options ?? [];
    const subscribe = accessory.price.subscribe !== undefined || options.some((option) => option.price?.subscribe !== undefined);
    return {
      base: { default: base, subscribe },
      variants: accessory.variants && {
        label: accessory.variants.label,
        subscribe,
        options: options.map((option) => ({
          name: option.name,
          default: option.price
            ? { price: option.price.oneTime, compareAt: option.price.compareAt, subscribe: option.price.subscribe }
            : (product.pagePrice ?? base),
        })),
      },
    };
  }

  const machine = machinePages[product.slug]?.buyBox.variants;
  if (machine) {
    return {
      variants: {
        label: machine.label,
        subscribe: false,
        options: machine.options.map((option) => ({
          name: option.name,
          default: { price: product.price ?? 0, compareAt: product.compareAtPrice },
        })),
      },
    };
  }

  if (product.slug === "hydrogen-prebiotic") {
    const withoutOverrides = { ...product, variantPrices: undefined };
    return {
      variants: {
        label: "Pack size",
        subscribe: true,
        options: prebioticPacks.map((pack) => {
          const prices = prebioticPrices(withoutOverrides, pack);
          return {
            name: pack.label,
            default: { price: prices.oneTime, compareAt: prices.compare || undefined, subscribe: prices.subscribe },
          };
        }),
      },
    };
  }

  return {};
}

/** Slugs that render a designed page; anything else uses the generic page. */
export function hasDesignedPage(slug: string) {
  return (
    slug in accessoryPages ||
    slug in machinePages ||
    ["echo-flask", "echo-forty", "echo-one", "hydrogen-prebiotic"].includes(slug)
  );
}
