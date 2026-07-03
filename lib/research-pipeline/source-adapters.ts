import type { ResearchCandidate } from "@/lib/types";
import { dedupeResearchCandidates, normalizeDoi, normalizeTitle, scoreResearchCandidate } from "./scoring";

export interface ResearchSourceAdapter {
  key: string;
  name: string;
  fetchCandidates(input: ResearchSourceInput): Promise<ResearchCandidate[]>;
}

export interface ResearchSourceInput {
  query: string;
  fromDate: string;
  toDate: string;
  limit: number;
}

export interface SourceAdapterResult {
  key: string;
  candidates: ResearchCandidate[];
  error?: string;
}

const DEFAULT_QUERY = "artificial intelligence education OR AI tutoring OR learning analytics OR generative AI education";

function cleanText(value?: string | null) {
  return value?.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim() || undefined;
}

function asStringArray(value: unknown) {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string" && item.trim().length > 0) : [];
}

function toYear(value?: string | number | null) {
  const year = Number(value);
  return Number.isInteger(year) && year >= 1900 && year <= 2200 ? year : undefined;
}

function candidateWithScore(candidate: Omit<ResearchCandidate, "normalizedTitle" | "relevanceScore" | "scoreReasons">): ResearchCandidate {
  const base: ResearchCandidate = {
    ...candidate,
    doi: normalizeDoi(candidate.doi),
    authors: candidate.authors.slice(0, 12),
    normalizedTitle: normalizeTitle(candidate.title),
    relevanceScore: 0,
    scoreReasons: [],
  };
  return { ...base, ...scoreResearchCandidate(base) };
}

async function fetchWithTimeout(url: string, init: RequestInit = {}) {
  const timeoutSignal = AbortSignal.timeout(12_000);
  return fetch(url, {
    ...init,
    signal: timeoutSignal,
    headers: {
      "accept": "application/json, application/atom+xml, text/xml;q=0.9, */*;q=0.8",
      "user-agent": "AIEDHK research ingestion bot; contact=www.aied.hk",
      ...init.headers,
    },
  });
}

async function fetchJson<T>(url: string, init: RequestInit = {}) {
  const response = await fetchWithTimeout(url, init);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  return response.json() as Promise<T>;
}

function openAlexAbstract(index?: Record<string, number[]>) {
  if (!index) return undefined;
  const pairs: Array<[number, string]> = [];
  for (const [word, positions] of Object.entries(index)) {
    for (const position of positions) {
      pairs.push([position, word]);
    }
  }
  return pairs
    .sort((a, b) => a[0] - b[0])
    .map((pair) => pair[1])
    .join(" ");
}

interface OpenAlexWork {
  id?: string;
  doi?: string | null;
  title?: string;
  display_name?: string;
  publication_year?: number;
  publication_date?: string;
  abstract_inverted_index?: Record<string, number[]>;
  cited_by_count?: number;
  authorships?: Array<{ author?: { display_name?: string } }>;
  primary_location?: {
    landing_page_url?: string;
    pdf_url?: string;
    source?: { display_name?: string };
  };
  open_access?: { is_oa?: boolean; oa_url?: string | null };
}

async function fetchOpenAlexCandidates(input: ResearchSourceInput) {
  const params = new URLSearchParams({
    search: input.query || DEFAULT_QUERY,
    per_page: String(input.limit),
    sort: "publication_date:desc",
    filter: `from_publication_date:${input.fromDate},to_publication_date:${input.toDate}`,
  });
  const apiKey = process.env.OPENALEX_API_KEY;
  if (apiKey) params.set("api_key", apiKey);

  const data = await fetchJson<{ results?: OpenAlexWork[] }>(`https://api.openalex.org/works?${params.toString()}`);
  return (data.results ?? [])
    .filter((work) => work.title || work.display_name)
    .map((work) =>
      candidateWithScore({
        sourceKey: "openalex",
        externalId: work.id,
        doi: work.doi ?? undefined,
        openalexId: work.id,
        title: work.title ?? work.display_name ?? "Untitled research work",
        authors: (work.authorships ?? []).map((item) => item.author?.display_name).filter((name): name is string => Boolean(name)),
        abstract: cleanText(openAlexAbstract(work.abstract_inverted_index)),
        venue: work.primary_location?.source?.display_name,
        publicationYear: toYear(work.publication_year),
        publicationDate: work.publication_date,
        sourceUrl: work.primary_location?.landing_page_url ?? work.doi ?? work.id ?? "https://api.openalex.org/works",
        landingUrl: work.primary_location?.landing_page_url,
        openAccessUrl: work.open_access?.oa_url ?? work.primary_location?.pdf_url,
        isOpenAccess: Boolean(work.open_access?.is_oa || work.primary_location?.pdf_url),
        rawMetadata: { citedByCount: work.cited_by_count, source: "openalex" },
      })
    );
}

