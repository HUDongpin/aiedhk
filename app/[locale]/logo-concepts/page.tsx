import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

interface LogoConceptsPageProps {
  params: Promise<{ locale: string }>;
}

const conceptFiles = [
  "/logos/aiedhk-logo-learning-circuit.svg",
  "/logos/aiedhk-logo-harbour-hub.svg",
  "/logos/aiedhk-logo-knowledge-compass.svg",
];

export async function generateMetadata({ params }: LogoConceptsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = getDictionary(locale);
  return {
    title: dictionary.logoConcepts.metaTitle,
  };
}

export default async function LogoConceptsPage({ params }: LogoConceptsPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  const dictionary = getDictionary(typedLocale);

  return (
    <div className="bg-hub-gradient">
      <section className="container-page py-16 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-aied-blue">{dictionary.logoConcepts.eyebrow}</p>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-aied-ink sm:text-5xl">
            {dictionary.logoConcepts.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-aied-muted">{dictionary.logoConcepts.intro}</p>
        </div>

        <div className="mt-12 grid gap-6">
          {dictionary.logoConcepts.concepts.map((concept, index) => {
            const file = conceptFiles[index];
            return (
              <article key={concept.name} className="rounded-4xl border border-slate-200 bg-white p-5 shadow-card sm:p-7">
                <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
                  <div className="rounded-[1.75rem] border border-slate-200 bg-aied-soft px-5 py-8 sm:px-8">
                    <img src={file} alt={`${concept.name} AIEDHK logo`} className="h-auto w-full" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-2xl bg-aied-blue text-sm font-black text-white">
                        {index + 1}
                      </span>
                      <h2 className="text-2xl font-black tracking-tight text-aied-ink">{concept.name}</h2>
                    </div>
                    <p className="mt-5 text-base leading-7 text-aied-muted">{concept.summary}</p>
                    <p className="mt-4 text-sm font-bold leading-6 text-aied-ink">{concept.signal}</p>
                    <a
                      href={file}
                      download
                      className="focus-ring mt-6 inline-flex rounded-full bg-aied-blue px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-slate-950"
                    >
                      {dictionary.logoConcepts.download}
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 rounded-4xl border border-slate-200 bg-white p-7 shadow-card">
          <h2 className="text-2xl font-black tracking-tight text-aied-ink">{dictionary.logoConcepts.recommendationTitle}</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-aied-muted">{dictionary.logoConcepts.recommendationText}</p>
          <p className="mt-5 text-sm font-bold text-aied-blue">
            {dictionary.logoConcepts.previewPath}: /{typedLocale}/logo-concepts
          </p>
        </div>
      </section>
    </div>
  );
}
