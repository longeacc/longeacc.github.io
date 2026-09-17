import type { Metadata } from 'next';
import PageContent from '@/components/PageContent';
import { dictionaries } from '@/lib/dictionaries';
import { LANG_CODES, pathForLang } from '@/lib/languages';

const dict = dictionaries.fr;
const url = `https://clement-longeac.com${pathForLang('fr')}`;

const languages: Record<string, string> = {};
LANG_CODES.forEach((code) => {
  languages[code] = `https://clement-longeac.com${pathForLang(code)}`;
});

export const metadata: Metadata = {
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
    locale: 'fr_FR',
    type: 'profile',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: dict.meta.title }],
  },
  twitter: {
    card: 'summary_large_image',
    title: dict.meta.title,
    description: dict.meta.description,
    images: ['/images/og-image.png'],
  },
};

export default function Home() {
  return <PageContent lang="fr" />;
}
