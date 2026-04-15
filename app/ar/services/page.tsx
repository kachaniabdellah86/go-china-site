import ServicesPage from "@/components/ServicesPage";
import { getStaticPageMetadata } from "@/lib/seo";

export const metadata = getStaticPageMetadata("ar", "services", "/services");

export default function ServicesAR() {
  return <ServicesPage lang="ar" />;
}
