import ApplyPage from "@/components/ApplyPage";
import { getStaticPageMetadata } from "@/lib/seo";

export const metadata = getStaticPageMetadata("fr", "apply", "/apply");

export default function ApplyFR() {
  return <ApplyPage lang="fr" />;
}
