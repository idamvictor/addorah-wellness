"use client";

import Image from "next/image";
import { useState } from "react";

import { Kicker, sectionHeading } from "@/components/product/machine/section-parts";
import { cn } from "@/lib/utils";

const base = "/images/products/echo-ultimate";

const options = [
  {
    tab: "Under the sink",
    // The design only showed the countertop panel; this panel is built from the page's own FAQ facts.
    title: "Out of sight, under the sink",
    body: "The machine sits in the cabinet and water comes up through the ECHO Digital Faucet, which installs alongside your primary kitchen faucet rather than replacing it.",
    rows: [
      { label: "Digital faucet", value: "Required · sold separately" },
      { label: "Counter footprint", value: "None" },
      { label: "Primary faucet", value: "Stays in place" },
    ],
    image: { src: `${base}/gallery-06.png`, alt: "ECHO Digital Faucet with touchscreen" },
  },
  {
    tab: "On the counter",
    title: "Straight onto the countertop",
    body: "Connect to your existing faucet with the included diverter and flexible spout.",
    rows: [
      { label: "Digital faucet", value: "Not needed" },
      { label: "Plumbing work", value: "None · diverter included" },
      { label: "Counter footprint", value: "10 × 9 in · 14.7 lbs" },
      { label: "Setup time", value: "Under 15 minutes" },
    ],
    image: { src: `${base}/gallery-03.jpg`, alt: "ECHO Ultimate installed on a kitchen counter" },
  },
];

/** "Two ways to put it in your kitchen." — tabbed install options, countertop selected by default. */
export function UltimateInstall() {
  const [active, setActive] = useState(1);
  const option = options[active];

  return (
    <section className="px-6 py-20 lg:py-[104px]">
      <div className="max-w-[760px]">
        <Kicker>Installation</Kicker>
        <h2 className={cn(sectionHeading, "pt-[18px] text-[40px] leading-none text-ink sm:text-[60px]")}>
          Two ways to put it in your kitchen.
        </h2>
      </div>

      <div role="tablist" aria-label="Installation options" className="flex flex-wrap gap-2.5 pt-9">
        {options.map((item, i) => (
          <button
            key={item.tab}
            id={`install-tab-${i}`}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-controls="install-panel"
            onClick={() => setActive(i)}
            className={cn(
              "rounded-lg border-[0.8px] px-[26px] py-3.5 text-base leading-6 font-semibold transition-colors",
              i === active ? "border-ink bg-ink text-white" : "border-[#deddde] bg-white text-stone hover:border-ink",
            )}
          >
            {item.tab}
          </button>
        ))}
      </div>

      <div
        id="install-panel"
        role="tabpanel"
        aria-labelledby={`install-tab-${active}`}
        className="grid items-center gap-[60px] pt-9 lg:grid-cols-2"
      >
        <div>
          <h3 className={cn(sectionHeading, "text-[30px] leading-[1.05] text-ink sm:text-[38px]")}>{option.title}</h3>
          <p className="max-w-[527px] pt-[18px] text-[17px] leading-[27.2px] text-pretty text-stone">{option.body}</p>
          <dl className="mt-7 border-t-[0.8px] border-[#deddde]">
            {option.rows.map((row) => (
              <div key={row.label} className="flex justify-between gap-6 border-b-[0.8px] border-[#deddde] py-[15px] text-[15px] leading-[22.5px]">
                <dt className="text-[#807c85]">{row.label}</dt>
                <dd className="text-right text-ink">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative aspect-square overflow-hidden bg-mist">
          <Image src={option.image.src} alt={option.image.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
