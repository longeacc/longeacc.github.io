import { RevealBlock, RevealWords } from './HeroReveal';
import InteractiveBackground from './InteractiveBackground';
import type { Dictionary } from '@/lib/dictionaries';

export default function Hero({ dict }: { dict: Dictionary }) {
  const { hero } = dict;
  return (
    <header className="hero">
      <InteractiveBackground />
      <div className="wrap">
        <div className="hero-text">
          <RevealBlock delay={0.15}>
            <div className="kicker">
              <span className="dot" />
              {hero.kicker}
            </div>
          </RevealBlock>
          <h1>
            <RevealWords text={hero.h1Pre.trim()} delay={0.3} />{' '}
            <span className="accent">
              <RevealWords text={hero.h1Accent.trim()} delay={0.45} />
            </span>{' '}
            <RevealWords text={hero.h1Post.trim()} delay={0.6} />
          </h1>
          <RevealBlock delay={0.75}>
            <p className="hero-sub">{hero.sub}</p>
          </RevealBlock>
          <RevealBlock delay={0.9}>
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

        <figure className="hero-visual" style={{ margin: 0 }}>
          <div className="mat">
            <img
              src="/images/demne-graph.svg"
              alt="DEMNE routing decision graph: entity metrics route to RULES, TBM or LLM"
              width={940}
              height={470}
            />
          </div>
          <figcaption className="caption">{hero.caption}</figcaption>
        </figure>
      </div>
    </header>
  );
}
