import { createNewsletterHttpHandlers } from "@/lib/newsletter/http";
import * as newsletterService from "@/lib/newsletter/service";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const handlers = createNewsletterHttpHandlers(newsletterService);

// Preserve old form URLs while using the same confirmation and channel policy.
export async function POST(request: Request) {
  return handlers.legacySubscribePost(request);
}
