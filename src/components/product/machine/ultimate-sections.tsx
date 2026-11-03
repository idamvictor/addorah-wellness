import Image from "next/image";

import { Kicker, sectionHeading } from "@/components/product/machine/section-parts";
import { getProduct } from "@/lib/catalog";
import { formatNGN } from "@/lib/format";
import { cn } from "@/lib/utils";

const base = "/images/products/echo-ultimate";

const machines = [
  {
    title: "Hydrogen generator",
    body: "Up to 1.46 ppm dissolved molecular hydrogen, on tap, for the whole household — not one 12 oz bottle at a time.",
  },
  {
    title: "Alkaline ionizer",
    body: "Four selectable levels. A genuine surfactant for produce and counters, without a cabinet of sprays.",
  },
  {
    title: "Acidic water",
    body: "Echo Ultimate produces hypochlorous acid (HOCl) in mildly acidic water, at four selectable levels. Hypochlorous acid is an ingredient used in some cleaning and food-service products.",
  },
  {
    title: "5-stage filtration",
    body: "Up to 99% of contaminants removed — heavy metals, chlorine, chloramines, glyphosate to non-detectable.",
  },
];

/** "It replaces four machines, not one." — dark section with four numbered cards and two headline stats. */
export async function UltimateFourMachines() {
  // The design's "$1.37 per day" is the US price over ten years; the same sum is done on this store's NGN price.
  const price = (await getProduct("echo-ultimate"))?.price ?? 0;
  const perDay = formatNGN(Math.round(price / 3650)).replace(/\.00$/, "");

  return (
    <section className="bg-night px-6 py-20 text-white lg:py-28">
      <div className="max-w-[820px]">
        <Kicker tone="line" className="text-[#cdd3d8] [&>span]:bg-[#cdd3d8]">
          What you&apos;re actually buying
        </Kicker>
        <h2 className={cn(sectionHeading, "pt-[18px] text-[44px] leading-none sm:text-[64px]")}>
          It replaces four machines, not one.
        </h2>
        <p className="pt-[22px] text-[17px] leading-[1.6] text-pretty text-[#a7a5a6] sm:text-[19px]">
          Most homes solve these problems separately — a filter pitcher, an ionizer, a countertop hydrogen generator, a bottle of
          cleaning spray. <strong className="font-bold text-white">The Ultimate does all four from one water line, and does each one properly.</strong>
        </p>
      </div>

      <ol className="mt-16 grid gap-px bg-white/16 sm:grid-cols-2 lg:grid-cols-4">
        {machines.map((machine, i) => (
          <li key={machine.title} className="bg-night px-[26px] pt-[30px] pb-[34px]">
            <span className="text-brand-gradient font-heading text-[44px] leading-[44px] font-bold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="pt-4 font-heading text-2xl leading-[25.2px] font-medium tracking-[-0.02em]">{machine.title}</h3>
            <p className="pt-2.5 text-[14.5px] leading-[23.2px] text-pretty text-[#a7a5a6]">{machine.body}</p>
          </li>
        ))}
      </ol>

      <dl className="mt-16 grid gap-8 border-t-[0.8px] border-white/16 pt-9 md:grid-cols-2">
        <div>
          <dt className="sr-only">Cost per day</dt>
          <dd>
            <span className="text-brand-gradient block font-heading text-[56px] leading-[72px] font-bold sm:text-[80px]">{perDay}</span>
            <span className="block pt-3.5 text-[15px] leading-[23.25px] text-[#a7a5a6]">
              Per day across the ten years it&apos;s warrantied for. Less than the bottled water it replaces.
            </span>
          </dd>
        </div>
        <div>
          <dt className="sr-only">Machines that do this</dt>
          <dd>
            <span className="block font-heading text-[56px] leading-[72px] font-bold sm:text-[80px]">1</span>
            <span className="block pt-3.5 text-[15px] leading-[23.25px] text-[#a7a5a6]">
              Machine in the world that produces all four water types. There is no second one.
            </span>
          </dd>
        </div>
      </dl>
    </section>
  );
}

type Water = {
  kicker: string;
  /** Static colour classes for the kicker and badge (Tailwind needs full strings). */
  accent: string;
  badgeAccent: string;
  heading: string;
  badge?: string;
  body: string;
  image: { src: string; alt: string };
  imageSide: "left" | "right";
  theme: "white" | "mist" | "dark";
  benefits?: string[];
  levels?: { label: string; use: string }[];
  /** Grid-style level list (white cells) instead of lined rows. */
  levelCells?: boolean;
  bigStats?: { value: string; label: string }[];
  stats?: { value: string; label: string }[];
  chips?: string[];
  note?: string;
};

