import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n";
import type { ResearchPaper } from "@/lib/types";

interface ResearchCardProps {
  paper: ResearchPaper;
  locale: Locale;
  dictionary: Dictionary;
  featured?: boolean;
}

export default function ResearchCard({ paper, locale, dictionary, featured = false }: ResearchCardProps) {
  return (
    <article className="group overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <Link
        href={`/${locale}/research-news/${paper.slug}`}
        className={
          featured
            ? "grid h-full lg:grid-cols-[minmax(360px,0.95fr)_minmax(0,1.05fr)]"
            : "grid h-full md:grid-cols-[minmax(280px,36%)_minmax(0,1fr)] lg:grid-cols-[minmax(340px,38%)_minmax(0,1fr)] xl:grid-cols-[minmax(380px,40%)_minmax(0,1fr)]"
        }
      >
        <div className="relative aspect-[16/10] overflow-hidden border-b border-slate-200 bg-aied-soft md:aspect-auto md:h-full md:min-h-[22rem] md:self-stretch md:border-b-0 md:border-r lg:min-h-[24rem]">
          <img
            src={paper.image}
            alt={paper.imageAlt}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-300 group-hover:scale-[1.012] group-hover:brightness-[0.98]"
          />
        </div>
        <div className="flex h-full min-w-0 flex-col p-6 sm:p-7">
          <div className="flex flex-wrap items-center gap-2 text-xs font-black uppercase tracking-[0.18em]">
            <span className="rounded-full bg-aied-soft px-3 py-1 text-aied-blue">{dictionary.paperTypes[paper.type]}</span>
            <span className="text-slate-400">{paper.year}</span>
          </div>
          <h3 className="mt-4 text-xl font-black leading-tight tracking-tight text-aied-ink transition group-hover:text-aied-blue sm:text-2xl">
            {paper.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-500">{paper.authors.join(", ")}</p>
          <p className="mt-2 text-sm font-semibold text-slate-600">{paper.venue}</p>
          <p className="mt-4 line-clamp-3 text-base leading-7 text-aied-muted">{paper.shortSummary}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {paper.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-500">
                {tag}
              </span>
            ))}
          </div>
          <span className="mt-6 inline-flex text-sm font-black text-aied-blue">
            {dictionary.common.readSummary} <span className="ml-2 transition group-hover:translate-x-1">→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
