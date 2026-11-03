import type { GalleryImage } from "@/data/product-pages/waitlist";

export const flaskGallery: GalleryImage[] = [
  { src: "/images/products/echo-flask/gallery-1.png", alt: "Three ECHO Flasks with digital display and bubbling water" },
  { src: "/images/products/echo-flask/gallery-2.png", alt: "ECHO Flask emitting molecular hydrogen, up to 8 ppm" },
  { src: "/images/products/echo-flask/gallery-3.png", alt: "Infographic of hydrogen water benefits" },
  { src: "/images/products/echo-flask/gallery-4.png", alt: "Hand holding the ECHO Flask with its touch screen and app" },
  { src: "/images/products/echo-flask/gallery-5.png", alt: "Leak-proof, shatterproof 12oz ECHO Flask" },
  { src: "/images/products/echo-flask/gallery-6.png", alt: "ECHO Flask certifications and guarantees" },
  { src: "/images/products/echo-flask/gallery-7.png", alt: "Customer holding an ECHO Flask with a five-star review" },
  { src: "/images/products/echo-flask/gallery-8.png", alt: "ECHO Flask comparison chart versus competitors" },
  { src: "/images/products/echo-flask/gallery-9.png", alt: "ECHO Flask lit pink and blue on a pedestal" },
  { src: "/images/products/echo-flask/gallery-10.png", alt: "Close-up of the ECHO Flask display and water chamber" },
  { src: "/images/products/echo-flask/gallery-11.png", alt: "ECHO Flask with blue water on a dark background" },
];

export const flaskHighlights = [
  { icon: "/images/products/echo-flask/icon-energy.svg", label: "Supports Energy" },
  { icon: "/images/products/echo-flask/icon-recovery.svg", label: "Improves Recovery" },
  { icon: "/images/products/echo-flask/icon-focus.svg", label: "Promotes Focus" },
];

/**
 * Production "drops" shown in the buy box. Figures are the design's
 * placeholders — update them as real stock levels are known.
 */
export const flaskDrops = {
  past: ["October build", "November Drop 1"],
  current: {
    name: "November Drop 2",
    ships: "Est. ships Nov 20",
    shipsAt: "2026-11-20T00:00:00",
    sold: 159,
    total: 3000,
  },
  next: { name: "November Drop 3", ships: "Est. ships Dec 1" },
};

export const flaskCarePlan = {
  name: "Add Echo Care+",
  priceLabel: "+ ₦5,716.48/mo",
  body: "Accidental-damage protection — expedited repairs, a free replacement accessory, member pricing and priority support. Cancel anytime.",
};

export const flaskAssurances = [
  {
    icon: "/images/products/echo-flask/icon-cancel.svg",
    kicker: "Before it ships",
    title: "Buy now, cancel anytime before shipment",
    body: "Full refund, no questions asked, until your Flask ships.",
  },
  {
    icon: "/images/products/echo-flask/icon-guarantee.svg",
    kicker: "After it arrives",
    title: "Our 3-60 Guarantee",
    body: "Drink 3 Flasks a day for 60 days. Don’t love it? Return it for a full refund.",
  },
  {
    icon: "/images/products/echo-flask/icon-warranty.svg",
    kicker: "Covered for years",
    title: "5-year warranty",
    body: "Every Flask is backed by a full 5-year warranty.",
  },
  {
    icon: "/images/products/echo-flask/icon-tag.svg",
    kicker: "Pay pre-tax",
    title: "HSA/FSA eligible",
    body: "Pay with pre-tax dollars at checkout.",
  },
];

export const flaskSpecGroups = [
  {
    heading: "Features:",
    items: [
      "Touch screen display",
      "Pairs with ECHO mobile app",
      "Generates up to 8ppm hydrogen",
      "High quality build materials",
      "12 Ounce Capacity (0.36 liters)",
    ],
  },
  {
    heading: "High Quality Build Materials:",
    items: [
      "Polyphenylsulfone (PPSU) Plastic",
      "3rd party verified to be BPA, BPS, PFOS, PFAS Free",
      "PEM Protection - Oxygen Vent Port",
      "Platinum coated electrode plates - zero water contact",
    ],
  },
  {
    heading: "Size & Weight:",
    items: [
      "Height: 10 inches (258mm)",
      "Width: 3 inches (76mm)",
      "Depth: 2 inches (48mm)",
      "Weight: 1lb (455.5g)",
    ],
  },
  {
    heading: "What’s in the box:",
    items: ["ECHO Flask", "USB-C Charging Cable", "Quick Start Guide"],
  },
];

export const flaskDetailsCopy = [
  "Inside every Echo device is special technology that turns normal water into hydrogen-rich water.",
  "At the center is the Echo Hydrogen Generator. It uses two titanium plates coated with platinum and a thin proton exchange membrane between them. These laboratory-grade materials are chosen because they are strong, clean, and safe.",
  "The proton exchange membrane was first made for NASA. Today, it’s used in hydrogen cars and other advanced machines. It lets pure hydrogen gas mix into your water while the oxygen is released into the air.",
  "Our carefully shaped plates make sure the electric current spreads evenly, without heat or damage. That means the Echo Hydrogen Generator makes hydrogen faster and more efficiently.",
  "Every part is built from laboratory-grade materials and made to last a long time—so you can always count on clean, high-quality hydrogen water.",
];

export const flaskLabResults = [
  "The ECHO Hydrogen Flask has been lab‑tested and certified by H2 Analytics (Report H2AR‑250116‑1, dated January 16, 2025). Using gas chromatography testing on distilled water, the Flask consistently delivered 6.07 mg/L of dissolved hydrogen after a 10‑minute cycle and up to 8.25 mg/L after 20 minutes—well within the highest range of tested levels.",
  "The US Food and Drug Administration has recognized hydrogen gas as a food additive that is generally recognized as safe (GRAS). The research confirms that hydrogen water is safe to be consumed. The ECHO Flask currently has a valid certification status by H2 Analytics in conformance with IHSA and US EPA standards. Registration# 24-0701-1-PB",
];

/**
 * Shipping/returns and warranty terms are store policy. The design carried
 * the manufacturer's US policy text; these are neutral placeholders for
 * Addorah Wellness to replace with its own terms.
 */
export const flaskShippingCopy = [
  "Your ECHO Flask ships with its build: the estimated ship date is shown above, next to Add to Cart. Every order comes with full tracking and delivery support.",
  "Not totally happy with your ECHO Flask? You can return or exchange it within 60 days of delivery.",
];

export const flaskWarrantyCopy = [
  "Your ECHO Flask comes with a **5-year limited warranty** that covers any manufacturing defects, plus 30-day coverage for included accessories.",
];
