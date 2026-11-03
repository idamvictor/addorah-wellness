import Image from "next/image";

import { InertLink } from "@/components/ui/inert-link";

export function QuizCta() {
  return (
    <section className="relative flex min-h-[640px] items-center overflow-hidden bg-[#101418]">
      <Image src="/images/home/quiz-bg.jpg" alt="" fill sizes="100vw" className="object-cover object-[65%_center]" />
      <div aria-hidden className="absolute inset-0 bg-linear-to-r from-[#101418]/80 to-transparent md:hidden" />
      <div className="relative max-w-[640px] px-5 py-16 sm:px-20">
        <h2 className="max-w-[480px] font-heading text-[36px] leading-[1.05] font-normal text-balance text-white sm:text-[45px]">
          Which Echo Product Fits You Best?
        </h2>
        <p className="max-w-[480px] pt-4 pb-7 text-base leading-[24.8px] text-white">
          Every body is different. Our quiz helps you find the right Echo system to support your
          wellness goals
        </p>
        <InertLink className="inline-flex h-[52px] items-center rounded-[4px] bg-white px-[30px] text-base font-medium text-ink">
          Take the Quiz
        </InertLink>
      </div>
    </section>
  );
}
