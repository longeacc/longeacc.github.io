import type { Dictionary } from '@/lib/dictionaries';

export default function Publications({ dict }: { dict: Dictionary }) {
  const { publications } = dict;
  return (
    <section id="publications" className="section-alt">
      <div className="wrap">
        <div className="section-head">
          <div className="section-label">{publications.label}</div>
          <h2>{publications.title}</h2>
          <p>{publications.subtitle}</p>
        </div>

        <div className="publication-card">
          <h3>{publications.entryTitle}</h3>
          <div className="pub-authors">{publications.authors}</div>
          <div className="pub-venue">
            {publications.journal} — {publications.status}
          </div>
          <p>{publications.description}</p>
        </div>
      </div>
    </section>
  );
}
