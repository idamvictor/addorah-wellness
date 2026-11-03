import type { AccessoryPageContent, AccessoryPrice } from "@/data/product-pages/accessory";

const img = (slug: string, file: string, alt: string) => ({ src: `/images/products/${slug}/${file}`, alt });

const cartridgeGallery = [
  img("echo-pitcher-replacement-cartridge", "gallery-1.jpg", "White water filter cartridge for the Echo Pitcher"),
  img("echo-pitcher-replacement-cartridge", "gallery-2.jpg", "Replacement pitcher filter cartridge in white plastic"),
  img("echo-pitcher-replacement-cartridge", "gallery-3.jpg", "Top view of the vented pitcher filter cartridge"),
];

const h2FaucetImg = (n: number, alt: string) => img("echo-h2-faucet", `gallery-${n}.png`, alt);

// RO single filters: the design only priced the complete set; singles use the "From" price shown on the shop card.
const roSingle: AccessoryPrice = { oneTime: 45717.55, compareAt: 57150.51, subscribe: 38859.92 };

const pitcherCartridge: AccessoryPageContent = {
  slug: "echo-pitcher-replacement-cartridge",
  gallery: cartridgeGallery,
  rating: 5,
  reviewCount: 0,
  price: { oneTime: 45717.55, compareAt: 57150.51, subscribe: 38859.92 },
  badges: "basic",
  description: [
    {
      type: "p",
      text: "Upgrade your water quality with the Echo Pitcher Replacement Cartridge. This high-performance filter removes chlorine, metals, bacteria, and even PFAS chemicals from your drinking water. Featuring activated carbon technology, it effectively eliminates contaminants while maintaining essential minerals. With a 150L capacity, you'll enjoy pure, refreshing water for months. Don't compromise on hydration quality—replace your filter today.",
    },
  ],
  features: [
    {
      type: "p",
      text: "The Echo Pitcher Filter Cartridge effectively removes chlorine, water-soluble metals, bacteria, algae, and scale from your water.",
    },
    {
      type: "p",
      text: "The high-quality Activated Carbon (AC) filter eliminates organic chemicals, pesticides, volatile organic compounds (VOCs), heavy metals, and odor-causing contaminants. Additionally, it can remove PFA chemicals, including PFOS, PFNA, and PFAS.",
    },
  ],
  specs: [
    {
      type: "list",
      style: "plain",
      items: [
        "Capacity of up to 150L",
        "Works to provide water filtration for the Echo Pitcher",
        "Weight: 0.25 lbs",
        "Product Dimensions: 4 x 3.25 x 2.5 in",
        "Shipping Dimensions: 10 x 7 x 3 in Bubble Mailer",
      ],
    },
  ],
  // The design also showed an Echo Cleaning Cartridge card; that product isn't in this store yet.
  related: ["echo-pitcher-filter-housing", "echo-machine-replacement-filters", "echo-ro-filters"],
};

const pitcherHousing: AccessoryPageContent = {
  slug: "echo-pitcher-filter-housing",
  gallery: [
    img("echo-pitcher-filter-housing", "gallery-1.jpg", "Filter pitcher with transparent container and white filter cartridge"),
    img("echo-pitcher-filter-housing", "gallery-2.jpg", "Top view of the transparent pitcher lid with black handle"),
    img("echo-pitcher-filter-housing", "gallery-3.jpg", "Transparent pitcher container with black lid"),
    img("echo-pitcher-filter-housing", "gallery-4.jpg", "Clear plastic pitcher filter housing"),
    img("echo-pitcher-filter-housing", "gallery-5.jpg", "Pitcher filter housing with removable cartridge"),
    ...cartridgeGallery,
  ],
  rating: 5,
  reviewCount: 0,
  price: { oneTime: 80016.43, compareAt: 100024.11 },
  description: [
    {
      type: "p",
      text: "By popular demand, our Echo Pitcher is able to generate hydrogen water, it can now also filter your water with our new Filter Housing and Cartridge accessory.",
    },
    {
      type: "p",
      text: "This does not include the Echo Pitcher. To use the Echo Pitcher Filter Housing and Cartridge, you must first purchase an Echo Pitcher",
    },
  ],
  features: [
    {
      type: "p",
      text: "The Echo Pitcher Filter Cartridge filters out chlorine and water soluble metals, bacteria, algae and scale.",
    },
    {
      type: "p",
      text: "The High Quality Activated Carbon (AC) filter removes organic chemicals, pesticides, volatile organic compounds (VOCs), heavy metals, and contaminants that cause odors. In addition it can remove PFA chemicals, including PFOS, PFNA, and PFAS.",
    },
  ],
  specs: [
    {
      type: "list",
      style: "plain",
      items: [
        "Activated Carbon Granule and KDF55 Filter Media",
        "Water Purification Capacity of 150L",
        "Fits inside the Echo Pitcher",
        "Weight: 1.35 lbs",
        "Product Dimensions: 7 x 6 x 4 in",
        "Shipping Dimensions: 11 x 7 x 7 in",
      ],
    },
  ],
  imageBand: {
    image: img("echo-pitcher-filter-housing", "band.jpg", "Pitcher filter housing with removable filter cartridge"),
    paragraphs: [
      "With our new filter housing and cartridge, you can take your Echo Pitcher to the next level with the ability to filter the water.",
      "The Housing comes with one Cartridge. A replacement cartridge is available for purchase.",
    ],
  },
  related: ["echo-pitcher-replacement-cartridge", "echo-machine-replacement-filters", "echo-flask"],
};

