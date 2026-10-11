import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { dictionaries } from '@/lib/dictionaries';
import { LANG_CODES, isLang, pathForLang } from '@/lib/languages';
import { PROJECT_SLUGS, projectIndexForSlug } from '@/lib/projects';

export function generateStaticParams() {
  return LANG_CODES.flatMap((locale) =>
    PROJECT_SLUGS.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLang(locale)) return {};
  const dict = dictionaries[locale];
  const project = dict.projects.items[projectIndexForSlug(slug)];
  if (!project) return {};
  const url = `https://clement-longeac.com${pathForLang(locale)}projects/${slug}/`;
  return {
    title: `${project.title} — Clément Longeac`,
    description: project.description,
    alternates: { canonical: url },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLang(locale)) notFound();
  const dict = dictionaries[locale];
  const { projects, research } = dict;
  const index = projectIndexForSlug(slug);
  const project = projects.items[index];
  if (!project) notFound();
  const home = pathForLang(locale);
  const fr = dict.htmlLang.startsWith('fr');

  return (
    <>
      <Nav dict={dict} lang={locale} />
      <article className="blog-article">
        <div className="wrap blog-article-wrap">
          <Link href={`${home}#projects`} className="blog-back-link">
            ← {projects.title}
          </Link>

          {project.image && (
            <div className="project-detail-cover">
              <img src={project.image} alt={project.title} />
            </div>
          )}

          <div className="blog-article-meta">{project.date}</div>
          <h1 className="blog-article-title">{project.title}</h1>
          <div className="post-tags">
            {project.tags.map((tag) => (
              <span className="post-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <hr className="blog-article-rule" />
          <div className="prose">
            {(project.longBody ?? project.description).split('\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="link-row" style={{ marginTop: 32 }}>
            <a href={project.url} target="_blank" rel="noopener">
              {research.viewRepo} →
            </a>
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener">
                Demo →
              </a>
            )}
            <Link href={`${home}#projects`}>{fr ? '← Retour' : '← Back'}</Link>
          </div>
        </div>
      </article>
      <Footer dict={dict} />
    </>
  );
}
