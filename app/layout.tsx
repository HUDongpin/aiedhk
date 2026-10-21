import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import BackToTopArrow from "@/components/BackToTopArrow";
import "./globals.css";
import { getMonetizationConfig } from "@/lib/monetization";

const publisherId = getMonetizationConfig().publisherId;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aied.hk"),
  title: {
    default: "AIEDHK — AI in Education Hub of Knowledge",
    template: "%s | AIEDHK",
  },
  description:
    "AIEDHK is a research and development information platform for AI in Education, positioning Hong Kong as an AIED hub.",
  icons: {
    icon: "/favicon.svg",
  },
  ...(publisherId ? { other: { "google-adsense-account": publisherId } } : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <BackToTopArrow />
        <Analytics />
      </body>
    </html>
  );
}
