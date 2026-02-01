-- Drop tables if they exist (to reset schema)
drop table if exists public.tasks;
drop table if exists public.projects;

-- Create projects table
create table public.projects (
  id uuid not null default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  color text default '#000000',
  status text not null default 'active' check (status in ('active', 'archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  constraint projects_pkey primary key (id)
);

-- Create tasks table
create table public.tasks (
  id uuid not null default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  description text,
  status text not null default 'inbox' check (status in ('inbox', 'next', 'waiting', 'done')),
  priority text default 'P3' check (priority in ('P1', 'P2', 'P3')),
  estimated_minutes integer,
  project_id uuid references public.projects(id),
  due_date timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  constraint tasks_pkey primary key (id)
);

-- RLS Policies
alter table public.tasks enable row level security;
alter table public.projects enable row level security;

create policy "Users can view their own tasks" on public.tasks
  for select using (auth.uid() = user_id);

create policy "Users can insert their own tasks" on public.tasks
  for insert with check (auth.uid() = user_id);

create policy "Users can update their own tasks" on public.tasks
  for update using (auth.uid() = user_id);

create policy "Users can delete their own tasks" on public.tasks
  for delete using (auth.uid() = user_id);

create policy "Users can view their own projects" on public.projects
  for select using (auth.uid() = user_id);

create policy "Users can insert their own projects" on public.projects
  for insert with check (auth.uid() = user_id);

create policy "Users can update their own projects" on public.projects
  for update using (auth.uid() = user_id);

create policy "Users can delete their own projects" on public.projects
  for delete using (auth.uid() = user_id);
