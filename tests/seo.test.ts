import assert from "node:assert/strict";
import test from "node:test";
import robots from "@/app/robots";
import { buildSitemapEntries } from "@/app/sitemap";
import { locales } from "@/lib/i18n";
import { getResearchPapers } from "@/lib/research-data";

test("robots.txt exposes the sitemap and blocks admin and api", () => {
  const result = robots();

  assert.match(String(result.sitemap), /^https:\/\/.+\/sitemap\.xml$/);
  const rules = Array.isArray(result.rules) ? result.rules : [result.rules];
  const disallowed = rules.flatMap((rule) => (Array.isArray(rule.disallow) ? rule.disallow : rule.disallow ? [rule.disallow] : []));
  assert.ok(disallowed.some((path) => path.startsWith("/admin")), "admin should be disallowed");
  assert.ok(disallowed.some((path) => path.startsWith("/api")), "api should be disallowed");
});

test("sitemap lists every locale home and published article slugs with absolute https URLs", () => {
  const papers = getResearchPapers("en");
  const entries = buildSitemapEntries(papers.map((paper) => ({ slug: paper.slug, createdAt: paper.createdAt })));

  assert.ok(entries.length > 0, "sitemap should not be empty");
  assert.ok(entries.every((entry) => /^https:\/\//.test(entry.url)), "all sitemap URLs should be absolute https");

  for (const locale of locales) {
    assert.ok(
      entries.some((entry) => entry.url.endsWith(`/${locale}`)),
      `sitemap should include the ${locale} home page`
    );
    assert.ok(
      entries.some((entry) => entry.url.endsWith(`/${locale}/news`)),
      `sitemap should include the ${locale} news index`
    );
  }

  const knownSlug = "news-openai-interactive-learning-anthropic-claude-reflection";
  assert.ok(
    entries.some((entry) => entry.url.endsWith(`/en/news/${knownSlug}`)),
    "sitemap should include a known English article detail URL"
  );
  assert.ok(
    entries.some((entry) => entry.url.endsWith(`/zh-hant/news/${knownSlug}`)),
    "sitemap should localize article detail URLs across locales"
  );
});
