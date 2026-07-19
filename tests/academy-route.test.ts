import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";
import { pathToFileURL } from "node:url";

function source(path: string) {
  return readFileSync(join(process.cwd(), path), "utf8");
}

test("Academy has canonical localized index and detail routes", () => {
  assert.ok(existsSync(join(process.cwd(), "app/[locale]/academy/page.tsx")));
  assert.ok(existsSync(join(process.cwd(), "app/[locale]/academy/[slug]/page.tsx")));
});

test("unlocalized Academy URLs temporarily redirect to English", async () => {
  const configUrl = pathToFileURL(join(process.cwd(), "next.config.mjs")).href;
  const config = (await import(configUrl)) as {
    default: { redirects: () => Promise<Array<{ source: string; destination: string; permanent: boolean }>> };
  };
  const rules = await config.default.redirects();

  assert.deepEqual(rules.find((rule) => rule.source === "/academy"), {
    source: "/academy",
    destination: "/en/academy",
    permanent: false,
  });
  assert.deepEqual(rules.find((rule) => rule.source === "/academy/:slug*"), {
    source: "/academy/:slug*",
    destination: "/en/academy/:slug*",
    permanent: false,
  });
});

test("desktop, mobile, and footer navigation place Academy immediately after News and before About", () => {
  for (const path of ["components/Header.tsx", "components/Footer.tsx"]) {
    const navSource = source(path);
    const news = navSource.indexOf("dictionary.nav.researchNews");
    const academy = navSource.indexOf("dictionary.nav.academy");
    const about = navSource.indexOf("dictionary.nav.about");
    assert.ok(news >= 0 && news < academy && academy < about, `${path} should order News, Academy, About`);
  }
});

test("Academy detail uses lesson semantics without Research News bibliography or evidence UI", () => {
  const detail = source("app/[locale]/academy/[slug]/page.tsx");
  assert.match(detail, /SummaryAudioPlayer/);
  assert.match(detail, /academyLearningResourceJsonLd/);
  assert.match(detail, /breadcrumbJsonLd/);
  assert.match(detail, /lesson\.coreIdeas/);
  assert.match(detail, /lesson\.educationConnection/);
  assert.match(detail, /lesson\.relatedConcepts/);
  assert.doesNotMatch(detail, /paper\.authors|paper\.venue|paper\.type|evidenceSignal|relatedPapers/);
});
