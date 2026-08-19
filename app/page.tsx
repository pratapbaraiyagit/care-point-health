import Link from 'next/link';
import {
  Calendar,
  Stethoscope,
  Activity,
  Mail,
  ArrowRight,
  Check,
  Phone,
  AlertTriangle,
  Quote,
  Star,
} from 'lucide-react';
import { Hero } from '@/components/site/hero';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { ServiceCard } from '@/components/site/service-card';
import { DoctorCard } from '@/components/site/doctor-card';
import { Counter } from '@/components/site/counter';
import { DemoBadge } from '@/components/site/demo-badge';
import {
  services,
  doctors,
  testimonials,
  stats,
  whyChooseUs,
  articles,
  faqs,
} from '@/lib/data';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const quickActions = [
  {
    icon: Calendar,
    title: 'Book Appointment',
    description: 'Schedule a consultation with our care team.',
    href: '/appointment',
  },
  {
    icon: Stethoscope,
    title: 'Find a Doctor',
    description: 'Explore our specialists and areas of expertise.',
    href: '/doctors',
  },
  {
    icon: Activity,
    title: 'Our Services',
    description: 'Discover healthcare services available at CarePoint.',
    href: '/services',
  },
  {
    icon: Mail,
    title: 'Contact Us',
    description: 'Have a question? We\u2019re here to help.',
    href: '/contact',
  },
];

const aboutBenefits = [
  'Patient-centered experience',
  'Experienced healthcare professionals',
  'Modern clinical environment',
  'Convenient appointment scheduling',
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Quick Actions */}
      <section className="border-b border-border bg-background py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickActions.map((action, i) => (
              <Reveal key={action.title} delay={i * 0.08}>
                <Link
                  href={action.href}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <action.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                    {action.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {action.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5">
                    Get started <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About / Intro */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 shadow-lg">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="relative flex h-full flex-col items-center justify-center p-10 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                    <Stethoscope className="h-10 w-10" />
                  </div>
                  <p className="mt-6 font-display text-xl font-bold text-foreground">
                    A patient-first healthcare concept
                  </p>
                  <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                    Combining professional care with an accessible digital experience.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <SectionHeading
                eyebrow="About CarePoint"
                title="Healthcare that puts people first."
                description="CarePoint Health is a fictional healthcare brand created for demonstration purposes. The concept focuses on combining professional medical care with a simple, accessible and patient-friendly digital experience."
                align="left"
              />
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {aboutBenefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 rounded-xl border border-border bg-muted/30 p-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium text-foreground">{b}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-background px-5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Learn More About Us <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-border bg-muted/20 py-16 sm:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Our Services"
            title="Comprehensive care for every stage of life."
            description="From everyday consultations to specialized care, explore the healthcare services available at CarePoint."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <Reveal key={service.id} delay={(i % 4) * 0.06}>
                <ServiceCard service={service} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Why CarePoint"
            title="Care you can feel confident about."
            description="Every part of the experience is designed around trust, clarity and comfort."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="border-y border-border bg-muted/20 py-16 sm:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Our Specialists"
            title="Meet our healthcare specialists"
            description="Experienced, caring professionals across multiple specialties — all fictional, for demonstration."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doctor, i) => (
              <Reveal key={doctor.id} delay={(i % 3) * 0.08}>
                <DoctorCard doctor={doctor} index={i} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/doctors"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              View All Doctors <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 rounded-3xl border border-border bg-gradient-to-br from-primary/5 to-accent/5 p-8 sm:grid-cols-2 lg:grid-cols-4 sm:p-12">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <p className="font-display text-4xl font-bold text-primary sm:text-5xl">
                    <Counter value={stat.value} suffix={stat.suffix} decimals={stat.decimals ?? 0} />
                  </p>
                  <p className="mt-2 text-sm font-medium text-foreground/80">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">Illustrative demo statistics.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-border bg-muted/20 py-16 sm:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Patient Experience"
            title="What our patients say"
            description="These testimonials are fictional and shown for demonstration purposes."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <Quote className="h-8 w-8 text-primary/30" />
                  <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground/90">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-bold text-primary">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                    <DemoBadge className="ml-auto">Demo</DemoBadge>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Health Resources */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Health Resources"
            title="Explore health & wellness"
            description="General educational content for everyday wellbeing. Not personalized medical advice."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {articles.slice(0, 6).map((article, i) => (
              <Reveal key={article.id} delay={(i % 3) * 0.08}>
                <Link
                  href={`/resources#${article.id}`}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                    {article.category}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-foreground group-hover:text-primary">
                    {article.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {article.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                    <span className="text-xs text-muted-foreground">{article.readingTime}</span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5">
                      Read Article <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-border bg-muted/20 py-16 sm:py-24">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
          <Accordion type="single" collapsible className="mt-10">
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-red-200 bg-gradient-to-br from-red-50 to-amber-50 p-8 sm:p-12">
              <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600">
                    <AlertTriangle className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-foreground">
                      Need urgent medical attention?
                    </h2>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                      If you are experiencing a medical emergency, contact your local
                      emergency services or visit the nearest emergency facility.
                    </p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-red-600 px-6 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2"
                >
                  <Phone className="h-4 w-4" />
                  Emergency Information
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pb-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-accent p-10 text-center shadow-xl sm:p-16">
              <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
              <div className="relative">
                <h2 className="font-display text-3xl font-bold text-white text-balance sm:text-4xl">
                  Your health deserves thoughtful care.
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base text-white/90 text-balance">
                  Take the next step toward a simpler, more connected healthcare experience.
                </p>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link
                    href="/appointment"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-primary shadow-sm transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                  >
                    <Calendar className="h-4 w-4" />
                    Book an Appointment
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
                  >
                    Contact Us <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
