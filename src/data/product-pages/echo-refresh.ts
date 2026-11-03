import { machineCerts } from "@/data/product-pages/echo-flow";
import type { MachinePageContent } from "@/data/product-pages/machine";
import type { Review } from "@/data/reviews";

const base = "/images/products/echo-refresh";

const reviews: Review[] = [
  { name: "Ryan", when: "2 months ago", verified: true, rating: 5, title: "5 Stars", body: "Love it!", helpfulYes: 0 },
  {
    // The design also showed the manufacturer's reply to this review; that reply is omitted here.
    name: "MOHAMED A.",
    initials: "MA",
    when: "3 months ago",
    verified: true,
    rating: 5,
    title: "Life-Changing Relief: A Mother's Journey to Healing",
    body: "I am writing to express our deepest gratitude for your hydrogen inhalation machine. For over eight years, my mother suffered from severe neck pain radiating to her hand, along with persistent hand shaking. Despite trying physiotherapy, acupuncture, traditional Chinese medicine, and even undergoing cervical spine surgery, her debilitating pain and shaking persisted. After using your hydrogen inhalation machine for just six days, the results have been life-changing. Her pain has completely cleared, and the shaking in her hand is entirely gone. Seeing her happy and living pain-free after a decade of suffering means the world to our family. Thank you for your innovation and dedication to restoring quality of life. We are immensely grateful to the entire Eco team.",
    helpfulYes: 0,
  },
];