const retroFilter: AccessoryPageContent = {
  slug: "echo-retro-nhm130-filter",
  gallery: [img("echo-retro-nhm130-filter", "gallery-1.png", "Echo replacement carbon block water filter cartridge")],
  rating: 5,
  reviewCount: 0,
  price: { oneTime: 78887.42, compareAt: 98609.28 },
  badges: "basic",
  description: [
    {
      type: "p",
      text: "The Echo Retro Carbon Block Filter (previously named NHM-130 Carbon Block Filter) is one of the two necessary filters for the Echo Retro (previously named NHM-130 Machine). The proprietary Carbon Block Filter removes:",
    },
    {
      type: "list",
      style: "plain",
      items: [
        "Chlorine",
        "Chloramines",
        "Pharmaceutical drugs",
        "Water-soluble metals",
        "Bacteria",
        "Algae",
        "Pesticides",
        "Other chemicals found in water",
      ],
    },
    { type: "p", text: "The Carbon Block Filter lasts 475 gallons and should be replaced every six months." },
  ],
  // The design also showed the Retro/NHM130 Hollow Fiber Filter; that product isn't in this store yet.
  related: ["echo-machine-replacement-filters", "echo-guard", "echo-ultimate"],
};

const roFilters: AccessoryPageContent = {
  slug: "echo-ro-filters",
  gallery: [
    img("echo-ro-filters", "gallery-1.jpg", "Four-stage reverse osmosis filter system with numbered cartridges"),
    img("echo-ro-filters", "gallery-2.png", "Reverse osmosis system with four labeled cartridges: PP, CTO, RO, T-33"),
  ],
  rating: 4.7,
  reviewCount: 3,
  price: { oneTime: 228644.91, compareAt: 342917.34, subscribe: 194348.17 },
  variants: {
    label: "Filter Type:",
    options: [
      { name: "Complete Replacement Filter Set" },
      { name: "Reverse Osmosis Membrane Filter (RO or #3)", price: roSingle },
      { name: "Echo RO Spun PP Filter (PP or #1)", price: roSingle },
      { name: "Echo RO Carbon Block Filter (CTO or #2)", price: roSingle },
      { name: "Post Activated Carbon Filter (T33 or #4)", price: roSingle },
    ],
  },
  badges: "basic",
  // The design gave a manufacturer restock date; neutral wording here.
  notice: "RO P1 and Complete Replacement Set are temporarily out of stock. Contact us for the expected restock date.",
  description: [
    {
      type: "p",
      text: "Ensure your water system delivers pure, fresh-tasting water with this complete RO filter set. Designed for optimal performance, these filters remove up to 99% of contaminants, including bacteria and heavy metals.",
    },
  ],
  features: [
    {
      type: "list",
      style: "plain",
      items: [
        "Replacement filters for your Echo RO.",
        "Change out your filters at regular intervals for optimal performance.",
        "Purify your water, getting rid of 99% of contaminants.",
        "Buy all filters together or separately.",
        "Easy to change out.",
      ],
    },
  ],
  specs: [
    { type: "p", text: "Weight: 7.5 lbs" },
    { type: "p", text: "Product Dimensions:" },
    {
      type: "list",
      style: "plain",
      items: ["PP1 filter 14x4x4 in", "CT02 filter 14x4x4 in", "RO03 Filter 14x4x4 in", "T334 filter 8x4x4 in"],
    },
    { type: "p", text: "Shipping Dimensions: 14 x 10 x 10 in" },
  ],
  reviews: [
    {
      name: "Ron R.",
      initials: "RR",
      when: "1 year ago",
      verified: true,
      rating: 5,
      title: "Replacement filters",
      body: "I ordered 3 sets of replacement filters for the 3 RO units previously purchased for our family. They are easily installed and I really appreciated the 10% reduction to offset the international shipping. The product arrived within the week.\n\nThanks",
      helpfulYes: 0,
    },
    {
      name: "Debra L.",
      initials: "DL",
      when: "2 years ago",
      verified: true,
      rating: 5,
      title: "Filters",
      body: "They last a good amount of time and delivered quickly!",
      helpfulYes: 1,
      helpfulNo: 2,
    },
    {
      name: "Patrick M.",
      initials: "PM",
      when: "7 months ago",
      verified: true,
      rating: 4,
      title: "Replacement filters; easy easy!",
      body: "I’ve owned a number of different RO systems before getting the Echo RO. Probably the easiest filter change ever, very little mess. Needed pliers to help turn to release and tighten. But very intuitive and straightforward.",
      helpfulYes: 0,
    },
  ],
  related: ["echo-ro", "echo-ro-flow-faucet", "echo-guard", "echo-machine-replacement-filters"],
};

