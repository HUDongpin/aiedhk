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

export default function ResearchNewsletterSignup({ locale, sourcePath, copy }: ResearchNewsletterSignupProps) {
  const [state, setState] = useState<SubmitState>("idle");
  const [email, setEmail] = useState("");
  const message = messageForState(state, copy);
  const isLoading = state === "loading";
  const isSuccess = state === "subscribed" || state === "already_subscribed";

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
    <div className="rounded-4xl border border-aied-blue/20 bg-aied-ink p-6 text-white shadow-card">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-aied-cyan">{copy.eyebrow}</p>
      <h2 className="mt-3 text-2xl font-black leading-tight tracking-tight">{copy.title}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-200">{copy.description}</p>

      <form onSubmit={handleSubmit} className="mt-5">
        <label htmlFor="research-newsletter-email" className="sr-only">
          {copy.emailLabel}
        </label>
        <input name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
        <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto]">
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
            className="focus-ring min-h-12 rounded-2xl border border-white/15 bg-white px-4 py-3 text-sm font-semibold text-aied-ink outline-none transition placeholder:text-slate-400 focus:border-aied-cyan"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="focus-ring min-h-12 rounded-2xl bg-aied-cyan px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-white disabled:cursor-wait disabled:opacity-70"
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
