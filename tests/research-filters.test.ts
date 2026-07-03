import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import ResearchFilters from "@/components/ResearchFilters";
import { getDictionary } from "@/lib/i18n";

test("research news type select labels policy-ethics as Industry", () => {
  const html = renderToStaticMarkup(
    React.createElement(ResearchFilters, {
      locale: "en",
      dictionary: getDictionary("en"),
      years: [2026],
      current: {},
    })
  );

  assert.match(html, /<option value="policy-ethics">Industry<\/option>/);
  assert.doesNotMatch(html, /Policy \/ Ethics/);
});
