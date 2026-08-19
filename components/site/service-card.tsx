import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Service } from '@/lib/data';

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  const Icon = service.icon;
  return (
    <article
      className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 font-display text-lg font-bold text-foreground">{service.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>
      <Link
        href={`/services#${service.id}`}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:gap-2.5"
      >
        Learn More
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </article>
  );
}
