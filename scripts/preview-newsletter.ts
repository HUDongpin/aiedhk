import { mkdir, readFile, realpath, stat, writeFile } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, resolve, sep } from "node:path";
import { buildAcademyCatalog, loadNewsletterFeed } from "@/lib/newsletter/content";
import { renderNewsletterDigest } from "@/lib/newsletter/templates";
import type { Locale } from "@/lib/i18n";
import type { NewsletterChannel, NewsletterEmailItem } from "@/lib/newsletter/types";

const siteUrl = "https://www.aied.hk";
const outputDirectory = "outputs/newsletter-preview";
const htmlBudget = 80_000;
const imageBudget = 600_000;
const newsSlugs = [
  "news-cengage-course-ai-assistants-learning-evidence",
  "news-claude-google-cloud-processor-choice",
  "news-decisions-api-bounded-learning-actions",
  "research-tutoring-loop-evidence-learning",
  "research-tutor-metric-optimization-expert-judgment",
];
const previewNames = ["news", "academy", "news-one", "academy-review", "arabic-fallback", "zh-hans-long-title"];
const imagePathPattern = /^\/images\/newsletter\/[a-z0-9][a-z0-9_-]*-[a-f0-9]{12,64}\.jpg$/;

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]!);
}

function imageSourcePath(source: string): string {
  if (!source.startsWith(siteUrl)) throw new Error("Unexpected preview image source.");
  const path = source.slice(siteUrl.length);
  if (!imagePathPattern.test(path)) throw new Error("Unexpected preview image source.");
  return path;
}

/** Change image sources only; article, lesson and unsubscribe destinations stay exact. */
export function localizePreviewImages(html: string): string {
  return html.replace(/<img\b[^>]*>/gi, (image) => {
    if (/\bsrcset\s*=/i.test(image)) throw new Error("Unexpected preview image source set.");
    const source = image.match(/\bsrc="([^"]+)"/i)?.[1];
    if (!source) throw new Error("Missing preview image source.");
    return image.replace(/\bsrc="[^"]+"/i, `src="${imageSourcePath(source)}"`);
  });
}

/** A small allowlist avoids exposing the repository or interpreting request paths. */
export function previewFilePath(requestPath: string, root: string): string | null {
  if (requestPath === "/") return resolve(root, outputDirectory, "index.html");
  const filename = requestPath.slice(1);
  const generated = ["index.html", "report.json", ...previewNames.flatMap((name) => [
    `${name}.html`, `${name}.txt`, `${name}-preview.html`, `${name}-blocked.html`,
  ])];
  if (requestPath.startsWith("/") && generated.includes(filename)) return resolve(root, outputDirectory, filename);
  if (imagePathPattern.test(requestPath)) return resolve(root, "public", requestPath.slice(1));
  return null;
}

interface PreviewCase {
  name: string;
  label: string;
  description: string;
  channel: NewsletterChannel;
  locale: Locale;
  items: NewsletterEmailItem[];
  review?: boolean;
}

async function previewCases(): Promise<PreviewCase[]> {
  // Explicit dependency injection keeps this tool independent of database credentials.
  const news = await loadNewsletterFeed("news", { databasePapers: async () => [] });
  const selectedNews = newsSlugs.map((slug) => {
    const item = news.flatMap((entry) => entry.items.en ?? []).find((entry) => entry.slug === slug);
    if (!item) throw new Error(`Reviewed News story ${slug} is missing.`);
    return item;
  });
  const pair = buildAcademyCatalog().sort((a, b) => a.order - b.order)[0];
  const academy = pair?.items.en;
  if (!academy || academy.length !== 2) throw new Error("A complete Academy curriculum pair is required.");
  return [
    { name: "news", label: "News · five articles", description: "Five reviewed articles, with the screenshot’s three stories first: Cengage, Claude on Google Cloud, and the Decisions API.", channel: "news", locale: "en", items: selectedNews },
    { name: "academy", label: "Academy · daily pair", description: `The first complete curriculum pair: ${academy.map((item) => item.id).join(" + ")}.`, channel: "academy", locale: "en", items: academy },
    { name: "news-one", label: "News · one article", description: "A short digest using one real reviewed article.", channel: "news", locale: "en", items: selectedNews.slice(0, 1) },
    { name: "academy-review", label: "Academy · review", description: "The same real curriculum pair in review mode.", channel: "academy", locale: "en", items: academy, review: true },
    { name: "arabic-fallback", label: "Arabic · English fallback", description: "Arabic interface with the catalog's honest English content fallback.", channel: "academy", locale: "ar", items: pair.items.ar ?? academy },
    { name: "zh-hans-long-title", label: "Simplified Chinese · long title fixture", description: "Synthetic layout fixture only: long Chinese titles test wrapping; this is not a reviewed translation.", channel: "news", locale: "zh-hans", items: selectedNews.slice(0, 1).map((item) => ({ ...item, title: "排版测试：当人工智能进入课堂，教师如何结合真实学习证据、学生的自主解释、持续反馈与独立迁移表现，审慎判断课程助手是否真正支持了理解与学习", summary: "此条目仅用于检查简体中文长标题与正文的换行表现，不构成文章的正式翻译或新增研究结论。", contentLocale: "zh-hans" })) },
  ];
}