const waters: Water[] = [
  {
    kicker: "Water 01 · Drink",
    accent: "text-teal",
    badgeAccent: "border-teal text-teal",
    heading: "Hydrogen Water Machine",
    badge: "Up to 1.46 ppm",
    body: "Filtered molecular hydrogen water on tap for the whole household. This is the best water to drink all day.",
    image: { src: `${base}/gallery-04.jpg`, alt: "Filling a bottle with hydrogen water at the sink" },
    imageSide: "right",
    theme: "white",
    benefits: [
      "Reduces oxidative stress",
      "Supports gut health",
      "Supports brain function",
      "Increases energy",
      "Improves recovery",
      "Lowers athletic fatigue",
      "Improves sleep",
    ],
    bigStats: [
      { value: "40+", label: "Studied health benefits of molecular hydrogen." },
      { value: "2,200+", label: "Peer-reviewed studies on hydrogen therapy to date." },
    ],
  },
  {
    kicker: "Water 02 · Clean",
    accent: "text-[#395382]",
    badgeAccent: "border-[#395382] text-[#395382]",
    heading: "Alkaline Water Machine",
    badge: "4 levels",
    body: "Ionized alkaline water is a genuine surfactant — it lifts dirt, wax and residue off produce and countertops. Each level steps the pH up, and the higher you go, the harder it cleans.",
    image: { src: `${base}/gallery-03.jpg`, alt: "Washing produce with alkaline water at the kitchen sink" },
    imageSide: "left",
    theme: "mist",
    levels: [
      { label: "LVL 1–2", use: "Up to pH 9 · safe to drink, mild rinse" },
      { label: "LVL 3", use: "Produce washing · lifts pesticide residue" },
      { label: "LVL 4", use: "Counters, grease, hard cleaning" },
    ],
    note: "Not recommended for drinking above level 2 (pH 9). Consult your physician before drinking alkaline water.",
  },
  {
    kicker: "Water 03 · Acidic",
    accent: "text-[#7c6992]",
    badgeAccent: "border-[#7c6992] text-[#7c6992]",
    heading: "Acidic Water Machine",
    badge: "4 levels",
    body: "Echo Ultimate produces hypochlorous acid (HOCl), a mild acidic water. Hypochlorous acid is an ingredient used in some cleaning and food-service products.",
    image: { src: `${base}/gallery-02.jpg`, alt: "Rinsing an orange under acidic water at the sink" },
    imageSide: "right",
    theme: "white",
    levelCells: true,
    levels: [
      { label: "LVL 1", use: "Facial cleansing, mouthwash, watering plants" },
      { label: "LVL 2", use: "Skin care, gargling, hair rinse, astringent" },
      { label: "LVL 3", use: "General cleaning around the kitchen" },
      { label: "LVL 4", use: "Kitchen surfaces and rinsing produce" },
    ],
    note: "Do not drink acidic water.",
  },
  {
    kicker: "Water 04 · Filter",
    accent: "text-[#7fa0ac]",
    badgeAccent: "border-[#7fa0ac] text-[#7fa0ac]",
    heading: "Filtered water",
    body: "Leave your tap behind. Five stages, engineered in the USA, every component NSF-certified to ANSI 42. Third-party tested to remove glyphosate to a non-detectable level.",
    image: { src: `${base}/water-filtered.jpg`, alt: "Drinking filtered water from the ECHO Ultimate" },
    imageSide: "left",
    theme: "dark",
    stats: [
      { value: "99%", label: "Contaminants removed" },
      { value: "5", label: "Filtration stages" },
      { value: "ND", label: "Glyphosate, 3rd-party tested" },
    ],
    chips: [
      "Chlorine",
      "Chloramines",
      "Lead",
      "Mercury",
      "Arsenic",
      "Nickel",
      "Copper",
      "Chromium 6",
      "Pesticides",
      "Glyphosate",
      "Bacteria",
      "Viruses",
      "Fungus",
      "Algae",
      "Radiation",
    ],
    note: "Cartridges last up to 1,000 gallons for chlorine removal and 500 gallons for chloramine — roughly a year of household use.",
  },
];

