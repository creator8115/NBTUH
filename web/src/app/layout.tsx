import type { Metadata } from "next";
import { Fraunces, Inter_Tight } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nobodytaughtushow.com"),
  title: {
    default: "Nobody Taught Us How",
    template: "%s: Nobody Taught Us How",
  },
  description:
    "A modern educational institution for the responsibilities nobody prepared you for. Take the Business Snapshot and find the right Working Guide for where your business is today.",
  openGraph: {
    title: "Nobody Taught Us How",
    description:
      "A modern educational institution for the responsibilities nobody prepared you for.",
    url: "https://nobodytaughtushow.com",
    siteName: "Nobody Taught Us How",
    images: ["/social/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nobody Taught Us How",
    description:
      "A modern educational institution for the responsibilities nobody prepared you for.",
    images: ["/social/og-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${interTight.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
