import FaqPage from "@/components/FaqPage";
import { getStaticPageMetadata } from "@/lib/seo";

export const metadata = getStaticPageMetadata("fr", "faq", "/faq");

export default function FaqFR() {
  return <FaqPage lang="fr" />;
}
