'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from '@/lib/use-in-view';

type CounterProps = {
  value: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
};

export function Counter({ value, suffix = '', decimals = 0, duration = 1800 }: CounterProps) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) requestAnimationFrame(animate);
      else setDisplay(value);
    };
    requestAnimationFrame(animate);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}
