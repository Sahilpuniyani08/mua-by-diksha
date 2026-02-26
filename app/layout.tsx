import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Diksha Beauty | Professional Nail Art & Makeup Artist",
  description: "Premium nail art and makeup services. Enhancing beauty with precision and elegance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} antialiased font-body bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
