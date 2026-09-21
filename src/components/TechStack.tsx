import type { Dictionary } from '@/lib/dictionaries';

export default function TechStack({ dict }: { dict: Dictionary }) {
  const { techStack } = dict;
  return (
    <section id="tech-stack" className="section-alt">
      <div className="wrap">
        <div className="section-head">
          <div className="section-label">{techStack.label}</div>
          <h2>{techStack.title}</h2>
          <p>{techStack.subtitle}</p>
        </div>

        <div className="stack-grid">
          {techStack.categories.map((category) => (
            <div className="stack-card" key={category.title}>
              <h3>{category.title}</h3>
              {category.lines.map((line, i) => (
                <div className="stack-line" key={i}>
                  {line.join(' · ')}
                </div>
              ))}
            </div>
          ))}

          <div className="stack-card">
            <h3>{techStack.languagesTitle}</h3>
            <div className="stack-line">
              {techStack.languages.map((l) => `${l.flag} ${l.level}`).join(' · ')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
