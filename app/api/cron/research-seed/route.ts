import { NextRequest, NextResponse } from "next/server";
import { seedReviewedResearchPapers } from "@/lib/research-seed";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret) {
    return NextResponse.json({ status: "cron_not_configured", error: "CRON_SECRET is not configured." }, { status: 503 });
  }

  if (request.headers.get("authorization") !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ status: "unauthorized" }, { status: 401 });
  }

  const result = await seedReviewedResearchPapers();
  const status = result.status === "database_not_configured" ? 503 : 200;
  return NextResponse.json(result, { status });
}