export const echoRefreshPage: MachinePageContent = {
  slug: "echo-refresh",
  gallery: [
    { src: `${base}/gallery-1.png`, alt: "ECHO Refresh Hydrogen Inhalation Machine" },
    { src: `${base}/gallery-2.jpg`, alt: "ECHO Refresh Hydrogen Inhalation Machine" },
    { src: `${base}/gallery-3.png`, alt: "ECHO Refresh Hydrogen Inhalation Machine" },
    { src: `${base}/gallery-4.png`, alt: "Close-up of a hydrogen inhalation cannula with blue and white tubing" },
  ],
  buyBox: {
    intro:
      "Introducing the Echo Refresh® hydrogen inhalation machine. The Refresh enables you to inhale hydrogen gas. It goes from your lungs into your bloodstream in a matter of seconds, so you can feel the positive effects of molecular hydrogen right away. Use as a stand alone therapy or combine with other modalities.",
    warranty: {
      title: "10-Year Warranty",
      body: "Every ECHO Refresh includes our 10-year limited warranty at no extra cost. No registration required. You're covered from day one.",
    },
    stats: [
      { value: "1,800 ml/min", label: "Hydrogen/oxygen output · 3–4× most machines" },
      { value: "99.999%", label: "Hydrogen purity · SPE/PEM" },
    ],
    quotes: [
      { text: "Love it!", by: "Ryan · Verified Buyer" },
      {
        text: "After using your hydrogen inhalation machine for just six days, the results have been life-changing.",
        by: "Mohamed A. · Verified Buyer",
      },
    ],
  },
  sections: [
    { kind: "certs", logos: machineCerts },
    {
      kind: "band",
      kicker: "Hydrogen inhalation vs. hydrogen water",
      heading: "Drinking it takes minutes. Breathing it takes seconds.",
      body: "A glass of hydrogen water has to be digested. Inhaled hydrogen goes lungs → bloodstream almost immediately, and it keeps going for as long as the session runs, which is why inhalation is the best hydrogen therapy to fit into your routine.",
      image: { src: `${base}/cannula.png`, alt: "Hydrogen inhalation cannula" },
      lead: "The ECHO Refresh® is an at-home hydrogen inhalation machine (a molecular hydrogen machine) that splits distilled water by SPE/PEM electrolysis and delivers up to 1,200 ml/min of 99.999% pure hydrogen gas, plus up to 600 ml/min of oxygen, through a cannula in sessions of 30 to 360 minutes.",
      cards: [
        {
          title: "Straight to the bloodstream",
          body: "No digestion in the way. Hydrogen is the smallest molecule there is — it crosses from the lungs into circulation in seconds.",
        },
        {
          title: "Dose you can extend",
          body: "Sessions run from 30 minutes to six hours. A short reset in the morning, or a long one overnight.",
        },
        {
          title: "Stacks with everything",
          body: "Standalone therapy, or run it while you read, work, meditate, or recover between sauna and cold.",
        },
        {
          title: "Nothing but gas and water",
          body: "Electrolysis splits distilled water. No chlorine, fluoride, lead, heavy metals or bacteria in the stream you breathe.",
        },
      ],
    },
    {
      kind: "split",
      theme: "mist",
      kicker: "The session",
      heading: "Four steps, then just breathe.",
      numbered: true,
      items: [
        {
          title: "Fill the tank",
          body: "Distilled water in the reservoir. The touchscreen tells you when the level is off or the water needs changing.",
        },
        { title: "Connect a cannula", body: "Two H₂ ports plus an oxygen channel. One person or two, on the same session." },
        { title: "Set the time", body: "Anywhere from 30 to 360 minutes on the 7\" touchscreen, then press start." },
        { title: "Carry on", body: "It’s quiet. Read, work, train, sleep: the session runs in the background." },
      ],
      footnote: "No installation and nothing plumbed in. Handles on both sides, 30 lbs, standard household outlet.",
      image: { src: `${base}/session.png`, alt: "Echo Refresh hydrogen inhalation machine", aspect: "aspect-[694/463]" },
      imageSide: "left",
    },
    {
      kind: "columns",
      kicker: "Three channel ports",
      heading: "Two hydrogen outputs + oxygen. Two people, one machine.",
      body: "Run a session together, or keep a second cannula ready so the machine never sits idle between people.",
      columns: [
        {
          label: "Port one",
          title: "H₂ output",
          body: "Up to 1,200 ml/min of 99.999% pure hydrogen gas across both H₂ ports — 3–4× most inhalation machines on the market.",
        },
        {
          label: "Port two",
          title: "Second H₂ output",
          body: "A full second line, so two people can run a session side by side without splitting the dose in half.",
        },
        {
          label: "Port three",
          title: "O₂ output",
          body: "Up to 600 ml/min of oxygen for protocols that pair the two, or for hydrogen-oxygen mixed sessions.",
        },
      ],
    },
    {
      kind: "split",
      theme: "dark",
      kicker: "The machine",
      heading: "Setting the standard for inhalation.",
      body: "SPE and PEM technology with a larger-than-industry-average membrane surface area, which means more hydrogen per watt, up to 1,200 ml/min at 99.999% purity, and every unit through a rigorous QA checklist before it ships.",
      items: [
        {
          title: "High flow 1,200 ml/min hydrogen generator",
          body: "SPE and PEM technology with a larger-than-average membrane surface area — greater energy efficiency and more gas per minute.",
        },
        {
          title: "7\" touchscreen display",
          body: "Session timing, machine settings and real-time alerts — water level too high, water due for a change, and more.",
        },
        {
          title: "Ultra-pure output",
          body: "99.999% contaminant-free: no chlorine, fluoride, lead, heavy metals or bacteria in the gas you breathe.",
        },
        {
          title: "Space-saving and portable",
          body: "Compact body, handles on both sides, 30 lbs. It moves between rooms as easily as it sits on a console.",
        },
        {
          title: "Quality assured, unit by unit",
          body: "Every Refresh goes through a rigorous QA checklist before it ships, and is backed for ten years.",
        },
      ],
      image: { src: `${base}/front-view.png`, alt: "Echo Refresh with 7 inch touchscreen", fit: "contain", aspect: "aspect-square" },
      imageSide: "right",
    },
    {
      kind: "science",
      kicker: "The science",
      heading: "We don't just follow the science. We advance it.",
      body: "Molecular hydrogen has been examined in 2,276 peer-reviewed studies. These are the ones about inhaling it.",
      linkLabel: "Browse the research hub →",
      items: [
        { topic: "Oxidative stress", title: "Inhaled molecular hydrogen as a selective antioxidant for cytotoxic oxygen radicals" },
        { topic: "Recovery", title: "Hydrogen gas inhalation and markers of exercise-induced oxidative stress and inflammation" },
        { topic: "Cognition", title: "Effects of hydrogen inhalation on fatigue, mood and cognitive performance measures" },
        { topic: "Cardiopulmonary", title: "Hydrogen-oxygen mixed gas inhalation and respiratory symptom outcomes" },
      ],
    },
    {
      kind: "quote",
      text: "Ninety minutes on the cannula while I answer email. It's the least demanding thing in my whole protocol.",
      by: "Verified owner · Echo Refresh",
      // "Live, USA-based customer service" is the manufacturer's; neutral wording here.
      meta: ["1,200+ 5-star reviews across ECHO", "60 day money back guarantee", "Live support from real people"],
    },
    {
      kind: "specs",
      heading: "Hydrogen Inhalation Machine Specifications",
      rows: [
        { label: "Max hydrogen output", value: "Up to 1,200 ml/min" },
        { label: "Max oxygen output", value: "Up to 600 ml/min" },
        { label: "Hydrogen purity", value: "99.999% · SPE/PEM" },
        { label: "Session times", value: "30 – 360 min" },
        { label: "Display", value: "7\" touchscreen" },
        { label: "Channel ports", value: "3 (2 × H₂, 1 × O₂)" },
        { label: "Product dimensions", value: "15 × 10 × 14 in" },
        { label: "Shipping dimensions", value: "20 × 14 × 21 in" },
        { label: "Weight", value: "30 lbs" },
        { label: "Power", value: "Standard household outlet" },
        { label: "Warranty", value: "10 years" },
      ],
      links: ["User manual →", "Support center →"],
      image: { src: `${base}/cannula.png`, alt: "Hydrogen inhalation cannula" },
    },
    {
      kind: "faq",
      heading: "Hydrogen inhalation machine FAQ",
      items: [
        {
          question: "How is inhaling hydrogen different from drinking it?",
          answer:
            "Drinking delivers hydrogen through digestion, in the amount a glass can hold. Inhalation delivers it through the lungs into the bloodstream within seconds, and can continue for hours — so the total exposure is far larger. Many owners do both.",
        },
        {
          question: "How long should a session be?",
          answer:
            "Sessions run from 30 to 360 minutes. Most people start at 30–60 minutes daily and extend from there; the machine is quiet enough to run while you work or sleep.",
        },
        {
          question: "Can two people use it at once?",
          answer:
            "Yes. The Refresh has three channel ports — two hydrogen outputs and one oxygen output — so two people can inhale at the same time.",
        },
        {
          question: "What water does it use?",
          answer:
            "Distilled water in the internal reservoir. The touchscreen alerts you when the level is off or the water is due for a change.",
        },
        {
          question: "Is it loud?",
          answer: "No. The Refresh is designed to stay quiet and efficient, so a long session doesn’t take over the room.",
        },
        {
          // "Supported by our live USA-based team" is the manufacturer's; neutral wording here.
          question: "What does the warranty cover?",
          answer:
            "Ten years, included at no extra cost and with no registration required. Every order also carries a 60 day money back guarantee.",
        },
      ],
    },
    { kind: "specialist", heading: "Have questions? Speak to a Specialist.", card: {} },
    {
      kind: "reviews",
      data: { rating: 5, distribution: [2, 0, 0, 0, 0], recommendPct: 100, reviews },
    },
  ],
};
