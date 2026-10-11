// Stable, language-independent slugs for project detail pages.
// Order must match dict.projects.items across every language.
export const PROJECT_SLUGS = [
  'neurostep',
  'air-quality-dashboard',
  'face-recognition',
  'tba-text-adventure',
  'marmiton-data-intelligence',
  'debian-rocm-ci',
] as const;

export function slugForProject(i: number): string {
  return PROJECT_SLUGS[i];
}

export function projectIndexForSlug(slug: string): number {
  return PROJECT_SLUGS.indexOf(slug as (typeof PROJECT_SLUGS)[number]);
}
