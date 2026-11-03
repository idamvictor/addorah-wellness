import Image from "next/image";

const base = "/images/products/echo-flask";

const stats = [
  { value: "2,200+", label: "Peer-Reviewed Studies" },
  { value: "150+", label: "Years of Research Across the Globe" },
  { value: "40+", label: "Proven Benefits For Every Lifestyle" },
  { value: "104K+", label: "Happy Echo Customers (and counting)" },
];

export function WellnessStats() {
  return (
    <section className="bg-black pt-[54px] pb-[62px]">
      <div className="mx-auto grid max-w-[1600px] items-center gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-[246px_repeat(4,minmax(0,1fr))] lg:gap-5">
        <p className="font-heading text-[40px] leading-[1.0] font-normal tracking-[-0.03em] text-white capitalize sm:col-span-2 lg:col-span-1 lg:text-[44px]">
          The ultimate wellness boost
        </p>
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-heading text-[52px] leading-[60px] font-normal text-white lg:text-[60px]">{stat.value}</p>
            <p className="max-w-[300px] font-heading text-xl leading-[22px] text-white lg:text-[22px]">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const reasons = [
  { title: "The Purest Form of Hydrogen", image: `${base}/why-purest.png` },
  { title: "Consistent Results", image: `${base}/why-consistent.png` },
  { title: "Leading Industry Warranty", image: `${base}/why-warranty.png` },
];

export function WhyEcho() {
  return (
    <section className="bg-black pt-[34px] pb-[30px]">
      <div className="mx-auto max-w-[1600px] px-5">
        <h2 className="font-heading text-[40px] leading-[50px] font-normal text-white">Why Echo</h2>
        <div className="grid gap-6 pt-10 md:grid-cols-3">
          {reasons.map((reason) => (
            <article key={reason.title} className="relative h-[440px] overflow-hidden rounded-[20px]">
              <Image src={reason.image} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              <span
                aria-hidden
                className="absolute top-7 right-7 flex size-10 items-center justify-center rounded-full border-[0.8px] border-white bg-black/50"
              >
                <Image src={`${base}/icon-plus-white.svg`} alt="" width={16} height={16} />
              </span>
              <h3 className="absolute inset-x-5 bottom-5 max-w-[301px] font-heading text-2xl leading-6 font-bold text-white">
                {reason.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const specColumns = [
  [
    { heading: "Flask", items: ["12 Ounces (0.36 liters)", "6 ppm | 10-minute cycle", "8 ppm | 20-minute cycle"] },
    {
      heading: "Charging",
      items: [
        "USB-C Charging Cable",
        "Charging Block",
        "Life of Charge - Up to 7 cycles",
        "Built-in rechargeable lithium-ion battery",
        "USB-C Charging Cable for charging",
      ],
    },
    { heading: "Pressure", items: ["About 40 PSI at 6 ppm, 60 PSI at 8 ppm (purge valve caps it at 60 PSI)"] },
  ],
  [
    {
      heading: "Size & Weight",
      items: [
        "Height: 10 inches (258mm)",
        "Width: 3 inches (76mm)",
        "Depth: 2 inches (48mm)",
        "Weight (empty): 1lb (455.5g)",
        "Weight (full): 1.8lbs",
      ],
    },
    {
      heading: "Touch Screen LCD",
      items: [
        "Dark Mode and Light Mode",
        "Width: 2.8 inches (71mm)",
        "Height: 1.4 inches (36mm)",
        "Bluetooth Enabled for touch screen",
      ],
    },
  ],
];

export function TechSpecs() {
  return (
    <section className="bg-black pt-[30px] pb-7">
      <div className="mx-auto grid max-w-[1600px] items-center gap-10 px-5 lg:grid-cols-12 lg:gap-0">
        <div className="lg:col-span-7">
          <h2 className="font-heading text-[40px] leading-[60px] font-normal text-white">Tech Specs</h2>
          <div className="grid gap-x-10 sm:grid-cols-2">
            {specColumns.map((column, i) => (
              <div key={i}>
                {column.map((group) => (
                  <div key={group.heading}>
                    <h3 className="pt-10 font-heading text-[22px] leading-[33px] font-normal text-white">{group.heading}</h3>
                    <ul className="flex flex-col gap-1 pt-4 font-heading text-[13px] leading-[19.5px] text-white">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="relative aspect-[606/725] w-full lg:col-span-5">
          <Image
            src={`${base}/tech-specs.png`}
            alt="Exploded view of the ECHO Flask components"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
