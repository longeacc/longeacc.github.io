import type { Dictionary } from '@/lib/dictionaries';

export default function Projects({ dict }: { dict: Dictionary }) {
  const { projects, research } = dict;
  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-head">
          <div className="section-label">{projects.label}</div>
          <h2>{projects.title}</h2>
          <p>{projects.subtitle}</p>
        </div>

        <div className="projects-grid">
          {projects.items.map((project) => (
            <div className="project-card" key={project.url}>
              <div className="project-meta">{project.date}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="link-row">
                <a href={project.url} target="_blank" rel="noopener">
                  {research.viewRepo} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
