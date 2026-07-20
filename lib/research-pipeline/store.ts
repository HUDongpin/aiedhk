import { getDatabaseClient, isDatabaseConfigured } from "@/lib/db";
import { normalizeLocale, type Locale } from "@/lib/i18n";
import type {
  AdminResearchPaper,
  PaperType,
  ResearchCandidate,
  ResearchFilterOptions,
  ResearchFilterResult,
  ResearchPaper,
  ResearchPaperDraft,
  ResearchPaperStatus,
} from "@/lib/types";
import { clampPage } from "@/lib/utils";
import { createFallbackLocalization, generateResearchPaperDraft } from "./generation";
import { createUniqueSlug, isValidPaperType, normalizeDoi } from "./scoring";

type SqlClient = NonNullable<ReturnType<typeof getDatabaseClient>>;

interface PaperRow {
  id: string;
  slug: string;
  title: string;
  authors: unknown;
  venue: string;
  year: number;
  type: PaperType;
  tags: unknown;
  image: string;
  image_alt: string;
  short_summary: string;
  full_summary: string;
  key_takeaways: unknown;
  why_it_matters: string;
  source_url: string;
  created_at: string | Date;
  updated_at?: string | Date;
  status?: ResearchPaperStatus;
  doi?: string | null;
  publication_date?: string | Date | null;
  confidence_notes?: string | null;
  generation_prompt_version?: string | null;
  generation_model?: string | null;
  reviewed_by?: string | null;
  approved_at?: string | Date | null;
  published_at?: string | Date | null;
  candidate_id?: string | null;
  candidate_abstract?: string | null;
  source_key?: string | null;
  relevance_score?: number | null;
  score_reasons?: unknown;
}

export interface ReviewPaperInput {
  title?: string;
  authors?: string[];
  venue?: string;
  year?: number;
  type?: string;
  tags?: string[];
  image?: string;
  imageAlt?: string;
  shortSummary?: string;
  fullSummary?: string;
  keyTakeaways?: string[];
  whyItMatters?: string;
  sourceUrl?: string;
  doi?: string;
  publicationDate?: string;
  confidenceNotes?: string;
  notes?: string;
}

export type ReviewAction = "save" | "approve" | "publish" | "reject" | "unpublish" | "archive" | "regenerate";

function toStringArray(value: unknown) {
  if (Array.isArray(value)) return value.filter((item): item is string => typeof item === "string").map((item) => item.trim()).filter(Boolean);
  if (typeof value === "string") {
    try {
      return toStringArray(JSON.parse(value));
    } catch {
      return value.split(/[\n,]/).map((item) => item.trim()).filter(Boolean);
    }
  }
  return [];
}

function toPlainObject(value: unknown) {
  if (value && typeof value === "object" && !Array.isArray(value)) return value as Record<string, unknown>;
  return {};
}

function toDateString(value?: string | Date | null) {
  if (!value) return new Date().toISOString().slice(0, 10);
  return new Date(value).toISOString().slice(0, 10);
}

function toIsoString(value?: string | Date | null) {
  return value ? new Date(value).toISOString() : null;
}

function rowToResearchPaper(row: PaperRow): ResearchPaper {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    authors: toStringArray(row.authors),
    venue: row.venue,
    year: row.year,
    type: row.type,
    tags: toStringArray(row.tags),
    image: row.image,
    imageAlt: row.image_alt,
    shortSummary: row.short_summary,
    fullSummary: row.full_summary,
    keyTakeaways: toStringArray(row.key_takeaways),
    whyItMatters: row.why_it_matters,
    sourceUrl: row.source_url,
    createdAt: toDateString(row.published_at ?? row.created_at),
  };
}