async function imagePayload(html: string, root: string) {
  const images = [...html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"[^>]*>/gi)].map((match) => imageSourcePath(match[1]));
  const sizes = await Promise.all(images.map(async (path) => {
    const file = resolve(root, "public", path.slice(1));
    const info = await stat(file).catch(() => { throw new Error(`Missing newsletter derivative: ${path}. Run the image preparation command first.`); });
    if (!info.isFile()) throw new Error(`Newsletter derivative is not a file: ${path}`);
    return { path, bytes: info.size };
  }));
  return { images: sizes, imageBytes: sizes.reduce((sum, image) => sum + image.bytes, 0) };
}

export async function generateNewsletterPreviews(root = process.cwd()) {
  const cases = await previewCases();
  const destination = resolve(root, outputDirectory);
  const results = [];
  for (const preview of cases) {
    const email = renderNewsletterDigest({ ...preview, siteUrl,
      unsubscribeUrl: `${siteUrl}/api/newsletter/unsubscribe?token=LOCAL_PREVIEW_NOT_A_REAL_TOKEN&language=${preview.locale}`,
    });
    const htmlBytes = Buffer.byteLength(email.html, "utf8");
    if (htmlBytes > htmlBudget) throw new Error(`${preview.name} exceeds the ${htmlBudget}-byte HTML budget (${htmlBytes}).`);
    const payload = await imagePayload(email.html, root);
    if (payload.imageBytes > imageBudget) throw new Error(`${preview.name} exceeds the ${imageBudget}-byte image budget (${payload.imageBytes}).`);
    if (["news", "academy"].includes(preview.name) && payload.images.length !== preview.items.length) {
      throw new Error(`${preview.name} needs one prepared image per item. Complete image mapping and rendering before reviewing.`);
    }
    results.push({ preview, email, htmlBytes, ...payload });
  }

  // Validate every case before writing any new package files.
  await mkdir(destination, { recursive: true });
  for (const { preview, email } of results) {
    const browserHtml = localizePreviewImages(email.html);
    const blockedHtml = browserHtml.replace(/<img\b[^>]*>/gi, "").replace(/<body\b([^>]*)>/i,
      '<body$1><div role="note" style="padding:12px;background:#fff6d5;color:#4f3d00;font:14px Arial,sans-serif;text-align:center;">Review simulation: all images are omitted. Text and links are preserved.</div>');
    await Promise.all([
      writeFile(resolve(destination, `${preview.name}.html`), email.html),
      writeFile(resolve(destination, `${preview.name}.txt`), email.text),
      writeFile(resolve(destination, `${preview.name}-preview.html`), browserHtml),
      writeFile(resolve(destination, `${preview.name}-blocked.html`), blockedHtml),
    ]);
  }
  const report = {
    siteUrl, source: "Local reviewed catalog only; no database access, recipients or sends.",
    limits: { htmlBytes: htmlBudget, imageBytes: imageBudget },
    cases: results.map(({ preview, email, htmlBytes, imageBytes, images }) => ({
      name: preview.name, label: preview.label, description: preview.description, channel: preview.channel, locale: preview.locale,
      itemIds: preview.items.map((item) => item.id), subject: email.subject, htmlBytes, imageBytes, images,
    })),
  };
  await writeFile(resolve(destination, "report.json"), `${JSON.stringify(report, null, 2)}\n`);
  const cards = results.map(({ preview, htmlBytes, imageBytes }) => `<article><h2>${escapeHtml(preview.label)}</h2><p>${escapeHtml(preview.description)}</p><p>${htmlBytes.toLocaleString("en")} HTML bytes · ${imageBytes.toLocaleString("en")} image bytes</p><nav><a href="${preview.name}-preview.html">Open preview</a><a href="${preview.name}-blocked.html">Images blocked simulation</a><a href="${preview.name}.html" download>Original HTML</a><a href="${preview.name}.txt">Plain text</a></nav><iframe title="${escapeHtml(preview.label)}" src="${preview.name}-preview.html" loading="lazy"></iframe></article>`).join("\n");
  const gallery = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>AIEDHK Newsletter Review</title><style>body{margin:0;padding:28px;background:#eeeae3;color:#252525;font:16px/1.5 Arial,sans-serif}main{max-width:1440px;margin:auto}h1{margin-top:0}h2{font-size:21px}p{max-width:75ch}a{color:#155e59}nav{display:flex;gap:14px;flex-wrap:wrap;margin:18px 0}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,440px),1fr));gap:24px}article{background:white;padding:22px;border:1px solid #d6d0c5;border-radius:10px}iframe{width:100%;height:820px;border:1px solid #ddd;box-sizing:border-box}</style></head><body><main><h1>AIEDHK Newsletter Review</h1><p>Local rendering of the real email template. Images load from this checkout; article and lesson links keep their production destinations. The unsubscribe token is an inert placeholder. No recipients or sending services are used.</p><p>Open a preview directly to inspect desktop and narrow mobile widths. Images-blocked pages simulate omission; real email client rendering still needs separate verification. The Chinese long-title case is a synthetic layout fixture.</p><p><a href="report.json">Size and item report</a></p><div class="grid">${cards}</div></main></body></html>`;
  await writeFile(resolve(destination, "index.html"), gallery);
  return { destination, report };
}

async function servePreviews(root: string) {
  const contentTypes: Record<string, string> = { ".html": "text/html; charset=utf-8", ".txt": "text/plain; charset=utf-8", ".json": "application/json; charset=utf-8", ".jpg": "image/jpeg" };
  const allowedRoots = await Promise.all([resolve(root, outputDirectory), resolve(root, "public/images/newsletter")].map((path) => realpath(path)));
  const server = createServer(async (request, response) => {
    if (!["GET", "HEAD"].includes(request.method ?? "")) { response.writeHead(405, { Allow: "GET, HEAD" }); response.end(); return; }
    const path = previewFilePath((request.url ?? "/").split("?", 1)[0], root);
    try {
      if (!path) throw new Error("not_found");
      const actual = await realpath(path);
      if (!allowedRoots.some((allowed) => actual.startsWith(`${allowed}${sep}`))) throw new Error("not_found");
      const body = await readFile(actual);
      response.writeHead(200, {
        "Content-Type": contentTypes[extname(actual)], "Content-Length": body.byteLength, "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff",
        "Content-Security-Policy": "default-src 'none'; img-src 'self'; style-src 'unsafe-inline'; frame-src 'self'; base-uri 'none'; form-action 'none'; frame-ancestors 'self'",
      });
      response.end(request.method === "HEAD" ? undefined : body);
    } catch { response.writeHead(404, { "Content-Type": "text/plain" }); response.end("Not found"); }
  });
  server.on("error", (error) => { console.error(`Preview server failed: ${(error as NodeJS.ErrnoException).code ?? "unknown error"}`); process.exitCode = 1; });
  server.listen(4173, "127.0.0.1", () => console.log("Local preview gallery: http://127.0.0.1:4173 (Ctrl+C to stop)"));
}

async function main() {
  if (process.argv.slice(2).some((argument) => argument !== "--serve")) throw new Error("Usage: node --import tsx scripts/preview-newsletter.ts [--serve]");
  const root = process.cwd();
  const { destination, report } = await generateNewsletterPreviews(root);
  console.log(`Newsletter review package: ${destination}`);
  for (const entry of report.cases) console.log(`${entry.name}: ${entry.itemIds.join(", ")} · HTML ${entry.htmlBytes} bytes · images ${entry.imageBytes} bytes`);
  if (process.argv.includes("--serve")) await servePreviews(root);
  else console.log("Run again with --serve to inspect the gallery at http://127.0.0.1:4173.");
}

if (process.argv[1] && resolve(process.argv[1]) === resolve("scripts/preview-newsletter.ts")) {
  void main().catch((error) => { console.error(error instanceof Error ? error.message : "Newsletter preview failed."); process.exitCode = 1; });
}
