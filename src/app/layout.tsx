import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { IM_Fell_English } from "next/font/google";
import "./assets/main.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const imFellEnglish = IM_Fell_English({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-im-fell-english",
});

export const metadata: Metadata = {
  title: "World of Warcraft Players",
  description: "Search for World of Warcraft players",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${imFellEnglish.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
