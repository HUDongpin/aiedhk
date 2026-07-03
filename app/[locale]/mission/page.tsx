import { notFound } from "next/navigation";
import SectionHeader from "@/components/SectionHeader";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

interface MissionPageProps {
  params: Promise<{ locale: string }>;
}

const strategyMarks = [
  "research",
  "product",
  "teacher",
  "student",
  "bridge",
  "ethics",
] as const;

type StrategyMarkName = (typeof strategyMarks)[number];

function StrategyMark({ name }: { name: StrategyMarkName }) {
  return (
    <span
      aria-hidden="true"
      className="grid h-16 w-16 place-items-center rounded-3xl border border-slate-100 bg-aied-soft shadow-[0_16px_34px_rgba(15,94,168,0.10)] transition duration-300 group-hover:scale-105 group-hover:shadow-[0_20px_42px_rgba(15,94,168,0.15)]"
    >
      {name === "research" && (
        <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none">
          <circle cx="29" cy="30" r="12" stroke="#0f5ea8" strokeWidth="5" />
          <path d="m38 39 9 9" stroke="#0f5ea8" strokeLinecap="round" strokeWidth="7" />
          <path d="M18 16c8-5 20-5 28 0M13 39c-2-8 0-17 6-23M47 19c6 6 8 15 5 23" stroke="#48d5e8" strokeLinecap="round" strokeWidth="3.6" />
          <path d="M24 35V28M30 35V24M36 35V20" stroke="#0f172a" strokeLinecap="round" strokeWidth="3.8" />
          <circle cx="17" cy="17" r="4" fill="#0f172a" />
          <circle cx="50" cy="42" r="4" fill="#48d5e8" />
        </svg>
      )}

      {name === "product" && (
        <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none">
          <rect x="10" y="13" width="18" height="18" rx="5" fill="#0f5ea8" />
          <rect x="12" y="37" width="17" height="17" rx="5" fill="#48d5e8" />
          <rect x="37" y="34" width="17" height="17" rx="5" stroke="#0f172a" strokeWidth="4" />
          <path d="M37 13h10a4 4 0 0 1 4 4v10" stroke="#48d5e8" strokeDasharray="6 6" strokeLinecap="round" strokeWidth="4" />
          <path d="m34 22 5 5M46 28l5-5" stroke="#0f5ea8" strokeLinecap="round" strokeWidth="4" />
          <path d="m33 33 3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7Z" fill="#facc15" />
        </svg>
      )}

      {name === "teacher" && (
        <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none">
          <path d="M16 24h32a5 5 0 0 1 5 5v18H11V29a5 5 0 0 1 5-5Z" stroke="#0f5ea8" strokeLinejoin="round" strokeWidth="4.4" />
          <path d="M20 38h14M39 38h7" stroke="#48d5e8" strokeLinecap="round" strokeWidth="4" />
          <path d="M32 12h13M38.5 12v12" stroke="#0f172a" strokeLinecap="round" strokeWidth="5" />
          <path d="m26 47 6 6 6-6" stroke="#48d5e8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M15 53h34" stroke="#0f5ea8" strokeLinecap="round" strokeWidth="4" />
          <path d="M46 14h6M43 8l3-4M43 20l3 4" stroke="#facc15" strokeLinecap="round" strokeWidth="3.4" />
        </svg>
      )}

      {name === "student" && (
        <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none">
          <circle cx="32" cy="32" r="14" stroke="#0f5ea8" strokeWidth="4.5" />
          <circle cx="32" cy="28" r="5" fill="#0f172a" />
          <path d="M23 41c2-6 16-6 18 0" fill="#0f172a" />
          <path d="M31 8c11 0 21 7 24 18M55 37c-3 11-13 19-25 19M19 52C9 47 5 34 10 23" stroke="#48d5e8" strokeDasharray="5 7" strokeLinecap="round" strokeWidth="4" />
          <circle cx="32" cy="8" r="4.5" fill="#0f5ea8" />
          <circle cx="55" cy="37" r="4.5" fill="#48d5e8" />
          <circle cx="12" cy="23" r="4.5" fill="#0f5ea8" />
          <circle cx="20" cy="52" r="4.5" fill="#facc15" />
        </svg>
      )}

      {name === "bridge" && (
        <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none">
          <path d="M8 39h48" stroke="#0f5ea8" strokeLinecap="round" strokeWidth="6" />
          <path d="M14 39c4-16 12-24 18-24s14 8 18 24" stroke="#0f5ea8" strokeLinecap="round" strokeWidth="4.4" />
          <path d="M18 39V22M32 39V15M46 39V22" stroke="#0f5ea8" strokeLinecap="round" strokeWidth="3.6" />
          <path d="M19 22c7-7 19-7 26 0" stroke="#48d5e8" strokeDasharray="5 7" strokeLinecap="round" strokeWidth="4" />
          <circle cx="18" cy="22" r="5" fill="#0f5ea8" />
          <circle cx="46" cy="22" r="5" fill="#0f5ea8" />
          <circle cx="32" cy="50" r="5" stroke="#48d5e8" strokeWidth="4" />
        </svg>
      )}

      {name === "ethics" && (
        <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none">
          <path d="M32 8 51 17v16c0 11-7 19-19 24-12-5-19-13-19-24V17l19-9Z" stroke="#0f5ea8" strokeLinejoin="round" strokeWidth="4.6" />
          <path d="M32 17 44 23v11c0 7-4 12-12 16-8-4-12-9-12-16V23l12-6Z" stroke="#48d5e8" strokeLinejoin="round" strokeWidth="4" />
          <path d="M24 34 30 40 42 27" stroke="#0f172a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
          <circle cx="14" cy="32" r="3.5" fill="#0f5ea8" />
          <circle cx="50" cy="32" r="3.5" fill="#0f5ea8" />
          <path d="m32 20 2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4Z" fill="#facc15" />
        </svg>
      )}
    </span>
  );
}

