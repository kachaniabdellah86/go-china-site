import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GuidePage from "@/components/GuidePage";
import { guideSlugs, isGuideSlug } from "@/lib/guides";
import { getGuideMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return guideSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  if (!isGuideSlug(slug)) {
    return {};
  }

  return getGuideMetadata("fr", slug);
}

export default async function GuideFRPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!isGuideSlug(slug)) {
    notFound();
  }

  return <GuidePage lang="fr" slug={slug} />;
}
