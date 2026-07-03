import { NextResponse } from "next/server";
import { locales } from "@/lib/i18n";
import { getPublishedResearchPapers } from "@/lib/research-data";

export async function GET() {
  const papers = await getPublishedResearchPapers("en");
  return NextResponse.json({
    status: "ok",
    service: "AIEDHK website template",
    locales,
    researchNewsCount: papers.length,
    timestamp: new Date().toISOString(),
  });
}
