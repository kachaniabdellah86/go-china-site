import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YALLA CHINA | Study in China",
  description:
    "YALLA CHINA helps students and families build a clear, guided study project in China.",
  icons: {
    icon: "/yalla-china-mark.svg",
    shortcut: "/yalla-china-mark.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-[#faf8f5] text-zinc-900 antialiased">
        {children}
      </body>
    </html>
  );
}
