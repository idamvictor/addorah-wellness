import type { Metadata } from "next";
import { Bebas_Neue, Geist_Mono, Golos_Text } from "next/font/google";
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
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${golos.variable} ${bebas.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-ink">
        <AppStoreProvider>{children}</AppStoreProvider>
      </body>
    </html>
  );
}
