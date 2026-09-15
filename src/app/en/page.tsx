import type { Metadata } from 'next';
import PageContent from '@/components/PageContent';
import { dictionaries } from '@/lib/dictionaries';

const dict = dictionaries.en;

export const metadata: Metadata = {
  title: dict.meta.title,
  description: dict.meta.description,
  alternates: {
    canonical: 'https://clement-longeac.com/en/',
    languages: {
      fr: 'https://clement-longeac.com/',
      en: 'https://clement-longeac.com/en/',
    },
  },
  openGraph: {
    title: dict.meta.title,
    description: dict.meta.description,
    url: 'https://clement-longeac.com/en/',
    siteName: 'Clément Longeac',
    locale: 'en_US',
    type: 'profile',
  },
  twitter: {
    card: 'summary',
    title: dict.meta.title,
    description: dict.meta.description,
  },
};

export default function HomeEn() {
  return <PageContent lang="en" />;
}
