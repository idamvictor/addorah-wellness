import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const saleMessages = [
  "November Savings Event",
  "20% off sitewide",
  "No code needed · Applied at checkout",
  "Free shipping on the ECHO Flask",
  "Industry-best warranty",
];

// Decorative bubbles rising off the bottom edge (positions from the design).
const bubbles = [
  { left: 41, size: 3, opacity: 0.1 },
  { left: 46, size: 3.7, opacity: 0.21 },
  { left: 51, size: 4.9, opacity: 0.05 },
  { left: 56, size: 5.3, opacity: 0.3 },
  { left: 57, size: 4.7, opacity: 0.54 },
  { left: 62, size: 4.6, opacity: 0.88 },
  { left: 63, size: 4.9, opacity: 0.76 },
  { left: 67, size: 6.6, opacity: 0.44 },
  { left: 68, size: 6.4, opacity: 0.5 },
  { left: 72, size: 6.3, opacity: 0.76 },
  { left: 73, size: 8, opacity: 0.27 },
  { left: 74, size: 5.9, opacity: 0.89 },
  { left: 77, size: 9.5, opacity: 0.13 },
  { left: 79, size: 6.3, opacity: 0.49 },
  { left: 83, size: 7, opacity: 0.63 },
  { left: 84, size: 7.4, opacity: 0.85 },
  { left: 88, size: 9.6, opacity: 0.51 },
  { left: 89, size: 11.4, opacity: 0.12 },
  { left: 93, size: 11.2, opacity: 0.35 },
  { left: 94, size: 11.6, opacity: 0.27 },
  { left: 95, size: 9.5, opacity: 0.69 },
];

function SaleTicker() {
  const run = (
    <div className="flex shrink-0 items-center gap-9 pr-9">
      {saleMessages.map((message) => (
        <Fragment key={message}>
          <span className="font-display text-[13px] leading-[18px] tracking-[1.68px] whitespace-nowrap text-white uppercase">
            {message}
          </span>
          <span aria-hidden className="size-1.5 shrink-0 rounded-[3px] bg-brand-gradient" />
        </Fragment>
      ))}
    </div>
  );

  return (
    <div className="flex h-11 items-center overflow-hidden border-b-[0.8px] border-white/8 bg-night">
      <div className="flex w-max animate-marquee" aria-hidden>
        {run}
        {run}
      </div>
      <p className="sr-only">{saleMessages.join(". ")}</p>
    </div>
  );
}

export function HomeHero() {
  return (
    <section className="relative -mt-[84px] bg-night pt-24">
      <SaleTicker />
      <div className="relative overflow-hidden bg-[radial-gradient(ellipse_1794px_780px_at_78%_60%,#242833_0%,#1f2226_38%,#121212_75%)]">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-6">
          {bubbles.map((bubble) => (
            <span
              key={bubble.left}
              className="absolute bottom-0 rounded-full border border-[#7fa0ac]/55 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.35),rgba(0,167,181,0.08))]"
              style={{
                left: `${bubble.left}%`,
                width: bubble.size,
                height: bubble.size,
                opacity: bubble.opacity,
              }}
            />
          ))}
        </div>

        <div className="mx-auto grid max-w-[1600px] items-center gap-10 px-5 py-14 sm:px-14 lg:grid-cols-2 lg:gap-[60px] lg:py-[88px]">
          <div className="flex flex-col gap-7">
            <div className="flex items-center gap-3.5">
              <span aria-hidden className="h-px w-8 bg-brand-gradient" />
              <span className="font-display text-[13px] leading-[19.5px] tracking-[1.82px] text-white uppercase">
                November Savings Event
              </span>
            </div>

            <h1 className="flex flex-col font-display text-white uppercase">
              <span className="text-brand-gradient text-[clamp(140px,18vw,269px)] leading-[0.82] tracking-[-0.04em]">
                20%
              </span>
              <span className="mt-4 text-[clamp(44px,5vw,75px)] leading-[0.9] tracking-[-0.01em]">
                Off Sitewide
              </span>
            </h1>

            <p className="max-w-[643px] font-display text-[clamp(32px,3.4vw,50px)] leading-[1.02] tracking-[-0.02em] text-pretty text-white uppercase">
              The best water you can drink. Now for less.
            </p>

            <div className="flex flex-col items-start gap-3.5">
              <Link
                href="/shop"
                className="rounded-lg bg-mist px-[30px] py-4 text-[15px] leading-[22.5px] font-semibold text-[#1a1d21] transition-opacity hover:opacity-90"
              >
                Shop the sale
              </Link>
              <p className="text-sm leading-[21px] text-white/72">
                No code needed · Applied at checkout · FSA / HSA eligible
              </p>
            </div>
          </div>

          <div className="relative mx-auto flex h-[420px] w-full items-center justify-center sm:h-[598px]">
            <div
              aria-hidden
              className="absolute top-1/2 left-1/2 size-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,167,181,0.35)_0%,rgba(22,135,161,0.285)_20%,rgba(57,83,130,0.22)_40%,rgba(57,83,130,0)_70%)] opacity-60 blur-[20px] sm:size-[463px]"
            />
            <Link href="/products/echo-flask" className="relative">
              <Image
                src="/images/home/hero-flask.png"
                alt="ECHO Flask hydrogen water bottle"
                width={363}
                height={1200}
                priority
                sizes="169px"
                className="h-[400px] w-auto drop-shadow-[0_30px_80px_rgba(0,0,0,0.6)] sm:h-[560px]"
              />
            </Link>
          </div>
        </div>

        <div aria-hidden className="h-0.5 bg-brand-gradient" />
      </div>
    </section>
  );
}
