import type { MachinePageContent } from "@/data/product-pages/machine";
import type { Review } from "@/data/reviews";

const base = "/images/products/echo-ultimate";
const shared = "/images/products/shared/certs";

const reviews: Review[] = [
  {
    name: "Kayla P.",
    initials: "KP",
    when: "10 months ago",
    verified: true,
    rating: 5,
    title: "LOVE",
    body: "Omg I love this water dispenser! My family and I love it so much. It is really simple to install. We received it so fast and my husband had it installed in less than 2 hours.",
    helpfulYes: 0,
  },
  {
    name: "Esmerehildo P.",
    initials: "EP",
    when: "10 months ago",
    verified: true,
    rating: 5,
    title: "Feel safe",
    body: "Love it",
    helpfulYes: 0,
  },
  {
    name: "Andre",
    initials: "A",
    when: "10 months ago",
    verified: true,
    rating: 5,
    title: "5 stars",
    body: "5 stars",
    helpfulYes: 0,
  },
  {
    name: "Theresa K.",
    initials: "TK",
    when: "1 year ago",
    verified: true,
    rating: 5,
    title: "Echo",
    body: "Love it!",
    helpfulYes: 0,
  },
  {
    // The design showed a "Verified by Shop" badge on this review; it is omitted here.
    name: "Jerry",
    initials: "J",
    when: "2 years ago",
    verified: false,
    rating: 1,
    title: "1 Star",
    body: "Had a bad leak. Had to send back. Hopefully they will send me a replacement",
    helpfulYes: 0,
  },
];

const ownerQuote = {
  text: "We stopped buying bottled water, produce wash and bathroom cleaner in the same month. Four years in, it still runs like new.",
  by: "Verified owner · Countertop install",
};

const galleryAlts = [
  "Hydrogen water machine with touchscreen and metal finish, flexible spout attached",
  "Woman washing orange at kitchen sink with hydrogen water machine on counter",
  "Hydrogen water machine on kitchen counter as person washes green apple at sink",
  "Woman filling bottle at kitchen sink with hydrogen water machine, modern countertop setup",
  "Hydrogen water machine faucet with touchscreen and stainless steel finish",
  "Modern digital faucet with touchscreen for hydrogen water, sleek chrome design",
  "Modern brushed metal kitchen faucet with digital touch screen and dual spouts",
  "ECHO Ultimate™ Hydrogen Water Machine",
  "ECHO Ultimate™ Hydrogen Water Machine",
  "ECHO Ultimate™ Hydrogen Water Machine",
  "ECHO Ultimate™ Hydrogen Water Machine",
];
const galleryExt = ["png", "jpg", "jpg", "jpg", "png", "png", "png", "jpg", "jpg", "jpg", "jpg"];

