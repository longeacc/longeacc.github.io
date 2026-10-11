import Link from 'next/link';
import NodeField from './NodeField';
import { pathForLang } from '@/lib/languages';
import { slugForProject } from '@/lib/projects';
import type { Dictionary, Lang } from '@/lib/dictionaries';

// one distinct, muted accent per project — gives each card its own hover identity
const ACCENTS = ['#36457C', '#2E6E74', '#6B4F9E', '#4A5468', '#9A6B3A', '#3C7A57'];

export default function Projects({ dict, lang }: { dict: Dictionary; lang: Lang }) {
  const { projects } = dict;
  const home = pathForLang(lang);
  const moreLabel = projects.more ?? 'En savoir plus →';

  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-head">
          <div className="section-label">{projects.label}</div>
          <h2>{projects.title}</h2>
          <p>{projects.subtitle}</p>
        </div>

        <div className="projects-grid">
          {projects.items.map((project, i) => (
            <Link className="project-card" key={project.title} href={`${home}projects/${slugForProject(i)}/`}>
              {project.image && (
                <div className="project-cover">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <NodeField
                    hoverParent
                    color={ACCENTS[i % ACCENTS.length]}
                    density={7000}
                    className="cover-field"
                  />
                </div>
              )}
              <div className="project-body">
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
                <div className="project-more">{moreLabel}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
