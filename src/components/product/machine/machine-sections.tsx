import Image from "next/image";

import { AddToCartLink } from "@/components/product/machine/add-to-cart-link";
import { Kicker, sectionHeading } from "@/components/product/machine/section-parts";
import { MiniBuyCard } from "@/components/product/machine/mini-buy-card";
import { SpecialistForm } from "@/components/product/machine/specialist-form";
import { FaqList } from "@/components/sections/faq-section";
import { InertLink } from "@/components/ui/inert-link";
import type { MachineBuyBox, MachineSection } from "@/data/product-pages/machine";
import type { Product } from "@/data/products";
import { cn } from "@/lib/utils";

type Section<K extends MachineSection["kind"]> = Extract<MachineSection, { kind: K }>;

const shared = "/images/products/shared";

export function CertsRow({ logos }: Section<"certs">) {
  return (
    <section className="border-b-[0.8px] border-[#deddde]">
      <ul className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-center gap-8 px-6 py-10 sm:gap-14">
        {logos.map((logo) => (
          <li key={logo.src}>
            <Image src={logo.src} alt={logo.alt} width={62} height={62} className="size-[62px] object-contain opacity-75" />
          </li>
        ))}
      </ul>
    </section>
  );
}

export function IntroCards({ kicker, kickerTone, heading, body, cards, media }: Section<"intro">) {
  const copy = (
    <div className={media ? undefined : "max-w-[860px]"}>
      {kicker && <Kicker tone={kickerTone}>{kicker}</Kicker>}
      <h2
        className={cn(
          sectionHeading,
          "pt-[18px] text-ink",
          media ? "text-[40px] leading-none sm:text-[52px]" : "text-[44px] leading-[0.98] sm:text-[72px]",
        )}
      >
        {heading}
      </h2>
      <p className="max-w-[860px] pt-[22px] text-[17px] leading-[1.6] text-pretty text-stone sm:text-[19px]">{body}</p>
    </div>
  );

  return (
    <section className="px-6 pt-20 pb-10 lg:pt-[104px]">
      {media ? (
        <div className="grid items-center gap-[60px] lg:grid-cols-2">
          {copy}
          {/* The design embeds a product video here; the video itself isn't supplied yet. */}
          <div className="flex aspect-[694/390] items-center justify-center rounded-2xl bg-[#eee] shadow-[0_4px_8px_rgba(0,0,0,0.12)]">
            <span className="flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-base font-semibold text-ink">
              <Image src="/images/experts/icon-play.svg" alt="" width={24} height={24} />
              Video coming soon
            </span>
          </div>
        </div>
      ) : (
        copy
      )}
      <ol className={cn("grid gap-11 sm:grid-cols-2 lg:grid-cols-4", media ? "pt-[72px]" : "pt-10")}>
        {cards.map((card, i) => (
          <li key={card.title}>
            <span className="text-brand-gradient font-heading text-[44px] leading-[44px] font-bold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="pt-4 font-heading text-2xl leading-[25.2px] font-medium tracking-[-0.02em] text-balance text-ink">
              {card.title}
            </h3>
            <p className="pt-2.5 text-[15px] leading-6 text-pretty text-stone">{card.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function FeatureSplit({
  theme,
  kicker,
  kickerTone,
  heading,
  body,
  items,
  bullets,
  footnote,
  numbered,
  rows,
  image,
  imageSide,
}: Section<"split">) {
  const dark = theme === "dark";

  return (
    <section
      className={cn(
        "grid items-center gap-[60px] px-6 py-24 lg:grid-cols-2",
        theme === "mist" && "bg-mist",
        dark && "bg-[#1f2226]",
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden",
          imageSide === "right" && "lg:order-2",
          image.fit === "contain" ? (dark ? "bg-night" : "bg-white") : "bg-white",
          image.aspect ?? "aspect-[694/867]",
        )}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className={image.fit === "contain" ? "object-contain" : "object-cover"}
        />
      </div>
      <div>
        {kicker && <Kicker tone={kickerTone ?? (dark ? "mist" : "teal")}>{kicker}</Kicker>}
        <h3
          className={cn(sectionHeading, "pt-3.5 text-[36px] leading-none sm:text-[48px]", dark ? "text-white" : "text-ink")}
        >
          {heading}
        </h3>
        {body && (
          <p className={cn("max-w-[527px] pt-5 text-[17px] leading-[27.2px] text-pretty", dark ? "text-[#a7a5a6]" : "text-stone")}>
            {body}
          </p>
        )}
        {bullets && (
          <ul className="grid gap-x-8 gap-y-3.5 pt-7 sm:grid-cols-2">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3 text-[15.5px] leading-[22.5px] text-ink">
                <Image src={`${shared}/icon-check-teal.svg`} alt="" width={16} height={16} className="mt-[3px] size-4 shrink-0" />
                {bullet}
              </li>
            ))}
          </ul>
        )}
        {rows && (
          <dl className={cn("mt-7 border-t-[0.8px]", dark ? "border-white/16" : "border-[#deddde]")}>
            {rows.map((row) => (
              <div
                key={row.label}
                className={cn(
                  "flex justify-between gap-6 border-b-[0.8px] py-3.5 text-[15px] leading-[22.5px]",
                  dark ? "border-white/16" : "border-[#deddde]",
                )}
              >
                <dt className="text-[#807c85]">{row.label}</dt>
                <dd className={cn("text-right font-medium", dark ? "text-white" : "text-ink")}>{row.value}</dd>
              </div>
            ))}
          </dl>
        )}
        {items && (
        <ul className={cn("mt-8 border-t-[0.8px]", dark ? "border-white/16" : "border-[#deddde]")}>
          {items.map((item, i) => (
            <li
              key={item.title}
              className={cn("flex gap-[22px] border-b-[0.8px] py-5", dark ? "border-white/16" : "border-[#deddde]")}
            >
              {numbered && (
                <span className="min-w-7 pt-[3px] font-heading text-xs leading-[18px] tracking-[1.44px] text-[#807c85]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              )}
              <div className="max-w-[521px]">
                <p className={cn("text-[17px] leading-[25.5px] font-semibold", dark ? "text-white" : "text-ink")}>{item.title}</p>
                <p className={cn("pt-1.5 text-[15px] leading-6 text-pretty", dark ? "text-[#a7a5a6]" : "text-stone")}>
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
        )}
        {footnote && <p className="max-w-[694px] pt-[22px] text-[12.5px] leading-5 text-pretty text-[#807c85]">{footnote}</p>}
      </div>
    </section>
  );
}

export function Checklist({ kicker, kickerTone, heading, body, links, items }: Section<"checklist">) {
  // Title-only items render as a lined list; titled items with copy as a spaced list.
  const lined = items.every((item) => !item.body);

  return (
    <section className="grid gap-[60px] px-6 py-20 lg:grid-cols-2 lg:py-[104px]">
      <div>
        {kicker && <Kicker tone={kickerTone}>{kicker}</Kicker>}
        <h2 className={cn(sectionHeading, "text-[40px] leading-none text-ink sm:text-[52px]", kicker && "pt-[18px]")}>
          {heading}
        </h2>
        <p className="max-w-[417px] pt-5 text-base leading-[25.6px] text-pretty text-stone">{body}</p>
        {links && (
          <div className="flex flex-wrap gap-5 pt-6">
            {links.map((link) => (
              <InertLink key={link} className="text-[15px] leading-[22.5px] font-medium text-teal">
                {link}
              </InertLink>
            ))}
          </div>
        )}
      </div>
      <ul className={lined ? "self-start border-t-[0.8px] border-[#deddde]" : undefined}>
        {items.map((item) =>
          lined ? (
            <li
              key={item.title}
              className="flex items-center gap-[18px] border-b-[0.8px] border-[#deddde] py-[18px] text-[17px] leading-[25.5px] text-ink"
            >
              <Image src={`${shared}/icon-check-teal.svg`} alt="" width={18} height={18} className="size-[18px] shrink-0" />
              {item.title}
            </li>
          ) : (
            <li key={item.title} className="flex gap-[18px] py-[22px]">
              <Image src={`${shared}/icon-check-teal.svg`} alt="" width={20} height={20} className="mt-1 size-5 shrink-0" />
              <div>
                <p className="text-[17.5px] leading-[26.25px] font-semibold text-ink">{item.title}</p>
                <p className="pt-[7px] text-[15px] leading-6 text-pretty text-stone">{item.body}</p>
              </div>
            </li>
          ),
        )}
      </ul>
    </section>
  );
}

export function InstallOptions({ kicker, kickerTone, heading, body, options }: Section<"options">) {
  return (
    <section className="bg-mist px-6 py-24">
      <div className="max-w-[720px]">
        {kicker && <Kicker tone={kickerTone ?? "teal"}>{kicker}</Kicker>}
        <h2 className={cn(sectionHeading, "pt-3.5 text-[36px] leading-none text-ink sm:text-[48px]")}>{heading}</h2>
        <p className="pt-5 text-[17px] leading-[27.2px] text-pretty text-stone">{body}</p>
      </div>
      <div className="grid gap-11 pt-11 lg:grid-cols-2">
        {options.map((option) => (
          <article key={option.title} className="bg-white">
            <div className="relative aspect-[702/526]">
              <Image src={option.image.src} alt={option.image.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="p-6 sm:p-9">
              <Kicker tone="line" className="[&>span]:hidden">
                {option.label}
              </Kicker>
              <h3 className="pt-3.5 font-heading text-[28px] leading-[29.4px] font-medium tracking-[-0.02em] text-ink">
                {option.title}
              </h3>
              <p className="pt-3.5 text-[15.5px] leading-[24.8px] text-pretty text-stone">{option.body}</p>
              <dl className="mt-[22px] border-t-[0.8px] border-[#deddde]">
                {option.rows.map((row) => (
                  <div
                    key={row.label}
                    className="flex justify-between gap-4 border-b-[0.8px] border-[#deddde] py-[13px] text-[14.5px] leading-[21.75px]"
                  >
                    <dt className="text-[#807c85]">{row.label}</dt>
                    <dd className="text-right font-medium text-ink">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Upsell({ kicker, kickerTone, heading, body, slug, ctaLabel, image, tableTitle, rows, note }: Section<"upsell">) {
  return (
    <section className="grid items-center gap-[60px] bg-mist px-6 py-24 lg:grid-cols-2">
      <div>
        {kicker && <Kicker tone={kickerTone ?? "teal"}>{kicker}</Kicker>}
        <h3 className={cn(sectionHeading, "pt-3.5 text-[36px] leading-none text-ink sm:text-[48px]")}>{heading}</h3>
        <p className="max-w-[527px] pt-5 text-[17px] leading-[27.2px] text-pretty text-stone">{body}</p>
        <AddToCartLink slug={slug} className="mt-8 inline-flex rounded-lg bg-ink px-[34px] py-[17px] text-base leading-6 font-semibold text-white">
          {ctaLabel}
        </AddToCartLink>
      </div>
      <div className="bg-white">
        <div className="relative aspect-[694/520] border-b-[0.8px] border-[#deddde]">
          <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
        <div className="p-6 sm:p-11">
          <Kicker tone="line" className="[&>span]:hidden">
            {tableTitle}
          </Kicker>
          <dl className="mt-[22px] border-t-[0.8px] border-[#deddde]">
            {rows.map((row) => (
              <div key={row.label} className="flex justify-between gap-4 border-b-[0.8px] border-[#deddde] py-4 text-[15.5px] leading-[23.25px]">
                <dt className="font-medium text-ink">{row.label}</dt>
                <dd className="text-right text-[#807c85]">{row.value}</dd>
              </div>
            ))}
          </dl>
          {note && <p className="pt-[18px] text-[13px] leading-[20.15px] text-pretty text-[#807c85]">{note}</p>}
        </div>
      </div>
    </section>
  );
}

export function Stages({ kicker, kickerTone, heading, body, stages, image }: Section<"stages">) {
  return (
    <section className="bg-mist px-6 py-20 lg:py-[104px]">
      <div className="max-w-[760px]">
        {kicker && <Kicker tone={kickerTone ?? "teal"}>{kicker}</Kicker>}
        <h2 className={cn(sectionHeading, "pt-3.5 text-[40px] leading-none text-ink sm:text-[52px]")}>{heading}</h2>
        <p className="max-w-[640px] pt-5 text-[17px] leading-[27.2px] text-pretty text-stone">{body}</p>
      </div>
      <ol className="grid gap-5 pt-12 sm:grid-cols-2 lg:grid-cols-4">
        {stages.map((stage) => (
          <li key={stage.label} className="flex flex-col bg-white p-7">
            <p className="flex items-baseline justify-between gap-3 font-heading text-xs leading-[18px] tracking-[1.44px] uppercase">
              <span className="text-teal">{stage.label}</span>
              <span className="text-[#807c85]">{stage.life}</span>
            </p>
            <h3 className="pt-6 font-heading text-2xl leading-[25.2px] font-medium tracking-[-0.02em] text-ink">{stage.title}</h3>
            <p className="pt-2.5 text-[15px] leading-6 text-pretty text-stone">{stage.body}</p>
          </li>
        ))}
      </ol>
      {image && (
        <div className="relative mx-auto mt-14 aspect-[900/560] max-w-[900px]">
          <Image src={image.src} alt={image.alt} fill sizes="(min-width: 960px) 900px, 100vw" className="object-contain" />
        </div>
      )}
    </section>
  );
}

export function Science({ kicker, kickerTone, heading, body, linkLabel, items }: Section<"science">) {
  return (
    <section className="grid gap-[60px] px-6 py-20 lg:grid-cols-2 lg:py-[104px]">
      <div>
        {kicker && <Kicker tone={kickerTone}>{kicker}</Kicker>}
        <h2 className={cn(sectionHeading, "pt-[18px] text-[40px] leading-none text-ink sm:text-[52px]")}>{heading}</h2>
        <p className="max-w-[397px] pt-5 text-base leading-[25.6px] text-pretty text-stone">{body}</p>
        {linkLabel && <InertLink className="mt-6 inline-block text-[15px] leading-[22.5px] font-medium text-teal">{linkLabel}</InertLink>}
      </div>
      <ul className="border-t-[0.8px] border-[#deddde]">
        {items.map((item) => (
          <li key={item.topic} className="border-b-[0.8px] border-[#deddde] py-[22px]">
            <p className="font-heading text-[11.5px] leading-[17.25px] tracking-[1.38px] text-[#807c85] uppercase">{item.topic}</p>
            <p className="pt-2.5 text-[17px] leading-[25.5px] text-pretty text-ink">{item.title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function QuoteBand({ text, by, meta }: Section<"quote">) {
  return (
    <section className="bg-mist px-6 py-20 text-center">
      <p aria-label="5 out of 5 stars" className="text-sm tracking-[2.24px] text-teal">
        ★★★★★
      </p>
      <blockquote className="mx-auto max-w-[860px] pt-4 font-heading text-[26px] leading-[1.3] text-balance text-ink sm:text-[34px]">
        “{text}”
      </blockquote>
      <p className="pt-5 text-sm leading-[21px] text-stone">{by}</p>
      {meta && (
        <ul className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs leading-[18px] text-[#807c85]">
          {meta.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

export function SpecTable({ heading, rows, links, note, image }: Section<"specs">) {
  return (
    <section className="grid gap-[60px] bg-mist px-6 py-20 lg:grid-cols-2 lg:py-[104px]">
      <div>
        <h2 className={cn(sectionHeading, "text-[40px] leading-none text-ink sm:text-[52px]")}>{heading}</h2>
        <dl className="mt-8 border-t-[0.8px] border-[#deddde]">
          {rows.map((row) => (
            <div key={row.label} className="flex justify-between gap-6 border-b-[0.8px] border-[#deddde] py-[15px] text-[15px] leading-[22.5px]">
              <dt className="text-[#807c85]">{row.label}</dt>
              <dd className="text-right font-medium text-ink">{row.value}</dd>
            </div>
          ))}
        </dl>
        {links && (
          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-6">
            {links.map((link) => (
              <InertLink key={link} className="text-[15px] leading-[22.5px] text-teal">
                {link}
              </InertLink>
            ))}
          </div>
        )}
        {note && <p className="pt-[22px] text-[12.5px] leading-5 text-pretty text-[#807c85]">{note}</p>}
      </div>
      <div className="relative aspect-[694/867] self-start overflow-hidden bg-white">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className={image.fit === "contain" ? "object-contain" : "object-cover"}
        />
      </div>
    </section>
  );
}

export function BandCards({ kicker, heading, body, image, lead, cards }: Section<"band">) {
  return (
    <section className="bg-night text-white">
      <div className="relative flex min-h-[560px] items-end overflow-hidden lg:min-h-[652px]">
        <Image src={image.src} alt={image.alt} fill sizes="100vw" className="object-cover" />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-[rgba(18,18,18,0.92)] via-[rgba(18,18,18,0.55)] via-42% to-[rgba(18,18,18,0.15)]"
        />
        <div className="relative px-6 py-16 lg:py-[88px]">
          {kicker && (
            <Kicker tone="line" className="text-[#cdd3d8] [&>span]:bg-[#cdd3d8]">
              {kicker}
            </Kicker>
          )}
          <h2 className={cn(sectionHeading, "max-w-[1272px] pt-[18px] text-[44px] leading-[0.98] sm:text-[72px]")}>{heading}</h2>
          <p className="max-w-[660px] pt-[22px] text-[17px] leading-[1.6] text-pretty text-[#d6d4d5] sm:text-[19px]">{body}</p>
        </div>
      </div>
      <div className="px-6 pt-[72px] pb-24">
        {lead && <p className="max-w-[754px] pb-14 text-[17px] leading-[1.6] text-pretty text-[#d6d4d5] sm:text-[19px]">{lead}</p>}
        <ol className="grid gap-11 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <li key={card.title}>
              <span className="text-brand-gradient font-heading text-[44px] leading-[44px] font-bold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="pt-4 font-heading text-2xl leading-[25.2px] font-medium tracking-[-0.02em]">{card.title}</h3>
              <p className="pt-2.5 text-[15px] leading-6 text-pretty text-[#a7a5a6]">{card.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Columns({ kicker, kickerTone, heading, body, columns }: Section<"columns">) {
  return (
    <section className="px-6 py-20 lg:py-24">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-[900px]">
          {kicker && <Kicker tone={kickerTone}>{kicker}</Kicker>}
          <h2 className={cn(sectionHeading, "pt-[18px] text-[40px] leading-[0.96] text-ink sm:text-[64px]")}>{heading}</h2>
        </div>
        <p className="max-w-[377px] text-base leading-[25.6px] text-pretty text-stone">{body}</p>
      </div>
      <ul className="grid gap-[30px] pt-14 md:grid-cols-3">
        {columns.map((column) => (
          <li key={column.label} className="border-t-[1.6px] border-ink pt-[22px]">
            <p className="font-heading text-[11px] leading-[16.5px] tracking-[1.54px] text-[#807c85] uppercase">{column.label}</p>
            <h3 className="pt-3 font-heading text-[28px] leading-[34px] font-bold tracking-[-0.02em] text-ink sm:text-[34px]">
              {column.title}
            </h3>
            <p className="max-w-[372px] pt-3 text-[15px] leading-6 text-pretty text-stone">{column.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function VideoIntro({ heading, body, byline, thumbnail }: Section<"video">) {
  return (
    <section className="grid items-center gap-[60px] bg-mist px-6 py-20 lg:grid-cols-2 lg:py-24">
      <div>
        <h2 className={cn(sectionHeading, "text-[40px] leading-none text-ink sm:text-[58px]")}>{heading}</h2>
        <p className="max-w-[485px] pt-[22px] text-[17px] leading-[27.2px] text-pretty text-stone">{body}</p>
        {byline && (
          <p className="mt-8 border-t-[0.8px] border-[#deddde] pt-[26px] text-sm leading-[21px] text-stone">{byline}</p>
        )}
      </div>
      {/* The design embeds a video here; only its thumbnail is supplied so far. */}
      <div className="relative aspect-[694/390] overflow-hidden rounded-2xl bg-night shadow-[0_4px_8px_rgba(0,0,0,0.15)]">
        <Image src={thumbnail.src} alt={thumbnail.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover opacity-85" />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-base font-semibold text-ink">
            <Image src="/images/experts/icon-play.svg" alt="" width={24} height={24} />
            Video coming soon
          </span>
        </span>
      </div>
    </section>
  );
}

export function MachineFaq({ heading, items }: Section<"faq">) {
  return (
    <section className="mx-auto w-full max-w-[900px] px-6 py-20 lg:py-[104px]">
      <h2 className={cn(sectionHeading, "text-center text-[36px] leading-[1.05] text-ink sm:text-[46px]")}>{heading}</h2>
      <div className="pt-12">
        <FaqList items={items} variant="circle" />
      </div>
    </section>
  );
}

export function Specialist({
  heading,
  body,
  card,
  product,
  variants,
}: Section<"specialist"> & { product: Product; variants?: MachineBuyBox["variants"] }) {
  return (
    <section className="grid items-center gap-[60px] bg-night px-6 py-20 text-white lg:grid-cols-2 lg:py-28">
      <div>
        <h2 className={cn(sectionHeading, "text-[40px] leading-none sm:text-[60px]")}>{heading}</h2>
        {body && <p className="max-w-[460px] pt-5 text-base leading-[25.6px] text-[#a7a5a6]">{body}</p>}
        <SpecialistForm />
      </div>
      {card && <MiniBuyCard product={product} blurb={card.blurb} variants={variants} />}
    </section>
  );
}
