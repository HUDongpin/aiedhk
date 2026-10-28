# Newsletter operations

News and Academy are independent subscriptions. Each channel stores its own language, confirmation, activation time, unsubscribe token, and delivery history. New signups and language changes require an explicit confirmation POST. Existing active language settings remain effective until a replacement is confirmed. Confirmation links expire after 48 hours. A GET only shows the confirmation or unsubscribe page; email link scanners cannot activate or cancel a subscription.

The form, confirmation pages, and email shell support all 14 site locales: `en`, `zh-hant`, `zh-hans`, `es`, `fr`, `pt`, `de`, `ar`, `ko`, `ja`, `hi`, `ru`, `id`, and `bn`. Reviewed content keeps its actual `contentLocale`. If a reviewed translation is unavailable, the email clearly labels the English fallback while retaining the subscriber's localized navigation and controls.

## Configuration and isolation

The admin CLI reads the process environment. It does not automatically load any `.env` file. Inject the intended environment securely before running it; never print, commit, or attach credentials, subscriber addresses, confirmation URLs, or unsubscribe URLs to an operations record. The commands emit aggregates and safe issue codes. Preview prints subjects, never rendered HTML/text or bearer links.

| Variable | Purpose |
| --- | --- |
| `DATABASE_URL` | Existing research content database; also the newsletter database when no override is present. |
| `NEWSLETTER_DATABASE_URL` | Optional newsletter-state override. Use an isolated database for Preview consent, queue, catalog, and tests involving real provider requests. Research content reads still use `DATABASE_URL`. |
| `NEWSLETTER_DELIVERY_MODE` | `off` by default; `test` sends only to the explicit allowlist; `live` sends to eligible subscriptions. An invalid mode fails closed to `off` and records a configuration issue. |
| `NEWSLETTER_TEST_RECIPIENTS` | Comma-separated owner-approved test recipients, normalized to lowercase. Required in test mode. Do not put actual addresses in this document. |
| `RESEND_API_KEY` | Provider credential, supplied only through the authorized secret mechanism. |
| `NEWSLETTER_FROM` | Verified provider sender. |
| `RESEND_WEBHOOK_SECRET` | Required for live mode. Optional for test mode, but signed webhook evidence is unavailable until configured. |
| `NEWSLETTER_PUBLIC_ORIGIN` | Explicit trusted server origin for action and content links. Do not derive it from request headers. |
| `VERCEL_ENV`, `VERCEL_URL` | Vercel-provided values. When the environment is Preview and no explicit public origin is set, the trusted deployment hostname supplies the Preview origin. The normal fallback is the production site. |
| `CRON_SECRET` | Protects both newsletter cron routes with a Bearer authorization header. |
| `NEWSLETTER_TEST_DATABASE_URL` | Integration runner only. Accepts an explicit `localhost`, `127.0.0.1`, or `::1` PostgreSQL URL without query parameters or fragments. Never use a cloud database here. |

The current Vercel project uses manual deployments and has no Git integration. Supply an isolated newsletter database, test mode, allowlist, provider settings, and verified Preview origin securely for the specific Preview deployment. Do not apply a broad project-wide Preview override that could affect other work. Local environment files are ignored by Git and excluded by `.vercelignore`; `.env.example` contains variable names with empty values only. Deployment artifacts must not include real environment files.

`off` prevents signup sends and worker delivery. Inspection, unsubscribe, migration analysis, and baseline setup remain available when the database is configured. Test mode is a recipient restriction, not a claim that provider requests are simulated. `tick --apply` and `acceptance --apply` can send real messages in test mode. Live mode also requires the webhook secret; incomplete configuration fails closed.

## Admin commands

```bash
npm run newsletter:admin -- status
npm run newsletter:admin -- migrate
npm run newsletter:admin -- baseline
npm run newsletter:admin -- preview
npm run newsletter:admin -- tick
npm run newsletter:admin -- acceptance
```

All commands above are read-only. `migrate`, `baseline`, `tick`, and `acceptance` accept `--apply` to permit their documented mutations. `status` and `preview` reject `--apply`. Unknown arguments return a nonzero exit status. The CLI closes both newsletter and shared research database clients on exit.