export default async function MissionPage({ params }: MissionPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  const dictionary = getDictionary(typedLocale);

  return (
    <div className="bg-hub-gradient">
      <section className="container-page py-16 lg:py-24">
        <SectionHeader eyebrow={dictionary.mission.eyebrow} title={dictionary.mission.title} description={dictionary.mission.intro} center />
      </section>

      <section className="container-page grid gap-6 pb-16 lg:grid-cols-3">
        <div className="gradient-border rounded-4xl p-8 shadow-card lg:col-span-1">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-aied-blue">01</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-aied-ink">{dictionary.mission.visionTitle}</h2>
          <p className="mt-4 text-lg leading-8 text-aied-muted">{dictionary.mission.visionText}</p>
        </div>
        <div className="rounded-4xl border border-slate-200 bg-white p-8 shadow-card lg:col-span-1">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-aied-blue">02</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-aied-ink">{dictionary.mission.whyAiedTitle}</h2>
          <p className="mt-4 text-lg leading-8 text-aied-muted">{dictionary.mission.whyAiedText}</p>
        </div>
        <div className="rounded-4xl border border-slate-200 bg-white p-8 shadow-card lg:col-span-1">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-aied-blue">03</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-aied-ink">{dictionary.mission.whyHongKongTitle}</h2>
          <p className="mt-4 text-lg leading-8 text-aied-muted">{dictionary.mission.whyHongKongText}</p>
        </div>
      </section>

      <section className="bg-white/70 py-16">
        <div className="container-page">
          <SectionHeader eyebrow={dictionary.mission.roadmapEyebrow} title={dictionary.mission.strategyTitle} description={dictionary.mission.strategyIntro} center />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {dictionary.mission.strategies.map((strategy, index) => (
              <article key={strategy.title} className="group rounded-4xl border border-slate-200 bg-white p-7 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
                <div className="flex items-center justify-between">
                  <StrategyMark name={strategyMarks[index]} />
                  <span className="text-xs font-black uppercase tracking-[0.22em] text-slate-300">0{index + 1}</span>
                </div>
                <h3 className="mt-6 text-2xl font-black tracking-tight text-aied-ink">{strategy.title}</h3>
                <p className="mt-3 text-base leading-7 text-aied-muted">{strategy.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
