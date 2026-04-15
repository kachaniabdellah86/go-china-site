import ContactPage from "@/components/ContactPage";
import { getStaticPageMetadata } from "@/lib/seo";

export const metadata = getStaticPageMetadata("ar", "contact", "/contact");

export default function ContactAR() {
  return <ContactPage lang="ar" />;
}
