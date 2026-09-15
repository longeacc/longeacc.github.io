import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const buildDate = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://clement-longeac.com/',
      lastModified: buildDate,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          fr: 'https://clement-longeac.com/',
          en: 'https://clement-longeac.com/en/',
        },
      },
    },
    {
      url: 'https://clement-longeac.com/en/',
      lastModified: buildDate,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          fr: 'https://clement-longeac.com/',
          en: 'https://clement-longeac.com/en/',
        },
      },
    },
  ];
}
