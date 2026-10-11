import type { Dictionary } from '@/lib/dictionaries';

// Verified against the DEMNE manuscript.
// Figure 3 — routing concordance by optimisation domain (rows) × evaluation domain (cols).
// Table 5 — Protocol B per-corpus concordance / cost-score (oncology).
// Baselines — DEMNE 0.954/0.947, Always-RULES 0.729/0.582, Always-LLM 0.148/0.209.

export default function DemneResults({ dict }: { dict: Dictionary }) {
  const fr = dict.htmlLang.startsWith('fr');
  const t = {
    heading: fr ? 'Résultats, en bref' : 'Results, at a glance',
    intro: fr
      ? "DEMNE apprend, pour chaque entité, s'il faut la confier à des règles, à un modèle léger ou à un LLM. Trois lectures : sa capacité à généraliser d'un domaine clinique à l'autre, sa performance corpus par corpus en oncologie, et son avance sur des stratégies à niveau fixe."
      : 'DEMNE learns, per entity, whether to route it to rules, a lightweight model, or an LLM. Three views: how well it generalises from one clinical domain to another, its per-corpus performance in oncology, and its margin over fixed-tier strategies.',

    // Figure 3
    f3Eyebrow: 'Figure 3',
    f3Title: fr ? 'Généralisation entre domaines cliniques' : 'Generalisation across clinical domains',
    f3Top: fr ? 'évalué sur →' : 'evaluated on →',
    f3Left: fr ? 'optimisé sur' : 'optimised on',
    f3Low: fr ? 'faible' : 'low',
    f3High: fr ? 'élevée' : 'high',
    f3Explain: fr ? (
      <>
        Chaque ligne est une configuration <b>optimisée</b> sur un domaine ; chaque colonne, le domaine sur lequel on l'
        <b>évalue</b>. Plus la case est foncée, plus la concordance de routage est élevée. La diagonale domine — chaque
        configuration est meilleure sur son propre domaine — mais les cases hors diagonale restent élevées : les règles
        de routage apprises <b>transfèrent</b> d'un corpus clinique à un autre.
      </>
    ) : (
      <>
        Each row is a configuration <b>optimised</b> on one domain; each column, the domain it is <b>evaluated</b> on.
        Darker cells mean higher routing concordance. The diagonal dominates — every configuration is strongest on its
        own domain — yet the off-diagonal cells stay high: the learned routing rules <b>transfer</b> from one clinical
        corpus to another.
      </>
    ),

    // Table 5
    t5Eyebrow: 'Table 5',
    t5Title: fr ? 'Performance par corpus — oncologie' : 'Per-corpus performance — oncology',
    t5Corpus: fr ? 'Corpus' : 'Corpus',
    t5Conc: fr ? 'Concordance' : 'Concordance',
    t5Cost: fr ? 'Cost-score' : 'Cost-score',
    t5Global: fr ? 'Global (in-domain)' : 'Global (in-domain)',
    t5Loco: fr ? 'Validation croisée (LOCO)' : 'Cross-validation (LOCO)',
    t5Explain: fr ? (
      <>
        Protocole B, domaine oncologique. <b>Concordance</b> = part des entités routées vers le niveau optimal ;{' '}
        <b>cost-score</b> = qualité pondérée par le coût de calcul. Sur Cantemist et ESMO 2025 le routage est parfait ; en
        validation croisée inter-sites (LOCO) il tient à <b>0,866</b>.
      </>
    ) : (
      <>
        Protocol B, oncology domain. <b>Concordance</b> = share of entities routed to the optimal tier;{' '}
        <b>cost-score</b> = quality weighted by compute cost. On Cantemist and ESMO 2025 routing is perfect; under
        leave-one-corpus-out cross-validation (LOCO) it holds at <b>0.866</b>.
      </>
    ),

    // Baselines
    bEyebrow: fr ? 'Comparatif' : 'Baselines',
    bTitle: fr ? 'Pourquoi le routage adaptatif' : 'Why adaptive routing',
    conc: fr ? 'Concordance' : 'Concordance',
    cost: fr ? 'Cost-score' : 'Cost-score',
    bExplain: fr ? (
      <>
        Deux stratégies naïves : tout confier aux règles, ou tout confier au LLM. Les règles seules sont rapides mais
        ratent les cas complexes (<b>0,729</b>) ; le LLM seul est coûteux et étonnamment peu concordant (<b>0,148</b>). Le
        routage adaptatif de DEMNE atteint <b>0,954</b> de concordance pour un cost-score de <b>0,947</b>.
      </>
    ) : (
      <>
        Two naive strategies: route everything to rules, or everything to the LLM. Rules alone are fast but miss the hard
        cases (<b>0.729</b>); the LLM alone is costly and surprisingly low-concordance (<b>0.148</b>). DEMNE's adaptive
        routing reaches <b>0.954</b> concordance at a <b>0.947</b> cost-score.
      </>
    ),
  };

  // ---- Figure 3 heatmap data ----
  const cols = ['Onco', 'QUAERO', 'MACC'];
  const rowLabels = fr
    ? ['Oncologie', 'QUAERO', 'MACCROBAT', 'Onco + QUAERO', 'Onco + MACC', 'QUAERO + MACC', 'Les trois']
    : ['Oncology', 'QUAERO', 'MACCROBAT', 'Onco + QUAERO', 'Onco + MACC', 'QUAERO + MACC', 'All three'];
  const hm = [
    [0.954, 0.5, 0.622],
    [0.665, 0.802, 0.644],
    [0.731, 0.452, 0.859],
    [0.908, 0.635, 0.726],
    [0.938, 0.5, 0.733],
    [0.745, 0.802, 0.844],
    [0.924, 0.635, 0.659],
  ];
  const lx = 128;
  const ty = 46;
  const CW = 72;
  const CH = 30;
  const opacityFor = (v: number) => Math.max(0.06, Math.min(0.97, 0.06 + ((v - 0.45) / 0.55) * 0.9));
  const fmt = (v: number) => (fr ? v.toFixed(3).replace('.', ',') : v.toFixed(3));

  // ---- baseline bars ----
  const groups = [
    { label: 'DEMNE', conc: 0.954, cost: 0.947, strong: true },
    { label: fr ? 'Toujours RULES' : 'Always RULES', conc: 0.729, cost: 0.582 },
    { label: fr ? 'Toujours LLM' : 'Always LLM', conc: 0.148, cost: 0.209 },
  ];
  const bx = 56;
  const by = 232;
  const bh = 196;
  const gw = 150;
  const bw = 40;

  // ---- Table 5 rows ----
  const t5 = [
    { corpus: 'Cantemist', conc: 1.0, cost: 1.0, perfect: true },
    { corpus: 'ESMO 2025', conc: 1.0, cost: 1.0, perfect: true },
    { corpus: 'Oncolog-IA', conc: 0.863, cost: 0.842 },
  ];

  return (
    <div className="demne-results">
      <h3 className="results-heading">{t.heading}</h3>
      <p className="results-intro">{t.intro}</p>

      <div className="results-grid">
        {/* Figure 3 — heatmap */}
        <figure className="result-card">
          <div className="result-eyebrow">{t.f3Eyebrow}</div>
          <h4>{t.f3Title}</h4>
          <div className="result-fig">
            <svg viewBox="0 0 360 272" role="img" aria-label={t.f3Title}>
              <text x={lx + (CW * 3) / 2} y="18" textAnchor="middle" fontFamily="var(--mono)" fontSize="10.5" fill="var(--text-muted)">
                {t.f3Top}
              </text>
              {cols.map((c, i) => (
                <text key={c} x={lx + CW * i + CW / 2} y={ty - 9} textAnchor="middle" fontFamily="var(--mono)" fontSize="11" fontWeight="600" fill="var(--text)">
                  {c}
                </text>
              ))}
              <text x="14" y={ty + (CH * 7) / 2} textAnchor="middle" fontFamily="var(--mono)" fontSize="10.5" fill="var(--text-muted)" transform={`rotate(-90 14 ${ty + (CH * 7) / 2})`}>
                {t.f3Left}
              </text>
              {hm.map((row, r) => (
                <g key={r}>
                  <text x={lx - 10} y={ty + CH * r + CH / 2 + 4} textAnchor="end" fontFamily="var(--mono)" fontSize="10.5" fill="var(--text-muted)">
                    {rowLabels[r]}
                  </text>
                  {row.map((v, c) => {
                    const o = opacityFor(v);
                    return (
                      <g key={c}>
                        <rect x={lx + CW * c} y={ty + CH * r} width={CW} height={CH} fill="var(--cyan)" fillOpacity={o} stroke="var(--surface)" strokeWidth="2" />
                        <text x={lx + CW * c + CW / 2} y={ty + CH * r + CH / 2 + 4} textAnchor="middle" fontFamily="var(--mono)" fontSize="11" fontWeight={o > 0.5 ? 600 : 400} fill={o > 0.5 ? 'var(--on-accent)' : 'var(--text)'}>
                          {fmt(v)}
                        </text>
                      </g>
                    );
                  })}
                </g>
              ))}
            </svg>
            <div className="hm-legend">
              <span>{t.f3Low}</span>
              <span className="bar" />
              <span>{t.f3High}</span>
            </div>
          </div>
          <figcaption className="result-explain">{t.f3Explain}</figcaption>
        </figure>

        {/* Table 5 — per-corpus */}
        <figure className="result-card">
          <div className="result-eyebrow">{t.t5Eyebrow}</div>
          <h4>{t.t5Title}</h4>
          <div className="result-fig">
            <table className="result-table">
              <thead>
                <tr>
                  <th>{t.t5Corpus}</th>
                  <th className="num">{t.t5Conc}</th>
                  <th className="num">{t.t5Cost}</th>
                </tr>
              </thead>
              <tbody>
                {t5.map((r) => (
                  <tr key={r.corpus}>
                    <td className="corpus">{r.corpus}</td>
                    <td className={`num${r.perfect ? ' tag-perfect' : ''}`}>{fmt(r.conc)}</td>
                    <td className={`num${r.perfect ? ' tag-perfect' : ''}`}>{fmt(r.cost)}</td>
                  </tr>
                ))}
                <tr className="row-strong row-sep">
                  <td className="corpus">{t.t5Global}</td>
                  <td className="num">{fmt(0.954)}</td>
                  <td className="num">{fmt(0.947)}</td>
                </tr>
                <tr>
                  <td className="corpus">{t.t5Loco}</td>
                  <td className="num">{fmt(0.866)}</td>
                  <td className="num">{fmt(0.837)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <figcaption className="result-explain">{t.t5Explain}</figcaption>
        </figure>

        {/* Baselines — full width */}
        <figure className="result-card result-wide">
          <div className="result-eyebrow">{t.bEyebrow}</div>
          <h4>{t.bTitle}</h4>
          <div className="result-fig">
            <svg viewBox="0 0 520 300" role="img" aria-label={t.bTitle}>
              {[0, 0.25, 0.5, 0.75, 1].map((g) => (
                <g key={g}>
                  <line x1={bx} y1={by - bh * g} x2="500" y2={by - bh * g} stroke="var(--line-soft)" />
                  <text x={bx - 8} y={by - bh * g + 4} textAnchor="end" fontFamily="var(--mono)" fontSize="10" fill="var(--text-faint)">
                    {g.toFixed(2)}
                  </text>
                </g>
              ))}
              {groups.map((grp, i) => {
                const gx = bx + 24 + i * gw;
                return (
                  <g key={grp.label}>
                    <rect x={gx} y={by - bh * grp.conc} width={bw} height={bh * grp.conc} rx="3" fill="var(--cyan)" opacity={grp.strong ? 1 : 0.55} />
                    <rect x={gx + bw + 10} y={by - bh * grp.cost} width={bw} height={bh * grp.cost} rx="3" fill="var(--violet)" opacity={grp.strong ? 1 : 0.55} />
                    <text x={gx + bw / 2} y={by - bh * grp.conc - 7} textAnchor="middle" fontFamily="var(--mono)" fontSize="11" fontWeight="600" fill="var(--text)">
                      {grp.conc.toFixed(3)}
                    </text>
                    <text x={gx + bw + 10 + bw / 2} y={by - bh * grp.cost - 7} textAnchor="middle" fontFamily="var(--mono)" fontSize="11" fill="var(--text-muted)">
                      {grp.cost.toFixed(3)}
                    </text>
                    <text x={gx + bw + 5} y={by + 18} textAnchor="middle" fontFamily="var(--grotesk)" fontSize="11.5" fontWeight={grp.strong ? 700 : 500} fill={grp.strong ? 'var(--text)' : 'var(--text-muted)'}>
                      {grp.label}
                    </text>
                  </g>
                );
              })}
              <g fontFamily="var(--mono)" fontSize="10.5">
                <rect x={bx + 24} y="270" width="11" height="11" rx="2" fill="var(--cyan)" />
                <text x={bx + 40} y="279" fill="var(--text-muted)">{t.conc}</text>
                <rect x={bx + 130} y="270" width="11" height="11" rx="2" fill="var(--violet)" />
                <text x={bx + 146} y="279" fill="var(--text-muted)">{t.cost}</text>
              </g>
            </svg>
          </div>
          <figcaption className="result-explain">{t.bExplain}</figcaption>
        </figure>
      </div>
    </div>
  );
}
