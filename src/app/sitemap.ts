import type { MetadataRoute } from 'next';
import { LANG_CODES, REDIRECT_LANG, pathForLang, ORIGIN, hreflangLanguages } from '@/lib/languages';
import { dictionaries } from '@/lib/dictionaries';
import { slugForPost } from '@/lib/blog';
import { PROJECT_SLUGS } from '@/lib/projects';

export const dynamic = 'force-static';

const buildDate = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Home (one per locale)
  const homeLangs = hreflangLanguages(() => '');
  LANG_CODES.forEach((code) => {
    entries.push({
      url: `${ORIGIN}${pathForLang(code)}`,
      lastModified: buildDate,
      changeFrequency: 'monthly',
      priority: code === REDIRECT_LANG ? 1 : 0.8,
      alternates: { languages: homeLangs },
    });
  });

  // Blog index
  const blogLangs = hreflangLanguages(() => 'blog/');
  LANG_CODES.forEach((code) => {
    entries.push({
      url: `${ORIGIN}${pathForLang(code)}blog/`,
      lastModified: buildDate,
      changeFrequency: 'monthly',
      priority: 0.6,
      alternates: { languages: blogLangs },
    });
  });

  // Blog posts (only locales where the post has content)
  const postCount = dictionaries[REDIRECT_LANG].writing.posts.length;
  for (let i = 0; i < postCount; i += 1) {
    const postLangs = hreflangLanguages((code) => `blog/${slugForPost(code, i)}/`);
    LANG_CODES.filter((code) => dictionaries[code].writing.posts[i]?.content).forEach((code) => {
      entries.push({
        url: `${ORIGIN}${pathForLang(code)}blog/${slugForPost(code, i)}/`,
        lastModified: buildDate,
        changeFrequency: 'monthly',
        priority: 0.6,
        alternates: { languages: postLangs },
      });
    });
  }

  // Project detail pages
  PROJECT_SLUGS.forEach((slug) => {
    const projLangs = hreflangLanguages(() => `projects/${slug}/`);
    LANG_CODES.forEach((code) => {
      entries.push({
        url: `${ORIGIN}${pathForLang(code)}projects/${slug}/`,
        lastModified: buildDate,
        changeFrequency: 'monthly',
        priority: 0.5,
        alternates: { languages: projLangs },
      });
    });
  });

  // Publication page
  const pubLangs = hreflangLanguages(() => 'publications/demne/');
  LANG_CODES.forEach((code) => {
    entries.push({
      url: `${ORIGIN}${pathForLang(code)}publications/demne/`,
      lastModified: buildDate,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: { languages: pubLangs },
    });
  });

  return entries;
}
