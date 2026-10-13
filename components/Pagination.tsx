import PaginationLink from "@/components/PaginationLink";
import { CaretDoubleLeft, CaretDoubleRight, CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";
import type { ReactNode } from "react";
import { localeMeta, type Dictionary, type Locale } from "@/lib/i18n";
import { getPaginationItems } from "@/lib/pagination";

interface PaginationProps {
  locale: Locale;
  dictionary: Dictionary;
  page: number;
  totalPages: number;
  hrefForPage: (page: number) => string;
}

const controlClass = "inline-flex h-11 min-w-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-700";
const interactiveClass = "transition-colors hover:border-aied-blue/30 hover:bg-aied-soft hover:text-aied-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aied-blue";

function PageControl({ href, label, rel, className = "", children }: {
  href?: string;
  label: string;
  rel?: "prev" | "next";
  className?: string;
  children: ReactNode;
}) {
  if (!href) {
    return <span role="link" aria-disabled="true" aria-label={label} className={`${controlClass} ${className} cursor-default opacity-40`}>{children}</span>;
  }
  return <PaginationLink href={href} aria-label={label} rel={rel} className={`${controlClass} ${interactiveClass} ${className}`}>{children}</PaginationLink>;
}

export default function Pagination({ locale, dictionary, page, totalPages, hrefForPage }: PaginationProps) {
  if (totalPages <= 1) return null;

  const labels = dictionary.pagination;
  const rtl = localeMeta[locale].dir === "rtl";
  const PreviousIcon = rtl ? CaretRight : CaretLeft;
  const NextIcon = rtl ? CaretLeft : CaretRight;
  const FirstIcon = rtl ? CaretDoubleRight : CaretDoubleLeft;
  const LastIcon = rtl ? CaretDoubleLeft : CaretDoubleRight;
  const summary = <><span>{dictionary.common.page}</span>{" "}<span dir="ltr" className="inline-block tabular-nums"><span className="font-semibold text-slate-900">{page}</span> / {totalPages}</span></>;

  return (
    <nav aria-label={labels.label} dir={localeMeta[locale].dir} className="mt-10 border-t border-slate-200/80 pt-6">
      <div className="mx-auto flex max-w-fit items-center justify-center gap-1 sm:gap-3">
        <PageControl label={labels.first} href={page > 1 ? hrefForPage(1) : undefined} className="sm:hidden">
          <FirstIcon size={18} aria-hidden="true" />
        </PageControl>
        <PageControl label={labels.previous} href={page > 1 ? hrefForPage(page - 1) : undefined} rel="prev">
          <PreviousIcon size={18} aria-hidden="true" />
          <span className="hidden md:inline">{labels.previous}</span>
        </PageControl>

        <p aria-live="polite" aria-atomic="true" className="min-w-0 px-1 text-center text-xs leading-5 text-slate-600 sm:hidden">{summary}</p>

        <ul className="hidden items-center gap-1 sm:flex">
          {getPaginationItems(page, totalPages).map((item) => (
            <li key={item}>
              {typeof item === "number" ? (
                <PaginationLink
                  aria-label={`${dictionary.common.page} ${item}`}
                  aria-current={item === page ? "page" : undefined}
                  href={hrefForPage(item)}
                  className={`inline-flex h-11 min-w-11 items-center justify-center rounded-xl px-3 text-sm font-semibold tabular-nums ${interactiveClass} ${item === page ? "bg-aied-cyan text-slate-950 ring-1 ring-inset ring-slate-900/5 hover:bg-aied-cyan hover:text-slate-950" : "text-slate-600"}`}
                >{item}</PaginationLink>
              ) : (
                <span aria-hidden="true" className="inline-flex h-11 w-8 items-center justify-center text-sm text-slate-500">…</span>
              )}
            </li>
          ))}
        </ul>

        <PageControl label={labels.next} href={page < totalPages ? hrefForPage(page + 1) : undefined} rel="next">
          <span className="hidden md:inline">{labels.next}</span>
          <NextIcon size={18} aria-hidden="true" />
        </PageControl>
        <PageControl label={labels.last} href={page < totalPages ? hrefForPage(totalPages) : undefined} className="sm:hidden">
          <LastIcon size={18} aria-hidden="true" />
        </PageControl>
      </div>
      <p aria-live="polite" aria-atomic="true" className="mt-4 hidden text-center text-sm text-slate-600 sm:block">{summary}</p>
    </nav>
  );
}
