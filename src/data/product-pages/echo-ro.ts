import { machineCerts } from "@/data/product-pages/echo-flow";
import type { MachinePageContent } from "@/data/product-pages/machine";
import type { Review } from "@/data/reviews";

const base = "/images/products/echo-ro";

const reviews: Review[] = [
  {
    name: "Helen M.",
    initials: "HM",
    when: "11 months ago",
    verified: true,
    rating: 5,
    title: "Watch it purify",
    body: "I like how small and compact it is, but my favorite part is that it has a small screen on the front that lets you know what is happening on the inside. As far as our health is concerned, my stomach used to hurt after drinking water from our tap & It doesn’t anymore.",
    helpfulYes: 1,
  },
  {
    name: "Donald",
    initials: "D",
    when: "1 year ago",
    verified: true,
    rating: 3,
    title: "3 stars",
    body: "3 stars",
    helpfulYes: 0,
    helpfulNo: 3,
  },
  {
    name: "Chad H.",
    initials: "CH",
    when: "1 year ago",
    verified: true,
    rating: 5,
    title: "Great!",
    body: "I have the RO and Flow setup running to my fridge.",
    helpfulYes: 4,
    helpfulNo: 1,
  },
  {
    name: "Jacob C.",
    initials: "JC",
    when: "1 year ago",
    verified: true,
    rating: 5,
    title: "Works as they claim",
    body: "It does taste clean",
    helpfulYes: 0,
  },
  {
    name: "Myra",
    initials: "M",
    when: "1 year ago",
    verified: true,
    rating: 5,
    title: "Amazingly Perfect!",
    body: "I live in South FL where our tap water can sometimes look dark orange. I have always had a tank system which is bulky & super hard to change the filters! Hands down there is NO comparison!! It was soooo easy to install. I have had my Echo RO installed for about 6 months. My water still looks & tastes amazing, filters are super easy to change & I have never had a leak. This slim line, tankless machine has provided me 50% more space under my sink!",
    helpfulYes: 2,
    helpfulNo: 1,
  },
];

const finishes = [
  { name: "No faucet" },
  { name: "Chrome", swatch: "linear-gradient(135deg,#f4f6f7 0%,#c9ced2 38%,#8d949a 62%,#e8ebed 100%)" },
  { name: "Stainless Steel", swatch: "linear-gradient(135deg,#dcdcda 0%,#b3b3ae 45%,#8f8f8a 70%,#cfcfca 100%)" },
  { name: "Matte Black", swatch: "linear-gradient(135deg,#4a4a4a 0%,#2a2a2a 45%,#1c1c1c 72%,#3d3d3d 100%)" },
];

const galleryAlts = [
  ...Array.from({ length: 16 }, () => "ECHO RO™ Tankless Reverse Osmosis Water Filter Machine"),
  "ECHO RO™ machine only, no faucet",
  "ECHO RO™ with stainless steel faucet",
  "ECHO RO™ with chrome faucet",
  "ECHO RO™ with matte black faucet",
];

