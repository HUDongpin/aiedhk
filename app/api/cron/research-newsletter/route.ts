import { handleNewsletterCron } from "@/lib/newsletter/cron";

// Compatibility entrypoint: every locale delegates to the same durable News run.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;
export async function GET(request: Request) { return handleNewsletterCron(request, "news"); }
