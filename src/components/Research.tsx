import MetricCounter from './MetricCounter';
import type { Dictionary } from '@/lib/dictionaries';

export default function Research({ dict }: { dict: Dictionary }) {
  const { research, metrics } = dict;
  return (
    <section id="research" className="section-alt">
      <div className="wrap">
        <div className="section-head">
          <div className="section-label">{research.label}</div>
          <h2>{research.title}</h2>
          <p>{research.subtitle}</p>
        </div>

        <div className="metrics-block metrics-block-top">
          <div className="section-label">{metrics.label}</div>
          <h3 className="metrics-title">{metrics.title}</h3>
          <div className="metrics-row">
            {metrics.items.map((metric) => (
              <MetricCounter key={metric.label} {...metric} />
            ))}
          </div>
        </div>

        <div className="research-block">
          <div>
            <h3>{research.h3}</h3>
            <div className="research-tagline">{research.tagline}</div>
            <p>{research.p1}</p>
            <p>{research.p2}</p>
            <div className="tag-row">
              {research.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="link-row">
              <a
                href="https://github.com/longeacc/DEMNE-Determination-of-Extraction-Methode-for-Named-Entity"
                target="_blank"
                rel="noopener"
              >
                {research.viewRepo}
              </a>
              <a href="#writing">{research.readMethodology}</a>
            </div>
          </div>

          <div className="pipeline">
            {research.pipeline.map((stage) => (
              <div className="pipeline-stage" key={stage.num}>
                <div className="stage-num">{stage.num}</div>
                <div className="stage-body">
                  <h4>{stage.title}</h4>
                  <p>{stage.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ai-act">
          <h3>{research.aiAct.title}</h3>
          <p>{research.aiAct.body}</p>
          <div className="ai-act-grid">
            {research.aiAct.articles.map((article) => (
              <div className="ai-act-card" key={article.code}>
                <div className="ai-act-code">
                  {article.code} — {article.label}
                </div>
                <p>{article.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
