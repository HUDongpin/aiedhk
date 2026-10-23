import { randomUUID } from "node:crypto";
import { loadNewsletterFeed, loadNewsletterAvailability } from "./content";
import { dueNewsletterChannels, type NewsletterFeedEntry } from "./policy";
import type { createNewsletterRuntime } from "./service";
import type { NewsletterChannel } from "./types";

type Runtime = ReturnType<typeof createNewsletterRuntime>;
interface TickOptions {
  now?: Date;
  dryRun?: boolean;
  onlyChannel?: NewsletterChannel;
  loadFeed?: (channel: NewsletterChannel) => Promise<NewsletterFeedEntry[]>;
  loadAvailability?: (channel: NewsletterChannel) => Promise<string[]>;
  budgetMs?: number;
  pause?: (milliseconds: number) => Promise<void>;
}
interface TickResult {
  status: string;
  queued?: number;
  accepted?: number;
  retrying?: number;
  failed?: number;
  baselineRequired?: boolean;
  sendingEnabled?: boolean;
  preview?: Awaited<ReturnType<Runtime["planner"]["preview"]>>[];
  errors?: Array<{ channel: NewsletterChannel; code: string }>;
}

export async function executeNewsletterTick(runtime: Runtime, options: TickOptions = {}): Promise<TickResult> {
  const now = options.now ?? new Date();
  const loadFeed = options.loadFeed ?? loadNewsletterFeed;
  const loadAvailability = options.loadAvailability ?? (options.loadFeed
    ? async (channel: NewsletterChannel) => (await loadFeed(channel)).map((entry) => entry.key)
    : loadNewsletterAvailability);
  const channels: NewsletterChannel[] = options.onlyChannel ? [options.onlyChannel] : ["news", "academy"];
  const config = runtime.config;
  const policy = { mode: config.mode === "live" ? "live" as const : "test" as const, testRecipients: config.testRecipients };
  const errors: NonNullable<TickResult["errors"]> = [];
  if (options.dryRun) {
    const initialized = await runtime.planner.isInitialized();
    const preview: NonNullable<TickResult["preview"]> = [];
    for (const channel of channels) {
      try {
        const existing = new Map((await runtime.planner.readCatalog(channel)).map((entry) => [entry.key, entry]));
        const feed = await loadFeed(channel);
        const catalog = feed.map((entry) => ({ ...entry, firstSeenAt: existing.get(entry.key)?.firstSeenAt ?? now.toISOString(), baseline: existing.get(entry.key)?.baseline ?? !initialized }));
        preview.push(await runtime.planner.preview(channel, now, policy, catalog));
      } catch { errors.push({ channel, code: "content_source_unavailable" }); }
    }
    return { status: "dry_run", baselineRequired: !initialized, sendingEnabled: config.sendConfigured, preview, errors };
  }
  if (config.mode === "off") return { status: "disabled" };
  if (!config.sendConfigured || !runtime.provider) return { status: "not_configured" };
  if (!await runtime.planner.isInitialized()) return { status: "baseline_required" };
  const owner = randomUUID();
  if (!await runtime.queue.acquireWorker(owner, now)) return { status: "already_running" };
  const started = Date.now();
  const budget = Math.min(options.budgetMs ?? 45_000, 45_000);
  const deadline = started + budget;
  const pause = options.pause ?? ((ms) => new Promise<void>((resolve) => setTimeout(resolve, ms)));
  let queued = 0, accepted = 0, retrying = 0, failed = 0;
  const freshChannels = new Set<NewsletterChannel>();
  try {
    for (const channel of dueNewsletterChannels(now).filter((channel) => channels.includes(channel))) {
      if (Date.now() >= deadline) break;
      if (await runtime.planner.runExists(channel, now, policy.mode)) continue;
      try {
        const feed = await loadFeed(channel);
        await runtime.planner.refreshCatalog(channel, feed, now);
        freshChannels.add(channel);
        await runtime.planner.ensureRun(channel, now, policy.mode);
      } catch { errors.push({ channel, code: "content_source_unavailable" }); }
    }
    const planningDeadline = started + Math.min(budget * 0.4, 15_000);
    for (const run of await runtime.planner.pendingRuns(policy.mode)) {
      if (!channels.includes(run.channel)) continue;
      while (Date.now() < planningDeadline) {
        const page = await runtime.planner.planPage(run.id, policy, 25);
        queued += page.queued;
        if (page.complete) break;
      }
    }
    // Subsequent retries refresh only availability, never the frozen batch/body.
    for (const channel of await runtime.queue.queuedChannels()) {
      if (!channels.includes(channel) || freshChannels.has(channel)) continue;
      try {
        await runtime.planner.refreshAvailability(channel, await loadAvailability(channel), now);
        freshChannels.add(channel);
      } catch { errors.push({ channel, code: "content_availability_unavailable" }); }
    }
    const requestMargin = options.pause ? 0 : 11_000;
    for (let processed = 0; processed < 50 && Date.now() < deadline - requestMargin; processed++) {
      const result = await runtime.queue.sendNext({ policy, provider: runtime.provider, now: options.now ?? new Date(), allowedDigestChannels: [...freshChannels] });
      if (result.status === "idle") break;
      if (["accepted", "delivered", "delayed"].includes(result.status ?? "")) accepted++;
      else if (result.status === "queued") retrying++;
      else if (["failed", "unknown"].includes(result.status ?? "")) failed++;
      await pause(500);
    }
    return { status: errors.length || failed ? "completed_with_errors" : "completed", queued, accepted, retrying, failed, errors };
  } finally {
    await runtime.queue.releaseWorker(owner);
  }
}
