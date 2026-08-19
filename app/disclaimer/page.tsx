import { DemoBadge } from '@/components/site/demo-badge';

export const metadata = {
  title: 'Medical Disclaimer — CarePoint Health',
  description: 'Demo medical disclaimer for the fictional CarePoint Health brand.',
};

export default function DisclaimerPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6">
        <DemoBadge>Demo legal document</DemoBadge>
        <h1 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Medical Disclaimer
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Last updated: August 2026 · This is a demonstration document.
        </p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <div>
            <h2 className="font-display text-lg font-bold text-foreground">Fictional Brand</h2>
            <p className="mt-2">
              CarePoint Health is a fictional healthcare brand created for demonstration
              purposes. All doctors, statistics, testimonials, services, contact details and
              other information shown on this website are illustrative.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-foreground">Not Medical Advice</h2>
            <p className="mt-2">
              The information provided on this website is for general educational and
              demonstration purposes only. It is not a substitute for professional medical
              advice, diagnosis, or treatment. Always seek the advice of a qualified
              healthcare provider with any questions you may have regarding a medical
              condition.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-foreground">No Emergency Use</h2>
            <p className="mt-2">
              This website is not intended for medical emergencies. If you are experiencing a
              medical emergency, contact your local emergency services or visit the nearest
              emergency facility immediately.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-foreground">No Real Appointments</h2>
            <p className="mt-2">
              Appointment forms on this website do not create real medical appointments. No
              data is sent to any real healthcare provider.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
