create extension if not exists pgcrypto;

create table if not exists research_sources (
  id uuid primary key default gen_random_uuid(),
  key text not null unique,
  name text not null,
  source_type text not null,
  base_url text,
  trust_weight numeric not null default 1,
  enabled boolean not null default true,
  default_query text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists research_ingestion_runs (
  id uuid primary key default gen_random_uuid(),
  started_at timestamptz not null default now(),
  completed_at timestamptz,
  status text not null default 'running',
  mode text not null default 'live',
  source_scope text not null default 'broad-ai-education',
  window_start date,
  window_end date,
  total_candidates integer not null default 0,
  drafted_count integer not null default 0,
  skipped_count integer not null default 0,
  source_errors jsonb not null default '[]'::jsonb,
  error_message text,
  constraint research_ingestion_runs_status_check check (status in ('running', 'completed', 'failed')),
  constraint research_ingestion_runs_mode_check check (mode in ('dry-run', 'live'))
);

create table if not exists research_candidates (
  id uuid primary key default gen_random_uuid(),
  run_id uuid references research_ingestion_runs(id) on delete set null,
  source_key text not null,
  external_id text,
  doi text,
  openalex_id text,
  semantic_scholar_id text,
  arxiv_id text,
  title text not null,
  authors jsonb not null default '[]'::jsonb,
  abstract text,
  venue text,
  publication_year integer,
  publication_date date,
  source_url text not null,
  landing_url text,
  open_access_url text,
  is_open_access boolean not null default false,
  raw_metadata jsonb not null default '{}'::jsonb,
  normalized_title text not null,
  relevance_score numeric not null default 0,
  score_reasons jsonb not null default '[]'::jsonb,
  duplicate_of uuid references research_candidates(id) on delete set null,
  draft_status text not null default 'candidate',
  research_paper_id uuid,
  created_at timestamptz not null default now(),
  constraint research_candidates_draft_status_check check (draft_status in ('candidate', 'drafted', 'rejected', 'skipped'))
);

create unique index if not exists research_candidates_doi_unique_idx
  on research_candidates (lower(doi))
  where doi is not null and doi <> '';

create unique index if not exists research_candidates_normalized_title_unique_idx
  on research_candidates (normalized_title);

create index if not exists research_candidates_score_created_idx
  on research_candidates (relevance_score desc, created_at desc);

create table if not exists research_papers (
  id uuid primary key default gen_random_uuid(),
  candidate_id uuid references research_candidates(id) on delete set null,
  status text not null default 'draft',
  slug text not null unique,
  title text not null,
  authors jsonb not null default '[]'::jsonb,
  venue text not null,
  year integer not null,
  type text not null,
  tags jsonb not null default '[]'::jsonb,
  image text not null,
  image_alt text not null,
  short_summary text not null,
  full_summary text not null,
  key_takeaways jsonb not null default '[]'::jsonb,
  why_it_matters text not null,
  source_url text not null,
  doi text,
  publication_date date,
  confidence_notes text,
  generation_prompt_version text,
  generation_model text,
  generation_metadata jsonb not null default '{}'::jsonb,
  reviewed_by text,
  approved_at timestamptz,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint research_papers_status_check check (status in ('draft', 'approved', 'published', 'rejected', 'archived')),
  constraint research_papers_type_check check (type in ('journal', 'conference', 'review', 'tool-dataset', 'policy-ethics'))
);

create index if not exists research_papers_status_published_idx
  on research_papers (status, published_at desc nulls last, created_at desc);

create index if not exists research_papers_year_idx
  on research_papers (year desc);

create table if not exists research_paper_localizations (
  id uuid primary key default gen_random_uuid(),
  research_paper_id uuid not null references research_papers(id) on delete cascade,
  locale text not null,
  status text not null default 'draft',
  title text not null,
  tags jsonb not null default '[]'::jsonb,
  image_alt text not null,
  short_summary text not null,
  full_summary text not null,
  key_takeaways jsonb not null default '[]'::jsonb,
  why_it_matters text not null,
  generation_model text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint research_paper_localizations_status_check check (status in ('draft', 'approved', 'published')),
  unique (research_paper_id, locale)
);

create index if not exists research_paper_localizations_locale_status_idx
  on research_paper_localizations (locale, status);

create table if not exists research_review_events (
  id uuid primary key default gen_random_uuid(),
  research_paper_id uuid not null references research_papers(id) on delete cascade,
  action text not null,
  actor text,
  notes text,
  before_status text,
  after_status text,
  created_at timestamptz not null default now()
);

create index if not exists research_review_events_paper_created_idx
  on research_review_events (research_paper_id, created_at desc);

insert into research_sources (key, name, source_type, base_url, trust_weight, default_query)
values
  ('openalex', 'OpenAlex Works', 'api', 'https://api.openalex.org', 1.15, 'artificial intelligence education OR AI tutoring OR learning analytics'),
  ('semantic-scholar', 'Semantic Scholar Graph API', 'api', 'https://api.semanticscholar.org', 1.15, 'artificial intelligence education'),
  ('crossref', 'Crossref Works', 'api', 'https://api.crossref.org', 1.0, 'artificial intelligence education'),
  ('arxiv', 'arXiv API', 'api', 'https://export.arxiv.org/api/query', 0.85, 'artificial intelligence education'),
  ('aied', 'AIED Conference and IAIED', 'curated', 'https://www.aied-conference.org', 1.3, null),
  ('ijaied', 'International Journal of Artificial Intelligence in Education', 'curated', 'https://link.springer.com/journal/40593', 1.3, null),
  ('lak', 'Learning Analytics and Knowledge', 'curated', 'https://www.solaresearch.org/events/lak/', 1.15, null),
  ('edm', 'Educational Data Mining', 'curated', 'https://educationaldatamining.org/', 1.1, null),
  ('learning-at-scale', 'ACM Learning at Scale', 'curated', 'https://learningatscale.acm.org/', 1.05, null),
  ('unesco-ai-education', 'UNESCO AI in Education', 'policy', 'https://www.unesco.org/en/digital-education/artificial-intelligence', 1.05, null)
on conflict (key) do update
set
  name = excluded.name,
  source_type = excluded.source_type,
  base_url = excluded.base_url,
  trust_weight = excluded.trust_weight,
  default_query = excluded.default_query,
  updated_at = now();
