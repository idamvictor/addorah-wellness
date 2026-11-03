import Image from "next/image";

import { InertLink } from "@/components/ui/inert-link";

const base = "/images/products/echo-flask";

const certifications = [
  { src: `${base}/cert-h2.png`, alt: "Hydrogen certified to IHSA standards" },
  { src: `${base}/cert-iso14001.png`, alt: "ISO 14001 certified" },
  { src: `${base}/cert-fda-plastics.png`, alt: "FDA approved plastics" },
  { src: `${base}/cert-iso9001.png`, alt: "ISO 9001 certified" },
  { src: `${base}/cert-nsf.png`, alt: "NSF independently certified" },
  { src: `${base}/cert-gmp.png`, alt: "Good Manufacturing Practice" },
  { src: `${base}/cert-bpa-free.png`, alt: "BPA free" },
];

const apps = [
  { name: "Apple Health", icon: `${base}/app-apple-health.png` },
  { name: "Android Health", icon: `${base}/app-android-health.png` },
];

export function FlaskCertifications() {
  return (
    <section className="bg-black px-5">
      <div className="mx-auto max-w-[1600px]">
        <h2 className="font-heading text-[40px] leading-10 font-normal text-white">Certifications</h2>
        <div className="flex flex-col gap-10 pt-10 lg:flex-row">
          <div className="flex flex-1 flex-col gap-10">
            <ul className="flex flex-wrap gap-6 sm:gap-10">
              {certifications.map((cert) => (
                <li key={cert.alt}>
                  <Image src={cert.src} alt={cert.alt} width={66} height={66} className="size-[66px]" />
                </li>
              ))}
            </ul>
            <p className="text-xs leading-[18px] text-white">
              The US Food and Drug Administration has recognized hydrogen gas as a food additive that is
              generally recognized as safe (GRAS). The research confirms that hydrogen water is safe to be
              consumed. The Echo Flask currently has a valid certification status by H2 Analytics in
              conformance with IHSA and US EPA standards.
            </p>
          </div>
          <div className="flex flex-col items-start gap-6 lg:w-[300px] lg:items-center lg:gap-14">
            <InertLink className="flex h-[51px] items-center rounded-lg border-[1.6px] border-mist bg-mist px-6 text-base leading-4 font-medium tracking-[0.32px] text-ink">
              View Certificate
            </InertLink>
            <p className="text-xs leading-[18px] text-white">Registration # :24-0701-1-PB</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AppIntegrations() {
  return (
    <section className="bg-black pt-[34px] pb-[58px]">
      <div className="mx-auto max-w-[1600px] px-5">
        <h2 className="font-heading text-[40px] leading-[50px] font-normal text-white">App Integrations</h2>
        <ul className="grid gap-7 pt-10 sm:grid-cols-2">
          {apps.map((app) => (
            <li key={app.name} className="flex items-center gap-4">
              <Image src={app.icon} alt="" width={88} height={88} className="size-[88px]" />
              <span className="text-2xl leading-9 font-bold text-white">{app.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
