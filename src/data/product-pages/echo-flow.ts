import type { MachinePageContent, Variant } from "@/data/product-pages/machine";

const base = "/images/products/echo-flow";

export const faucetFinishes: Variant[] = [
  { name: "No Faucet" },
  { name: "Oiled Bronze", swatch: "linear-gradient(135deg,#a97a4e 0%,#7b5232 42%,#5a3a22 68%,#96693f 100%)" },
  { name: "Chrome", swatch: "linear-gradient(135deg,#f4f6f7 0%,#c9ced2 38%,#8d949a 62%,#e8ebed 100%)" },
  { name: "Stainless Steel", swatch: "linear-gradient(135deg,#dcdcda 0%,#b3b3ae 45%,#8f8f8a 70%,#cfcfca 100%)" },
  { name: "Matte Black", swatch: "linear-gradient(135deg,#4a4a4a 0%,#232323 45%,#121212 72%,#3a3a3a 100%)" },
];

export const machineCerts = [
  { src: "/images/products/shared/certs/cert-1.png", alt: "Certification" },
  { src: "/images/products/shared/certs/cert-2.png", alt: "Certification" },
  { src: "/images/products/shared/certs/cert-3.png", alt: "Certification" },
  { src: "/images/products/shared/certs/cert-4.png", alt: "Certification" },
  { src: "/images/products/shared/certs/cert-bpa-free.png", alt: "BPA free" },
];

export const scienceSection = {
  kind: "science" as const,
  kicker: "The science",
  heading: "We don't just follow the science. We advance it.",
  body: "Molecular hydrogen is a selective antioxidant — it interacts with reactive oxygen species rather than flooding the body with electrons. 2,276 peer-reviewed studies have examined it.",
  linkLabel: "Browse the research hub →",
  items: [
    { topic: "Oxidative stress", title: "Molecular hydrogen as a selective antioxidant — reactive oxygen species and cellular balance" },
    { topic: "Hydration", title: "Effects of hydrogen-rich water consumption on antioxidant capacity in healthy adults" },
    { topic: "Gut health", title: "Hydrogen-rich water and the gut microbiome — mechanisms under study" },
    { topic: "Metabolic markers", title: "Hydrogen-rich water and markers of oxidative balance in metabolic syndrome" },
  ],
};

