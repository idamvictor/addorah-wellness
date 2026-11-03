"use client";

import { useState } from "react";

import type { MachineBuyBox } from "@/data/product-pages/machine";
import type { Product } from "@/data/products";
import { formatNGN } from "@/lib/format";
import { variantPrice } from "@/lib/pricing";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/providers/app-store-provider";

const label = "font-heading text-sm leading-[21px] tracking-[1.96px] text-[#cdd3d8] uppercase";

/** Compact dark buy card used beside the "Speak to a Specialist" CTA. */
export function MiniBuyCard({
  product,
  blurb,
  variants,
}: {
  product: Product;
  blurb?: string;
  variants?: MachineBuyBox["variants"];
}) {
  const addItem = useAppStore((state) => state.addItem);
  const [variant, setVariant] = useState(variants?.options[0]?.name);
  const { price, compareAt } = variantPrice(product, variant);

  return (
    <div className="rounded-2xl border-[0.8px] border-white/20 p-6 sm:p-11">
      <p className={label}>The {product.shortName}</p>
      <p className="flex flex-wrap items-baseline gap-x-3 pt-4">
        <span className="text-[28px] leading-[51px] font-semibold tracking-[-0.01em] sm:text-[34px]">{formatNGN(price)}</span>
        {compareAt && (
          <span className="text-[19px] leading-[28.5px] text-[#807c85] line-through">{formatNGN(compareAt)}</span>
        )}
      </p>
      {blurb && <p className="pt-3.5 text-[15px] leading-6 text-pretty text-[#a7a5a6]">{blurb}</p>}

      {variants && (
        <div className="pt-[22px]">
          <p className={label}>{variants.label}</p>
          <div role="radiogroup" aria-label={variants.label} className="flex flex-wrap gap-2.5 pt-3">
            {variants.options.map((option) => {
              const selected = option.name === variant;
              return (
                <button
                  key={option.name}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => setVariant(option.name)}
                  className={cn(
                    "flex items-center gap-[9px] rounded-full border-[0.8px] px-[22px] py-[11px] text-[14.5px] leading-[21.75px] font-medium transition-colors",
                    selected ? "border-white bg-white text-ink" : "border-white/35 text-white hover:border-white",
                  )}
                >
                  {option.swatch && <span aria-hidden className="size-6 rounded-full" style={{ background: option.swatch }} />}
                  {option.name}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => addItem({ slug: product.slug, price, variant })}
        className="mt-[26px] h-[67px] w-full rounded-lg bg-white text-lg leading-[27px] font-semibold text-ink transition-opacity hover:opacity-90"
      >
        Add to cart
      </button>
    </div>
  );
}
