'use client';

import { type CSSProperties, type ElementType } from 'react';
import { useInView } from '@/lib/use-in-view';
import { cn } from '@/lib/utils';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: ElementType;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 20,
  as: Tag = 'div',
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const style: CSSProperties = {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : `translateY(${y}px)`,
    transitionProperty: 'opacity, transform',
    transitionDuration: '0.6s',
    transitionDelay: `${delay}s`,
    transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
  };
  return (
    <Tag ref={ref} className={cn(className)} style={style}>
      {children}
    </Tag>
  );
}
