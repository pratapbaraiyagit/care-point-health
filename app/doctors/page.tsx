import { SectionHeading } from '@/components/site/section-heading';
import { Reveal } from '@/components/site/reveal';
import { DemoBadge } from '@/components/site/demo-badge';
import { DoctorDirectory } from '@/components/site/doctor-directory';

export const metadata = {
  title: 'Our Doctors — CarePoint Health',
  description:
    'Browse our directory of fictional healthcare specialists. Search and filter by specialty to find the right doctor for your needs.',
};

export default function DoctorsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-primary/5 to-background py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-dots opacity-40 mask-fade-b" />
        <div className="container relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <DemoBadge>Demo specialist directory</DemoBadge>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-foreground text-balance sm:text-5xl">
            Our healthcare specialists
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground text-balance">
            Search and filter our fictional specialists to find the right fit. All profiles
            are illustrative and created for demonstration.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <DoctorDirectory />
        </div>
      </section>
    </>
  );
}
