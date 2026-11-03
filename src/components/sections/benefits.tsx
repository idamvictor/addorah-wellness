import Image from "next/image";

const benefits = [
  {
    icon: "/images/home/benefit-recovery.svg",
    width: 53,
    height: 48,
    title: "Improves Recovery",
    body: "Reduce oxidative stress and prevent lactic buildup during workouts.",
  },
  {
    icon: "/images/home/benefit-microbiome.svg",
    width: 48,
    height: 48,
    title: "Repairs the Microbiome",
    body: "Plays a role in the gut’s natural microbial ecosystem.",
  },
  {
    icon: "/images/home/benefit-focus.svg",
    width: 48,
    height: 48,
    title: "Promotes Focus",
    body: "Stay mentally sharp and in control throughout your day.",
  },
  {
    icon: "/images/home/benefit-sleep.svg",
    width: 48,
    height: 48,
    title: "Supports Sleep",
    body: "Get the kind of rest that leaves you clear, calm and ready.",
  },
];

export function Benefits() {
  return (
    <section className="bg-white px-5 py-[72px]">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="max-w-[560px] font-heading text-[36px] leading-[1.05] font-normal tracking-[-0.01em] text-ink sm:text-[45px]">
          Benefits of Hydrogen Water
        </h2>
        <div className="grid gap-x-11 gap-y-10 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div key={benefit.title}>
              <div className="flex h-12 items-center">
                <Image src={benefit.icon} alt="" width={benefit.width} height={benefit.height} />
              </div>
              <h3 className="pt-[22px] text-[22px] leading-[33px] font-medium text-ink">
                {benefit.title}
              </h3>
              <p className="pt-2.5 text-base leading-6 text-pretty text-stone">{benefit.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
