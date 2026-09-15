import type { MetadataRoute } from 'next';
import { LANG_CODES, pathForLang } from '@/lib/languages';

export const dynamic = 'force-static';

const buildDate = new Date();

const languages: Record<string, string> = {};
LANG_CODES.forEach((code) => {
  languages[code] = `https://clement-longeac.com${pathForLang(code)}`;
});

export default function sitemap(): MetadataRoute.Sitemap {
  return LANG_CODES.map((code, i) => ({
    url: `https://clement-longeac.com${pathForLang(code)}`,
    lastModified: buildDate,
    changeFrequency: 'monthly' as const,
    priority: i === 0 ? 1 : 0.8,
    alternates: { languages },
  }));
}
