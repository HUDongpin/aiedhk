import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import AboutPage from "@/app/[locale]/about/page";
import Footer from "@/components/Footer";
import { getDictionary } from "@/lib/i18n";

test("about page renders the MAIS profile link with the mais.ac domain", async () => {
  const html = renderToStaticMarkup(await AboutPage({ params: Promise.resolve({ locale: "en" }) }));

  assert.match(html, /href="https:\/\/mais\.ac"/);
  assert.match(html, />mais\.ac</);
  assert.doesNotMatch(html, /mais\.hk/);
});

test("about page renders the UAIS profile link on the second row", async () => {
  const html = renderToStaticMarkup(await AboutPage({ params: Promise.resolve({ locale: "en" }) }));
  const caisIndex = html.indexOf(">CAIS<");
  const uaisIndex = html.indexOf(">UAIS<");

  assert.ok(caisIndex > -1, "expected the current CAIS card to render");
  assert.ok(uaisIndex > caisIndex, "expected UAIS to render after CAIS in the profile link grid");
  assert.match(html, /href="https:\/\/uais\.top"/);
  assert.match(html, />uais\.top</);
  assert.match(html, /lg:grid-cols-4/);
});

test("about page renders the UAIS product card after CAIS", async () => {
  const html = renderToStaticMarkup(await AboutPage({ params: Promise.resolve({ locale: "en" }) }));
  const caisProductIndex = html.indexOf(">Chinese Adaptive Interactive System<");
  const uaisProductIndex = html.indexOf(">University Adaptive Interactive System<");

  assert.ok(caisProductIndex > -1, "expected the current CAIS product card to render");
  assert.ok(uaisProductIndex > caisProductIndex, "expected the UAIS product card to render after CAIS");
  assert.match(html, />UAIS</);
});

test("about page links product cards to their websites", async () => {
  const html = renderToStaticMarkup(await AboutPage({ params: Promise.resolve({ locale: "en" }) }));

  assert.match(html, /href="https:\/\/mais\.ac"[^>]*aria-label="Open website: MAIS product"/);
  assert.match(html, /href="https:\/\/www\.cais\.hk"[^>]*aria-label="Open website: CAIS product"/);
  assert.match(html, /href="https:\/\/uais\.top"[^>]*aria-label="Open website: UAIS product"/);
});

test("footer points the MAIS ecosystem link to mais.ac", () => {
  const html = renderToStaticMarkup(
    React.createElement(Footer, {
      locale: "en",
      dictionary: getDictionary("en"),
    })
  );

  assert.match(html, /href="https:\/\/mais\.ac"[^>]*>MAIS</);
  assert.doesNotMatch(html, /https:\/\/www\.mais\.hk/);
});
