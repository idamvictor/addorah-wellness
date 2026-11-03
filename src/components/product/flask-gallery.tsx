"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { GalleryImage } from "@/data/product-pages/waitlist";
import { cn } from "@/lib/utils";

/** Main image carousel with a vertical thumbnail rail (stacks below on mobile). */
export function FlaskGallery({ images }: { images: GalleryImage[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <div className="flex flex-col-reverse gap-4 md:flex-row">
      <ul className="flex gap-4 overflow-x-auto md:max-h-[600px] md:w-16 md:shrink-0 md:flex-col md:overflow-y-auto md:overflow-x-visible">
        {images.map((image, i) => (
          <li key={image.src} className="shrink-0">
            <button
              type="button"
              aria-label={`Show image ${i + 1}`}
              aria-current={i === selected}
              onClick={() => api?.scrollTo(i)}
              className="flex flex-col gap-1"
            >
              <Image src={image.src} alt="" width={64} height={64} className="size-16 rounded-[4px] object-cover" />
              <span className={cn("h-0.5 w-16", i === selected ? "bg-black" : "bg-transparent")} />
            </button>
          </li>
        ))}
      </ul>

      <div className="relative min-w-0 flex-1">
        <Carousel setApi={setApi} opts={{ loop: true }}>
          <CarouselContent className="-ml-2.5">
            {images.map((image, i) => (
              <CarouselItem key={image.src} className="pl-2.5">
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-haze">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority={i === 0}
                    sizes="(min-width: 1280px) 764px, (min-width: 768px) 55vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute right-4 bottom-4 flex gap-5">
          {(["prev", "next"] as const).map((direction) => (
            <button
              key={direction}
              type="button"
              aria-label={direction === "prev" ? "Previous image" : "Next image"}
              onClick={() => (direction === "prev" ? api?.scrollPrev() : api?.scrollNext())}
              className="flex size-10 items-center justify-center rounded-full bg-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.15)]"
            >
              <Image
                src={`/images/products/echo-flask/icon-${direction}.png`}
                alt=""
                width={16}
                height={16}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
