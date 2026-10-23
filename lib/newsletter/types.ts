import type { Locale } from "@/lib/i18n";

export type NewsletterChannel = "news" | "academy";

export interface NewsletterEmailItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  contentLocale: Locale;
  coreIdeas?: string[];
}

export interface RenderedNewsletterEmail {
  subject: string;
  html: string;
  text: string;
}
