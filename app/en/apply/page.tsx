import ApplyPage from "@/components/ApplyPage";
import { getStaticPageMetadata } from "@/lib/seo";

export const metadata = getStaticPageMetadata("en", "apply", "/apply");

export default function ApplyEN() {
  return <ApplyPage lang="en" />;
}
