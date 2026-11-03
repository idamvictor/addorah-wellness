import type { Faq } from "@/data/faqs";
import type { GalleryImage } from "@/data/product-pages/waitlist";
import type { ReviewSummary } from "@/data/reviews";

export type ImageRef = { src: string; alt: string };

export type Variant = {
  name: string;
  /** CSS background for the round swatch (gradient or colour). */
  swatch?: string;
};

export type MachineBuyBox = {
  intro: string;
  variants?: {
    label: string;
    hint?: string;
    options: Variant[];
    note?: string;
  };
  addOn?: { slug: string; title: string; body: string; image: string };
  warranty: { title: string; body: string };
  /** Shown as "In Stock — {stockNote}"; omitted when the design has no stock line. */
  stockNote?: string;
  /** Line under Add to cart, e.g. "ECHO Flow · unit only". */
  unitNote?: string;
  expertLink?: string;
  /** 2×2 grid of water modes (icon, name, use) shown above the stats. */
  modes?: { icon: string; title: string; label: string }[];
  stats: { value: string; label: string }[];
  /** One quote renders static; several render as a small carousel. */
  quotes: { text: string; by: string }[];
};

type Kicker = { kicker?: string; kickerTone?: "line" | "teal" | "mist" };

export type MachineSection =
  | { kind: "certs"; logos: ImageRef[] }
  | ({
      kind: "intro";
      heading: string;
      body: string;
      cards: { title: string; body: string }[];
      /** Two-column intro with a video slot beside the copy. */
      media?: "video";
    } & Kicker)
  | ({
      kind: "split";
      theme: "white" | "mist" | "dark";
      heading: string;
      body?: string;
      items?: { title: string; body: string }[];
      /** Label/value rows (e.g. installation facts) instead of titled items. */
      rows?: { label: string; value: string }[];
      /** Two-column check list used instead of titled items. */
      bullets?: string[];
      footnote?: string;
      numbered?: boolean;
      image: ImageRef & { fit?: "cover" | "contain"; aspect?: string };
      imageSide: "left" | "right";
    } & Kicker)
  | ({
      kind: "checklist";
      heading: string;
      body: string;
      links?: string[];
      items: { title: string; body?: string }[];
    } & Kicker)
  | ({
      kind: "options";
      heading: string;
      body: string;
      options: { label: string; title: string; body: string; image: ImageRef; rows: { label: string; value: string }[] }[];
    } & Kicker)
  | ({
      kind: "upsell";
      heading: string;
      body: string;
      slug: string;
      ctaLabel: string;
      image: ImageRef;
      tableTitle: string;
      rows: { label: string; value: string }[];
      note?: string;
    } & Kicker)
  | ({
      kind: "stages";
      heading: string;
      body: string;
      stages: { label: string; life: string; title: string; body: string }[];
      image?: ImageRef;
    } & Kicker)
  | ({ kind: "science"; heading: string; body: string; linkLabel?: string; items: { topic: string; title: string }[] } & Kicker)
  | { kind: "quote"; text: string; by: string; meta?: string[] }
  | {
      kind: "specs";
      heading: string;
      rows: { label: string; value: string }[];
      links?: string[];
      note?: string;
      image: ImageRef & { fit?: "cover" | "contain" };
    }
  /** Copy beside a video thumbnail (the video itself isn't supplied yet). */
  | { kind: "video"; heading: string; body: string; byline?: string; thumbnail: ImageRef }
  | { kind: "faq"; heading: string; items: Faq[] }
  /** Dark CTA; with `card`, a compact buy card (price, variants, add to cart) sits beside it. */
  | { kind: "specialist"; heading: string; body?: string; card?: { blurb?: string } }
  | { kind: "reviews"; data: ReviewSummary }
  /** One-off section rendered by a product-specific component (see product-specific.tsx). */
  | { kind: "custom"; id: CustomSectionId };

export type CustomSectionId =
  | "ultimate-four-machines"
  | "ultimate-waters"
  | "ultimate-install"
  | "revive-seen-in"
  | "revive-why-bathe";

export type MachinePageContent = {
  slug: string;
  gallery: GalleryImage[];
  buyBox: MachineBuyBox;
  sections: MachineSection[];
};
