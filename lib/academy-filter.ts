import type { AcademyFilterOptions, AcademyFilterResult, AcademyLesson } from "@/lib/types";

function clampPage(page: number, totalPages: number) {
  if (!Number.isFinite(page) || page < 1 || totalPages <= 0) return 1;
  return Math.min(Math.floor(page), totalPages);
}

export function filterAcademyLessonList(
  lessons: AcademyLesson[],
  options: AcademyFilterOptions = {}
): AcademyFilterResult {
  const q = options.q?.trim().toLowerCase() ?? "";
  const track = options.track?.trim() ?? "";
  const level = options.level?.trim() ?? "";
  const rawPageSize = options.pageSize ?? 6;
  const pageSize = Number.isFinite(rawPageSize) && rawPageSize > 0 ? Math.min(Math.floor(rawPageSize), 50) : 6;
  const filtered = lessons.filter((lesson) => {
    const searchable = [
      lesson.title,
      lesson.tags.join(" "),
      lesson.shortSummary,
      lesson.fullSummary,
      lesson.coreIdeas.join(" "),
      lesson.educationConnection,
    ]
      .join(" ")
      .toLowerCase();

    return (!track || lesson.track === track) && (!level || lesson.level === level) && (!q || searchable.includes(q));
  });
  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const page = clampPage(options.page ?? 1, totalPages);
  const start = (page - 1) * pageSize;

  return { items: filtered.slice(start, start + pageSize), total, page, pageSize, totalPages };
}