function rowToAdminResearchPaper(row: PaperRow): AdminResearchPaper {
  return {
    ...rowToResearchPaper(row),
    status: row.status ?? "draft",
    doi: row.doi,
    publicationDate: row.publication_date ? toDateString(row.publication_date) : null,
    confidenceNotes: row.confidence_notes,
    generationPromptVersion: row.generation_prompt_version,
    generationModel: row.generation_model,
    reviewedBy: row.reviewed_by,
    approvedAt: toIsoString(row.approved_at),
    publishedAt: toIsoString(row.published_at),
    updatedAt: toIsoString(row.updated_at) ?? toIsoString(row.created_at) ?? new Date().toISOString(),
    candidate: row.candidate_id
      ? {
          id: row.candidate_id,
          abstract: row.candidate_abstract,
          sourceKey: row.source_key ?? "unknown",
          relevanceScore: row.relevance_score,
          scoreReasons: toStringArray(row.score_reasons),
        }
      : null,
  };
}

function canUseDatabase() {
  return isDatabaseConfigured() && Boolean(getDatabaseClient());
}

async function tryDatabase<T>(operation: (sql: SqlClient) => Promise<T>) {
  const sql = getDatabaseClient();
  if (!sql) return null;
  try {
    return await operation(sql);
  } catch (error) {
    console.error("Research pipeline database operation failed", error instanceof Error ? error.message : "unknown error");
    return null;
  }
}

function publishedPaperSelect(locale: Locale) {
  return `
    select
      rp.id::text,
      rp.slug,
      coalesce(loc.title, rp.title) as title,
      rp.authors,
      rp.venue,
      rp.year,
      rp.type,
      coalesce(loc.tags, rp.tags) as tags,
      rp.image,
      coalesce(loc.image_alt, rp.image_alt) as image_alt,
      coalesce(loc.short_summary, rp.short_summary) as short_summary,
      coalesce(loc.full_summary, rp.full_summary) as full_summary,
      coalesce(loc.key_takeaways, rp.key_takeaways) as key_takeaways,
      coalesce(loc.why_it_matters, rp.why_it_matters) as why_it_matters,
      rp.source_url,
      rp.created_at,
      rp.published_at
    from research_papers rp
    left join research_paper_localizations loc
      on loc.research_paper_id = rp.id
      and loc.locale = '${locale}'
      and loc.status = 'published'
    where rp.status = 'published'
  `;
}

export async function getPublishedResearchPapersFromDatabase(localeInput = "en") {
  if (!canUseDatabase()) return null;
  const locale = normalizeLocale(localeInput);
  return tryDatabase(async (sql) => {
    const rows = await sql.unsafe<PaperRow[]>(`
      ${publishedPaperSelect(locale)}
      order by rp.published_at desc nulls last, rp.created_at desc
    `);
    return rows.map(rowToResearchPaper);
  });
}

export async function getPublishedResearchPaperBySlugFromDatabase(slug: string, localeInput = "en") {
  if (!canUseDatabase()) return null;
  const locale = normalizeLocale(localeInput);
  return tryDatabase(async (sql) => {
    const rows = await sql.unsafe<PaperRow[]>(
      `
        ${publishedPaperSelect(locale)}
        and rp.slug = $1
        limit 1
      `,
      [slug]
    );
    return rows[0] ? rowToResearchPaper(rows[0]) : undefined;
  });
}

export async function getPublishedResearchYearsFromDatabase() {
  if (!canUseDatabase()) return null;
  return tryDatabase(async (sql) => {
    const rows = await sql<{ year: number }[]>`
      select distinct year
      from research_papers
      where status = 'published'
      order by year desc
    `;
    return rows.map((row) => row.year);
  });
}

