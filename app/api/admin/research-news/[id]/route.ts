import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { RESEARCH_NEWS_CACHE_TAG } from "@/lib/research-cache";
import { type ReviewAction, reviewResearchPaper } from "@/lib/research-pipeline/store";

interface RouteContext {
  params: Promise<{ id: string }>;
}

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function splitList(value: FormDataEntryValue | null) {
  return String(value ?? "")
    .split(/[\n,]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function formString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value : undefined;
}

function formNumber(formData: FormData, key: string) {
  const value = Number(formData.get(key));
  return Number.isFinite(value) ? value : undefined;
}

function isReviewAction(value: string): value is ReviewAction {
  return ["save", "approve", "publish", "reject", "unpublish", "archive", "regenerate"].includes(value);
}

export async function POST(request: NextRequest, { params }: RouteContext) {
  const { id } = await params;
  const formData = await request.formData();
  const actionValue = String(formData.get("action") ?? "save");
  const action: ReviewAction = isReviewAction(actionValue) ? actionValue : "save";
  const actor = process.env.ADMIN_USERNAME ?? "admin";

  await reviewResearchPaper(
    id,
    action,
    {
      title: formString(formData, "title"),
      authors: splitList(formData.get("authors")),
      venue: formString(formData, "venue"),
      year: formNumber(formData, "year"),
      type: formString(formData, "type"),
      tags: splitList(formData.get("tags")),
      image: formString(formData, "image"),
      imageAlt: formString(formData, "imageAlt"),
      shortSummary: formString(formData, "shortSummary"),
      fullSummary: formString(formData, "fullSummary"),
      keyTakeaways: splitList(formData.get("keyTakeaways")),
      whyItMatters: formString(formData, "whyItMatters"),
      sourceUrl: formString(formData, "sourceUrl"),
      doi: formString(formData, "doi"),
      publicationDate: formString(formData, "publicationDate"),
      confidenceNotes: formString(formData, "confidenceNotes"),
      notes: formString(formData, "notes"),
    },
    actor
  );

  revalidateTag(RESEARCH_NEWS_CACHE_TAG, { expire: 0 });
  revalidatePath("/[locale]/research-news", "page");
  revalidatePath("/[locale]/research-news/[slug]", "page");

  const redirectStatus = action === "publish" ? "published" : action === "reject" ? "rejected" : action === "archive" ? "archived" : "draft";
  return NextResponse.redirect(new URL(`/admin/research-news?status=${redirectStatus}`, request.url), { status: 303 });
}
