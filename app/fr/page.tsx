import Container from "@/components/Container";
import Link from "next/link";

export default function HomeFR() {
  return (
    <main>
      <section className="py-10 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
            <div className="space-y-6">
              <p className="inline-flex rounded-full bg-[#8B0000]/10 px-3 py-1 text-xs text-[#8B0000] sm:text-sm">
                YALLA CHINA • Études en Chine • Étudiants & Parents
              </p>

              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Réalisez votre projet d’études en Chine avec{" "}
                <span className="text-[#8B0000]">YALLA CHINA</span>.
              </h1>

              <p className="text-base leading-7 text-zinc-600 sm:text-lg">
                Nous accompagnons les étudiants et leurs parents à chaque étape :
                orientation, admission, visa étudiant et suivi, pour rendre le
                projet clair, rassurant et réalisable.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/fr/apply"
                  className="rounded-full bg-[#8B0000] px-5 py-3 text-center text-white hover:bg-[#740000]"
                >
                  Postuler maintenant
                </Link>

                <Link
                  href="/fr/services"
                  className="rounded-full border border-zinc-200 px-5 py-3 text-center hover:bg-zinc-50"
                >
                  Voir nos services
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-3 pt-4 sm:grid-cols-3 sm:pt-6">
                {[
                  { k: "Rapide", v: "Réponse sous 24–48h" },
                  { k: "Clair", v: "Accompagnement simple" },
                  { k: "Fiable", v: "Suivi pour étudiants & parents" },
                ].map((x) => (
                  <div
                    key={x.k}
                    className="rounded-2xl border border-zinc-100 bg-white/80 p-4 shadow-sm"
                  >
                    <p className="font-medium">{x.k}</p>
                    <p className="text-sm text-zinc-600">{x.v}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-100 bg-white/85 p-5 shadow-sm sm:p-6">
              <div className="space-y-4">
                <p className="text-sm text-zinc-500">Comment ça marche</p>

                <div className="rounded-2xl bg-zinc-50 p-5">
                  <p className="font-medium">1) Vous remplissez le formulaire</p>
                  <p className="text-sm text-zinc-600">
                    Profil, ville, niveau d’étude et objectif.
                  </p>
                </div>

                <div className="rounded-2xl bg-zinc-50 p-5">
                  <p className="font-medium">2) On vous contacte</p>
                  <p className="text-sm text-zinc-600">
                    Par WhatsApp ou téléphone pour comprendre votre projet.
                  </p>
                </div>

                <div className="rounded-2xl bg-zinc-50 p-5">
                  <p className="font-medium">3) On lance la démarche</p>
                  <p className="text-sm text-zinc-600">
                    Orientation, admission, visa étudiant et suivi.
                  </p>
                </div>

                <a
                  href="https://wa.me/212638335452"
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-full bg-[#EDB80B] px-5 py-3 text-center font-medium text-black hover:opacity-90"
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