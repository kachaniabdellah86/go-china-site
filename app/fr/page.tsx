import Container from "@/components/Container";
import Link from "next/link";

export default function HomeFR() {
  return (
    <main className="bg-[#070707] text-white">
      <section className="relative overflow-hidden bg-[#8B0000]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(237,184,11,0.12),transparent_30%)]" />
        <Container>
          <div className="relative grid gap-10 py-14 lg:grid-cols-2 lg:items-center lg:py-20">
            <div className="space-y-7">
              <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/90 sm:text-sm">
                YALLA CHINA • Études en Chine • Étudiants & Parents
              </p>

              <div className="space-y-4">
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#EDB80B]">
                  Votre avenir commence ici
                </p>

                <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  Réalisez votre projet d’études en Chine avec confiance.
                </h1>
              </div>

              <p className="max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
                YALLA CHINA accompagne les étudiants et leurs parents à chaque étape :
                orientation, admission universitaire, visa étudiant, et suivi pour rendre
                le parcours plus clair, rassurant et réalisable.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/fr/apply"
                  className="rounded-full bg-[#EDB80B] px-6 py-3 text-center font-semibold text-black transition hover:opacity-90"
                >
                  Postuler maintenant
                </Link>

                <Link
                  href="/fr/services"
                  className="rounded-full border border-white/25 bg-white/8 px-6 py-3 text-center font-medium text-white transition hover:bg-white/15"
                >
                  Voir nos services
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3">
                {[
                  { k: "Réponse rapide", v: "Sous 24–48h" },
                  { k: "Étudiants & parents", v: "Accompagnement rassurant" },
                  { k: "Suivi complet", v: "Du choix au visa" },
                ].map((x) => (
                  <div
                    key={x.k}
                    className="rounded-2xl border border-white/10 bg-black/15 p-4 backdrop-blur-sm"
                  >
                    <p className="text-sm font-semibold text-white">{x.k}</p>
                    <p className="mt-1 text-sm text-white/70">{x.v}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/20 shadow-2xl">
                <img
                  src="/hero-yalla-fr.jpg"
                  alt="YALLA CHINA hero"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-5 left-4 right-4 rounded-3xl border border-white/10 bg-black/70 p-5 shadow-xl backdrop-blur-md">
                <p className="text-sm font-semibold text-[#EDB80B]">Contact principal</p>
                <p className="mt-1 text-lg font-bold text-white">+212 638-335452</p>
                <p className="mt-1 text-sm text-white/65">
                  WhatsApp pour démarrer rapidement votre projet.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#0d0d0d] py-12 sm:py-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#EDB80B]">
                Pourquoi YALLA CHINA
              </p>
              <h2 className="mt-3 text-2xl font-bold text-white">
                Un accompagnement pensé pour les étudiants et leurs familles.
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Nous aidons à transformer un projet parfois flou ou stressant en un
                parcours structuré, compréhensible et mieux préparé.
              </p>
            </div>

            {[
              {
                title: "Étape 1 — Échange initial",
                desc: "Nous comprenons votre profil, votre niveau d’étude et votre objectif.",
              },
              {
                title: "Étape 2 — Orientation & dossier",
                desc: "Nous vous guidons dans le choix du parcours et la préparation des documents.",
              },
              {
                title: "Étape 3 — Visa & suivi",
                desc: "Nous restons présents pour la suite du projet et les prochaines étapes.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 text-zinc-900 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#8B0000]">
                Étudier en Chine
              </p>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                Un projet important mérite une vraie stratégie.
              </h2>
              <p className="text-base leading-8 text-zinc-600">
                Choix du parcours, admission, préparation du visa étudiant, conseils
                avant départ et accompagnement global : nous simplifions le processus
                pour les étudiants et rassurons leurs parents.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Orientation académique",
                  "Admission universitaire",
                  "Visa étudiant",
                  "Suivi personnalisé",
                  "Conseils avant départ",
                  "Support étudiants & parents",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-medium"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-zinc-200 shadow-xl">
              <img
                src="/china-window.jpg"
                alt="Vue de la Chine"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#8B0000] py-12 sm:py-16">
        <Container>
          <div className="rounded-[2rem] border border-white/10 bg-black/20 p-8 text-white shadow-2xl backdrop-blur-sm sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-[#EDB80B]">
                  Démarrez maintenant
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  Prêt à lancer votre projet d’études en Chine ?
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/85">
                  Remplissez votre demande ou contactez-nous directement sur WhatsApp
                  pour échanger rapidement sur votre situation.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  href="/fr/apply"
                  className="rounded-full bg-[#EDB80B] px-6 py-3 text-center font-semibold text-black transition hover:opacity-90"
                >
                  Postuler maintenant
                </Link>

                <a
                  href="https://wa.me/212638335452"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-center font-medium text-white transition hover:bg-white/15"
                >
                  WhatsApp : +212 638-335452
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}