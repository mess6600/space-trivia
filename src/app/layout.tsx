import type { Metadata } from "next";
import { Orbitron, Barlow_Condensed, Chakra_Petch } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-ui",
  display: "swap",
});

const chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Space Trivia | WW Kiosk",
  description:
    "Touch-friendly space trivia with four categories of 50 questions each — Early Manned Spaceflights, Modern Spaceflight, To The Moon, and Our Solar System And Beyond.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${barlow.variable} ${chakra.variable}`}>
        {children}
      </body>
    </html>
  );
}
