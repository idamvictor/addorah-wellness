import { machineCerts } from "@/data/product-pages/echo-flow";
import type { MachinePageContent } from "@/data/product-pages/machine";
import type { Review } from "@/data/reviews";

const base = "/images/products/echo-revive";

const reviews: Review[] = [
  {
    name: "Michelle D.",
    initials: "MD",
    when: "11 months ago",
    verified: true,
    rating: 5,
    title: "Revive",
    body: "I have only had it a couple days, but leading up to the arrival, the customer service rep that is assigned to my case has been amazing. Will write a further review after I’ve had it a few weeks. The two days that I have used it, I’ve had a significant amount of decreased pain.",
    helpfulYes: 0,
  },
];

export const echoRevivePage: MachinePageContent = {
  slug: "echo-revive",
  gallery: [
    { src: `${base}/gallery-1.jpg`, alt: "Hydrogen water bath machine with digital display and wheels on a white background" },
    { src: `${base}/gallery-2.jpg`, alt: "Hydrogen water bath machine on a bathroom floor in front of a white bathtub" },
    { src: `${base}/gallery-3.jpg`, alt: "Hand holding a hydrogen water filter hose with a blue and silver connector" },
  ],
  buyBox: {
    intro:
      "Upgrade your bath experience with the Echo Revive. This innovative device infuses your bath water with hydrogen gas, a natural antioxidant known for its wellness properties. Relax, rejuvenate, and enjoy the potential benefits of hydrogen-enriched water for enhanced comfort and self-care.",
    warranty: {
      title: "10-Year Warranty",
      body: "Every ECHO Revive includes our 10-year limited warranty at no extra cost. No registration required. You're covered from day one.",
    },
    expertLink: "Questions about your tub or bathroom? Talk to an expert →",
    stats: [
      { value: "Up to 1.6 ppm", label: "Dissolved H₂ in the tub" },
      { value: "99.99%", label: "Hydrogen purity · SPE/PEM" },
      { value: "6 L/min", label: "Water yield" },
      { value: "15–60 min", label: "Session length" },
    ],
    quotes: [
      { text: "The two days that I have used it, I've had a significant amount of decreased pain.", by: "Michelle D. · Verified Buyer" },
    ],
  },
  sections: [
    { kind: "certs", logos: machineCerts },
    { kind: "custom", id: "revive-seen-in" },
    { kind: "custom", id: "revive-why-bathe" },
    {
      kind: "split",
      theme: "mist",
      kicker: "The ritual",
      heading: "Four steps, then get in.",
      numbered: true,
      items: [
        { title: "Roll it in", body: "Handle and locking wheels. It lives wherever there is an outlet near the tub." },
        { title: "Fill the tub", body: "Ordinary warm water — no salts, oils or additives of any kind." },
        { title: "Drop the hose", body: "The hydrogen line sits in the water and diffuses H₂ through the bath." },
        { title: "Pick a cycle", body: "15, 30, 45 or 60 minutes on the 6\" touchscreen, then get in and stay in." },
      ],
      footnote:
        "No plumbing, no installation, no bathroom renovation. The Revive rolls in on locking wheels and plugs into a standard outlet.",
      image: { src: `${base}/beside-tub.jpg`, alt: "Echo Revive beside a white bathtub" },
      imageSide: "left",
    },
    {
      kind: "split",
      theme: "dark",
      kicker: "The machine",
      heading: "Built to run quietly for a decade.",
      body: "Advanced SPE and PEM membrane technology with a high membrane surface area — more hydrogen per watt, and 99.99% purity at the outlet. Integrated safety systems watch water level, temperature and power the whole time it runs.",
      items: [
        {
          title: "Premium hydrogen generator",
          body: "SPE and PEM technology with a high membrane surface area — efficient production, 99.99% pure hydrogen at the outlet.",
        },
        {
          title: "6\" touchscreen display",
          body: "Real-time feedback on filter life and total dissolved solids, plus alerts for water level and replacement reminders.",
        },
        {
          title: "Portable by design",
          body: "A built-in handle and lockable wheels. Nothing is plumbed in, so it moves rooms — or houses — with you.",
        },
        {
          title: "Whisper-quiet operation",
          body: "Optimized efficiency means the machine stays in the background of the room it is running in.",
        },
      ],
      image: {
        src: `${base}/front-view.jpg`,
        alt: "Echo Revive with 6 inch touchscreen display and wheels",
        fit: "contain",
        aspect: "aspect-square",
      },
      imageSide: "right",
    },
    {
      kind: "science",
      kicker: "The science",
      heading: "We don't just follow the science. We advance it.",
      body: "Molecular hydrogen has been examined in 2,276 peer-reviewed studies. These are the ones about bathing in it.",
      linkLabel: "Browse the research hub →",
      items: [
        { topic: "Dermatology", title: "Hydrogen water bathing — positive effects on psoriasis and parapsoriasis" },
        { topic: "Body composition", title: "Effects of hydrogen-rich water bathing on visceral fat and skin blotches" },
        { topic: "Inflammation", title: "Hydrogen-rich bathing improves antioxidant capacity and inflammation levels in human serum" },
        { topic: "Skin aging", title: "Repetitive bathing and skin poultice with hydrogen-rich water improve wrinkles and blotches" },
      ],
    },
    {
      kind: "quote",
      text: "I use it after training instead of an ice bath. Twenty minutes in the tub and the next morning feels different.",
      by: "Verified owner · Echo Revive",
      // "Live, USA-based customer service" is the manufacturer's; neutral wording here.
      meta: ["1,200+ 5-star reviews across ECHO", "60 day money back guarantee", "Live support from real people"],
    },
    {
      kind: "specs",
      heading: "Product Specifications",
      rows: [
        { label: "H₂ concentration", value: "Up to 1.6 ppm" },
        { label: "Hydrogen purity", value: "99.99% · SPE/PEM" },
        { label: "Cycle times", value: "15 / 30 / 45 / 60 min" },
        { label: "Display", value: "6\" touchscreen" },
        { label: "Product dimensions", value: "15 × 11 × 15 in" },
        { label: "Shipping dimensions", value: "20 × 14 × 21 in" },
        { label: "Weight", value: "40 lbs" },
        { label: "Power", value: "Standard household outlet" },
        { label: "Mobility", value: "Handle · locking wheels" },
        { label: "Warranty", value: "10 years" },
      ],
      links: ["User manual →", "How it works →"],
      image: { src: `${base}/hose-connector.jpg`, alt: "Hand holding the Revive hydrogen hose connector" },
    },
    {
      kind: "faq",
      heading: "Frequently Asked Questions",
      items: [
        {
          question: "Do I need to install anything?",
          answer:
            "No. The Revive is self-contained — it rolls to the tub on locking wheels and plugs into a standard household outlet. No plumbing and no bathroom work.",
        },
        {
          question: "How much hydrogen ends up in the bath?",
          answer: "Up to 1.6 ppm of dissolved molecular hydrogen in the tub, produced at 99.99% purity by SPE/PEM electrolysis.",
        },
        {
          question: "How long should I soak?",
          answer:
            "Choose a 15, 30, 45 or 60 minute cycle on the touchscreen. Most owners settle on 30 minutes daily, with 45 after hard training.",
        },
        {
          question: "Does it need special water or additives?",
          answer: "No. Ordinary warm tap water. Nothing is added to the bath — the machine only puts hydrogen gas into it.",
        },
        { question: "Is it loud?", answer: "No. The Revive runs whisper-quiet by design, so a soak stays a soak." },
        {
          // "Supported by our live, USA-based team" is the manufacturer's; neutral wording here.
          question: "What does the warranty cover?",
          answer: "The machine is warrantied for ten years. Every order also carries a 60 day money back guarantee.",
        },
      ],
    },
    { kind: "specialist", heading: "Have questions? Speak to a Specialist", card: {} },
    {
      kind: "reviews",
      data: { rating: 5, distribution: [1, 0, 0, 0, 0], recommendPct: 100, reviews },
    },
  ],
};
