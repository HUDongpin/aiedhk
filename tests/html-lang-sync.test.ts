import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";
import { localeMeta, locales } from "@/lib/i18n";

function source(path: string) {
  return readFileSync(join(process.cwd(), path), "utf8");
}

test("locale layout syncs the document lang and dir with the active locale", () => {
  const layoutSource = source("app/[locale]/layout.tsx");

  assert.match(layoutSource, /import\s+HtmlLangSync\s+from\s+["']@\/components\/HtmlLangSync["']/);
  assert.match(layoutSource, /<HtmlLangSync\s+lang=\{meta\.htmlLang\}\s+dir=\{meta\.dir\}\s*\/>/);
});

test("HtmlLangSync writes lang and dir onto the document element", () => {
  const componentSource = source("components/HtmlLangSync.tsx");

  assert.match(componentSource, /"use client"/);
  assert.match(componentSource, /document\.documentElement/);
  assert.match(componentSource, /root\.lang\s*=\s*lang/);
  assert.match(componentSource, /root\.dir\s*=\s*dir/);
  // resets to the site default when the localized subtree unmounts
  assert.match(componentSource, /root\.lang\s*=\s*localeMeta\[defaultLocale\]\.htmlLang/);
  assert.match(componentSource, /root\.dir\s*=\s*localeMeta\[defaultLocale\]\.dir/);
});

test("every locale exposes a non-empty htmlLang and a valid text direction", () => {
  for (const locale of locales) {
    const meta = localeMeta[locale];
    assert.ok(meta, `locale ${locale} should have metadata`);
    assert.ok(typeof meta.htmlLang === "string" && meta.htmlLang.length > 0, `locale ${locale} should have an htmlLang`);
    assert.ok(meta.dir === "ltr" || meta.dir === "rtl", `locale ${locale} should have a valid direction`);
  }
});

test("Arabic is the right-to-left locale and English stays left-to-right", () => {
  assert.equal(localeMeta.ar.dir, "rtl");
  assert.equal(localeMeta.en.dir, "ltr");
  assert.equal(localeMeta.en.htmlLang, "en-HK");
});
