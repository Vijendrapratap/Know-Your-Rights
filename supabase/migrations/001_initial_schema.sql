-- Know Your Rights — Initial Database Schema
-- Run this in your Supabase SQL Editor (Dashboard → SQL Editor → New Query)

-- ═══════════════════════════════════════════════════════════════
-- 1. Enable pgvector extension for semantic search
-- ═══════════════════════════════════════════════════════════════
create extension if not exists vector with schema extensions;

-- ═══════════════════════════════════════════════════════════════
-- 2. Categories table
-- ═══════════════════════════════════════════════════════════════
create table if not exists public.categories (
  id text primary key,
  name text not null,
  description text not null,
  icon text not null default '📄',
  color text not null default '#6b7280',
  jurisdiction text not null default 'india',
  topic_count integer not null default 0,
  created_at timestamptz not null default now()
);

alter table public.categories enable row level security;
create policy "Categories are viewable by everyone"
  on public.categories for select using (true);

-- ═══════════════════════════════════════════════════════════════
-- 3. Legal Documents table (with vector embeddings)
-- ═══════════════════════════════════════════════════════════════
create table if not exists public.legal_documents (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  content text not null,
  simplified_content text not null,
  category_id text not null references public.categories(id) on delete cascade,
  topic_id text not null,
  jurisdiction text not null default 'india',
  language text not null default 'en',
  source_title text not null,
  source_section text not null,
  source_type text not null default 'statute',
  source_url text,
  chunk_index integer not null default 0,
  embedding vector(768),  -- Gemini text-embedding-004 outputs 768 dimensions
  metadata jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Index for fast vector similarity search
create index if not exists legal_documents_embedding_idx
  on public.legal_documents
  using ivfflat (embedding vector_cosine_ops)
  with (lists = 100);

-- Indexes for filtering
create index if not exists legal_documents_category_idx on public.legal_documents(category_id);
create index if not exists legal_documents_jurisdiction_idx on public.legal_documents(jurisdiction);
create index if not exists legal_documents_language_idx on public.legal_documents(language);
create index if not exists legal_documents_topic_idx on public.legal_documents(topic_id);

alter table public.legal_documents enable row level security;
create policy "Legal documents are viewable by everyone"
  on public.legal_documents for select using (true);

-- ═══════════════════════════════════════════════════════════════
-- 4. Similarity search function (used by RAG pipeline)
-- ═══════════════════════════════════════════════════════════════
create or replace function public.match_legal_documents(
  query_embedding vector(768),
  match_threshold float default 0.5,
  match_count int default 5,
  filter_jurisdiction text default null,
  filter_language text default 'en',
  filter_category text default null
)
returns table (
  id uuid,
  title text,
  content text,
  simplified_content text,
  category_id text,
  topic_id text,
  jurisdiction text,
  language text,
  source_title text,
  source_section text,
  source_type text,
  source_url text,
  chunk_index integer,
  metadata jsonb,
  similarity float
)
language plpgsql
as $$
begin
  return query
  select
    ld.id,
    ld.title,
    ld.content,
    ld.simplified_content,
    ld.category_id,
    ld.topic_id,
    ld.jurisdiction,
    ld.language,
    ld.source_title,
    ld.source_section,
    ld.source_type,
    ld.source_url,
    ld.chunk_index,
    ld.metadata,
    1 - (ld.embedding <=> query_embedding) as similarity
  from public.legal_documents ld
  where
    ld.embedding is not null
    and 1 - (ld.embedding <=> query_embedding) > match_threshold
    and (filter_jurisdiction is null or ld.jurisdiction = filter_jurisdiction)
    and (filter_language is null or ld.language = filter_language)
    and (filter_category is null or ld.category_id = filter_category)
  order by ld.embedding <=> query_embedding
  limit match_count;
end;
$$;

-- ═══════════════════════════════════════════════════════════════
-- 5. Bookmarks table (for user accounts — Phase 3)
-- ═══════════════════════════════════════════════════════════════
create table if not exists public.bookmarks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  topic_id text not null,
  created_at timestamptz not null default now(),
  unique(user_id, topic_id)
);

alter table public.bookmarks enable row level security;
create policy "Users can view own bookmarks"
  on public.bookmarks for select using (auth.uid() = user_id);
create policy "Users can create own bookmarks"
  on public.bookmarks for insert with check (auth.uid() = user_id);
create policy "Users can delete own bookmarks"
  on public.bookmarks for delete using (auth.uid() = user_id);

-- ═══════════════════════════════════════════════════════════════
-- 6. User preferences table (for Phase 3 + 4)
-- ═══════════════════════════════════════════════════════════════
create table if not exists public.user_preferences (
  user_id uuid primary key references auth.users(id) on delete cascade,
  jurisdiction text not null default 'india',
  language text not null default 'en',
  theme text not null default 'light',
  updated_at timestamptz not null default now()
);

alter table public.user_preferences enable row level security;
create policy "Users can view own preferences"
  on public.user_preferences for select using (auth.uid() = user_id);
create policy "Users can upsert own preferences"
  on public.user_preferences for insert with check (auth.uid() = user_id);
create policy "Users can update own preferences"
  on public.user_preferences for update using (auth.uid() = user_id);

-- ═══════════════════════════════════════════════════════════════
-- 7. Legal Aid Resources table (for Phase 5)
-- ═══════════════════════════════════════════════════════════════
create table if not exists public.legal_aid_resources (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  type text not null default 'helpline',
  phone text,
  email text,
  website text,
  description text not null,
  state text,
  jurisdiction text not null default 'india',
  specialization text[] not null default '{}',
  is_emergency boolean not null default false,
  created_at timestamptz not null default now()
);

alter table public.legal_aid_resources enable row level security;
create policy "Legal aid resources are viewable by everyone"
  on public.legal_aid_resources for select using (true);

-- ═══════════════════════════════════════════════════════════════
-- 8. Auto-update timestamp trigger
-- ═══════════════════════════════════════════════════════════════
create or replace function public.handle_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger on_legal_documents_updated
  before update on public.legal_documents
  for each row execute function public.handle_updated_at();

create trigger on_user_preferences_updated
  before update on public.user_preferences
  for each row execute function public.handle_updated_at();
