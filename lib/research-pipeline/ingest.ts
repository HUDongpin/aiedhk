import type { ResearchCandidate } from "@/lib/types";
import { generateResearchPaperDraft } from "./generation";
import {
  completeIngestionRun,
  createIngestionRun,
  failIngestionRun,
  insertCandidateIfNew,
  insertDraftForCandidate,
} from "./store";
import { crawlResearchSources, flattenSourceResults } from "./source-adapters";

export interface RunResearchIngestionInput {
  dryRun?: boolean;
  limit?: number;
  query?: string;
  fromDate?: string;
  toDate?: string;
}

export interface RunResearchIngestionResult {
  status: "dry_run" | "completed" | "database_not_configured" | "failed";
  runId?: string | null;
  windowStart: string;
  windowEnd: string;
  totalCandidates: number;
  draftedCount: number;
  skippedCount: number;
  sourceErrors: Array<{ source: string; error: string }>;
  candidates: Array<Pick<ResearchCandidate, "title" | "sourceKey" | "sourceUrl" | "relevanceScore" | "scoreReasons" | "doi">>;
  error?: string;
}

function defaultWindow(toDate = new Date().toISOString().slice(0, 10)) {
  const from = new Date(`${toDate}T00:00:00.000Z`);
  from.setDate(from.getDate() - 14);
  return { fromDate: from.toISOString().slice(0, 10), toDate };
}

function publicCandidate(candidate: ResearchCandidate) {
  return {
    title: candidate.title,
    sourceKey: candidate.sourceKey,
    sourceUrl: candidate.sourceUrl,
    relevanceScore: candidate.relevanceScore,
    scoreReasons: candidate.scoreReasons,
    doi: candidate.doi,
  };
}

export async function runResearchIngestion(input: RunResearchIngestionInput = {}): Promise<RunResearchIngestionResult> {
  const limit = Math.min(Math.max(input.limit ?? 12, 1), 25);
  const window = defaultWindow(input.toDate);
  const windowStart = input.fromDate ?? window.fromDate;
  const windowEnd = input.toDate ?? window.toDate;
  const dryRun = Boolean(input.dryRun);

  const sourceResults = await crawlResearchSources({
    query: input.query,
    fromDate: windowStart,
    toDate: windowEnd,
    limit: 20,
  });
  const sourceErrors = sourceResults
    .filter((result) => result.error)
    .map((result) => ({ source: result.key, error: result.error ?? "unknown source error" }));
  const candidates = flattenSourceResults(sourceResults)
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, limit);

  if (dryRun) {
    return {
      status: "dry_run",
      windowStart,
      windowEnd,
      totalCandidates: candidates.length,
      draftedCount: 0,
      skippedCount: 0,
      sourceErrors,
      candidates: candidates.map(publicCandidate),
    };
  }

  let runId: string | null = null;
  try {
    runId = await createIngestionRun({
      mode: "live",
      sourceScope: "broad-ai-education",
      windowStart,
      windowEnd,
    });
  } catch (error) {
    return {
      status: "database_not_configured",
      runId: null,
      windowStart,
      windowEnd,
      totalCandidates: candidates.length,
      draftedCount: 0,
      skippedCount: candidates.length,
      sourceErrors,
      candidates: candidates.map(publicCandidate),
      error: error instanceof Error ? error.message : "DATABASE_URL is not configured or research pipeline tables are unavailable.",
    };
  }

  if (!runId) {
    return {
      status: "database_not_configured",
      runId: null,
      windowStart,
      windowEnd,
      totalCandidates: candidates.length,
      draftedCount: 0,
      skippedCount: candidates.length,
      sourceErrors,
      candidates: candidates.map(publicCandidate),
      error: "DATABASE_URL is not configured or research pipeline tables are unavailable.",
    };
  }

  let draftedCount = 0;
  let skippedCount = 0;

  try {
    for (const candidate of candidates) {
      const inserted = await insertCandidateIfNew(runId, candidate);
      if (inserted.status !== "inserted" || !inserted.id) {
        skippedCount += 1;
        continue;
      }

      const draft = await generateResearchPaperDraft(candidate);
      const paperId = await insertDraftForCandidate(inserted.id, draft);
      if (paperId) {
        draftedCount += 1;
      } else {
        skippedCount += 1;
      }
    }

    await completeIngestionRun(runId, {
      totalCandidates: candidates.length,
      draftedCount,
      skippedCount,
      sourceErrors,
    });

    return {
      status: "completed",
      runId,
      windowStart,
      windowEnd,
      totalCandidates: candidates.length,
      draftedCount,
      skippedCount,
      sourceErrors,
      candidates: candidates.map(publicCandidate),
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "unknown ingestion error";
    await failIngestionRun(runId, message);
    return {
      status: "failed",
      runId,
      windowStart,
      windowEnd,
      totalCandidates: candidates.length,
      draftedCount,
      skippedCount,
      sourceErrors,
      candidates: candidates.map(publicCandidate),
      error: message,
    };
  }
}
