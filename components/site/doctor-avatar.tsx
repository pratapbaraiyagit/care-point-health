import { cn } from '@/lib/utils';

export function DoctorAvatar({
  initials,
  accent,
  className,
  size = 'md',
}: {
  initials: string;
  accent: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}) {
  const sizes = {
    sm: 'h-12 w-12 text-base',
    md: 'h-16 w-16 text-xl',
    lg: 'h-24 w-24 text-3xl',
    xl: 'h-32 w-32 text-4xl',
  };
  return (
    <div
      className={cn(
        'relative flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br shadow-inner',
        accent,
        sizes[size],
        className
      )}
    >
      <div className="absolute inset-0 bg-grid opacity-30" />
      <span className="relative font-display font-bold text-foreground/80">
        {initials}
      </span>
    </div>
  );
}
