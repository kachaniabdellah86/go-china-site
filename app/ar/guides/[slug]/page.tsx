import { notFound } from "next/navigation";
import GuidePage, { guideSlugs, isGuideSlug } from "@/components/GuidePage";

export function generateStaticParams() {
  return guideSlugs.map((slug) => ({ slug }));
}

export default async function GuideARPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!isGuideSlug(slug)) {
    notFound();
  }

  return <GuidePage lang="ar" slug={slug} />;
}
