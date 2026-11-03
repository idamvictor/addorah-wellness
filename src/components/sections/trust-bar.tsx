import Image from "next/image";

const items = [
  {
    icon: "/images/home/trust-check.svg",
    title: "Try Risk-Free for 60 Days",
    body: (
      <>
        Enjoy your ECHO Flask for 60 days and if you don&apos;t love it, return it for a{" "}
        <span className="text-teal underline">full refund</span>.
      </>
    ),
  },
  {
    icon: "/images/home/trust-plus.svg",
    title: "Pay with HSA/FSA",
    body: <>The ECHO Flask is HSA/FSA eligible. Qualify in minutes and use pretax dollars.</>,
  },
  {
    icon: "/images/home/trust-shield.svg",
    title: "Covered by 5 Year Warranty",
    body: (
      <>
        Built to last and backed by an industry-best{" "}
        <span className="text-teal underline">5 year warranty</span>.
      </>
    ),
  },
];

export function TrustBar() {
  return (
    <section className="bg-white px-5 pt-16 pb-[68px] lg:px-20">
      <div className="mx-auto grid max-w-[1280px] gap-10 md:grid-cols-3 md:gap-0">
        {items.map((item, i) => (
          <div
            key={item.title}
            className={
              i === 0
                ? "md:pr-11"
                : "md:border-l-[0.8px] md:border-[#deddde] md:px-11 md:last:pr-0"
            }
          >
            <Image src={item.icon} alt="" width={26} height={26} />
            <h2 className="pt-5 font-heading text-[25px] leading-[1.15] font-medium tracking-[-0.01em] text-ink xl:text-[27px]">
              {item.title}
            </h2>
            <p className="pt-2.5 text-[15px] leading-[23.25px] text-pretty text-stone">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
