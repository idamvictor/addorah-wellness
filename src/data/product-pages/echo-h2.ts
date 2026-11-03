import { machineCerts, scienceSection } from "@/data/product-pages/echo-flow";
import type { MachinePageContent } from "@/data/product-pages/machine";

const base = "/images/products/echo-h2";

const reviews = [
  {
    name: "TerraLeigh B.",
    initials: "TB",
    when: "1 year ago",
    verified: true,
    rating: 5,
    title: "Works amazing!",
    body: "I've had two other machines, I like this one as well. Works great, thousands of Tiny Bubbles fill my glass!",
    helpfulYes: 1,
    helpfulNo: 12,
  },
  {
    // The design also showed the manufacturer's reply to this review; that reply is omitted here.
    name: "Dennis C.",
    initials: "DC",
    when: "1 year ago",
    verified: true,
    rating: 1,
    title: "No Transparency",
    body: "It's very unfortunate that your company can't be transparent about your products. I have been doing extensive research on hydrogen machines and the importance of quality materials used in these devices. As a consumer, I should be able to know where these materials are being sourced from, so I can make the best decision for my health and safety. Why keep something like this confidential? The only conclusion I can make is that you are not disclosing information because it would affect your sales.",
    helpfulYes: 12,
    helpfulNo: 5,
  },
  {
    name: "Scott G.",
    initials: "SG",
    when: "1 year ago",
    verified: true,
    rating: 5,
    title: "Echo H2 Hydrogen water",
    body: "I have been using the under counter machine for about two weeks and it works great. Very happy with it.",
    helpfulYes: 2,
  },
  {
    name: "Reina S.",
    initials: "RS",
    when: "1 year ago",
    verified: true,
    rating: 5,
    title: "Noticeable Health Boost in Just Two Weeks!",
    body: "I’ve been using the Echo Water Filter for the last two weeks, and I’m already noticing positive changes in my body and energy levels. It’s been a small but significant improvement, and I even shared my results with my integrative health provider—they were really pleased with my progress, and I’m thrilled too! While it might be too early to call it the best on the market, my experience so far has been excellent. The water tastes great, and I feel more energized throughout the day. I’ll keep monitoring the results, but for now, I’m very happy with my purchase. Thank you, Echo Water!",
    helpfulYes: 1,
    helpfulNo: 1,
  },
  {
    name: "Andrea Volpe N.",
    initials: "AV",
    when: "1 year ago",
    verified: true,
    rating: 5,
    title: "Best investment since 4 years already",
    body: "I bought this machine since 4 years and still works perfectly with the same amount of hydrogen infused ( I measure often). Best investment ever. Totally reccomend !! Even my 4 dogs drink this water only !! People who visit me always say they fell the difference after days drinking this hydrogen infused water !!",
    helpfulYes: 6,
    helpfulNo: 2,
  },
];