export async function filterPublishedResearchPapersFromDatabase(
  options: ResearchFilterOptions = {},
  localeInput = "en"
): Promise<ResearchFilterResult | null> {
  const papers = await getPublishedResearchPapersFromDatabase(localeInput);
  if (!papers) return null;

  const q = options.q?.trim().toLowerCase() ?? "";
  const type = options.type?.trim() ?? "";
  const year = options.year?.trim() ?? "";
  const rawPageSize = options.pageSize ?? 6;
  const pageSize = Number.isFinite(rawPageSize) && rawPageSize > 0 ? Math.min(Math.floor(rawPageSize), 50) : 6;

  const filtered = papers.filter((paper) => {
    const matchesType = !type || paper.type === type;
    const matchesYear = !year || String(paper.year) === year;
    const searchable = [paper.title, paper.authors.join(" "), paper.venue, paper.tags.join(" "), paper.shortSummary].join(" ").toLowerCase();
    return matchesType && matchesYear && (!q || searchable.includes(q));
  });

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const page = clampPage(options.page ?? 1, totalPages);
  const start = (page - 1) * pageSize;

  return {
    items: filtered.slice(start, start + pageSize),
    total,
    page,
    pageSize,
    totalPages,
  };
}

export async function getRelatedPublishedPapersFromDatabase(paper: ResearchPaper, localeInput = "en", limit = 3) {
  const papers = await getPublishedResearchPapersFromDatabase(localeInput);
  if (!papers) return null;
  const tagSet = new Set(paper.tags.map((tag) => tag.toLowerCase()));
  return papers
    .filter((candidate) => candidate.id !== paper.id)
    .map((candidate) => ({
      candidate,
      score: candidate.tags.reduce((total, tag) => total + (tagSet.has(tag.toLowerCase()) ? 1 : 0), 0),
    }))
    .sort((a, b) => b.score - a.score || b.candidate.year - a.candidate.year)
    .slice(0, limit)
    .map(({ candidate }) => candidate);
}

export async function createIngestionRun(input: { mode: "dry-run" | "live"; sourceScope: string; windowStart: string; windowEnd: string }) {
  const sql = getDatabaseClient();
  if (!sql) return null;
  const rows = await sql<{ id: string }[]>`
    insert into research_ingestion_runs (mode, source_scope, window_start, window_end)
    values (${input.mode}, ${input.sourceScope}, ${input.windowStart}, ${input.windowEnd})
    returning id
  `;
  return rows[0]?.id ?? null;
}

export async function completeIngestionRun(
  runId: string,
  input: { totalCandidates: number; draftedCount: number; skippedCount: number; sourceErrors: Array<Record<string, string>> }
) {
  const sql = getDatabaseClient();
  if (!sql) return;
  await sql`
    update research_ingestion_runs
    set
      status = 'completed',
      completed_at = now(),
      total_candidates = ${input.totalCandidates},
      drafted_count = ${input.draftedCount},
      skipped_count = ${input.skippedCount},
      source_errors = ${JSON.stringify(input.sourceErrors)}::jsonb
    where id = ${runId}
  `;
}

export async function failIngestionRun(runId: string, message: string) {
  const sql = getDatabaseClient();
  if (!sql) return;
  await sql`
    update research_ingestion_runs
    set status = 'failed', completed_at = now(), error_message = ${message.slice(0, 500)}
    where id = ${runId}
  `;
}

export interface IngestionRunSummary {
  id: string;
  startedAt: string;
  completedAt: string | null;
  status: string;
  mode: string;
  sourceScope: string;
  totalCandidates: number;
  draftedCount: number;
  skippedCount: number;
  sourceErrors: Array<Record<string, unknown>>;
  errorMessage: string | null;
}

function toIso(value: string | Date | null | undefined) {
  if (!value) return null;
  return value instanceof Date ? value.toISOString() : new Date(value).toISOString();
}

