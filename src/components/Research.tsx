const PIPELINE_STAGES = [
  {
    num: '01',
    title: 'Rule-based pass',
    body: 'Regex and lexicon matching catch high-confidence, low-ambiguity entities cheaply — dates, dosages, standard biomarker abbreviations.',
  },
  {
    num: '02',
    title: 'CRF layer',
    body: 'A conditional random field models sequential structure the rules miss, using local context to resolve ambiguous spans.',
  },
  {
    num: '03',
    title: 'Transformer extraction',
    body: 'DrBERT-7BG, fine-tuned across three oncology corpora, handles the entities that need real semantic and domain understanding.',
  },
  {
    num: '04',
    title: 'LLM arbitration',
    body: 'Remaining conflicts and edge cases are routed to an LLM pass for final disambiguation before output.',
  },
];

const TAGS = ['Clinical NLP', 'CRF', 'Transformers', 'DrBERT-7GB', 'French oncology'];

export default function Research() {
  return (
    <section id="research" className="section-alt">
      <div className="wrap">
        <div className="section-head">
          <div className="section-label">02 — Research</div>
          <h2>DEMNE / DuraXeLL</h2>
          <p>A hybrid named-entity recognition pipeline for French oncology clinical text.</p>
        </div>

        <div className="research-block">
          <div>
            <h3>Determination of Extraction Methods for Named Entities</h3>
            <div className="research-tagline">Clinical NER · French oncology corpora</div>
            <p>
              Off-the-shelf NER models struggle badly on French clinical text: dense abbreviations,
              inconsistent formatting across hospital systems, and biomarker terminology that
              barely appears in general training data. DEMNE tackles this with a staged pipeline
              rather than a single model — each stage handles what it&apos;s actually good at, and
              only escalates to a heavier model when it has to.
            </p>
            <p>
              The system is fine-tuned on <strong>DrBERT-7GB</strong> across three distinct French
              oncology corpora, and targets seven priority biomarker entity types used in
              treatment-relevant reporting.
            </p>
            <div className="tag-row">
              {TAGS.map((tag) => (
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
                View repository
              </a>
              <a href="#writing">Read the methodology</a>
            </div>
          </div>

          <div className="pipeline">
            {PIPELINE_STAGES.map((stage) => (
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
      </div>
    </section>
  );
}
