export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head">
          <div className="section-label">01 — About</div>
          <h2>From tutoring math to modeling tumor markers</h2>
        </div>
        <div className="about-grid">
          <div>
            <p>
              I&apos;m a fourth-year student at <strong>ESIEE Paris</strong>, specializing in Data
              Science &amp; AI, and enrolled in the school&apos;s <strong>Tremplin Recherche</strong>{' '}
              track — a program built for students heading toward doctoral research rather than a
              standard industry placement.
            </p>
            <p>
              My work centers on making unstructured clinical text usable for research: extracting
              the biomarkers, staging information, and treatment details buried in French oncology
              reports, where general-purpose NLP tools consistently fail on domain vocabulary and
              document structure.
            </p>
            <p>
              Alongside my studies I tutor mathematics, physics, and computer science through
              Complétude, and I&apos;m preparing applications for a CIFRE industrial PhD in
              biomedical AI at Sorbonne University.
            </p>
          </div>
          <dl className="fact-list">
            <div className="fact-row">
              <dt>Institution</dt>
              <dd>ESIEE Paris</dd>
            </div>
            <div className="fact-row">
              <dt>Program</dt>
              <dd>Data Science &amp; AI (DSIA)</dd>
            </div>
            <div className="fact-row">
              <dt>Track</dt>
              <dd>Tremplin Recherche</dd>
            </div>
            <div className="fact-row">
              <dt>Next step</dt>
              <dd>PhD, biomedical AI — Sorbonne</dd>
            </div>
            <div className="fact-row">
              <dt>Languages</dt>
              <dd>FR · EN · JP · ES</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
