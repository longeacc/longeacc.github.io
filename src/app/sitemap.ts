import type { MetadataRoute } from 'next';
import { LANG_CODES, REDIRECT_LANG, pathForLang } from '@/lib/languages';

export const dynamic = 'force-static';

const buildDate = new Date();

const languages: Record<string, string> = {
  'x-default': `https://clement-longeac.com${pathForLang(REDIRECT_LANG)}`,
};
LANG_CODES.forEach((code) => {
  languages[code] = `https://clement-longeac.com${pathForLang(code)}`;
});

export default function sitemap(): MetadataRoute.Sitemap {
  return LANG_CODES.map((code) => ({
    url: `https://clement-longeac.com${pathForLang(code)}`,
    lastModified: buildDate,
    changeFrequency: 'monthly' as const,
    priority: code === REDIRECT_LANG ? 1 : 0.8,
    alternates: { languages },
  }));
}
