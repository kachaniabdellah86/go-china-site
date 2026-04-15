import HomeLanding from "@/components/HomeLanding";
import { getStaticPageMetadata } from "@/lib/seo";

export const metadata = getStaticPageMetadata("en", "home", "");

export default function HomeEN() {
  return <HomeLanding lang="en" />;
}
