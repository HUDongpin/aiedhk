import { handleNewsletterCron } from "@/lib/newsletter/cron";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;
export async function GET(request: Request) { return handleNewsletterCron(request); }
