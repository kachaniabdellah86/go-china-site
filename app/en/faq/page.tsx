import FaqPage from "@/components/FaqPage";
import { getStaticPageMetadata } from "@/lib/seo";

export const metadata = getStaticPageMetadata("en", "faq", "/faq");

export default function FaqEN() {
  return <FaqPage lang="en" />;
}
