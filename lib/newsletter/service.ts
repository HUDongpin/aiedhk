import { isLocale, normalizeLocale, type Locale } from "@/lib/i18n";
import { isValidEmail, normalizeEmail } from "@/lib/newsletter";
import { readNewsletterConfig, recipientAllowed, type NewsletterConfig } from "./config";
import { getNewsletterDatabase, type NewsletterSql } from "./database";
import { NewsletterDeliveryQueue } from "./delivery";
import { NewsletterPlanner } from "./planner";
import { ResendNewsletterProvider, type NewsletterProvider } from "./provider";
import { NewsletterSubscriptions } from "./subscriptions";
import { renderNewsletterConfirmation } from "./templates";
import type { NewsletterChannel } from "./types";

export interface NewsletterSubscribeRequest { email: string; channel: string; locale?: string | null; sourcePath?: string; honeypot?: string }
export interface NewsletterActionState { status: string; locale?: Locale; scope?: NewsletterChannel | "choose"; channels?: NewsletterChannel[] }
export interface NewsletterSubscribeResponse { status: string; httpStatus: number; retryAfterSeconds?: number }

function validateRequest(input: NewsletterSubscribeRequest): NewsletterSubscribeResponse | undefined {
  if (input.honeypot?.trim()) return { status: "pending_confirmation", httpStatus: 202 };
  if (!isValidEmail(input.email)) return { status: "invalid_email", httpStatus: 400 };
  if (input.channel !== "news" && input.channel !== "academy") return { status: "invalid_channel", httpStatus: 400 };
  if (input.locale && !isLocale(input.locale)) return { status: "invalid_locale", httpStatus: 400 };
}

export function createNewsletterRuntime({ sql, config, provider, clock = () => new Date() }: {
  sql: NewsletterSql; config: NewsletterConfig; provider?: NewsletterProvider; clock?: () => Date;
}) {
  const subscriptions = new NewsletterSubscriptions(sql, { origin: config.origin, renderConfirmation: (input) => {
    const email = renderNewsletterConfirmation(input);
    return config.mode === "test" ? { ...email, subject: `[AIEDHK Preview] ${email.subject}` } : email;
  } });
  const planner = new NewsletterPlanner(sql, config.origin);
  const queue = new NewsletterDeliveryQueue(sql, config.origin);
  const sender = provider ?? (config.apiKey && config.from ? new ResendNewsletterProvider(config.apiKey, config.from) : undefined);
  return {
    sql, config, subscriptions, planner, queue, provider: sender,
    async subscribe(input: NewsletterSubscribeRequest): Promise<NewsletterSubscribeResponse> {
      const invalid = validateRequest(input);
      if (invalid) return invalid;
      const email = normalizeEmail(input.email);
      if (!config.sendConfigured || !sender || !recipientAllowed(config, email)) return { status: "service_unavailable", httpStatus: 503 };
      const now = clock();
      const result = await subscriptions.subscribe({ email, channel: input.channel as NewsletterChannel, locale: normalizeLocale(input.locale), sourcePath: input.sourcePath, now });
      if (result.status === "already_subscribed") return { status: result.status, httpStatus: 200 };
      if (result.status === "rate_limited") return { status: result.status, httpStatus: 429, retryAfterSeconds: 60 };
      if (result.status === "suppressed") return { status: result.status, httpStatus: 400 };
      if (!result.deliveryId || config.mode === "off") return { status: "confirmation_failed", httpStatus: 503 };
      await queue.sendNext({ id: result.deliveryId, policy: { mode: config.mode, testRecipients: config.testRecipients }, provider: sender, now });
      const status = await queue.status(result.deliveryId);
      if (["accepted", "delivered", "delayed"].includes(status ?? "")) return { status: "pending_confirmation", httpStatus: 202 };
      return { status: "confirmation_failed", httpStatus: 503, retryAfterSeconds: 60 };
    },
  };
}

export function getNewsletterRuntime() {
  return createNewsletterRuntime({ sql: getNewsletterDatabase(), config: readNewsletterConfig() });
}

function infrastructureFailure(error: unknown, operation: string): NewsletterActionState {
  const known = error instanceof Error && error.message === "newsletter_database_not_configured";
  const candidate = error && typeof error === "object" && "code" in error ? String(error.code) : "internal_error";
  const code = /^[A-Za-z0-9_]{1,64}$/.test(candidate) ? candidate : "internal_error";
  console.error("newsletter_operation_failed", { operation, code: known ? "database_not_configured" : code });
  return { status: known ? "database_not_configured" : "service_unavailable" };
}

export async function subscribeNewsletter(input: NewsletterSubscribeRequest): Promise<NewsletterSubscribeResponse> {
  const invalid = validateRequest(input);
  if (invalid) return invalid;
  const config = readNewsletterConfig();
  if (!config.sendConfigured || !recipientAllowed(config, input.email)) return { status: "service_unavailable", httpStatus: 503 };
  try { return await getNewsletterRuntime().subscribe(input); }
  catch (error) { return { ...infrastructureFailure(error, "subscribe"), httpStatus: 503 }; }
}

function plausibleToken(value: string) { return /^[a-zA-Z0-9_-]{16,256}$/.test(value); }

export async function inspectNewsletterConfirmation(token: string): Promise<NewsletterActionState> {
  if (!plausibleToken(token)) return { status: "invalid" };
  try { return await getNewsletterRuntime().subscriptions.inspectConfirmation(token); }
  catch (error) { return infrastructureFailure(error, "inspect_confirmation"); }
}

export async function confirmNewsletter(token: string, channels?: NewsletterChannel[]): Promise<NewsletterActionState> {
  if (!plausibleToken(token)) return { status: "invalid" };
  try { return await getNewsletterRuntime().subscriptions.confirm(token, channels); }
  catch (error) { return infrastructureFailure(error, "confirm"); }
}

export async function inspectNewsletterUnsubscribe(token: string): Promise<NewsletterActionState> {
  if (!plausibleToken(token)) return { status: "not_found" };
  try { return await getNewsletterRuntime().subscriptions.inspectUnsubscribe(token); }
  catch (error) { return infrastructureFailure(error, "inspect_unsubscribe"); }
}

export async function unsubscribeNewsletter(token: string): Promise<NewsletterActionState> {
  if (!plausibleToken(token)) return { status: "not_found" };
  try { return await getNewsletterRuntime().subscriptions.unsubscribe(token); }
  catch (error) { return infrastructureFailure(error, "unsubscribe"); }
}
