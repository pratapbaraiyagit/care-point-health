import Link from 'next/link';
import { ArrowRight, Calendar, Check } from 'lucide-react';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { DemoBadge } from '@/components/site/demo-badge';
import { services } from '@/lib/data';

export const metadata = {
  title: 'Medical Services — CarePoint Health',
  description:
    'Explore the comprehensive healthcare services available at CarePoint Health, from general medicine to specialized care.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-primary/5 to-background py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-dots opacity-40 mask-fade-b" />
        <div className="container relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <DemoBadge>Demo services catalog</DemoBadge>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-foreground text-balance sm:text-5xl">
            Medical Services
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground text-balance">
            Comprehensive care for every stage of life. Explore the healthcare services
            available at CarePoint Health.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="space-y-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              const reversed = i % 2 === 1;
              return (
                <Reveal key={service.id}>
                  <article
                    id={service.id}
                    className="scroll-mt-24 grid items-center gap-8 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-10 lg:grid-cols-2"
                  >
                    <div className={reversed ? 'lg:order-2' : ''}>
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="h-8 w-8" />
                      </div>
                      <h2 className="mt-6 font-display text-2xl font-bold text-foreground">
                        {service.name}
                      </h2>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                        {service.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                            <Check className="h-4 w-4 text-accent" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        <Link
                          href="/appointment"
                          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                        >
                          <Calendar className="h-4 w-4" />
                          Book Appointment
                        </Link>
                        <Link
                          href="/doctors"
                          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-background px-5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                        >
                          Find a Specialist <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                    <div className={reversed ? 'lg:order-1' : ''}>
                      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5">
                        <div className="absolute inset-0 bg-grid opacity-30" />
                        <div className="relative flex h-full items-center justify-center">
                          <Icon className="h-20 w-20 text-primary/40" />
                        </div>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/20 py-16">
        <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6">
          <SectionHeading
            title="Ready to book a consultation?"
            description="Schedule a demo appointment with one of our fictional specialists."
          />
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/appointment"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              <Calendar className="h-4 w-4" />
              Book an Appointment
            </Link>
            <Link
              href="/doctors"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Browse Doctors <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