export async function listRecentIngestionRuns(limit = 5): Promise<IngestionRunSummary[] | null> {
  const sql = getDatabaseClient();
  if (!sql) return null;

  const rows = await sql<
    Array<{
      id: string;
      started_at: string | Date;
      completed_at: string | Date | null;
      status: string;
      mode: string;
      source_scope: string;
      total_candidates: number;
      drafted_count: number;
      skipped_count: number;
      source_errors: unknown;
      error_message: string | null;
    }>
  >`
    select id, started_at, completed_at, status, mode, source_scope, total_candidates, drafted_count, skipped_count, source_errors, error_message
    from research_ingestion_runs
    order by started_at desc
    limit ${limit}
  `;

  return rows.map((row) => ({
    id: row.id,
    startedAt: toIso(row.started_at) ?? new Date().toISOString(),
    completedAt: toIso(row.completed_at),
    status: row.status,
    mode: row.mode,
    sourceScope: row.source_scope,
    totalCandidates: row.total_candidates,
    draftedCount: row.drafted_count,
    skippedCount: row.skipped_count,
    sourceErrors: Array.isArray(row.source_errors) ? (row.source_errors as Array<Record<string, unknown>>) : [],
    errorMessage: row.error_message,
  }));
}

export async function insertCandidateIfNew(runId: string, candidate: ResearchCandidate) {
  const sql = getDatabaseClient();
  if (!sql) return { status: "skipped" as const };

  const rows = await sql<{ id: string }[]>`
    insert into research_candidates (
      run_id,
      source_key,
      external_id,
      doi,
      openalex_id,
      semantic_scholar_id,
      arxiv_id,
      title,
      authors,
      abstract,
      venue,
      publication_year,
      publication_date,
      source_url,
      landing_url,
      open_access_url,
      is_open_access,
      raw_metadata,
      normalized_title,
      relevance_score,
      score_reasons
    )
    values (
      ${runId},
      ${candidate.sourceKey},
      ${candidate.externalId ?? null},
      ${normalizeDoi(candidate.doi) ?? null},
      ${candidate.openalexId ?? null},
      ${candidate.semanticScholarId ?? null},
      ${candidate.arxivId ?? null},
      ${candidate.title},
      ${JSON.stringify(candidate.authors)}::jsonb,
      ${candidate.abstract ?? null},
      ${candidate.venue ?? null},
      ${candidate.publicationYear ?? null},
      ${candidate.publicationDate ?? null},
      ${candidate.sourceUrl},
      ${candidate.landingUrl ?? null},
      ${candidate.openAccessUrl ?? null},
      ${Boolean(candidate.isOpenAccess)},
      ${JSON.stringify(toPlainObject(candidate.rawMetadata))}::jsonb,
      ${candidate.normalizedTitle},
      ${candidate.relevanceScore},
      ${JSON.stringify(candidate.scoreReasons)}::jsonb
    )
    on conflict do nothing
    returning id
  `;

  if (rows[0]?.id) return { status: "inserted" as const, id: rows[0].id };

  const existing = await sql<{ id: string; research_paper_id: string | null }[]>`
    select id::text, research_paper_id::text
    from research_candidates
    where normalized_title = ${candidate.normalizedTitle}
       or (${normalizeDoi(candidate.doi) ?? null} is not null and lower(doi) = ${normalizeDoi(candidate.doi) ?? null})
    limit 1
  `;
  return { status: "duplicate" as const, id: existing[0]?.id, paperId: existing[0]?.research_paper_id };
}

async function createAvailableSlug(sql: SqlClient, title: string) {
  const base = createUniqueSlug(title);
  for (let index = 0; index < 10; index += 1) {
    const slug = index === 0 ? base : createUniqueSlug(title, index + 1);
    const rows = await sql<{ id: string }[]>`
      select id::text from research_papers where slug = ${slug} limit 1
    `;
    if (rows.length === 0) return slug;
  }
  return createUniqueSlug(title, Date.now());
}

