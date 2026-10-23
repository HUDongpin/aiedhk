// Run against a production build: node tests/academy-card-layout.browser.mjs http://localhost:3991
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const base = new URL(process.argv[2] ?? "http://localhost:3991");
const session = `academy-card-layout-${new Date().toISOString().replace(/[:.]/g, "-")}`;
const output = resolve("output/playwright", session);
mkdirSync(output, { recursive: true });
let step = 0;
const checks = [];

function command(...args) {
  const result = execFileSync("npx", ["--yes", "--package", "@playwright/cli", "playwright-cli", `--session=${session}`, ...args], {
    encoding: "utf8", timeout: 45000,
  });
  writeFileSync(resolve(output, `${++step}-${args[0]}.log`), result);
  if (/^### Error/m.test(result)) throw new Error(result);
}

function snapshot() {
  const path = resolve(output, `${step + 1}-snapshot.md`);
  command("snapshot", `--filename=${path}`);
  return readFileSync(path, "utf8");
}

const probe = () => {
  const box = (node) => {
    const { left, top, right, bottom, width, height } = node.getBoundingClientRect();
    return { left, top, right, bottom, width, height };
  };
  const overlaps = (a, b) => Math.min(a.right, b.right) - Math.max(a.left, b.left) > 1 &&
    Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top) > 1;
  return Array.from(document.querySelectorAll("main article")).map((card) => {
    const identifier = card.querySelector('[aria-label^="Lesson identifier "]');
    const badge = box(identifier);
    const row = box(identifier.parentElement);
    const metadata = Array.from(identifier.previousElementSibling.querySelectorAll("span"));
    const range = document.createRange();
    range.selectNodeContents(identifier);
    const textRects = Array.from(range.getClientRects()).map(({ left, top, right, bottom }) => ({ left, top, right, bottom }));
    return {
      title: card.querySelector("h3").textContent,
      identifier: identifier.textContent.trim(),
      expectedIdentifier: identifier.getAttribute("aria-label").replace("Lesson identifier ", ""),
      badge, row,
      overlaps: metadata.filter((node) => overlaps(box(node), badge)).map((node) => node.textContent.trim()),
      clipped: textRects.some((rect) => rect.left < row.left - 1 || rect.right > row.right + 1 || rect.top < row.top - 1 || rect.bottom > row.bottom + 1),
      rightAligned: Math.abs(badge.right - row.right) < 1,
      topAligned: Math.abs(badge.top - row.top) < 1,
      imageCount: card.querySelectorAll("img").length,
      viewportOverflow: document.documentElement.scrollWidth > innerWidth,
    };
  });
};

try {
  command("open", new URL("/en/academy", base).href, "--browser=chrome");
  for (const [locale, width] of [["en", 390], ["en", 320], ["ar", 390], ["zh-hant", 390], ["en", 1440]]) {
    command("resize", String(width), "844");
    command("goto", new URL(`/${locale}/academy`, base).href);
    command("run-code", "async (page) => { await page.waitForFunction(() => document.querySelectorAll('main article').length === 6, undefined, {timeout: 15000}); await page.evaluate(() => document.fonts.ready); }");
    const dataPath = resolve(output, `${locale}-${width}.json`);
    command("eval", probe.toString(), `--filename=${dataPath}`);
    const cards = JSON.parse(readFileSync(dataPath, "utf8"));
    const refs = [...snapshot().matchAll(/- article[^\n]*\[ref=([^\]]+)\]/g)].map((match) => match[1]);
    for (const track of ["AI Knowledge", "Educational Theory"]) {
      const index = cards.findIndex((card) => card.identifier.startsWith(`${track} `));
      assert.ok(index >= 0, `${locale}/${width} includes ${track}`);
      command("screenshot", refs[index], `--filename=${resolve(output, `${locale}-${width}-${track.replaceAll(" ", "-")}.png`)}`);
    }
    const failures = cards.filter((card) => card.identifier !== card.expectedIdentifier ||
      !/^(AI Knowledge|Educational Theory) \d{2,}$/.test(card.identifier) ||
      card.overlaps.length || card.clipped || !card.rightAligned || !card.topAligned || card.imageCount !== 1 || card.viewportOverflow);
    checks.push({ locale, width, status: failures.length ? "failed" : "passed", cardsChecked: cards.length, failures });
    console.log(`${checks.at(-1).status}: ${locale} at ${width}px; ${failures.length} of ${cards.length} cards failed`);
  }
} finally {
  command("close");
  writeFileSync(resolve(output, "receipt.json"), JSON.stringify({ baseUrl: base.origin, checks }, null, 2) + "\n");
}
console.log(JSON.stringify({ output, checks }, null, 2));
assert.equal(checks.filter((check) => check.status === "failed").length, 0, "Academy card identifiers must remain complete, top-right aligned, unclipped and separate from metadata");
