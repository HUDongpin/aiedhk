import { getLocaleMeta, normalizeLocale, type Locale } from "@/lib/i18n";
import { getNewsletterCopy } from "./messages";
import type { NewsletterActionState } from "./service";
import type { NewsletterChannel } from "./types";

export const newsletterPrivateHeaders = {
  "cache-control": "no-store",
  "referrer-policy": "no-referrer",
  "x-robots-tag": "noindex, nofollow",
  "x-content-type-options": "nosniff",
  "content-security-policy": "default-src 'none'; style-src 'unsafe-inline'; form-action 'self'; base-uri 'none'; frame-ancestors 'none'",
};

function escapeHtml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

export function newsletterActionStatus(status: string) {
  switch (status) {
    case "pending":
    case "pending_confirmation":
    case "found":
    case "confirmed":
    case "already_confirmed":
    case "unsubscribed":
    case "already_unsubscribed":
      return 200;
    case "choose_required":
    case "invalid":
      return 400;
    case "not_found":
      return 404;
    case "expired":
      return 410;
    default:
      return 503;
  }
}

export function newsletterActionPage(input: {
  kind: "confirm" | "unsubscribe";
  state: NewsletterActionState;
  token: string;
  fallbackLocale: Locale;
  httpStatus?: number;
}) {
  const { kind, state, token } = input;
  const locale = normalizeLocale(state.locale ?? input.fallbackLocale);
  const scopedChannel = state.scope === "news" || state.scope === "academy" ? state.scope : undefined;
  const channels = [...new Set(state.channels?.filter((channel): channel is NewsletterChannel => channel === "news" || channel === "academy") ?? (scopedChannel ? [scopedChannel] : []))];
  const channel = channels[0] ?? "news";
  const copy = getNewsletterCopy(locale, channel);
  const title = kind === "confirm" ? copy.confirmTitle : channels.length === 1 ? copy.unsubscribeTitle : copy.unsubscribeAction;
  const choice = state.scope === "choose" || channels.length !== 1;
  const canConfirm = kind === "confirm" && ["pending", "pending_confirmation", "choose_required"].includes(state.status);
  const canUnsubscribe = kind === "unsubscribe" && state.status === "found";
  const success = kind === "confirm" ? state.status === "confirmed" : ["unsubscribed", "already_unsubscribed"].includes(state.status);
  let messages: string[];

  if (kind === "confirm" && state.status === "already_confirmed") {
    messages = [copy.confirmUsed];
  } else if (success && !channels.length) {
    messages = [kind === "confirm" ? copy.confirmSuccessUnknown : copy.unsubscribeSuccessUnknown];
  } else if (success) {
    messages = channels.map((item) => {
      const channelCopy = getNewsletterCopy(locale, item);
      return kind === "confirm" ? channelCopy.confirmSuccess : channelCopy.unsubscribeSuccess;
    });
  } else if (state.status === "database_not_configured") {
    messages = [copy.notConfigured];
  } else if (kind === "confirm" && state.status === "expired") {
    messages = [copy.confirmExpired];
  } else if (kind === "confirm" && state.status === "invalid") {
    messages = [copy.confirmInvalid];
  } else if (state.status === "choose_required") {
    messages = [copy.emptySelection];
  } else if (canConfirm) {
    messages = [choice ? copy.chooseChannels : copy.confirmMessage];
  } else if (canUnsubscribe) {
    messages = [channels.length === 1 ? copy.unsubscribeMessage : channels.length > 1 ? copy.unsubscribeMultipleMessage : copy.unsubscribeUnknownMessage];
  } else {
    messages = [copy.error];
  }

  let form = "";
  if (canConfirm || canUnsubscribe) {
    const action = `/api/newsletter/${kind}?token=${encodeURIComponent(token)}`;
    const fields = canUnsubscribe
      ? '<input type="hidden" name="intent" value="unsubscribe">'
      : choice
        ? `<fieldset><legend>${escapeHtml(copy.chooseChannels)}</legend><label><input type="checkbox" name="channels" value="news"> ${escapeHtml(copy.newsLabel)}</label><label><input type="checkbox" name="channels" value="academy"> ${escapeHtml(copy.academyLabel)}</label></fieldset>`
        : `<input type="hidden" name="channels" value="${channel}">`;
    form = `<form method="post" action="${escapeHtml(action)}">${fields}<button type="submit">${escapeHtml(canConfirm ? copy.confirmAction : copy.unsubscribeAction)}</button></form>`;
  }

  return newsletterHtmlPage({
    locale,
    title,
    messages,
    form,
    targetLabels: canUnsubscribe && channels.length > 1 ? channels.map((item) => item === "news" ? copy.newsLabel : copy.academyLabel) : [],
    httpStatus: input.httpStatus ?? newsletterActionStatus(state.status),
  });
}

