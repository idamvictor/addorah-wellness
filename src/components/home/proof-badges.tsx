import Image from "next/image";

const badges = ["Clinically Studied", "Scientifically Proven", "Naturally Powerful"];

export function ProofBadges() {
  return (
    <section className="flex flex-wrap items-center justify-center gap-x-14 gap-y-4 bg-white px-5 py-8">
      {badges.map((badge) => (
        <div key={badge} className="flex items-center gap-2.5">
          <span className="flex size-6 items-center justify-center">
            <Image src="/images/home/badge-check.svg" alt="" width={20} height={20} />
          </span>
          <span className="text-sm leading-[21px] font-semibold tracking-[0.84px] text-ink uppercase">
            {badge}
          </span>
        </div>
      ))}
    </section>
  );
}