export const echoUltimatePage: MachinePageContent = {
  slug: "echo-ultimate",
  gallery: galleryAlts.map((alt, i) => ({ src: `${base}/gallery-${String(i + 1).padStart(2, "0")}.${galleryExt[i]}`, alt })),
  buyBox: {
    intro:
      "The only machine in the world that produces hydrogen, alkaline, acidic, and 5-stage filtered water from a single tap in your kitchen.",
    variants: {
      label: "Faucet finish",
      hint: "Countertop Install (No Faucet)",
      options: [
        { name: "Countertop — no faucet" },
        { name: "Chrome", swatch: "linear-gradient(135deg,#f4f6f7 0%,#c9ced2 38%,#8d949a 62%,#e8ebed 100%)" },
        { name: "Stainless Steel", swatch: "linear-gradient(135deg,#dcdcda 0%,#b3b3ae 45%,#8f8f8a 70%,#cfcfca 100%)" },
        { name: "Oil rubbed bronze", swatch: "linear-gradient(135deg,#a97a4e 0%,#7b5232 42%,#5a3a22 68%,#96693f 100%)" },
      ],
    },
    warranty: {
      title: "10-Year Warranty",
      body: "Every ECHO Ultimate includes our 10-year limited warranty at no extra cost. No registration required. You're covered from day one.",
    },
    expertLink: "Not sure it fits your kitchen? Talk to an expert →",
    modes: [
      { icon: `${base}/mode-hydrogen.svg`, title: "Hydrogen", label: "Drink" },
      { icon: `${base}/mode-alkaline.svg`, title: "Alkaline", label: "Clean" },
      { icon: `${base}/mode-acidic.svg`, title: "Acidic", label: "Cleaning & skin" },
      { icon: `${base}/mode-filtered.svg`, title: "Filtered", label: "Everything else" },
    ],
    stats: [
      { value: "Up to 1.46 ppm", label: "Dissolved H₂ output" },
      { value: "1,056 gal", label: "Filter life / 4,000L (~1 year)" },
      { value: "USA", label: "Engineered & supported" },
      { value: "Counter or cabinet", label: "installation" },
    ],
    quotes: [
      ownerQuote,
      ...reviews
        .filter((review) => review.rating === 5 && review.body.length > 20)
        .map((review) => ({ text: review.body, by: `${review.name} · Verified Buyer` })),
    ],
  },
  sections: [
    {
      kind: "certs",
      logos: [
        { src: `${shared}/cert-1.png`, alt: "Certification" },
        { src: `${base}/certs/cert-ultimate-1.png`, alt: "Certification" },
        { src: `${shared}/cert-2.png`, alt: "Certification" },
        { src: `${shared}/cert-3.png`, alt: "Certification" },
        { src: `${shared}/cert-4.png`, alt: "Certification" },
        { src: `${shared}/cert-bpa-free.png`, alt: "BPA free" },
        { src: `${base}/certs/cert-ultimate-2.png`, alt: "Certification" },
      ],
    },
    {
      kind: "video",
      heading: "The Ultimate, explained by the person who built it.",
      body: "A walkthrough of what the machine does and why it was designed this way — the four water types, the filtration, and where hydrogen water fits in the research. Worth the time before a decision this size.",
      byline: "Paul Barattiero · Founder, ECHO",
      thumbnail: { src: `${base}/video-thumb.jpg`, alt: "The Echo Ultimate video walkthrough" },
    },
    { kind: "custom", id: "ultimate-four-machines" },
    { kind: "custom", id: "ultimate-waters" },
    { kind: "custom", id: "ultimate-install" },
    {
      kind: "quote",
      text: ownerQuote.text,
      by: "Verified owner · Echo Ultimate, countertop install",
      meta: ["4.5 / 5 from 8 Ultimate owners", "1,200+ 5-star reviews across ECHO", "60-day money-back guarantee"],
    },
    {
      kind: "specs",
      heading: "Product Specs",
      rows: [
        { label: "H₂ production", value: "Up to 1.46 ppm" },
        { label: "Hydrogen flow rate", value: "1.0 L/min · 0.2 gal/min" },
        { label: "Filtered flow rate", value: "1.7–2.0 L/min" },
        { label: "Alkaline / acidic flow", value: "1.8 L/min · 0.5 gal/min" },
        { label: "Filter life", value: "1,056 gal · 4,000 L" },
        { label: "Product dimensions", value: "10 × 9 × 15 in" },
        { label: "Shipping dimensions", value: "18 × 14 × 12 in" },
        { label: "Weight", value: "14.7 lbs" },
        { label: "Certification", value: "NSF/ANSI 42 components" },
        { label: "Warranty", value: "10 years" },
      ],
      links: ["Product manual →", "Replacement filter →", "Cleaning cartridge →"],
      image: {
        src: `${base}/front-view.png`,
        alt: "ECHO Ultimate machine with touchscreen and flexible spout",
        fit: "contain",
      },
    },
    {
      kind: "faq",
      heading: "Frequently Asked Questions",
      items: [
        {
          // The design gave a manufacturer production date (October 2026); replaced with neutral wording.
          question: "When will my machine ship?",
          answer:
            "Availability changes with each shipment. Contact us for current stock and delivery timelines; you will get a confirmation with tracking as soon as your order is on its way.",
        },
        {
          question: "Do I need the digital faucet?",
          answer:
            "Only for an under-sink install. The ECHO Digital Faucet is sold separately and installs alongside your primary kitchen faucet — it does not replace it. Choose the countertop option and you need nothing extra.",
        },
        {
          question: "Can everyone in the house drink from it?",
          answer:
            "Yes. Unlike a portable bottle, the Ultimate produces hydrogen water on demand at up to 1.46 ppm, so it serves a whole household rather than one 12 oz serving at a time.",
        },
        {
          question: "Is the alkaline water safe to drink?",
          answer:
            "Up to level 2 (about pH 9) it is commonly consumed; above that we recommend using it for cleaning only. Consult your physician before drinking alkaline water regularly. Acidic water should never be drunk.",
        },
        {
          // The manufacturer-shop line in the design is replaced with this store.
          question: "What does upkeep cost?",
          answer:
            "One replacement filter per year for typical household use — 1,056 gallons of capacity. An optional cleaning cartridge extends electrode life. Both are available from our shop.",
        },
        {
          // "Backed by our USA-based support team" is the manufacturer's; neutral wording here.
          question: "What does the 10-year warranty cover?",
          answer:
            "The machine itself. Filters and consumables are excluded. Every order also carries a 60-day money-back guarantee.",
        },
      ],
    },
    { kind: "specialist", heading: "Have questions? Speak to a Specialist", card: {} },
    {
      kind: "reviews",
      data: { rating: 4.5, distribution: [7, 0, 0, 0, 1], recommendPct: 88, reviews },
    },
  ],
};
