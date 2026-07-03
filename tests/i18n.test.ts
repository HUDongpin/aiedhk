import assert from "node:assert/strict";
import test from "node:test";
import { getDictionary } from "@/lib/i18n";
import { PAPER_TYPES } from "@/lib/types";

test("English research news labels policy-ethics as Industry", () => {
  assert.equal(getDictionary("en").paperTypes["policy-ethics"], "Industry");
});

test("paper type fallback labels policy-ethics as Industry", () => {
  assert.equal(
    PAPER_TYPES.find((type) => type.value === "policy-ethics")?.defaultLabel,
    "Industry"
  );
});