| Command | Default behavior | With `--apply` |
| --- | --- | --- |
| `status` | Configuration issue codes, schema readiness, baseline presence, aggregate contacts/subscriptions/deliveries/catalog counts, and confirmed allowlisted subscription counts. No addresses, tokens, or payloads. | Unsupported. |
| `migrate` | Counts the four legacy migration categories. | Calls the idempotent legacy consent migration. It can queue migration confirmation messages; it does not dispatch them. This is a data migration, not SQL schema installation. |
| `baseline` | Reads both published feeds and reports counts and existing baseline state. | Initializes the baseline once. An existing baseline is preserved, including its original content cutoffs; repeating this command cannot reset it. |
| `preview` | Calls the real scheduler in dry-run mode; reports eligible counts, whether a daily run exists, subjects, and source errors. It creates no catalog, run, queue, or lease records. | Unsupported. |
| `tick` | Same read-only scheduler preview. | Executes the configured worker, including due planning and bounded delivery. Disabled, unconfigured, missing-baseline, or failed runs return nonzero. |
| `acceptance` | Reads sources and counts confirmed test subscriptions, existing daily acceptance messages, and holds. No enrollment or catalog changes. | Queues explicitly labelled Preview digests and dispatches only their newly created queue IDs, through the normal allowlisted provider worker. |

Missing configuration, source failures, database failures, or incomplete acceptance return nonzero with a safe code or aggregate reason. Do not treat zero queued messages as an acceptance pass: missing confirmed channels and held subscriptions are explicit failures. Provider `accepted` means the provider accepted the request; it is not proof of inbox delivery or human readability.

## Schema, backup, and migration sequence

Before any production migration, take an approved database backup and confirm that the backup is readable and can be restored to an isolated database. Record the backup location outside Git. Preserve the legacy table and tokens. Use a committed, clean revision for release, and keep delivery mode `off` while installing and inspecting the new schema.

Apply `migrations/001_newsletter_subscribers.sql`, then the additive `migrations/003_newsletter_channels.sql`, to the intended newsletter database with SQL error stopping enabled. Migration 003 adds separate consent, confirmation, catalog, run, delivery, webhook-event, and lease state; it does not replace the legacy table. `migrations/002_research_pipeline.sql` remains unchanged and belongs to the existing research content database. Do not apply source-data changes as part of newsletter acceptance.

Then run:

```bash
npm run newsletter:admin -- status
npm run newsletter:admin -- migrate
npm run newsletter:admin -- migrate --apply
npm run newsletter:admin -- baseline
npm run newsletter:admin -- baseline --apply
npm run newsletter:admin -- preview
npm run newsletter:admin -- status
```

Inspect the migration's four categories before applying:

| Legacy category | Result |
| --- | --- |
| Active, identifiable News source (`/news` or `/research-news`, with an optional supported locale) | Preserve News enrollment and the legacy activation time. Mark consent as legacy; do not silently add Academy. |
| Active, identifiable Academy source | Create pending Academy enrollment and one confirmation message. No Academy digest before explicit confirmation. |
| Active, unknown source | Queue one channel-choice confirmation with no preselected channels. Create no active channel automatically. |
| Stopped: previously unsubscribed or bounced | Preserve stopped state. Bounced contacts remain globally suppressed; no reactivation or reconfirmation message. |

The contact migration marker and logical queue key make repeated migration safe. Existing legacy unsubscribe links continue to stop the subscriptions derived from that legacy enrollment and invalidate its pending migration confirmations. They do not blanket-cancel unrelated later channel choices. New unsubscribe links stop only their associated channel.

Baseline initialization must precede delivery. It marks already published content as historical. It never publishes content and must not be reset to manufacture a new-content event. Subsequent refreshes recognize newly available published content by first observation; the article's historical publication date does not overwrite that cutoff.

## Scheduling and delivery

`/api/cron/newsletter` runs at **09:20 and 09:30 Hong Kong time**, plus **once every hour on the hour** for recovery (26 scheduled invocations per day). The Vercel schedules are `20,30 1 * * *` and `0 * * * *`, in UTC. News starts at or after 09:20 and Academy at or after 09:30. The hourly tick recovers pending planning, failed requests and queued deliveries within the existing bounded worker budget. It replaces the previous 1,440 daily polls so Neon can become idle between invocations.

