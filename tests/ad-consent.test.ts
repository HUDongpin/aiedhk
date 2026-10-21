import assert from "node:assert/strict";
import test from "node:test";

test("consent readiness is not consent: unknown, error, open dialog and rejection block ad requests", async () => {
  const { canRequestAds } = await import("@/lib/ad-consent");
  assert.equal(canRequestAds(undefined, 0), false);
  assert.equal(canRequestAds({ cmpStatus: "error", gdprApplies: false }, 1), false);
  assert.equal(canRequestAds({ cmpStatus: "loaded" }, 1), false);
  assert.equal(canRequestAds({ cmpStatus: "loaded", gdprApplies: true, eventStatus: "cmpuishown" }, 1), false);
  assert.equal(canRequestAds({ cmpStatus: "loaded", gdprApplies: true, eventStatus: "useractioncomplete", purpose: { consents: { 1: false } }, vendor: { consents: { 755: true } } }, 1), false);
});

test("an applicable consent must include storage and Google; US opt-out also blocks ads", async () => {
  const { canRequestAds } = await import("@/lib/ad-consent");
  const consent = { cmpStatus: "loaded", gdprApplies: true, eventStatus: "useractioncomplete", purpose: { consents: { 1: true } }, vendor: { consents: { 755: true } } };
  assert.equal(canRequestAds(consent, 1), true);
  assert.equal(canRequestAds(consent, 2), true);
  assert.equal(canRequestAds(consent, 0), false);
  assert.equal(canRequestAds(consent, 3), false);
  assert.equal(canRequestAds({ ...consent, vendor: { consents: { 755: false } } }, 1), false);
  assert.equal(canRequestAds({ cmpStatus: "loaded", gdprApplies: false }, 1), true);
});

test("pause and resume always target the current SDK queue after Google replaces the bootstrap array", async () => {
  const { setAdRequestsPaused } = await import("@/lib/ad-consent");
  const initial = Object.assign(new Array<Record<string, unknown>>(), { pauseAdRequests: 0 });
  const browser = { adsbygoogle: initial as { push: (entry: Record<string, unknown>) => unknown; pauseAdRequests?: number } };
  setAdRequestsPaused(browser, true);
  const sdk = { push: () => 0, pauseAdRequests: 1 };
  browser.adsbygoogle = sdk;
  setAdRequestsPaused(browser, false);
  assert.equal(sdk.pauseAdRequests, 0);
  assert.equal(initial.pauseAdRequests, 1);
  setAdRequestsPaused(browser, true);
  assert.equal(sdk.pauseAdRequests, 1);
});

test("document-level GPP monitoring survives page changes and never reuses consent after invalidation", async () => {
  const { watchGppChanges } = await import("@/lib/ad-consent");
  const state = { watching: false, ready: false, changed: false };
  let listener: ((event: { eventName: string; data?: unknown; pingData?: { signalStatus: string } }, success: boolean) => void) | undefined;
  let registrations = 0;
  const api = (_command: string, callback: NonNullable<typeof listener>) => { registrations++; listener = callback; };
  watchGppChanges(api, state, () => {});
  assert.equal(state.ready, false);
  listener!({ eventName: "listenerRegistered", pingData: { signalStatus: "ready" } }, true);
  assert.equal(state.ready, true);
  assert.equal(state.changed, false);
  listener!({ eventName: "sectionChange" }, true);
  assert.equal(state.changed, true);
  watchGppChanges(api, state, () => {});
  assert.equal(registrations, 1);
  listener!({ eventName: "signalStatus", data: "ready" }, true);
  assert.equal(state.changed, true);
});

test("a GPP error event invalidates consent even when transport success is true", async () => {
  const { watchGppChanges } = await import("@/lib/ad-consent");
  const state = { watching: false, ready: false, changed: false };
  let emit: ((event: { eventName: string; pingData?: { signalStatus: string; cmpStatus: string } }, success: boolean) => void) | undefined;
  watchGppChanges((_command, callback) => { emit = callback; }, state, () => {});
  emit!({ eventName: "listenerRegistered", pingData: { signalStatus: "ready", cmpStatus: "loaded" } }, true);
  emit!({ eventName: "error", pingData: { signalStatus: "ready", cmpStatus: "loaded" } }, true);
  assert.equal(state.changed, true);
});