interface SemanticScholarPaper {
  paperId?: string;
  title?: string;
  abstract?: string;
  venue?: string;
  year?: number;
  publicationDate?: string;
  url?: string;
  openAccessPdf?: { url?: string };
  externalIds?: { DOI?: string; ArXiv?: string; CorpusId?: string };
  authors?: Array<{ name?: string }>;
  citationCount?: number;
}

async function fetchSemanticScholarCandidates(input: ResearchSourceInput) {
  const params = new URLSearchParams({
    query: input.query || DEFAULT_QUERY,
    limit: String(input.limit),
    fields: "paperId,title,abstract,venue,year,publicationDate,url,openAccessPdf,externalIds,authors,citationCount",
    publicationDateOrYear: `${input.fromDate}:${input.toDate}`,
  });
  const headers: Record<string, string> = {};
  if (process.env.SEMANTIC_SCHOLAR_API_KEY) headers["x-api-key"] = process.env.SEMANTIC_SCHOLAR_API_KEY;

  const data = await fetchJson<{ data?: SemanticScholarPaper[] }>(`https://api.semanticscholar.org/graph/v1/paper/search?${params.toString()}`, {
    headers,
  });

  return (data.data ?? [])
    .filter((paper) => paper.title)
    .map((paper) =>
      candidateWithScore({
        sourceKey: "semantic-scholar",
        externalId: paper.paperId,
        doi: paper.externalIds?.DOI,
        semanticScholarId: paper.paperId,
        arxivId: paper.externalIds?.ArXiv,
        title: paper.title ?? "Untitled research work",
        authors: (paper.authors ?? []).map((author) => author.name).filter((name): name is string => Boolean(name)),
        abstract: cleanText(paper.abstract),
        venue: paper.venue,
        publicationYear: toYear(paper.year),
        publicationDate: paper.publicationDate,
        sourceUrl: paper.url ?? (paper.externalIds?.DOI ? `https://doi.org/${paper.externalIds.DOI}` : "https://www.semanticscholar.org/"),
        landingUrl: paper.url,
        openAccessUrl: paper.openAccessPdf?.url,
        isOpenAccess: Boolean(paper.openAccessPdf?.url),
        rawMetadata: { citationCount: paper.citationCount, source: "semantic-scholar" },
      })
    );
}

interface CrossrefWork {
  DOI?: string;
  title?: string[];
  abstract?: string;
  URL?: string;
  author?: Array<{ given?: string; family?: string; name?: string }>;
  "container-title"?: string[];
  published?: { "date-parts"?: number[][] };
  published_print?: { "date-parts"?: number[][] };
  published_online?: { "date-parts"?: number[][] };
  type?: string;
  score?: number;
}

function crossrefDateParts(work: CrossrefWork) {
  return work.published_online?.["date-parts"]?.[0] ?? work.published_print?.["date-parts"]?.[0] ?? work.published?.["date-parts"]?.[0];
}

function crossrefDate(work: CrossrefWork) {
  const parts = crossrefDateParts(work);
  if (!parts?.[0]) return undefined;
  const month = String(parts[1] ?? 1).padStart(2, "0");
  const day = String(parts[2] ?? 1).padStart(2, "0");
  return `${parts[0]}-${month}-${day}`;
}

async function fetchCrossrefCandidates(input: ResearchSourceInput, sourceKey = "crossref", query = input.query || DEFAULT_QUERY) {
  const params = new URLSearchParams({
    query,
    rows: String(input.limit),
    sort: "published",
    order: "desc",
    filter: `from-pub-date:${input.fromDate},until-pub-date:${input.toDate}`,
  });

  const data = await fetchJson<{ message?: { items?: CrossrefWork[] } }>(`https://api.crossref.org/works?${params.toString()}`);
  return (data.message?.items ?? [])
    .filter((work) => work.title?.[0])
    .map((work) => {
      const parts = crossrefDateParts(work);
      return candidateWithScore({
        sourceKey,
        externalId: work.DOI,
        doi: work.DOI,
        title: work.title?.[0] ?? "Untitled research work",
        authors: (work.author ?? [])
          .map((author) => author.name ?? [author.given, author.family].filter(Boolean).join(" "))
          .filter((name) => name.trim().length > 0),
        abstract: cleanText(work.abstract),
        venue: work["container-title"]?.[0],
        publicationYear: toYear(parts?.[0]),
        publicationDate: crossrefDate(work),
        sourceUrl: work.URL ?? (work.DOI ? `https://doi.org/${work.DOI}` : "https://api.crossref.org/works"),
        landingUrl: work.URL,
        isOpenAccess: false,
        rawMetadata: { crossrefType: work.type, crossrefScore: work.score, source: sourceKey },
      });
    });
}

