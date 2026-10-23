-- Additive migration. Legacy enrollment is reconciled by newsletter:migrate.
alter table newsletter_subscribers add column if not exists suppressed_at timestamptz;
alter table newsletter_subscribers add column if not exists suppression_reason text;
alter table newsletter_subscribers add column if not exists newsletter_migrated_at timestamptz;

create table if not exists newsletter_subscriptions (
  id uuid primary key default gen_random_uuid(),
  subscriber_id uuid not null references newsletter_subscribers(id),
  channel text not null check (channel in ('news', 'academy')),
  locale text not null,
  status text not null check (status in ('pending', 'active', 'unsubscribed')),
  activated_at timestamptz,
  confirmed_at timestamptz,
  consent_version text not null,
  consent_source text not null check (consent_source in ('confirmed', 'legacy', 'pending')),
  legacy_origin boolean not null default false,
  unsubscribe_token text not null unique,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (subscriber_id, channel)
);
create index if not exists newsletter_subscriptions_active_idx
  on newsletter_subscriptions (channel, id) where status = 'active';

create table if not exists newsletter_confirmations (
  id uuid primary key default gen_random_uuid(),
  subscriber_id uuid not null references newsletter_subscribers(id),
  scope text not null check (scope in ('news', 'academy', 'choose')),
  locale text not null,
  token text not null unique,
  origin text not null check (origin in ('signup', 'migration')),
  expires_at timestamptz not null,
  used_at timestamptz,
  invalidated_at timestamptz,
  created_at timestamptz not null default now()
);
create index if not exists newsletter_confirmations_subscriber_created_idx
  on newsletter_confirmations (subscriber_id, created_at desc);

create table if not exists newsletter_content (
  channel text not null check (channel in ('news', 'academy')),
  content_key text not null,
  first_seen_at timestamptz not null,
  baseline boolean not null,
  sort_order integer not null,
  available boolean not null default true,
  items jsonb not null,
  updated_at timestamptz not null default now(),
  primary key (channel, content_key)
);

create table if not exists newsletter_state (
  singleton boolean primary key default true check (singleton),
  baseline_at timestamptz not null
);

create table if not exists newsletter_runs (
  id uuid primary key default gen_random_uuid(),
  channel text not null check (channel in ('news', 'academy')),
  delivery_date date not null,
  cutoff_at timestamptz not null,
  catalog jsonb not null,
  mode text not null check (mode in ('test', 'live')),
  status text not null default 'planning' check (status in ('planning', 'planned')),
  subscriber_cursor uuid,
  created_at timestamptz not null default now(),
  unique (channel, delivery_date, mode)
);

create table if not exists newsletter_deliveries (
  id uuid primary key default gen_random_uuid(),
  subscriber_id uuid not null references newsletter_subscribers(id),
  subscription_id uuid references newsletter_subscriptions(id),
  confirmation_id uuid references newsletter_confirmations(id),
  run_id uuid references newsletter_runs(id),
  channel text check (channel in ('news', 'academy')),
  locale text not null,
  kind text not null check (kind in ('confirmation', 'migration', 'digest')),
  logical_key text not null unique,
  payload jsonb not null,
  envelope jsonb,
  content_keys text[] not null default '{}',
  academy_cycle integer,
  status text not null default 'queued' check (status in ('queued','sending','accepted','delivered','delayed','failed','cancelled','unknown','bounced','complained','suppressed')),
  attempt_count integer not null default 0,
  first_attempt_at timestamptz,
  last_attempt_at timestamptz,
  next_attempt_at timestamptz not null default now(),
  lease_expires_at timestamptz,
  had_ambiguous_attempt boolean not null default false,
  provider_message_id text unique,
  accepted_at timestamptz,
  last_event_at timestamptz,
  last_error_code text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table newsletter_deliveries add column if not exists envelope jsonb;
create index if not exists newsletter_deliveries_subscriber_idx on newsletter_deliveries (subscriber_id);
create index if not exists newsletter_deliveries_subscription_idx on newsletter_deliveries (subscription_id, created_at);
create index if not exists newsletter_deliveries_confirmation_idx on newsletter_deliveries (confirmation_id);
create index if not exists newsletter_deliveries_run_idx on newsletter_deliveries (run_id);
create index if not exists newsletter_deliveries_due_idx on newsletter_deliveries (next_attempt_at, id) where status = 'queued';
create index if not exists newsletter_deliveries_lease_idx on newsletter_deliveries (lease_expires_at) where status = 'sending';

create table if not exists newsletter_webhook_events (
  event_id text primary key,
  event_type text not null,
  provider_message_id text not null,
  delivery_id uuid,
  bounce_type text,
  occurred_at timestamptz not null,
  received_at timestamptz not null default now()
);
alter table newsletter_webhook_events add column if not exists bounce_type text;
create index if not exists newsletter_webhook_events_email_idx on newsletter_webhook_events (provider_message_id, occurred_at);

create table if not exists newsletter_worker_lease (
  singleton boolean primary key default true check (singleton),
  owner uuid not null,
  expires_at timestamptz not null
);