const machineFilters: AccessoryPageContent = {
  slug: "echo-machine-replacement-filters",
  gallery: [
    img("echo-machine-replacement-filters", "gallery-1.jpg", "Replacement hydrogen water filter cartridge with multilayer filtration diagram"),
  ],
  rating: 5,
  reviewCount: 27,
  price: { oneTime: 125748.27, compareAt: 157188.91, subscribe: 106886.03 },
  variants: {
    label: "Model:",
    options: [{ name: "Echo Ultimate" }, { name: "Echo H2" }, { name: "Echo 9" }, { name: "Echo 9 Ultra" }],
  },
  description: [
    { type: "heading", text: "Echo Replacement Water Filter" },
    { type: "p", text: "Why Filtered Water?" },
    {
      type: "p",
      text: "Living a healthy life includes drinking enough water. But simply drinking water isn’t enough. Have you ever stopped to think about what’s in the water you drink? If you’re trying to live a healthy life, odds are you have a water filter in your home. Whether it’s a part of your refrigerator, attached to your faucet, or a pitcher you keep in your fridge, these filters are only the first step to drinking the clean, quality water your body needs.",
    },
    {
      type: "p",
      text: "Typical filters are often good at removing one thing: chlorine. But that’s not the only contaminant you have floating around in your water. In most places, drinking water also contains fluoride, bacteria, chloramines, and algae. And that doesn’t even mention the soluble metals like mercury and arsenic. While it’s true that some filters help remove more than just the chlorine in your water, knowing exactly which contaminants and how much of those contaminants your filter removes is crucial to getting clean water — and that is something you don’t want to just guess at.",
    },
    { type: "heading", text: "The Filter You Didn’t Know You Needed" },
    {
      type: "p",
      text: "If you want to be 100% certain that your filter is removing the greatest possible amount of contaminants from your water, then you need the Echo Replacement Filter.",
    },
    {
      type: "p",
      text: "These filters contain three different NSF/ANSI 41-certified filter mediums. As a result, these filters can remove a large variety of contaminants from your drinking water, including chlorine, pesticides, bacteria, viruses, and 90% or more of soluble metals.",
    },
    { type: "heading", text: "Filtered Water for Healthier Living" },
    {
      type: "p",
      text: "The Echo Replacement Filters remove a high amount of contaminants from your drinking water, making it easier for you to stay healthy. By thoroughly filtering your water, these filters can reduce your exposure to various toxins that can contribute to a variety of health issues, such as infection, liver and kidney damage, cancer, and more.",
    },
    {
      type: "p",
      text: "It may be hard to believe that a filter can do all of that, but the Echo Replacement Filters have been tested and proven to provide you with truly safe and clean drinking water. Not only that, but these filters are used in some of our best Echo Water® Machines. So, if you’re ready to take your health to the next level and provide your body with the clean water it craves, it’s time to step up your filtration game with the Echo Replacement Filter.",
    },
  ],
  features: [
    {
      type: "list",
      style: "plain",
      items: [
        "Removes contaminants from your water - Contains three NSF/ANSI 41-certified filter mediums that remove chlorine, pesticides, bacteria, viruses, and 90% or more soluble metals from your water.",
        "Use on every Echo Machine - All of our machines have one of these filters pre-installed, but you will have to change it out occasionally.",
        "Easy to replace - In your Echo Machine, you just remove the door on the back of your machine, remove the current filter by pressing down on the top and tilting the filter out, and then replace it with the new one.",
        "Contains three different and highly effective NSF/ANSI 41-certified filter mediums: KDF-55, Biocera tourmaline ceramic balls, and two layers of Kuraray-certified activated carbon from coconut husks.",
      ],
    },
  ],
  specs: [
    {
      type: "list",
      style: "plain",
      items: [
        "Lasts up to 1,000 gallons or 4,000 liters.",
        "Weight: 2 lbs",
        "Product Dimensions: 9 x 3.25 x 3.25",
        "Shipping dimensions: 11 x 7 x 7 in",
      ],
    },
    // The design pointed to the manufacturer's sales email; neutral wording here.
    { type: "p", text: "If you need an Echo 7 filter replacement, contact us." },
  ],
  longForm: [
    { type: "heading", text: "Product Features" },
    {
      type: "p",
      text: "The Echo Replacement Filter is designed to remove a wide variety of contaminants, giving you crisp, clean, and pure hydrogen-enriched water from your Echo Water® Machine.",
    },
    { type: "heading", text: "State-of-the-Art Filtration" },
    { type: "p", text: "The Echo Replacement Filter is a powerful filter that remove toxins and chemicals from your water." },
    { type: "list", items: ["Algae", "Pesticides", "Viruses", "Bacteria", "Chlorine", "Chloramines", "Fungi"] },
    { type: "p", text: "It also removes 90% of soluble metal, including:" },
    { type: "list", items: ["Chromium", "Mercury", "Copper", "Arsenic", "Lead", "Nickel"] },
    { type: "p", text: "Filter Test Results" },
    {
      type: "p",
      text: "Our Echo Water® Machines come with a pre-installed Echo Filter. Each filter has an RFID chip that is connected to the filter display on the machine. When your original filter needs to be replaced, you can replace it with the Echo Replacement Filter.",
    },
    { type: "heading", text: "Effective Filtration Media" },
    {
      type: "p",
      text: "The Echo Replacement Filter is made up of three different and highly effective NSF/ANSI 41-certified filter mediums: KDF-55, Biocera tourmaline ceramic balls, and two layers of Kuraray-certified activated carbon from coconut husks. Each of these filter layers is separated by a fiber filter, giving you a total of nine different layers of filtration. With these different filter levels, the Echo Replacement Filter helps remove contaminants including pesticides, chlorine, bacteria, viruses, algae, and 90% of soluble metals.",
    },
    { type: "heading", text: "Replacing the Filter" },
    {
      type: "p",
      text: "We recommend that you replace your Echo Replacement Filter every six months to ensure optimal efficiency.",
    },
    {
      type: "p",
      text: "Replacing the Echo Replacement Filter is quick and easy to do on your own. Simply remove the door on the back of your machine, remove the current filter by pressing down on the top and tilting the filter out. Then replace it with the new one.",
    },
    {
      type: "p",
      text: "You must use the official Echo filter when replacing any filter within your Echo Water® Machine. Using any other filter will void your warranty.",
    },
    {
      type: "p",
      text: "Whenever you replace your filter, we recommend that you also clean your machine with an Echo Cleaning Cartridge to ensure your machine’s quality and longevity.",
    },
    { type: "heading", text: "Long Filter Life" },
    {
      type: "p",
      text: "Both the Echo Replacement Filter can last for up to 1,000 gallons or 4,000 liters. The lifetime of your filter is based on how much water runs through the filter, and it will depend on your water source and how much water you use on a regular basis.",
    },
  ],
  related: ["echo-ultimate", "echo-h2", "echo-flow", "echo-retro-nhm130-filter"],
};

