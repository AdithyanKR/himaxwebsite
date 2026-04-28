import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Hi Max Landscape — Luxury Garden & Exterior Design",
  description: "Transforming desert landscapes into lush green sanctuaries.",
  icons: {
    icon: "/hi max logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${cormorant.variable} ${inter.variable} font-sans antialiased bg-[#0a0a0a] text-[#ededed]`}>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
