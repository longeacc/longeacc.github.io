import type { Dictionary } from '@/lib/dictionaries';

const ROMAN = ['I', 'II', 'III', 'IV'];

export default function AreasOfFocus({ dict }: { dict: Dictionary }) {
  const { areasOfFocus } = dict;
  return (
    <section id="areas-of-focus">
      <div className="wrap">
        <div className="section-head">
          <div className="section-label">{areasOfFocus.label}</div>
          <h2>{areasOfFocus.title}</h2>
        </div>

        <div className="focus-grid">
          {areasOfFocus.items.map((item, i) => (
            <div className="focus-card" key={item.title}>
              <div className="focus-num">{ROMAN[i]}</div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
