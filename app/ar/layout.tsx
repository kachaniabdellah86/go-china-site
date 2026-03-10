import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div dir="rtl" className="min-h-screen">
      <Navbar lang="ar" />
      <main className="gradient-bg">{children}</main>
      <Footer lang="ar" />
    </div>
  );
}