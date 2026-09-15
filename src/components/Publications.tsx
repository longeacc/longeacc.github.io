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
          <div className="writing-status">{publications.status}</div>
          <h3>{publications.entryTitle}</h3>
          <div className="publication-meta">
            {publications.authors} · {publications.journal}
          </div>
          <p>{publications.description}</p>
        </div>
      </div>
    </section>
  );
}
