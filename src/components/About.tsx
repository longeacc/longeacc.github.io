import type { Dictionary } from '@/lib/dictionaries';

export default function About({ dict }: { dict: Dictionary }) {
  const { about } = dict;
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head">
          <div className="section-label">{about.label}</div>
          <h2>{about.title}</h2>
        </div>
        <div className="about-grid">
          <div>
            <p>{about.p1}</p>
            <p>{about.p2}</p>
            <p>{about.p3}</p>
            <p className="vision-line">{about.visionLine}</p>
          </div>
          <div>
            <div className="profile-photo">
              <img src="/images/profile.jpg" alt="Clément Longeac" width={400} height={400} />
            </div>
            <dl className="fact-list">
              {about.facts.map((fact) => (
                <div className="fact-row" key={fact.dt}>
                  <dt>{fact.dt}</dt>
                  <dd>{fact.dd}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
