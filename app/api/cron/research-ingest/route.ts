import { NextRequest, NextResponse } from "next/server";
import { runResearchIngestion } from "@/lib/research-pipeline/ingest";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret) {
    return NextResponse.json({ status: "cron_not_configured", error: "CRON_SECRET is not configured." }, { status: 503 });
  }

  if (request.headers.get("authorization") !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ status: "unauthorized" }, { status: 401 });
  }

  const { searchParams } = request.nextUrl;
  const result = await runResearchIngestion({
    dryRun: searchParams.get("dryRun") === "1" || searchParams.get("dryRun") === "true",
    limit: Number(searchParams.get("limit") ?? "12"),
    query: searchParams.get("q") ?? undefined,
    fromDate: searchParams.get("fromDate") ?? undefined,
    toDate: searchParams.get("toDate") ?? undefined,
  });

  const status = result.status === "failed" ? 500 : result.status === "database_not_configured" ? 503 : 200;
  return NextResponse.json(result, { status });
}
