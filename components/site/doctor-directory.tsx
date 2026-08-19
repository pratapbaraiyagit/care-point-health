'use client';

import { useMemo, useState } from 'react';
import { Search, SlidersHorizontal, UserX } from 'lucide-react';
import { doctors, specialties } from '@/lib/data';
import { DoctorCard } from '@/components/site/doctor-card';
import { DemoBadge } from '@/components/site/demo-badge';
import { cn } from '@/lib/utils';

export function DoctorDirectory() {
  const [query, setQuery] = useState('');
  const [specialty, setSpecialty] = useState('all');

  const filtered = useMemo(() => {
    return doctors.filter((d) => {
      const matchesQuery =
        !query ||
        d.name.toLowerCase().includes(query.toLowerCase()) ||
        d.specialty.toLowerCase().includes(query.toLowerCase()) ||
        d.bio.toLowerCase().includes(query.toLowerCase());
      const matchesSpecialty = specialty === 'all' || d.specialty === specialty;
      return matchesQuery && matchesSpecialty;
    });
  }, [query, specialty]);

  return (
    <div>
      <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search doctors..."
              aria-label="Search doctors"
              className="h-11 w-full rounded-xl border border-input bg-background pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>
          <div className="relative lg:w-64">
            <SlidersHorizontal className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <select
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              aria-label="Filter by specialty"
              className="h-11 w-full appearance-none rounded-xl border border-input bg-background pl-10 pr-9 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {specialties.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground">
              ▾
            </span>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {specialties.map((s) => (
            <button
              key={s.value}
              type="button"
              onClick={() => setSpecialty(s.value)}
              className={cn(
                'rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors',
                specialty === s.value
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-background text-foreground/70 hover:bg-muted'
              )}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing <span className="font-semibold text-foreground">{filtered.length}</span> of{' '}
          {doctors.length} specialists
        </p>
        <DemoBadge>All profiles are demo content</DemoBadge>
      </div>

      {filtered.length > 0 ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((doctor, i) => (
            <DoctorCard key={doctor.id} doctor={doctor} index={i} />
          ))}
        </div>
      ) : (
        <div className="mt-10 flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-muted/20 p-12 text-center">
          <UserX className="h-10 w-10 text-muted-foreground" />
          <h3 className="mt-4 font-display text-lg font-bold text-foreground">No doctors found</h3>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            Try a different search term or specialty filter.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setSpecialty('all');
            }}
            className="mt-5 inline-flex h-10 items-center justify-center rounded-lg border border-border bg-background px-4 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
}
