import { randomUUID } from "node:crypto";
import { getDatabaseClient } from "../lib/db";
import { queueAcceptanceDigests } from "../lib/newsletter/acceptance";
import { loadNewsletterFeed } from "../lib/newsletter/content";
import { executeNewsletterTick } from "../lib/newsletter/scheduler";
import { getNewsletterRuntime } from "../lib/newsletter/service";

type Runtime = ReturnType<typeof getNewsletterRuntime>;
const commands = ["status", "migrate", "baseline", "preview", "tick", "acceptance"];
const knownErrors = new Set([
  "newsletter_database_not_configured", "newsletter_baseline_required", "newsletter_acceptance_test_mode_required",
  "newsletter_acceptance_preview_required", "newsletter_acceptance_content_incomplete", "invalid_newsletter_catalog",
  "newsletter_not_configured", "newsletter_worker_busy", "newsletter_content_source_unavailable",
]);
const print = (value: unknown) => process.stdout.write(`${JSON.stringify(value, null, 2)}\n`);
function safeError(error: unknown) {
  if (error instanceof Error && knownErrors.has(error.message)) return error.message;
  const code = error && typeof error === "object" && "code" in error ? String(error.code) : "";
  return /^[0-9A-Z]{5}$/.test(code) ? `database_${code}` : "newsletter_operation_failed";
}
function configStatus(runtime: Runtime) {
  return { mode: runtime.config.mode, sendingEnabled: runtime.config.sendConfigured,
    allowlistedRecipients: runtime.config.testRecipients.length, issues: runtime.config.issues,
    cronConfigured: Boolean(process.env.CRON_SECRET), webhookConfigured: Boolean(runtime.config.webhookSecret) };
}
async function status(runtime: Runtime) {
  const [schema] = await runtime.sql`select count(*)::int as count from information_schema.tables
    where table_schema=current_schema() and table_name=any(${[
      "newsletter_subscribers", "newsletter_subscriptions", "newsletter_confirmations", "newsletter_content",
      "newsletter_state", "newsletter_runs", "newsletter_deliveries", "newsletter_webhook_events", "newsletter_worker_lease",
    ]}::text[])`;
  if (schema.count !== 9) {
    print({ status: "schema_required", config: configStatus(runtime), schemaTables: schema.count, requiredTables: 9 });
    process.exitCode = 1;
    return;
  }
  const [contacts] = await runtime.sql`select count(*)::int as total,
    count(*) filter(where newsletter_migrated_at is null)::int as awaitingMigration,
    count(*) filter(where suppressed_at is not null or status='bounced')::int as suppressed from newsletter_subscribers`;
  const subscriptions = await runtime.sql`select channel,status,count(*)::int as count from newsletter_subscriptions group by channel,status order by channel,status`;
  const deliveries = await runtime.sql`select kind,status,count(*)::int as count from newsletter_deliveries group by kind,status order by kind,status`;
  const catalog = await runtime.sql`select channel,baseline,available,count(*)::int as count from newsletter_content group by channel,baseline,available order by channel,baseline,available`;
  const confirmedTestSubscriptions = await runtime.sql`select n.channel,count(*)::int as count from newsletter_subscriptions n
    join newsletter_subscribers s on s.id=n.subscriber_id where n.status='active' and n.consent_source='confirmed'
      and n.confirmed_at is not null and s.suppressed_at is null and s.status<>'bounced'
      and s.email=any(${runtime.config.testRecipients}::text[]) group by n.channel order by n.channel`;
  print({ status: "ok", config: configStatus(runtime), baselinePresent: await runtime.planner.isInitialized(),
    contacts, subscriptions, deliveries, catalog, confirmedTestSubscriptions });
}
async function feeds() {
  try {
    const [news, academy] = await Promise.all([loadNewsletterFeed("news"), loadNewsletterFeed("academy")]);
    return { news, academy };
  } catch { throw new Error("newsletter_content_source_unavailable"); }
}
async function tick(runtime: Runtime, apply: boolean) {
  const result = await executeNewsletterTick(runtime, { dryRun: !apply });
  // Never print the rendered HTML/text, which may contain bearer links.
  print({ ...result, preview: result.preview?.map(({ channel, eligibleCount, alreadyPlanned, example }) => ({
    channel, eligibleCount, alreadyPlanned, exampleSubject: example?.subject,
  })) });
  if (result.errors?.length || ["disabled", "not_configured", "baseline_required", "completed_with_errors"].includes(result.status)) process.exitCode = 1;
}
export async function runAcceptanceCommand(runtime: Runtime, apply: boolean,
  options: Omit<NonNullable<Parameters<typeof queueAcceptanceDigests>[1]>, "dryRun"> & { pause?: () => Promise<void> } = {}) {
  if (apply && (!runtime.config.sendConfigured || !runtime.provider)) throw new Error("newsletter_not_configured");
  const owner = randomUUID();
  if (apply && !await runtime.queue.acquireWorker(owner, options.now)) throw new Error("newsletter_worker_busy");
  try {
    const result = await queueAcceptanceDigests(runtime, { now: options.now, loadFeed: options.loadFeed, dryRun: !apply });
    const { deliveryIds, ...summary } = result;
    const outcomes: Record<string, number> = {};
    const deadline = Date.now() + 45_000;
    let processed = 0;
    if (apply) {
      for (const id of deliveryIds) {
        if (processed >= 50 || Date.now() >= deadline - 11_000) break;
        const outcome = await runtime.queue.sendNext({ id, now: options.now,
          policy: { mode: "test", testRecipients: runtime.config.testRecipients }, provider: runtime.provider! });
        const outcomeStatus = outcome.status ?? "incomplete";
        outcomes[outcomeStatus] = (outcomes[outcomeStatus] ?? 0) + 1;
        processed++;
        await (options.pause ? options.pause() : new Promise((resolve) => setTimeout(resolve, 500)));
      }
    }
    const held = Object.values(result.channels).reduce((sum, channel) => sum + channel.held, 0);
    const unsuccessful = Object.keys(outcomes).some((outcome) => !["accepted", "delivered"].includes(outcome));
    const providerAccepted = (outcomes.accepted ?? 0) + (outcomes.delivered ?? 0) + Object.values(result.channels)
      .reduce((sum, channel) => sum + (channel.existingStatuses.accepted ?? 0) + (channel.existingStatuses.delivered ?? 0), 0);
    const expected = Object.values(result.channels).reduce((sum, channel) => sum + channel.confirmed, 0);
    const exitCode = result.missingConfirmedChannels.length || held || result.incompleteExisting || unsuccessful
      || (apply && (deliveryIds.length > processed || providerAccepted < expected)) ? 1 : 0;
    return { exitCode, report: { ...summary, status: apply ? exitCode ? "incomplete" : "provider_accepted" : "dry_run",
      outcomes, providerAccepted, deferred: apply ? deliveryIds.length - processed : 0,
      evidence: "labelled_preview_content_only", scheduledProductionPublicationValidated: false, inboxDeliveryValidated: false } };
  } finally {
    if (apply) await runtime.queue.releaseWorker(owner);
  }
}
async function main() {
  const [command = "status", ...flags] = process.argv.slice(2);
  if (!commands.includes(command) || flags.some((flag) => flag !== "--apply") || flags.length > 1
    || (["status", "preview"].includes(command) && flags.length)) {
    print({ status: "usage", usage: "npm run newsletter:admin -- status|migrate|baseline|preview|tick|acceptance [--apply]",
      note: "--apply is accepted only by migrate, baseline, tick, and acceptance; all other invocations are read-only." });
    process.exitCode = 1;
    return;
  }
  const apply = flags.includes("--apply");
  let runtime: Runtime | undefined;
  try {
    runtime = getNewsletterRuntime();
    if (command === "status") await status(runtime);
    else if (command === "migrate") print(await runtime.subscriptions.migrateLegacy({ dryRun: !apply }));
    else if (command === "baseline") {
      const feed = await feeds();
      const result = apply ? await runtime.planner.initializeBaseline([...feed.news, ...feed.academy])
        : { dryRun: true, alreadyInitialized: await runtime.planner.isInitialized() };
      print({ ...result, newsItems: feed.news.length, academyPairs: feed.academy.length });
    } else if (command === "acceptance") {
      const result = await runAcceptanceCommand(runtime, apply);
      print(result.report);
      process.exitCode = result.exitCode;
    }
    else await tick(runtime, command === "tick" && apply);
  } catch (error) {
    print({ status: "failed", operation: command, code: safeError(error), ...(runtime ? { config: configStatus(runtime) } : {}) });
    process.exitCode = 1;
  } finally {
    // News reads use the shared content DB; newsletter state may use an isolated Preview DB.
    try {
      const clients = new Set([runtime?.sql, getDatabaseClient()].filter((sql) => sql != null));
      const results = await Promise.allSettled([...clients].map((sql) => sql.end({ timeout: 5 })));
      if (results.some((result) => result.status === "rejected")) throw new Error("close_failed");
    } catch {
      print({ status: "failed", operation: "close", code: "database_close_failed" });
      process.exitCode = 1;
    }
  }
}
if (require.main === module) void main();
