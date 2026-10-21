export interface TcfData {
  listenerId?: number;
  cmpStatus?: string;
  eventStatus?: string;
  gdprApplies?: boolean;
  purpose?: { consents?: Record<number, boolean> };
  vendor?: { consents?: Record<number, boolean> };
}

export type AdsQueue = { push: (entry: Record<string, unknown>) => unknown; pauseAdRequests?: number; requestNonPersonalizedAds?: number };
export type GppEvent = { eventName?: string; data?: unknown; pingData?: { signalStatus?: string; cmpStatus?: string } };
export type GppApi = (command: string, callback: (event: GppEvent, success: boolean) => void) => void;
export interface GppMonitor { watching: boolean; ready: boolean; changed: boolean }

export function setAdRequestsPaused(browser: { adsbygoogle?: AdsQueue }, paused: boolean) {
  // The downloaded Google SDK replaces the bootstrap array. Never keep that
  // array in a closure for later pause/resume or revocation operations.
  const queue: AdsQueue = browser.adsbygoogle || new Array<Record<string, unknown>>();
  browser.adsbygoogle = queue;
  queue.requestNonPersonalizedAds = 1;
  queue.pauseAdRequests = paused ? 1 : 0;
}

// One monitor per document, including while the reader is on an article page.
// getInitialUsStatesOptOutStatus is only an initial snapshot, not a current read.
export function watchGppChanges(api: GppApi, state: GppMonitor, notify: () => void) {
  if (state.watching) return;
  state.watching = true;
  api("addEventListener", (event, success) => {
    if (success && event?.eventName === "listenerRegistered" && event.pingData?.signalStatus === "ready") state.ready = true;
    if (!success || !event || event.eventName === "error" || event.pingData?.cmpStatus === "error"
      || (event.eventName === "listenerRegistered" && event.pingData?.signalStatus !== "ready")
      || event.eventName === "sectionChange"
      || (event.eventName === "signalStatus" && event.data === "not ready")) state.changed = true;
    notify();
  });
}

// Google's InitialUsStatesOptOutStatusEnum: 0 unknown, 1 not applicable,
// 2 not opted out, 3 opted out. An absent CMP or an incomplete response never
// authorizes requests. Google still evaluates the full TCF/GPP signals itself.
export function canRequestAds(tcf: TcfData | undefined, usStatus: number) {
  if (![1, 2].includes(usStatus) || tcf?.cmpStatus !== "loaded") return false;
  if (tcf.gdprApplies === false) return true;
  return tcf.gdprApplies === true
    && ["tcloaded", "useractioncomplete"].includes(tcf.eventStatus || "")
    && tcf.purpose?.consents?.[1] === true
    && tcf.vendor?.consents?.[755] === true;
}
