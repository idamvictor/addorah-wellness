"use client";

import { useEffect, useState } from "react";

import { NOTIFY_EVENT } from "@/components/product/prebiotic/prebiotic-buy-box";
import { prebioticPrices } from "@/lib/pricing";
import type { Product } from "@/data/products";
import { formatNGN } from "@/lib/format";
import { cn } from "@/lib/utils";

/** Bottom bar that appears once the buy box has scrolled away; its button jumps back to the notify form. */
export function PrebioticStickyBar({ product, watchId }: { product: Product; watchId: string }) {
  const [visible, setVisible] = useState(false);
  const prices = prebioticPrices(product);

  useEffect(() => {
    const target = document.getElementById(watchId);
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0);
    });
    observer.observe(target);
    return () => observer.disconnect();
  }, [watchId]);

  return (
    <div
      aria-hidden={!visible}
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t-[0.8px] border-[#deddde] bg-white/95 backdrop-blur transition-transform duration-300",
        visible ? "translate-y-0" : "pointer-events-none translate-y-full",
      )}
    >
      <div className="flex items-center justify-between gap-4 px-5 py-2.5">
        <p className="hidden text-2xl leading-9 font-semibold text-ink sm:block">Hydrogen Prebiotic</p>
        <div className="flex flex-1 items-center justify-end gap-6 sm:gap-20">
          <div className="hidden md:block">
            <p className="flex gap-2 text-lg leading-[27px] font-medium text-ink">
              <span className="line-through">{formatNGN(prices.oneTime)}</span>
              <span>{formatNGN(prices.subscribe)}</span>
            </p>
            <p className="text-sm leading-[21px] text-ink/70">Delivered Every 30 Days</p>
          </div>
          <button
            type="button"
            tabIndex={visible ? 0 : -1}
            onClick={() => window.dispatchEvent(new Event(NOTIFY_EVENT))}
            className="h-12 w-full rounded-[10px] bg-black px-4 text-base text-white sm:w-[279px] sm:text-lg"
          >
            Notify me when back in stock
          </button>
        </div>
      </div>
    </div>
  );
}
