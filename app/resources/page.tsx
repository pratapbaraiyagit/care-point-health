import Link from 'next/link';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';
import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { DemoBadge } from '@/components/site/demo-badge';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { articles, resourceCategories, faqs } from '@/lib/data';

export const metadata = {
  title: 'Health Resources — CarePoint Health',
  description:
    'Explore general health and wellness articles. Educational content only — not personalized medical advice.',
};

export default function ResourcesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-primary/5 to-background py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-dots opacity-40 mask-fade-b" />
        <div className="container relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <DemoBadge>Educational content only</DemoBadge>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-foreground text-balance sm:text-5xl">
            Health Resources
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground text-balance">
            General educational content for everyday wellbeing. These articles are for
            information only and do not constitute personalized medical advice.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-10">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-2">
            {resourceCategories.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-border bg-muted/30 px-4 py-1.5 text-sm font-semibold text-foreground/70"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="pb-16 sm:pb-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, i) => (
              <Reveal key={article.id} delay={(i % 3) * 0.08}>
                <article
                  id={article.id}
                  className="group flex h-full scroll-mt-24 flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                      {article.category}
                    </span>
                    <BookOpen className="h-5 w-5 text-muted-foreground/50" />
                  </div>
                  <h2 className="mt-4 font-display text-lg font-bold text-foreground group-hover:text-primary">
                    {article.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {article.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      {article.readingTime}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5">
                      Read Article <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faqs" className="scroll-mt-24 border-t border-border bg-muted/20 py-16 sm:py-24">
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

      {/* Disclaimer */}
      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm leading-relaxed text-amber-900">
            <strong className="font-semibold">Medical disclaimer:</strong> The articles and
            resources on this page are general educational content for demonstration purposes
            only. They do not constitute medical advice, diagnosis, or treatment. Always consult
            a qualified healthcare professional for personal medical concerns.
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-muted/20 py-16">
        <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="font-display text-2xl font-bold text-foreground">
            Have a health concern?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
            Book a demo consultation with one of our fictional specialists.
          </p>
          <Link
            href="/appointment"
            className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            Book an Appointment <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
