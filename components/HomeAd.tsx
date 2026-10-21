"use client";

import { useEffect, useRef, useState } from "react";
import { canRequestAds, setAdRequestsPaused, watchGppChanges, type AdsQueue, type GppApi, type GppMonitor, type TcfData } from "@/lib/ad-consent";
import type { AdSenseConfig } from "@/lib/monetization";
import type { Locale } from "@/lib/i18n";
import { monetizationCopy } from "@/lib/monetization-copy";

type TcfApi = (command: string, version: number, callback: (data: TcfData | undefined, success: boolean) => void, parameter?: number) => void;
type AdsWindow = Window & {
  adsbygoogle?: AdsQueue;
  aiedhkGppMonitor?: GppMonitor;
  __tcfapi?: TcfApi;
  __gpp?: GppApi;
  googlefc?: {
    callbackQueue: { push: (callbacks: Record<string, () => void>) => unknown };
    showRevocationMessage?: () => void;
    usstatesoptout?: { getInitialUsStatesOptOutStatus?: () => number };
  };
};

const SCRIPT_ID = "aiedhk-adsense";
const PRIVACY_EVENT = "aiedhk:privacy-change";

// Mounted only by the home page. The AdSense tag also loads the certified Google
// CMP configured in Privacy & messaging. No separate home-made consent cookie.
export default function HomeAd({ config, locale }: { config: AdSenseConfig; locale: Locale }) {
  const [allowed, setAllowed] = useState(false);
  const [settled, setSettled] = useState(false);
  const [scriptReady, setScriptReady] = useState(false);
  const [unfilled, setUnfilled] = useState(false);
  const insRef = useRef<HTMLModElement>(null);
  const requested = useRef(false);
  const copy = monetizationCopy[locale];

  useEffect(() => {
    const browser = window as AdsWindow;
    // Must happen before the AdSense script loads or a slot is pushed.
    setAdRequestsPaused(browser, true);
    const googlefc: NonNullable<AdsWindow["googlefc"]> = browser.googlefc || { callbackQueue: new Array<Record<string, () => void>>() };
    googlefc.callbackQueue = googlefc.callbackQueue || new Array<Record<string, () => void>>();
    browser.googlefc = googlefc;
    let active = true;
    let tcf: TcfData | undefined;
    let tcfListenerId: number | undefined;
    let usStatus = 0;
    let privacyDialogOpened = false;

    function updateConsent() {
      if (!active) return;
      const monitor = browser.aiedhkGppMonitor;
      const currentUsStatus = monitor?.changed || (usStatus === 2 && !monitor?.ready) ? 0 : usStatus;
      const permit = canRequestAds(tcf, currentUsStatus);
      setAdRequestsPaused(browser, !permit);
      setAllowed(permit);
      if (tcf && usStatus !== 0) setSettled(true);
    }

    function onTcf(data: TcfData | undefined, success: boolean) {
      if (!active) {
        if (data?.listenerId !== undefined) browser.__tcfapi?.("removeEventListener", 2, () => {}, data.listenerId);
        return;
      }
      if (data?.listenerId !== undefined) tcfListenerId = data.listenerId;
      tcf = success ? data : undefined;
      updateConsent();
      if (!privacyDialogOpened && tcf?.gdprApplies === true && new URLSearchParams(window.location.search).get("privacy") === "1") {
        privacyDialogOpened = true;
        const url = new URL(window.location.href);
        url.searchParams.delete("privacy");
        window.history.replaceState(window.history.state, "", `${url.pathname}${url.search}${url.hash}`);
        setAdRequestsPaused(browser, true);
        setAllowed(false);
        browser.googlefc?.callbackQueue.push({ CONSENT_API_READY: () => { if (active) browser.googlefc?.showRevocationMessage?.(); } });
      }
    }

    googlefc.callbackQueue.push({
      CONSENT_API_READY: () => {
        if (!active) return;
        browser.__tcfapi?.("addEventListener", 2, onTcf);
      },
    });
    googlefc.callbackQueue.push({
      INITIAL_US_STATES_OPT_OUT_DATA_READY: () => {
        // The SDK can finish after the reader leaves home. The document-level
        // monitor must still start, before any off-home privacy change is lost.
        if (browser.__gpp) {
          const monitor = browser.aiedhkGppMonitor ||= { watching: false, ready: false, changed: false };
          watchGppChanges(browser.__gpp, monitor, () => {
            if (monitor.changed) setAdRequestsPaused(browser, true);
            window.dispatchEvent(new Event(PRIVACY_EVENT));
          });
        }
        if (!active) return;
        usStatus = browser.googlefc?.usstatesoptout?.getInitialUsStatesOptOutStatus?.() ?? 0;
        updateConsent();
      },
    });

    window.addEventListener(PRIVACY_EVENT, updateConsent);
    const failed = () => { if (active) { setAdRequestsPaused(browser, true); setAllowed(false); setSettled(true); } };
    const loaded = () => { if (active) setScriptReady(true); };
    let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.async = true;
      script.crossOrigin = "anonymous";
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${config.publisherId}`;
      script.setAttribute("data-privacy-treatments", "disablePersonalization");
      script.addEventListener("load", () => { script!.dataset.loaded = "true"; }, { once: true });
      script.addEventListener("load", loaded);
      script.addEventListener("error", failed);
      document.head.appendChild(script);
    } else {
      script.addEventListener("load", loaded);
      script.addEventListener("error", failed);
      if (script.dataset.loaded === "true") loaded();
    }
    const timeout = window.setTimeout(() => { if (active) setSettled(true); }, 12000);
    return () => {
      active = false;
      setAdRequestsPaused(browser, true);
      window.removeEventListener(PRIVACY_EVENT, updateConsent);
      window.clearTimeout(timeout);
      script.removeEventListener("load", loaded);
      script.removeEventListener("error", failed);
      if (tcfListenerId !== undefined) browser.__tcfapi?.("removeEventListener", 2, () => {}, tcfListenerId);
    };
  }, [config.publisherId]);

  useEffect(() => {
    if (!allowed) { requested.current = false; return; }
    const ins = insRef.current;
    if (!scriptReady || !ins) return;
    function request() {
      if (requested.current || !ins || ins.getBoundingClientRect().width === 0) return;
      requested.current = true;
      try { (window as AdsWindow).adsbygoogle?.push({}); }
      catch { setUnfilled(true); }
    }
    const resize = new ResizeObserver(request);
    resize.observe(ins);
    const mutation = new MutationObserver(() => {
      if (ins.dataset.adStatus === "unfilled") setUnfilled(true);
    });
    mutation.observe(ins, { attributes: true, attributeFilter: ["data-ad-status"] });
    request();
    return () => { resize.disconnect(); mutation.disconnect(); };
  }, [allowed, scriptReady]);

  const hidden = unfilled || (settled && !allowed);
  return <section id="home-ad" aria-label={copy.adLabel} hidden={hidden} className="container-page pb-12">
    <div className="min-h-[280px] overflow-hidden rounded-2xl border border-slate-200 bg-white/70 px-4 py-3">
      <p className="mb-3 text-center text-xs font-medium tracking-wide text-slate-500">{copy.adLabel}</p>
      {allowed ? <ins ref={insRef} className="adsbygoogle" style={{ display: "block", minHeight: 250 }}
        data-ad-client={config.publisherId} data-ad-slot={config.slot} data-ad-format="auto" data-full-width-responsive="true" /> : null}
    </div>
  </section>;
}
