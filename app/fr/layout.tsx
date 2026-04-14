import type { ReactNode } from "react";
import LocaleLayout from "@/components/LocaleLayout";

export default function Layout({ children }: { children: ReactNode }) {
  return <LocaleLayout lang="fr">{children}</LocaleLayout>;
}
