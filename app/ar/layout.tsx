import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div lang="ar" dir="rtl" className="min-h-screen overflow-x-clip">
      <Navbar lang="ar" />
      <main className="gradient-bg">{children}</main>
      <Footer lang="ar" />
    </div>
  );
}
