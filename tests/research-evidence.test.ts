import assert from "node:assert/strict";
import test from "node:test";
import { evidenceSignalCopy, evidenceSignalForType } from "@/lib/research-evidence";
import { PAPER_TYPES } from "@/lib/types";

test("every paper type maps to an evidence signal", () => {
  for (const type of PAPER_TYPES) {
    const signal = evidenceSignalForType(type.value);
    assert.ok(signal.length > 0);
  }
  assert.equal(evidenceSignalForType("journal"), "peer-reviewed");
  assert.equal(evidenceSignalForType("review"), "evidence-synthesis");
  assert.equal(evidenceSignalForType("policy-ethics"), "industry-signal");
});

test("evidence copy localizes and falls back to English", () => {
  const en = evidenceSignalCopy("industry-signal", "en");
  const zh = evidenceSignalCopy("industry-signal", "zh-hant");
  assert.notEqual(en.label, zh.label);
  assert.match(zh.label, /產業/);

  // A locale without dedicated copy falls back to English rather than crashing.
  const fr = evidenceSignalCopy("peer-reviewed", "fr");
  assert.equal(fr.label, "Peer-reviewed study");
});
