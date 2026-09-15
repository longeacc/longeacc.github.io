'use client';

import { useEffect, useRef, useState } from 'react';
import type { Metric } from '@/lib/dictionaries';

export default function MetricCounter({ value, prefix = '', suffix, decimals = 0, superscript = false, label }: Metric & { label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            if (prefersReduced) {
              setDisplay(value);
              return;
            }
            const duration = 1200;
            const start = performance.now();
            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setDisplay(value * eased);
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  const formatted = decimals > 0 ? display.toFixed(decimals) : Math.round(display).toString();

  return (
    <div className="metric" ref={ref}>
      <div className="metric-value">
        {prefix}
        {superscript ? <sup>{formatted}</sup> : formatted}
        {suffix}
      </div>
      <p className="metric-label">{label}</p>
    </div>
  );
}
