import PipelineCanvas from './PipelineCanvas';
import type { Dictionary } from '@/lib/dictionaries';

export default function Hero({ dict }: { dict: Dictionary }) {
  const { hero } = dict;
  return (
    <header className="hero">
      <div className="wrap">
        <div className="hero-text">
          <div className="kicker">
            <span className="dot" />
            {hero.kicker}
          </div>
          <h1>
            {hero.h1Pre}
            <span className="accent">{hero.h1Accent}</span>
            {hero.h1Post}
          </h1>
          <p className="hero-sub">{hero.sub}</p>
          <div className="cta-row">
            <a href="#research" className="btn btn-primary">
              {hero.ctaResearch}
            </a>
            <a href="/CV_Clement_LONGEAC_Anthropic_Fellows_2026-bis.pdf" className="btn btn-ghost">
              {hero.ctaCV}
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <PipelineCanvas />
          <div className="caption">{hero.caption}</div>
        </div>
      </div>
    </header>
  );
}