export const echoH2Page: MachinePageContent = {
  slug: "echo-h2",
  gallery: [
    { src: `${base}/gallery-1.png`, alt: "Stainless steel ECHO H2 with digital display and flexible spout" },
    { src: `${base}/gallery-2.png`, alt: "Countertop ECHO H2 with attached faucet" },
    { src: `${base}/gallery-3.jpg`, alt: "ECHO H2 with a glass of water on a kitchen counter" },
    { src: `${base}/gallery-4.jpg`, alt: "ECHO H2® Hydrogen Water Machine" },
    { src: `${base}/gallery-5.jpg`, alt: "ECHO H2® Hydrogen Water Machine" },
    { src: `${base}/gallery-6.jpg`, alt: "ECHO H2® Hydrogen Water Machine" },
    { src: `${base}/gallery-7.jpg`, alt: "ECHO H2® Hydrogen Water Machine" },
  ],
  buyBox: {
    intro:
      "Filtration and hydrogen infusion in one machine. Set it on the counter or hide it under the sink. Either way it pumps up to 1.44 ppm of dissolved hydrogen through a 5-stage filter, with no change to your water's pH.",
    variants: {
      label: "Faucet finish",
      hint: "Machine only · countertop install",
      options: [
        { name: "No faucet" },
        { name: "Chrome", swatch: "linear-gradient(135deg,#f4f6f7 0%,#c9ced2 38%,#8d949a 62%,#e8ebed 100%)" },
        { name: "Stainless Steel", swatch: "linear-gradient(135deg,#dcdcda 0%,#b3b3ae 45%,#8f8f8a 70%,#cfcfca 100%)" },
        { name: "Oil Rubbed Bronze", swatch: "linear-gradient(135deg,#a97a4e 0%,#7b5232 42%,#5a3a22 68%,#96693f 100%)" },
      ],
      note: "The Echo H2® Faucet is a secondary tap. It sits in the corner of the sink and does not replace your primary faucet. It's required for an under-counter install and optional on the counter.",
    },
    warranty: {
      title: "10-Year Warranty",
      body: "Full coverage on the machine and its hydrogen cell. Plus 60 days to change your mind.",
    },
    expertLink: "Not sure which install is right? Talk to an expert →",
    stats: [
      { value: "1.44 ppm", label: "dissolved H₂" },
      { value: "5-stage", label: "filtration included" },
      { value: "1,056 gal", label: "filter life" },
      { value: "Counter or cabinet", label: "installation" },
    ],
    quotes: reviews
      .filter((review) => review.rating === 5)
      .map((review) => ({ text: review.body.split(". ").slice(0, 2).join(". "), by: `${review.name} · Verified Buyer` })),
  },
  sections: [
    { kind: "certs", logos: machineCerts },
    {
      kind: "intro",
      media: "video",
      kicker: "Filter and hydrogen in one",
      heading: "Clean water and hydrogen water from the same tap.",
      body: "The H2 is the complete machine: a WQA-certified 5-stage filter takes the chlorine, metals and sediment out, and the hydrogen cell puts up to 1.44 ppm of molecular hydrogen in. Nothing upstream required, nothing else to buy.",
      cards: [
        {
          title: "Filtration included",
          body: "Five stages against chlorine, heavy metals, particulates, iron and hydrogen sulfide, microorganisms, scale, taste and odor.",
        },
        {
          title: "pH stays put",
          body: "Hydrogen gas is dissolved directly into the stream. No ionization, no mineral cartridge. The water tastes like water.",
        },
        {
          title: "A year per filter",
          body: "1,056 gallons is about twelve months for most households. One cartridge, one swap, no tools.",
        },
        {
          title: "Built in the USA",
          body: "Designed, engineered and assembled in the USA, WQA certified, and covered by a ten-year warranty.",
        },
      ],
    },
    {
      kind: "options",
      kicker: "Two ways to install",
      heading: "On the counter, or out of sight.",
      body: "The same machine does both. Countertop is a ten-minute set-up with no plumber. Under-counter puts it in the cabinet and brings the water up through the Echo H2® Faucet.",
      options: [
        {
          label: "Option one",
          title: "On the counter",
          body: "Connect it to the cold line, plug it in, pour. The flexible spout dispenses straight into the glass and the machine can move house with you.",
          image: { src: `${base}/install-counter.jpg`, alt: "ECHO H2 on the counter" },
          rows: [
            { label: "Faucet", value: "Not required" },
            { label: "Set-up", value: "No plumber" },
            { label: "Footprint", value: "6.5 × 10.5 in" },
          ],
        },
        {
          label: "Option two",
          title: "Under the sink",
          body: "The machine lives in the cabinet and the Echo H2® Faucet goes in a spare countertop hole — a dedicated tap for filtered, hydrogen-rich water.",
          image: { src: `${base}/install-sink.png`, alt: "ECHO H2 with the Echo H2 faucet for under-sink installs" },
          rows: [
            { label: "Faucet", value: "Echo H2® required" },
            { label: "Hole size", value: "¹⁵⁄₁₆ – 1 in" },
            { label: "Cabinet height", value: "14.5 in clear" },
          ],
        },
      ],
    },
    {
      kind: "split",
      theme: "dark",
      heading: "Small enough to live on the counter.",
      body: "14.5 inches tall and 6.5 deep, in brushed stainless with a flexible spout. It takes up about as much room as a coffee machine and looks like it belongs there.",
      items: [
        {
          title: "Hydrogen infusion cell",
          body: "Dissolves 99.99% pure molecular hydrogen into filtered water with up to 1.44 ppm at the spout, and unchanged pH.",
        },
        {
          title: "5-stage filtration",
          body: "Chlorine, heavy metals, particulates, iron and hydrogen sulfide, microorganisms, scale, taste and odor + WQA certified, 1,056 gallons per cartridge.",
        },
        {
          title: "1.2 L/min flow",
          body: "Fast enough to fill a bottle without waiting, whether it is pouring at the counter or through the under-sink faucet.",
        },
        {
          title: "Digital display",
          body: "Reads out status and filter life at a glance, so you replace the cartridge on time instead of by guesswork.",
        },
      ],
      image: { src: `${base}/front-view.png`, alt: "ECHO H2 machine, front view", fit: "contain", aspect: "aspect-square" },
      imageSide: "right",
    },
    {
      kind: "checklist",
      kicker: "Five stages",
      heading: "What comes out before hydrogen goes in.",
      body: "A WQA-certified cartridge rated for 1,056 gallons (roughly a year of drinking water for a family) handles the contaminants before the hydrogen cell ever sees the stream.",
      links: ["Replacement filter →", "Cleaning cartridge →"],
      items: [
        { title: "Chlorine" },
        { title: "Heavy metals" },
        { title: "Particulate matter" },
        { title: "Iron and hydrogen sulfide" },
        { title: "Microorganisms" },
        { title: "Taste and odor" },
        { title: "Scale" },
      ],
    },
    {
      kind: "split",
      theme: "mist",
      kicker: "Why hydrogen water",
      heading: "Drink it like water. Because it is.",
      body: "Hydrogen water is ordinary drinking water with molecular hydrogen dissolved in it. It is safe with meals and medication and available to the whole household from one tap.",
      bullets: [
        "Supports the body's natural response to oxidative stress",
        "Helps manage exercise-related fatigue",
        "Supports cognitive wellness",
        "Promotes natural energy",
        "Aids in post-activity recovery",
        "Supports gut wellness",
        "Supports restful sleep",
        "Provides filtered water",
      ],
      footnote:
        "These statements have not been evaluated by the FDA. These products are not intended to diagnose, treat, cure or prevent any disease.",
      image: { src: `${base}/kitchen.jpg`, alt: "ECHO H2 machine in a kitchen" },
      imageSide: "left",
    },
    scienceSection,
    {
      kind: "specs",
      heading: "Product Specifications",
      rows: [
        { label: "Hydrogen production", value: "Up to 1.44 ppm*" },
        { label: "Flow rate", value: "1.2 L/min" },
        { label: "Filtration", value: "5-stage · WQA certified" },
        { label: "Filter life", value: "1,056 gal / 4,000 L" },
        { label: "Product dimensions", value: "6.5 D × 10.5 W × 14.5 H in" },
        { label: "Shipping dimensions", value: "18 × 14 × 10 in" },
        { label: "Weight", value: "10 lbs" },
        { label: "Installation", value: "Countertop or under-counter" },
        { label: "Faucet finishes", value: "Chrome · Stainless · Oil rubbed bronze · None" },
        { label: "Power", value: "Standard household outlet" },
        { label: "Warranty", value: "10 years" },
      ],
      links: ["Digital manual →"],
      note: "*Hydrogen concentration and filter life vary with source water chemistry and usage. The Echo H2® Faucet is required for under-counter installation and is included with the faucet finish options above.",
      image: { src: `${base}/install-counter.jpg`, alt: "ECHO H2 machine on a kitchen counter" },
    },
    {
      kind: "faq",
      heading: "Frequently Asked Questions",
      items: [
        {
          question: "Do I need a separate faucet?",
          answer:
            "Only for an under-counter install — the Echo H2® Faucet brings the water up to the sink and is required in that configuration. On the counter the machine uses its own flexible spout and no faucet is needed. The Echo faucet is a secondary tap; it sits beside your primary kitchen faucet rather than replacing it.",
        },
        {
          question: "Does it need an RO or other filtration upstream?",
          answer:
            "No. The H2 is the complete machine — a WQA-certified 5-stage filter is built in, so it connects to your standard cold water supply and handles filtration itself.",
        },
        {
          question: "How often do I change the filter?",
          answer:
            "The cartridge is rated for 1,056 gallons (4,000 litres) — about a year for most households. An optional cleaning cartridge is available for periodic maintenance of the hydrogen cell.",
        },
        {
          question: "Does it change the pH of my water?",
          answer:
            "No. Molecular hydrogen is dissolved directly into the filtered water, up to 1.44 ppm, without altering acidity. No ionization involved.",
        },
        {
          question: "How much counter space does it take?",
          answer: "6.5 inches deep by 10.5 wide by 14.5 tall — roughly a coffee grinder’s footprint, at 10 lbs.",
        },
        {
          question: "Can I drink it with medication?",
          answer:
            "Hydrogen water can be enjoyed like ordinary drinking water, including when taking medication. As always, consult your healthcare professional about your own situation.",
        },
        {
          // The design gave a manufacturer back-order date (October 2026); replaced with neutral wording.
          question: "When will it ship?",
          answer: "Availability changes with each shipment. Contact us for current stock and delivery timelines before you order.",
        },
        {
          question: "What does the 10-year warranty cover?",
          answer: "The machine and its hydrogen cell. Every order also carries a 60-day money-back guarantee.",
        },
      ],
    },
    {
      kind: "reviews",
      data: { rating: 4.3, distribution: [5, 0, 0, 0, 1], recommendPct: 83, reviews },
    },
  ],
};
