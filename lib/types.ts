export const PAPER_TYPES = [
  { value: "journal", defaultLabel: "Journal Paper" },
  { value: "conference", defaultLabel: "Conference Paper" },
  { value: "review", defaultLabel: "Review" },
  { value: "tool-dataset", defaultLabel: "Tool / Dataset" },
  { value: "policy-ethics", defaultLabel: "Industry" },
] as const;

export type PaperType = (typeof PAPER_TYPES)[number]["value"];

export interface ResearchPaper {
  id: string;
  slug: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: PaperType;
  tags: string[];
  image: string;
  imageAlt: string;
  summaryImage?: string;
  summaryImageAlt?: string;
  summaryAudio?: string;
  summaryAudioTitle?: string;
  shortSummary: string;
  fullSummary: string;
  keyTakeaways: string[];
  whyItMatters: string;
  sourceUrl: string;
  sourceUrls?: Array<{
    label: string;
    url: string;
  }>;
  createdAt: string;
}

export type ResearchPaperStatus = "draft" | "approved" | "published" | "rejected" | "archived";

export type ResearchCandidateStatus = "candidate" | "drafted" | "rejected" | "skipped";

export interface ResearchCandidate {
  id?: string;
  runId?: string;
  sourceKey: string;
  externalId?: string;
  doi?: string;
  openalexId?: string;
  semanticScholarId?: string;
  arxivId?: string;
  title: string;
  authors: string[];
  abstract?: string;
  venue?: string;
  publicationYear?: number;
  publicationDate?: string;
  sourceUrl: string;
  landingUrl?: string;
  openAccessUrl?: string;
  isOpenAccess?: boolean;
  rawMetadata?: unknown;
  normalizedTitle: string;
  relevanceScore: number;
  scoreReasons: string[];
  draftStatus?: ResearchCandidateStatus;
}

export interface ResearchPaperDraft extends Omit<ResearchPaper, "id" | "createdAt"> {
  doi?: string;
  publicationDate?: string;
  confidenceNotes?: string;
  generationPromptVersion: string;
  generationModel: string;
  generationMetadata?: Record<string, unknown>;
}

export interface AdminResearchPaper extends ResearchPaper {
  status: ResearchPaperStatus;
  doi?: string | null;
  publicationDate?: string | null;
  confidenceNotes?: string | null;
  generationPromptVersion?: string | null;
  generationModel?: string | null;
  reviewedBy?: string | null;
  approvedAt?: string | null;
  publishedAt?: string | null;
  updatedAt: string;
  candidate?: {
    id: string;
    abstract?: string | null;
    sourceKey: string;
    relevanceScore?: number | null;
    scoreReasons: string[];
  } | null;
}

export interface ResearchFilterOptions {
  q?: string;
  type?: string;
  year?: string;
  page?: number;
  pageSize?: number;
}

export interface ResearchFilterResult {
  items: ResearchPaper[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
