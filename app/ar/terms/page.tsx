import LegalPage from "@/components/LegalPage";
import { getStaticPageMetadata } from "@/lib/seo";

export const metadata = getStaticPageMetadata("ar", "terms", "/terms");

export default function TermsAR() {
  return <LegalPage lang="ar" type="terms" />;
}
