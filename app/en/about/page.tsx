import AboutPage from "@/components/AboutPage";
import { getStaticPageMetadata } from "@/lib/seo";

export const metadata = getStaticPageMetadata("en", "about", "/about");

export default function AboutEN() {
  return <AboutPage lang="en" />;
}
