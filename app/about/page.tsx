import Link from 'next/link';
import { ArrowRight, Target, Eye, HeartPulse } from 'lucide-react';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { DemoBadge } from '@/components/site/demo-badge';
import { values, timeline } from '@/lib/data';

export const metadata = {
  title: 'About Us — CarePoint Health',
  description:
    'Learn about CarePoint Health, a fictional healthcare brand built to showcase a modern, patient-first digital healthcare experience.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-primary/5 to-background py-16 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-dots opacity-40 mask-fade-b" />
        <div className="container relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <DemoBadge>Fictional brand for demonstration</DemoBadge>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-foreground text-balance sm:text-5xl">
            Healthcare built around people.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground text-balance">
            CarePoint Health is a fictional healthcare brand created to demonstrate how a
            modern, patient-first digital healthcare experience can look and feel.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Target className="h-6 w-6" />
                </div>
                <h2 className="mt-5 font-display text-2xl font-bold text-foreground">Our Mission</h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  Our mission is to make healthcare information and access feel simpler,
                  clearer and more human.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Eye className="h-6 w-6" />
                </div>
                <h2 className="mt-5 font-display text-2xl font-bold text-foreground">Our Vision</h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  Create a patient-first digital healthcare experience that is accessible,
                  trustworthy and welcoming for everyone.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-border bg-muted/20 py-16 sm:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading eyebrow="Our Values" title="What we stand for" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={(i % 3) * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Our Journey"
            title="A fictional timeline"
            description="This timeline is illustrative and created for demonstration purposes."
          />
          <div className="relative mt-14">
            <div className="absolute left-4 top-0 h-full w-px bg-border sm:left-1/2 sm:-translate-x-1/2" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <Reveal key={item.year} delay={i * 0.05}>
                  <div className={`relative flex items-start gap-6 sm:w-1/2 ${i % 2 === 0 ? 'sm:ml-auto sm:flex-row-reverse sm:pl-10' : 'sm:pr-10'}`}>
                    <div className="absolute left-4 top-1.5 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full bg-primary ring-4 ring-primary/15 sm:left-1/2">
                      <span className="absolute h-3 w-3 animate-ping rounded-full bg-primary/40" />
                    </div>
                    <div className="ml-8 flex-1 rounded-2xl border border-border bg-card p-6 shadow-sm sm:ml-0">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                        {item.year}
                      </span>
                      <h3 className="mt-3 font-display text-lg font-bold text-foreground">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-muted/20 py-16">
        <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="flex flex-col items-center gap-4 rounded-3xl border border-border bg-card p-10 shadow-sm">
            <HeartPulse className="h-10 w-10 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Ready to explore CarePoint?
            </h2>
            <p className="max-w-md text-sm text-muted-foreground">
              Browse our specialists or book a demo appointment to see the full experience.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/doctors"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              >
                Find a Doctor <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/appointment"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Book an Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
