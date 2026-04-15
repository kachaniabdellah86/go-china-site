import LegalPage from "@/components/LegalPage";
import { getStaticPageMetadata } from "@/lib/seo";

export const metadata = getStaticPageMetadata("fr", "privacy", "/privacy");

export default function PrivacyFR() {
  return <LegalPage lang="fr" type="privacy" />;
}
