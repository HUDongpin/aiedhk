import { getDatabaseClient } from "@/lib/db";
import { getResearchPaperBySlug, researchPapers } from "@/lib/research-data";

export interface ResearchSeedResult {
  status: "seeded" | "database_not_configured";
  seeded: number;
  archived: number;
  publishedBefore: number;
  publishedAfter: number;
}

function toJson(value: string[]) {
  return JSON.stringify(value);
}

export async function seedReviewedResearchPapers(): Promise<ResearchSeedResult> {
  const sql = getDatabaseClient();

  if (!sql) {
    return {
      status: "database_not_configured",
      seeded: 0,
      archived: 0,
      publishedBefore: 0,
      publishedAfter: 0,
    };
  }

  const beforeRows = await sql<{ count: string }[]>`
    select count(*)::text as count
    from research_papers
    where status = 'published'
  `;
  const publishedBefore = Number(beforeRows[0]?.count ?? 0);

  let seeded = 0;

  for (const paper of researchPapers) {
    const rows = await sql<{ id: string }[]>`
      insert into research_papers (
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
        generation_prompt_version,
        generation_model,
        published_at
      )
      values (
        'published',
        ${paper.slug},
        ${paper.title},
        ${toJson(paper.authors)}::jsonb,
        ${paper.venue},
        ${paper.year},
        ${paper.type},
        ${toJson(paper.tags)}::jsonb,
        ${paper.image},
        ${paper.imageAlt},
        ${paper.shortSummary},
        ${paper.fullSummary},
        ${toJson(paper.keyTakeaways)}::jsonb,
        ${paper.whyItMatters},
        ${paper.sourceUrl},
        'seed-v2-reviewed-aied',
        'repository-seed',
        ${paper.createdAt}
      )
      on conflict (slug) do update
      set
        status = 'published',
        title = excluded.title,
        authors = excluded.authors,
        venue = excluded.venue,
        year = excluded.year,
        type = excluded.type,
        tags = excluded.tags,
        image = excluded.image,
        image_alt = excluded.image_alt,
        short_summary = excluded.short_summary,
        full_summary = excluded.full_summary,
        key_takeaways = excluded.key_takeaways,
        why_it_matters = excluded.why_it_matters,
        source_url = excluded.source_url,
        generation_prompt_version = excluded.generation_prompt_version,
        generation_model = excluded.generation_model,
        published_at = excluded.published_at,
        updated_at = now()
      returning id::text
    `;

    const paperId = rows[0]?.id;
    if (!paperId) continue;

    for (const locale of ["zh-hant", "zh-hans"] as const) {
      const localized = getResearchPaperBySlug(paper.slug, locale);
      if (!localized) continue;

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
          'published',
          ${localized.title},
          ${toJson(localized.tags)}::jsonb,
          ${localized.imageAlt},
          ${localized.shortSummary},
          ${localized.fullSummary},
          ${toJson(localized.keyTakeaways)}::jsonb,
          ${localized.whyItMatters},
          'repository-seed'
        )
        on conflict (research_paper_id, locale) do update
        set
          status = 'published',
          title = excluded.title,
          tags = excluded.tags,
          image_alt = excluded.image_alt,
          short_summary = excluded.short_summary,
          full_summary = excluded.full_summary,
          key_takeaways = excluded.key_takeaways,
          why_it_matters = excluded.why_it_matters,
          generation_model = excluded.generation_model,
          updated_at = now()
      `;
    }

    seeded += 1;
  }

  const activeSlugs = researchPapers.map((paper) => paper.slug);
  const archivedRows = await sql<{ id: string }[]>`
    update research_papers
    set status = 'archived',
        published_at = null,
        updated_at = now()
    where status = 'published'
      and not (slug = any(${activeSlugs}::text[]))
    returning id::text
  `;

  const afterRows = await sql<{ count: string }[]>`
    select count(*)::text as count
    from research_papers
    where status = 'published'
  `;

  return {
    status: "seeded",
    seeded,
    archived: archivedRows.length,
    publishedBefore,
    publishedAfter: Number(afterRows[0]?.count ?? 0),
  };
}
