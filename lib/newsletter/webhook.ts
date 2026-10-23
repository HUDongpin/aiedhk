import { Resend } from "resend";
import type { NewsletterProviderEvent } from "./delivery";

const LIMIT = 64 * 1024;
export function createNewsletterWebhookHandler({ secret, record }: {
  secret: string; record: (event: NewsletterProviderEvent) => Promise<unknown>;
}) {
  return async (request: Request) => {
    if (!secret) return Response.json({ status: "webhook_not_configured" }, { status: 503 });
    if (Number(request.headers.get("content-length")) > LIMIT) return Response.json({ status: "too_large" }, { status: 413 });
    const reader = request.body?.getReader();
    const parts: Uint8Array[] = [];
    let length = 0;
    try {
      if (reader) while (true) {
        const part = await reader.read();
        if (part.done) break;
        length += part.value.byteLength;
        if (length > LIMIT) { await reader.cancel().catch(() => {}); return Response.json({ status: "too_large" }, { status: 413 }); }
        parts.push(part.value);
      }
    } catch { return Response.json({ status: "invalid_webhook" }, { status: 400 }); }
    finally { reader?.releaseLock(); }
    const raw = Buffer.concat(parts).toString("utf8");
    const id = request.headers.get("svix-id") ?? "";
    let event;
    try {
      event = new Resend("webhook-verification-only").webhooks.verify({ payload: raw, webhookSecret: secret, headers: {
        id, timestamp: request.headers.get("svix-timestamp") ?? "", signature: request.headers.get("svix-signature") ?? "",
      } });
    } catch { return Response.json({ status: "invalid_webhook" }, { status: 400 }); }
    if (!event.type.startsWith("email.") || !("email_id" in event.data)) return Response.json({ status: "ignored" });
    const emailId = event.data.email_id;
    const occurredAt = new Date(event.created_at);
    if (typeof emailId !== "string" || !emailId || emailId.length > 256 || !id || id.length > 256 || !Number.isFinite(occurredAt.getTime())) return Response.json({ status: "invalid_webhook" }, { status: 400 });
    const tags = "tags" in event.data ? event.data.tags : undefined;
    const deliveryId = tags && typeof tags === "object" && "aiedhk_delivery" in tags && typeof tags.aiedhk_delivery === "string" ? tags.aiedhk_delivery : undefined;
    const bounce = "bounce" in event.data ? event.data.bounce : undefined;
    const bounceType = bounce?.type === "Permanent" ? "Permanent" : bounce?.type === "Transient" ? "Transient" : "Undetermined";
    try {
      await record({ id, type: event.type, emailId, deliveryId, occurredAt, ...(event.type === "email.bounced" ? { bounceType } : {}) });
      return Response.json({ status: "ok" }, { headers: { "cache-control": "no-store" } });
    } catch { return Response.json({ status: "webhook_storage_unavailable" }, { status: 503 }); }
  };
}
