import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { dictionaries } from '@/lib/dictionaries';
import { LANG_CODES, isLang, pathForLang } from '@/lib/languages';
import { postIndexForSlug, slugsForLang } from '@/lib/blog';

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
  return {
    title: `${post.title} — Clément Longeac`,
    description: post.body,
    alternates: { canonical: url },
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
        <div className="wrap">
          <Link href={`${home}blog/`} className="blog-back-link">
            ← {dict.writing.title}
          </Link>
          <div className="writing-status">{post.status}</div>
          <h1>{post.title}</h1>
          <p className="blog-article-lede">{post.body}</p>
          <div className="blog-article-placeholder">
            <p>Full article coming soon — check back after publication.</p>
          </div>
        </div>
      </article>
      <Footer dict={dict} />
    </>
  );
}
