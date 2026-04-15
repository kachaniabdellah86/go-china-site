import ServicesPage from "@/components/ServicesPage";
import { getStaticPageMetadata } from "@/lib/seo";

export const metadata = getStaticPageMetadata("fr", "services", "/services");

export default function ServicesFR() {
  return <ServicesPage lang="fr" />;
}
