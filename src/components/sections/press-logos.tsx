import Image from "next/image";

const outlets = [
  { name: "Forbes", src: "/images/press/forbes.png" },
  { name: "10X Health", src: "/images/press/10x-health.png" },
  { name: "The Diary of a CEO", src: "/images/press/doac.png" },
  { name: "NBC", src: "/images/press/nbc.png" },
  { name: "ABC", src: "/images/press/abc.png" },
  { name: "Fox News", src: "/images/press/fox-news.png" },
  { name: "Women's Health", src: "/images/press/womens-health.png" },
  { name: "The Independent", src: "/images/press/independent.png" },
];

export function PressLogos() {
  const run = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {outlets.map((outlet) => (
        <li key={outlet.name} className="pr-2.5">
          <Image
            src={outlet.src}
            alt={hidden ? "" : outlet.name}
            width={156}
            height={64}
            className="h-16 w-[156px] object-contain"
          />
        </li>
      ))}
    </ul>
  );

  return (
    <section aria-label="As featured in" className="border-y-[0.8px] border-[#b3b3b3] bg-white px-5 py-[30px]">
      <div className="relative mx-auto max-w-[1150px] overflow-hidden">
        <div className="flex w-max animate-marquee">
          {run(false)}
          {run(true)}
        </div>
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-white to-transparent" />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-white to-transparent" />
      </div>
    </section>
  );
}
