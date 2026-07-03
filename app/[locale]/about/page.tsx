import { notFound } from "next/navigation";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

const profileLinks = [
  { name: "Hu Dongpin", label: "hudongpin.com", href: "https://www.hudongpin.com", logo: "hudongpin" },
  { name: "PedaNova", label: "pedanova.tech", href: "https://www.pedanova.tech", logo: "pedanova" },
  { name: "MAIS", label: "mais.ac", href: "https://mais.ac", logo: "mais" },
  { name: "CAIS", label: "cais.hk", href: "https://www.cais.hk", logo: "cais" },
  { name: "UAIS", label: "uais.top", href: "https://uais.top", logo: "uais" },
] as const;

const productWebsiteLinks: Record<string, { href: string; label: string }> = {
  MAIS: { href: "https://mais.ac", label: "mais.ac" },
  CAIS: { href: "https://www.cais.hk", label: "cais.hk" },
  UAIS: { href: "https://uais.top", label: "uais.top" },
};

type ProfileLogo = (typeof profileLinks)[number]["logo"];

function PhCreditLogo() {
  return (
    <span
      aria-hidden="true"
      className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-950 text-white shadow-sm ring-1 ring-slate-200/70"
    >
      <span className="absolute inset-1 rounded-full border border-cyan-300/70" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 44 44" fill="none">
        <path className="stroke-cyan-300" d="M11 29C16.5 18.5 23.5 27.5 31.5 14.5" strokeLinecap="round" strokeWidth="2.4" />
        <circle className="fill-amber-300" cx="31.5" cy="14.5" r="2.4" />
      </svg>
      <span className="relative text-[0.58rem] font-black leading-none">PH</span>
    </span>
  );
}

