import assert from "node:assert/strict";
import test from "node:test";
import {
  classifyLegacySource,
  dueNewsletterChannels,
  hongKongDate,
  selectAcademyPair,
  selectNewsItems,
  retryDecision,
  type CatalogEntry,
} from "@/lib/newsletter/policy";

const now = new Date("2026-10-23T01:30:00Z");
function entry(key: string, overrides: Partial<CatalogEntry> = {}): CatalogEntry {
  return { key, channel: "news", firstSeenAt: "2026-10-22T12:00:00Z", baseline: false, order: 1, items: {}, ...overrides };
}

test("Hong Kong delivery dates and both channel thresholds are stable at UTC boundaries", () => {
  assert.equal(hongKongDate(new Date("2026-10-22T16:00:00Z")), "2026-10-23");
  assert.deepEqual(dueNewsletterChannels(new Date("2026-10-23T01:19:59Z")), []);
  assert.deepEqual(dueNewsletterChannels(new Date("2026-10-23T01:20:00Z")), ["news"]);
  assert.deepEqual(dueNewsletterChannels(now), ["news", "academy"]);
});

test("legacy sources accept only recognized locale routes and never infer two subscriptions", () => {
  assert.equal(classifyLegacySource("/zh-hans/news"), "news");
  assert.equal(classifyLegacySource("/en/academy?page=2"), "academy");
  assert.equal(classifyLegacySource("/news"), "news");
  assert.equal(classifyLegacySource("/en/not-news"), "unknown");
  assert.equal(classifyLegacySource("https://example.com/en/news"), "unknown");
  assert.equal(classifyLegacySource(null), "unknown");
});

test("news uses registration time, excludes baseline and delivered items, and retains overflow", () => {
  const items = Array.from({ length: 7 }, (_, i) => entry(`n${i}`, { firstSeenAt: `2026-10-22T12:0${i}:00Z` }));
  const first = selectNewsItems([...items, entry("baseline", { baseline: true }), entry("old", { firstSeenAt: "2026-10-20T12:00:00Z" })], new Date("2026-10-21T00:00:00Z"), new Set(), now);
  assert.deepEqual(first.map((item) => item.key), ["n0", "n1", "n2", "n3", "n4"]);
  const second = selectNewsItems(items, new Date("2026-10-21T00:00:00Z"), new Set(first.map((item) => item.key)), now);
  assert.deepEqual(second.map((item) => item.key), ["n5", "n6"]);
  assert.deepEqual(selectNewsItems(items, now, new Set(), now), []);
});

test("Academy prioritizes new complete pairs then curriculum order without repetition", () => {
  const pairs = [entry("p1", { channel: "academy", baseline: true, order: 1 }), entry("p2", { channel: "academy", baseline: true, order: 2 }), entry("new", { channel: "academy", order: 3 })];
  assert.deepEqual(selectAcademyPair(pairs, []), { entry: pairs[2], cycle: 1, review: false });
  assert.deepEqual(selectAcademyPair(pairs, [{ key: "new", cycle: 1 }]), { entry: pairs[0], cycle: 1, review: false });
  assert.deepEqual(selectAcademyPair(pairs, pairs.map((p) => ({ key: p.key, cycle: 1 }))), { entry: pairs[0], cycle: 2, review: true });
  assert.equal(selectAcademyPair([], []), null);
});

test("new pairs inserted during later cycles are still new, while recurring pairs are reviews", () => {
  const pairs = [entry("old", { channel: "academy", baseline: true }), entry("new", { channel: "academy", order: 2 })];
  assert.deepEqual(selectAcademyPair(pairs, [{ key: "old", cycle: 1 }, { key: "old", cycle: 2 }]), { entry: pairs[1], cycle: 2, review: false });
});

test("transient failures retry within the idempotency window and ambiguous old attempts require review", () => {
  assert.equal(retryDecision({ attempt: 1, firstAttemptAt: now, now, retryable: true, ambiguous: false }).status, "queued");
  const decision = retryDecision({ attempt: 2, firstAttemptAt: now, now, retryable: true, ambiguous: false, retryAfterSeconds: 600 });
  assert.equal(decision.nextAttemptAt?.toISOString(), "2026-10-23T01:40:00.000Z");
  assert.equal(retryDecision({ attempt: 1, firstAttemptAt: new Date("2026-10-22T01:00:00Z"), now, retryable: true, ambiguous: true }).status, "unknown");
  assert.equal(retryDecision({ attempt: 1, firstAttemptAt: now, now, retryable: false, ambiguous: false }).status, "failed");
});
