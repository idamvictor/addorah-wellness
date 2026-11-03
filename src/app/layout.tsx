import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Geist_Mono, Golos_Text } from "next/font/google";
import { ServiceWorkerRegister } from "@/components/pwa/service-worker-register";
import { AppStoreProvider } from "@/providers/app-store-provider";
import "./globals.css";

const golos = Golos_Text({
  variable: "--font-golos",
  subsets: ["latin"],
});

// Closest Google match for the design's caps-only display face (FG Display).
const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Addorah Wellness",
    template: "%s | Addorah Wellness",
  },
  description:
    "Hydrogen water bottles, machines and filtration systems from Addorah Wellness.",
  applicationName: "Addorah Wellness",
  // Installed app (PWA); the manifest comes from app/manifest.ts.
  appleWebApp: { capable: true, title: "Addorah", statusBarStyle: "default" },
};

export const viewport: Viewport = {
  themeColor: "#231f20",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${golos.variable} ${bebas.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-ink">
        <AppStoreProvider>{children}</AppStoreProvider>
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
