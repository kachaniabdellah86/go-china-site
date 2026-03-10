import Container from "./Container";

type Props = {
  lang?: "fr" | "en" | "ar";
};

const content = {
  fr: {
    title: "YALLA CHINA",
    desc: "Accompagnement pour les études en Chine : orientation, admission, visa étudiant, et suivi.",
    cta: "WhatsApp principal",
    secondary: "Deuxième numéro",
    rights: "Tous droits réservés.",
  },
  en: {
    title: "YALLA CHINA",
    desc: "Support for studying in China: orientation, admission, student visa, and follow-up.",
    cta: "Main WhatsApp",
    secondary: "Second number",
    rights: "All rights reserved.",
  },
  ar: {
    title: "YALLA CHINA",
    desc: "مرافقة للدراسة في الصين: التوجيه، القبول، فيزا الدراسة، والمتابعة.",
    cta: "واتساب الرئيسي",
    secondary: "الرقم الثاني",
    rights: "جميع الحقوق محفوظة.",
  },
};

export default function Footer({ lang = "fr" }: Props) {
  const t = content[lang];

  return (
    <footer className="border-t border-zinc-100 bg-white/80 py-10">
      <Container>
        <div className={`grid gap-6 text-sm text-zinc-600 md:grid-cols-3 ${lang === "ar" ? "text-right" : ""}`}>
          <div className="space-y-3">
            <p className="text-base font-extrabold text-zinc-900">
              YALLA <span className="text-[#8B0000]">CHINA</span>
              <span className="text-[#EDB80B]">.</span>
            </p>
            <p>{t.desc}</p>
          </div>

          <div className="space-y-2">
            <p className="font-medium text-zinc-800">{t.cta}</p>
            <a
              href="https://wa.me/212638335452"
              target="_blank"
              rel="noreferrer"
              className="block hover:text-[#8B0000]"
            >
              +212 638-335452
            </a>

            <p className="pt-2 font-medium text-zinc-800">{t.secondary}</p>
            <a
              href="https://wa.me/212707298029"
              target="_blank"
              rel="noreferrer"
              className="block hover:text-[#8B0000]"
            >
              +212 707-298029
            </a>
          </div>

          <div className="space-y-2">
            <p className="font-medium text-zinc-800">Email</p>
            <p>contact@yallachina.com</p>
            <p className="pt-4 text-zinc-400">
              © {new Date().getFullYear()} YALLA CHINA. {t.rights}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}