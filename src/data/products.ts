import type { CategorySlug } from "@/data/categories";

export type ProductBadge = "best-seller" | "fsa-hsa" | "join-waitlist" | "waitlist" | "sold-out";

export type ProductStatus = "available" | "waitlist" | "sold-out";

export type Product = {
  slug: string;
  name: string;
  /** Short name used in nav and cart, e.g. "ECHO Flask". */
  shortName: string;
  tagline?: string;
  image: string;
  /** Current price in NGN. Omitted for waitlist products. */
  price?: number;
  /** Original price shown struck through. */
  compareAtPrice?: number;
  /** Prefix the price with "From" (product has variants). */
  priceFrom?: boolean;
  badges: ProductBadge[];
  categories: CategorySlug[];
  status: ProductStatus;
  /** Only products with a designed detail page link anywhere. */
  hasDetailPage: boolean;
  reviewCount?: number;
  /** Alternate photo used by the home page product carousel. */
  carouselImage?: string;
  /** Body copy for products without a designed page (generic detail page). */
  description?: string;
  /** Admin override of a designed accessory page's base price. */
  pagePrice?: PriceSet;
  /** Admin overrides keyed by variant / pack name. */
  variantPrices?: Record<string, PriceSet>;
};

export type PriceSet = {
  price: number;
  compareAt?: number;
  /** Subscribe & Save price, where the page offers it. */
  subscribe?: number;
};

export const productBadges: { value: ProductBadge; label: string }[] = [
  { value: "best-seller", label: "Best seller" },
  { value: "fsa-hsa", label: "FSA/HSA eligible" },
  { value: "join-waitlist", label: "Join waitlist" },
  { value: "waitlist", label: "Waitlist" },
  { value: "sold-out", label: "Sold out" },
];

export const productStatuses: { value: ProductStatus; label: string }[] = [
  { value: "available", label: "Available" },
  { value: "waitlist", label: "Waitlist" },
  { value: "sold-out", label: "Sold out" },
];

/**
 * Initial catalog. The live catalog is `data/catalog.json` (managed in /admin),
 * created from this list the first time it is read. Order matches the Figma shop grid.
 */
