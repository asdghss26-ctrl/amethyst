import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-dm-serif",
});

export const metadata: Metadata = {
  title: "Amethyst - Advanced Dermatology & Aesthetics",
  description:
    "Advanced dermatology and aesthetic treatments for clear, healthy skin. Book a consultation with Amethyst's board-certified skin specialists today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable}`}>
      <body className="antialiased bg-[#F8F3EF] text-[#42291B]">{children}</body>
    </html>
  );
}
