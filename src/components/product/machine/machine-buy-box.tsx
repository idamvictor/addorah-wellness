"use client";

import Image from "next/image";
import { useState } from "react";

import { StarRating } from "@/components/sections/star-rating";
import { InertLink } from "@/components/ui/inert-link";
import type { MachineBuyBox as BuyBoxData } from "@/data/product-pages/machine";
import type { Product } from "@/data/products";
import { formatNGN } from "@/lib/format";
import { variantPrice } from "@/lib/pricing";
import { useProduct } from "@/providers/catalog-provider";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/providers/app-store-provider";

const shared = "/images/products/shared";

function trustBadges(warrantyTitle: string) {
  const years = warrantyTitle.match(/\d+/)?.[0];
  return [
    { icon: `${shared}/badge-money-back.svg`, w: 38, top: "60 Day Risk FREE", bottom: "Money-Back Guarantee" },
    // The design's "Live, USA-Based" support claim is the manufacturer's; neutral wording here.
    { icon: `${shared}/badge-support.svg`, w: 38, top: "Live Support", bottom: "Real People, Real Answers" },
    { icon: `${shared}/badge-shipping.png`, w: 38, top: "FREE SHIPPING", bottom: "On Eligible Orders" },
    { icon: `${shared}/badge-warranty-${years === "5" ? "5" : "10"}yr.png`, w: 44, top: years ? `${years} Year` : "Extended", bottom: "Warranty" },
  ];
}

const microLabel = "font-heading text-sm leading-[21px] tracking-[1.96px] text-stone uppercase";

export function MachineBuyBox({
  product,
  data,
  rating,
}: {
  product: Product;
  data: BuyBoxData;
  rating: number;
}) {
  const addItem = useAppStore((state) => state.addItem);
  const [variant, setVariant] = useState(data.variants?.options[0]?.name);
  const [withAddOn, setWithAddOn] = useState(false);
  const addOnProduct = useProduct(data.addOn?.slug);

  const { price, compareAt } = variantPrice(product, variant);
  const savings = compareAt ? compareAt - price : 0;

  const addToCart = () => {
    addItem({ slug: product.slug, price, variant });
    if (withAddOn && addOnProduct?.price !== undefined) {
      addItem({ slug: addOnProduct.slug, price: addOnProduct.price });
    }
  };

  return (
    <div className="flex flex-col">
      <a href="#reviews-heading" className="flex items-center gap-2 pb-4">
        <StarRating rating={rating} starClassName="h-[18px]" />
        <span className="text-xs leading-3 text-ink/70">{product.reviewCount} Reviews</span>
      </a>

      <h1 className="font-heading text-[30px] leading-none font-normal text-balance text-ink sm:text-[36px]">{product.name}</h1>
      <p className="pt-[18px] text-lg leading-[27px] text-pretty text-ink">{data.intro}</p>

      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 pt-[30px]">
        <span className="text-[28px] leading-[51px] font-semibold tracking-[-0.01em] text-ink sm:text-[34px]">
          {formatNGN(price)}
        </span>
        {compareAt && (
          <span className="text-[19px] leading-[28.5px] text-[#807c85] line-through">{formatNGN(compareAt)}</span>
        )}
        {savings > 0 && <span className="text-sm leading-[21px] text-[#807c85]">Save {formatNGN(savings)}</span>}
      </div>

      {data.variants && (
        <div className="pt-[30px]">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <p className={microLabel}>{data.variants.label}</p>
            {data.variants.hint && <p className="text-[13px] leading-[19.5px] text-[#807c85]">{data.variants.hint}</p>}
          </div>
          <div role="radiogroup" aria-label={data.variants.label} className="flex flex-wrap gap-2.5 pt-3.5">
            {data.variants.options.map((option) => {
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
                    selected ? "border-ink bg-ink text-white" : "border-[#deddde] bg-white text-ink hover:border-ink",
                  )}
                >
                  {option.swatch && (
                    <span aria-hidden className="size-6 rounded-full" style={{ background: option.swatch }} />
                  )}
                  {option.name}
                </button>
              );
            })}
          </div>
          {data.variants.note && (
            <p className="pt-3.5 text-[13px] leading-[20.15px] text-pretty text-[#807c85]">{data.variants.note}</p>
          )}
        </div>
      )}

      {data.addOn && addOnProduct && (
        <label className="mt-[26px] flex cursor-pointer items-start gap-4 rounded-lg border-[0.8px] border-[#deddde] bg-white px-5 py-[18px] has-checked:border-ink">
          <input
            type="checkbox"
            checked={withAddOn}
            onChange={(event) => setWithAddOn(event.target.checked)}
            className="mt-0.5 size-[22px] shrink-0 accent-ink"
          />
          <Image src={data.addOn.image} alt="" width={84} height={84} className="size-[84px] shrink-0 object-contain" />
          <span className="flex flex-1 flex-col">
            <span className="flex flex-wrap justify-between gap-x-4 font-semibold text-ink">
              <span className="text-[16.5px] leading-[24.75px]">{data.addOn.title}</span>
              {addOnProduct.price !== undefined && (
                <span className="text-[15px] leading-[22.5px]">+ {formatNGN(addOnProduct.price)}</span>
              )}
            </span>
            <span className="pt-1.5 text-sm leading-[21.7px] text-stone">{data.addOn.body}</span>
          </span>
        </label>
      )}

      <div className="mt-[26px] flex items-start gap-4 rounded-lg border-[0.8px] border-teal bg-mist px-5 py-[18px]">
        <span className="mt-0.5 flex size-[22px] shrink-0 items-center justify-center rounded-[4px] bg-teal">
          <Image src={`${shared}/icon-check-white.svg`} alt="" width={13} height={13} />
        </span>
        <div className="flex-1">
          <p className="flex flex-wrap items-baseline justify-between gap-2">
            <span className="text-[16.5px] leading-[24.75px] font-semibold text-ink">{data.warranty.title}</span>
            <span className="font-heading text-[11px] leading-[16.5px] tracking-[1.54px] text-teal uppercase">Included</span>
          </p>
          <p className="pt-1.5 text-sm leading-[21.7px] text-pretty text-stone">{data.warranty.body}</p>
        </div>
      </div>

      {data.stockNote && (
        <p className="flex items-center gap-2.5 pt-[22px] text-sm leading-[18.2px] tracking-[0.01em]">
          <span aria-hidden className="size-[9px] rounded-full bg-teal shadow-[0_0_0_1.3px_rgba(0,167,181,0.46)]" />
          <span className="font-semibold text-ink">In Stock</span>
          <span className="text-stone">— {data.stockNote}</span>
        </p>
      )}

      <button
        type="button"
        onClick={addToCart}
        className="mt-3.5 h-[67px] rounded-lg bg-ink text-lg leading-[27px] font-semibold text-white transition-opacity hover:opacity-90"
      >
        Add to cart
      </button>
      <p className="pt-3 text-center text-[13px] leading-[19.5px] text-[#807c85]">
        {data.unitNote ?? `${product.shortName}${variant ? ` · ${variant}` : ""}`}
      </p>

      <ul className="grid grid-cols-2 gap-4 pt-[26px] sm:grid-cols-4">
        {trustBadges(data.warranty.title).map((badge) => (
          <li key={badge.top} className="flex flex-col items-center gap-2.5 text-center text-[12.5px] leading-[16.875px]">
            <Image src={badge.icon} alt="" width={badge.w} height={38} className="h-[38px] w-auto" />
            <span>
              <span className="block font-semibold text-ink">{badge.top}</span>
              <span className="block text-stone">{badge.bottom}</span>
            </span>
          </li>
        ))}
      </ul>

      {data.expertLink && (
        <InertLink className="self-center pt-8 text-[15px] leading-[22.5px] font-medium text-teal">{data.expertLink}</InertLink>
      )}

      {data.modes && (
        <ul className="mt-9 grid grid-cols-2 gap-px border-y-[0.8px] border-[#deddde] bg-[#deddde]">
          {data.modes.map((mode) => (
            <li key={mode.title} className="bg-white px-5 pt-[18px] pb-5">
              <Image src={mode.icon} alt="" width={22} height={22} className="size-[22px]" />
              <p className="pt-3.5 font-heading text-[22px] leading-[22px] font-bold tracking-[-0.01em] text-ink">{mode.title}</p>
              <p className="pt-[7px] font-heading text-[12.5px] leading-[18.75px] tracking-[1.5px] text-[#807c85] uppercase">
                {mode.label}
              </p>
            </li>
          ))}
        </ul>
      )}

      <dl className="grid grid-cols-2 gap-[22px] pt-9">
        {data.stats.map((stat) => (
          <div key={stat.label}>
            <dt className="sr-only">{stat.label}</dt>
            <dd>
              <span className="block font-heading text-[26px] leading-[31.5px] font-bold text-ink sm:text-[30px]">{stat.value}</span>
              <span className="block pt-1 text-[13.5px] leading-[20.25px] text-stone">{stat.label}</span>
            </dd>
          </div>
        ))}
      </dl>

      <OwnerQuotes quotes={data.quotes} />
    </div>
  );
}

