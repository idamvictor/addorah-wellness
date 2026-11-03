export type CategorySlug =
  | "hydrogen-water"
  | "water-filtration"
  | "whole-house-water-filters"
  | "under-sink-kitchen"
  | "wellness"
  | "accessories"
  | "replacement-filters";

export type Category = {
  slug: CategorySlug;
  name: string;
};

/** Order matches the Shop dropdown in the header. */
export const categories: Category[] = [
  { slug: "hydrogen-water", name: "Hydrogen Water" },
  { slug: "water-filtration", name: "Water Filtration" },
  { slug: "whole-house-water-filters", name: "Whole House Water Filters" },
  { slug: "under-sink-kitchen", name: "Under Sink & Kitchen" },
  { slug: "wellness", name: "Wellness" },
  { slug: "accessories", name: "Accessories" },
  { slug: "replacement-filters", name: "Replacement Filters" },
];

/** Chips shown above the shop grid (subset of `categories`). */
export const shopFilterCategories: CategorySlug[] = [
  "hydrogen-water",
  "water-filtration",
  "accessories",
];

export function getCategory(slug: string | null | undefined) {
  return categories.find((category) => category.slug === slug);
}
