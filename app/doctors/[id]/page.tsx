import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Star,
  Check,
  GraduationCap,
  Briefcase,
  Stethoscope,
  Video,
  MapPin,
  IndianRupee,
} from 'lucide-react';
import { doctors } from '@/lib/data';
import { DoctorAvatar } from '@/components/site/doctor-avatar';
import { DemoBadge } from '@/components/site/demo-badge';
import { Reveal } from '@/components/site/reveal';
import { cn } from '@/lib/utils';

export function generateStaticParams() {
  return doctors.map((d) => ({ id: d.id }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const doctor = doctors.find((d) => d.id === params.id);
  if (!doctor) return { title: 'Doctor not found — CarePoint Health' };
  return {
    title: `${doctor.name} — ${doctor.specialty} — CarePoint Health`,
    description: doctor.bio,
  };
}

export default function DoctorProfilePage({ params }: { params: { id: string } }) {
  const doctor = doctors.find((d) => d.id === params.id);
  if (!doctor) notFound();

  const infoItems = [
    {
      icon: Stethoscope,
      label: 'Specialty',
      value: doctor.specialty,
    },
    {
      icon: Briefcase,
      label: 'Experience',
      value: doctor.experience,
    },
    {
      icon: Clock,
      label: 'Availability',
      value: `${doctor.availability.days}, ${doctor.availability.hours}`,
    },
    {
      icon: IndianRupee,
      label: 'Demo Consultation Fee',
      value: `₹${doctor.consultationFee}`,
    },
  ];

  return (
    <div className="py-12 sm:py-16">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <Link
          href="/doctors"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all doctors
        </Link>

        {/* Header */}
        <Reveal>
          <div className="mt-6 overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            <div className={cn('h-28 bg-gradient-to-br sm:h-36', doctor.accent)} />
            <div className="px-6 pb-8 sm:px-10">
              <div className="-mt-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div className="flex items-end gap-4">
                  <DoctorAvatar initials={doctor.initials} accent={doctor.accent} size="xl" />
                  <div className="pb-1">
                    <div className="flex items-center gap-2">
                      <h1 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                        {doctor.name}
                      </h1>
                      <DemoBadge>Demo</DemoBadge>
                    </div>
                    <p className="mt-1 text-sm font-semibold text-primary">
                      {doctor.specialty} Specialist
                    </p>
                    <div className="mt-1.5 flex items-center gap-1.5">
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <span className="text-sm font-semibold text-foreground">{doctor.rating}</span>
                      <span className="text-xs text-muted-foreground">
                        ({doctor.reviews} demo reviews)
                      </span>
                    </div>
                  </div>
                </div>
                <Link
                  href={`/appointment?doctor=${doctor.id}`}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                >
                  <Calendar className="h-4 w-4" />
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* Main content */}
          <div className="space-y-6 lg:col-span-2">
            <Reveal>
              <section className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
                <h2 className="font-display text-xl font-bold text-foreground">About Doctor</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {doctor.longBio}
                </p>
              </section>
            </Reveal>

            <Reveal delay={0.05}>
              <section className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
                <h2 className="font-display text-xl font-bold text-foreground">Areas of Expertise</h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {doctor.expertise.map((e) => (
                    <li
                      key={e}
                      className="flex items-center gap-3 rounded-xl border border-border bg-muted/30 p-3"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                        <Check className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-medium text-foreground">{e}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>

            <Reveal delay={0.1}>
              <section className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
                <h2 className="font-display text-xl font-bold text-foreground">Education</h2>
                <ul className="mt-4 space-y-3">
                  {doctor.education.map((ed) => (
                    <li key={ed} className="flex items-start gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <GraduationCap className="h-4 w-4" />
                      </span>
                      <span className="pt-1 text-sm text-foreground/90">{ed}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Reveal delay={0.05}>
              <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h2 className="font-display text-lg font-bold text-foreground">
                  Consultation Information
                </h2>
                <dl className="mt-4 space-y-4">
                  {infoItems.map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <item.icon className="h-4 w-4" />
                      </span>
                      <div>
                        <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                          {item.label}
                        </dt>
                        <dd className="text-sm font-semibold text-foreground">{item.value}</dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </section>
            </Reveal>

            <Reveal delay={0.1}>
              <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h2 className="font-display text-lg font-bold text-foreground">
                  Consultation Type
                </h2>
                <div className="mt-4 space-y-2">
                  {doctor.consultationType.map((type) => (
                    <div
                      key={type}
                      className="flex items-center gap-3 rounded-xl border border-border bg-muted/30 p-3"
                    >
                      {type === 'Online' ? (
                        <Video className="h-5 w-5 text-primary" />
                      ) : (
                        <MapPin className="h-5 w-5 text-primary" />
                      )}
                      <span className="text-sm font-medium text-foreground">{type}</span>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-xs leading-relaxed text-amber-900">
                All information on this profile is demo content for demonstration purposes
                only and does not represent a real medical professional.
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
