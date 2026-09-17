import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://clement-longeac.com/'),
  title: 'Clément Longeac — AI Research, Clinical NLP & Biomedical AI',
  description:
    'Recherche en NLP clinique et IA biomédicale. Ingénieur ESIEE Paris, spécialisation Data Science & IA, programme Tremplin Recherche. Vers un doctorat en IA appliquée à la recherche biomédicale.',
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Clément Longeac',
  url: 'https://clement-longeac.com/',
  email: 'mailto:contact@clement-longeac.com',
  jobTitle: 'AI Research Student — Clinical NLP & Biomedical AI',
  affiliation: {
    '@type': 'CollegeOrUniversity',
    name: 'ESIEE Paris',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'ESIEE Paris',
  },
  knowsAbout: ['Clinical NLP', 'Biomedical AI', 'Named Entity Recognition', 'Machine Learning'],
  sameAs: ['https://github.com/longeacc', 'https://www.linkedin.com/in/clement-longeac'],
};

const scholarlyArticleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ScholarlyArticle',
  headline: 'DEMNE: Determination of Extraction Method for Named Entity',
  author: {
    '@type': 'Person',
    name: 'Clément Longeac',
  },
  publisher: {
    '@type': 'Organization',
    name: 'AIM — Artificial Intelligence in Medicine',
  },
  creativeWorkStatus: 'In preparation',
  about: ['Clinical NLP', 'Named Entity Recognition', 'French oncology'],
};

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Clément Longeac" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* eslint-disable-next-line react/no-danger */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(scholarlyArticleJsonLd) }}
        />
      </head>
      <body>
        <div className="grid-texture" />
        {children}
      </body>
    </html>
  );
}
