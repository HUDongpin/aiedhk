import { NextRequest, NextResponse } from "next/server";
import { normalizeLocale } from "@/lib/i18n";
import { buildWeeklyResearchDigest } from "@/lib/newsletter-digest";
import { DatabaseNotConfiguredError, getActiveResearchNewsletterSubscribers, type NewsletterSubscriber } from "@/lib/newsletter";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function digestText(origin: string, locale: string, items: Awaited<ReturnType<typeof buildWeeklyResearchDigest>>["items"]) {
  const lines = [
    "AIEDHK Weekly Research News",
    "",
    ...items.flatMap((item, index) => [
      `${index + 1}. ${item.title}`,
      `${item.authors.join(", ")} — ${item.venue}, ${item.year}`,
      item.shortSummary,
      `${origin}/${locale}/news/${item.slug}`,
      "",
    ]),
  ];
  return lines.join("\n");
}

function digestHtml(origin: string, locale: string, items: Awaited<ReturnType<typeof buildWeeklyResearchDigest>>["items"]) {
  const body = items
    .map(
      (item) => `
        <article style="margin:0 0 24px;padding:0 0 20px;border-bottom:1px solid #dbe4ee;">
          <p style="margin:0 0 6px;color:#0f5ea8;font:700 12px/1.4 Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase;">${escapeHtml(item.venue)} · ${item.year}</p>
          <h2 style="margin:0 0 8px;color:#0f172a;font:800 20px/1.25 Arial,sans-serif;">${escapeHtml(item.title)}</h2>
          <p style="margin:0 0 10px;color:#64748b;font:400 14px/1.6 Arial,sans-serif;">${escapeHtml(item.authors.join(", "))}</p>
          <p style="margin:0 0 12px;color:#334155;font:400 15px/1.7 Arial,sans-serif;">${escapeHtml(item.shortSummary)}</p>
          <a href="${origin}/${locale}/news/${item.slug}" style="color:#0f5ea8;font:700 14px/1.4 Arial,sans-serif;">Read summary</a>
        </article>
      `
    )
    .join("");

  return `
    <main style="max-width:680px;margin:0 auto;padding:28px 20px;background:#ffffff;">
      <p style="margin:0 0 8px;color:#0f5ea8;font:800 12px/1.4 Arial,sans-serif;letter-spacing:.12em;text-transform:uppercase;">AIEDHK</p>
      <h1 style="margin:0 0 20px;color:#0f172a;font:900 28px/1.2 Arial,sans-serif;">Weekly Research News</h1>
      ${body}
      <p style="margin:24px 0 0;color:#64748b;font:400 12px/1.6 Arial,sans-serif;">You are receiving this because you subscribed to the AIEDHK weekly research trial.</p>
    </main>
  `;
}

async function sendDigestEmail(input: {
  subscriber: NewsletterSubscriber;
  origin: string;
  from: string;
  apiKey: string;
  digest: Awaited<ReturnType<typeof buildWeeklyResearchDigest>>;
}) {
  if (input.digest.items.length === 0) return { status: "skipped_empty_digest" };

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "authorization": `Bearer ${input.apiKey}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from: input.from,
      to: [input.subscriber.email],
      subject: "AIEDHK Weekly Research News",
      text: digestText(input.origin, input.subscriber.locale, input.digest.items),
      html: digestHtml(input.origin, input.subscriber.locale, input.digest.items),
    }),
  });

  if (!response.ok) {
    return { status: "failed", error: `HTTP ${response.status}` };
  }

  return { status: "sent" };
}

export async function GET(request: NextRequest) {
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret) {
    return NextResponse.json(
      { status: "cron_not_configured", error: "CRON_SECRET is not configured." },
      { status: 503 }
    );
  }

  if (request.headers.get("authorization") !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ status: "unauthorized" }, { status: 401 });
  }

  const locale = normalizeLocale(request.nextUrl.searchParams.get("language"));
  const dryRun = request.nextUrl.searchParams.get("dryRun") === "1" || request.nextUrl.searchParams.get("dryRun") === "true";
  const digest = await buildWeeklyResearchDigest(locale);
  const resendApiKey = process.env.RESEND_API_KEY;
  const from = process.env.NEWSLETTER_FROM;
  const origin = request.nextUrl.origin;

  if (dryRun || !resendApiKey || !from) {
    return NextResponse.json({
      status: "dry_run",
      sendEnabled: Boolean(resendApiKey && from),
      provider: resendApiKey && from ? "resend" : "resend_not_configured",
      language: locale,
      digest,
    });
  }

  try {
    const subscribers = await getActiveResearchNewsletterSubscribers();
    const matchingSubscribers = subscribers.filter((subscriber) => subscriber.locale === locale);
    const deliveries = await Promise.all(
      matchingSubscribers.map((subscriber) => sendDigestEmail({ subscriber, origin, from, apiKey: resendApiKey, digest }))
    );
    const sentCount = deliveries.filter((delivery) => delivery.status === "sent").length;
    const failedCount = deliveries.filter((delivery) => delivery.status === "failed").length;

    return NextResponse.json({
      status: failedCount > 0 ? "completed_with_delivery_errors" : "sent",
      provider: "resend",
      language: locale,
      subscriberCount: matchingSubscribers.length,
      sentCount,
      failedCount,
      digest,
    });
  } catch (error) {
    if (error instanceof DatabaseNotConfiguredError) {
      return NextResponse.json({ status: "database_not_configured", error: "DATABASE_URL is not configured." }, { status: 503 });
    }
    return NextResponse.json({ status: "send_failed", error: error instanceof Error ? error.message : "unknown error" }, { status: 500 });
  }
}
