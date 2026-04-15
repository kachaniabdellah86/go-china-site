import AboutPage from "@/components/AboutPage";
import { getStaticPageMetadata } from "@/lib/seo";

export const metadata = getStaticPageMetadata("ar", "about", "/about");

export default function AboutAR() {
  return <AboutPage lang="ar" />;
}
