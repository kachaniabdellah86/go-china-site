import ContactPage from "@/components/ContactPage";
import { getStaticPageMetadata } from "@/lib/seo";

export const metadata = getStaticPageMetadata("fr", "contact", "/contact");

export default function ContactFR() {
  return <ContactPage lang="fr" />;
}
