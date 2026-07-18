import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { aboutOrganizationJsonLd, articleJsonLd, breadcrumbJsonLd, organizationJsonLd, personJsonLd, webSiteJsonLd } from "@/lib/structured-data";
import { getResearchPapers } from "@/lib/research-data";

test("organization and website JSON-LD expose canonical identity", () => {
  const org = organizationJsonLd() as Record<string, string>;
  assert.equal(org["@type"], "Organization");
  assert.match(String(org.url), /^https:\/\//);
  assert.match(String(org.logo), /^https:\/\//);

  const site = webSiteJsonLd() as Record<string, unknown>;
  assert.equal(site["@type"], "WebSite");
});

test("article JSON-LD reflects paper type, language, and absolute assets", () => {
  const papers = getResearchPapers("en");

  const newsPaper = papers.find((paper) => paper.type === "policy-ethics");
  const scholarly = papers.find((paper) => paper.type !== "policy-ethics");
  assert.ok(newsPaper && scholarly);

  const news = articleJsonLd(newsPaper, "en") as Record<string, unknown>;
  assert.equal(news["@type"], "NewsArticle");
  assert.equal(news.headline, newsPaper.title);
  assert.equal(news.inLanguage, "en-HK");
  assert.ok(Array.isArray(news.image) && /^https:\/\//.test((news.image as string[])[0]));
  assert.ok(Array.isArray(news.author) && (news.author as unknown[]).length === newsPaper.authors.length);

  const scholarLd = articleJsonLd(scholarly, "zh-hant") as Record<string, unknown>;
  assert.equal(scholarLd["@type"], "ScholarlyArticle");
  assert.equal(scholarLd.inLanguage, "zh-Hant-HK");
  assert.match(String(scholarLd.url), /\/zh-hant\/news\//);
});

test("about person and organization JSON-LD carry name and url", () => {
  const person = personJsonLd({ name: "Dr. Peter Hu Dongpin", url: "https://www.hudongpin.com", jobTitle: "Principal", description: "Bio." }) as Record<string, string>;
  assert.equal(person["@type"], "Person");
  assert.equal(person.name, "Dr. Peter Hu Dongpin");
  assert.equal(person.url, "https://www.hudongpin.com");

  const org = aboutOrganizationJsonLd({ name: "PedaNova", url: "https://www.pedanova.tech" }) as Record<string, string>;
  assert.equal(org["@type"], "Organization");
  assert.equal(org.name, "PedaNova");
});

test("the about page emits structured data built from existing verified entities", () => {
  const pageSource = readFileSync(join(process.cwd(), "app/[locale]/about/page.tsx"), "utf8");
  assert.match(pageSource, /<JsonLd data=\{structuredData\}/);
  assert.match(pageSource, /personJsonLd/);
  assert.match(pageSource, /aboutOrganizationJsonLd/);
});

test("breadcrumb JSON-LD numbers positions from one", () => {
  const crumb = breadcrumbJsonLd([
    { name: "AIEDHK", url: "https://www.aied.hk/en" },
    { name: "News", url: "https://www.aied.hk/en/news" },
  ]) as { itemListElement: Array<{ position: number; name: string }> };

  assert.equal(crumb.itemListElement[0].position, 1);
  assert.equal(crumb.itemListElement[1].position, 2);
  assert.equal(crumb.itemListElement[1].name, "News");
});
