"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary, Locale } from "@/lib/i18n";

type NewsletterCopy = Dictionary["research"]["newsletter"];
type SubmitState =
  | "idle"
  | "loading"
  | "subscribed"
  | "already_subscribed"
  | "invalid_email"
  | "database_not_configured"
  | "error";

interface ResearchNewsletterSignupProps {
  locale: Locale;
  sourcePath: string;
  copy: NewsletterCopy;
  variant?: "compact" | "wide";
}

function messageForState(state: SubmitState, copy: NewsletterCopy) {
  switch (state) {
    case "subscribed":
      return copy.success;
    case "already_subscribed":
      return copy.alreadySubscribed;
    case "invalid_email":
      return copy.invalidEmail;
    case "database_not_configured":
      return copy.notConfigured;
    case "error":
      return copy.error;
    default:
      return "";
  }
}

export default function ResearchNewsletterSignup({ locale, sourcePath, copy, variant = "compact" }: ResearchNewsletterSignupProps) {
  const [state, setState] = useState<SubmitState>("idle");
  const [email, setEmail] = useState("");
  const message = messageForState(state, copy);
  const isLoading = state === "loading";
  const isSuccess = state === "subscribed" || state === "already_subscribed";
  const isWide = variant === "wide";
  const headingSpacing = copy.eyebrow ? (isWide ? "mt-4" : "mt-3") : "";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    setState("loading");

    try {
      const response = await fetch("/api/research-news/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          locale,
          sourcePath,
          honeypot: String(formData.get("company") ?? ""),
        }),
      });
      const result = (await response.json().catch(() => null)) as { status?: SubmitState } | null;

      if (result?.status === "subscribed" || result?.status === "already_subscribed") {
        setState(result.status);
        return;
      }

      if (result?.status === "invalid_email" || result?.status === "database_not_configured") {
        setState(result.status);
        return;
      }

      setState(response.ok ? "subscribed" : "error");
    } catch {
      setState("error");
    }
  }

  return (
    <div className={`rounded-4xl border border-aied-blue/20 bg-aied-ink text-white shadow-card ${isWide ? "p-8 sm:p-10 lg:p-12 xl:p-14" : "p-6"}`}>
      {copy.eyebrow ? <p className={`${isWide ? "text-sm sm:text-base" : "text-xs"} font-black uppercase tracking-[0.2em] text-aied-cyan`}>{copy.eyebrow}</p> : null}
      <h2 className={`${headingSpacing} ${isWide ? "max-w-5xl text-3xl leading-[1.08] sm:text-4xl lg:text-5xl" : "text-2xl leading-tight"} text-balance font-black tracking-tight`}>{copy.title}</h2>
      <p className={`${isWide ? "mt-5 max-w-4xl text-base leading-7 sm:text-lg sm:leading-8 lg:text-xl" : "mt-3 text-sm leading-6"} text-slate-200`}>{copy.description}</p>

      <form onSubmit={handleSubmit} className={isWide ? "mt-8" : "mt-5"}>
        <label htmlFor="research-newsletter-email" className="sr-only">
          {copy.emailLabel}
        </label>
        <input name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
        <div className={`grid gap-3 ${isWide ? "md:grid-cols-[minmax(0,1fr)_auto] md:gap-5" : "sm:grid-cols-[minmax(0,1fr)_auto]"}`}>
          <input
            id="research-newsletter-email"
            type="email"
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
          aria-live="polite"
          className={`mt-3 min-h-6 text-sm font-semibold ${isSuccess ? "text-aied-cyan" : "text-slate-200"}`}
        >
          {message}
        </p>
      </form>

      {copy.privacyNote ? <p className="mt-2 text-sm leading-6 text-slate-300">{copy.privacyNote}</p> : null}
    </div>
  );
}
