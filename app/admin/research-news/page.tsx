import Link from "next/link";
import { PAPER_TYPES, type AdminResearchPaper, type ResearchPaperStatus } from "@/lib/types";
import { listAdminResearchPapers } from "@/lib/research-pipeline/store";

interface AdminResearchNewsPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export const dynamic = "force-dynamic";

const statuses: Array<{ value: ResearchPaperStatus | "all"; label: string }> = [
  { value: "draft", label: "Drafts" },
  { value: "approved", label: "Approved" },
  { value: "published", label: "Published" },
  { value: "rejected", label: "Rejected" },
  { value: "archived", label: "Archived" },
  { value: "all", label: "All" },
];

function first(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function textareaValue(items: string[]) {
  return items.join("\n");
}

function StatusPill({ status }: { status: string }) {
  const classes: Record<string, string> = {
    draft: "bg-amber-50 text-amber-800 ring-amber-200",
    approved: "bg-blue-50 text-blue-800 ring-blue-200",
    published: "bg-emerald-50 text-emerald-800 ring-emerald-200",
    rejected: "bg-rose-50 text-rose-800 ring-rose-200",
    archived: "bg-slate-100 text-slate-700 ring-slate-200",
  };
  return <span className={`rounded-full px-3 py-1 text-xs font-black uppercase ring-1 ${classes[status] ?? classes.draft}`}>{status}</span>;
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-1.5 text-sm font-bold text-slate-700">
      <span>{label}</span>
      {children}
    </label>
  );
}

function inputClass(extra = "") {
  return `w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-aied-blue focus:ring-4 focus:ring-cyan-100 ${extra}`;
}

function PaperForm({ paper }: { paper: AdminResearchPaper }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white shadow-card">
      <div className="grid gap-5 border-b border-slate-200 p-5 lg:grid-cols-[1fr_auto] lg:items-start">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <StatusPill status={paper.status} />
            <span className="text-xs font-semibold text-slate-500">{paper.year}</span>
            <span className="text-xs font-semibold text-slate-500">{paper.venue}</span>
          </div>
          <h2 className="mt-3 text-xl font-black tracking-tight text-aied-ink">{paper.title}</h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">{paper.authors.join(", ")}</p>
        </div>
        {paper.status === "published" && (
          <Link className="rounded-full bg-aied-ink px-4 py-2 text-sm font-black text-white" href={`/en/research-news/${paper.slug}`}>
            View public
          </Link>
        )}
      </div>

      <form method="post" action={`/api/admin/research-news/${paper.id}`} className="grid gap-5 p-5">
        <div className="grid gap-4 lg:grid-cols-2">
          <Field label="Title">
            <input name="title" defaultValue={paper.title} className={inputClass()} />
          </Field>
          <Field label="Venue">
            <input name="venue" defaultValue={paper.venue} className={inputClass()} />
          </Field>
          <Field label="Authors">
            <textarea name="authors" defaultValue={textareaValue(paper.authors)} rows={4} className={inputClass("resize-y")} />
          </Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Year">
              <input name="year" type="number" min="1990" max="2200" defaultValue={paper.year} className={inputClass()} />
            </Field>
            <Field label="Type">
              <select name="type" defaultValue={paper.type} className={inputClass()}>
                {PAPER_TYPES.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.defaultLabel}
                  </option>
                ))}
              </select>
            </Field>
          </div>
          <Field label="Tags">
            <input name="tags" defaultValue={paper.tags.join(", ")} className={inputClass()} />
          </Field>
          <Field label="Image path">
            <input name="image" defaultValue={paper.image} className={inputClass()} />
          </Field>
          <Field label="Image alt">
            <input name="imageAlt" defaultValue={paper.imageAlt} className={inputClass()} />
          </Field>
          <Field label="Source URL">
            <input name="sourceUrl" defaultValue={paper.sourceUrl} className={inputClass()} />
          </Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="DOI">
              <input name="doi" defaultValue={paper.doi ?? ""} className={inputClass()} />
            </Field>
            <Field label="Publication date">
              <input name="publicationDate" type="date" defaultValue={paper.publicationDate ?? ""} className={inputClass()} />
            </Field>
          </div>
        </div>

        <Field label="Short summary">
          <textarea name="shortSummary" defaultValue={paper.shortSummary} rows={4} className={inputClass("resize-y")} />
        </Field>
        <Field label="Full summary">
          <textarea name="fullSummary" defaultValue={paper.fullSummary} rows={12} className={inputClass("resize-y leading-6")} />
        </Field>
        <div className="grid gap-4 lg:grid-cols-2">
          <Field label="Key takeaways">
            <textarea name="keyTakeaways" defaultValue={textareaValue(paper.keyTakeaways)} rows={5} className={inputClass("resize-y")} />
          </Field>
          <Field label="Why it matters">
            <textarea name="whyItMatters" defaultValue={paper.whyItMatters} rows={5} className={inputClass("resize-y")} />
          </Field>
        </div>
        <Field label="Confidence notes">
          <textarea name="confidenceNotes" defaultValue={paper.confidenceNotes ?? ""} rows={3} className={inputClass("resize-y")} />
        </Field>
        <Field label="Review note">
          <input name="notes" placeholder="Optional audit note" className={inputClass()} />
        </Field>

        {paper.candidate && (
          <details className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <summary className="cursor-pointer text-sm font-black text-slate-700">Candidate evidence and scoring</summary>
            <div className="mt-3 grid gap-3 text-sm leading-6 text-slate-600">
              <p>Source: {paper.candidate.sourceKey}</p>
              <p>Score: {paper.candidate.relevanceScore ?? "n/a"}</p>
              <p>Reasons: {paper.candidate.scoreReasons.join("; ") || "n/a"}</p>
              {paper.candidate.abstract && <p>{paper.candidate.abstract}</p>}
            </div>
          </details>
        )}

        <div className="flex flex-wrap gap-2 border-t border-slate-200 pt-4">
          <button name="action" value="save" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-black text-slate-700">
            Save
          </button>
          <button name="action" value="approve" className="rounded-full bg-aied-blue px-4 py-2 text-sm font-black text-white">
            Approve
          </button>
          <button name="action" value="publish" className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-black text-white">
            Publish
          </button>
          <button name="action" value="unpublish" className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-black text-blue-800">
            Unpublish
          </button>
          <button name="action" value="regenerate" className="rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-black text-amber-800">
            Regenerate
          </button>
          <button name="action" value="reject" className="rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-black text-rose-800">
            Reject
          </button>
          <button name="action" value="archive" className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-black text-slate-600">
            Archive
          </button>
        </div>
      </form>
    </article>
  );
}

