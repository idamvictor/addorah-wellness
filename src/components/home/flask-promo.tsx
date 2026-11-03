import Image from "next/image";
import Link from "next/link";

import { InertLink } from "@/components/ui/inert-link";

export function FlaskPromo() {
  return (
    <section className="pt-[72px]">
      <div className="mx-auto max-w-[1400px] px-5 py-6">
        <div className="relative flex min-h-[650px] items-end overflow-hidden rounded-2xl bg-[#101418] md:items-center">
          <Image
            src="/images/home/flask-promo.jpg"
            alt="Hands holding an ECHO Flask filled with hydrogen-rich water"
            fill
            sizes="(min-width: 1400px) 1360px, 100vw"
            className="object-cover object-[70%_center]"
          />
          <div aria-hidden className="absolute inset-0 bg-linear-to-t from-[#101418] via-[#101418]/60 to-transparent md:hidden" />
          <div className="relative max-w-[620px] p-8 sm:p-16">
            <span className="inline-block rounded-[4px] border-[0.8px] border-white/50 px-2.5 py-1 text-xs leading-[18px] font-medium tracking-[1.44px] text-white uppercase">
              8PPM Hydrogen
            </span>
            <h2 className="mt-[22px] max-w-[492px] font-heading text-[36px] leading-[1.05] font-normal tracking-[-0.01em] text-balance text-white sm:text-[45px]">
              Turn water into hydrogen water
            </h2>
            <p className="max-w-[492px] pt-[18px] pb-8 text-base leading-[24.8px] text-white">
              Inside every Flask, is a specially designed membrane originally designed by NASA to
              carefully split water apart — releasing pure hydrogen, the same tiny spark that powers
              stars and helps your body work at its best.
            </p>
            <Link
              href="/products/echo-flask"
              className="inline-flex h-[52px] items-center rounded-[4px] bg-white px-7 text-base font-medium text-ink transition-opacity hover:opacity-90"
            >
              Shop the Flask
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HydrogenExplainer() {
  return (
    <section className="bg-white px-5 py-[88px]">
      <div className="mx-auto grid max-w-[1360px] gap-x-[72px] gap-y-8 md:grid-cols-2">
        <div className="flex flex-col items-start gap-7">
          <h2 className="font-heading text-[30px] leading-[1.1] font-normal tracking-[-0.01em] text-balance text-ink sm:text-[36px]">
            But doesn’t water already have hydrogen?
          </h2>
          <InertLink className="inline-flex h-[49.6px] items-center rounded-md border-[0.8px] border-ink px-[26px] text-base font-medium text-ink">
            Learn More
          </InertLink>
        </div>
        <p className="text-lg leading-[1.45] text-pretty text-ink sm:text-[22px]">
          Yes, but it’s locked up. Just like we can’t breathe the oxygen in water, our bodies can’t
          use the hydrogen that’s still bound to it. The ECHO Flask frees that hydrogen, so your
          cells can actually use its powerful benefits.
        </p>
      </div>
    </section>
  );
}
