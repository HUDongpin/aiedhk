import { NextResponse } from "next/server";
import { normalizeLocale } from "@/lib/i18n";
import { getPublishedResearchPaperBySlug, getRelatedPublishedPapers } from "@/lib/research-data";

interface RouteContext {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-dynamic";

export async function GET(request: Request, { params }: RouteContext) {
  const { slug } = await params;
  const locale = normalizeLocale(new URL(request.url).searchParams.get("language"));
  const paper = await getPublishedResearchPaperBySlug(slug, locale);

  if (!paper) {
    return NextResponse.json({ error: "Research news item not found." }, { status: 404 });
  }

  return NextResponse.json({
    language: locale,
    item: paper,
    related: await getRelatedPublishedPapers(paper, locale, 3),
  });
}