export default async function AdminResearchNewsPage({ searchParams }: AdminResearchNewsPageProps) {
  const rawSearchParams = await searchParams;
  const status = first(rawSearchParams.status) ?? "draft";
  const papers = await listAdminResearchPapers(status === "all" ? undefined : status);

  return (
    <main className="min-h-screen bg-slate-50 py-8">
      <div className="mx-auto grid w-[min(1240px,calc(100vw-32px))] gap-6">
        <header className="rounded-lg border border-slate-200 bg-white p-6 shadow-card">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-aied-blue">AIEDHK Admin</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight text-aied-ink">Research News Review Queue</h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-500">
            Review Codex-assisted weekly research drafts, edit summaries, approve publication, and keep an audit trail of every action.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {statuses.map((item) => (
              <Link
                key={item.value}
                href={`/admin/research-news?status=${item.value}`}
                className={`rounded-full px-4 py-2 text-sm font-black ${
                  status === item.value ? "bg-aied-ink text-white" : "border border-slate-200 bg-white text-slate-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </header>

        {papers === null ? (
          <section className="rounded-lg border border-amber-200 bg-amber-50 p-6 text-amber-900">
            <h2 className="text-xl font-black">Database setup required</h2>
            <p className="mt-2 text-sm leading-6">
              Set `DATABASE_URL` and apply `migrations/002_research_pipeline.sql` before using the review queue.
            </p>
          </section>
        ) : papers.length === 0 ? (
          <section className="rounded-lg border border-slate-200 bg-white p-8 text-center shadow-card">
            <h2 className="text-xl font-black text-aied-ink">No papers in this queue</h2>
            <p className="mt-2 text-sm text-slate-500">Run `/api/cron/research-ingest?dryRun=1` to inspect candidates or run the live cron to create drafts.</p>
          </section>
        ) : (
          <section className="grid gap-6">
            {papers.map((paper) => (
              <PaperForm key={paper.id} paper={paper} />
            ))}
          </section>
        )}
      </div>
    </main>
  );
}
