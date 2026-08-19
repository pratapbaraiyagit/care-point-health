import Link from 'next/link';
import { HeartPulse, Mail, Phone, MapPin } from 'lucide-react';

const companyLinks = [
  { href: '/about', label: 'About' },
  { href: '/doctors', label: 'Doctors' },
  { href: '/services', label: 'Services' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
];

const patientLinks = [
  { href: '/appointment', label: 'Appointments' },
  { href: '/resources#faqs', label: 'FAQs' },
  { href: '/resources', label: 'Health Resources' },
];

const legalLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Use' },
  { href: '/disclaimer', label: 'Medical Disclaimer' },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <HeartPulse className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-bold tracking-tight">
                CarePoint<span className="text-primary"> Health</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Compassionate care. Better health.
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-primary" />
                hello@carepointhealth.demo
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-primary" />
                +91 00000 00000
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-primary" />
                Ahmedabad, Gujarat, India
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Patient Resources</h3>
            <ul className="mt-4 space-y-2.5">
              {patientLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Legal</h3>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} CarePoint Health. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
