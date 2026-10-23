// Opt-in real-browser regression against a running production build:
// node tests/academy-navigation.browser.mjs http://localhost:3991
// Uses the Playwright CLI, without adding a browser runtime to the unit suite.
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const base = new URL(process.argv[2] ?? "http://localhost:3991");
assert.ok(["http:", "https:"].includes(base.protocol));
assert.equal(base.pathname, "/", "pass an origin without a route");
const stamp = new Date().toISOString().replace(/[:.]/g, "-");
const session = `academy-navigation-${stamp}`;
const output = resolve("output/playwright", session);
mkdirSync(output, { recursive: true });
let step = 0;
const checks = [];

function command(...args) {
  let result;
  try {
    result = execFileSync("npx", ["--yes", "--package", "@playwright/cli", "playwright-cli", `--session=${session}`, ...args], {
      encoding: "utf8", timeout: 45000,
    });
  } catch (error) {
    result = String(error.stdout ?? error.message);
    writeFileSync(resolve(output, `${++step}-${args[0]}.log`), result);
    throw new Error(result);
  }
  writeFileSync(resolve(output, `${++step}-${args[0]}.log`), result);
  if (/^### Error/m.test(result)) throw new Error(result);
  return result;
}

function ref(role, label) {
  const path = resolve(output, `${step + 1}-snapshot.md`);
  command("snapshot", `--filename=${path}`);
  const lines = readFileSync(path, "utf8").split("\n");
  const matches = lines.filter((line) => line.includes(`- ${role} "${label}"`));
  assert.equal(matches.length, 1, `one ${role} named ${label}`);
  return matches[0].match(/\[ref=([^\]]+)\]/)[1];
}

const click = (role, label) => command("click", ref(role, label));
const select = (label, value) => command("select", ref("combobox", label), value);
const goto = (path) => command("goto", new URL(path, base).href);

function waitFor(expression) {
  command("run-code", `async (page) => { await page.waitForFunction(() => (${expression}), undefined, { timeout: 8000 }); }`);
}

function check(name, action) {
  try {
    action();
    checks.push({ name, status: "passed" });
  } catch (error) {
    checks.push({ name, status: "failed", error: String(error) });
  }
  console.log(`${checks.at(-1).status}: ${name}`);
}

const cleared = `location.pathname === '/en/academy' && location.search === '' &&
  document.querySelector('#academy-search')?.value === '' &&
  document.querySelector('#academy-track')?.value === '' &&
  document.querySelector('#academy-level')?.value === '' &&
  document.querySelectorAll('main article').length === 6`;

try {
  command("open", new URL("/en/academy", base).href, "--browser=chrome");
  command("resize", "1440", "1000");

  check("normal form search then Reset clears query, controls and results", () => {
    command("fill", ref("textbox", "Search Academy lessons"), "Tokenization and Multilingual AI");
    click("button", "Search");
    waitFor(`new URLSearchParams(location.search).get('q') === 'Tokenization and Multilingual AI' && document.querySelectorAll('main article').length === 1`);
    click("link", "Reset");
    waitFor(cleared);
  });

  check("direct filtered entry then Reset clears every filter", () => {
    goto("/en/academy?q=Tokenization+and+Multilingual+AI&track=ai-knowledge&level=core&page=2");
    waitFor(`document.querySelector('#academy-search')?.value === 'Tokenization and Multilingual AI' && document.querySelectorAll('main article').length === 1`);
    click("link", "Reset");
    waitFor(cleared);
  });

  check("track-link navigation synchronizes the form before its next submission", () => {
    goto("/en/academy");
    select("Filter by track", "ai-knowledge");
    select("Filter by level", "core");
    click("button", "Search");
    waitFor(`new URLSearchParams(location.search).get('track') === 'ai-knowledge'`);
    click("link", "Educational Theory");
    waitFor(`new URLSearchParams(location.search).get('track') === 'educational-theory' && document.querySelector('#academy-track')?.value === 'educational-theory' && document.querySelector('#academy-level')?.value === 'core'`);
    click("button", "Search");
    waitFor(`new URLSearchParams(location.search).get('track') === 'educational-theory' && document.querySelectorAll('main article').length === 6`);
    click("link", "Reset");
    waitFor(cleared);
  });

  check("pagination then Reset still returns to the unfiltered first page", () => {
    goto("/en/academy");
    click("link", "Next");
    waitFor(`new URLSearchParams(location.search).get('page') === '2'`);
    click("link", "Reset");
    waitFor(cleared);
  });
} finally {
  command("close");
  writeFileSync(resolve(output, "receipt.json"), JSON.stringify({ baseUrl: base.origin, checks }, null, 2) + "\n");
}

console.log(JSON.stringify({ output, checks }, null, 2));
assert.equal(checks.filter((item) => item.status === "failed").length, 0, "Academy navigation regression checks");