export const seedProducts: Product[] = [
  {
    slug: "echo-flask",
    name: "ECHO Flask Hydrogen Water Bottle",
    shortName: "ECHO Flask",
    tagline: "On-the-go hydrogen infusion.",
    image: "/images/shop/echo-flask.png",
    price: 342974.51,
    compareAtPrice: 428721.71,
    badges: ["best-seller", "fsa-hsa"],
    categories: ["hydrogen-water"],
    status: "available",
    hasDetailPage: true,
    reviewCount: 543,
    carouselImage: "/images/home/carousel-echo-flask.png",
  },
  {
    slug: "echo-forty",
    name: "ECHO Forty",
    shortName: "ECHO Forty",
    tagline: "The 40oz Hydrogen Water Tumbler",
    image: "/images/shop/echo-forty.jpg",
    // Pre-order pricing shown on the home carousel; the shop grid shows "Join waitlist".
    price: 457304.11,
    compareAtPrice: 571633.71,
    badges: ["join-waitlist", "waitlist"],
    categories: ["hydrogen-water"],
    status: "waitlist",
    hasDetailPage: true,
    reviewCount: 0,
    carouselImage: "/images/home/carousel-echo-forty.jpg",
  },
  {
    slug: "echo-one",
    name: "ECHO One",
    shortName: "ECHO One",
    tagline: "The Ultra Pure Hydrogen Water System",
    image: "/images/shop/echo-one.jpg",
    price: 4001521.71,
    compareAtPrice: 5001905.71,
    badges: ["join-waitlist", "waitlist"],
    categories: ["hydrogen-water", "water-filtration", "under-sink-kitchen"],
    status: "waitlist",
    hasDetailPage: true,
    reviewCount: 0,
    carouselImage: "/images/home/carousel-echo-one.jpg",
  },
  {
    slug: "hydrogen-prebiotic",
    name: "Hydrogen Prebiotic Drink Mix (30-pack)",
    shortName: "Hydrogen Prebiotic",
    image: "/images/shop/hydrogen-prebiotic.jpg",
    price: 54863.92,
    compareAtPrice: 85732.91,
    priceFrom: true,
    badges: ["sold-out", "fsa-hsa"],
    categories: ["wellness"],
    status: "sold-out",
    hasDetailPage: true,
    reviewCount: 90,
  },
  {
    slug: "echo-ro",
    name: "ECHO RO™ Tankless Reverse Osmosis Water Filter Machine",
    shortName: "ECHO RO™",
    image: "/images/shop/echo-ro.png",
    price: 800292.91,
    compareAtPrice: 1000369.71,
    priceFrom: true,
    badges: ["fsa-hsa"],
    categories: ["water-filtration", "under-sink-kitchen"],
    status: "available",
    hasDetailPage: true,
    reviewCount: 10,
    carouselImage: "/images/home/carousel-echo-ro.png",
  },
  {
    slug: "echo-flow",
    name: "ECHO Flow® Hydrogen Water Machine",
    shortName: "ECHO Flow®",
    image: "/images/shop/echo-flow.jpg",
    price: 2858225.71,
    compareAtPrice: 3572785.71,
    priceFrom: true,
    badges: ["fsa-hsa"],
    categories: ["hydrogen-water", "water-filtration", "under-sink-kitchen"],
    status: "available",
    hasDetailPage: true,
    reviewCount: 8,
    carouselImage: "/images/home/carousel-echo-flow.jpg",
  },
  {
    slug: "echo-ultimate",
    name: "ECHO Ultimate™ Hydrogen Water Machine",
    shortName: "ECHO Ultimate™",
    image: "/images/shop/echo-ultimate.png",
    price: 5716465.71,
    compareAtPrice: 7145585.71,
    priceFrom: true,
    badges: ["fsa-hsa"],
    categories: ["hydrogen-water", "under-sink-kitchen"],
    status: "available",
    hasDetailPage: true,
    reviewCount: 8,
    carouselImage: "/images/home/carousel-echo-ultimate.png",
  },
  {
    slug: "echo-h2",
    name: "ECHO H2® Hydrogen Water Machine",
    shortName: "ECHO H2®",
    image: "/images/shop/echo-h2.png",
    price: 3429873.71,
    compareAtPrice: 4287345.71,
    priceFrom: true,
    badges: ["fsa-hsa"],
    categories: ["hydrogen-water", "under-sink-kitchen"],
    status: "available",
    hasDetailPage: true,
    reviewCount: 6,
    carouselImage: "/images/home/carousel-echo-h2.png",
  },
  {
    slug: "echo-revive",
    name: "ECHO Revive Hydrogen Bath Water Machine",
    shortName: "ECHO Revive",
    image: "/images/shop/echo-revive.jpg",
    price: 6859761.71,
    compareAtPrice: 10718385.71,
    badges: ["fsa-hsa"],
    categories: ["hydrogen-water", "wellness"],
    status: "available",
    hasDetailPage: true,
    reviewCount: 1,
    carouselImage: "/images/home/carousel-echo-revive.jpg",
  },
  {
    slug: "echo-refresh",
    name: "ECHO Refresh Hydrogen Inhalation Machine",
    shortName: "ECHO Refresh",
    image: "/images/shop/echo-refresh.png",
    price: 6859761.71,
    compareAtPrice: 10718385.71,
    badges: [],
    categories: ["wellness"],
    status: "available",
    hasDetailPage: true,
    reviewCount: 2,
    carouselImage: "/images/home/carousel-echo-refresh.png",
  },
  {
    slug: "echo-guard",
    name: "Echo Guard Under Sink Leak Detection and Alarm Kit",
    shortName: "Echo Guard",
    image: "/images/shop/echo-guard.jpg",
    price: 228644.91,
    compareAtPrice: 285809.71,
    badges: [],
    categories: ["accessories", "under-sink-kitchen"],
    status: "available",
    hasDetailPage: true,
  },
  {
    slug: "echo-ro-flow-faucet",
    name: "Echo RO/Flow Faucet",
    shortName: "Echo RO/Flow Faucet",
    image: "/images/shop/echo-ro-flow-faucet.png",
    price: 114315.31,
    compareAtPrice: 142897.71,
    badges: [],
    categories: ["accessories", "under-sink-kitchen"],
    status: "available",
    hasDetailPage: true,
  },
  {
    slug: "echo-ultimate-digital-faucet",
    name: "Echo Ultimate Digital Faucet",
    shortName: "Echo Ultimate Digital Faucet",
    image: "/images/shop/echo-ultimate-digital-faucet.png",
    price: 857457.71,
    compareAtPrice: 1071825.71,
    badges: [],
    categories: ["accessories", "under-sink-kitchen"],
    status: "available",
    hasDetailPage: true,
  },
  {
    slug: "echo-h2-faucet",
    name: "Echo H2 Faucet",
    shortName: "Echo H2 Faucet",
    // The design reuses the RO/Flow faucet photo for this card.
    image: "/images/shop/echo-ro-flow-faucet.png",
    price: 114315.31,
    compareAtPrice: 142897.71,
    priceFrom: true,
    badges: [],
    categories: ["accessories", "under-sink-kitchen"],
    status: "available",
    hasDetailPage: true,
  },
  {
    slug: "echo-machine-replacement-filters",
    name: "Echo Machine Replacement Filters",
    shortName: "Machine Replacement Filters",
    image: "/images/shop/echo-machine-replacement-filters.jpg",
    price: 106886.03,
    compareAtPrice: 157188.91,
    priceFrom: true,
    badges: [],
    categories: ["replacement-filters", "water-filtration"],
    status: "available",
    hasDetailPage: true,
  },
  {
    slug: "echo-ro-filters",
    name: "Echo RO Filters",
    shortName: "Echo RO Filters",
    image: "/images/shop/echo-ro-filters.jpg",
    price: 38859.92,
    compareAtPrice: 57150.51,
    priceFrom: true,
    badges: [],
    categories: ["replacement-filters", "water-filtration"],
    status: "available",
    hasDetailPage: true,
  },
  {
    slug: "echo-retro-nhm130-filter",
    name: "Echo Retro/NHM130 Carbon Block Filter",
    shortName: "Retro/NHM130 Filter",
    image: "/images/shop/echo-retro-nhm130-filter.png",
    price: 78887.42,
    compareAtPrice: 98609.28,
    badges: [],
    categories: ["replacement-filters", "water-filtration"],
    status: "available",
    hasDetailPage: true,
  },
  {
    slug: "echo-pitcher-filter-housing",
    name: "Echo Pitcher Filter Housing and Cartridge",
    shortName: "Pitcher Filter Housing",
    image: "/images/shop/echo-pitcher-filter-housing.jpg",
    price: 80016.43,
    compareAtPrice: 100024.11,
    badges: [],
    categories: ["accessories", "water-filtration"],
    status: "available",
    hasDetailPage: true,
  },
  {
    slug: "echo-pitcher-replacement-cartridge",
    name: "Echo Pitcher Replacement Cartridge",
    shortName: "Pitcher Replacement Cartridge",
    image: "/images/shop/echo-pitcher-replacement-cartridge.jpg",
    price: 38859.92,
    compareAtPrice: 57150.51,
    priceFrom: true,
    badges: [],
    categories: ["replacement-filters", "water-filtration"],
    status: "available",
    hasDetailPage: true,
  },
];

export function productHref(product: Product) {
  return product.hasDetailPage ? `/products/${product.slug}` : undefined;
}
