import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

function source(path: string) {
  return readFileSync(join(process.cwd(), path), "utf8");
}

test("public research news list route is cacheable instead of force-dynamic", () => {
  const pageSource = source("app/[locale]/news/page.tsx");

  assert.doesNotMatch(pageSource, /export\s+const\s+dynamic\s*=\s*["']force-dynamic["']/);
  assert.match(pageSource, /export\s+const\s+revalidate\s*=\s*300/);
  assert.doesNotMatch(pageSource, /\bsearchParams\b/);
  assert.match(pageSource, /ResearchNewsExplorer/);
});

test("research news query state is handled in the client explorer", () => {
  const explorerSource = source("components/ResearchNewsExplorer.tsx");

  assert.match(explorerSource, /"use client"/);
  assert.match(explorerSource, /useSearchParams/);
  assert.match(explorerSource, /filterResearchPaperList/);
});

test("research news public reads use a shared revalidation tag", () => {
  const cacheSource = source("lib/research-cache.ts");
  const dataSource = source("lib/research-data.ts");

  assert.match(cacheSource, /export\s+const\s+RESEARCH_NEWS_CACHE_TAG\s*=/);
  assert.match(cacheSource, /export\s+const\s+RESEARCH_NEWS_REVALIDATE_SECONDS\s*=/);
  assert.match(dataSource, /@\/lib\/research-cache/);
  assert.match(dataSource, /unstable_cache/);
  assert.match(dataSource, /tags:\s*\[\s*RESEARCH_NEWS_CACHE_TAG\s*\]/);
});

test("admin research review writes invalidate public research news cache", () => {
  const routeSource = source("app/api/admin/research-news/[id]/route.ts");

  assert.match(routeSource, /revalidateTag/);
  assert.match(routeSource, /@\/lib\/research-cache/);
  assert.match(routeSource, /RESEARCH_NEWS_CACHE_TAG/);
  assert.match(routeSource, /revalidateTag\(\s*RESEARCH_NEWS_CACHE_TAG\s*,\s*\{\s*expire:\s*0\s*\}\s*\)/);
});

test("summary audio player can use a static audio source without live TTS", () => {
  const playerSource = source("components/SummaryAudioPlayer.tsx");

  assert.match(playerSource, /src=\{audioSrc\s*\|\|\s*undefined\}/);
  assert.match(playerSource, /const \[audioSrc,\s*setAudioSrc\]\s*=\s*useState\(src\s*\?\?\s*""\)/);
});

test("research detail page uses local summary audio without dynamic TTS fallback", () => {
  const pageSource = source("app/[locale]/news/[slug]/page.tsx");

  assert.match(pageSource, /summaryAudioSrc\s*=\s*typedLocale\s*===\s*["']en["']\s*\?\s*paper\.summaryAudio/);
  assert.doesNotMatch(pageSource, /summaryAudioEndpoint/);
  assert.doesNotMatch(pageSource, /ttsEndpoint=/);
  assert.match(pageSource, /<SummaryAudioPlayer\s+src=\{summaryAudioSrc\}/);
});

test("summary audio player does not render the decorative waveform square", () => {
  const playerSource = source("components/SummaryAudioPlayer.tsx");

  assert.doesNotMatch(playerSource, /Waveform/);
  assert.doesNotMatch(playerSource, /rounded-2xl border border-cyan-200 bg-white text-aied-blue/);
});

test("research detail source link appears beside the author metadata before topic tags", () => {
  const pageSource = source("app/[locale]/news/[slug]/page.tsx");
  const sourceLinkIndex = pageSource.indexOf("sourceLinks.map");
  const tagListIndex = pageSource.indexOf("paper.tags.map");

  assert.match(pageSource, /paper\.sourceUrls\?\.length\s*\?\s*paper\.sourceUrls\s*:\s*\[\{\s*label:\s*dictionary\.common\.source,\s*url:\s*paper\.sourceUrl\s*\}\]/);
  assert.ok(sourceLinkIndex > 0, "research detail page should render source links");
  assert.ok(tagListIndex > 0, "research detail page should render topic tags");
  assert.ok(sourceLinkIndex < tagListIndex, "source links should sit before the topic tags in the hero metadata area");
});
