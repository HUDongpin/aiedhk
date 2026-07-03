import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import CTA from "@/components/CTA";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  const dictionary = getDictionary(typedLocale);

  const cardLinks = [`/${typedLocale}/mission`, `/${typedLocale}/research-news`, `/${typedLocale}/about`];
  return (
    <div className="bg-hub-gradient">
      <section className="container-page grid gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:py-24">
        <div>
          <p className="inline-flex max-w-full items-center justify-center rounded-full border border-cyan-200/80 bg-cyan-50/70 px-4 py-2 text-[0.56rem] font-black uppercase leading-none tracking-[0.2em] text-aied-blue shadow-[inset_0_1px_0_rgba(255,255,255,0.95)] sm:px-6 sm:py-2.5 sm:text-sm sm:tracking-[0.28em]">
            {dictionary.home.eyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-aied-ink sm:text-5xl lg:text-6xl text-balance">
            {dictionary.home.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-aied-muted">{dictionary.home.heroText}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CTA href={`/${typedLocale}/research-news`}>{dictionary.home.primaryCta}</CTA>
            <CTA href={`/${typedLocale}/mission`} variant="secondary">
              {dictionary.home.secondaryCta}
            </CTA>
          </div>
        </div>

        <div className="relative">
          <figure className="overflow-hidden rounded-[2.6rem] border border-white bg-white shadow-[0_28px_80px_rgba(15,23,42,0.14)] sm:rounded-[3.5rem]">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-[2.6rem] bg-slate-100 sm:rounded-t-[3.5rem]">
              <Image
                src="/images/home/aiedhk-knowledge-hub-double-eyelid.png"
                alt="Learners and educators collaborating in a Hong Kong AI in Education knowledge hub"
                fill
                priority
                sizes="(min-width: 1024px) 46vw, calc(100vw - 32px)"
                className="object-cover"
              />
            </div>
            <figcaption className="flex flex-col items-center px-7 py-7 text-center sm:px-10 sm:py-9 lg:px-8 xl:px-11">
              <p className="max-w-full text-center text-[0.56rem] font-black uppercase leading-none tracking-[0.2em] text-aied-blue sm:text-[0.72rem] sm:tracking-[0.28em] lg:text-[0.58rem] lg:tracking-[0.16em] xl:text-xs xl:tracking-[0.22em]">
                {dictionary.home.showcaseTitle}
              </p>
              <p className="mt-4 max-w-2xl text-xl font-medium leading-snug text-slate-600 sm:text-2xl lg:text-xl xl:text-2xl">
                {dictionary.home.showcaseText}
              </p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="container-page grid gap-5 pb-16 md:grid-cols-3">
        {dictionary.home.cards.map((card, index) => (
          <Link key={card.title} href={cardLinks[index]} className="group rounded-4xl border border-slate-200 bg-white p-7 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-aied-soft text-lg font-black text-aied-blue">0{index + 1}</span>
            <h2 className="mt-6 text-2xl font-black tracking-tight text-aied-ink transition group-hover:text-aied-blue">{card.title}</h2>
            <p className="mt-3 text-base leading-7 text-aied-muted">{card.text}</p>
          </Link>
        ))}
      </section>

      <section className="container-page grid gap-6 py-16 lg:grid-cols-2">
        <div className="rounded-4xl border border-slate-200 bg-white p-8 shadow-card">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-aied-blue">{dictionary.home.hubAdvantage}</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-aied-ink">{dictionary.home.whyTitle}</h2>
          <p className="mt-4 text-lg leading-8 text-aied-muted">{dictionary.home.whyText}</p>
        </div>
        <div className="rounded-4xl border border-slate-200 bg-white p-8 shadow-card">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-aied-blue">{dictionary.home.translationLabel}</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-aied-ink">{dictionary.home.impactTitle}</h2>
          <p className="mt-4 text-lg leading-8 text-aied-muted">{dictionary.home.impactText}</p>
        </div>
      </section>
    </div>
  );
}
