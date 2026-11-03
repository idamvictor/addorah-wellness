import { ImageResponse } from "next/og";

export type IconVariant = "store" | "admin";

/** Diagonal cut of the site's `bg-brand-gradient` (globals.css). */
const BRAND_STOPS = [
  ["0%", "#c4a6b5"],
  ["32%", "#7c6992"],
  ["64%", "#395382"],
  ["100%", "#00a7b5"],
] as const;

const INK = "#231f20";
const TEAL = "#00a7b5";

/**
 * The Addorah "A" monogram as SVG (100×100 viewBox).
 * - store: white "A" on the brand gradient
 * - admin: brand-gradient "A" on ink, with a teal dot so it reads differently on a home screen
 * Maskable icons are full-bleed squares with the mark inside the 80% safe zone.
 */
export function appIconSvg({ variant = "store", maskable = false }: { variant?: IconVariant; maskable?: boolean } = {}) {
  const radius = maskable ? 0 : 22;
  // Scale the mark down for maskable icons so launchers can crop to a circle.
  const scale = maskable ? 0.78 : 1;
  const offset = (100 - 100 * scale) / 2;
  const stops = BRAND_STOPS.map(([at, color]) => `<stop offset="${at}" stop-color="${color}"/>`).join("");
  const background = variant === "store" ? "url(#brand)" : INK;
  const stroke = variant === "store" ? "#ffffff" : "url(#brand)";

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
<defs><linearGradient id="brand" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100" y2="100">${stops}</linearGradient></defs>
<rect width="100" height="100" rx="${radius}" fill="${background}"/>
<g transform="translate(${offset} ${offset}) scale(${scale})" fill="none" stroke="${stroke}" stroke-linecap="round" stroke-linejoin="round">
<path d="M29 77 L50 23 L71 77" stroke-width="10"/>
<path d="M37.5 58 H62.5" stroke-width="8"/>
</g>${variant === "admin" ? `<circle cx="${maskable ? 70 : 76}" cy="${maskable ? 30 : 24}" r="${maskable ? 6 : 8}" fill="${TEAL}"/>` : ""}
</svg>`;
}

/** PNG of the icon at `size` px, for the manifest and Apple touch icons. */
export function appIconPng(size: number, options?: { variant?: IconVariant; maskable?: boolean }) {
  const src = `data:image/svg+xml;base64,${Buffer.from(appIconSvg(options)).toString("base64")}`;
  return new ImageResponse(
    (
      // eslint-disable-next-line @next/next/no-img-element -- rendered by next/og, not the browser
      <img src={src} width={size} height={size} alt="" />
    ),
    { width: size, height: size },
  );
}
