import LegalPage from "@/components/LegalPage";
import { getStaticPageMetadata } from "@/lib/seo";

export const metadata = getStaticPageMetadata("fr", "terms", "/terms");

export default function TermsFR() {
  return <LegalPage lang="fr" type="terms" />;
}
