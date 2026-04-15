import ServicesPage from "@/components/ServicesPage";
import { getStaticPageMetadata } from "@/lib/seo";

export const metadata = getStaticPageMetadata("en", "services", "/services");

export default function ServicesEN() {
  return <ServicesPage lang="en" />;
}
