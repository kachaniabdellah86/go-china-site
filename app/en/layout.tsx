import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div lang="en" className="min-h-screen overflow-x-clip">
      <Navbar lang="en" />
      <main className="gradient-bg">{children}</main>
      <Footer lang="en" />
    </div>
  );
}
