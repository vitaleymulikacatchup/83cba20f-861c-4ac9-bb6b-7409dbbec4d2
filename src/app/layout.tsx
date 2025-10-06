import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "MemePulse Memecoin — Fun Landing with Simple Buy Steps",
  description: "MemePulse is a playful memecoin with clear, step-by-step buying guidance, friendly tokenomics, and a community-first vibe. Minted for fun, built for ease.",
  keywords: ["memecoin", "memecoin buying", "cryptocurrency", "tokenomics", "community", "web3", "fun crypto", "meme"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "MemePulse Memecoin — Fun Landing with Simple Buy Steps",
    description: "MemePulse is a playful memecoin with clear, step-by-step buying guidance, friendly tokenomics, and a community-first vibe. Minted for fun, built for ease.",
    type: "website",
    url: "/",
    siteName: "MemePulse",
    images: [{ url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/draw-a-cartoon-desert-landscape-in-16-9--1759756834764-8ff0bbe2.jpg", width: 1200, height: 630, alt: "MemePulse mascot with buy arrows on a vibrant gradient" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "MemePulse Memecoin — Fun Landing with Simple Buy Steps",
    description: "MemePulse is a playful memecoin with clear, step-by-step buying guidance, friendly tokenomics, and a community-first vibe. Minted for fun, built for ease.",
    images: ["https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/draw-a-cartoon-desert-landscape-in-16-9--1759756834764-8ff0bbe2.jpg"]
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}>{children}</body>
    </html>
  );
}