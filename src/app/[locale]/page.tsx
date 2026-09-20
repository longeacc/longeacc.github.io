import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageContent from '@/components/PageContent';
import { dictionaries } from '@/lib/dictionaries';
import { LANG_CODES, REDIRECT_LANG, isLang, pathForLang } from '@/lib/languages';

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
  const url = `https://clement-longeac.com${pathForLang(locale)}`;
  const languages: Record<string, string> = {
    'x-default': `https://clement-longeac.com${pathForLang(REDIRECT_LANG)}`,
  };
  LANG_CODES.forEach((code) => {
    languages[code] = `https://clement-longeac.com${pathForLang(code)}`;
  });

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url,
      siteName: 'Clément Longeac',
      locale: dict.htmlLang,
      type: 'profile',
      images: [
        {
          url: '/images/og-image.png',
          width: 1200,
          height: 630,
          alt: `${dict.meta.title} — ${dict.hero.ctaResearch}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.title,
      description: dict.meta.description,
      images: ['/images/og-image.png'],
    },
  };
}

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLang(locale)) {
    notFound();
  }
  return <PageContent lang={locale} />;
}
