import { NextRequest, NextResponse } from "next/server";
import { isValidEmail, DatabaseNotConfiguredError, subscribeToResearchNewsletter } from "@/lib/newsletter";

export const runtime = "nodejs";

function getString(value: unknown) {
  return typeof value === "string" ? value : "";
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ status: "invalid_email", error: "Invalid JSON body." }, { status: 400 });
  }

  const honeypot = getString((body as Record<string, unknown>).honeypot);
  const email = getString((body as Record<string, unknown>).email);
  const locale = getString((body as Record<string, unknown>).locale);
  const sourcePath = getString((body as Record<string, unknown>).sourcePath);

  if (honeypot.trim().length > 0) {
    return NextResponse.json({ status: "subscribed" }, { status: 201 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ status: "invalid_email", error: "Please enter a valid email address." }, { status: 400 });
  }

  try {
    const result = await subscribeToResearchNewsletter({ email, locale, sourcePath });
    const responseStatus = result.status === "subscribed" ? 201 : 200;

    return NextResponse.json(result, { status: responseStatus });
  } catch (error) {
    if (error instanceof DatabaseNotConfiguredError) {
      return NextResponse.json(
        { status: "database_not_configured", error: "DATABASE_URL is not configured." },
        { status: 503 }
      );
    }

    console.error("Research newsletter subscription failed", error);
    return NextResponse.json({ status: "subscription_failed", error: "Subscription failed." }, { status: 500 });
  }
}
