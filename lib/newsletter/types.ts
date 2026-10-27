import type { Locale } from "@/lib/i18n";

export type NewsletterChannel = "news" | "academy";

export interface NewsletterEmailImage {
  path: string;
  alt: string;
  width: number;
  height: number;
}

export interface NewsletterEmailItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  contentLocale: Locale;
  coreIdeas?: string[];
  image?: NewsletterEmailImage;
}

export interface RenderedNewsletterEmail {
  subject: string;
  html: string;
  text: string;
}
