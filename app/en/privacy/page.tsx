import LegalPage from "@/components/LegalPage";
import { getStaticPageMetadata } from "@/lib/seo";

export const metadata = getStaticPageMetadata("en", "privacy", "/privacy");

export default function PrivacyEN() {
  return <LegalPage lang="en" type="privacy" />;
}
