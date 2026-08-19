import { Calendar, Clock, Video, MapPin, ShieldCheck } from 'lucide-react';
import { DemoBadge } from '@/components/site/demo-badge';
import { AppointmentForm } from '@/components/site/appointment-form';

export const metadata = {
  title: 'Book an Appointment — CarePoint Health',
  description:
    'Book a demo appointment with one of our fictional healthcare specialists. This form is for demonstration purposes only.',
};

const highlights = [
  {
    icon: Clock,
    title: 'Quick & easy',
    description: 'Fill in your details in under two minutes.',
  },
  {
    icon: Video,
    title: 'Online or in-person',
    description: 'Choose the consultation type that suits you.',
  },
  {
    icon: MapPin,
    title: 'Multiple specialties',
    description: 'Connect with the right specialist for your needs.',
  },
  {
    icon: ShieldCheck,
    title: 'Patient-first',
    description: 'A welcoming, comfortable experience every time.',
  },
];

export default function AppointmentPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-primary/5 to-background py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-dots opacity-40 mask-fade-b" />
        <div className="container relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <DemoBadge>Demo booking — no real appointment</DemoBadge>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-foreground text-balance sm:text-5xl">
            Book your appointment
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground text-balance">
            Schedule a consultation with our care team. Fill in the form below and our demo
            team will be in touch.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-4 lg:col-span-1">
              <h2 className="font-display text-xl font-bold text-foreground">
                Why book with CarePoint?
              </h2>
              <div className="space-y-3">
                {highlights.map((h) => (
                  <div
                    key={h.title}
                    className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <h.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-foreground">{h.title}</h3>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                        {h.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-xs leading-relaxed text-amber-900">
                <div className="flex items-center gap-1.5 font-semibold">
                  <Calendar className="h-4 w-4" />
                  Demo only
                </div>
                <p className="mt-1.5">
                  This form does not send data anywhere and does not create a real medical
                  appointment.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