export function newsletterSignupPage(input: {
  locale: Locale;
  channel: NewsletterChannel;
  status: string;
  httpStatus: number;
  headers?: Record<string, string>;
}) {
  const copy = getNewsletterCopy(input.locale, input.channel);
  let message: string;
  switch (input.status) {
    case "pending_confirmation": message = copy.pendingConfirmation; break;
    case "already_subscribed": message = copy.alreadySubscribed; break;
    case "invalid_email": message = copy.invalidEmail; break;
    case "rate_limited": message = copy.rateLimited; break;
    case "confirmation_failed": message = copy.confirmationFailed; break;
    case "database_not_configured": message = copy.notConfigured; break;
    default: message = copy.error;
  }
  return newsletterHtmlPage({ locale: input.locale, title: copy.submit, messages: [message], httpStatus: input.httpStatus, headers: input.headers });
}

function newsletterHtmlPage(input: {
  locale: Locale;
  title: string;
  messages: string[];
  form?: string;
  targetLabels?: string[];
  httpStatus: number;
  headers?: Record<string, string>;
}) {
  const { locale, title, messages } = input;
  const meta = getLocaleMeta(locale);
  const copy = getNewsletterCopy(locale, "news");
  const html = `<!doctype html>
<html lang="${escapeHtml(meta.htmlLang)}" dir="${meta.dir}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow">
  <meta name="referrer" content="no-referrer">
  <title>${escapeHtml(title)} | AIEDHK</title>
  <style>
    * { box-sizing: border-box; }
    body { margin: 0; padding: 24px; background: #f1f5f9; color: #0f172a; font: 400 17px/1.65 -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif; }
    main { max-width: 600px; margin: 8vh auto; padding: 36px; background: white; border: 1px solid #dbe4ee; border-radius: 24px; }
    .brand { margin: 0 0 16px; color: #0f5ea8; font-size: 14px; font-weight: 800; letter-spacing: .12em; }
    h1 { margin: 0 0 20px; font-size: clamp(25px, 5vw, 34px); line-height: 1.2; }
    p { margin: 0 0 20px; }
    fieldset { margin: 24px 0; padding: 16px; border: 1px solid #cbd5e1; border-radius: 12px; }
    legend { padding: 0 8px; font-weight: 700; }
    label { display: block; padding: 10px 0; cursor: pointer; }
    input[type=checkbox] { width: 20px; height: 20px; vertical-align: middle; accent-color: #0f5ea8; }
    button { width: 100%; min-height: 48px; padding: 14px 20px; border: 0; border-radius: 12px; background: #0f5ea8; color: white; font: inherit; font-weight: 700; cursor: pointer; }
    a { color: #0f5ea8; text-underline-offset: 3px; }
    button:focus-visible, a:focus-visible, input:focus-visible { outline: 3px solid #06b6d4; outline-offset: 4px; }
    .home { margin-top: 28px; font-size: 15px; }
    @media (max-width: 480px) { body { padding: 16px; } main { padding: 24px; margin-top: 5vh; } }
  </style>
</head>
<body><main>
  <p class="brand">AIEDHK</p>
  <h1>${escapeHtml(title)}</h1>
  ${messages.map((message) => `<p role="status">${escapeHtml(message)}</p>`).join("\n  ")}
  ${input.targetLabels?.length ? `<ul>${input.targetLabels.map((label) => `<li>${escapeHtml(label)}</li>`).join("")}</ul>` : ""}
  ${input.form ?? ""}
  <p class="home"><a href="/${locale}">${escapeHtml(copy.backHome)}</a></p>
</main></body></html>`;

  return new Response(html, {
    status: input.httpStatus,
    headers: { ...newsletterPrivateHeaders, ...input.headers, "content-type": "text/html; charset=utf-8" },
  });
}