export async function insertDraftForCandidate(candidateId: string, draft: ResearchPaperDraft) {
  const sql = getDatabaseClient();
  if (!sql) return null;
  const slug = await createAvailableSlug(sql, draft.title);
  const rows = await sql<{ id: string }[]>`
    insert into research_papers (
      candidate_id,
      status,
      slug,
      title,
      authors,
      venue,
      year,
      type,
      tags,
      image,
      image_alt,
      short_summary,
      full_summary,
      key_takeaways,
      why_it_matters,
      source_url,
      doi,
      publication_date,
      confidence_notes,
      generation_prompt_version,
      generation_model,
      generation_metadata
    )
    values (
      ${candidateId},
      'draft',
      ${slug},
      ${draft.title},
      ${JSON.stringify(draft.authors)}::jsonb,
      ${draft.venue},
      ${draft.year},
      ${draft.type},
      ${JSON.stringify(draft.tags)}::jsonb,
      ${draft.image},
      ${draft.imageAlt},
      ${draft.shortSummary},
      ${draft.fullSummary},
      ${JSON.stringify(draft.keyTakeaways)}::jsonb,
      ${draft.whyItMatters},
      ${draft.sourceUrl},
      ${normalizeDoi(draft.doi) ?? null},
      ${draft.publicationDate ?? null},
      ${draft.confidenceNotes ?? null},
      ${draft.generationPromptVersion},
      ${draft.generationModel},
      ${JSON.stringify(draft.generationMetadata ?? {})}::jsonb
    )
    returning id
  `;

  const paperId = rows[0]?.id;
  if (!paperId) return null;

  for (const locale of ["zh-hant", "zh-hans"] as const) {
    const localization = createFallbackLocalization(locale, draft);
    await sql`
      insert into research_paper_localizations (
        research_paper_id,
        locale,
        status,
        title,
        tags,
        image_alt,
        short_summary,
        full_summary,
        key_takeaways,
        why_it_matters,
        generation_model
      )
      values (
        ${paperId},
        ${locale},
        'draft',
        ${localization.title},
        ${JSON.stringify(localization.tags)}::jsonb,
        ${localization.imageAlt},
        ${localization.shortSummary},
        ${localization.fullSummary},
        ${JSON.stringify(localization.keyTakeaways)}::jsonb,
        ${localization.whyItMatters},
        ${localization.generationModel}
      )
      on conflict (research_paper_id, locale) do nothing
    `;
  }

  await sql`
    update research_candidates
    set draft_status = 'drafted', research_paper_id = ${paperId}
    where id = ${candidateId}
  `;

  return paperId;
}

export async function listAdminResearchPapers(status?: string) {
  if (!canUseDatabase()) return null;
  const sql = getDatabaseClient();
  if (!sql) return null;
  const normalizedStatus = status && ["draft", "approved", "published", "rejected", "archived"].includes(status) ? status : null;
  const rows = await sql.unsafe<PaperRow[]>(
    `
      select
        rp.id::text,
        rp.status,
        rp.slug,
        rp.title,
        rp.authors,
        rp.venue,
        rp.year,
        rp.type,
        rp.tags,
        rp.image,
        rp.image_alt,
        rp.short_summary,
        rp.full_summary,
        rp.key_takeaways,
        rp.why_it_matters,
        rp.source_url,
        rp.doi,
        rp.publication_date,
        rp.confidence_notes,
        rp.generation_prompt_version,
        rp.generation_model,
        rp.reviewed_by,
        rp.approved_at,
        rp.published_at,
        rp.created_at,
        rp.updated_at,
        rc.id::text as candidate_id,
        rc.abstract as candidate_abstract,
        rc.source_key,
        rc.relevance_score,
        rc.score_reasons
      from research_papers rp
      left join research_candidates rc on rc.id = rp.candidate_id
      ${normalizedStatus ? "where rp.status = $1" : ""}
      order by rp.updated_at desc, rp.created_at desc
      limit 100
    `,
    normalizedStatus ? [normalizedStatus] : []
  );
  return rows.map(rowToAdminResearchPaper);
}

