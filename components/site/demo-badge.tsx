import { Info } from 'lucide-react';
import { cn } from '@/lib/utils';

export function DemoBadge({
  children = 'Demo content',
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-800',
        className
      )}
    >
      <Info className="h-3 w-3" />
      {children}
    </span>
  );
}
