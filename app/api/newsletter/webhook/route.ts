import { getNewsletterRuntime } from "@/lib/newsletter/service";
import { createNewsletterWebhookHandler } from "@/lib/newsletter/webhook";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export async function POST(request: Request) {
  return createNewsletterWebhookHandler({ secret: process.env.RESEND_WEBHOOK_SECRET ?? "", record: (event) => getNewsletterRuntime().queue.recordEvent(event) })(request);
}
