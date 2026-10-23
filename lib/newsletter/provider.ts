import { Resend } from "resend";
import type { RenderedNewsletterEmail } from "./types";

export interface ProviderSendInput {
  id: string;
  email: string;
  from?: string;
  idempotencyKey: string;
  payload: RenderedNewsletterEmail;
  unsubscribeUrl?: string;
}
export type ProviderSendResult = { ok: true; id: string } | {
  ok: false; code: string; retryable: boolean; ambiguous: boolean; retryAfterSeconds?: number;
};
export interface NewsletterProvider { readonly from?: string; send(input: ProviderSendInput): Promise<ProviderSendResult> }

export class ResendNewsletterProvider implements NewsletterProvider {
  private readonly client: Resend;
  constructor(apiKey: string, readonly from: string) {
    this.client = new Resend(apiKey, { baseUrl: "https://api.resend.com" });
  }

  async send(input: ProviderSendInput): Promise<ProviderSendResult> {
    try {
      const result = await this.client.emails.send({
        from: input.from ?? this.from, to: [input.email], subject: input.payload.subject, html: input.payload.html, text: input.payload.text,
        tags: [{ name: "aiedhk_delivery", value: input.id }],
        ...(input.unsubscribeUrl ? { headers: {
          "List-Unsubscribe": `<${input.unsubscribeUrl}>`,
          "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
        } } : {}),
      }, { idempotencyKey: input.idempotencyKey, signal: AbortSignal.timeout(10_000) });
      if (result.data?.id) return { ok: true, id: result.data.id };
      const error = result.error;
      const status = error?.statusCode;
      const code = error?.name && /^[a-z_]+$/.test(error.name) ? error.name : "provider_error";
      const retryAfter = Number(result.headers?.["retry-after"]);
      return { ok: false, code,
        retryable: code !== "invalid_idempotent_request" && (status == null || status === 429 || status === 409 || status >= 500),
        ambiguous: status == null || status >= 500 || code === "invalid_idempotent_request",
        ...(Number.isFinite(retryAfter) && retryAfter > 0 ? { retryAfterSeconds: Math.min(retryAfter, 86400) } : {}),
      };
    } catch {
      return { ok: false, code: "network_error", retryable: true, ambiguous: true };
    }
  }
}
