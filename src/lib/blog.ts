import type { Lang } from './languages';

/**
 * Slugs for each post in dict.writing.posts, by index. Only `fr` has hand-translated
 * slugs (matching the brief); every other locale reuses the English slugs rather than
 * inventing machine-translated URLs no native speaker has reviewed.
 */
type BlogSlugs = string[];

const DEFAULT_SLUGS: BlogSlugs = ['french-clinical-ner', 'staged-extraction-vs-single-model'];

const SLUG_OVERRIDES: Partial<Record<Lang, BlogSlugs>> = {
  fr: ['ner-clinique-francais', 'extraction-par-etapes-vs-modele-unique'],
};

export function slugsForLang(lang: Lang): BlogSlugs {
  return SLUG_OVERRIDES[lang] ?? DEFAULT_SLUGS;
}

export function slugForPost(lang: Lang, postIndex: number): string {
  return slugsForLang(lang)[postIndex];
}

export function postIndexForSlug(lang: Lang, slug: string): number {
  return slugsForLang(lang).indexOf(slug);
}
