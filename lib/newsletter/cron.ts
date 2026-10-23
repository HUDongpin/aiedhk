import { timingSafeEqual } from "node:crypto";
import { readNewsletterConfig } from "./config";
import { getNewsletterRuntime } from "./service";
import { executeNewsletterTick } from "./scheduler";
import type { NewsletterChannel } from "./types";

export async function handleNewsletterCron(request: Request, onlyChannel?: NewsletterChannel) {
  const secret = process.env.CRON_SECRET;
  if (!secret) return Response.json({ status: "cron_not_configured" }, { status: 503 });
  const expected = Buffer.from(`Bearer ${secret}`);
  const supplied = Buffer.from(request.headers.get("authorization") ?? "");
  if (expected.length !== supplied.length || !timingSafeEqual(expected, supplied)) return Response.json({ status: "unauthorized" }, { status: 401 });
  const dryRun = ["1", "true"].includes(new URL(request.url).searchParams.get("dryRun") ?? "");
  if (!dryRun && readNewsletterConfig().mode === "off") return Response.json({ status: "disabled" });
  try {
    const result = await executeNewsletterTick(getNewsletterRuntime(), { dryRun, onlyChannel });
    if (!dryRun) console.info("newsletter_tick", result);
    const unhealthy = ["completed_with_errors", "not_configured", "baseline_required"].includes(result.status);
    return Response.json(result, { status: unhealthy ? 503 : 200, headers: { "cache-control": "no-store" } });
  } catch {
    console.error("newsletter_tick_failed", { code: "infrastructure_unavailable" });
    return Response.json({ status: "service_unavailable" }, { status: 503, headers: { "cache-control": "no-store" } });
  }
}
