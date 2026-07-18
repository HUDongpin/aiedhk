/**
 * Batch-translate the curated Research News corpus into target locales using the
 * AI localization stage, for human review before pasting into
 * `lib/research-reviewed-localizations.ts`.
 *
 * Usage:
 *   AI_API_KEY=... AI_BASE_URL=... AI_MODEL=qwen-plus \
 *     npx tsx scripts/translate-reviewed-papers.ts [locale ...] [--all]
 *
 * Defaults to translating only the articles that do NOT yet have a reviewed
 * translation, into zh-hant and zh-hans. Pass explicit locale codes to override
 * the target set, or --all to (re)translate every article.
 *
 * Output is written to output/reviewed-localizations.json (gitignored). Without
 * AI credentials the script still runs but emits English fallbacks flagged with
 * `usedModel: false`, so you can see the shape and coverage without spending API
 * calls. Review every entry before adding it to the source file.
 */
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { isLocale, type Locale } from "@/lib/i18n";
import { reviewedResearchPapers } from "@/lib/research-reviewed-data";
import { getReviewedLocalization } from "@/lib/research-reviewed-localizations";
import { generateResearchLocalization, type LocalizableResearchFields } from "@/lib/research-pipeline/generation";

const DEFAULT_LOCALES: Locale[] = ["zh-hant", "zh-hans"];

function parseArgs(argv: string[]) {
  const all = argv.includes("--all");
  const localeArgs = argv.filter((arg) => !arg.startsWith("--"));
  const invalid = localeArgs.filter((arg) => !isLocale(arg));
  if (invalid.length > 0) {
    throw new Error(`Unknown locale(s): ${invalid.join(", ")}`);
  }
  const locales = (localeArgs.length > 0 ? localeArgs : DEFAULT_LOCALES).filter(isLocale) as Locale[];
  return { locales, all };
}

async function main() {
  const { locales, all } = parseArgs(process.argv.slice(2));
  const result: Record<string, Partial<Record<Locale, unknown>>> = {};

  let translated = 0;
  let fallbacks = 0;

  for (const paper of reviewedResearchPapers) {
    for (const locale of locales) {
      if (!all && getReviewedLocalization(paper.id, locale)) {
        continue; // already has a reviewed translation
      }

      const source: LocalizableResearchFields = {
        title: paper.title,
        tags: paper.tags,
        imageAlt: paper.imageAlt,
        shortSummary: paper.shortSummary,
        fullSummary: paper.fullSummary,
        keyTakeaways: paper.keyTakeaways,
        whyItMatters: paper.whyItMatters,
      };

      const { localization, usedModel, model, error } = await generateResearchLocalization(source, locale);
      result[paper.id] = { ...(result[paper.id] ?? {}), [locale]: localization };

      if (usedModel) translated += 1;
      else fallbacks += 1;

      console.log(`${usedModel ? "translated" : "fallback  "} ${paper.id} ${locale} (${model})${error ? ` — ${error}` : ""}`);
    }
  }

  const outDir = join(process.cwd(), "output");
  await mkdir(outDir, { recursive: true });
  const outPath = join(outDir, "reviewed-localizations.json");
  await writeFile(outPath, JSON.stringify(result, null, 2), "utf8");

  console.log(`\nDone. ${translated} translated, ${fallbacks} English fallbacks.`);
  console.log(`Review then paste into lib/research-reviewed-localizations.ts: ${outPath}`);
  if (fallbacks > 0 && translated === 0) {
    console.log("Note: no AI_API_KEY/AI_BASE_URL configured — all entries are English fallbacks.");
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
