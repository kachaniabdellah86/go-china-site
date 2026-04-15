import LegalPage from "@/components/LegalPage";
import { getStaticPageMetadata } from "@/lib/seo";

export const metadata = getStaticPageMetadata("en", "terms", "/terms");

export default function TermsEN() {
  return <LegalPage lang="en" type="terms" />;
}
