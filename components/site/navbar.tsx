'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, HeartPulse, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/doctors', label: 'Doctors' },
  { href: '/services', label: 'Services' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-background/85 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:h-20">
        <Link href="/" className="flex items-center gap-2.5" aria-label="CarePoint Health home">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
            <HeartPulse className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-foreground">
            CarePoint<span className="text-primary"> Health</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'rounded-lg px-3.5 py-2 text-sm font-medium transition-colors',
                    active
                      ? 'text-primary'
                      : 'text-foreground/70 hover:text-foreground hover:bg-muted'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/doctors"
            className="inline-flex h-10 items-center justify-center rounded-lg px-4 text-sm font-semibold text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
          >
            Find a Doctor
          </Link>
          <Link
            href="/appointment"
            className="inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Calendar className="h-4 w-4" />
            Book an Appointment
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 top-16 z-40 bg-background lg:hidden">
          <div className="container mx-auto flex max-w-6xl flex-col gap-1 px-4 py-6 sm:px-6">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'rounded-lg px-4 py-3 text-base font-medium transition-colors',
                    active
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground/80 hover:bg-muted'
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-4 flex flex-col gap-3">
              <Link
                href="/doctors"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-border px-5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Find a Doctor
              </Link>
              <Link
                href="/appointment"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              >
                <Calendar className="h-4 w-4" />
                Book an Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
