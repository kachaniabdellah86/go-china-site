export const guideSlugs = [
  "personal-experience",
  "study-steps",
  "why-china",
  "how-to-study",
] as const;

export type GuideSlug = (typeof guideSlugs)[number];

export function isGuideSlug(value: string): value is GuideSlug {
  return guideSlugs.includes(value as GuideSlug);
}
