import Image from "next/image";

import { WaitlistProductCard } from "@/components/product/waitlist-product-card";
import { FaqList } from "@/components/sections/faq-section";
import { ProductCard } from "@/components/sections/product-card";
import { productPageFaqs } from "@/data/faqs";
import type { WaitlistPageContent } from "@/data/product-pages/waitlist";
import { getProduct, type Product } from "@/data/products";

export function WaitlistPdp({ content, product }: { content: WaitlistPageContent; product: Product }) {
  const related = [getProduct("echo-flask")].filter((item): item is Product => Boolean(item));

  return (
    <>
      <section className="relative -mt-[84px] flex min-h-[760px] items-center overflow-hidden bg-[#0c0c0d] pt-[84px]">
        <Image
          src={content.heroImage}
          alt={`${content.title} — ${content.subtitle}`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center]"
        />
        <div aria-hidden className="absolute inset-0 bg-linear-to-r from-[#0c0c0d]/85 via-[#0c0c0d]/40 to-transparent lg:hidden" />
        <div className="relative mx-auto w-full max-w-[1360px] px-5 py-16 sm:px-12">
          <div className="max-w-[560px]">
            <span className="inline-block rounded-full border-[0.8px] border-mist/35 px-[18px] py-2 text-[13px] leading-[19.5px] font-semibold tracking-[1.04px] text-[#bab7b7] uppercase">
              {content.launchLabel}
            </span>
            <h1 className="mt-7 bg-linear-to-r from-[#726de9] to-[#df689d] bg-clip-text font-heading text-[52px] leading-none font-normal text-transparent sm:text-[72px]">
              {content.title}
            </h1>
            <p className="pt-3.5 text-xl leading-[33px] text-[#bab7b7] sm:text-[22px]">{content.subtitle}</p>
            <p className="pt-7 text-lg leading-[29px] text-[#e7ecef] sm:text-xl">
              Pre-order pricing has ended. Join the waitlist for priority access when ordering
              begins. Limited quantities available.
            </p>
            <a
              href="#waitlist-form"
              className="mt-8 inline-flex h-[51px] items-center rounded-lg border-[1.6px] border-mist bg-mist px-6 text-base leading-4 font-medium tracking-[0.32px] text-ink transition-opacity hover:opacity-90"
            >
              {content.heroCta}
            </a>
            <ul className="flex flex-col gap-3.5 pt-9">
              {content.heroBullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-3 text-base leading-6 text-mist">
                  <Image src="/images/products/shared/icon-check-circle-light.svg" alt="" width={24} height={24} />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {content.intro.kind === "banner" ? (
        <section className="relative flex min-h-[540px] items-center justify-center overflow-hidden bg-[#0c0c0d]">
          <Image src={content.intro.image} alt="" fill sizes="100vw" className="object-cover" />
          <div aria-hidden className="absolute inset-0 bg-[#0c0c0d]/35" />
          <p className="relative max-w-[900px] px-6 py-24 text-center text-[22px] leading-[1.3] text-mist sm:text-[28px]">
            {content.intro.text}
          </p>
        </section>
      ) : (
        <section className="bg-white px-6 py-24">
          <div className="mx-auto grid max-w-[1160px] items-center gap-16 lg:grid-cols-2">
            <Image
              src={content.intro.image}
              alt={content.intro.imageAlt}
              width={548}
              height={441}
              sizes="(min-width: 1024px) 548px, 100vw"
              className="h-auto w-full rounded-xl object-cover"
            />
            <p className="text-xl leading-[1.4] text-ink sm:text-[26px]">{content.intro.text}</p>
          </div>
        </section>
      )}

      <section className="bg-white px-6 py-24">
        <ul className="mx-auto grid max-w-[1040px] gap-x-[72px] gap-y-14 md:grid-cols-2">
          {content.features.map((feature) => (
            <li key={feature.title} className="grid grid-cols-[24px_1fr] gap-4">
              <span className="flex size-6 items-center justify-center pt-0.5">
                <Image src="/images/products/shared/icon-check-circle.svg" alt="" width={20} height={20} />
              </span>
              <div>
                <h3 className="text-base leading-6 font-semibold text-ink">{feature.title}</h3>
                <p className="pt-2 text-[15px] leading-[22.5px] text-stone">{feature.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <WaitlistProductCard content={content} product={product} />

      <section className="bg-white px-6 pt-20 pb-24">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="pb-8 font-heading text-[48px] leading-[72px] font-normal text-ink">FAQs</h2>
          <FaqList items={productPageFaqs} variant="cards" />
        </div>
      </section>

      <section className="px-5 sm:px-12">
        <div className="mx-auto max-w-[1104px] py-14">
          <h2 className="font-heading text-[36px] leading-none font-bold text-ink sm:text-[48px]">
            You might also like
          </h2>
          <ul className="grid grid-cols-1 gap-[30px] pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <li key={item.slug}>
                <ProductCard product={item} sizes="(min-width: 1024px) 254px, 50vw" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
