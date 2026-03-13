import Container from "./Container";

type Props = {
  lang?: "fr" | "en" | "ar";
};

const content = {
  fr: {
    desc: "YALLA CHINA accompagne les étudiants et leurs parents pour concrétiser un projet d’études en Chine avec plus de clarté, de confiance et de suivi.",
    linksTitle: "Contact",
    servicesTitle: "Accompagnement",
    services: [
      "Orientation académique",
      "Admission universitaire",
      "Visa étudiant",
      "Suivi personnalisé",
    ],
    rights: "Tous droits réservés.",
  },
  en: {
    desc: "YALLA CHINA supports students and parents to make their study project in China clearer, safer, and easier to achieve.",
    linksTitle: "Contact",
    servicesTitle: "Support",
    services: [
      "Academic orientation",
      "University admission",
      "Student visa",
      "Personal follow-up",
    ],
    rights: "All rights reserved.",
  },
  ar: {
    desc: "YALLA CHINA ترافق الطلبة وآباءهم لتحقيق مشروع الدراسة في الصين بشكل أوضح وأكثر ثقة واطمئناناً.",
    linksTitle: "التواصل",
    servicesTitle: "المرافقة",
    services: [
      "التوجيه الأكاديمي",
      "القبول الجامعي",
      "فيزا الدراسة",
      "المتابعة الشخصية",
    ],
    rights: "جميع الحقوق محفوظة.",
  },
};

export default function Footer({ lang = "fr" }: Props) {
  const t = content[lang];
  const isArabic = lang === "ar";

  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <Container>
        <div className={`grid gap-10 py-12 md:grid-cols-3 ${isArabic ? "text-right" : ""}`}>
          <div className="space-y-4">
            <p className="text-2xl font-black uppercase tracking-tight">
              YALLA CHINA<span className="text-[#EDB80B]">.</span>
            </p>
            <p className="max-w-md text-sm leading-7 text-white/70">{t.desc}</p>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#EDB80B]">
              {t.servicesTitle}
            </p>
            <ul className="space-y-2 text-sm text-white/75">
              {t.services.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#EDB80B]">
              {t.linksTitle}
            </p>

            <div className="space-y-2 text-sm text-white/75">
              <a
                href="https://wa.me/212638335452"
                target="_blank"
                rel="noreferrer"
                className="block transition hover:text-white"
              >
                +212 638-335452
              </a>

              <a
                href="https://wa.me/212707298029"
                target="_blank"
                rel="noreferrer"
                className="block transition hover:text-white"
              >
                +212 707-298029
              </a>

              <p>contact@yallachina.com</p>
            </div>
          </div>
        </div>

        <div className={`border-t border-white/10 py-5 text-xs text-white/45 ${isArabic ? "text-right" : ""}`}>
          © {new Date().getFullYear()} YALLA CHINA. {t.rights}
        </div>
      </Container>
    </footer>
  );
}