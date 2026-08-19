'use client';

import { useState, type FormEvent } from 'react';
import { Mail, CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  fullName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const next: Errors = {};
    if (!form.fullName.trim()) next.fullName = 'Please enter your full name.';
    if (!form.email.trim()) next.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = 'Please enter a valid email address.';
    if (form.phone && !/^[+\d\s-]{8,}$/.test(form.phone))
      next.phone = 'Please enter a valid phone number.';
    if (!form.subject.trim()) next.subject = 'Please enter a subject.';
    if (!form.message.trim()) next.message = 'Please enter your message.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-sm sm:p-10">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h2 className="mt-5 font-display text-xl font-bold text-foreground">
          Message sent
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Thank you for reaching out. This is a demo form, so no message was actually sent.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(initialForm);
            setSubmitted(false);
          }}
          className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" error={errors.fullName} required>
          <input
            type="text"
            value={form.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            placeholder="Jane Doe"
            className={inputClass(!!errors.fullName)}
          />
        </Field>
        <Field label="Email" error={errors.email} required>
          <input
            type="email"
            value={form.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="jane@example.com"
            className={inputClass(!!errors.email)}
          />
        </Field>
        <Field label="Phone (optional)" error={errors.phone}>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            placeholder="+91 00000 00000"
            className={inputClass(!!errors.phone)}
          />
        </Field>
        <Field label="Subject" error={errors.subject} required>
          <input
            type="text"
            value={form.subject}
            onChange={(e) => handleChange('subject', e.target.value)}
            placeholder="How can we help?"
            className={inputClass(!!errors.subject)}
          />
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Message" error={errors.message} required>
          <textarea
            value={form.message}
            onChange={(e) => handleChange('message', e.target.value)}
            placeholder="Tell us more..."
            rows={5}
            className={cn(inputClass(false), 'h-auto py-3')}
          />
        </Field>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <p className="flex items-start gap-2 text-xs text-muted-foreground">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
          Demo form — no message is actually sent.
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Send Message
            </>
          )}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-foreground">
        {label}
        {required && <span className="ml-0.5 text-destructive">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 flex items-center gap-1 text-xs font-medium text-destructive">
          <AlertCircle className="h-3 w-3" />
          {error}
        </p>
      )}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    'h-11 w-full rounded-xl border bg-background px-3.5 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    hasError ? 'border-destructive focus-visible:ring-destructive' : 'border-input'
  );
}
