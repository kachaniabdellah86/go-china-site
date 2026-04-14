"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EntranceAnimation from "@/components/EntranceAnimation";

type Props = {
  children: React.ReactNode;
  lang: "fr" | "en" | "ar";
};

export default function LocaleLayout({ children, lang }: Props) {
  const [showEntrance, setShowEntrance] = useState(false);
  const [mainVisible, setMainVisible] = useState(false);

  useEffect(() => {
    // Check if user has already seen the entrance animation
    const hasSeenEntrance = sessionStorage.getItem("entranceSeen");
    if (hasSeenEntrance) {
      setMainVisible(true);
    } else {
      setShowEntrance(true);
    }
  }, []);

  const handleEnter = () => {
    sessionStorage.setItem("entranceSeen", "true");
    setShowEntrance(false);
    setMainVisible(true);
  };

  return (
    <div lang={lang} className="min-h-screen overflow-x-clip" dir={lang === "ar" ? "rtl" : "ltr"}>
      {showEntrance && <EntranceAnimation lang={lang} onEnter={handleEnter} />}
      
      {mainVisible && (
        <div className="animate-fade-in">
          <Navbar lang={lang} />
          <main className="gradient-bg">{children}</main>
          <Footer lang={lang} />
        </div>
      )}
    </div>
  );
}
