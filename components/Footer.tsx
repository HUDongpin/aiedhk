import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n";
import Logo from "./Logo";

interface FooterProps {
  locale: Locale;
  dictionary: Dictionary;
}

const ecosystemLinks = [
  { label: "Dr. Peter Hu Dongpin", href: "https://www.hudongpin.com" },
  { label: "PedaNova Technology", href: "https://www.pedanova.tech" },
  { label: "MAIS", href: "https://mais.ac" },
  { label: "CAIS", href: "https://www.cais.hk" },
];

export default function Footer({ locale, dictionary }: FooterProps) {
  const navItems = [
    { href: `/${locale}`, label: dictionary.nav.home },
    { href: `/${locale}/mission`, label: dictionary.nav.mission },
    { href: `/${locale}/news`, label: dictionary.nav.researchNews },
    { href: `/${locale}/about`, label: dictionary.nav.about },
  ];

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.3fr_0.7fr_0.9fr]">
        <div>
          <Logo locale={locale} />
          <p className="mt-5 max-w-md text-sm leading-7 text-aied-muted">{dictionary.footer.description}</p>
        </div>
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.18em] text-aied-ink">{dictionary.footer.navigation}</h3>
          <div className="mt-4 grid gap-3 text-sm text-aied-muted">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-aied-blue">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.18em] text-aied-ink">{dictionary.footer.ecosystem}</h3>
          <div className="mt-4 grid gap-3 text-sm text-aied-muted">
            {ecosystemLinks.map((item) => (
              <a key={item.href} href={item.href} target="_blank" rel="noreferrer" className="transition hover:text-aied-blue">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-slate-100 py-5 text-center text-xs font-medium text-slate-500">
        {dictionary.footer.copyright}
      </div>
    </footer>
  );
}