Automatic recovery can now wait up to approximately one additional hour after a delivery becomes eligible. New signup confirmation mail still attempts delivery immediately in the signup request. Existing consent, frozen batches, queue IDs, retries and provider idempotency boundaries are unchanged. Do not revert to frequent polling simply because a successful tick reports zero queued or accepted messages. The compatibility route `/api/cron/research-newsletter` uses the same worker restricted to News. Research ingestion remains the separate Monday 09:00 HKT cron; newsletter work does not change publication automation.

Public News list/detail pages and database reads cache for six hours to reduce background database traffic. Administrative edits, publication and withdrawal still expire the shared tag and page paths immediately. Direct database edits outside that administrative route may take up to six hours to appear publicly. Newsletter planning and retry availability checks use their uncached sources and do not inherit this public-page delay.

News selects only published, non-baseline items first available after the subscriber's activation and not already accepted or reserved by a held delivery. Each email contains at most five articles. Older eligible backlog is sent first; overflow remains eligible for the next day's batch. If there is no eligible new content, no News email is queued.

Academy sends one complete pair of two published lessons per recipient. Progress follows the curriculum, with newly available pairs prioritized. After a full cycle, the next cycle explicitly labels repeated material as review. Incomplete pairs are excluded. A source failure is reported and that channel fails closed; independent channels may continue when their sources succeed.

Daily runs freeze their cutoff and content snapshot. Delivery rows retain the rendered payload, content keys, language, Academy cycle, and a stable logical key. The first send claim also freezes the provider envelope, including sender, recipient, and unsubscribe headers, so changing deployment configuration cannot alter a retry. Provider requests use a stable idempotency key for the same delivery. Retrying must preserve the same request; it must not generate a fresh message key for an uncertain earlier request.

Provider retry delays honor throttling and leave a one-hour margin inside the provider's 24-hour idempotency period: no automatic retry crosses the 23-hour internal limit. A lost response or expired sending lease can become `unknown`; queued, sending, and unknown digests hold that channel's progress. Changing language or unsubscribing must not erase an ambiguity hold. Reconcile with a verified provider event before resuming; never mark an unknown request successful based only on an empty queue or a timeout.

Signed webhook events are recorded once by event ID and applied without downgrading a later delivery state. Replay is safe. Provider delivery tags can reconcile an accepted request whose HTTP response was lost. Only a `Permanent` bounce globally suppresses the mailbox; transient or undetermined bounces do not automatically revoke enrollment. A complaint also suppresses both channels globally. Inspect aggregate `unknown`, failed, bounced, complained, and suppressed counts during operations.

## HTTP behavior

| Endpoint | Behavior |
| --- | --- |
| `POST /api/newsletter/subscribe` | JSON or native URL-encoded form containing `email`, explicit `channel` (`news` or `academy`), `locale`, and optional `sourcePath`/honeypot. Successful provider acceptance returns `202 pending_confirmation`; an already active matching subscription returns `200 already_subscribed`. Invalid input, throttling, or unavailable service return errors. |
| `POST /api/research-news/subscribe` | Compatibility JSON endpoint. If channel is omitted, a recognizable Academy source selects Academy; otherwise it selects News. It still requires confirmation for new consent. |
| `GET /api/newsletter/confirm?token=…` | Read-only localized confirmation page. A legacy unknown-source confirmation offers an explicit channel choice. |
| `POST /api/newsletter/confirm?token=…` | JSON or URL-encoded form; confirms the token's channel. A choice token requires the selected `channels` array/repeated form fields. Links expire after 48 hours. Replays cannot reactivate an unsubscribed channel. |
| `GET /api/newsletter/unsubscribe?token=…` | Read-only localized page with an explicit unsubscribe form. |
| `POST /api/newsletter/unsubscribe?token=…` | Human form uses `intent=unsubscribe`. RFC 8058 uses `List-Unsubscribe=One-Click` in a URL-encoded or multipart body. One-click handling is idempotent and avoids exposing subscription existence. |
| `GET /api/cron/newsletter?dryRun=1` | Authorized read-only scheduler preview. Remove `dryRun` to run the configured worker. |
| `POST /api/newsletter/webhook` | Provider-signed delivery events; the raw body is verified with the webhook secret. |

Email digests supply both `List-Unsubscribe` and `List-Unsubscribe-Post` headers. Confirmation and unsubscribe pages use private/no-store responses. Do not put action URLs in shared logs or documentation; they are bearer credentials.

## Preview acceptance and production evidence

