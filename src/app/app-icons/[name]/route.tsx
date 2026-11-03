import { appIconPng, type IconVariant } from "@/lib/app-icon";

const icons: Record<string, { size: number; variant: IconVariant; maskable?: boolean }> = {
  "store-192.png": { size: 192, variant: "store" },
  "store-512.png": { size: 512, variant: "store" },
  "store-maskable-512.png": { size: 512, variant: "store", maskable: true },
  "admin-192.png": { size: 192, variant: "admin" },
  "admin-512.png": { size: 512, variant: "admin" },
  "admin-maskable-512.png": { size: 512, variant: "admin", maskable: true },
};

export function generateStaticParams() {
  return Object.keys(icons).map((name) => ({ name }));
}

/** PNG app icons for the web app manifests (generated at build time). */
export async function GET(_request: Request, { params }: RouteContext<"/app-icons/[name]">) {
  const { name } = await params;
  const icon = icons[name];
  if (!icon) return new Response("Not found", { status: 404 });
  return appIconPng(icon.size, icon);
}
