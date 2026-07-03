create extension if not exists pgcrypto;

create table if not exists newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  locale text not null default 'en',
  status text not null default 'active',
  source_path text,
  consent_version text not null,
  unsubscribe_token text not null unique,
  unsubscribed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint newsletter_subscribers_status_check check (status in ('active', 'unsubscribed', 'bounced'))
);

create index if not exists newsletter_subscribers_status_created_at_idx
  on newsletter_subscribers (status, created_at desc);
