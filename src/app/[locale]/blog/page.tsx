import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { dictionaries } from '@/lib/dictionaries';
import { LANG_CODES, isLang, pathForLang } from '@/lib/languages';
import { slugForPost } from '@/lib/blog';

export function generateStaticParams() {
  return LANG_CODES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLang(locale)) return {};
  const dict = dictionaries[locale];
  const url = `https://clement-longeac.com${pathForLang(locale)}blog/`;
  return {
    title: `${dict.writing.title} — Clément Longeac`,
    description: dict.writing.subtitle,
    alternates: { canonical: url },
  };
}

export default async function BlogIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLang(locale)) notFound();
  const dict = dictionaries[locale];
  const home = pathForLang(locale);

  return (
    <>
      <Nav dict={dict} lang={locale} />
      <section className="blog-index">
        <div className="wrap">
          <div className="section-head">
            <div className="section-label">{dict.writing.label}</div>
            <h2>{dict.writing.title}</h2>
            <p>{dict.writing.subtitle}</p>
          </div>
          <div className="writing-grid">
            {dict.writing.posts.map((post, i) => (
              <Link
                key={post.title}
                href={`${home}blog/${slugForPost(locale, i)}/`}
                className="writing-card writing-card-link"
              >
                <div className="writing-status">{post.status}</div>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer dict={dict} />
    </>
  );
}
