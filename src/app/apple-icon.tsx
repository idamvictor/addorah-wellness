import { appIconPng } from "@/lib/app-icon";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** iOS home-screen icon. Full-bleed: iOS rounds the corners itself. */
export default function AppleIcon() {
  return appIconPng(180, { variant: "store", maskable: true });
}
