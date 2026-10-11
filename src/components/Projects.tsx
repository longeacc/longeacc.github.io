'use client';

import { useState, useEffect } from 'react';
import NodeField from './NodeField';
import type { Dictionary, Project } from '@/lib/dictionaries';

// one distinct, muted accent per project — gives each card its own hover identity
const ACCENTS = ['#36457C', '#2E6E74', '#6B4F9E', '#4A5468', '#9A6B3A', '#3C7A57'];

export default function Projects({ dict }: { dict: Dictionary }) {
  const { projects, research } = dict;
  const [open, setOpen] = useState<Project | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

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
            <div
              className="project-card"
              key={project.title}
              role="button"
              tabIndex={0}
              onClick={() => setOpen(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setOpen(project);
                }
              }}
            >
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
            </div>
          ))}
        </div>
      </div>

      {open && (
        <div
          className="pm-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={open.title}
          onClick={() => setOpen(null)}
        >
          <div className="pm-dialog" onClick={(e) => e.stopPropagation()}>
            <button className="pm-close" onClick={() => setOpen(null)} aria-label="Fermer">
              ×
            </button>
            {open.image && (
              <div className="pm-cover">
                <img src={open.image} alt={open.title} />
              </div>
            )}
            <div className="pm-body">
              <div className="pm-meta">{open.date}</div>
              <h3>{open.title}</h3>
              {(open.longBody ?? open.description).split('\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              <div className="tag-row">
                {open.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="link-row" style={{ marginTop: 18 }}>
                <a href={open.url} target="_blank" rel="noopener">
                  {research.viewRepo} →
                </a>
                {open.demo && (
                  <a href={open.demo} target="_blank" rel="noopener">
                    Demo →
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
