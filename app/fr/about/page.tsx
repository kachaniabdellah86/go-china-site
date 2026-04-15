import AboutPage from "@/components/AboutPage";
import { getStaticPageMetadata } from "@/lib/seo";

export const metadata = getStaticPageMetadata("fr", "about", "/about");

export default function AboutFR() {
  return <AboutPage lang="fr" />;
}
