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

const arrowClass =
  "absolute top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#596f77]/85 text-xl leading-[30px] text-white transition-opacity hover:bg-[#596f77] disabled:opacity-40";

/** Swipeable image carousel with arrows and dots, as on the waitlist product pages. */
export function ProductGallery({
  images,
  className,
  priority = false,
}: {
  images: GalleryImage[];
  className?: string;
  priority?: boolean;
}) {
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
    <div className={cn("flex flex-col", className)}>
      <Carousel setApi={setApi} opts={{ loop: images.length > 1 }} className="overflow-hidden rounded-xl">
        <CarouselContent className="ml-0">
          {images.map((image, i) => (
            <CarouselItem key={image.src} className="pl-0">
              <div className="relative aspect-square bg-[#f4f4f4]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={priority && i === 0}
                  sizes="(min-width: 1024px) 592px, 100vw"
                  className="object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {images.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={() => api?.scrollPrev()}
              className={cn(arrowClass, "left-4")}
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={() => api?.scrollNext()}
              className={cn(arrowClass, "right-4")}
            >
              →
            </button>
          </>
        )}
      </Carousel>
      {images.length > 1 && (
        <div className="flex justify-center gap-2 pt-4">
          {images.map((image, i) => (
            <button
              key={image.src}
              type="button"
              aria-label={`Show image ${i + 1}`}
              aria-current={i === selected}
              onClick={() => api?.scrollTo(i)}
              className="size-2 rounded-[4px] bg-[#d0d0d0] aria-[current=true]:bg-ink"
            />
          ))}
        </div>
      )}
    </div>
  );
}
