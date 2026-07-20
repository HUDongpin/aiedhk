import { randomBytes } from "node:crypto";
import { getDatabaseClient } from "@/lib/db";
import { normalizeLocale, type Locale } from "@/lib/i18n";

export const NEWSLETTER_CONSENT_VERSION = "research-news-weekly-trial-v1";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export class DatabaseNotConfiguredError extends Error {
  constructor() {
    super("DATABASE_URL is not configured.");
    this.name = "DatabaseNotConfiguredError";
  }
}

export interface SubscribeNewsletterInput {
  email: string;
  locale?: string | null;
  sourcePath?: string | null;
}

export interface SubscribeNewsletterResult {
  status: "subscribed" | "already_subscribed";
  email: string;
  locale: Locale;
}

export interface NewsletterSubscriber {
  email: string;
  locale: Locale;
  unsubscribeToken: string;
}

export type UnsubscribeResult = "unsubscribed" | "already_unsubscribed" | "not_found";

export function buildUnsubscribeUrl(origin: string, token: string) {
  return `${origin.replace(/\/+$/, "")}/api/newsletter/unsubscribe?token=${encodeURIComponent(token)}`;
}

export function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

export function isValidEmail(email: string) {
  const normalized = normalizeEmail(email);
  return normalized.length <= 254 && EMAIL_PATTERN.test(normalized);
}

function createUnsubscribeToken() {
  return randomBytes(24).toString("hex");
}

export async function subscribeToResearchNewsletter(input: SubscribeNewsletterInput): Promise<SubscribeNewsletterResult> {
  const email = normalizeEmail(input.email);
  const locale = normalizeLocale(input.locale);
  const sourcePath = input.sourcePath?.trim().slice(0, 300) || `/${locale}/news`;
  const sql = getDatabaseClient();

  if (!sql) {
    throw new DatabaseNotConfiguredError();
  }

  const inserted = await sql<{ id: string }[]>`
    insert into newsletter_subscribers (
      email,
      locale,
      status,
      source_path,
      consent_version,
      unsubscribe_token
    )
    values (
      ${email},
      ${locale},
      'active',
      ${sourcePath},
      ${NEWSLETTER_CONSENT_VERSION},
      ${createUnsubscribeToken()}
    )
    on conflict (email) do nothing
    returning id
  `;

  if (inserted.length > 0) {
    return { status: "subscribed", email, locale };
  }

  await sql`
    update newsletter_subscribers
    set
      locale = ${locale},
      status = 'active',
      source_path = ${sourcePath},
      consent_version = ${NEWSLETTER_CONSENT_VERSION},
      updated_at = now()
    where email = ${email}
  `;

  return { status: "already_subscribed", email, locale };
}

export async function getActiveResearchNewsletterSubscribers(limit = 1000): Promise<NewsletterSubscriber[]> {
  const sql = getDatabaseClient();

  if (!sql) {
    throw new DatabaseNotConfiguredError();
  }

  const rows = await sql<{ email: string; locale: string; unsubscribe_token: string }[]>`
    select email, locale, unsubscribe_token
    from newsletter_subscribers
    where status = 'active'
    order by created_at asc
    limit ${limit}
  `;

  return rows.map((row) => ({
    email: row.email,
    locale: normalizeLocale(row.locale),
    unsubscribeToken: row.unsubscribe_token,
  }));
}

export async function unsubscribeFromResearchNewsletter(token: string): Promise<UnsubscribeResult> {
  const normalized = token.trim();

  if (!normalized) {
    return "not_found";
  }

  const sql = getDatabaseClient();

  if (!sql) {
    throw new DatabaseNotConfiguredError();
  }

  const rows = await sql<{ status: string }[]>`
    select status
    from newsletter_subscribers
    where unsubscribe_token = ${normalized}
    limit 1
  `;

  if (rows.length === 0) {
    return "not_found";
  }

  if (rows[0].status === "unsubscribed") {
    return "already_unsubscribed";
  }

  await sql`
    update newsletter_subscribers
    set
      status = 'unsubscribed',
      unsubscribed_at = now(),
      updated_at = now()
    where unsubscribe_token = ${normalized}
  `;

  return "unsubscribed";
}
