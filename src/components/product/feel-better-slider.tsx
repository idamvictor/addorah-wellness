"use client";

import Image from "next/image";
import { useState } from "react";

import { Carousel, type CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const base = "/images/products/echo-flask";

const cards = [
  {
    image: `${base}/feel-1.png`,
    icon: `${base}/feel-icon-waves.png`,
    title: "Supercharge Your Metabolism",
    body: "The smallest molecule in the universe, Hydrogen has been studied for its ability to support healthy energy metabolism and redox balance—two key drivers of stamina, metabolic efficiency, and humans who push harder and go further.",
  },
  {
    image: `${base}/feel-2.png`,
    icon: `${base}/feel-icon-grid.png`,
    title: "Upgrade Performance",
    body: "Fuel your cells by supporting the systems behind endurance and recovery. By helping your body manage oxidative stress, it promotes better performance under pressure—whether you’re crushing a workout, a deadline, or both.",
  },
  {
    image: `${base}/feel-3.png`,
    icon: `${base}/feel-icon-sprout.png`,
    title: "Support Whole-Body Vitality",
    body: "Resilience isn’t optional—it’s your edge. Hydrogen water can play a role in cellular signaling, stress recovery, and aging resilience. When your cells bounce back faster, so do you. Stay sharp, stay strong, and live fully charged",
  },
  {
    image: `${base}/feel-4.png`,
    icon: `${base}/feel-icon-waves.png`,
    title: "Recover at the Cellular Level",
    body: "Real recovery starts at the source. Hydrogen-rich water is being explored for its potential to support the body’s natural repair processes. Whether you're training, fasting, or just demanding more from life, hydrogen is your quiet recovery ally.",
  },
  {
    image: `${base}/feel-5.png`,
    icon: `${base}/feel-icon-zigzag.png`,
    title: "Gut Health Meets Immune Support",
    body: "Your gut isn’t just about digestion—it’s a command center for immunity, energy, and mood. Research suggests hydrogen may support gut balance and reduce oxidative load, helping you feel more aligned from the inside out.",
  },
  {
    image: `${base}/feel-6.png`,
    icon: `${base}/feel-icon-focus.png`,
    title: "Gain Clarity & Focus",
    body: "Hydrogen has been studied for its ability to help the body manage inflammation and oxidative stress in the brain—factors that influence focus, alertness, and mental endurance. Stay in the zone, longer.",
  },
];

export function FeelBetterSlider() {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <section className="bg-black pt-[38px]">
      <div className="mx-auto flex max-w-[1600px] items-end justify-between px-5">
        <h2 className="max-w-[280px] font-heading text-[34px] leading-[1.1] font-normal text-white sm:text-[40px]">
          Feel Better. Do Better.
        </h2>
        <div className="flex gap-5">
          {(["prev", "next"] as const).map((direction) => (
            <button
              key={direction}
              type="button"
              aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
              onClick={() => (direction === "prev" ? api?.scrollPrev() : api?.scrollNext())}
              className="p-1"
            >
              <Image
                src={`${base}/feel-arrow.png`}
                alt=""
                width={12}
                height={21}
                className={direction === "next" ? "rotate-180" : undefined}
              />
            </button>
          ))}
        </div>
      </div>

      <Carousel setApi={setApi} opts={{ align: "start", dragFree: true }} className="pt-10 pl-5">
        <CarouselContent className="-ml-5">
          {cards.map((card) => (
            <CarouselItem key={card.title} className="basis-[332px] pl-5">
              <article className="relative h-[416px] overflow-hidden rounded-[20px]">
                <Image src={card.image} alt="" fill sizes="312px" className="object-cover" />
                <div className="absolute inset-x-5 bottom-6 flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <Image src={card.icon} alt="" width={48} height={48} className="size-12 shrink-0" />
                    <h3 className="font-heading text-[22px] leading-[24.2px] font-normal text-white">{card.title}</h3>
                  </div>
                  <p className="text-base leading-6 text-white">{card.body}</p>
                </div>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