const h2Faucet: AccessoryPageContent = {
  slug: "echo-h2-faucet",
  gallery: [
    h2FaucetImg(1, "Chrome Echo H2 faucet with curved spout and side handle"),
    h2FaucetImg(2, "Stainless steel Echo H2 faucet with single handle"),
    h2FaucetImg(3, "Echo H2 faucet with curved spout and single lever"),
    h2FaucetImg(4, "Hydrogen water system with faucet and digital control panel"),
    h2FaucetImg(5, "Echo H2 faucet installation diagram"),
  ],
  rating: 5,
  reviewCount: 1,
  price: { oneTime: 114315.31, compareAt: 142897.71 },
  // The "+ Installation Kit" variants weren't priced separately in the design.
  variants: {
    label: "Finish:",
    options: [
      { name: "Chrome" },
      { name: "Chrome + Installation Kit" },
      { name: "Stainless Steel" },
      { name: "Stainless Steel + Installation Kit" },
      { name: "Oil Rubbed Bronze" },
      { name: "Oil Rubbed Bronze + Installation Kit" },
    ],
  },
  badges: "basic",
  description: [
    { type: "p", text: "This faucet is compatible with the Echo H2 Machine and looks gorgeous with your sink." },
    {
      type: "p",
      text: "The Echo H2 Faucet™ is a manual drinking water faucet designed to work with most Echo Water Machines. This faucet has a clean design and comes in a variety of finishes to match your primary faucet. This is a secondary faucet that is mounted into a hole in your countertop. With a simple turn of the handle, the Echo H2 Faucet™ dispenses clean, refreshing water right in the comfort of your home.",
    },
    { type: "lead", label: "Installation kit includes:", text: "(1) Top Spout adapter, (1) water valve." },
    {
      type: "p",
      tone: "alert",
      text: "*A secondary faucet is required anytime you are installing an Echo device under the counter.",
    },
  ],
  features: [
    {
      type: "list",
      style: "plain",
      items: [
        "Keep your counter clear - Designed to enable your Echo H2 Hydrogen Water Machine be installed under the sink, so it doesn’t take up counter space.",
        "Easy to use - Once everything is installed, you just turn on the faucet and you have hydrogen water flowing right into your cup.",
        "Warranty: 5 year warranty",
      ],
    },
  ],
  specs: [
    {
      type: "list",
      style: "plain",
      items: [
        "Finishes: Chrome, stainless, oil-rubbed bronze, white",
        "Filter Life (Echo H2): 1056 gal./ 4000L",
        "Hydrogen Production (Echo H2): Up to 1.59 ppm",
        "Weight: 13.6 oz (6 lb with installation kit)",
        "Product Dimensions: 11-½” H x 6”",
        "Cut Hole: ⅞”",
        "Shipping Dimensions: 17 x 7 x 2 in (16 x 8 x 4 in with installation kit)",
      ],
    },
    { type: "p", text: "H2 Faucet Installation Kit Includes:" },
    {
      type: "list",
      style: "plain",
      items: [
        "Angle stop valve: 3/8\" x 3/8\" x 1/4\"",
        "Top Spout Adapter: Thread to Push Fit 5/8\", Reducer Push Fit 5/8\" to 1/4\"",
      ],
    },
  ],
  textBand: "This faucet is compatible with the Echo H2 Machine and looks gorgeous with your sink.",
  reviews: [
    {
      name: "Cindy L.",
      initials: "CL",
      when: "2 years ago",
      verified: true,
      rating: 5,
      title: "Replacement",
      body: "It is wonderful, my other one for what ever reason broke by the handle but y’all replaced it for me. So happy to be drinking healthy water",
      helpfulYes: 2,
    },
  ],
  related: ["echo-h2", "echo-machine-replacement-filters", "echo-guard", "echo-ro-flow-faucet"],
};

