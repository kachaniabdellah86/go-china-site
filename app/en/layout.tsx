import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <Navbar lang="en" />
      <main className="gradient-bg">{children}</main>
      <Footer lang="en" />
    </div>
  );
}