import HomeLanding from "@/components/HomeLanding";
import { getStaticPageMetadata } from "@/lib/seo";

export const metadata = getStaticPageMetadata("ar", "home", "");

export default function HomeAR() {
  return <HomeLanding lang="ar" />;
}
