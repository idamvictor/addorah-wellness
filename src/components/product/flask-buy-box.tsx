"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { flaskAssurances, flaskCarePlan, flaskDrops } from "@/data/product-pages/echo-flask";
import type { Product } from "@/data/products";
import { useAppStore } from "@/providers/app-store-provider";

const units = ["Days", "Hrs", "Min", "Sec"] as const;

function useCountdown(target: string) {
  const [parts, setParts] = useState<number[] | null>(null);

  useEffect(() => {
    const end = new Date(target).getTime();
    const tick = () => {
      const ms = Math.max(0, end - Date.now());
      const s = Math.floor(ms / 1000);
      setParts([Math.floor(s / 86400), Math.floor((s % 86400) / 3600), Math.floor((s % 3600) / 60), s % 60]);
    };
    const first = window.setTimeout(tick, 0);
    const id = window.setInterval(tick, 1000);
    return () => {
      window.clearTimeout(first);
      window.clearInterval(id);
    };
  }, [target]);

  return parts;
}

const kicker = "font-display text-[11px] leading-[16px] tracking-[1.54px] uppercase";
const microLabel = "font-display text-[10px] leading-[13px] tracking-[1.26px] text-stone uppercase";

export function FlaskBuyBox({ product }: { product: Product }) {
  const { current, past, next } = flaskDrops;
  const [withCare, setWithCare] = useState(false);
  const addItem = useAppStore((state) => state.addItem);
  const countdown = useCountdown(current.shipsAt);

  const soldPct = Math.round((current.sold / current.total) * 100);

  return (
    <div className="mt-1 mb-2 rounded-2xl border-[0.8px] border-[#deddde]">
      {past.map((name, i) => (
        <div
          key={name}
          className={`flex items-center justify-between border-b-[0.8px] border-[#deddde] px-[18px] py-3.5 ${i === 0 ? "rounded-t-[15px]" : ""}`}
        >
          <span className="text-[15px] leading-[21.75px] text-stone line-through">{name}</span>
          <span className={`${kicker} text-stone`}>100% Sold out</span>
        </div>
      ))}

      <div className="flex items-center justify-between border-b-[0.8px] border-[#deddde] bg-mist px-[18px] py-3.5">
        <span className="text-[15px] leading-[21.75px] font-semibold text-ink">
          {current.name}{" "}
          <span className="pl-1 text-[13px] font-normal text-stone">{current.ships}</span>
        </span>
        <span className={`${kicker} flex items-center gap-2 text-ink`}>
          <span aria-hidden className="size-2 rounded-[4px] bg-teal" />
          Buy now
        </span>
      </div>

      <div className="flex flex-col p-[18px]">
        <p className="text-sm leading-[21.7px] text-pretty text-stone">
          We build the Flask in small, limited runs so every unit gets the same attention. Each
          Flask is assembled, its hydrogen generator tested, and its output verified before it’s
          packed and shipped to you.
        </p>

        <div className="flex items-end justify-between pt-3.5">
          <span className="text-brand-gradient font-display text-[56px] leading-none tracking-[-0.02em]">
            {current.sold}
          </span>
          <div className="flex pb-1">
            <div className="pl-3.5 text-right">
              <p className="font-display text-[22px] leading-[22px] text-ink">{soldPct}%</p>
              <p className={`${microLabel} pt-1`}>Sold</p>
            </div>
            <div className="ml-3.5 border-l-[0.8px] border-[#deddde] pl-3.5 text-right">
              <p className="font-display text-[22px] leading-[22px] text-ink">
                {(current.total - current.sold).toLocaleString("en-US")}
              </p>
              <p className={`${microLabel} pt-1`}>Units left</p>
            </div>
          </div>
        </div>
        <p className="pt-1.5 text-[15px] leading-[21.75px] text-stone">
          sold of <strong className="text-ink">{current.total.toLocaleString("en-US")}</strong> units in the{" "}
          {current.name}
        </p>
        <div
          role="progressbar"
          aria-label={`${current.name} units sold`}
          aria-valuenow={soldPct}
          aria-valuemin={0}
          aria-valuemax={100}
          className="mt-[18px] h-2.5 rounded-[99px] bg-[#dce3e7]"
        >
          <div className="h-full rounded-[99px] bg-brand-gradient" style={{ width: `${Math.max(soldPct, 2)}%` }} />
        </div>

        <div className="mt-5 flex items-center justify-between gap-4 rounded-lg border-[0.8px] border-[#deddde] px-3.5 py-3">
          <p className="max-w-[100px] font-display text-[11px] leading-[14px] tracking-[1.4px] text-ink uppercase">
            {current.name} ships in
          </p>
          <div className="flex" aria-live="off">
            {units.map((unit, i) => (
              <div
                key={unit}
                className={`w-[46px] text-center ${i > 0 ? "border-l-[0.8px] border-[#deddde]" : ""}`}
              >
                <p className="font-display text-[26px] leading-[26px] text-ink tabular-nums">
                  {countdown ? String(countdown[i]).padStart(2, "0") : "--"}
                </p>
                <p className={`${microLabel} pt-1`}>{unit}</p>
              </div>
            ))}
          </div>
        </div>

        <label className="mt-3.5 flex cursor-pointer items-start gap-3 rounded-xl border-[0.8px] border-[#deddde] p-3.5 has-checked:border-ink">
          <input
            type="checkbox"
            checked={withCare}
            onChange={(event) => setWithCare(event.target.checked)}
            className="mt-0.5 size-5 shrink-0 accent-ink"
          />
          <Image src="/images/products/echo-flask/icon-care.svg" alt="" width={30} height={38} className="shrink-0" />
          <span className="flex flex-1 flex-col">
            <span className="flex flex-wrap justify-between gap-x-4 text-[15px] leading-[21.75px] font-semibold text-ink">
              <span>{flaskCarePlan.name}</span>
              <span>{flaskCarePlan.priceLabel}</span>
            </span>
            <span className="pt-[5px] text-[13px] leading-[19.5px] text-pretty text-stone">
              {flaskCarePlan.body}
            </span>
          </span>
        </label>

        <button
          type="button"
          onClick={() =>
            addItem({
              slug: product.slug,
              price: product.price ?? 0,
              variant: withCare ? `${current.name} · with Echo Care+` : current.name,
            })
          }
          className="mt-3 flex h-14 items-center justify-center rounded-lg bg-ink text-base leading-4 font-semibold text-white transition-opacity hover:opacity-90"
        >
          Add to Cart
        </button>

        <ul className="mt-3.5 overflow-hidden rounded-lg border-[0.8px] border-[#deddde]">
          {flaskAssurances.map((item, i) => (
            <li
              key={item.title}
              className={`flex gap-3 px-3.5 py-3 ${i > 0 ? "border-t-[0.8px] border-[#deddde]" : ""}`}
            >
              <Image src={item.icon} alt="" width={20} height={20} className="mt-px size-5 shrink-0" />
              <div>
                <p className={microLabel}>{item.kicker}</p>
                <p className="pt-0.5 text-sm leading-[20.3px] font-semibold text-ink">{item.title}</p>
                <p className="pt-0.5 text-[13px] leading-[18.85px] text-stone">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between rounded-b-[15px] border-t-[0.8px] border-[#deddde] px-[18px] py-3.5">
        <span className="text-[15px] leading-[21.75px] text-stone">
          {next.name} <span className="pl-1 text-[13px]">{next.ships}</span>
        </span>
        <span className={`${kicker} text-stone`}>Not open yet</span>
      </div>
    </div>
  );
}
