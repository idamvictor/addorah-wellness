"use client";

import Image from "next/image";
import { useState } from "react";

import { experts } from "@/data/experts";

const tabbed = experts.filter((expert) => expert.quote);

export function ExpertEndorsements() {
  const [active, setActive] = useState(0);
  const featured = tabbed[active];

  return (
    <section className="bg-[#f7f7f7] px-5 py-20 lg:py-[120px]">
      <div className="mx-auto max-w-[1150px]">
        <h2 className="text-[26px] leading-[1.2] font-semibold text-black sm:text-[32px]">
          Trusted by experts and top performers
        </h2>

        <div role="tablist" aria-label="Experts" className="-mx-5 flex gap-4 overflow-x-auto px-5 pt-8 sm:mx-0 sm:px-0">
          {tabbed.map((expert, i) => (
            <button
              key={expert.name}
              type="button"
              role="tab"
              id={`expert-tab-${i}`}
              aria-selected={i === active}
              aria-controls="expert-panel"
              onClick={() => setActive(i)}
              className="relative shrink-0 pb-1 text-base leading-6 whitespace-nowrap text-[#666] transition-colors hover:text-black aria-selected:font-medium aria-selected:text-black"
            >
              {expert.name}
              {i === active && <span aria-hidden className="absolute inset-x-0 bottom-0 h-0.5 bg-brand-gradient" />}
            </button>
          ))}
        </div>

        <div
          id="expert-panel"
          role="tabpanel"
          aria-labelledby={`expert-tab-${active}`}
          className="mt-[60px] grid overflow-hidden rounded-xl bg-white md:min-h-[400px] md:grid-cols-[minmax(0,560px)_1fr]"
        >
          <div className="relative aspect-[560/400] md:aspect-auto">
            <Image
              key={featured.name}
              src={featured.feature ?? featured.portrait}
              alt={featured.name}
              fill
              sizes="(min-width: 768px) 560px, 100vw"
              className="object-cover object-top"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-10 md:px-12">
            <blockquote className="pb-5 text-lg leading-[1.6] text-[#333] sm:text-[22px]">
              &ldquo;{featured.quote}&rdquo;
            </blockquote>
            <p className="text-[22px] leading-[33px] font-medium text-black">{featured.name}</p>
            <p className="pt-2 text-sm leading-[16.8px] text-[#666]">{featured.title}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
