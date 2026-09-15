import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageContent from '@/components/PageContent';
import { dictionaries } from '@/lib/dictionaries';
import { LANG_CODES, DEFAULT_LANG, isLang, pathForLang } from '@/lib/languages';

export function generateStaticParams() {
  return LANG_CODES.filter((code) => code !== DEFAULT_LANG).map((locale) => ({ locale }));
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
  const languages: Record<string, string> = {};
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
    },
    twitter: {
      card: 'summary',
      title: dict.meta.title,
      description: dict.meta.description,
    },
  };
}

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLang(locale) || locale === DEFAULT_LANG) {
    notFound();
  }
  return <PageContent lang={locale} />;
}