function decodeXml(value: string) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function xmlTag(entry: string, tag: string) {
  const match = entry.match(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return match ? cleanText(decodeXml(match[1])) : undefined;
}

function xmlTags(entry: string, tag: string) {
  return Array.from(entry.matchAll(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`, "gi")))
    .map((match) => cleanText(decodeXml(match[1])))
    .filter((value): value is string => Boolean(value));
}

async function fetchArxivCandidates(input: ResearchSourceInput) {
  const searchQuery = `all:(${input.query || "artificial intelligence education"})`;
  const params = new URLSearchParams({
    search_query: searchQuery,
    start: "0",
    max_results: String(input.limit),
    sortBy: "submittedDate",
    sortOrder: "descending",
  });
  const response = await fetchWithTimeout(`https://export.arxiv.org/api/query?${params.toString()}`);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const xml = await response.text();
  const entries = Array.from(xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)).map((match) => match[1]);

  return entries
    .map((entry) => {
      const title = xmlTag(entry, "title");
      const published = xmlTag(entry, "published");
      const id = xmlTag(entry, "id");
      const arxivId = id?.split("/abs/")[1];
      if (!title || !id) return null;
      return candidateWithScore({
        sourceKey: "arxiv",
        externalId: arxivId ?? id,
        arxivId,
        title,
        authors: xmlTags(entry, "name"),
        abstract: xmlTag(entry, "summary"),
        venue: "arXiv",
        publicationYear: published ? toYear(published.slice(0, 4)) : undefined,
        publicationDate: published?.slice(0, 10),
        sourceUrl: id,
        landingUrl: id,
        openAccessUrl: arxivId ? `https://arxiv.org/pdf/${arxivId}` : undefined,
        isOpenAccess: true,
        rawMetadata: { source: "arxiv" },
      });
    })
    .filter((candidate): candidate is ResearchCandidate => Boolean(candidate));
}

const curatedCrossrefQueries = [
  { key: "aied", name: "AIED Conference", query: "International Conference on Artificial Intelligence in Education" },
  { key: "ijaied", name: "IJAIED", query: "International Journal of Artificial Intelligence in Education" },
  { key: "lak", name: "Learning Analytics and Knowledge", query: "Learning Analytics and Knowledge education AI" },
  { key: "edm", name: "Educational Data Mining", query: "Educational Data Mining artificial intelligence education" },
  { key: "learning-at-scale", name: "Learning at Scale", query: "Learning at Scale artificial intelligence education" },
  { key: "unesco-ai-education", name: "UNESCO AI in Education", query: "UNESCO artificial intelligence education policy" },
];

function createCuratedAdapter(config: { key: string; name: string; query: string }): ResearchSourceAdapter {
  return {
    key: config.key,
    name: config.name,
    async fetchCandidates(input) {
      return fetchCrossrefCandidates({ ...input, limit: Math.max(4, Math.floor(input.limit / 2)) }, config.key, config.query);
    },
  };
}

export function getResearchSourceAdapters(): ResearchSourceAdapter[] {
  return [
    { key: "openalex", name: "OpenAlex Works", fetchCandidates: fetchOpenAlexCandidates },
    { key: "semantic-scholar", name: "Semantic Scholar Graph API", fetchCandidates: fetchSemanticScholarCandidates },
    { key: "crossref", name: "Crossref Works", fetchCandidates: fetchCrossrefCandidates },
    { key: "arxiv", name: "arXiv API", fetchCandidates: fetchArxivCandidates },
    ...curatedCrossrefQueries.map(createCuratedAdapter),
  ];
}

export async function crawlResearchSources(input: Partial<ResearchSourceInput> = {}): Promise<SourceAdapterResult[]> {
  const toDate = input.toDate ?? new Date().toISOString().slice(0, 10);
  const from = new Date(`${toDate}T00:00:00.000Z`);
  from.setDate(from.getDate() - 14);
  const fromDate = input.fromDate ?? from.toISOString().slice(0, 10);
  const sourceInput: ResearchSourceInput = {
    query: input.query ?? DEFAULT_QUERY,
    fromDate,
    toDate,
    limit: input.limit ?? 20,
  };

  const results = await Promise.allSettled(
    getResearchSourceAdapters().map(async (adapter) => ({
      key: adapter.key,
      candidates: await adapter.fetchCandidates(sourceInput),
    }))
  );

  return results.map((result, index) => {
    const adapter = getResearchSourceAdapters()[index];
    if (result.status === "fulfilled") {
      return {
        key: result.value.key,
        candidates: dedupeResearchCandidates(result.value.candidates).filter((candidate) => candidate.title && candidate.normalizedTitle),
      };
    }
    return {
      key: adapter.key,
      candidates: [],
      error: result.reason instanceof Error ? result.reason.message : "unknown source error",
    };
  });
}

export function flattenSourceResults(results: SourceAdapterResult[]) {
  return dedupeResearchCandidates(results.flatMap((result) => result.candidates));
}

export function parseManualSeedUrls(value?: string) {
  if (!value) return [];
  return asStringArray(value.split(/[\n,]/).map((item) => item.trim()));
}
