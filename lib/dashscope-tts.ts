export const DEFAULT_DASHSCOPE_TTS_MODEL = "cosyvoice-v3-flash";
export const DEFAULT_DASHSCOPE_TTS_VOICE = "loongdavid_v3";
export const DEFAULT_DASHSCOPE_TTS_FORMAT = "mp3";
export const DEFAULT_DASHSCOPE_TTS_SAMPLE_RATE = 24000;
export const DEFAULT_DASHSCOPE_TTS_LANGUAGE = "en";
export const DEFAULT_DASHSCOPE_TTS_CACHE_TTL_MS = 23 * 60 * 60 * 1000;

const SPEECH_SYNTHESIZER_PATH = "/api/v1/services/audio/tts/SpeechSynthesizer";
const LEGACY_DASHSCOPE_TTS_ENDPOINT = `https://dashscope.aliyuncs.com${SPEECH_SYNTHESIZER_PATH}`;

export interface DashScopeTtsConfig {
  apiKey: string;
  model?: string;
  voice?: string;
  endpoint?: string;
  workspaceId?: string;
  format?: string;
  sampleRate?: number;
  language?: string;
}

export interface DashScopeTtsRequestOptions extends DashScopeTtsConfig {
  text: string;
}

export interface DashScopeTtsRequest {
  url: string;
  init: RequestInit;
}

export interface DashScopeTtsRetryOptions {
  fetcher?: typeof fetch;
  attempts?: number;
  retryDelayMs?: number;
}

interface CacheEntry {
  audioUrl: string;
  expiresAt: number;
}

function trimEnv(value: string | undefined) {
  const trimmed = value?.trim();
  return trimmed || undefined;
}

function toPositiveInteger(value: string | undefined, fallback: number) {
  if (!value) return fallback;
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

export function resolveDashScopeTtsConfig(env: NodeJS.ProcessEnv = process.env): DashScopeTtsConfig {
  const apiKey = trimEnv(env.DASHSCOPE_API_KEY);
  if (!apiKey) {
    throw new Error("DASHSCOPE_API_KEY is not configured.");
  }

  return {
    apiKey,
    model: trimEnv(env.DASHSCOPE_TTS_MODEL) ?? DEFAULT_DASHSCOPE_TTS_MODEL,
    voice: trimEnv(env.DASHSCOPE_TTS_VOICE) ?? DEFAULT_DASHSCOPE_TTS_VOICE,
    endpoint: trimEnv(env.DASHSCOPE_TTS_ENDPOINT),
    workspaceId: trimEnv(env.DASHSCOPE_WORKSPACE_ID),
    format: trimEnv(env.DASHSCOPE_TTS_FORMAT) ?? DEFAULT_DASHSCOPE_TTS_FORMAT,
    sampleRate: toPositiveInteger(env.DASHSCOPE_TTS_SAMPLE_RATE, DEFAULT_DASHSCOPE_TTS_SAMPLE_RATE),
    language: trimEnv(env.DASHSCOPE_TTS_LANGUAGE) ?? DEFAULT_DASHSCOPE_TTS_LANGUAGE,
  };
}

export function resolveDashScopeTtsEndpoint(options: Pick<DashScopeTtsConfig, "endpoint" | "workspaceId"> = {}) {
  if (options.endpoint) return options.endpoint;
  if (options.workspaceId) {
    return `https://${options.workspaceId}.cn-beijing.maas.aliyuncs.com${SPEECH_SYNTHESIZER_PATH}`;
  }
  return LEGACY_DASHSCOPE_TTS_ENDPOINT;
}

export function normalizeTtsText(text: string) {
  return text.replace(/\s+/g, " ").trim();
}

export function buildDashScopeTtsRequest(options: DashScopeTtsRequestOptions): DashScopeTtsRequest {
  const text = normalizeTtsText(options.text);
  const apiKey = options.apiKey.trim();
  if (!apiKey) throw new Error("DashScope API key is required.");
  if (!text) throw new Error("DashScope TTS text is required.");

  const body = {
    model: options.model ?? DEFAULT_DASHSCOPE_TTS_MODEL,
    input: {
      text,
      voice: options.voice ?? DEFAULT_DASHSCOPE_TTS_VOICE,
      format: options.format ?? DEFAULT_DASHSCOPE_TTS_FORMAT,
      sample_rate: options.sampleRate ?? DEFAULT_DASHSCOPE_TTS_SAMPLE_RATE,
      language_hints: [options.language ?? DEFAULT_DASHSCOPE_TTS_LANGUAGE],
    },
  };

  return {
    url: resolveDashScopeTtsEndpoint(options),
    init: {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function parseDashScopeTtsAudioUrl(payload: unknown) {
  if (!payload || typeof payload !== "object") {
    throw new Error("DashScope TTS response did not include an audio URL.");
  }

  const output = "output" in payload ? payload.output : undefined;
  const audio = output && typeof output === "object" && "audio" in output ? output.audio : undefined;
  const url = audio && typeof audio === "object" && "url" in audio ? audio.url : undefined;

  if (typeof url !== "string" || !url.trim()) {
    throw new Error("DashScope TTS response did not include an audio URL.");
  }

  return url;
}

export async function synthesizeDashScopeTts(options: DashScopeTtsRequestOptions, fetcher: typeof fetch = fetch) {
  const request = buildDashScopeTtsRequest(options);
  const response = await fetcher(request.url, request.init);
  const responseText = await response.text();
  let payload: unknown = null;

  if (responseText) {
    try {
      payload = JSON.parse(responseText);
    } catch {
      payload = null;
    }
  }

  if (!response.ok) {
    throw new Error(`DashScope TTS request failed with status ${response.status}.`);
  }

  return parseDashScopeTtsAudioUrl(payload);
}

function wait(ms: number) {
  if (ms <= 0) return Promise.resolve();
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function synthesizeDashScopeTtsWithRetry(options: DashScopeTtsRequestOptions, retryOptions: DashScopeTtsRetryOptions = {}) {
  const attempts = Math.max(1, retryOptions.attempts ?? 2);
  const retryDelayMs = retryOptions.retryDelayMs ?? 800;
  const fetcher = retryOptions.fetcher ?? fetch;
  let lastError: unknown;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      return await synthesizeDashScopeTts(options, fetcher);
    } catch (error) {
      lastError = error;
      if (attempt < attempts) await wait(retryDelayMs);
    }
  }

  throw lastError instanceof Error ? lastError : new Error("DashScope TTS request failed.");
}

export function createDashScopeTtsCache(ttlMs = DEFAULT_DASHSCOPE_TTS_CACHE_TTL_MS) {
  const entries = new Map<string, CacheEntry>();
  const pending = new Map<string, Promise<string>>();

  return {
    async getOrCreate(key: string, create: () => Promise<string>) {
      const now = Date.now();
      const cached = entries.get(key);
      if (cached && cached.expiresAt > now) return cached.audioUrl;

      const inFlight = pending.get(key);
      if (inFlight) return inFlight;

      const promise = create()
        .then((audioUrl) => {
          entries.set(key, { audioUrl, expiresAt: Date.now() + ttlMs });
          return audioUrl;
        })
        .finally(() => {
          pending.delete(key);
        });

      pending.set(key, promise);
      return promise;
    },
  };
}
