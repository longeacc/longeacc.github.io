import type { Dictionary } from '@/lib/dictionaries';

export default function Experience({ dict }: { dict: Dictionary }) {
  const { experience } = dict;
  return (
    <section id="experience">
      <div className="wrap">
        <div className="section-head">
          <div className="section-label">{experience.label}</div>
          <h2>{experience.title}</h2>
        </div>

        <div className="timeline">
          {experience.items.map((item) => (
            <div className="tl-item" key={item.title}>
              <div className="tl-date">
                {item.date}
                {item.current && <span className="tl-badge">{experience.currentLabel}</span>}
              </div>
              <h3>{item.title}</h3>
              <div className="tl-org">{item.org}</div>
              <p>{item.body}</p>
              {item.skills && item.skills.length > 0 && (
                <div className="tl-skills">
                  {item.skills.map((skill) => (
                    <span className="tl-skill" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