export async function getAdminResearchPaper(id: string) {
  if (!canUseDatabase()) return null;
  const sql = getDatabaseClient();
  if (!sql) return null;
  const rows = await sql.unsafe<PaperRow[]>(
    `
      select
        rp.id::text,
        rp.status,
        rp.slug,
        rp.title,
        rp.authors,
        rp.venue,
        rp.year,
        rp.type,
        rp.tags,
        rp.image,
        rp.image_alt,
        rp.short_summary,
        rp.full_summary,
        rp.key_takeaways,
        rp.why_it_matters,
        rp.source_url,
        rp.doi,
        rp.publication_date,
        rp.confidence_notes,
        rp.generation_prompt_version,
        rp.generation_model,
        rp.reviewed_by,
        rp.approved_at,
        rp.published_at,
        rp.created_at,
        rp.updated_at,
        rc.id::text as candidate_id,
        rc.abstract as candidate_abstract,
        rc.source_key,
        rc.relevance_score,
        rc.score_reasons
      from research_papers rp
      left join research_candidates rc on rc.id = rp.candidate_id
      where rp.id = $1
      limit 1
    `,
    [id]
  );
  return rows[0] ? rowToAdminResearchPaper(rows[0]) : null;
}

async function recordReviewEvent(
  sql: SqlClient,
  paperId: string,
  input: { action: ReviewAction; actor: string; notes?: string; beforeStatus?: string; afterStatus?: string }
) {
  await sql`
    insert into research_review_events (research_paper_id, action, actor, notes, before_status, after_status)
    values (${paperId}, ${input.action}, ${input.actor}, ${input.notes ?? null}, ${input.beforeStatus ?? null}, ${input.afterStatus ?? null})
  `;
}

function cleanReviewInput(input: ReviewPaperInput) {
  const type = input.type && isValidPaperType(input.type) ? input.type : undefined;
  return {
    title: input.title?.trim(),
    authors: input.authors?.map((item) => item.trim()).filter(Boolean),
    venue: input.venue?.trim(),
    year: input.year,
    type,
    tags: input.tags?.map((item) => item.trim()).filter(Boolean),
    image: input.image?.trim(),
    imageAlt: input.imageAlt?.trim(),
    shortSummary: input.shortSummary?.trim(),
    fullSummary: input.fullSummary?.trim(),
    keyTakeaways: input.keyTakeaways?.map((item) => item.trim()).filter(Boolean),
    whyItMatters: input.whyItMatters?.trim(),
    sourceUrl: input.sourceUrl?.trim(),
    doi: normalizeDoi(input.doi),
    publicationDate: input.publicationDate?.trim(),
    confidenceNotes: input.confidenceNotes?.trim(),
    notes: input.notes?.trim(),
  };
}

