import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { DemoBadge } from '@/components/site/demo-badge';
import { Reveal } from '@/components/site/reveal';
import { ContactForm } from '@/components/site/contact-form';

export const metadata = {
  title: 'Contact Us — CarePoint Health',
  description:
    'Get in touch with CarePoint Health. This is a demo contact page — all contact details are illustrative.',
};

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@carepointhealth.demo',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 00000 00000',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Ahmedabad, Gujarat, India',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon – Sat, 9:00 AM – 7:00 PM',
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-primary/5 to-background py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-dots opacity-40 mask-fade-b" />
        <div className="container relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <DemoBadge>Demo contact information</DemoBadge>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-foreground text-balance sm:text-5xl">
            How can we help?
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground text-balance">
            Have a question or want to learn more? Send us a message and our demo team will
            get back to you.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Contact info */}
            <div className="space-y-4 lg:col-span-2">
              <h2 className="font-display text-xl font-bold text-foreground">
                Contact information
              </h2>
              <div className="space-y-3">
                {contactInfo.map((item) => (
                  <Reveal key={item.label}>
                    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <item.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="mt-0.5 text-sm font-semibold text-foreground">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Map-style visual */}
              <Reveal delay={0.1}>
                <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5">
                  <div className="absolute inset-0 bg-grid opacity-40" />
                  <div className="relative flex h-full flex-col items-center justify-center text-center">
                    <MapPin className="h-10 w-10 text-primary" />
                    <p className="mt-3 font-display text-sm font-bold text-foreground">
                      Illustrative location
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Not a real map — for demonstration only.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
