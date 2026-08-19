import Link from 'next/link';
import { Calendar, ArrowRight, Check, Stethoscope, Clock, Users } from 'lucide-react';
import { DemoBadge } from '@/components/site/demo-badge';

const trustIndicators = [
  'Experienced Care Team',
  'Patient-Focused Approach',
  'Modern Facilities',
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-40 mask-fade-b" />
      <div className="container relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Your health, our priority
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
              Expert care, designed around you.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-balance">
              Modern healthcare focused on personalized treatment, experienced
              professionals and a comfortable patient experience.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/appointment"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Calendar className="h-4 w-4" />
                Book an Appointment
              </Link>
              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 text-sm font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Explore Our Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {trustIndicators.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                  <Check className="h-4 w-4 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: '0.15s' }}>
            <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 shadow-xl">
              <div className="absolute inset-0 bg-grid opacity-30" />
              <div className="relative flex h-full flex-col items-center justify-center p-8 text-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Stethoscope className="h-12 w-12" />
                </div>
                <p className="mt-6 font-display text-xl font-bold text-foreground">
                  A welcoming care experience
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Friendly professionals, modern facilities and a patient-first approach.
                </p>
                <div className="mt-6 grid w-full grid-cols-3 gap-3">
                  {[
                    { icon: Users, label: '25+ Specialists' },
                    { icon: Clock, label: 'Easy Booking' },
                    { icon: Check, label: 'Online Care' },
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl border border-border bg-background/60 p-3">
                      <s.icon className="mx-auto h-5 w-5 text-primary" />
                      <p className="mt-1.5 text-[11px] font-medium text-foreground/70">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -left-4 top-10 hidden animate-float rounded-2xl border border-border bg-card p-4 shadow-lg sm:block">
              <div className="flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <p className="text-xs font-semibold text-foreground">Available Today</p>
              </div>
              <p className="mt-1 text-2xl font-bold text-foreground">12+ Specialists</p>
              <Link href="/doctors" className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:gap-2">
                Book Consultation <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="absolute -bottom-4 -right-2 hidden animate-float rounded-2xl border border-border bg-card p-4 shadow-lg sm:block" style={{ animationDelay: '1s' }}>
              <DemoBadge>Illustrative demo</DemoBadge>
              <p className="mt-2 max-w-[180px] text-xs text-muted-foreground">
                Fictional brand for demonstration purposes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
