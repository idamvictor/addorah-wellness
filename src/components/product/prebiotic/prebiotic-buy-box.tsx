"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { StarRating } from "@/components/sections/star-rating";
import type { Product } from "@/data/products";
import { formatNGN } from "@/lib/format";
import { prebioticPacks as packs, prebioticPrices } from "@/lib/pricing";
import { cn } from "@/lib/utils";

const base = "/images/products/hydrogen-prebiotic";

/** Fired by the sticky bar to open the notify form here. */
export const NOTIFY_EVENT = "prebiotic:notify";

const benefits = [
  { icon: `${base}/icon-energy.svg`, label: "More Energy" },
  { icon: `${base}/icon-recovery.svg`, label: "Faster Recovery" },
  { icon: `${base}/icon-focus.svg`, label: "Better Focus" },
];

export function PrebioticBuyBox({ product, rating, reviewCount }: { product: Product; rating: number; reviewCount: number }) {
  const [pack, setPack] = useState(0);
  const [plan, setPlan] = useState<"subscribe" | "once">("subscribe");
  const [interval, setInterval] = useState(30);
  const [notifyOpen, setNotifyOpen] = useState(false);
  const notifyRef = useRef<HTMLDivElement>(null);

  const prices = prebioticPrices(product, packs[pack]);

  useEffect(() => {
    const open = () => {
      setNotifyOpen(true);
      notifyRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    };
    window.addEventListener(NOTIFY_EVENT, open);
    return () => window.removeEventListener(NOTIFY_EVENT, open);
  }, []);

  return (
    <div className="flex flex-col">
      <a href="#prebiotic-reviews" className="flex items-center gap-2 pb-2">
        <StarRating rating={rating} starClassName="h-[18px]" />
        <span className="text-xs leading-3 text-ink/70">{reviewCount} Reviews</span>
      </a>
      <h1 className="max-w-[480px] pb-3 font-heading text-[30px] leading-none text-black sm:text-[36px]">
        Echo Hydrogen Prebiotic Drink Mix
      </h1>
      <p className="pb-5 font-heading text-base leading-4 text-black">High Potency Molecular Hydrogen | 30 Day Supply</p>
      <p className="pb-5 text-sm leading-[14px] text-stone">16 PPM OF HYDROGEN (5.65MG)</p>
      <p className="pb-4 text-base leading-[20.8px] text-stone">
        Molecular hydrogen plus prebiotic fiber in convenient travel packets for on the go energy, focus, and gut health. Just mix
        with water and enjoy. Crisp apple flavor.
      </p>
      <ul className="flex flex-col gap-3 pb-8">
        {benefits.map((benefit) => (
          <li key={benefit.label} className="flex items-center gap-2 text-base leading-4 font-medium text-ink">
            <Image src={benefit.icon} alt="" width={20} height={20} className="size-5" />
            {benefit.label}
          </li>
        ))}
      </ul>

      <p className="text-xs leading-[18px] font-medium text-stone">Choose your pack size</p>
      <div role="radiogroup" aria-label="Pack size" className="grid grid-cols-3 gap-3 pt-4 pb-6">
        {packs.map((item, i) => (
          <button
            key={item.label}
            type="button"
            role="radio"
            aria-checked={i === pack}
            onClick={() => {
              setPack(i);
              setInterval(30 * item.multiple);
            }}
            className={cn(
              "rounded-lg border-[1.6px] px-2 py-3 text-sm leading-[21px] font-medium text-ink transition-colors",
              i === pack ? "border-black" : "border-[#d9d9d9] hover:border-ink",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      <p className="text-xs leading-[18px] font-medium text-stone">Choose your price</p>
      <div role="radiogroup" aria-label="Purchase option" className="flex flex-col gap-2 pt-4 pb-6">
        <div
          className={cn(
            "rounded-lg p-5",
            plan === "subscribe" ? "border-[1.6px] border-black" : "border-[0.8px] border-[#d9d9d9]",
          )}
        >
          <button
            type="button"
            role="radio"
            aria-checked={plan === "subscribe"}
            onClick={() => setPlan("subscribe")}
            className="flex w-full flex-wrap items-start justify-between gap-2 text-left"
          >
            <span>
              <span className="flex items-center gap-3">
                <Radio checked={plan === "subscribe"} />
                <span className="text-sm leading-[21px] font-medium text-ink">Subscribe &amp; Save</span>
                <span className="rounded-full bg-gradient-to-r from-[#726de9] to-[#df689d] px-2 py-1 text-xs leading-3 font-semibold text-mist uppercase">
                  Save 30%
                </span>
              </span>
              <span className="block pt-1 pl-6 text-[11px] leading-[16.5px] text-stone">
                Save {formatNGN(prices.saving)} per order · Cancel anytime
              </span>
            </span>
            <span className="flex gap-2 text-sm leading-[21px] font-medium">
              <span className="text-stone line-through">{formatNGN(prices.oneTime)}</span>
              <span className="text-ink">{formatNGN(prices.subscribe)}</span>
            </span>
          </button>
          {plan === "subscribe" && (
            <>
              <label htmlFor="prebiotic-interval" className="sr-only">
                Delivery frequency
              </label>
              <select
                id="prebiotic-interval"
                value={interval}
                onChange={(event) => setInterval(Number(event.target.value))}
                className="mt-3 h-[44.6px] w-full rounded-[4px] border-[0.8px] border-[#d9d9d9] bg-mist px-2 text-sm leading-[21px] text-ink"
              >
                {[30, 60, 90].map((days) => (
                  <option key={days} value={days}>
                    Delivered Every {days} Days
                  </option>
                ))}
              </select>
            </>
          )}
        </div>
        <button
          type="button"
          role="radio"
          aria-checked={plan === "once"}
          onClick={() => setPlan("once")}
          className={cn(
            "flex flex-wrap items-center justify-between gap-2 rounded-lg p-5 text-left",
            plan === "once" ? "border-[1.6px] border-black" : "border-[0.8px] border-[#d9d9d9]",
          )}
        >
          <span className="flex items-center gap-3 text-sm leading-[21px] font-medium text-ink">
            <Radio checked={plan === "once"} />
            One Time Purchase
          </span>
          <span className="flex gap-2 text-sm leading-[21px] font-medium">
            {prices.compare > 0 && <span className="text-stone line-through">{formatNGN(prices.compare)}</span>}
            <span className="text-ink">{formatNGN(prices.oneTime)}</span>
          </span>
        </button>
      </div>

      {/* The design gave a manufacturer restock estimate; neutral wording here. */}
      <p className="pb-5 font-heading text-base leading-5 text-black">
        We are currently out of stock on the Echo Hydrogen Prebiotic Drink Mix. Leave your email and we&apos;ll let you know when
        it&apos;s back.
      </p>

      <button
        type="button"
        disabled
        className="h-[51px] cursor-not-allowed rounded-lg border-[1.6px] border-ink bg-ink text-base leading-4 font-medium tracking-[0.02em] text-white opacity-50"
      >
        Sold Out
      </button>

      <div ref={notifyRef} className="scroll-mt-32 pt-4">
        {notifyOpen ? (
          <NotifyForm />
        ) : (
          <button
            type="button"
            onClick={() => setNotifyOpen(true)}
            className="h-[54px] w-full rounded-lg bg-[#202223] text-base leading-6 text-white transition-opacity hover:opacity-90"
          >
            Notify me when available
          </button>
        )}
      </div>

      <p className="self-center pt-6 pb-8">
        <span className="inline-block rounded-[4px] border-[1.6px] border-[#d2ecef] p-2 text-xs leading-3 font-semibold tracking-[0.05em] text-[#1d5563] uppercase">
          60-Day Guarantee
        </span>
      </p>

      <Accordion title="Product Details">
        <p>
          Instantly turn any 12-16 ounce serving of water into a hydrogen prebiotic powerhouse. ECHO&apos;s Molecular Hydrogen
          Drink Mix (30 count) combines clinically-backed molecular hydrogen with prebiotic fiber and crisp flavor to elevate
          energy, clarity, and gut health - all in a single, easy-to-use packet.
        </p>
        <ul className="list-disc pt-1.5 pl-5">
          <li>Boost energy &amp; focus</li>
          <li>Support gut health</li>
          <li>Help reduce inflammation &amp; accelerate recovery</li>
          <li>Enjoy intelligent, crave-worthy taste</li>
        </ul>
        <p className="pt-4">
          <strong className="font-bold">Hydrogen + Prebiotic Fiber: Better Together</strong> Prebiotic fiber feeds your gut
          microbiome—the source of digestion, immunity, and even mood. Molecular hydrogen reduces oxidative stress and supports
          cellular balance throughout the body. When you stack them, you create a powerful synergy: a healthier gut environment
          enhances hydrogen absorption and signaling, while hydrogen reduces gut inflammation and supports microbial diversity. The
          result? Faster recovery, deeper resilience, and more noticeable results—inside and out.
        </p>
        <p className="font-bold">Peak performance, simplified. Just pour, mix, and drink.</p>
      </Accordion>
      <Accordion title="Nutritional Facts & Ingredients">
        <p>
          Serving Size: 1 Stick - Total Calories: 10g, Dietary Fiber 2g, Magnesium 80 mg, Prebiotic fiber blend 2.1g
          (Fructooligosaccharides, Xylooligosaccharides, Chicory Root Inulin) Additional Ingredients: Malic Acid, Natural Flavor,
          Tartaric Acid, Silicon Dioxide, Rebaudioside A, Stevia, Thaumatin
        </p>
      </Accordion>
      <Accordion title="Suggested Use">
        <p>Dissolve 1 pack in 12-16 ounces of water. Consume within 15 minutes. For best results, drink 3 times per day.</p>
      </Accordion>
    </div>
  );
}

function Radio({ checked }: { checked: boolean }) {
  return (
    <span
      aria-hidden
      className={cn(
        "size-3 shrink-0 rounded-full",
        checked ? "bg-ink shadow-[0_0_0_4px_white,0_0_0_5px_#231f20]" : "shadow-[0_0_0_4px_white,0_0_0_5px_#d9d9d9]",
      )}
    />
  );
}

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <details className="group border-b-[0.8px] border-[#deddde] first-of-type:border-t-[0.8px]">
      <summary className="flex cursor-pointer list-none items-center justify-between py-3 text-base leading-6 font-medium text-ink [&::-webkit-details-marker]:hidden">
        {title}
        <svg aria-hidden viewBox="0 0 24 24" className="size-6 transition-transform group-open:rotate-180" fill="none">
          <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </summary>
      <div className="pb-5 text-base leading-6 text-stone">{children}</div>
    </details>
  );
}

/** Back-in-stock sign-up. No backend yet: submitting shows the confirmation only. */
function NotifyForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <p role="status" className="rounded-lg bg-mist px-5 py-4 text-center text-base text-ink">
        Thanks — we&apos;ll email you when the Hydrogen Prebiotic is back in stock.
      </p>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
      className="flex gap-2.5"
    >
      <label htmlFor="prebiotic-notify-email" className="sr-only">
        Email
      </label>
      <input
        id="prebiotic-notify-email"
        type="email"
        required
        autoFocus
        autoComplete="email"
        placeholder="firstname@email.com"
        className="h-[54px] min-w-0 flex-1 rounded-lg border-[0.8px] border-[#949596] px-4 text-base text-ink outline-none placeholder:text-[#b4b4b4] focus-visible:border-ink"
      />
      <button type="submit" className="h-[54px] shrink-0 rounded-lg bg-[#202223] px-5 text-base text-white">
        Notify me
      </button>
    </form>
  );
}
