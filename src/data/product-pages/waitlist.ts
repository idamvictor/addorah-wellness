export type GalleryImage = { src: string; alt: string };

export type WaitlistPageContent = {
  slug: "echo-forty" | "echo-one";
  launchLabel: string;
  title: string;
  subtitle: string;
  heroImage: string;
  heroCta: string;
  heroBullets: string[];
  intro:
    | { kind: "banner"; image: string; text: string }
    | { kind: "split"; image: string; imageAlt: string; text: string };
  features: { title: string; body: string }[];
  card: {
    showPrice: boolean;
    shipsNote: string;
    description: string;
    guarantee: string;
    gallery: GalleryImage[];
    colors?: { name: string; swatch: string; gallery: GalleryImage[] }[];
    specs: { label: string; value: string }[];
  };
};

const fortyGallery: GalleryImage[] = [
  { src: "/images/products/echo-forty/gallery-1.jpg", alt: "ECHO Forty tumbler in white" },
  { src: "/images/products/echo-forty/gallery-2.jpg", alt: "ECHO Forty tumbler detail" },
  { src: "/images/products/echo-forty/gallery-3.jpg", alt: "ECHO Forty tumbler lifestyle" },
];

export const waitlistPages: Record<WaitlistPageContent["slug"], WaitlistPageContent> = {
  "echo-forty": {
    slug: "echo-forty",
    launchLabel: "Launching Early 2027",
    title: "ECHO Forty",
    subtitle: "The 40oz Hydrogen Water Tumbler",
    heroImage: "/images/products/echo-forty/hero.jpg",
    heroCta: "Join The Waitlist",
    heroBullets: ["40 Ounce Capacity", "4–6ppm Hydrogen", "Smart App Integrated"],
    intro: {
      kind: "banner",
      image: "/images/products/echo-forty/statement.jpg",
      text: "The ECHO Forty is a 40 oz portable tumbler that generates molecular hydrogen on demand, bringing hydrogen hydration into one of the largest portable formats available.",
    },
    features: [
      {
        title: "4-6 PPM: Highest Concentration",
        body: "Get industry-leading levels of hydrogen at some of The highest volume available.",
      },
      {
        title: "Platinum-Coated Titanium Electrodes + PEM",
        body: "Premium PEM membrane and high-quality electrodes ensure hydrogen-rich nano-bubbles.",
      },
      {
        title: "40oz industry-Leading Capacity",
        body: "Scale beyond small flasks into high-volume, everyday hydration; without sacrificing portability, PPM, or control.",
      },
      {
        title: "Flexible Drinking Options",
        body: "Features 8 lid orientations for left- or right-handed comfort, a slim ergonomic straw, and rotating valves that deliver smooth, controlled flow with reduced pressure.",
      },
      {
        title: "Superior Materials",
        body: "Our double Walled Stainless Steel Vessel improves taste, durability, ease of cleaning, temperature regulation, and keeps water pure.",
      },
      {
        title: "Smart Integration",
        body: "Touch-Screen interface tracks H2 and water consumption right on the bottle. Use the app to set goals, track progress, create reminders, connect, and learn.",
      },
    ],
    card: {
      showPrice: false,
      shipsNote: "Ships Early 2027- Join the Waitlist for priority access",
      description:
        "The ECHO Forty is a 40 oz portable tumbler that generates molecular hydrogen on demand, bringing hydrogen hydration into one of the largest portable formats available.",
      guarantee: "60-Day Money Back Guarantee | 5-Year Warranty",
      gallery: fortyGallery,
      colors: [
        { name: "White", swatch: "/images/products/echo-forty/gallery-1.jpg", gallery: fortyGallery },
        {
          name: "Black",
          swatch: "/images/products/echo-forty/swatch-black.jpg",
          // Only a single black photo exists in the design so far.
          gallery: [{ src: "/images/products/echo-forty/swatch-black.jpg", alt: "ECHO Forty tumbler in black" }],
        },
      ],
      specs: [
        { label: "Max Capacity", value: "1.18 L (40 oz)" },
        { label: "Hydrogen Production", value: "4-6 ppm" },
        { label: "Weight", value: "3.5 lbs Empty - 6 lbs Full" },
        { label: "Materials", value: "Stainless Steel & Plastic" },
        { label: "Charging Time", value: "Approx. 120-160 min via USB" },
        { label: "Dimensions", value: 'H=11", W=6.4" Bottle Diameter = 4.1"' },
      ],
    },
  },
  "echo-one": {
    slug: "echo-one",
    launchLabel: "Launching Early 2027",
    title: "ECHO One",
    subtitle: "The Ultra Pure Hydrogen Water System",
    heroImage: "/images/products/echo-one/hero.jpg",
    heroCta: "Join The Waitlist Now",
    heroBullets: ["Hydrogen Generation", "Reverse Osmosis", "UV Filtration"],
    intro: {
      kind: "split",
      image: "/images/products/echo-one/under-counter.png",
      imageAlt: "ECHO One installed under a kitchen counter",
      text: "The ECHO One is a high-purity, under-counter hydrogen water system that combines reverse osmosis and on-demand hydrogen generation for clean water everyday. By filtering water before hydrogen infusion, this system helps ensure efficient hydrogen generation while limiting unwanted byproducts.",
    },
    features: [
      {
        title: "Premium Reverse Osmosis Filtering",
        body: "5-Stage filtration on tap water or hydrogen water production, enhancing your water right out of the tap.",
      },
      {
        title: "UV Light Purification",
        body: "Provides fast, chemical-free neutralization of harmful microorganisms without affecting water taste.",
      },
      {
        title: "Convenient Setup",
        body: "The ECHO One can be installed under-counter and connected to a secondary faucet for easy use.",
      },
      {
        title: "Designed for Shared Environments",
        body: "Adapts to your needs, providing clean, hydrogen-enriched water to households, gyms, spas, community settings, and more.",
      },
      {
        title: "Superior Hydrogen Production",
        body: "Generates 2-4 ppm Hydrogen Enriched Water without the risk of heavy metal contamination, chlorine, or dangerous byproducts.",
      },
    ],
    card: {
      showPrice: true,
      shipsNote: "Ships Early 2027- Join the Waitlist for priority access",
      description:
        "The ECHO One is a high-purity, under-counter hydrogen water system that combines reverse osmosis and on-demand hydrogen generation for clean water everyday.",
      guarantee: "60-Day Money Back Guarantee | 10-Year Warranty",
      gallery: [
        { src: "/images/products/echo-one/gallery-1.jpg", alt: "ECHO One with glowing LED edge lighting" },
        { src: "/images/products/echo-one/gallery-2.jpg", alt: "ECHO One on a light background" },
        { src: "/images/products/echo-one/gallery-3.jpg", alt: "ECHO One with illuminated edges" },
        { src: "/images/products/echo-one/gallery-4.jpg", alt: "ECHO One installed under a kitchen sink" },
      ],
      specs: [
        { label: "Hydrogen Production", value: "2-4 ppm" },
        { label: "Power", value: "110/220" },
        { label: "Dimensions", value: 'H=16", W=8", Depth=12"' },
      ],
    },
  },
};