For digest artwork preparation, immutable image retention, local layout previews and size/cost budgets, follow [Newsletter visuals](newsletter-visuals.md). Prepare and commit new derivatives before release; the release check is read-only and rejects stale image manifests. Frozen runs and queued payloads keep their original rendering.

Use an isolated newsletter database and a verified Preview origin. The acceptance helper refuses live/off mode, the production origin, and `VERCEL_ENV=production`. It reads existing reviewed content, optionally refreshes only the Preview catalog, and never creates a scheduled production run or a fake publication event.

1. Confirm the deployment is the intended clean revision, then apply the schema and initialize its baseline.
2. Configure test mode and only the owner-approved test inboxes. The agreed external inbox coverage uses Gmail and 126 Mail; store neither actual addresses nor authentication information in the evidence document.
3. In each inbox, subscribe to each requested channel through the Preview form. Inspect the real confirmation mail and explicitly confirm. The admin command never creates contacts, selects channels, or marks them confirmed on the operator's behalf.
4. Run `npm run newsletter:admin -- acceptance`. Resolve any missing-confirmed-channel count or pending/unknown digest hold before continuing.
5. Run `npm run newsletter:admin -- acceptance --apply`. Each new subject begins `[AIEDHK Preview]`; the sample contains five reviewed News items or the first complete Academy pair, with the subscriber's locale, truthful English fallback, and channel unsubscribe link. Its key is stable for the Hong Kong date, channel, and subscription. A rerun cannot create a second copy with that key.
6. Inspect both providers' received messages, rendering, item links, and the read-only GET followed by explicit POST action. Record provider acceptance separately from inbox receipt and from signed webhook delivery evidence. Test channel isolation and unsubscribe behavior without publishing the action tokens.

The command dispatches at most 50 newly created acceptance jobs within its budget. It reports deferred jobs, unsuccessful provider outcomes, and existing same-day delivery statuses per channel. Only existing `accepted` or `delivered` rows count toward provider acceptance; queued, sending, delayed, unknown, failed, cancelled, and other unsuccessful states remain incomplete and return a nonzero exit status. A failed row's stable key never becomes success merely because a rerun queues nothing. Retries use the existing delivery records, and this command never replaces their keys to force a resend. Existing unknown or pending digest holds are never bypassed. No confirmed test subscribers means no acceptance sends and an explicit incomplete result. The report always leaves inbox receipt and scheduled production publication validation false; those require separate observed evidence.

These labelled messages establish Preview consent, provider delivery, layout, and action-link evidence only to the extent actually observed. They do **not** establish scheduled production new-content behavior. Validate that behavior separately with a real, reviewed publication after the production baseline and eligible subscriber activation, followed by the scheduled run and receipt evidence. Never publish dummy content, reset a baseline, or edit first-seen timestamps to claim this validation.

## Local tests and release

```bash
npm test
npm run test:newsletter:integration
```

The integration runner uses an explicitly supplied loopback-only test URL or starts its own ephemeral local PostgreSQL with `initdb`/`pg_ctl` on an OS-selected loopback port. Every test file uses an isolated schema; the owned server and directory are stopped and removed even when tests fail. Missing PostgreSQL binaries or an unsafe URL cause a clear failure, never a silent skip. Provider and feed dependencies in these fixtures are fake/local; no cloud credentials or mail providers are used. Both PostgreSQL and test subprocesses receive a minimal allowlist of runtime environment names; only the test subprocess also receives its isolated test database URL. Application credentials, unrelated secrets, and `NODE_OPTIONS` are not inherited.

Run `npm run hygiene:check` before handoff. Once the reviewed work is committed and the worktree is clean, run `npm run release:verify`; it retains the hygiene and overlap gates and runs the required newsletter integration suite before the build. Deploy only the checked clean commit. Local tests do not replace the external inbox, webhook, scheduled-run, backup, or restore evidence needed for the corresponding release claim.

## Stop and rollback

Set `NEWSLETTER_DELIVERY_MODE=off` first and verify the disabled worker response before rollback. Preserve queue IDs, frozen payloads, consent records, migration markers, webhook events, and unknown holds for reconciliation. Keep unsubscribe processing available.

Roll back to code that understands the additive schema and honors the new consent and suppression state, or leave delivery off while repairing it. Never restore an older sender that ignores channel consent, confirmed enrollment, suppression, or delivery idempotency. Restoring a database backup after sends can erase their ledger and allow duplicates; restore only under a reviewed reconciliation procedure with sending disabled.
