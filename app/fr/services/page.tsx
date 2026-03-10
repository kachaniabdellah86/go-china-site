import Container from "@/components/Container";
import Link from "next/link";

const services = [
  {
    title: "Orientation académique",
    desc: "Nous vous aidons à choisir le bon parcours d’études en Chine selon votre profil et votre objectif.",
  },
  {
    title: "Admission universitaire",
    desc: "Accompagnement pour la constitution du dossier et la préparation de la candidature.",
  },
  {
    title: "Visa étudiant",
    desc: "Aide pour comprendre les documents et préparer correctement la demande de visa étudiant.",
  },
  {
    title: "Suivi personnalisé",
    desc: "Nous restons disponibles pour répondre aux questions de l’étudiant et de sa famille.",
  },
  {
    title: "Conseils avant départ",
    desc: "Informations pratiques pour mieux préparer le départ et l’arrivée en Chine.",
  },
  {
    title: "Support étudiants & parents",
    desc: "Un accompagnement rassurant pour les étudiants et leurs parents pendant le projet.",
  },
];

export default function ServicesFR() {
  return (
    <main className="py-8 sm:py-12 lg:py-14">
      <Container>
        <div className="space-y-4">
          <p className="text-sm text-zinc-500">Services</p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Nos services pour les études en Chine.
          </h1>

          <p className="max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base">
            YALLA CHINA accompagne les étudiants et leurs parents à chaque étape
            du projet d’études en Chine.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-3xl border border-zinc-100 bg-white/85 p-5 shadow-sm sm:p-6"
            >
              <h3 className="text-base font-semibold sm:text-lg">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-zinc-100 bg-white/85 p-5 shadow-sm sm:mt-12 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div>
              <p className="text-sm text-zinc-500">Comment ça marche</p>
              <h2 className="mt-2 text-2xl font-semibold">Process simple.</h2>
              <p className="mt-2 text-sm leading-7 text-zinc-600 sm:text-base">
                Vous postulez, nous analysons votre projet, puis nous lançons
                l’accompagnement avec vous.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:col-span-2">
              {[
                { t: "1) Formulaire", d: "Votre profil + votre objectif" },
                { t: "2) Contact", d: "WhatsApp / appel rapide" },
                { t: "3) Démarche", d: "Admission + visa étudiant" },
              ].map((x) => (
                <div key={x.t} className="rounded-2xl bg-zinc-50 p-4 sm:p-5">
                  <p className="font-medium">{x.t}</p>
                  <p className="text-sm text-zinc-600">{x.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <Link
              href="/fr/apply"
              className="rounded-full bg-[#8B0000] px-5 py-3 text-center text-white hover:bg-[#740000]"
            >
              Postuler
            </Link>

            <a
              href="https://wa.me/212638335452"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-zinc-200 px-5 py-3 text-center hover:bg-zinc-50"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
}