const ultimateFaucet: AccessoryPageContent = {
  slug: "echo-ultimate-digital-faucet",
  gallery: [
    img("echo-ultimate", "gallery-06.png", "Echo Ultimate Digital Faucet with touchscreen, chrome"),
    img("echo-ultimate", "gallery-05.png", "Digital kitchen faucet with touch screen and dual spouts"),
    img("echo-ultimate-digital-faucet", "stainless.jpg", "Digital kitchen faucet with touch screen, stainless steel finish"),
    img("echo-ultimate", "gallery-07.png", "Brushed metal digital faucet with dual spouts"),
  ],
  rating: 5,
  reviewCount: 2,
  price: { oneTime: 857457.71, compareAt: 1071825.71 },
  variants: { label: "Finishes:", options: [{ name: "Chrome" }, { name: "Stainless Steel" }, { name: "Oiled Bronze" }] },
  badges: "basic+warranty-5",
  description: [
    {
      type: "p",
      text: "The Echo Ultimate Digital Faucet allows you to permanently install the Echo Ultimate Machine under the counter but still access all water types from the small touch screen interface on the top of the faucet.",
    },
  ],
  features: [{ type: "p", text: "Warranty: 5 year warranty" }],
  specs: [
    {
      type: "list",
      style: "plain",
      items: [
        "Filter Life (Echo Ultimate): 1,056 gal./ 4000L",
        "Hydrogen Production (Echo Ultimate): Up to 1.65 ppm",
        "Weight: 4 lb 13.6 oz",
      ],
    },
    { type: "p", text: "Product Dimensions:" },
    {
      type: "list",
      style: "plain",
      items: ["9-¾” Height and 1-15/16 Diameter.", "Threaded Base. Cut hole: 1-⅛” Diameter. Length: 3-⅛”"],
    },
    { type: "p", text: "Screen: 1.75” W x 2.25” L. 2.85” Diagonal." },
    { type: "p", text: "Arm/Spout Length" },
    { type: "list", style: "plain", items: ["Main arm: 6”. Spout 5.75”", "Acid arm: 4.5”. Spout 4.25”"] },
    { type: "p", text: "Shipping Dimensions" },
    { type: "p", text: "17 x 12 x 4 in" },
  ],
  textBand: "Two different spouts allow you to separate acid water from drinking water.",
  related: ["echo-ultimate", "echo-machine-replacement-filters", "echo-h2", "echo-flow"],
};

