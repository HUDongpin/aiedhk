import assert from "node:assert/strict";
import test from "node:test";
import { renderToStaticMarkup } from "react-dom/server";
import HomePage from "@/app/[locale]/page";

test("home hero headline uses a lower responsive font size", async () => {
  const html = renderToStaticMarkup(await HomePage({ params: Promise.resolve({ locale: "en" }) }));

  assert.match(html, /Hong Kong as an AIED Hub for research, product innovation, and learning impact\./);
  assert.match(html, /<h1 class="[^"]*\btext-4xl\b[^"]*\bsm:text-5xl\b[^"]*\blg:text-6xl\b[^"]*">/);
  assert.doesNotMatch(html, /\blg:text-7xl\b/);
});

test("home showcase eyebrow uses the enlarged responsive font size", async () => {
  const html = renderToStaticMarkup(await HomePage({ params: Promise.resolve({ locale: "en" }) }));

  assert.match(
    html,
    /<p class="[^"]*text-\[0\.68rem\][^"]*sm:text-sm[^"]*lg:text-\[0\.72rem\][^"]*xl:text-sm[^"]*">AI in Education Hub of Knowledge<\/p>/
  );
});
