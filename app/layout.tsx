import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YALLA CHINA | Study in China",
  description:
    "YALLA CHINA helps students and families study in China with clear guidance, structured packages, visa support, and safer follow-up from first consultation to arrival.",
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
