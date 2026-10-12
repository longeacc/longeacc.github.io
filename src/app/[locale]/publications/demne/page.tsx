import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import DemneResults from '@/components/DemneResults';
import { dictionaries } from '@/lib/dictionaries';
import { LANG_CODES, isLang, pathForLang, hreflangLanguages } from '@/lib/languages';

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
  const url = `https://clement-longeac.com${pathForLang(locale)}publications/demne/`;
  const title = `${dict.publications.entryTitle} — Clément Longeac`;
  return {
    title,
    description: dict.publications.description,
    alternates: {
      canonical: url,
      languages: hreflangLanguages(() => 'publications/demne/'),
    },
    openGraph: {
      title,
      description: dict.publications.description,
      url,
      siteName: 'Clément Longeac',
      locale: dict.htmlLang,
      type: 'article',
      images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: dict.publications.entryTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: dict.publications.description,
      images: ['/images/og-image.png'],
    },
  };
}

export default async function DemnePublication({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLang(locale)) notFound();
  const dict = dictionaries[locale];
  const { publications, research } = dict;
  const home = pathForLang(locale);
  const fr = dict.htmlLang.startsWith('fr');

  return (
    <>
      <Nav dict={dict} lang={locale} />
      <article className="blog-article">
        <div className="wrap blog-article-wrap">
          <Link href={`${home}#publications`} className="blog-back-link">
            ← {publications.title}
          </Link>
          <div className="blog-article-meta">
            {publications.journal} — {publications.status}
          </div>
          <h1 className="blog-article-title">{publications.entryTitle}</h1>
          <div className="pub-authors" style={{ marginBottom: 18 }}>
            {publications.authors}
          </div>
          <hr className="blog-article-rule" />
          <div className="prose">
            <p>{publications.description}</p>
          </div>

          <DemneResults dict={dict} />

          <div className="link-row" style={{ marginTop: 36 }}>
            <a
              href="https://github.com/longeacc/DEMNE-Determination-of-Extraction-Methode-for-Named-Entity"
              target="_blank"
              rel="noopener"
            >
              {research.viewRepo} →
            </a>
            <Link href={`${home}#publications`}>
              {fr ? '← Retour' : '← Back'}
            </Link>
          </div>
        </div>
      </article>
      <Footer dict={dict} />
    </>
  );
}
