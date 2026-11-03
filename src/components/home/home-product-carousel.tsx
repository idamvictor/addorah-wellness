"use client";

import Image from "next/image";
import Link from "next/link";

import { StarRating } from "@/components/sections/star-rating";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { InertLink } from "@/components/ui/inert-link";
import { type Product, productHref } from "@/data/products";
import { formatNGN } from "@/lib/format";
import { useCatalog } from "@/providers/catalog-provider";

const carouselSlugs = [
  "echo-flask",
  "echo-flow",
  "echo-ro",
  "echo-h2",
  "echo-ultimate",
  "echo-revive",
  "echo-refresh",
  "echo-one",
  "echo-forty",
];

function CarouselBadge({ product }: { product: Product }) {
  if (product.badges.includes("best-seller")) {
    return (
      <span className="absolute top-[27px] left-[26px] rounded-[20px] bg-[linear-gradient(165deg,#726de9_0%,#df689d_97%)] px-3 py-1.5 text-[11px] leading-[16.5px] font-semibold tracking-[1px] text-white uppercase">
        Best Seller
      </span>
    );
  }
  if (product.status === "waitlist") {
    return (
      <span className="absolute top-[27px] left-[26px] rounded-[20px] bg-[linear-gradient(161deg,#667eea_0%,#764ba2_100%)] px-3 py-1.5 text-[11px] leading-[16.5px] font-semibold tracking-[1px] text-white uppercase">
        Waitlist
      </span>
    );
  }
  return null;
}

export function HomeProductCarousel() {
  const catalog = useCatalog();
  const carouselProducts = carouselSlugs
    .map((slug) => catalog.find((product) => product.slug === slug))
    .filter((product): product is Product => Boolean(product));

  return (
    <section className="py-[70px]">
      <div className="mx-auto max-w-[1480px] px-5 sm:px-10">
        <div className="flex items-center justify-between">
          <h2 className="font-heading text-[32px] leading-12 font-semibold text-black">Shop</h2>
          <Link href="/shop" className="text-sm leading-[21px] font-medium text-black hover:underline">
            All Products ➔
          </Link>
        </div>

        <Carousel opts={{ align: "start", dragFree: true }} className="pt-10">
          <CarouselContent className="-ml-5">
            {carouselProducts.map((product) => {
              const href = productHref(product);
              return (
                <CarouselItem key={product.slug} className="basis-[300px] pl-5 sm:basis-[406px]">
                  <InertLink href={href} className="group flex flex-col">
                    <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#f5f5f5]">
                      <Image
                        src={product.carouselImage ?? product.image}
                        alt={product.name}
                        fill
                        sizes="(min-width: 640px) 386px, 280px"
                        className="object-cover"
                      />
                      <CarouselBadge product={product} />
                    </div>
                    <div className="flex flex-col py-5">
                      <StarRating count={product.reviewCount} className="h-[25px]" />
                      <h3 className="text-base leading-6 font-medium text-black">{product.name}</h3>
                      {product.price !== undefined && (
                        <p className="flex gap-2 text-base leading-6 text-[#1d1d1d]">
                          {product.compareAtPrice && (
                            <span className="line-through">{formatNGN(product.compareAtPrice)}</span>
                          )}
                          <span>{formatNGN(product.price)}</span>
                        </p>
                      )}
                    </div>
                  </InertLink>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
