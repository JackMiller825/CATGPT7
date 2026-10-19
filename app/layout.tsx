import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import { assets } from "@/lib/assets";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap"
});

const serif = Fraunces({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-serif",
  display: "swap"
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap"
});

const title = "CatGPT 7.0 ($CATGPT7) — Ethereum's Next-Generation Cat";
const description =
  "CatGPT 7.0 is an independent Ethereum memecoin. Too smart to decide. Too cat to care. The contract is not deployed yet.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  icons: { icon: assets.icon, apple: assets.icon },
  openGraph: {
    title,
    description,
    type: "website",
    images: [{ url: assets.banner, alt: "CatGPT 7.0 black cat mascot on cardboard boxes" }]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [assets.banner]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
