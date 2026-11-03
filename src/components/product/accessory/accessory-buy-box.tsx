"use client";

import Image from "next/image";
import { useState } from "react";

import { AccessoryBlocks } from "@/components/product/accessory/accessory-blocks";
import { StarRating } from "@/components/sections/star-rating";
import type { AccessoryPageContent } from "@/data/product-pages/accessory";
import type { Product } from "@/data/products";
import { formatNGN } from "@/lib/format";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/providers/app-store-provider";

const shared = "/images/products/shared";

function badges(kind: AccessoryPageContent["badges"]) {
  if (!kind) return [];
  // The design's "Live, USA-Based Customer Service" is the manufacturer's; neutral wording here.
  const list = [
    { icon: `${shared}/badge-money-back.svg`, bold: "60 Day Risk FREE", rest: "Money-Back Guarantee" },
    { icon: `${shared}/badge-support.svg`, bold: "Live Support", rest: "Real People, Real Answers" },
    { icon: `${shared}/badge-shipping.png`, bold: "FREE", rest: "Shipping on eligible orders" },
  ];
  if (kind === "basic+warranty-5") list.push({ icon: `${shared}/badge-warranty-5yr.png`, bold: "5 Year", rest: "Warranty" });
  return list;
}

export function AccessoryBuyBox({ product, content }: { product: Product; content: AccessoryPageContent }) {
  const addItem = useAppStore((state) => state.addItem);
  const options = content.variants?.options;
  const [variantIndex, setVariantIndex] = useState(0);
  const [plan, setPlan] = useState<"once" | "subscribe">("once");

  const variant = options?.[variantIndex];
  const price = variant?.price ?? content.price;
  const current = plan === "subscribe" && price.subscribe !== undefined ? price.subscribe : price.oneTime;

  const addToCart = () => {
    const label = [variant?.name, plan === "subscribe" ? "Subscribe & Save" : undefined].filter(Boolean).join(" · ");
    addItem({ slug: product.slug, price: current, variant: label || undefined });
  };

  return (
    <div className="flex flex-col gap-4">
      <a href={content.reviews?.length ? "#accessory-reviews" : undefined} className="flex items-center gap-2">
        <StarRating rating={content.rating} starClassName="h-[18px]" />
        <span className="text-sm leading-[22.4px] text-ink">
          {content.reviewCount} {content.reviewCount === 1 ? "Review" : "Reviews"}
        </span>
      </a>

      <h1 className="font-heading text-[30px] leading-none text-ink sm:text-[36px]">{product.name}</h1>

      {content.variants && options && (
        <div className="text-center">
          <p className="text-sm leading-[21px] text-ink">
            <span className="text-[#1a1a1a] opacity-70">{content.variants.label}</span> {variant?.name}
          </p>
          <div role="radiogroup" aria-label={content.variants.label} className="flex flex-wrap justify-center gap-2 pt-4">
            {options.map((option, i) => (
              <button
                key={option.name}
                type="button"
                role="radio"
                aria-checked={i === variantIndex}
                onClick={() => setVariantIndex(i)}
                className={cn(
                  "rounded-2xl border-[0.8px] px-5 py-2 text-sm leading-[21px] text-ink transition-colors",
                  i === variantIndex ? "border-black" : "border-[#d1d5db] hover:border-ink",
                )}
              >
                {option.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {price.subscribe !== undefined && (
        <div role="radiogroup" aria-label="Purchase option" className="flex flex-col gap-2.5">
          {(
            [
              { key: "once", label: "One Time", amount: price.oneTime },
              { key: "subscribe", label: "Subscribe", amount: price.subscribe },
            ] as const
          ).map((row) => (
            <button
              key={row.key}
              type="button"
              role="radio"
              aria-checked={plan === row.key}
              onClick={() => setPlan(row.key)}
              className={cn(
                "flex items-center gap-2.5 rounded-[5px] border-[0.8px] p-2.5 text-left text-base leading-6 text-ink shadow-[0_0_5px_rgba(23,24,24,0.05),0_1px_2px_rgba(0,0,0,0.07)]",
                plan === row.key ? "border-black" : "border-transparent",
              )}
            >
              <span
                aria-hidden
                className={cn(
                  "flex size-5 shrink-0 items-center justify-center rounded-full border-[1.5px] border-ink",
                )}
              >
                {plan === row.key && <span className="size-2.5 rounded-full bg-ink" />}
              </span>
              <span className="flex-1">
                {row.label}
                {row.key === "subscribe" && <span className="pl-3 text-[#0fa573]">Save 15%</span>}
              </span>
              <span>NGN {formatNGN(row.amount).replace(/^₦/, "")}</span>
            </button>
          ))}
        </div>
      )}

      <p className="flex flex-wrap items-baseline gap-2 text-2xl leading-9 text-black">
        {price.compareAt && <span className="line-through">{formatNGN(price.compareAt)}</span>}
        <span className="font-medium">{formatNGN(current)}</span>
      </p>

      {content.notice && <p className="pb-2.5 font-heading text-sm leading-[18px] text-black">{content.notice}</p>}

      <button
        type="button"
        onClick={addToCart}
        className="h-[51px] rounded-lg border-[1.6px] border-ink bg-ink text-base leading-4 font-medium tracking-[0.02em] text-white transition-opacity hover:opacity-90"
      >
        Add to Cart
      </button>

      {content.badges && (
        <ul className="grid grid-cols-2 gap-4 pt-8 sm:grid-cols-[repeat(auto-fit,minmax(150px,1fr))]">
          {badges(content.badges).map((badge) => (
            <li key={badge.bold} className="flex items-center gap-2 text-[15px] leading-[22.5px] text-ink">
              <Image src={badge.icon} alt="" width={28} height={28} className="size-7 shrink-0 object-contain" />
              <span>
                <strong className="font-bold">{badge.bold}</strong> {badge.rest}
              </span>
            </li>
          ))}
        </ul>
      )}

      <hr className="border-[#e5e7eb]" />
      <AccessoryBlocks blocks={content.description} />

      {(content.features || content.specs) && (
        <details className="group border-t-[0.8px] border-[#e5e7eb] py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between text-base leading-6 font-bold text-ink [&::-webkit-details-marker]:hidden">
            Product Features
            <span aria-hidden className="flex size-6 items-center justify-center rounded-full bg-[#ebebeb] text-lg leading-none">
              <span className="group-open:hidden">+</span>
              <span className="hidden group-open:inline">−</span>
            </span>
          </summary>
          {content.features && (
            <div className="border-b-[0.8px] border-[#e5e7eb] pt-10 pb-5">
              <AccessoryBlocks blocks={content.features} bold />
            </div>
          )}
          {content.specs && (
            <div className="pt-5">
              <p className="text-base leading-6 text-ink">Product Specs</p>
              <AccessoryBlocks blocks={content.specs} bold className="pt-5" />
            </div>
          )}
        </details>
      )}
    </div>
  );
}
