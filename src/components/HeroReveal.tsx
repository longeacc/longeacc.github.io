import { ReactNode } from 'react';

// Pure-CSS entrance. The content is in the DOM and visible by default; the
// `.hero-rise` class only adds a short fade-up that always finishes visible,
// with no framer-motion / hydration dependency (fixes the blank-hero bug).

export function RevealBlock({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
}) {
  return (
    <div className="hero-rise" style={{ animationDelay: `${delay * 0.45}s` }}>
      {children}
    </div>
  );
}

export function RevealWords({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="hero-rise" style={{ animationDelay: `${delay * 0.45}s` }}>
      {text}
    </span>
  );
}