function WaterBlock({ water }: { water: Water }) {
  const dark = water.theme === "dark";
  const line = dark ? "border-white/16" : "border-[#deddde]";

  return (
    <section
      className={cn(
        "grid items-center gap-x-[60px] gap-y-10 px-6 lg:grid-cols-2",
        water.theme === "mist" && "bg-mist",
        dark && "bg-[#1f2226] text-white",
      )}
    >
      <div
        className={cn(
          "relative -mx-6 aspect-[694/867] max-h-[867px] lg:mx-0",
          water.imageSide === "right" && "lg:order-2",
          dark ? "bg-night" : "bg-mist",
        )}
      >
        <Image src={water.image.src} alt={water.image.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
      </div>

      <div className="pb-16 lg:py-20">
        <p className={cn("font-heading text-sm leading-[21px] tracking-[1.96px] uppercase", water.accent)}>{water.kicker}</p>
        <h3 className={cn(sectionHeading, "pt-3.5 text-[36px] leading-none sm:text-[48px]", dark ? "text-white" : "text-ink")}>
          {water.heading}
        </h3>
        {water.badge && (
          <p
            className={cn(
              "mt-3.5 inline-block rounded-full border-[0.8px] px-4 py-1.5 font-heading text-[11px] leading-[16.5px] tracking-[1.54px] uppercase",
              water.badgeAccent,
            )}
          >
            {water.badge}
          </p>
        )}
        <p className={cn("max-w-[527px] pt-5 text-[17px] leading-[27.2px] text-pretty", dark ? "text-[#a7a5a6]" : "text-stone")}>
          {water.body}
        </p>

        {water.benefits && (
          <ul className={cn("mt-7 grid gap-x-6 gap-y-2.5 border-t-[0.8px] pt-6 sm:grid-cols-3", line)}>
            {water.benefits.map((benefit) => (
              <li key={benefit} className="text-[15px] leading-[22.5px] text-ink">
                {benefit}
              </li>
            ))}
          </ul>
        )}

        {water.bigStats && (
          <dl className={cn("mt-8 grid gap-7 border-t-[0.8px] pt-7 sm:grid-cols-2", line)}>
            {water.bigStats.map((stat) => (
              <div key={stat.value}>
                <dt className="text-brand-gradient font-heading text-[48px] leading-[54px] font-bold sm:text-[60px]">{stat.value}</dt>
                <dd className="pt-3 text-[14.5px] leading-[22.5px] text-pretty text-stone">{stat.label}</dd>
              </div>
            ))}
          </dl>
        )}

        {water.levels && (
          <dl
            className={cn(
              "mt-7",
              water.levelCells ? "grid gap-px bg-[#deddde]" : cn("border-t-[0.8px]", line),
            )}
          >
            {water.levels.map((level) => (
              <div
                key={level.label}
                className={cn(
                  "flex gap-[18px]",
                  water.levelCells ? "bg-white py-4" : cn("border-b-[0.8px] py-3.5", line),
                )}
              >
                <dt className="min-w-16 font-heading text-xs leading-[18px] tracking-[1.44px] text-[#807c85]">{level.label}</dt>
                <dd className="text-[15px] leading-[22.5px] text-ink">{level.use}</dd>
              </div>
            ))}
          </dl>
        )}

        {water.stats && (
          <dl className="grid grid-cols-3 gap-6 pt-8">
            {water.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-heading text-[28px] leading-[51px] font-bold sm:text-[34px]">{stat.value}</dt>
                <dd className="pt-1 text-[13.5px] leading-[20.25px] text-[#a7a5a6]">{stat.label}</dd>
              </div>
            ))}
          </dl>
        )}

        {water.chips && (
          <>
            <p className={cn("pt-9 font-heading text-sm leading-[21px] tracking-[1.96px] uppercase", water.accent)}>What comes out</p>
            <ul className="flex flex-wrap gap-2 pt-4">
              {water.chips.map((chip) => (
                <li key={chip} className="rounded-full border-[0.8px] border-white/24 px-4 py-2 text-sm leading-[21px] text-[#e6e6e6]">
                  {chip}
                </li>
              ))}
            </ul>
          </>
        )}

        {water.note && (
          <p className={cn("pt-4 text-[13px] leading-[19.5px] text-pretty text-[#807c85]", water.chips && "pt-6")}>{water.note}</p>
        )}
      </div>
    </section>
  );
}

/** "One dial moves you across the pH spectrum." followed by the four water blocks. */
export function UltimateWaters() {
  return (
    <>
      <section className="px-6 pt-20 pb-10 lg:pt-[104px]">
        <Kicker>The four waters</Kicker>
        <h2 className={cn(sectionHeading, "max-w-[1272px] pt-[18px] text-[44px] leading-[0.98] text-ink sm:text-[72px]")}>
          One dial moves you across the pH spectrum.
        </h2>
        <div aria-hidden className="bg-brand-gradient mt-10 h-[1.5px]" />
        <ul className="flex justify-between gap-4 pt-3.5 font-heading text-xs leading-[18px] tracking-[1.44px] text-stone uppercase">
          <li>Acidic · pH 2.5</li>
          <li>Neutral · pH 7</li>
          <li>Alkaline · pH 11</li>
        </ul>
      </section>
      {waters.map((water) => (
        <WaterBlock key={water.kicker} water={water} />
      ))}
    </>
  );
}
