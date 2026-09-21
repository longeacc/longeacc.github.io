'use client';

import { motion } from 'framer-motion';
import PipelineCanvas from './PipelineCanvas';
import { RevealBlock, RevealWords } from './HeroReveal';
import type { Dictionary } from '@/lib/dictionaries';

export default function Hero({ dict }: { dict: Dictionary }) {
  const { hero } = dict;
  return (
    <header className="hero">
      <div className="wrap">
        <div className="hero-text">
          <RevealBlock delay={0.35}>
            <div className="kicker">
              <span className="dot" />
              {hero.kicker}
            </div>
          </RevealBlock>
          <h1>
            <RevealWords text={hero.h1Pre.trim()} delay={0.65} />{' '}
            <span className="accent">
              <RevealWords text={hero.h1Accent.trim()} delay={0.85} />
            </span>{' '}
            <RevealWords text={hero.h1Post.trim()} delay={1.05} />
          </h1>
          <RevealBlock delay={1.2}>
            <p className="hero-sub">{hero.sub}</p>
          </RevealBlock>
          <RevealBlock delay={1.5}>
            <div className="cta-row">
              <a href="#research" className="btn btn-primary">
                {hero.ctaResearch}
              </a>
              <a href="/CV_Clement_LONGEAC_Anthropic_Fellows_2026-bis.pdf" className="btn btn-ghost">
                {hero.ctaCV}
              </a>
            </div>
          </RevealBlock>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.7, ease: 'easeOut' }}
        >
          <PipelineCanvas />
          <div className="caption">{hero.caption}</div>
        </motion.div>
      </div>
    </header>
  );
}
