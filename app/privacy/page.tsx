import { DemoBadge } from '@/components/site/demo-badge';

export const metadata = {
  title: 'Privacy Policy — CarePoint Health',
  description: 'Demo privacy policy for the fictional CarePoint Health brand.',
};

export default function PrivacyPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6">
        <DemoBadge>Demo legal document</DemoBadge>
        <h1 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Last updated: August 2026 · This is a demonstration document.
        </p>

        <div className="prose-custom mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <div>
            <h2 className="font-display text-lg font-bold text-foreground">Overview</h2>
            <p className="mt-2">
              CarePoint Health is a fictional healthcare brand created for demonstration
              purposes. This privacy policy is illustrative and does not govern any real
              data collection.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-foreground">Information You Provide</h2>
            <p className="mt-2">
              Any information entered into forms on this website (such as appointment or
              contact forms) is not transmitted or stored. It remains in your browser only
              for the duration of the demo session.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-foreground">No Real Medical Data</h2>
            <p className="mt-2">
              This website does not collect, store, or process any real medical records or
              personal health information. All content is fictional.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-foreground">Contact</h2>
            <p className="mt-2">
              For questions about this demo, please refer to the project documentation. No
              real contact channel is monitored.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