const roFlowFaucet: AccessoryPageContent = {
  slug: "echo-ro-flow-faucet",
  gallery: [
    h2FaucetImg(1, "Chrome RO/Flow faucet with curved spout and side lever"),
    h2FaucetImg(2, "Stainless steel RO/Flow faucet with curved spout"),
    img("echo-ro-flow-faucet", "matte-black.png", "Matte black RO/Flow faucet with single lever handle"),
    h2FaucetImg(3, "RO/Flow faucet with curved spout and side handle"),
    img("echo-ro-flow-faucet", "dimensions.png", "RO/Flow faucet dimensions and included hardware"),
  ],
  rating: 5,
  reviewCount: 2,
  price: { oneTime: 114315.31, compareAt: 142897.71 },
  variants: {
    label: "Finish:",
    options: [{ name: "Chrome" }, { name: "Stainless Steel" }, { name: "Oil Rubbed Bronze" }, { name: "Matte Black" }],
  },
  badges: "basic",
  description: [
    { type: "p", text: "This faucet is compatible with the Echo RO and the Echo H2® Flow." },
    {
      type: "p",
      text: "The Echo RO/Flow Faucet™ is a manual drinking water faucet designed to work with most Echo Water Machines. This faucet has a clean design and comes in a variety of finishes to match your primary faucet. This is a secondary faucet that is mounted into a hole in your countertop. With a simple turn of the handle, the Echo RO/Flow Faucet™ dispenses clean, refreshing water right in the comfort of your home.",
    },
    { type: "p", text: "A secondary faucet is required anytime you are installing an Echo device under the counter." },
  ],
  features: [
    {
      type: "list",
      style: "plain",
      items: [
        "Keep your counter clear - Designed to provide the benefits of both the Echo Flow and the Echo RO, which both need to be installed under the sink.",
        "Easy to use - Once everything is installed, you just turn on the faucet and you have filtered water that may also contain hydrogen (if you get the Echo Flow).",
        "Warranty: 5 year warranty",
      ],
    },
  ],
  specs: [
    {
      type: "list",
      style: "plain",
      items: [
        "Finishes: Chrome, stainless, oil-rubbed bronze, matte black",
        "Product Dimensions: 10.5” H x 5”",
        "Cut hole: 0.5”",
        "Shipping dimensions: 15 x 7 x 2 in",
      ],
    },
  ],
  reviews: [
    {
      name: "Alecia D.",
      initials: "AD",
      when: "9 months ago",
      verified: true,
      rating: 5,
      title: "Echo RO Filter System and Supporting Flow Faucet",
      body: "These products are great! Although it took a little time to prep the area (needed an outlet installed under my sink); the effort was worth it.\n\nRO Filter Unit is affordable and compact. Faucet is streamline and efficient.\n\nThe end product - GREAT TASTING WATER FROM YOUR TAP!\n\nThank ECHO!!",
      helpfulYes: 0,
    },
    {
      name: "Tony P.",
      initials: "TP",
      when: "2 years ago",
      verified: true,
      rating: 5,
      title: "Faucet",
      body: "It looks good and is functional.",
      helpfulYes: 0,
    },
  ],
  related: ["echo-ro", "echo-flow", "echo-ro-filters", "echo-guard"],
};