function OwnerQuotes({ quotes }: { quotes: BuyBoxData["quotes"] }) {
  const [index, setIndex] = useState(0);
  const quote = quotes[index];
  const many = quotes.length > 1;
  const go = (step: number) => setIndex((index + step + quotes.length) % quotes.length);

  return (
    <figure className="mt-9 border-t-[0.8px] border-[#deddde] pt-[30px]" aria-roledescription={many ? "carousel" : undefined}>
      {many && (
        <div className="flex items-baseline justify-between pb-4">
          <p className={microLabel}>What owners say</p>
          <p className="text-[13px] leading-[19.5px] text-[#807c85]" aria-live="polite">
            {index + 1} / {quotes.length}
          </p>
        </div>
      )}
      <p aria-label="5 out of 5 stars" className="text-sm leading-[21px] tracking-[2.24px] text-teal">
        ★★★★★
      </p>
      <blockquote className="min-h-14 pt-3 text-[17px] leading-[26.35px] text-pretty text-ink">“{quote.text}”</blockquote>
      <figcaption className="pt-3.5 text-[13.5px] leading-[20.25px] text-[#807c85]">{quote.by}</figcaption>
      {many && (
        <div className="flex items-center gap-4 pt-[22px]">
          <button
            type="button"
            aria-label="Previous review"
            onClick={() => go(-1)}
            className="flex size-[38px] items-center justify-center rounded-full border-[0.8px] border-[#deddde] bg-white text-[15px]"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next review"
            onClick={() => go(1)}
            className="flex size-[38px] items-center justify-center rounded-full border-[0.8px] border-[#deddde] bg-white text-[15px]"
          >
            →
          </button>
          <div className="flex gap-[7px]">
            {quotes.map((item, i) => (
              <button
                key={item.by}
                type="button"
                aria-label={`Review ${i + 1}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
                className="size-2 rounded-full bg-[#deddde] aria-[current=true]:bg-ink"
              />
            ))}
          </div>
        </div>
      )}
    </figure>
  );
}