export const echoFlowPage: MachinePageContent = {
  slug: "echo-flow",
  gallery: Array.from({ length: 7 }, (_, i) => ({
    src: `${base}/gallery-${i + 1}.jpg`,
    alt: i === 1 ? "ECHO Flow on a kitchen countertop" : "ECHO Flow hydrogen water machine",
  })),
  buyBox: {
    intro:
      "A filter-less hydrogen machine that fits under the sink and connects with the water filtration you already have. One compact unit with an up to 1.21 ppm flow rate at the faucet, the fridge, or the ice maker.",
    variants: {
      label: "Faucet finish",
      hint: "Unit only · use your own faucet",
      options: faucetFinishes,
      note: "The Echo RO/Flow Faucet™ is a secondary faucet — it sits in the corner of the sink and does not replace your primary one. Already own a compatible third-party faucet? Choose No Faucet.",
    },
    addOn: {
      slug: "echo-ro",
      title: "Add the ECHO RO",
      body: "The Flow needs prefiltration, and the ECHO RO™ tankless reverse osmosis system is the unit it was engineered around — 4-stage, under-sink, same cabinet, same install visit.",
      image: "/images/home/carousel-echo-ro.png",
    },
    warranty: {
      title: "10-Year Warranty",
      body: "Every ECHO Flow includes a 10-year limited warranty at no extra cost. No registration required. You're covered from day one.",
    },
    stockNote: "Ready to ship",
    expertLink: "Not sure what's under your sink? Talk to an expert →",
    stats: [
      { value: "1.21 ppm", label: "dissolved H₂" },
      { value: "1.2 L/min", label: "internal pump" },
      { value: "−500 mV", label: "ORP, up to" },
      { value: "3.85 lbs", label: "fits the cabinet" },
    ],
    quotes: [{
      text: "Smaller than I thought it would be which is great! Can see the bubbles from the hydrogen gas infused in the water.",
      by: "Verified owner · ECHO Flow",
    }],
  },
  sections: [
    { kind: "certs", logos: machineCerts },
    {
      kind: "intro",
      kicker: "Filter-less by design",
      heading: "You already filter your water. Get into a healthy Flow by adding hydrogen.",
      body: "Most hydrogen machines make you replace their filtration too. The Flow doesn't — it sits downstream of your reverse osmosis or whole-house system and does one job extremely well: dissolve 99.99% pure molecular hydrogen into water that's already clean, without touching its pH.",
      cards: [
        {
          title: "No filters to buy",
          body: "Zero consumables in the hydrogen path. Your existing prefiltration keeps its own schedule; the Flow adds nothing to the shopping list.",
        },
        {
          title: "pH stays put",
          body: "The Echo Hydrogen Module™ infuses H₂ gas directly. No ionization, no mineral cartridges — the water tastes like your water.",
        },
        {
          title: "On demand, not batched",
          body: "Advanced sensing starts production the moment you open the tap and stops when you close it. Nothing sits in a tank going flat.",
        },
        {
          title: "Enough for the house",
          body: "An internal pump holds up to 1.2 litres a minute — a family’s worth of hydrogen water from one under-sink unit.",
        },
      ],
    },
    {
      kind: "split",
      theme: "mist",
      kicker: "Where it plugs in",
      heading: "One unit. Every outlet in the kitchen.",
      body: "Because the Flow lives in the cabinet rather than on the counter, its output can be split to more than one endpoint — you decide which taps in the kitchen pour hydrogen water.",
      numbered: true,
      items: [
        {
          title: "The accessory faucet",
          body: "The Echo RO/Flow Faucet™ installs in a spare countertop hole beside your main tap. Hydrogen water on its own dedicated spout.",
        },
        {
          title: "The refrigerator line",
          body: "Tee the Flow into your fridge’s water supply so the chilled water dispenser pours hydrogen-enriched water.",
        },
        { title: "The ice maker", body: "Same line, same result — ice made from hydrogen water, with no extra hardware on the counter." },
        {
          title: "A third-party faucet",
          body: "Already have an accessory tap you like? The Flow pairs with many third-party faucets; order it without ours.",
        },
      ],
      image: { src: `${base}/kitchen-system.jpg`, alt: "ECHO Flow installed as part of a kitchen hydration system" },
      imageSide: "left",
    },
    {
      kind: "split",
      theme: "dark",
      kicker: "The machine",
      heading: "Fits well wherever it's installed.",
      body: "The Flow is 9.5 × 9.5 inches on the face and 3.5 inches deep, weighing in at under four pounds. It mounts flat against the back of the cabinet, leaving the space under your sink usable.",
      items: [
        {
          title: "Echo Hydrogen Module™",
          body: "Our proprietary infusion module dissolves 99.99% pure molecular hydrogen into the water stream without altering pH — up to 1.21 ppm at the tap.",
        },
        {
          title: "Internal pump",
          body: "Maintains up to 1.2 litres per minute so the flow at the faucet feels normal, even downstream of a reverse osmosis tank.",
        },
        {
          title: "Advanced sensing",
          body: "Production starts when you open the tap and stops when you close it. Nothing is stored, nothing goes flat, nothing runs when you’re not drinking.",
        },
        {
          title: "Simple set-up",
          body: "One inlet, one outlet, one power lead. Most installs are a single visit, and the digital manual walks through each connection.",
        },
      ],
      image: { src: `${base}/front-view.png`, alt: "ECHO Flow unit, front view", fit: "contain", aspect: "aspect-square" },
      imageSide: "right",
    },
    {
      kind: "checklist",
      heading: "Four things to check under your sink.",
      body: "Most kitchens already meet all four. If you're unsure about any of them, send us a photo of your cabinet and we'll tell you before you buy.",
      links: ["Have us check it for you →"],
      items: [
        {
          title: "Prefiltration in place",
          body: "A reverse osmosis or whole-house filtration system upstream, delivering a minimum of 10 psi to the Flow. The Echo RO is the natural pairing if you don’t have one.",
        },
        {
          title: "Room in the cabinet",
          body: "9.5 × 9.5 inches of wall and 3.5 inches of depth. It mounts flat, so it fits alongside an RO tank in most standard sink bases.",
        },
        {
          title: "A hole for the faucet",
          body: "¹⁵⁄₁₆-inch to 1-inch, for the accessory faucet. Many countertops already have one; an installer can drill one inexpensively if not.",
        },
        {
          title: "A live outlet",
          body: "Constant power under the sink — commonly shared with the garbage disposal circuit. No dedicated line needed.",
        },
      ],
    },
    {
      kind: "upsell",
      kicker: "No prefiltration yet?",
      heading: "Add the Echo RO and you have the whole system.",
      body: "The Flow requires prefiltration — a whole-house system or reverse osmosis, minimum 10 psi at the inlet. If you don't have one, the Echo RO is the unit it was engineered around: they install in the same cabinet, on the same faucet, in one visit.",
      slug: "echo-ro",
      ctaLabel: "Add the RO to my order — ₦800,292.91",
      image: { src: `${base}/ro-under-sink.png`, alt: "ECHO RO tankless reverse osmosis system installed under a kitchen sink" },
      tableTitle: "Works downstream of",
      rows: [
        { label: "Echo RO", value: "Engineered pairing" },
        { label: "Third-party RO", value: "Supported · min 10 psi" },
        { label: "Whole-house filtration", value: "Supported" },
        { label: "Unfiltered tap or well", value: "Not supported" },
      ],
      note: "Unfiltered municipal or well water straight into the Flow is not supported — prefiltration protects the hydrogen module and is required by the warranty.",
    },
    scienceSection,
    {
      kind: "specs",
      heading: "Product Specifications",
      rows: [
        { label: "Hydrogen production", value: "Up to 1.21 ppm" },
        { label: "ORP", value: "Up to −500 mV*" },
        { label: "Flow rate", value: "Up to 1.2 L/min" },
        { label: "Filtration", value: "None · requires prefiltration" },
        { label: "Minimum inlet pressure", value: "10 psi" },
        { label: "Product dimensions", value: "9.5 × 9.5 × 3.5 in" },
        { label: "Shipping dimensions", value: "14 × 10 × 6 in" },
        { label: "Weight", value: "3.85 lbs" },
        { label: "Installation", value: "Under-counter" },
        { label: "Power", value: "Standard household outlet" },
        { label: "Faucet finishes", value: "Chrome · Stainless · Matte black · Oiled bronze" },
        { label: "Warranty", value: "10 years" },
      ],
      links: ["Digital manual →"],
      note: "*ORP figures depend on source water chemistry and flow rate.",
      image: { src: `${base}/kitchen-system.jpg`, alt: "ECHO Flow generator, angled view" },
    },
    {
      kind: "faq",
      heading: "Frequently Asked Questions",
      items: [
        {
          question: "Do I need a filter or an RO system for this?",
          answer:
            "Yes. The Flow is filter-less by design and requires prefiltration — a reverse osmosis unit or whole-house filtration system, with a minimum of 10 psi at the inlet. It was engineered around the Echo RO, but works downstream of most third-party systems.",
        },
        {
          question: "Where does the Flow actually go?",
          answer:
            "Under the counter, attached to your kitchen sink plumbing. It is 9.5 inches square and only 3.5 inches deep, so it mounts against the back of the cabinet rather than occupying the floor of it.",
        },
        {
          question: "Do I have to drill my countertop?",
          answer:
            "Only if you don’t already have a spare hole. The Echo RO/Flow Faucet™ needs a ¹⁵⁄₁₆-inch to 1-inch hole — many kitchens have one from a soap dispenser or other accessory. If not, a countertop installer can add one for a small fee.",
        },
        {
          question: "Can I use my own faucet?",
          answer:
            "Yes. Choose the No Faucet option and pair the Flow with many third-party accessory faucets. The Echo faucet is a secondary tap and does not replace your primary kitchen faucet.",
        },
        {
          question: "Can it feed the fridge or ice maker?",
          answer:
            "Yes. The Flow can be connected to the water supply for your refrigerator as well as the countertop faucet, so ice and chilled water are hydrogen-enriched too.",
        },
        {
          question: "Does it change the pH of my water?",
          answer:
            "No. The Echo Hydrogen Module™ dissolves hydrogen gas directly into the water without altering its acidity — up to 1.21 ppm of H₂ and an ORP of up to −500 mV, with the pH left where it was.",
        },
        {
          question: "What power does it need?",
          answer:
            "A standard outlet with constant power. For an under-sink install it can typically share the circuit used by the garbage disposal.",
        },
        {
          question: "What does the 10-year warranty cover?",
          // Neutralized: the design named the manufacturer's US support team.
          answer:
            "The unit and the hydrogen module. Running the Flow without required prefiltration is excluded. Every order also carries a 60-day money-back guarantee.",
        },
      ],
    },
    {
      kind: "reviews",
      data: {
        rating: 4.5,
        distribution: [7, 0, 0, 0, 1],
        recommendPct: 88,
        reviews: [
          {
            name: "Kindra P.",
            initials: "KP",
            when: "11 months ago",
            verified: true,
            rating: 5,
            title: "Hydrate for better health!",
            body: "I’m so excited to get my new Echo system. I’ve wanted one for a long time and have reviewed many. This is by far superior. I look forward to all of the health benefits that come with drinking hydrogen water.",
            helpfulYes: 1,
            helpfulNo: 1,
          },
          { name: "Donald", when: "1 year ago", verified: true, rating: 1, title: "1 stars", body: "1 stars", helpfulYes: 0, helpfulNo: 3 },
          {
            name: "Chad H.",
            initials: "CH",
            when: "1 year ago",
            verified: true,
            rating: 5,
            title: "Works well!",
            body: "Smaller than I thought it would be which is great! Can see the bubbles from the hydrogen gas infused in the water.",
            helpfulYes: 5,
          },
          {
            name: "Alma A.",
            initials: "AA",
            when: "1 year ago",
            verified: true,
            rating: 5,
            title: "Really enjoy it",
            body: "Love the taste of the water!",
            helpfulYes: 2,
          },
          { name: "John", when: "2 years ago", verified: false, rating: 5, title: "5 Stars", body: "Awesome", helpfulYes: 3, helpfulNo: 4 },
        ],
      },
    },
  ],
};
