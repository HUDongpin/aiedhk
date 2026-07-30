import Image from "next/image";
import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n";
import type { AcademyLesson } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { getAcademyLessonPresentation } from "@/lib/academy-data";

interface AcademyCardProps {
  lesson: AcademyLesson;
  locale: Locale;
  dictionary: Dictionary;
}

export default function AcademyCard({ lesson, locale, dictionary }: AcademyCardProps) {
  const content = getAcademyLessonPresentation(lesson, locale);
  return (
    <article className="group overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <Link href={`/${locale}/academy/${lesson.slug}`} className="grid h-full md:grid-cols-[minmax(280px,36%)_minmax(0,1fr)] lg:grid-cols-[minmax(340px,38%)_minmax(0,1fr)]">
        <div className="relative aspect-[16/10] overflow-hidden border-b border-slate-200 bg-aied-soft md:aspect-auto md:min-h-[22rem] md:border-b-0 md:border-r" lang={content.contentHtmlLang} dir={content.contentDir}>
          <Image
            src={lesson.image}
            alt={lesson.imageAlt}
            fill
            sizes="(min-width: 1280px) 456px, (min-width: 768px) 36vw, 100vw"
            className="object-cover object-center transition duration-300 group-hover:scale-[1.012]"
          />
        </div>
        <div className="flex min-w-0 flex-col p-6 sm:p-7">
          <div className="flex items-start justify-between gap-4 text-xs font-black uppercase tracking-[0.18em]">
            <div className="flex min-w-0 flex-wrap items-center gap-2">
              <span className="rounded-full bg-aied-soft px-3 py-1 text-aied-blue">{dictionary.academy.tracks[lesson.track]}</span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-500">{dictionary.academy.levels[lesson.level]}</span>
              <span className="text-slate-400">{formatDate(lesson.createdAt, locale)}</span>
            </div>
            <span className="shrink-0 text-right text-[0.68rem] leading-5 text-aied-blue" aria-label={`Lesson identifier ${lesson.listingIdentifier}`}>
              {lesson.listingIdentifier}
            </span>
          </div>
          <div lang={content.contentHtmlLang} dir={content.contentDir}>
            <h3 className="mt-4 text-xl font-black leading-tight tracking-tight text-aied-ink transition group-hover:text-aied-blue sm:text-2xl">{lesson.title}</h3>
            <p className="mt-4 line-clamp-3 text-base leading-7 text-aied-muted">{lesson.shortSummary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {lesson.tags.slice(0, 3).map((tag) => <span key={tag} className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-500">{tag}</span>)}
            </div>
          </div>
          <span className="mt-6 inline-flex text-sm font-black text-aied-blue">{dictionary.common.readSummary}<span className="ml-2 transition group-hover:translate-x-1">→</span></span>
        </div>
      </Link>
    </article>
  );
}
