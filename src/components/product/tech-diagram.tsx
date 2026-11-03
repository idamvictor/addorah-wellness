import Image from "next/image";

const leftCallouts = [
  { label: "Industry Leading 8ppm", gap: "lg:pt-[90px]" },
  { label: "BPA Free Shatter-Proof Casing", gap: "lg:pt-3" },
  { label: "Interactive-Touch Screen Display", gap: "lg:pt-[50px]" },
  { label: "Bluetooth & App Smart Tracking", gap: "lg:pt-3" },
  { label: "Oxygen Release Port", gap: "lg:pt-[50px]" },
];

const rightCallouts = [
  { label: "Lock & Sealed Easy-Twist Cap", gap: "lg:pt-0" },
  { label: "Pressure Release Valve", gap: "lg:pt-3" },
  { label: "Expanded 12 Oz Capacity", gap: "lg:pt-[50px]" },
  { label: "Platinum & Titanium Plating", gap: "lg:pt-[50px]" },
  { label: "Advanced Proton Exchange Membrane", gap: "lg:pt-3" },
];

const freeFrom = ["Heavy Metals", "BPAs", "PH Change", "Chlorine", "PFAs"];

function Rule() {
  return <span aria-hidden className="h-px w-6 shrink-0 bg-white" />;
}

export function TechDiagram() {
  return (
    <section className="bg-black pt-[88px] pb-14">
      <div className="mx-auto max-w-[1600px] px-5">
        <h2 className="max-w-[400px] font-heading text-[34px] leading-none font-normal text-white sm:text-[40px]">
          Cutting Edge Technology
        </h2>
        <p className="font-heading text-2xl leading-9 text-white">We&apos;ve Perfected Hydrogen</p>

        <div className="mt-8 grid items-start gap-10 lg:mt-0 lg:grid-cols-3">
          <ul className="order-2 flex flex-col text-lg leading-[27px] text-white lg:order-1 lg:items-end lg:text-right">
            {leftCallouts.map((item) => (
              <li key={item.label} className={`flex items-center gap-5 ${item.gap} max-lg:flex-row-reverse max-lg:justify-end max-lg:pt-3`}>
                {item.label}
                <Rule />
              </li>
            ))}
          </ul>

          <div className="relative order-1 mx-auto aspect-[458/431] w-full max-w-[458px] lg:order-2">
            <Image
              src="/images/products/echo-flask/tech-flask.png"
              alt="ECHO Flask glowing teal, showing its internal hydrogen chamber"
              fill
              sizes="(min-width: 1024px) 458px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="order-3">
            <ul className="flex flex-col pt-3 text-lg leading-[27px] text-white">
              {rightCallouts.map((item) => (
                <li key={item.label} className={`flex items-center gap-5 ${item.gap} max-lg:pt-3`}>
                  <Rule />
                  {item.label}
                </li>
              ))}
            </ul>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-2.5 text-base leading-6 text-white">
              {freeFrom.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Image src="/images/products/echo-flask/icon-forbidden.png" alt="" width={16} height={16} />
                  <span>
                    <strong>NO</strong> {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
