import { NextRequest, NextResponse } from "next/server";
import { getDictionary, normalizeLocale } from "@/lib/i18n";
import { filterPublishedResearchPapers, getResearchYears } from "@/lib/research-data";
import { PAPER_TYPES } from "@/lib/types";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const locale = normalizeLocale(searchParams.get("language"));
  const dictionary = getDictionary(locale);
  const page = Number(searchParams.get("page") ?? "1");
  const pageSize = Number(searchParams.get("pageSize") ?? "6");

  const result = await filterPublishedResearchPapers({
    q: searchParams.get("q") ?? undefined,
    type: searchParams.get("type") ?? undefined,
    year: searchParams.get("year") ?? undefined,
    page,
    pageSize,
  }, locale);
  const years = await getResearchYears();

  return NextResponse.json({
    language: locale,
    ...result,
    filters: {
      paperTypes: PAPER_TYPES.map((type) => ({ value: type.value, label: dictionary.paperTypes[type.value] })),
      years,
    },
  });
}

// Research News drafts are created only by the automated ingestion pipeline
// (GET /api/cron/research-ingest) and curated through the authenticated admin
// review workflow (/admin/research-news). The previous public POST here never
// persisted anything, so it is retired to avoid advertising a phantom write API.
export function POST() {
  return NextResponse.json(
    {
      status: "gone",
      error:
        "Public research draft creation has been removed. Drafts are produced by the weekly ingestion cron and curated in the admin review workflow.",
      ingestion: "/api/cron/research-ingest",
      review: "/admin/research-news",
    },
    { status: 410 }
  );
}
