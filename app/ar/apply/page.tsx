import ApplyPage from "@/components/ApplyPage";
import { getStaticPageMetadata } from "@/lib/seo";

export const metadata = getStaticPageMetadata("ar", "apply", "/apply");

export default function ApplyAR() {
  return <ApplyPage lang="ar" />;
}
