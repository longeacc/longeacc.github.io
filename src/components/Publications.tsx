import Link from 'next/link';
import { pathForLang } from '@/lib/languages';
import type { Dictionary, Lang } from '@/lib/dictionaries';

export default function Publications({ dict, lang }: { dict: Dictionary; lang: Lang }) {
  const { publications } = dict;
  const fr = dict.htmlLang.startsWith('fr');
  const home = pathForLang(lang);
  const moreLabel = fr ? 'Voir les résultats →' : 'View the results →';

  return (
    <section id="publications" className="section-alt">
      <div className="wrap">
        <div className="section-head">
          <div className="section-label">{publications.label}</div>
          <h2>{publications.title}</h2>
          <p>{publications.subtitle}</p>
        </div>

        <Link href={`${home}publications/demne/`} className="publication-card publication-card-clickable">
          <h3>{publications.entryTitle}</h3>
          <div className="pub-authors">{publications.authors}</div>
          <div className="pub-venue">
            {publications.journal} — {publications.status}
          </div>
          <p>{publications.description}</p>
          <div className="project-more">{moreLabel}</div>
        </Link>
      </div>
    </section>
  );
}
