import FaqPage from "@/components/FaqPage";
import { getStaticPageMetadata } from "@/lib/seo";

export const metadata = getStaticPageMetadata("ar", "faq", "/faq");

export default function FaqAR() {
  return <FaqPage lang="ar" />;
}
