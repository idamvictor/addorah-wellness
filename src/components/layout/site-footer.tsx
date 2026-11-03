import Image from "next/image";

import { BrandWordmark } from "@/components/layout/brand-wordmark";
import { InertLink } from "@/components/ui/inert-link";
import {
  footerColumns,
  paymentMethods,
  policyLinks,
  site,
  socialLinks,
  supportLinks,
} from "@/data/site";

const linkClass = "text-sm leading-[21px] hover:underline data-[inert-link]:hover:no-underline";

export function SiteFooter() {
  return (
    <footer className="px-5 pt-20 text-ink lg:pt-32">
      <div className="grid gap-12 pb-20 md:grid-cols-2 xl:grid-cols-4 xl:gap-0">
        <div className="flex flex-col gap-10 xl:pr-7">
          <div className="flex flex-col gap-5">
            <BrandWordmark className="text-xl text-ink" />
            <p className="max-w-[336px] text-sm leading-[21px]">{site.description}</p>
          </div>
          <ul className="flex gap-5">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <InertLink aria-label={social.label} className="block size-[27px]">
                  <Image src={social.icon} alt={social.label} width={27} height={27} />
                </InertLink>
              </li>
            ))}
          </ul>
          <p className="mt-auto text-sm leading-[21px]">
            Copyright © {site.copyrightYear} {site.name}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-7 sm:grid-cols-3 md:col-span-2 md:row-start-2 xl:col-span-2 xl:row-start-auto xl:border-x xl:border-ink xl:px-7">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <p className="font-heading text-base leading-6 font-bold">{column.title}</p>
              <ul className="mt-5 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <InertLink href={link.href} className={linkClass}>
                      {link.label}
                    </InertLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col xl:pl-7">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-[11px] leading-[16.5px] text-[#555]">
              Accepted Payments:
            </span>
            {paymentMethods.map((method) => (
              <Image key={method.label} src={method.icon} alt={method.label} width={38} height={24} />
            ))}
          </div>

          <p className="mt-8 font-heading text-base leading-6 font-bold">Customer Support</p>
          <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
            {supportLinks.map((link) => (
              <li key={link.label}>
                <InertLink href={link.href} className={linkClass}>
                  {link.label}
                </InertLink>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-col text-sm leading-[21px]">
            <a href={`mailto:${site.supportEmail}`} className="hover:underline">
              {site.supportEmail}
            </a>
            <a href={`mailto:${site.salesEmail}`} className="hover:underline">
              {site.salesEmail}
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs leading-[18px] opacity-70 xl:mt-auto">
            {policyLinks.map((link, i) => (
              <li key={link.label} className="flex items-center gap-2">
                <InertLink href={link.href} className="hover:underline data-[inert-link]:hover:no-underline">
                  {link.label}
                </InertLink>
                {i < policyLinks.length - 1 && <span className="opacity-60">|</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pb-10">
        <p className="bg-haze px-5 py-4 text-xs leading-[18px] text-[#333]">{site.disclaimer}</p>
      </div>
    </footer>
  );
}
