import { createHash } from "node:crypto";
import { NextResponse } from "next/server";
import { createDashScopeTtsCache, resolveDashScopeTtsConfig, synthesizeDashScopeTtsWithRetry } from "@/lib/dashscope-tts";
import { normalizeLocale } from "@/lib/i18n";
import { getPublishedResearchPaperBySlug } from "@/lib/research-data";

interface RouteContext {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-dynamic";

const summaryAudioCache = createDashScopeTtsCache();
const noStoreHeaders = {
  "Cache-Control": "no-store",
};

type SummaryAudioResult =
  | {
      audioUrl: string;
      model?: string;
      voice?: string;
    }
  | {
      response: NextResponse;
    };

function cacheKeyForSummary(input: { locale: string; slug: string; text: string; model?: string; voice?: string }) {
  const contentHash = createHash("sha256").update(input.text).digest("hex").slice(0, 16);
  return [input.locale, input.slug, input.model, input.voice, contentHash].join(":");
}

async function resolveSummaryAudio(request: Request, { params }: RouteContext): Promise<SummaryAudioResult> {
  const { slug } = await params;
  const locale = normalizeLocale(new URL(request.url).searchParams.get("language"));

  if (locale !== "en") {
    return { response: NextResponse.json({ error: "Audio summaries are currently available only in English." }, { status: 400 }) };
  }

  const paper = await getPublishedResearchPaperBySlug(slug, locale);
  if (!paper) {
    return { response: NextResponse.json({ error: "Research news item not found." }, { status: 404 }) };
  }

  try {
    const config = resolveDashScopeTtsConfig();
    const audioUrl = await summaryAudioCache.getOrCreate(
      cacheKeyForSummary({ locale, slug, text: paper.fullSummary, model: config.model, voice: config.voice }),
      () =>
        synthesizeDashScopeTtsWithRetry(
          {
            ...config,
            text: paper.fullSummary,
          },
          { attempts: 2, retryDelayMs: 800 }
        )
    );

    return {
      audioUrl,
      model: config.model,
      voice: config.voice,
    };
  } catch {
    return {
      response: NextResponse.json(
        { error: "Audio summary could not be generated." },
        {
          status: 502,
          headers: noStoreHeaders,
        }
      ),
    };
  }
}

export async function POST(request: Request, context: RouteContext) {
  const result = await resolveSummaryAudio(request, context);
  if ("response" in result) return result.response;

  return NextResponse.json(
    {
      audioUrl: result.audioUrl,
      model: result.model,
      voice: result.voice,
    },
    {
      headers: noStoreHeaders,
    }
  );
}
