import Image from "next/image";
import Link from "next/link";

import { FlaskGallery } from "@/components/product/flask-gallery";
import { PrebioticBuyBox } from "@/components/product/prebiotic/prebiotic-buy-box";
import { PrebioticStickyBar } from "@/components/product/prebiotic/prebiotic-sticky-bar";
import { StarRating } from "@/components/sections/star-rating";
import type { Product } from "@/data/products";
import {
  prebioticAttributes,
  prebioticBenefits,
  prebioticGallery,
  prebioticReviews,
  prebioticTestimonials,
  prebioticTiming,
} from "@/data/product-pages/hydrogen-prebiotic";

const base = "/images/products/hydrogen-prebiotic";
const display = "font-heading font-normal tracking-[-0.03em] text-ink";

export function PrebioticPdp({ product }: { product: Product }) {
  return (
    <>
      <nav aria-label="Breadcrumb" className="px-5 pt-12 text-xs leading-3 font-medium tracking-[0.025em] text-stone">
        <ol className="flex flex-wrap gap-1">
          <li>
            <Link href="/shop" className="hover:underline">
              Shop all
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link href="/shop" className="hover:underline">
              Shop All Echo Products
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li aria-current="page" className="text-ink">
            {product.name}
          </li>
        </ol>
      </nav>

      <section id="prebiotic-buy" className="grid gap-10 px-5 pt-6 lg:grid-cols-[minmax(0,853fr)_minmax(0,562fr)]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <FlaskGallery images={prebioticGallery} />
        </div>
        <PrebioticBuyBox product={product} rating={4.8} reviewCount={product.reviewCount ?? 90} />
      </section>

      {/* Attribute strip */}
      <ul className="flex flex-wrap justify-center gap-x-10 gap-y-4 px-5 pt-12 lg:justify-between">
        {prebioticAttributes.map((attr) => (
          <li key={attr.label} className="flex items-center gap-2 font-heading text-[18px] leading-[33px] text-ink sm:text-[22px]">
            <Image src={attr.icon} alt="" width={20} height={20} className="size-5" />
            {attr.label}
          </li>
        ))}
      </ul>

      {/* Peak performance */}
      <section className="grid items-center gap-10 px-5 pt-16 lg:grid-cols-12">
        <div className="relative mx-auto aspect-[458/685] w-full max-w-[458px] lg:col-span-4">
          <Image src={`${base}/stick.jpg`} alt="Hydrogen Prebiotic stick pack" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
        </div>
        <div className="lg:col-span-8">
          <h2 className={`${display} max-w-[600px] text-[34px] leading-[1.1] sm:text-[44px]`}>Peak Performance Never Tasted So Good</h2>
          <p className="pt-4 font-heading text-[18px] leading-[1.2] text-ink sm:text-[22px]">Turn water into a hydrogen prebiotic powerhouse</p>
          <ul className="grid gap-10 pt-12 sm:grid-cols-3 lg:pt-20">
            {prebioticBenefits.map((benefit) => (
              <li key={benefit.title}>
                <Image src={benefit.icon} alt="" width={50} height={50} className="size-[50px]" />
                <h3 className="pt-10 font-heading text-[26px] leading-[1.1] text-ink">{benefit.title}</h3>
                <p className="pt-7 text-base leading-[19.2px] text-ink">{benefit.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Stats band */}
      <section className="pt-[88px] pb-8">
        <div className="relative overflow-hidden">
          <Image src={`${base}/stats-bg.jpg`} alt="" fill sizes="100vw" className="object-cover" />
          <div className="relative flex flex-wrap items-center gap-x-16 gap-y-6 px-5 py-16">
            <p className={`${display} text-[36px] leading-none sm:text-[44px]`}>
              Smart Hydration.
              <br />
              Real Results.
            </p>
            {/* The design's two other counters were captured mid-animation at "0+", so only this figure is shown. */}
            <p>
              <span className="block font-heading text-[60px] leading-[60px] text-ink">2,200+</span>
              <span className="block font-heading text-[22px] leading-[22px] text-black">Peer-Reviewed Studies</span>
            </p>
          </div>
        </div>
      </section>

      {/* Timing */}
      <section className="grid items-center gap-10 pt-20 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-16 lg:pr-[150px]">
        <ul className="flex snap-x gap-2.5 overflow-x-auto px-5 pb-2 lg:order-1 lg:pl-0">
          {prebioticTiming.map((moment) => (
            <li
              key={moment.label}
              className="flex h-[300px] w-[220px] shrink-0 snap-start flex-col items-end justify-between rounded-[20px] border-[0.8px] border-black p-5"
            >
              <Image src={moment.icon} alt="" width={30} height={30} className="size-[30px]" />
              <p className="w-full font-heading text-[26px] leading-[31.2px] text-ink">{moment.label}</p>
            </li>
          ))}
        </ul>
        <div className="px-5 lg:order-2 lg:px-0">
          <h2 className={`${display} text-[34px] leading-[1.1] sm:text-[44px]`}>Always At Your Best</h2>
          <p className="pt-4 text-base leading-[19.2px] text-ink">
            You’ll feel the benefits from any dose, but for optimal results, we recommend three servings of H2 hydrogen throughout
            the day. Mix and match stick packs with your hydrogen water bottle — whatever fits your life best.
          </p>
        </div>
      </section>

      {/* Feel better */}
      <section className="pt-[70px]">
        <h2 className={`${display} max-w-[240px] px-5 text-[40px] leading-10`}>Feel better. Do better.</h2>
        <div className="relative mt-10 h-[320px] sm:h-[500px]">
          <Image src={`${base}/feel-better.jpg`} alt="Hydrogen Prebiotic stick pack" fill sizes="100vw" className="object-cover" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="pt-20" aria-label="Testimonials">
        <ul className="flex snap-x gap-8 overflow-x-auto px-5 pb-2 lg:px-[68px]">
          {prebioticTestimonials.map((item) => (
            <li key={item.name} className="w-[85vw] max-w-[656px] shrink-0 snap-start">
              <div className="flex items-center gap-5">
                <Image src={item.avatar} alt="" width={85} height={85} className="size-[85px] rounded-full object-cover" />
                <div>
                  <p aria-label="5 out of 5 stars" className="text-[30px] leading-9 tracking-[2px] text-black">
                    ★★★★★
                  </p>
                  <h3 className="font-heading text-[22px] leading-[22px] text-ink">{item.title}</h3>
                </div>
              </div>
              <p className="pt-4 text-base leading-6 text-ink">“{item.body}”</p>
              <p className="pt-4 text-base leading-6 font-bold text-ink">{item.name}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Pour. Mix. Drink. */}
      <section className="grid items-center gap-10 px-5 pt-7 lg:grid-cols-2">
        <div>
          <Image src={`${base}/pour-icon.png`} alt="" width={80} height={36} className="h-9 w-20 object-contain" />
          <h2 className={`${display} pt-5 text-[40px] leading-[1.2] text-black sm:text-[44px]`}>Pour. Mix. Drink.</h2>
          <p className="pt-5 text-base leading-[19.2px] text-black">It&apos;s really that easy.</p>
        </div>
        <div className="relative aspect-[708/586]">
          <Image src={`${base}/pour.jpg`} alt="Pouring a stick pack into a glass of water" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
      </section>

      {/* Reviews */}
      <section id="prebiotic-reviews" className="scroll-mt-28 px-5 pt-16 pb-24">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 className={`${display} text-[34px] leading-[1.1] sm:text-[44px]`}>Reviews</h2>
          <p className="flex items-center gap-2 text-sm text-stone">
            <StarRating rating={4.8} starClassName="h-[18px]" />
            4.8 out of 5 · {product.reviewCount ?? 90} reviews
          </p>
        </div>
        <ul className="flex snap-x gap-4 overflow-x-auto pt-8 pb-2">
          {prebioticReviews.map((review) => (
            <li
              key={review.name}
              className="flex w-[300px] shrink-0 snap-start flex-col rounded-lg border-[0.8px] border-[#deddde] p-[17px] sm:w-[352px]"
            >
              <div className="flex items-center justify-between">
                <StarRating rating={review.rating} starClassName="h-4" />
                <span className="text-[13px] leading-5 text-stone">{review.when}</span>
              </div>
              <h3 className="pt-3 text-base leading-6 font-semibold text-ink">{review.title}</h3>
              <p className="flex-1 pt-2 text-sm leading-[25.2px] text-[#2c3e50]">{review.body}</p>
              <p className="pt-4 text-sm font-medium text-ink">
                {review.name}
                {review.verified && <span className="block text-xs font-normal text-stone">Verified Buyer</span>}
              </p>
            </li>
          ))}
        </ul>
        <p className="pt-4 text-xs text-stone">Reviews collected by ECHO Water from {product.shortName} customers.</p>
      </section>

      <PrebioticStickyBar product={product} watchId="prebiotic-buy" />
    </>
  );
}
