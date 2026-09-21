'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const ease = [0.16, 1, 0.3, 1] as const;

export function RevealBlock({
  children,
  delay = 0,
  y = 6,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function RevealWords({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(' ');
  return (
    <>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.04,
            ease,
          }}
          className="reveal-word"
        >
          {word}
        </motion.span>
      ))}
    </>
  );
}
