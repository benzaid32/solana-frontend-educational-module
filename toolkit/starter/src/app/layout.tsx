import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["300", "400", "500"],
});

const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Solana Frontend Starter — Superteam Ukraine",
  description:
    "Plug-and-play Solana frontend starter kit for the Colosseum hackathon. Built in Kyiv with Ukrainian craft and Solana speed.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="min-h-screen bg-paper text-ink antialiased">
        <Providers>
          <SiteHeader />
          <main className="mx-auto w-full max-w-editorial px-6 pb-24 pt-10 sm:px-10">
            {children}
          </main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
