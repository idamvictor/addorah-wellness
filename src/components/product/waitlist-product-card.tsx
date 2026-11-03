"use client";

import Image from "next/image";
import { useState } from "react";

import { ProductGallery } from "@/components/product/product-gallery";
import { WaitlistForm } from "@/components/product/waitlist-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Product } from "@/data/products";
import type { WaitlistPageContent } from "@/data/product-pages/waitlist";
import { formatNGN } from "@/lib/format";
import { cn } from "@/lib/utils";

export function WaitlistProductCard({
  content,
  product,
}: {
  content: WaitlistPageContent;
  product: Product;
}) {
  const { card } = content;
  const [colorIndex, setColorIndex] = useState(0);
  const color = card.colors?.[colorIndex];
  const gallery = color?.gallery ?? card.gallery;

  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto grid max-w-[1240px] items-start gap-14 lg:grid-cols-2">
        {/* Remount on colour change so the carousel starts at the first image. */}
        <ProductGallery key={color?.name ?? "default"} images={gallery} />

        <div className="flex flex-col">
          <h2 className="font-heading text-[44px] leading-none font-normal text-ink sm:text-[57px]">
            {content.title}
          </h2>
          {card.showPrice && product.price !== undefined && (
            <p className="pt-4 text-[28px] leading-[42px] font-semibold text-ink">
              {formatNGN(product.price)}
            </p>
          )}
          <p className="pt-5 text-lg leading-[27px] font-semibold text-ink">{card.shipsNote}</p>
          <p className="pt-3 text-base leading-6 text-stone">{card.description}</p>

          {card.colors && color && (
            <div className="pt-7">
              <p className="text-[15px] leading-[22.5px] font-semibold text-ink">
                Color: <span className="font-normal">{color.name}</span>
              </p>
              <div role="radiogroup" aria-label="Color" className="flex gap-3.5 pt-3">
                {card.colors.map((option, i) => (
                  <button
                    key={option.name}
                    type="button"
                    role="radio"
                    aria-checked={i === colorIndex}
                    aria-label={option.name}
                    onClick={() => setColorIndex(i)}
                    className={cn(
                      "relative size-14 overflow-hidden rounded-full border-[0.8px] bg-[#f4f4f4]",
                      i === colorIndex ? "border-white shadow-[0_0_0_2px_#231f20]" : "border-[#cfcfcf]",
                    )}
                  >
                    <Image src={option.swatch} alt="" fill sizes="56px" className="object-cover" />
                  </button>
                ))}
              </div>
            </div>
          )}

          <p className="pt-6 text-center text-sm leading-[21px] text-stone">{card.guarantee}</p>

          <div className="flex justify-center pt-5 pb-2">
            <WaitlistForm id="waitlist-form" productName={content.title} />
          </div>

          <Accordion className="mt-6 border-t-[0.8px] border-[#e5e5e5]">
            <AccordionItem value="specs" className="border-0">
              <AccordionTrigger className="items-center rounded-none py-5 text-lg leading-[27px] font-medium text-ink hover:no-underline [&>[data-slot=accordion-trigger-icon]]:hidden">
                Specifications
                <Image
                  src="/images/products/shared/icon-chevron-down.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-180"
                />
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <dl>
                  {card.specs.map((spec) => (
                    <div key={spec.label} className="py-1.5 text-[15px] leading-[22.5px]">
                      <dt className="inline font-semibold text-ink">{spec.label}:</dt>{" "}
                      <dd className="inline text-stone">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
