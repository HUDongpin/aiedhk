import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";
import { pathToFileURL } from "node:url";

function exists(path: string) {
  return existsSync(join(process.cwd(), path));
}

function source(path: string) {
  return readFileSync(join(process.cwd(), path), "utf8");
}

interface RedirectRule {
  source: string;
  destination: string;
  permanent: boolean;
}

async function redirects() {
  const configUrl = pathToFileURL(join(process.cwd(), "next.config.mjs")).href;
  const configModule = (await import(configUrl)) as { default: { redirects: () => Promise<RedirectRule[]> } };
  return configModule.default.redirects();
}

test("public News pages use the /[locale]/news route", () => {
  assert.ok(exists("app/[locale]/news/page.tsx"), "News index route should exist at /[locale]/news");
  assert.ok(exists("app/[locale]/news/[slug]/page.tsx"), "News detail route should exist at /[locale]/news/[slug]");
  assert.equal(exists("app/[locale]/research-news/page.tsx"), false, "legacy Research News index route should not remain canonical");
  assert.equal(exists("app/[locale]/research-news/[slug]/page.tsx"), false, "legacy Research News detail route should not remain canonical");
});

test("public News links use /[locale]/news", () => {
  const publicLinkFiles = [
    "app/[locale]/page.tsx",
    "app/[locale]/news/page.tsx",
    "app/[locale]/news/[slug]/page.tsx",
    "app/api/cron/research-newsletter/route.ts",
    "components/Footer.tsx",
    "components/Header.tsx",
    "components/ResearchCard.tsx",
    "components/ResearchFilters.tsx",
    "components/ResearchNewsExplorerView.tsx",
    "lib/newsletter.ts",
    "docs/superpowers/plans/2026-07-10-gpt-5-6-codex-research-news.md",
  ];

  for (const path of publicLinkFiles) {
    const fileSource = source(path);
    assert.doesNotMatch(fileSource, /\/research-news(?=\/|\?|["'`}])/, `${path} should not reference the legacy public route`);
    assert.match(fileSource, /\/news/, `${path} should reference the canonical News route`);
  }

  const adminSource = source("app/admin/research-news/page.tsx");
  assert.doesNotMatch(adminSource, /\/en\/research-news/, "admin preview links should not use the legacy public route");
  assert.match(adminSource, /\/en\/news/, "admin preview links should use the canonical News route");

  const readmeSource = source("README.md");
  assert.doesNotMatch(readmeSource, /\/en\/research-news/, "README public examples should not use the legacy route");
  assert.match(readmeSource, /\/en\/news/, "README should document the canonical News route");
});

test("legacy public Research News URLs redirect to the canonical News route", async () => {
  const rules = await redirects();
  const findRule = (sourcePath: string) => rules.find((rule) => rule.source === sourcePath);

  assert.deepEqual(findRule("/news"), {
    source: "/news",
    destination: "/en/news",
    permanent: false,
  });
  assert.deepEqual(findRule("/news/:slug*"), {
    source: "/news/:slug*",
    destination: "/en/news/:slug*",
    permanent: false,
  });
  assert.deepEqual(findRule("/research-news"), {
    source: "/research-news",
    destination: "/en/news",
    permanent: true,
  });
  assert.deepEqual(findRule("/research-news/:slug*"), {
    source: "/research-news/:slug*",
    destination: "/en/news/:slug*",
    permanent: true,
  });

  const localizedIndex = rules.find((rule) => rule.source.startsWith("/:locale(") && rule.source.endsWith("/research-news"));
  const localizedDetail = rules.find((rule) => rule.source.startsWith("/:locale(") && rule.source.endsWith("/research-news/:slug*"));
  assert.deepEqual(
    localizedIndex && { destination: localizedIndex.destination, permanent: localizedIndex.permanent },
    { destination: "/:locale/news", permanent: true }
  );
  assert.deepEqual(
    localizedDetail && { destination: localizedDetail.destination, permanent: localizedDetail.permanent },
    { destination: "/:locale/news/:slug*", permanent: true }
  );

  assert.equal(rules.some((rule) => rule.destination.includes("research-news")), false, "redirect destinations should use the canonical News route");
  assert.equal(
    rules.some((rule) => rule.source.startsWith("/:locale(") && /\/news(?:\/:slug\*)?$/.test(rule.source)),
    false,
    "localized canonical News routes should render directly"
  );
});

test("admin writes revalidate the canonical News pages", () => {
  const routeSource = source("app/api/admin/research-news/[id]/route.ts");

  assert.match(routeSource, /revalidatePath\("\/\[locale\]\/news",\s*"page"\)/);
  assert.match(routeSource, /revalidatePath\("\/\[locale\]\/news\/\[slug\]",\s*"page"\)/);
  assert.doesNotMatch(routeSource, /revalidatePath\("\/\[locale\]\/research-news/);
});
