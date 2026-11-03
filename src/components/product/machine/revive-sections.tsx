import Image from "next/image";

import { Kicker, sectionHeading } from "@/components/product/machine/section-parts";
import { InertLink } from "@/components/ui/inert-link";
import { cn } from "@/lib/utils";

const base = "/images/products/echo-revive";

const homes = [
  {
    place: "$30M Puerto Rico compound",
    name: "Jake Paul",
    body: "Parked at the foot of the tub in the primary bath of his Puerto Rico compound for when recovery is critical to win.",
    image: `${base}/seen-jake-paul.jpg`,
    thumb: `${base}/seen-jake-paul-thumb.jpg`,
  },
  {
    place: "$3M longevity home",
    name: "Kayla Barnes-Lentz",
    body: "Hose in the soaking tub, machine on the marble - the ECHO Revive is a key feature in a house engineered for longevity.",
    image: `${base}/seen-kayla-barnes-lentz.jpg`,
    thumb: `${base}/seen-kayla-barnes-lentz-thumb.jpg`,
  },
];

/** "As seen in" — two home-tour cards. The "Check it out" videos aren't linked yet. */
export function ReviveSeenIn() {
  return (
    <section className="bg-night px-6 py-20 text-white lg:py-[104px]">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-[900px]">
          <Kicker tone="line" className="text-[#cdd3d8] [&>span]:bg-[#cdd3d8]">
            As seen in
          </Kicker>
          <h2 className={cn(sectionHeading, "pt-[18px] text-[44px] leading-[0.96] sm:text-[68px]")}>
            The ECHO Revive lives in the bathrooms people tour.
          </h2>
        </div>
        <p className="max-w-[377px] text-base leading-[25.6px] text-pretty text-[#a7a5a6]">
          No plumbing or maintenance, which is why it turns up in homes built around peak performance and longevity.
        </p>
      </div>

      <ul className="grid gap-[30px] pt-16 lg:grid-cols-2">
        {homes.map((home) => (
          <li key={home.name} className="relative min-h-[480px] overflow-hidden rounded-2xl bg-black lg:min-h-[586px]">
            <Image
              src={home.image}
              alt={`ECHO Revive in ${home.name}'s bathroom`}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-b from-[rgba(18,18,18,0.94)] via-[rgba(18,18,18,0.35)] via-55% to-[rgba(18,18,18,0.08)]"
            />
            <div className="relative p-6 sm:p-10">
              <p className="font-heading text-[11px] leading-[16.5px] tracking-[1.54px] text-[#cdd3d8] uppercase">{home.place}</p>
              <h3 className="pt-3 font-heading text-[40px] leading-[0.94] font-bold tracking-[-0.02em] sm:text-[54px]">{home.name}</h3>
              <p className="max-w-[366px] pt-3.5 text-[15.5px] leading-[24px] text-[#d6d4d5]">{home.body}</p>
              <InertLink className="mt-[22px] flex items-center gap-3.5 text-[14.5px] leading-[21.75px] font-semibold">
                <span className="relative block h-[58px] w-[104px] overflow-hidden rounded-lg bg-black">
                  <Image src={home.thumb} alt="" fill sizes="104px" className="object-cover" />
                </span>
                Check it out →
              </InertLink>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

const reasons = [
  {
    title: "Whole-body contact",
    body: "Skin is your largest organ. A soak exposes all of it to hydrogen-rich water instead of one glass at a time.",
  },
  {
    title: "Recovery, not routine",
    body: "Studied alongside sauna and cold plunge as a recovery modality — with none of the heat shock or the shivering.",
  },
  {
    title: "Skin and comfort",
    body: "Published work on hydrogen bathing looks at wrinkles, blotches and skin conditions such as psoriasis.",
  },
  {
    title: "Nothing added",
    body: "No salts, no oils, no chemistry. Electrolysis splits the water; the hydrogen goes into your tub.",
  },
];

/** "Why bathe in it" — full-bleed image band with headline, then four numbered reasons. */
export function ReviveWhyBathe() {
  return (
    <section className="bg-night text-white">
      <div className="relative flex min-h-[560px] items-end overflow-hidden lg:min-h-[652px]">
        <Image src={`${base}/why-bathe.jpg`} alt="" fill sizes="100vw" className="object-cover" />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-[rgba(18,18,18,0.92)] via-[rgba(18,18,18,0.55)] via-42% to-[rgba(18,18,18,0.15)]"
        />
        <div className="relative px-6 py-16 lg:py-[88px]">
          <Kicker tone="line" className="text-[#cdd3d8] [&>span]:bg-[#cdd3d8]">
            Why bathe in it
          </Kicker>
          <h2 className={cn(sectionHeading, "max-w-[1272px] pt-[18px] text-[44px] leading-[0.98] sm:text-[72px]")}>
            Drinking it reaches your gut. Bathing reaches all of you.
          </h2>
          <p className="max-w-[660px] pt-[22px] text-[17px] leading-[1.6] text-pretty text-[#d6d4d5] sm:text-[19px]">
            Molecular hydrogen is small enough to pass through skin. A hydrogen bath puts your entire body surface in contact with it at
            once — every joint, every sore muscle, every square inch of skin — for as long as you stay in the water.
          </p>
        </div>
      </div>

      <ol className="grid gap-11 px-6 pt-[72px] pb-24 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((reason, i) => (
          <li key={reason.title}>
            <span className="text-brand-gradient font-heading text-[44px] leading-[44px] font-bold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="pt-4 font-heading text-2xl leading-[25.2px] font-medium tracking-[-0.02em]">{reason.title}</h3>
            <p className="pt-2.5 text-[15px] leading-6 text-pretty text-[#a7a5a6]">{reason.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
