import { appIconPng } from "@/lib/app-icon";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** iOS home-screen icon for the admin app. */
export default function AdminAppleIcon() {
  return appIconPng(180, { variant: "admin", maskable: true });
}
