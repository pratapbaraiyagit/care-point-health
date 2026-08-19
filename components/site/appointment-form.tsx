'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  Calendar,
  CheckCircle2,
  ArrowRight,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { doctors, services } from '@/lib/data';
import { DemoBadge } from '@/components/site/demo-badge';
import { cn } from '@/lib/utils';

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  department: string;
  doctor: string;
  preferredDate: string;
  preferredTime: string;
  appointmentType: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  fullName: '',
  email: '',
  phone: '',
  department: '',
  doctor: '',
  preferredDate: '',
  preferredTime: '',
  appointmentType: 'In-person',
  message: '',
};

const timeSlots = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
];

export function AppointmentForm() {
  const searchParams = useSearchParams();
  const preselectedDoctor = searchParams.get('doctor') ?? '';

  const [form, setForm] = useState<FormState>({
    ...initialForm,
    doctor: preselectedDoctor,
    department:
      doctors.find((d) => d.id === preselectedDoctor)?.specialty ?? '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const next: Errors = {};
    if (!form.fullName.trim()) next.fullName = 'Please enter your full name.';
    if (!form.email.trim()) next.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = 'Please enter a valid email address.';
    if (!form.phone.trim()) next.phone = 'Please enter your phone number.';
    else if (!/^[+\d\s-]{8,}$/.test(form.phone))
      next.phone = 'Please enter a valid phone number.';
    if (!form.department) next.department = 'Please select a department.';
    if (!form.doctor) next.doctor = 'Please select a doctor.';
    if (!form.preferredDate) next.preferredDate = 'Please select a preferred date.';
    if (!form.preferredTime) next.preferredTime = 'Please select a preferred time.';
    if (!form.appointmentType) next.appointmentType = 'Please select an appointment type.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (
    field: keyof FormState,
    value: string
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleDepartmentChange = (dept: string) => {
    setForm((prev) => ({
      ...prev,
      department: dept,
      doctor: '',
    }));
    setErrors((prev) => ({ ...prev, department: undefined, doctor: undefined }));
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

  const availableDoctors = form.department
    ? doctors.filter((d) => d.specialty === form.department)
    : doctors;

  if (submitted) {
    return (
      <div className="mx-auto max-w-xl rounded-3xl border border-border bg-card p-8 text-center shadow-sm sm:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h2 className="mt-6 font-display text-2xl font-bold text-foreground">
          Appointment request received
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Thank you. Our demo care team will contact you to confirm the appointment.
        </p>
        <div className="mt-6 rounded-xl border border-border bg-muted/30 p-4 text-left">
          <dl className="grid grid-cols-2 gap-3 text-sm">
            <dt className="text-muted-foreground">Name</dt>
            <dd className="font-semibold text-foreground">{form.fullName}</dd>
            <dt className="text-muted-foreground">Doctor</dt>
            <dd className="font-semibold text-foreground">
              {doctors.find((d) => d.id === form.doctor)?.name ?? form.doctor}
            </dd>
            <dt className="text-muted-foreground">Date</dt>
            <dd className="font-semibold text-foreground">{form.preferredDate}</dd>
            <dt className="text-muted-foreground">Time</dt>
            <dd className="font-semibold text-foreground">{form.preferredTime}</dd>
            <dt className="text-muted-foreground">Type</dt>
            <dd className="font-semibold text-foreground">{form.appointmentType}</dd>
          </dl>
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={() => {
              setForm(initialForm);
              setSubmitted(false);
            }}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            Book another appointment
          </button>
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Back to home <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mx-auto max-w-3xl">
      <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-10">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Full Name" error={errors.fullName} required>
            <input
              type="text"
              value={form.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
              placeholder="Jane Doe"
              aria-required="true"
              aria-invalid={!!errors.fullName}
              className={inputClass(!!errors.fullName)}
            />
          </Field>

          <Field label="Email" error={errors.email} required>
            <input
              type="email"
              value={form.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="jane@example.com"
              aria-required="true"
              aria-invalid={!!errors.email}
              className={inputClass(!!errors.email)}
            />
          </Field>

          <Field label="Phone Number" error={errors.phone} required>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              placeholder="+91 00000 00000"
              aria-required="true"
              aria-invalid={!!errors.phone}
              className={inputClass(!!errors.phone)}
            />
          </Field>

          <Field label="Select Department" error={errors.department} required>
            <select
              value={form.department}
              onChange={(e) => handleDepartmentChange(e.target.value)}
              aria-required="true"
              aria-invalid={!!errors.department}
              className={inputClass(!!errors.department)}
            >
              <option value="">Select department</option>
              {services.map((s) => (
                <option key={s.id} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Select Doctor" error={errors.doctor} required>
            <select
              value={form.doctor}
              onChange={(e) => handleChange('doctor', e.target.value)}
              aria-required="true"
              aria-invalid={!!errors.doctor}
              className={inputClass(!!errors.doctor)}
              disabled={!form.department}
            >
              <option value="">Select doctor</option>
              {availableDoctors.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name}
                </option>
              ))}
            </select>
            {!form.department && (
              <p className="mt-1 text-xs text-muted-foreground">
                Select a department first.
              </p>
            )}
          </Field>

          <Field label="Preferred Date" error={errors.preferredDate} required>
            <input
              type="date"
              value={form.preferredDate}
              onChange={(e) => handleChange('preferredDate', e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              aria-required="true"
              aria-invalid={!!errors.preferredDate}
              className={inputClass(!!errors.preferredDate)}
            />
          </Field>

          <Field label="Preferred Time" error={errors.preferredTime} required>
            <select
              value={form.preferredTime}
              onChange={(e) => handleChange('preferredTime', e.target.value)}
              aria-required="true"
              aria-invalid={!!errors.preferredTime}
              className={inputClass(!!errors.preferredTime)}
            >
              <option value="">Select time</option>
              {timeSlots.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Appointment Type" error={errors.appointmentType} required>
            <div className="flex gap-3">
              {(['In-person', 'Online Consultation'] as const).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => handleChange('appointmentType', type)}
                  className={cn(
                    'flex-1 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-colors',
                    form.appointmentType === type
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border bg-background text-foreground/70 hover:bg-muted'
                  )}
                >
                  {type}
                </button>
              ))}
            </div>
          </Field>
        </div>

        <div className="mt-5">
          <Field label="Message (optional)">
            <textarea
              value={form.message}
              onChange={(e) => handleChange('message', e.target.value)}
              placeholder="Share any details that may help with your consultation..."
              rows={4}
              className={inputClass(false)}
            />
          </Field>
        </div>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
            This appointment form is part of a demonstration website and does not create a
            real medical appointment.
          </p>
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Calendar className="h-4 w-4" />
                Confirm Appointment
              </>
            )}
          </button>
        </div>
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
    hasError
      ? 'border-destructive focus-visible:ring-destructive'
      : 'border-input'
  );
}
