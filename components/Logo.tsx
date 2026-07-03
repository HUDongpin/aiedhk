import Link from "next/link";
import type { Locale } from "@/lib/i18n";

interface LogoProps {
  locale: Locale;
  compact?: boolean;
}

export default function Logo({ locale, compact = false }: LogoProps) {
  return (
    <Link href={`/${locale}`} dir="ltr" className="focus-ring group inline-flex items-center gap-3 rounded-2xl">
      <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-2xl border border-aied-line bg-aied-soft shadow-card">
        <svg viewBox="0 0 48 48" aria-hidden="true" className="h-9 w-9">
          <defs>
            <linearGradient id="logoCompassGradient" x1="10" x2="38" y1="6" y2="39" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#48d5e8" />
              <stop offset="1" stopColor="#0f5ea8" />
            </linearGradient>
          </defs>
          <g fill="none" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="24" cy="18" r="12.3" stroke="url(#logoCompassGradient)" strokeWidth="3.2" />
            <path d="M24 8.8L28.8 22.2L24 19.7L19.2 22.2L24 8.8Z" fill="#0f5ea8" stroke="#0f5ea8" strokeWidth="1.4" />
            <path d="M13.8 34.2C18.3 31.2 22.4 31.8 24 35.3C25.6 31.8 29.7 31.2 34.2 34.2" stroke="#0f5ea8" strokeWidth="3.2" />
            <path d="M14 39H34" stroke="#48d5e8" strokeWidth="3.2" />
            <circle cx="24" cy="18" r="1.9" fill="#ffffff" stroke="#ffffff" strokeWidth="1" />
            <circle cx="12.5" cy="18" r="1.7" fill="#48d5e8" stroke="none" />
            <circle cx="35.5" cy="18" r="1.7" fill="#48d5e8" stroke="none" />
            <path d="M15.5 18H19.3M28.7 18H32.5" stroke="#48d5e8" strokeWidth="1.8" />
          </g>
        </svg>
      </span>
      {!compact && (
        <span className="leading-tight">
          <span className="block text-lg font-black tracking-tight text-aied-ink transition group-hover:text-aied-blue">AIEDHK</span>
          <span className="hidden text-xs font-medium text-aied-muted sm:block">AI in Education Hub of Knowledge</span>
        </span>
      )}
    </Link>
  );
}
