import Link from 'next/link';
import { Star, ArrowRight } from 'lucide-react';
import type { Doctor } from '@/lib/data';
import { DoctorAvatar } from '@/components/site/doctor-avatar';
import { DemoBadge } from '@/components/site/demo-badge';
import { cn } from '@/lib/utils';

export function DoctorCard({ doctor, index = 0 }: { doctor: Doctor; index?: number }) {
  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className={cn('h-24 bg-gradient-to-br', doctor.accent)} />
      <div className="px-6">
        <div className="-mt-12 flex items-end justify-between">
          <DoctorAvatar initials={doctor.initials} accent={doctor.accent} size="lg" />
          <div className="mb-1 flex items-center gap-1 rounded-full bg-amber-50 px-2 py-1 text-xs font-semibold text-amber-700">
            <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
            {doctor.rating}
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <h3 className="font-display text-lg font-bold text-foreground">{doctor.name}</h3>
          <DemoBadge>Demo</DemoBadge>
        </div>
        <p className="mt-1 text-sm font-medium text-primary">{doctor.specialty}</p>
        <p className="mt-1 text-xs text-muted-foreground">{doctor.experience}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{doctor.bio}</p>
        <div className="mt-5 flex items-center gap-2 border-t border-border pt-4">
          <Link
            href={`/doctors/${doctor.id}`}
            className="inline-flex flex-1 items-center justify-center rounded-lg border border-border px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            View Profile
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
          </Link>
          <Link
            href={`/appointment?doctor=${doctor.id}`}
            className="inline-flex flex-1 items-center justify-center rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </article>
  );
}
