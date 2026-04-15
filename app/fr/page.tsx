import HomeLanding from "@/components/HomeLanding";
import { getStaticPageMetadata } from "@/lib/seo";

export const metadata = getStaticPageMetadata("fr", "home", "");

export default function HomeFR() {
  return <HomeLanding lang="fr" />;
}
