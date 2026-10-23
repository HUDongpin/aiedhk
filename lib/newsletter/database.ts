import postgres from "postgres";
import { postgresConnectionOptions } from "@/lib/db";

export type NewsletterSql = ReturnType<typeof postgres>;
export type NewsletterTransaction = postgres.TransactionSql;
// postgres.js serializes JSON parameters itself; passing a JSON string would double-encode it.
export function databaseJson(value: unknown): postgres.JSONValue {
  const serialized = JSON.stringify(value);
  if (serialized === undefined) throw new Error("invalid_newsletter_json");
  return JSON.parse(serialized);
}
let cached: { url: string; sql: NewsletterSql } | undefined;

export function getNewsletterDatabase(): NewsletterSql {
  const url = process.env.NEWSLETTER_DATABASE_URL || process.env.DATABASE_URL;
  if (!url) throw new Error("newsletter_database_not_configured");
  if (!cached || cached.url !== url) {
    cached = { url, sql: postgres(url, {
      max: 3,
      ...postgresConnectionOptions(url),
    }) };
  }
  return cached.sql;
}