export const echoRoPage: MachinePageContent = {
  slug: "echo-ro",
  gallery: galleryAlts.map((alt, i) => {
    const n = String(i + 1).padStart(2, "0");
    return { src: `${base}/gallery-${n}.${i >= 16 ? "jpg" : "png"}`, alt };
  }),
  buyBox: {
    intro:
      "Four stages of reverse osmosis in a 4.25-inch-deep frame: no storage tank, no pressure bladder, nothing taking up the cabinet. It reduces up to 99% of contaminants on demand and sends water to a dedicated tap at your sink.",
    variants: {
      label: "Faucet finish",
      hint: "Unit only · use your own faucet",
      options: finishes,
      note: "The RO faucet is a dedicated tap for purified water. It goes in a spare hole in the countertop and sits beside your primary faucet. Choose “no faucet” only if you already have one.",
    },
    warranty: {
      title: "5-Year Warranty",
      body: "Full coverage on the machine and membrane housing. Plus 60 days to change your mind.",
    },
    expertLink: "Not sure it fits your cabinet? Talk to an expert →",
    stats: [
      { value: "99%", label: "Contaminants reduced" },
      { value: "Tankless", label: "4.25 in deep" },
      { value: "1:1", label: "Pure-to-drain ratio" },
      { value: "Twist-in", label: "Cartridges, no tools" },
    ],
    quotes: reviews
      .filter((review) => review.rating === 5)
      .map((review) => ({ text: review.body, by: `${review.name} · Verified Buyer` })),
  },
  sections: [
    { kind: "certs", logos: machineCerts },
    {
      kind: "intro",
      kicker: "Tankless by design",
      heading: "Reverse osmosis without the tank.",
      body: "Conventional RO stores purified water in a pressurized tank that eats half the cabinet and sits still for days. The Echo RO makes water the moment you ask for it, in a frame 4.25 inches deep, so the space under your sink stays usable and every glass is made fresh.",
      cards: [
        {
          title: "Nothing stored",
          body: "Water is purified on demand and goes straight to the tap. No tank to sit stagnant, no bladder to replace.",
        },
        {
          title: "Four stages",
          body: "Sediment, carbon block, the RO membrane and a post carbon polish. Up to 99% of contaminants reduced.",
        },
        {
          title: "1:1 efficiency",
          body: "A gallon of drinking water per gallon to drain, far tighter than the 3:1 and 4:1 ratios typical of older RO.",
        },
        {
          title: "Twist to change",
          body: "Bayonet cartridges quarter-turn out and in. No wrench, no housing to unscrew, no water shut-off drama.",
        },
      ],
    },
    {
      kind: "stages",
      kicker: "How it filters",
      heading: "Four cartridges, in order.",
      body: "Each stage hands cleaner water to the next. The membrane does the heavy lifting at 0.0001 microns, small enough to hold back dissolved lead, fluoride and PFAS-scale molecules.",
      stages: [
        {
          label: "Stage 01",
          life: "6–12 mo",
          title: "Sediment",
          body: "Catches rust, silt and particulate before it reaches the finer media, protecting everything downstream.",
        },
        {
          label: "Stage 02",
          life: "6–12 mo",
          title: "Carbon block",
          body: "Takes out chlorine, chloramine and the taste and odor compounds that come with municipal treatment.",
        },
        {
          label: "Stage 03",
          life: "2–3 yr",
          title: "RO membrane",
          body: "0.0001 microns. Dissolved lead, fluoride, nitrates, arsenic and other heavy metals stay on the reject side.",
        },
        {
          label: "Stage 04",
          life: "12 mo",
          title: "Post carbon",
          body: "A final polish on the way to the faucet, so what lands in the glass tastes clean and neutral.",
        },
      ],
      image: { src: `${base}/stage-chart.png`, alt: "Contaminant reduction by filtration stage" },
    },
    {
      kind: "split",
      theme: "dark",
      heading: "Slim enough to forget it's there.",
      body: "17.75 inches wide, 16 tall and only 4.25 deep. It stands against the back wall of the cabinet and leaves the rest of the shelf for what you actually keep there.",
      items: [
        {
          title: "On-demand purification",
          body: "Water is made as it’s poured rather than stored, so nothing sits in a tank between glasses.",
        },
        {
          title: "1.2 L/min flow",
          body: "Fast enough to fill a bottle or a pot without standing there waiting for a tank to catch up.",
        },
        {
          title: "Digital display",
          body: "Shows status and cartridge life for each stage, so replacements happen on schedule instead of by guesswork.",
        },
        {
          title: "Bayonet cartridges",
          body: "Four twist-in filters accessible from the front: quarter turn to swap, no housing wrench, no shut-off.",
        },
      ],
      image: { src: `${base}/front-view.png`, alt: "ECHO RO machine, front view", fit: "contain", aspect: "aspect-square" },
      imageSide: "right",
    },
    {
      kind: "checklist",
      kicker: "What comes out",
      heading: "Up to 99% of what you'd rather not drink.",
      body: "Municipal water arrives treated, not pure. Reverse osmosis is the only household method that removes dissolved contaminants: the ones a carbon filter alone passes straight through.",
      links: ["Free water quality report →", "Replacement cartridges →"],
      items: [
        { title: "Chlorine and chloramine" },
        { title: "Lead" },
        { title: "Fluoride" },
        { title: "Heavy metals" },
        { title: "Nitrates and sulfates" },
        { title: "Total dissolved solids" },
        { title: "Microorganisms" },
        { title: "Taste and odor" },
      ],
    },
    {
      kind: "split",
      theme: "mist",
      kicker: "Installation",
      heading: "Under the sink, at the tap of your choosing.",
      body: "The machine tees off the cold supply and runs to a dedicated faucet in a spare countertop hole. Most kitchens are a two-hour job; a plumber makes it thirty minutes.",
      rows: [
        { label: "Location", value: "Under sink" },
        { label: "Connection", value: "Cold supply tee" },
        { label: "Drain", value: "Saddle valve" },
        { label: "Power", value: "Standard outlet" },
        { label: "Cabinet depth needed", value: "5 in clear" },
      ],
      image: { src: `${base}/under-sink.png`, alt: "ECHO RO installed under a kitchen sink" },
      imageSide: "left",
    },
    {
      kind: "specs",
      heading: "Product Specifications",
      rows: [
        { label: "Filtration", value: "4-stage reverse osmosis" },
        { label: "Contaminant reduction", value: "Up to 99%*" },
        { label: "Membrane", value: "0.0001 micron" },
        { label: "Pure-to-drain ratio", value: "1:1*" },
        { label: "Flow rate", value: "1.2 L/min" },
        { label: "Storage", value: "Tankless, on demand" },
        { label: "Product dimensions", value: "17.75 W × 16 H × 4.25 D in" },
        { label: "Shipping dimensions", value: "20 × 20 × 14 in" },
        { label: "Weight", value: "29 lbs" },
        { label: "Faucet finishes", value: "Chrome · Stainless · Matte black · No faucet" },
        { label: "Power", value: "Standard household outlet" },
        { label: "Warranty", value: "5 years" },
      ],
      links: ["Digital manual →"],
      note: "*Contaminant reduction, cartridge life and drain ratio vary with source water chemistry, pressure and usage. A dedicated faucet is required; choose a finish above or supply your own.",
      image: { src: `${base}/cartridges.png`, alt: "ECHO RO system with its four cartridges" },
    },
    {
      kind: "faq",
      heading: "Frequently Asked Questions",
      items: [
        {
          question: "What does tankless actually change?",
          answer:
            "Conventional reverse osmosis fills a pressurized storage tank, typically a 3-gallon sphere that occupies most of the cabinet and holds water for days at a time. The Echo RO purifies on demand instead, so there is no tank to store, sanitize or replace, and the whole machine is 4.25 inches deep.",
        },
        {
          question: "Do I need a separate faucet?",
          answer:
            "Yes. RO water runs to a dedicated tap that goes in a spare hole in the countertop or sink deck, beside your primary faucet. Choose chrome, stainless or matte black above, or select “no faucet” if you already have a suitable one.",
        },
        {
          question: "How much water goes to drain?",
          answer:
            "The Echo RO runs at roughly a 1:1 ratio, about a gallon to drain per gallon of drinking water produced. Older RO systems commonly run 3:1 or 4:1.",
        },
        {
          question: "How often do cartridges need changing?",
          answer:
            "Sediment and carbon pre-filters are typically replaced every 6–12 months, and the RO membrane every 2–3 years depending on your source water. All four are bayonet-style: a quarter turn, no tools.",
        },
        {
          question: "Does RO remove minerals too?",
          answer:
            "Yes. Reverse osmosis removes dissolved solids indiscriminately, including beneficial minerals. Many owners pair it with mineral drops or an Echo hydrogen machine downstream; molecular hydrogen does not depend on mineral content.",
        },
        {
          question: "Will it fit my cabinet?",
          answer:
            "The machine is 17.75 in wide × 16 in tall × 4.25 in deep and needs a cold water connection, a drain saddle and a standard outlet. If you’re unsure about clearance, our team will walk through your cabinet with you before you order.",
        },
        {
          question: "Can I use it with the Echo Flow or H2?",
          answer:
            "Yes, and it’s a common setup. Run the RO first and the hydrogen machine after it, so the hydrogen cell receives purified water.",
        },
        {
          // The design gave a manufacturer back-order date (October 2026); replaced with neutral wording.
          question: "When will it ship?",
          answer: "Availability changes with each shipment. Contact us for current stock and delivery timelines before you order.",
        },
      ],
    },
    {
      kind: "specialist",
      heading: "Have questions? Speak to a Specialist.",
      // The design's blurb promised free contiguous-US shipping; that policy line is omitted.
      card: { blurb: "Tankless reverse osmosis, 4-stage. 60 day money back guarantee, 5-year warranty." },
    },
    {
      kind: "reviews",
      data: { rating: 4.8, distribution: [9, 0, 1, 0, 0], recommendPct: 90, reviews },
    },
  ],
};