function WebsiteLogo({ logo }: { logo: ProfileLogo }) {
  if (logo === "hudongpin") {
    return <PhCreditLogo />;
  }

  if (logo === "pedanova") {
    return (
      <img
        src="/logos/pedanova-mark-transparent.png"
        alt=""
        aria-hidden="true"
        decoding="async"
        className="h-11 w-11 rounded-full object-contain"
      />
    );
  }

  if (logo === "mais") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true" className="h-11 w-11">
        <circle cx="24" cy="24" r="21" fill="#ffffff" stroke="#2f3544" strokeWidth="2" />
        <path d="M9.5 32.2 18.6 12.6 24 25.4 29.4 12.6 38.5 32.2" fill="none" stroke="#7dd3fc" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" />
        <path d="M13.6 31.3c7-3.5 13.8-3.5 20.8 0" fill="none" stroke="#a78bfa" strokeLinecap="round" strokeWidth="2.8" />
        <path d="M36.3 5.9 38 10.1l4.2 1.7-4.2 1.7-1.7 4.2-1.7-4.2-4.2-1.7 4.2-1.7 1.7-4.2Z" fill="#facc15" />
      </svg>
    );
  }

  if (logo === "uais") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true" className="h-11 w-11 rounded-2xl">
        <defs>
          <linearGradient id="uaisLogoBlue" x1="9" x2="39" y1="7" y2="42" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#2f7df4" />
            <stop offset="1" stopColor="#2563eb" />
          </linearGradient>
        </defs>
        <rect width="48" height="48" rx="16" fill="url(#uaisLogoBlue)" />
        <path
          d="M20 14.5 23.7 24.3 33.5 28 23.7 31.7 20 41.5 16.3 31.7 6.5 28 16.3 24.3 20 14.5Z"
          fill="none"
          stroke="#ffffff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.8"
        />
        <path d="M32.5 11.5v7M29 15h7M39 18.5v4M37 20.5h4" stroke="#ffffff" strokeLinecap="round" strokeWidth="2.5" />
      </svg>
    );
  }

  return (
    <img
      src="/logos/cais-logo-wave-hd.svg"
      alt=""
      aria-hidden="true"
      decoding="async"
      className="h-11 w-11 object-contain"
    />
  );
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  const dictionary = getDictionary(typedLocale);

  return (
    <div className="bg-hub-gradient">
      <section className="container-page py-16 lg:py-24">
        <SectionHeader
          eyebrow={dictionary.about.eyebrow}
          title={dictionary.about.title}
          center
          titleClassName="mx-auto max-w-[18rem] text-2xl sm:max-w-3xl sm:text-4xl lg:text-5xl"
        />
      </section>

      <section className="container-page grid gap-6 pb-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-4xl border border-slate-200 bg-white p-5 shadow-card sm:p-8">
          <div className="flex items-start gap-3 sm:gap-5">
            <div className="relative h-14 w-14 shrink-0 rounded-3xl bg-aied-soft shadow-[0_16px_38px_rgba(15,94,168,0.14)] sm:h-20 sm:w-20">
              <Image
                src="/images/about/dr-peter-hu-dongpin.png"
                alt="Dr. Peter Hu Dongpin"
                width={80}
                height={80}
                priority
                className="h-14 w-14 rounded-3xl border-2 border-aied-cyan object-cover sm:h-20 sm:w-20"
              />
              <span className="absolute -bottom-1 -right-2 grid h-6 w-6 place-items-center rounded-xl border-2 border-white bg-aied-blue text-[9px] font-black text-white shadow-sm sm:h-8 sm:w-8 sm:text-xs">
                PH
              </span>
            </div>
            <div className="min-w-0 pt-0.5">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-aied-blue sm:text-sm sm:tracking-[0.25em]">{dictionary.about.principalLabel}</p>
              <h2 className="mt-1 text-[17px] font-black leading-tight text-aied-ink sm:mt-3 sm:text-3xl sm:tracking-tight">{dictionary.about.personTitle}</h2>
            </div>
          </div>
          <p className="mt-5 text-sm leading-6 text-aied-muted sm:mt-6 sm:text-lg sm:leading-8">{dictionary.about.personText}</p>
          <div className="mt-7 rounded-3xl bg-aied-soft p-5 sm:mt-8 sm:p-6">
            <h3 className="text-base font-black tracking-tight text-aied-ink sm:text-xl">{dictionary.about.focusTitle}</h3>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-5">
              {dictionary.about.focusItems.map((item) => (
                <div key={item} className="rounded-2xl bg-white px-3 py-3 text-[10px] font-bold leading-4 text-slate-600 shadow-sm sm:px-4 sm:text-sm sm:leading-5">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex h-full flex-col gap-6">
          <div className="h-full rounded-4xl border border-slate-200 bg-white p-8 shadow-card">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-aied-blue">{dictionary.about.companyTitle}</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-aied-ink">PedaNova</h2>
            <p className="mt-4 text-lg leading-8 text-aied-muted">{dictionary.about.companyText}</p>
            <p className="mt-8 text-sm font-black uppercase tracking-[0.25em] text-aied-blue">{dictionary.about.productsTitle}</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2" aria-label={dictionary.about.productsTitle}>
              {dictionary.about.products.map((product) => {
                const productLink = productWebsiteLinks[product.name];

                return (
                  <a
                    key={product.name}
                    href={productLink.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${dictionary.common.externalLink}: ${product.name} product`}
                    className="focus-ring group flex min-h-[13rem] flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-card transition hover:-translate-y-0.5 hover:border-aied-cyan hover:bg-aied-soft hover:shadow-card sm:p-7"
                  >
                    <h3 className="text-2xl font-black leading-tight text-aied-ink transition group-hover:text-aied-blue sm:text-3xl">{product.name}</h3>
                    <p className="mt-4 text-base leading-7 text-aied-muted sm:text-lg sm:leading-8">{product.text}</p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-black text-aied-blue">
                      <span>{productLink.label}</span>
                      <span aria-hidden="true" className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                        ↗
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="rounded-4xl border border-slate-200 bg-white p-8 shadow-card">
          <h2 className="text-3xl font-black tracking-tight text-aied-ink">{dictionary.about.linksTitle}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {profileLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${dictionary.common.externalLink}: ${link.name}`}
                className="focus-ring group grid min-h-20 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-3xl border border-slate-200 bg-white px-3 py-4 shadow-sm transition hover:-translate-y-0.5 hover:border-aied-cyan hover:bg-aied-soft hover:shadow-card"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white shadow-[inset_0_0_0_1px_rgba(219,228,238,0.95),0_10px_28px_rgba(15,23,42,0.08)] transition group-hover:scale-105">
                  <WebsiteLogo logo={link.logo} />
                </span>
                <span className="min-w-0">
                  <span className="block text-base font-black tracking-tight text-aied-ink transition group-hover:text-aied-blue">{link.name}</span>
                  <span className="mt-1 block truncate text-sm font-bold text-aied-blue">{link.label}</span>
                </span>
                <span aria-hidden="true" className="text-lg font-black leading-none text-aied-blue transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
