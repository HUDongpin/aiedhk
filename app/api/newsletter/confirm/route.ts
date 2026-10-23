import { createNewsletterHttpHandlers } from "@/lib/newsletter/http";
import * as newsletterService from "@/lib/newsletter/service";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const handlers = createNewsletterHttpHandlers(newsletterService);

export async function GET(request: Request) {
  return handlers.confirmGet(request);
}

export async function POST(request: Request) {
  return handlers.confirmPost(request);
}
