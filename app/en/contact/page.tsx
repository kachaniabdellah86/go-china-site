import ContactPage from "@/components/ContactPage";
import { getStaticPageMetadata } from "@/lib/seo";

export const metadata = getStaticPageMetadata("en", "contact", "/contact");

export default function ContactEN() {
  return <ContactPage lang="en" />;
}
