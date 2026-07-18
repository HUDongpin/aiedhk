import { getLocaleMeta, type Locale } from "@/lib/i18n";
import { absoluteUrl, SITE_URL } from "@/lib/site";
import type { ResearchPaper } from "@/lib/types";

const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: "AIEDHK",
    alternateName: "AI in Education Hub of Knowledge",
    url: SITE_URL,
    description: "AI in Education Hub of Knowledge — positioning Hong Kong as an AIED hub for research, product innovation, and learning impact.",
    logo: absoluteUrl("/favicon.svg"),
  };
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "AIEDHK",
    url: SITE_URL,
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export function articleJsonLd(paper: ResearchPaper, locale: Locale) {
  const url = absoluteUrl(`/${locale}/news/${paper.slug}`);
  const isNews = paper.type === "policy-ethics";

  return {
    "@context": "https://schema.org",
    "@type": isNews ? "NewsArticle" : "ScholarlyArticle",
    headline: paper.title,
    description: paper.shortSummary,
    datePublished: paper.createdAt,
    dateModified: paper.createdAt,
    inLanguage: getLocaleMeta(locale).htmlLang,
    image: [absoluteUrl(paper.image)],
    keywords: paper.tags.join(", "),
    author: paper.authors.map((name) => ({ "@type": "Person", name })),
    publisher: { "@id": ORGANIZATION_ID },
    isAccessibleForFree: true,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
