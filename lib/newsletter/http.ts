import { normalizeLocale } from "@/lib/i18n";
import { classifyLegacySource } from "./policy";
import { newsletterActionPage, newsletterActionStatus, newsletterPrivateHeaders, newsletterSignupPage } from "./pages";
import type * as NewsletterService from "./service";
import type { NewsletterActionState } from "./service";
import type { NewsletterChannel } from "./types";

export type NewsletterHttpService = Pick<typeof NewsletterService,
  "subscribeNewsletter" | "inspectNewsletterConfirmation" | "confirmNewsletter" | "inspectNewsletterUnsubscribe" | "unsubscribeNewsletter">;

const MAX_BODY_BYTES = 8 * 1024;

class InvalidBody extends Error {
  constructor(readonly httpStatus: number) { super("Invalid request body"); }
}

function contentType(request: Request) {
  return request.headers.get("content-type")?.split(";", 1)[0].trim().toLowerCase() ?? "";
}

function stringValue(value: unknown) {
  return typeof value === "string" ? value : "";
}

function isChannel(value: unknown): value is NewsletterChannel {
  return value === "news" || value === "academy";
}

async function boundedBody(request: Request) {
  if (Number(request.headers.get("content-length")) > MAX_BODY_BYTES) throw new InvalidBody(413);
  const reader = request.body?.getReader();
  if (!reader) return new Uint8Array(0);
  let size = 0;
  const chunks: Uint8Array[] = [];
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > MAX_BODY_BYTES) {
        await reader.cancel().catch(() => undefined);
        throw new InvalidBody(413);
      }
      chunks.push(value);
    }
    const bytes = new Uint8Array(size);
    let offset = 0;
    for (const chunk of chunks) {
      bytes.set(chunk, offset);
      offset += chunk.byteLength;
    }
    return bytes;
  } catch (error) {
    throw error instanceof InvalidBody ? error : new InvalidBody(400);
  } finally {
    reader.releaseLock();
  }
}

async function boundedText(request: Request) {
  const body = await boundedBody(request);
  try {
    return new TextDecoder("utf-8", { fatal: true }).decode(body);
  } catch {
    throw new InvalidBody(400);
  }
}

function parseJson(text: string): Record<string, unknown> {
  try {
    const value: unknown = JSON.parse(text);
    if (!value || typeof value !== "object" || Array.isArray(value)) throw new InvalidBody(400);
    return value as Record<string, unknown>;
  } catch {
    throw new InvalidBody(400);
  }
}

async function actionBody(request: Request) {
  const type = contentType(request);
  if (type !== "application/json" && type !== "application/x-www-form-urlencoded") throw new InvalidBody(415);
  const text = await boundedText(request);
  return type === "application/json" ? parseJson(text) : new URLSearchParams(text);
}

async function unsubscribeBody(request: Request) {
  if (contentType(request) !== "multipart/form-data") return actionBody(request);
  // RFC8058 permits multipart forms. Bound the complete byte stream before
  // invoking the multipart parser, which otherwise buffers the request itself.
  const body = await boundedBody(request);
  try {
    return await new Response(body, { headers: { "content-type": request.headers.get("content-type")! } }).formData();
  } catch {
    throw new InvalidBody(400);
  }
}

function jsonStatus(status: string, httpStatus: number, headers: Record<string, string> = {}) {
  return Response.json({ status }, { status: httpStatus, headers: { ...newsletterPrivateHeaders, ...headers } });
}

function tokenFrom(request: Request) {
  const values = new URL(request.url).searchParams.getAll("token");
  if (values.length !== 1 || !values[0].trim() || values[0].length > 2048) return null;
  return values[0].trim();
}

function actionResponse(request: Request, kind: "confirm" | "unsubscribe", state: NewsletterActionState, token: string, asJson = false, httpStatus?: number) {
  return asJson
    ? jsonStatus(state.status, httpStatus ?? newsletterActionStatus(state.status))
    : newsletterActionPage({ kind, state, token, fallbackLocale: normalizeLocale(new URL(request.url).searchParams.get("language")), httpStatus });
}

