import type { ReactNode } from "react";

export type Faq = { question: string; answer: ReactNode };

export type FaqGroup = { label: string; items: Faq[] };

export const hydrogenWaterFaqs: Faq[] = [
  {
    question: "What is hydrogen water?",
    answer:
      "Hydrogen water is regular water that has been infused with molecular hydrogen (H2) gas. This creates water with antioxidant properties that may provide various health benefits.",
  },
  {
    question: "What are the benefits of hydrogen water?",
    answer:
      "Hydrogen water may provide antioxidant benefits, reduce inflammation, improve energy levels, support cognitive function, and promote overall wellness. Research suggests it may help with various health conditions.",
  },
  {
    question: "When should I start seeing the benefits of hydrogen water?",
    answer: [
      "**Everyone is different.** Some people notice benefits within days or weeks, while for others it’s more subtle. Hydrogen water works a lot like a daily vitamin—its effects build overtime.",
      "Many of its benefits, like reducing oxidative stress and supporting a healthy inflammatory response, happen at the cellular level, so you may not feel immediate changes—especially if you already feel healthy.",
      "However, these processes are important for long-term health and aging. In short, hydrogen water is less about noticeable day-to-day effects and more about supporting your health over time.",
    ].join("\n\n"),
  },
  {
    question: "What research has been done on hydrogen water?",
    answer:
      "Extensive research has been conducted on molecular hydrogen and hydrogen water, with 2,276 peer-reviewed studies. Research covers areas including antioxidant effects, anti-inflammatory properties, and potential therapeutic benefits.",
  },
  {
    question: "Doesn't water already contain hydrogen?",
    answer:
      "While water (H2O) contains hydrogen atoms, it doesn't contain molecular hydrogen (H2) gas. Hydrogen water is specifically infused with dissolved molecular hydrogen gas, which provides the antioxidant benefits.",
  },
  {
    question: "How often should I drink hydrogen water?",
    answer:
      "For optimal benefits, it's recommended to drink hydrogen water daily. Many people consume 1-3 glasses per day, though individual needs may vary. Consistency is key to experiencing the full benefits.",
  },
];

/** Shorter set used on the ECHO Forty and ECHO One pages. */
export const productPageFaqs: Faq[] = [
  {
    question: "What is hydrogen water?",
    answer:
      "Hydrogen water is regular water infused with extra molecular hydrogen gas (H₂). It's produced through electrolysis or by dissolving magnesium-based stick packs, allowing water to retain dissolved hydrogen that may offer antioxidant properties.",
  },
  {
    question: "What are the benefits of hydrogen water?",
    answer:
      "Emerging research suggests molecular hydrogen may reduce oxidative stress, support metabolism, enhance athletic recovery, improve cognitive and skin health, and reduce inflammation. However, results are preliminary and not definitive.",
  },
  {
    question: "When should I start seeing the benefits of hydrogen water?",
    answer:
      "Some users notice benefits within days or weeks, especially for recovery or hydration. Peer-reviewed studies often report noticeable effects after 4–8 weeks of regular use.",
  },
  {
    question: "What research has been done on hydrogen water?",
    answer:
      "There are 2,276 peer-reviewed studies examining hydrogen water in relation to metabolism, recovery, inflammation, and cognition.\n\nSource: hydrogenstudies.com",
  },
];

/** Home page FAQ tabs. "Echo Water" answers are not in the design yet. */
export const homeFaqGroups: FaqGroup[] = [
  { label: "Hydrogen Water Basics", items: hydrogenWaterFaqs },
  { label: "Echo Water", items: [] },
];
