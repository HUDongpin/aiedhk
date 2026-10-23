"use client";

import { useId, useState, type FormEvent } from "react";
import type { Locale } from "@/lib/i18n";
import { getNewsletterCopy, type NewsletterCopy } from "@/lib/newsletter/messages";
import type { NewsletterChannel } from "@/lib/newsletter/types";

type SubmitState =
  | "idle"
  | "loading"
  | "pending_confirmation"
  | "already_subscribed"
  | "invalid_email"
  | "invalid_channel"
  | "rate_limited"
  | "confirmation_failed"
  | "database_not_configured"
  | "service_unavailable";

interface ResearchNewsletterSignupProps {
  locale: Locale;
  channel?: NewsletterChannel;
  sourcePath: string;
  copy?: Partial<NewsletterCopy>;
  variant?: "compact" | "wide";
}

function messageForState(state: SubmitState, copy: NewsletterCopy) {
  switch (state) {
    case "pending_confirmation":
      return copy.pendingConfirmation;
    case "already_subscribed":
      return copy.alreadySubscribed;
    case "invalid_email":
      return copy.invalidEmail;
    case "rate_limited":
      return copy.rateLimited;
    case "confirmation_failed":
      return copy.confirmationFailed;
    case "database_not_configured":
      return copy.notConfigured;
    case "invalid_channel":
    case "service_unavailable":
      return copy.error;
    default:
      return "";
  }
}

export async function submitNewsletterSignup(input: {
  email: string;
  locale: Locale;
  channel: NewsletterChannel;
  sourcePath: string;
  honeypot: string;
}, send: typeof fetch = fetch): Promise<Exclude<SubmitState, "idle" | "loading">> {
  try {
    const response = await send("/api/newsletter/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });
    const result: unknown = await response.json();
    const status = result && typeof result === "object" && "status" in result ? result.status : undefined;
    switch (status) {
      case "pending_confirmation":
      case "already_subscribed":
        return response.ok ? status : "service_unavailable";
      case "invalid_email":
      case "invalid_channel":
      case "rate_limited":
      case "confirmation_failed":
      case "database_not_configured":
      case "service_unavailable":
        return status;
      default:
        return "service_unavailable";
    }
  } catch {
    return "service_unavailable";
  }
}

export default function ResearchNewsletterSignup({ locale, channel = "news", sourcePath, copy: suppliedCopy, variant = "compact" }: ResearchNewsletterSignupProps) {
  const copy = { ...getNewsletterCopy(locale, channel), ...suppliedCopy };
  const id = useId();
  const emailId = `newsletter-${channel}-email-${id}`;
  const statusId = `newsletter-${channel}-status-${id}`;
  const privacyId = `newsletter-${channel}-privacy-${id}`;
  const [state, setState] = useState<SubmitState>("idle");
  const [email, setEmail] = useState("");
  const message = messageForState(state, copy);
  const isLoading = state === "loading";
  const isSuccess = state === "pending_confirmation" || state === "already_subscribed";
  const isWide = variant === "wide";
  const headingSpacing = copy.eyebrow ? (isWide ? "mt-4" : "mt-3") : "";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    setState("loading");

    setState(await submitNewsletterSignup({ email, locale, channel, sourcePath, honeypot: String(formData.get("company") ?? "") }));
  }

  return (
    <div className={`rounded-4xl border border-aied-blue/20 bg-aied-ink text-white shadow-card ${isWide ? "p-8 sm:p-10 lg:p-12 xl:p-14" : "p-6"}`}>
      {copy.eyebrow ? <p className={`${isWide ? "text-sm sm:text-base" : "text-xs"} font-black uppercase tracking-[0.2em] text-aied-cyan`}>{copy.eyebrow}</p> : null}
      <h2 className={`${headingSpacing} ${isWide ? "max-w-5xl text-3xl leading-[1.08] sm:text-4xl lg:text-5xl" : "text-2xl leading-tight"} text-balance font-black tracking-tight`}>{copy.title}</h2>
      <p className={`${isWide ? "mt-5 max-w-4xl text-base leading-7 sm:text-lg sm:leading-8 lg:text-xl" : "mt-3 text-sm leading-6"} text-slate-200`}>{copy.description}</p>

      <form method="post" action="/api/newsletter/subscribe" encType="application/x-www-form-urlencoded" onSubmit={handleSubmit} aria-busy={isLoading} className={isWide ? "mt-8" : "mt-5"}>
        <label htmlFor={emailId} className="sr-only">
          {copy.emailLabel}
        </label>
        <input type="hidden" name="channel" value={channel} />
        <input type="hidden" name="locale" value={locale} />
        <input type="hidden" name="sourcePath" value={sourcePath} />
        <input name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
        <div className={`grid gap-3 ${isWide ? "md:grid-cols-[minmax(0,1fr)_auto] md:gap-5" : "sm:grid-cols-[minmax(0,1fr)_auto]"}`}>
          <input
            id={emailId}
            name="email"
            type="email"
            aria-describedby={`${statusId}${copy.privacyNote ? ` ${privacyId}` : ""}`}
            aria-invalid={state === "invalid_email"}
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              if (state !== "idle" && state !== "loading") setState("idle");
            }}
            placeholder={copy.emailPlaceholder}
            autoComplete="email"
            required
            className={`focus-ring rounded-2xl border border-white/15 bg-white font-semibold text-aied-ink outline-none transition placeholder:text-slate-400 focus:border-aied-cyan ${isWide ? "min-h-14 px-5 py-4 text-base sm:min-h-16 sm:px-6 sm:text-lg" : "min-h-12 px-4 py-3 text-sm"}`}
          />
          <button
            type="submit"
            disabled={isLoading}
            className={`focus-ring rounded-2xl bg-aied-cyan font-black text-slate-950 transition hover:bg-white disabled:cursor-wait disabled:opacity-70 ${isWide ? "min-h-14 px-8 py-4 text-base sm:min-h-16 sm:px-10 sm:text-lg" : "min-h-12 px-5 py-3 text-sm"}`}
          >
            {isLoading ? copy.submitting : copy.submit}
          </button>
        </div>
        <p
          id={statusId}
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className={`mt-3 min-h-6 text-sm font-semibold ${isSuccess ? "text-aied-cyan" : "text-slate-200"}`}
        >
          {message}
        </p>
      </form>

      {copy.privacyNote ? <p id={privacyId} className="mt-2 text-sm leading-6 text-slate-300">{copy.privacyNote}</p> : null}
    </div>
  );
}
