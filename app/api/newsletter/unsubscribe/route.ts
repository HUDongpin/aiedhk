import { NextRequest, NextResponse } from "next/server";
import { getLocaleMeta, normalizeLocale, type Locale } from "@/lib/i18n";
import { DatabaseNotConfiguredError, unsubscribeFromResearchNewsletter, type UnsubscribeResult } from "@/lib/newsletter";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Outcome = UnsubscribeResult | "missing_token" | "database_not_configured" | "error";

interface UnsubscribeCopy {
  title: string;
  body: Record<Outcome, string>;
  home: string;
}

const enCopy: UnsubscribeCopy = {
  title: "AIEDHK Research News",
  body: {
    unsubscribed: "You have been unsubscribed from the AIEDHK weekly Research News email. You will no longer receive it.",
    already_unsubscribed: "You were already unsubscribed. No further Research News emails will be sent to this address.",
    not_found: "This unsubscribe link is invalid or has expired. If you keep receiving emails, please contact us.",
    missing_token: "This unsubscribe link is missing its token and cannot be processed.",
    database_not_configured: "The subscription service is not available right now. Please try again later.",
    error: "Something went wrong while processing your request. Please try again later.",
  },
  home: "Return to AIEDHK",
};

const copyByLocale: Partial<Record<Locale, UnsubscribeCopy>> = {
  en: enCopy,
  "zh-hant": {
    title: "AIEDHK 研究新聞",
    body: {
      unsubscribed: "你已取消訂閱 AIEDHK 每週研究新聞電郵，往後不會再收到相關郵件。",
      already_unsubscribed: "你此前已取消訂閱，本地址不會再收到研究新聞電郵。",
      not_found: "此取消訂閱連結無效或已過期。若你仍持續收到郵件，請與我們聯絡。",
      missing_token: "此取消訂閱連結缺少識別碼，無法處理。",
      database_not_configured: "訂閱服務目前無法使用，請稍後再試。",
      error: "處理你的請求時發生問題，請稍後再試。",
    },
    home: "返回 AIEDHK",
  },
  "zh-hans": {
    title: "AIEDHK 研究新闻",
    body: {
      unsubscribed: "你已取消订阅 AIEDHK 每周研究新闻邮件，之后不会再收到相关邮件。",
      already_unsubscribed: "你此前已取消订阅，本地址不会再收到研究新闻邮件。",
      not_found: "此取消订阅链接无效或已过期。若你仍持续收到邮件，请与我们联系。",
      missing_token: "此取消订阅链接缺少识别码，无法处理。",
      database_not_configured: "订阅服务目前无法使用，请稍后再试。",
      error: "处理你的请求时发生问题，请稍后再试。",
    },
    home: "返回 AIEDHK",
  },
};

function resolveCopy(locale: Locale): UnsubscribeCopy {
  return copyByLocale[locale] ?? enCopy;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function statusCodeFor(outcome: Outcome) {
  switch (outcome) {
    case "unsubscribed":
    case "already_unsubscribed":
      return 200;
    case "not_found":
      return 404;
    case "missing_token":
      return 400;
    case "database_not_configured":
      return 503;
    default:
      return 500;
  }
}

async function resolveOutcome(token: string): Promise<Outcome> {
  if (!token.trim()) {
    return "missing_token";
  }

  try {
    return await unsubscribeFromResearchNewsletter(token);
  } catch (error) {
    if (error instanceof DatabaseNotConfiguredError) {
      return "database_not_configured";
    }
    console.error("Newsletter unsubscribe failed", error);
    return "error";
  }
}

function confirmationPage(locale: Locale, outcome: Outcome) {
  const copy = resolveCopy(locale);
  const meta = getLocaleMeta(locale);
  const message = copy.body[outcome];

  return `<!doctype html>
<html lang="${meta.htmlLang}" dir="${meta.dir}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex" />
    <title>${escapeHtml(copy.title)}</title>
    <style>
      body { margin: 0; background: #f1f5f9; color: #0f172a; font: 400 16px/1.7 -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif; }
      main { max-width: 560px; margin: 12vh auto 0; padding: 40px 28px; background: #ffffff; border: 1px solid #dbe4ee; border-radius: 20px; box-shadow: 0 24px 60px rgba(15, 23, 42, 0.08); text-align: center; }
      p.eyebrow { margin: 0 0 12px; color: #0f5ea8; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; font-size: 12px; }
      p.message { margin: 0 0 28px; }
      a.home { display: inline-block; padding: 12px 22px; border-radius: 999px; background: #0f5ea8; color: #ffffff; font-weight: 700; text-decoration: none; }
    </style>
  </head>
  <body>
    <main>
      <p class="eyebrow">${escapeHtml(copy.title)}</p>
      <p class="message">${escapeHtml(message)}</p>
      <a class="home" href="/${locale}">${escapeHtml(copy.home)}</a>
    </main>
  </body>
</html>`;
}

function readToken(request: NextRequest) {
  return request.nextUrl.searchParams.get("token") ?? "";
}

// Human-facing unsubscribe link from the email footer.
export async function GET(request: NextRequest) {
  const locale = normalizeLocale(request.nextUrl.searchParams.get("language"));
  const outcome = await resolveOutcome(readToken(request));

  return new NextResponse(confirmationPage(locale, outcome), {
    status: statusCodeFor(outcome),
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

// RFC 8058 one-click unsubscribe target (List-Unsubscribe-Post).
export async function POST(request: NextRequest) {
  const outcome = await resolveOutcome(readToken(request));

  return NextResponse.json(
    { status: outcome },
    {
      status: statusCodeFor(outcome),
      headers: { "cache-control": "no-store" },
    }
  );
}
