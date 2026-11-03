"use client";

import Image from "next/image";
import { useState } from "react";

import { Carousel, type CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { type Expert, experts, sliderOrder } from "@/data/experts";

const slides = sliderOrder
  .map((name) => experts.find((expert) => expert.name === name))
  .filter((expert): expert is Expert => Boolean(expert));

export function ExpertSlider() {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <section className="bg-[#f9f9f9] py-[88px]">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-3 px-5 lg:px-32">
        <div className="flex items-center gap-2">
          <Image src="/images/home/reviews-stars.png" alt="5 stars" width={106} height={18} />
          <p className="text-xs leading-[18px] tracking-[0.36px] text-stone">1200+ Verified 5 Star Reviews</p>
        </div>
        <h2 className="text-[26px] leading-[1.25] font-medium tracking-[0.015em] text-ink sm:text-[32px]">
          What experts are saying about hydrogen water
        </h2>
      </div>

      <Carousel setApi={setApi} opts={{ align: "center", loop: true }} className="pt-14">
        <CarouselContent className="-ml-[30px]">
          {slides.map((expert) => (
            <CarouselItem key={expert.name} className="basis-[290px] pl-[30px]">
              <figure className="relative h-[465px] overflow-hidden rounded-2xl border-[0.8px] border-[#b3b3b3]">
                <Image src={expert.portrait} alt={expert.name} fill sizes="260px" className="object-cover" />
                {expert.hasVideo && (
                  // The video itself isn't in the design yet, so the control is shown but inactive.
                  <span
                    aria-disabled="true"
                    className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-base leading-5 font-semibold tracking-[0.48px] text-ink"
                  >
                    <Image src="/images/experts/icon-play.svg" alt="" width={24} height={24} />
                    Play
                  </span>
                )}
                <figcaption className="absolute inset-x-0 bottom-0 bg-[#3f3f3f]/45 p-6 text-mist backdrop-blur-[25px]">
                  {expert.quote && (
                    <blockquote className="pb-5 text-sm leading-[17.5px] tracking-[0.48px]">“{expert.quote}”</blockquote>
                  )}
                  <p className="text-sm leading-[17.5px] font-medium tracking-[0.48px]">{expert.name}</p>
                  <p className="pt-1 text-xs leading-[15px] tracking-[0.48px]">{expert.title}</p>
                </figcaption>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="mx-auto flex max-w-[1600px] items-start justify-between gap-6 px-5 pt-7 lg:pr-52 lg:pl-32">
        <p className="text-xs leading-[15px] tracking-[0.48px] text-[#666]">
          *These are individual experiences, results may vary.
        </p>
        <div className="flex gap-2">
          {(["prev", "next"] as const).map((direction) => (
            <button
              key={direction}
              type="button"
              aria-label={direction === "prev" ? "Previous expert" : "Next expert"}
              onClick={() => (direction === "prev" ? api?.scrollPrev() : api?.scrollNext())}
              className="flex items-center justify-center rounded-full bg-white p-2"
            >
              <Image src={`/images/experts/icon-${direction}.svg`} alt="" width={16} height={16} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
