import PipelineCanvas from './PipelineCanvas';

export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap">
        <div className="hero-text">
          <div className="kicker">
            <span className="dot" />
            Tremplin Recherche · ESIEE Paris
          </div>
          <h1>
            Building NLP systems that <span className="accent">read clinical language</span> the way
            oncologists do.
          </h1>
          <p className="hero-sub">
            I&apos;m Clément Longeac, an engineering student working at the intersection of clinical NLP
            and biomedical AI — currently building hybrid extraction pipelines for French oncology
            records, on the way to a PhD in AI applied to biomedical research.
          </p>
          <div className="cta-row">
            <a href="#research" className="btn btn-primary">
              See the research
            </a>
            <a href="/CV_Clement_LONGEAC_Anthropic_Fellows_2026-bis.pdf" className="btn btn-ghost">
              Download CV
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <PipelineCanvas />
          <div className="caption">DEMNE — Rules → CRF → Transformer → LLM, live schematic</div>
        </div>
      </div>
    </header>
  );
}
