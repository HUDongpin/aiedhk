import { NextRequest, NextResponse } from "next/server";
import { getDictionary, normalizeLocale } from "@/lib/i18n";
import { filterPublishedResearchPapers, getResearchYears, isPaperType } from "@/lib/research-data";
import { PAPER_TYPES } from "@/lib/types";
import { slugify } from "@/lib/utils";

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

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const errors: string[] = [];
  const requiredStringFields = ["title", "venue", "shortSummary", "fullSummary"];

  for (const field of requiredStringFields) {
    if (typeof body[field] !== "string" || body[field].trim().length === 0) {
      errors.push(`${field} is required.`);
    }
  }

  if (!Array.isArray(body.authors) || body.authors.some((author: unknown) => typeof author !== "string")) {
    errors.push("authors must be an array of strings.");
  }

  const year = Number(body.year);
  if (!Number.isInteger(year) || year < 1990 || year > 2100) {
    errors.push("year must be a valid year.");
  }

  if (typeof body.type !== "string" || !isPaperType(body.type)) {
    errors.push(`type must be one of: ${PAPER_TYPES.map((type) => type.value).join(", ")}.`);
  }

  if (errors.length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  const preview = {
    id: `draft-${Date.now()}`,
    slug: slugify(body.title),
    title: body.title.trim(),
    authors: body.authors,
    venue: body.venue.trim(),
    year,
    type: body.type,
    status: "accepted-as-mock-draft",
  };

  return NextResponse.json(
    {
      message:
        "Mock endpoint accepted the paper draft. Connect this route to a database, review workflow, and summarization pipeline before production use.",
      preview,
    },
    { status: 201 }
  );
}
