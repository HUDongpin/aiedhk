import { randomUUID } from "node:crypto";
import { readFile } from "node:fs/promises";
import postgres from "postgres";

export async function isolatedNewsletterDatabase(url: string) {
  const schema = `newsletter_test_${randomUUID().replaceAll("-", "")}`;
  const admin = postgres(url, { max: 1, onnotice: () => {} });
  let sql: ReturnType<typeof postgres> | undefined;
  let created = false;
  async function close() {
    try { await sql?.end({ timeout: 1 }); }
    finally {
      try {
        if (created) { await admin.unsafe(`drop schema if exists ${schema} cascade`); created = false; }
      } finally { await admin.end({ timeout: 1 }); }
    }
  }
  try {
    await admin.begin(async (tx) => {
      await tx`select pg_advisory_xact_lock(7862134)`;
      await tx`create extension if not exists pgcrypto with schema public`;
    });
    await admin.unsafe(`create schema ${schema}`);
    created = true;
    sql = postgres(url, { max: 3, onnotice: () => {}, connection: { search_path: `${schema},public` } });
    await sql.unsafe(await readFile("migrations/001_newsletter_subscribers.sql", "utf8"));
    await sql.unsafe(await readFile("migrations/003_newsletter_channels.sql", "utf8"));
    return { sql, close };
  } catch (error) {
    await close().catch(() => {});
    throw error;
  }
}
