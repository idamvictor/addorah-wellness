"use client";

import type { Product } from "@/data/products";
import { useAppStore } from "@/providers/app-store-provider";

export function SimpleBuyButton({ product }: { product: Product }) {
  const addItem = useAppStore((state) => state.addItem);
  const price = product.price;
  const buyable = product.status === "available" && price !== undefined;

  return (
    <button
      type="button"
      disabled={!buyable}
      onClick={() => buyable && addItem({ slug: product.slug, price })}
      className="h-[51px] rounded-lg border-[1.6px] border-ink bg-ink text-base leading-4 font-medium tracking-[0.02em] text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {product.status === "sold-out" ? "Sold Out" : product.status === "waitlist" ? "Coming Soon" : "Add to Cart"}
    </button>
  );
}
