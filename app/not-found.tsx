import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-hub-gradient px-6 py-20">
      <div className="container-page max-w-2xl rounded-4xl border border-slate-200 bg-white/85 p-10 text-center shadow-soft backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-aied-blue">404</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-aied-ink">Page not found</h1>
        <p className="mt-4 text-lg leading-8 text-aied-muted">
          The page may have moved, or the language path is not supported.
        </p>
        <Link
          href="/en"
          className="focus-ring mt-8 inline-flex rounded-full bg-aied-ink px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-aied-blue"
        >
          Back to AIEDHK
        </Link>
      </div>
    </main>
  );
}
