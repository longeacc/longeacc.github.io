import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { dictionaries } from '@/lib/dictionaries';
import { LANG_CODES, isLang, pathForLang, hreflangLanguages } from '@/lib/languages';
import { postIndexForSlug, slugForPost, slugsForLang, tagsForPost } from '@/lib/blog';

export function generateStaticParams() {
  return LANG_CODES.flatMap((locale) =>
    slugsForLang(locale).map((slug) => ({ locale, slug })),
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
  const postIndex = postIndexForSlug(locale, slug);
  const post = dict.writing.posts[postIndex];
  if (!post) return {};
  const url = `https://clement-longeac.com${pathForLang(locale)}blog/${slug}/`;
  const title = `${post.title} — Clément Longeac`;
  return {
    title,
    description: post.body,
    alternates: {
      canonical: url,
      languages: hreflangLanguages((code) => `blog/${slugForPost(code, postIndex)}/`),
    },
    openGraph: {
      title,
      description: post.body,
      url,
      siteName: 'Clément Longeac',
      locale: dict.htmlLang,
      type: 'article',
      images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: post.body,
      images: ['/images/og-image.png'],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLang(locale)) notFound();
  const dict = dictionaries[locale];
  const postIndex = postIndexForSlug(locale, slug);
  const post = dict.writing.posts[postIndex];
  if (!post) notFound();
  const home = pathForLang(locale);

  return (
    <>
      <Nav dict={dict} lang={locale} />
      <article className="blog-article">
        <div className="wrap blog-article-wrap">
          <Link href={`${home}blog/`} className="blog-back-link">
            ← {dict.writing.title}
          </Link>
          <div className="blog-article-meta">{post.status}</div>
          <h1 className="blog-article-title">{post.title}</h1>
          <div className="post-tags">
            {tagsForPost(postIndex).map((tag) => (
              <span className="post-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <hr className="blog-article-rule" />
          {post.content ? (
            <div className="prose" dangerouslySetInnerHTML={{ __html: post.content }} />
          ) : (
            <div className="prose">
              <p>{post.body}</p>
              <p className="blog-article-placeholder">
                Full article coming soon — check back after publication.
              </p>
            </div>
          )}
        </div>
      </article>
      <Footer dict={dict} />
    </>
  );
}
