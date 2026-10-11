'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  y = 20,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0, margin: '0px 0px -80px 0px' }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