const guard: AccessoryPageContent = {
  slug: "echo-guard",
  gallery: [
    img("echo-guard", "gallery-1.jpg", "Echo Guard kit parts including leak detector, mat and surge protector"),
    img("echo-guard", "gallery-2.jpg", "Echo Guard leak detector with button"),
    img("echo-guard", "gallery-3.jpg", "Echo Guard leak detector, front"),
    img("echo-guard", "gallery-4.jpg", "Bottom view of the leak detector with battery compartment"),
    img("echo-guard", "gallery-5.jpg", "Echo Guard silicone mat"),
    img("echo-guard", "gallery-6.jpg", "Emergency shut-off valve fittings and accessories"),
    img("echo-guard", "gallery-7.jpg", "Surge protector with outlets and USB ports"),
    img("echo-guard", "gallery-8.jpg", "Electrical plug adapter"),
  ],
  rating: 5,
  reviewCount: 2,
  price: { oneTime: 228644.91, compareAt: 285809.71 },
  variants: {
    label: "Size:",
    options: [{ name: "Ultimate and H2 1/4\" hookup" }, { name: "Reverse Osmosis 3/8\" hookup" }],
  },
  description: [
    {
      type: "p",
      text: "Our advanced leak detection and alarm kit provides: 24/7 monitoring. Early warning alerts. Easy installation.",
    },
    {
      type: "p",
      text: "What is included: Emergency Valve Shutoff. Leak Detector & Alarm. Surge Protector. Silicone Mat.",
    },
    { type: "p", text: "Don't wait until it's too late. Safeguard your home with the Echo Guard today." },
  ],
  features: [
    {
      type: "list",
      style: "plain",
      items: [
        "Find out when there’s a leak before it’s too late!",
        "24/7 monitoring - It never sleeps so that you can rest easy.",
        "Early warning alerts - Lets you know when a leak is about to happen so you can fix the problem early.",
        "Easy installation - Comes with everything you need.",
        "Two options for specialized kits - one for the Echo Ultimate and H2, and one for the Echo RO.",
      ],
    },
  ],
  specs: [
    {
      type: "list",
      style: "plain",
      items: [
        "Emergency Valve Shut Off",
        "Leak Detector & Alarm",
        "Surge Protector",
        "Silicone Mat",
        "Weight: 5 lbs",
        "Product Dimensions: Silicone Mat 33.5 x 22.25 in",
        "Shipping dimensions: 10 x 8 x 4 in",
      ],
    },
  ],
  related: ["echo-ro", "echo-flow", "echo-ro-filters", "echo-ro-flow-faucet"],
};

/** Accessory product pages, keyed by product slug. */
export const accessoryPages: Record<string, AccessoryPageContent> = Object.fromEntries(
  [pitcherCartridge, pitcherHousing, retroFilter, roFilters, machineFilters, h2Faucet, ultimateFaucet, roFlowFaucet, guard].map(
    (page) => [page.slug, page],
  ),
);
