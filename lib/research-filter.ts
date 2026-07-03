import type { ResearchFilterOptions, ResearchFilterResult, ResearchPaper } from "@/lib/types";

function clampPage(page: number, totalPages: number) {
  if (!Number.isFinite(page) || page < 1) return 1;
  if (totalPages <= 0) return 1;
  return Math.min(Math.floor(page), totalPages);
}

export function filterResearchPaperList(papers: ResearchPaper[], options: ResearchFilterOptions = {}): ResearchFilterResult {
  const q = options.q?.trim().toLowerCase() ?? "";
  const type = options.type?.trim() ?? "";
  const year = options.year?.trim() ?? "";
  const rawPageSize = options.pageSize ?? 6;
  const pageSize = Number.isFinite(rawPageSize) && rawPageSize > 0 ? Math.min(Math.floor(rawPageSize), 50) : 6;

  const filtered = papers.filter((paper) => {
    const matchesType = !type || paper.type === type;
    const matchesYear = !year || String(paper.year) === year;
    const searchable = [paper.title, paper.authors.join(" "), paper.venue, paper.tags.join(" "), paper.shortSummary]
      .join(" ")
      .toLowerCase();
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
