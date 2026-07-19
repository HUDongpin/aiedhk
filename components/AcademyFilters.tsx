import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n";
import { ACADEMY_LEVELS, ACADEMY_TRACKS } from "@/lib/types";
import { cn } from "@/lib/utils";

interface AcademyFiltersProps {
  locale: Locale;
  dictionary: Dictionary;
  current: { q?: string; track?: string; level?: string; page?: string };
}

export default function AcademyFilters({ locale, dictionary, current }: AcademyFiltersProps) {
  const hrefForTrack = (track?: string) => {
    const params = new URLSearchParams();
    if (current.q) params.set("q", current.q);
    if (track) params.set("track", track);
    if (current.level) params.set("level", current.level);
    const query = params.toString();
    return `/${locale}/academy${query ? `?${query}` : ""}`;
  };

  return (
    <div className="rounded-4xl border border-slate-200 bg-white/92 p-5 shadow-card backdrop-blur">
      <form action={`/${locale}/academy`} method="get" className="grid gap-3 lg:grid-cols-[1fr_210px_170px_auto_auto]">
        <input name="q" defaultValue={current.q ?? ""} placeholder={dictionary.academy.searchPlaceholder} className="focus-ring rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-aied-ink outline-none transition placeholder:text-slate-400 focus:border-aied-cyan focus:bg-white" />
        <select name="track" defaultValue={current.track ?? ""} className="focus-ring rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-aied-ink outline-none focus:border-aied-cyan">
          <option value="">{dictionary.academy.allTracks}</option>
          {ACADEMY_TRACKS.map((track) => <option key={track} value={track}>{dictionary.academy.tracks[track]}</option>)}
        </select>
        <select name="level" defaultValue={current.level ?? ""} className="focus-ring rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-aied-ink outline-none focus:border-aied-cyan">
          <option value="">{dictionary.academy.allLevels}</option>
          {ACADEMY_LEVELS.map((level) => <option key={level} value={level}>{dictionary.academy.levels[level]}</option>)}
        </select>
        <button type="submit" className="focus-ring rounded-2xl bg-aied-ink px-5 py-3 text-sm font-black text-white transition hover:bg-aied-blue">{dictionary.common.search}</button>
        <Link href={`/${locale}/academy`} className="focus-ring rounded-2xl border border-slate-200 px-5 py-3 text-center text-sm font-black text-aied-ink transition hover:border-aied-cyan hover:text-aied-blue">{dictionary.common.reset}</Link>
      </form>
      <div className="mt-5 flex flex-wrap gap-2">
        <Link href={hrefForTrack()} className={cn("focus-ring rounded-full px-4 py-2 text-xs font-black transition", !current.track ? "bg-aied-cyan text-slate-950" : "bg-slate-100 text-slate-600 hover:text-aied-blue")}>{dictionary.academy.allTracks}</Link>
        {ACADEMY_TRACKS.map((track) => <Link key={track} href={hrefForTrack(track)} className={cn("focus-ring rounded-full px-4 py-2 text-xs font-black transition", current.track === track ? "bg-aied-cyan text-slate-950" : "bg-slate-100 text-slate-600 hover:text-aied-blue")}>{dictionary.academy.tracks[track]}</Link>)}
      </div>
    </div>
  );
}
