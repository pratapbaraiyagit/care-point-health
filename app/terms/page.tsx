import { DemoBadge } from '@/components/site/demo-badge';

export const metadata = {
  title: 'Terms of Use — CarePoint Health',
  description: 'Demo terms of use for the fictional CarePoint Health brand.',
};

export default function TermsPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6">
        <DemoBadge>Demo legal document</DemoBadge>
        <h1 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Terms of Use
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Last updated: August 2026 · This is a demonstration document.
        </p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <div>
            <h2 className="font-display text-lg font-bold text-foreground">Acceptance of Terms</h2>
            <p className="mt-2">
              By accessing this website, you acknowledge that CarePoint Health is a fictional
              brand created solely for demonstration purposes and does not provide any real
              medical services.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-foreground">No Medical Advice</h2>
            <p className="mt-2">
              All content on this website is illustrative and for demonstration only. It is
              not intended to be medical advice, diagnosis, or treatment. Always consult a
              qualified healthcare professional for medical concerns.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-foreground">No Real Appointments</h2>
            <p className="mt-2">
              Appointment and contact forms on this website do not create real appointments
              or send real messages. No data is transmitted to any real healthcare provider.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-foreground">Limitation of Liability</h2>
            <p className="mt-2">
              This website is provided as-is for demonstration. No warranty is made about
              the accuracy or completeness of any information presented.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
