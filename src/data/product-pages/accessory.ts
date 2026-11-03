import type { GalleryImage } from "@/data/product-pages/waitlist";
import type { Review } from "@/data/reviews";

export type AccessoryPrice = {
  /** One-time price (what the big price line shows). */
  oneTime: number;
  compareAt?: number;
  /** Present when the product offers Subscribe & Save. */
  subscribe?: number;
};

export type AccessoryVariant = { name: string; price?: AccessoryPrice };

/** Rich text block inside the description or the Product Features panel. */
export type AccessoryBlock =
  | { type: "p"; text: string; tone?: "default" | "bold" | "alert" }
  | { type: "lead"; label: string; text: string }
  | { type: "list"; items: string[]; style?: "bullet" | "plain" }
  | { type: "heading"; text: string };

export type AccessoryPageContent = {
  slug: string;
  gallery: GalleryImage[];
  rating: number;
  reviewCount: number;
  /** Base price; variants may override it. */
  price: AccessoryPrice;
  variants?: { label: string; options: AccessoryVariant[] };
  /** Which trust badges show under Add to Cart. */
  badges?: "basic" | "basic+warranty-5";
  notice?: string;
  description: AccessoryBlock[];
  features?: AccessoryBlock[];
  specs?: AccessoryBlock[];
  /** Optional blocks below the product area. */
  imageBand?: { image: GalleryImage; paragraphs: string[] };
  textBand?: string;
  longForm?: AccessoryBlock[];
  reviews?: Review[];
  related: string[];
};