export function createNewsletterHttpHandlers(service: NewsletterHttpService) {
  async function subscribe(request: Request, legacy: boolean) {
    const native = !legacy && contentType(request) === "application/x-www-form-urlencoded";
    let locale = normalizeLocale(null);
    let displayChannel: NewsletterChannel = "news";
    const respond = (status: string, httpStatus: number, headers: Record<string, string> = {}) => native
      ? newsletterSignupPage({ locale, channel: displayChannel, status, httpStatus, headers })
      : jsonStatus(status, httpStatus, headers);
    try {
      if (!native && contentType(request) !== "application/json") throw new InvalidBody(415);
      const text = await boundedText(request);
      const body: Record<string, unknown> = native ? Object.fromEntries(new URLSearchParams(text)) : parseJson(text);
      locale = normalizeLocale(stringValue(body.locale));
      if (isChannel(body.channel)) displayChannel = body.channel;
      const honeypot = stringValue(body.honeypot) || (native ? stringValue(body.company) : "");
      // Match the real pending response without disclosing bot suppression or sending mail.
      if (honeypot.trim()) return respond("pending_confirmation", 202);
      const sourcePath = stringValue(body.sourcePath);
      const channel = legacy && !("channel" in body)
        ? classifyLegacySource(sourcePath) === "academy" ? "academy" : "news"
        : body.channel;
      if (!isChannel(channel)) return respond("invalid_channel", 400);
      const result = await service.subscribeNewsletter({ email: stringValue(body.email), channel, locale: stringValue(body.locale), sourcePath, honeypot });
      if (result.status === "suppressed") return respond("pending_confirmation", 202);
      const supported = ["pending_confirmation", "already_subscribed", "invalid_email", "invalid_channel", "rate_limited", "confirmation_failed", "database_not_configured", "service_unavailable"];
      if (!supported.includes(result.status)) return respond("service_unavailable", 503);
      const headers: Record<string, string> = {};
      if (result.retryAfterSeconds && Number.isFinite(result.retryAfterSeconds) && result.retryAfterSeconds > 0) headers["retry-after"] = String(Math.ceil(result.retryAfterSeconds));
      return respond(result.status, result.httpStatus, headers);
    } catch (error) {
      return error instanceof InvalidBody ? respond("invalid_email", error.httpStatus) : respond("service_unavailable", 503);
    }
  }

  async function confirmGet(request: Request) {
    const token = tokenFrom(request);
    if (!token) return actionResponse(request, "confirm", { status: "invalid" }, "");
    try {
      return actionResponse(request, "confirm", await service.inspectNewsletterConfirmation(token), token);
    } catch {
      return actionResponse(request, "confirm", { status: "service_unavailable" }, token);
    }
  }

  async function confirmPost(request: Request) {
    const token = tokenFrom(request);
    const asJson = contentType(request) === "application/json";
    if (!token) return actionResponse(request, "confirm", { status: "invalid" }, "", asJson);
    try {
      const body = await actionBody(request);
      const submitted = body instanceof URLSearchParams ? body.getAll("channels") : body.channels;
      if (submitted !== undefined && (!Array.isArray(submitted) || !submitted.every(isChannel))) throw new InvalidBody(400);
      const channels = submitted === undefined ? undefined : [...new Set(submitted as NewsletterChannel[])];
      const state = await service.confirmNewsletter(token, channels);
      return actionResponse(request, "confirm", state, token, asJson);
    } catch (error) {
      return actionResponse(request, "confirm", { status: error instanceof InvalidBody ? "invalid" : "service_unavailable" }, token, asJson, error instanceof InvalidBody ? error.httpStatus : undefined);
    }
  }

  async function unsubscribeGet(request: Request) {
    const token = tokenFrom(request);
    if (!token) return actionResponse(request, "unsubscribe", { status: "invalid" }, "");
    try {
      return actionResponse(request, "unsubscribe", await service.inspectNewsletterUnsubscribe(token), token);
    } catch {
      return actionResponse(request, "unsubscribe", { status: "service_unavailable" }, token);
    }
  }

  async function unsubscribePost(request: Request) {
    const token = tokenFrom(request);
    if (!token) return jsonStatus("invalid", 400);
    let browser = false;
    try {
      const body = await unsubscribeBody(request);
      if (!(body instanceof URLSearchParams) && !(body instanceof FormData)) throw new InvalidBody(400);
      const oneClick = body.get("List-Unsubscribe") === "One-Click";
      browser = !oneClick && body.get("intent") === "unsubscribe";
      if (!oneClick && !browser) throw new InvalidBody(400);
      const state = await service.unsubscribeNewsletter(token);
      if (browser) return actionResponse(request, "unsubscribe", state, token);
      return ["unsubscribed", "already_unsubscribed", "not_found", "invalid"].includes(state.status)
        ? jsonStatus("ok", 200)
        : jsonStatus("service_unavailable", 503);
    } catch (error) {
      const state = { status: error instanceof InvalidBody ? "invalid" : "service_unavailable" };
      return actionResponse(request, "unsubscribe", state, token, !browser, error instanceof InvalidBody ? error.httpStatus : undefined);
    }
  }

  return {
    subscribePost: (request: Request) => subscribe(request, false),
    legacySubscribePost: (request: Request) => subscribe(request, true),
    confirmGet,
    confirmPost,
    unsubscribeGet,
    unsubscribePost,
  };
}
