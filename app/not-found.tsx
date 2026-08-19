import Link from 'next/link';
import { Home, ArrowLeft, HeartPulse } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20">
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-40 mask-fade-b" />
      <div className="container relative mx-auto max-w-lg px-4 text-center sm:px-6">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <HeartPulse className="h-8 w-8" />
        </div>
        <p className="mt-6 font-display text-7xl font-bold text-primary">404</p>
        <h1 className="mt-2 font-display text-2xl font-bold text-foreground">
          Page not found
        </h1>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          The page you are looking for may have been moved or no longer exists. Let&apos;s
          get you back on track.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            <Home className="h-4 w-4" />
            Back to home
          </Link>
          <Link
            href="/doctors"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            <ArrowLeft className="h-4 w-4" />
            Find a doctor
          </Link>
        </div>
      </div>
    </section>
  );
}