export async function reviewResearchPaper(paperId: string, action: ReviewAction, input: ReviewPaperInput, actor = "admin") {
  const sql = getDatabaseClient();
  if (!sql) throw new Error("DATABASE_URL is not configured.");

  const currentRows = await sql<{ status: ResearchPaperStatus; candidate_id: string | null }[]>`
    select status, candidate_id::text from research_papers where id = ${paperId} limit 1
  `;
  const current = currentRows[0];
  if (!current) throw new Error("Research paper not found.");

  if (action === "regenerate") {
    if (!current.candidate_id) throw new Error("Cannot regenerate a paper without a linked candidate.");
    const candidateRows = await sql<ResearchCandidate[]>`
      select
        id::text,
        source_key as "sourceKey",
        external_id as "externalId",
        doi,
        openalex_id as "openalexId",
        semantic_scholar_id as "semanticScholarId",
        arxiv_id as "arxivId",
        title,
        authors,
        abstract,
        venue,
        publication_year as "publicationYear",
        publication_date as "publicationDate",
        source_url as "sourceUrl",
        landing_url as "landingUrl",
        open_access_url as "openAccessUrl",
        is_open_access as "isOpenAccess",
        raw_metadata as "rawMetadata",
        normalized_title as "normalizedTitle",
        relevance_score as "relevanceScore",
        score_reasons as "scoreReasons"
      from research_candidates
      where id = ${current.candidate_id}
      limit 1
    `;
    const candidate = candidateRows[0];
    if (!candidate) throw new Error("Linked candidate not found.");
    const draft = await generateResearchPaperDraft({
      ...candidate,
      authors: toStringArray(candidate.authors),
      scoreReasons: toStringArray(candidate.scoreReasons),
    });
    await sql`
      update research_papers
      set
        status = 'draft',
        title = ${draft.title},
        authors = ${JSON.stringify(draft.authors)}::jsonb,
        venue = ${draft.venue},
        year = ${draft.year},
        type = ${draft.type},
        tags = ${JSON.stringify(draft.tags)}::jsonb,
        image = ${draft.image},
        image_alt = ${draft.imageAlt},
        short_summary = ${draft.shortSummary},
        full_summary = ${draft.fullSummary},
        key_takeaways = ${JSON.stringify(draft.keyTakeaways)}::jsonb,
        why_it_matters = ${draft.whyItMatters},
        source_url = ${draft.sourceUrl},
        doi = ${draft.doi ?? null},
        publication_date = ${draft.publicationDate ?? null},
        confidence_notes = ${draft.confidenceNotes ?? null},
        generation_prompt_version = ${draft.generationPromptVersion},
        generation_model = ${draft.generationModel},
        generation_metadata = ${JSON.stringify(draft.generationMetadata ?? {})}::jsonb,
        updated_at = now()
      where id = ${paperId}
    `;
    await recordReviewEvent(sql, paperId, { action, actor, notes: input.notes, beforeStatus: current.status, afterStatus: "draft" });
    return;
  }

  const cleaned = cleanReviewInput(input);
  let nextStatus: ResearchPaperStatus = current.status;
  if (action === "approve") nextStatus = "approved";
  if (action === "publish") nextStatus = "published";
  if (action === "reject") nextStatus = "rejected";
  if (action === "unpublish") nextStatus = "approved";
  if (action === "archive") nextStatus = "archived";

  await sql`
    update research_papers
    set
      status = ${nextStatus},
      title = coalesce(${cleaned.title || null}, title),
      authors = coalesce(${cleaned.authors?.length ? JSON.stringify(cleaned.authors) : null}::jsonb, authors),
      venue = coalesce(${cleaned.venue || null}, venue),
      year = coalesce(${cleaned.year ?? null}, year),
      type = coalesce(${cleaned.type ?? null}, type),
      tags = coalesce(${cleaned.tags?.length ? JSON.stringify(cleaned.tags) : null}::jsonb, tags),
      image = coalesce(${cleaned.image || null}, image),
      image_alt = coalesce(${cleaned.imageAlt || null}, image_alt),
      short_summary = coalesce(${cleaned.shortSummary || null}, short_summary),
      full_summary = coalesce(${cleaned.fullSummary || null}, full_summary),
      key_takeaways = coalesce(${cleaned.keyTakeaways?.length ? JSON.stringify(cleaned.keyTakeaways) : null}::jsonb, key_takeaways),
      why_it_matters = coalesce(${cleaned.whyItMatters || null}, why_it_matters),
      source_url = coalesce(${cleaned.sourceUrl || null}, source_url),
      doi = ${cleaned.doi ?? null},
      publication_date = ${cleaned.publicationDate || null},
      confidence_notes = ${cleaned.confidenceNotes || null},
      reviewed_by = ${actor},
      approved_at = case when ${nextStatus} in ('approved', 'published') and approved_at is null then now() else approved_at end,
      published_at = case
        when ${nextStatus} = 'published' and published_at is null then now()
        when ${nextStatus} <> 'published' then null
        else published_at
      end,
      updated_at = now()
    where id = ${paperId}
  `;

  await recordReviewEvent(sql, paperId, {
    action,
    actor,
    notes: cleaned.notes,
    beforeStatus: current.status,
    afterStatus: nextStatus,
  });
}
