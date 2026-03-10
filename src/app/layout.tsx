import type { Metadata } from "next";
import { Barlow_Condensed, Barlow } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

const barlow = Barlow({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SafeSignal — Voertuigsignalisatie & Radiocommunicatie",
  description:
    "SafeSignal levert professionele voertuigsignalisatie en radiocommunicatiesystemen voor interventie- en werkvoertuigen in België. Zwaailichten, lichtbalken, sirenes en installatie op maat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${barlowCondensed.variable} ${barlow.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
