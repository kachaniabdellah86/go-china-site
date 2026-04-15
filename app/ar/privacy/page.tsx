import LegalPage from "@/components/LegalPage";
import { getStaticPageMetadata } from "@/lib/seo";

export const metadata = getStaticPageMetadata("ar", "privacy", "/privacy");

export default function PrivacyAR() {
  return <LegalPage lang="ar" type="privacy" />;
}
