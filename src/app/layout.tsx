import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://clement-longeac.com/'),
  title: 'Clément Longeac — AI Research, Clinical NLP & Biomedical AI',
  description:
    'Recherche en NLP clinique et IA biomédicale. Ingénieur ESIEE Paris, spécialisation Data Science & IA, programme Tremplin Recherche. Vers un doctorat en IA appliquée à la recherche biomédicale.',
  alternates: {
    canonical: 'https://clement-longeac.com/',
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Clément Longeac',
  url: 'https://clement-longeac.com/',
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        <div className="grid-texture" />
        {children}
      </body>
    </html>
  );
}
