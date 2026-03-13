import Container from "@/components/Container";
import Link from "next/link";

const services = [
  {
    title: "Orientation académique",
    desc: "Nous vous aidons à choisir le bon parcours d’études en Chine selon votre profil, votre niveau et votre objectif.",
  },
  {
    title: "Admission universitaire",
    desc: "Accompagnement dans la préparation du dossier et dans les étapes clés de la candidature universitaire.",
  },
  {
    title: "Visa étudiant",
    desc: "Aide à comprendre les documents demandés et à préparer correctement la demande de visa étudiant.",
  },
  {
    title: "Suivi personnalisé",
    desc: "Nous restons disponibles pour répondre aux questions de l’étudiant et rassurer sa famille.",
  },
  {
    title: "Conseils avant départ",
    desc: "Informations utiles pour mieux préparer le voyage, l’arrivée et le début du parcours en Chine.",
  },
  {
    title: "Support étudiants & parents",
    desc: "Un accompagnement clair et humain pensé pour les étudiants mais aussi pour leurs parents.",
  },
];

export default function ServicesFR() {
  return (
    <main className="bg-[#0a0a0a] text-white">
      <section className="relative overflow-hidden bg-[#8B0000]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(237,184,11,0.14),transparent_28%)]" />
        <Container>
          <div className="relative grid gap-10 py-14 lg:grid-cols-2 lg:items-center lg:py-20">
            <div className="space-y-6">
              <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/90 sm:text-sm">
                Services • YALLA CHINA • Études en Chine
              </p>

              <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                Nos services pour concrétiser un projet d’études en Chine.
              </h1>

              <p className="max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
                YALLA CHINA accompagne les étudiants et leurs parents à chaque étape
                du projet : orientation, admission, visa étudiant, et suivi.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/20 shadow-2xl">
              <img
                src="/fr-services-hero.jpg"
                alt="YALLA CHINA services"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 text-zinc-900 sm:py-16">
        <Container>
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#8B0000]">
              Accompagnement
            </p>

            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Un service structuré, pensé pour rassurer et guider.
            </h2>

            <p className="max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base">
              Nous simplifions le parcours pour que l’étudiant avance avec plus de
              clarté, et que sa famille comprenne mieux chaque étape.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 h-2 w-16 rounded-full bg-[#EDB80B]" />
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#111111] py-12 sm:py-16">
        <Container>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-[#EDB80B]">
                  Comment ça marche
                </p>
                <h2 className="mt-2 text-3xl font-black tracking-tight text-white">
                  Un process simple.
                </h2>
                <p className="mt-3 text-sm leading-7 text-white/70 sm:text-base">
                  Vous postulez, nous analysons votre projet, puis nous lançons
                  l’accompagnement avec vous étape par étape.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:col-span-2">
                {[
                  { t: "1) Formulaire", d: "Votre profil + votre objectif" },
                  { t: "2) Contact", d: "WhatsApp / appel rapide" },
                  { t: "3) Démarche", d: "Admission + visa étudiant" },
                ].map((x) => (
                  <div
                    key={x.t}
                    className="rounded-2xl border border-white/10 bg-black/20 p-5"
                  >
                    <p className="font-semibold text-white">{x.t}</p>
                    <p className="mt-2 text-sm text-white/70">{x.d}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/fr/apply"
                className="rounded-full bg-[#8B0000] px-6 py-3 text-center font-semibold text-white transition hover:bg-[#740000]"
              >
                Postuler
              </Link>

              <a
                href="https://wa.me/212638335452"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-center font-medium text-white transition hover:bg-white/10"
              >
                WhatsApp : +212 638-335452
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}