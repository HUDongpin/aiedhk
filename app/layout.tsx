import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import BackToTopArrow from "@/components/BackToTopArrow";
import "./globals.css";

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
