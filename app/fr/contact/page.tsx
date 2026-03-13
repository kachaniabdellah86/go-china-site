export default function ContactFR() {
  return (
    <main className="bg-[#0a0a0a] text-white">
      <section className="relative overflow-hidden bg-[#8B0000]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(237,184,11,0.12),transparent_30%)]" />
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-5">
              <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/90 sm:text-sm">
                Contact • YALLA CHINA
              </p>

              <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
                Parlons de votre projet d’études en Chine.
              </h1>

              <p className="max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
                Une question, un projet, un doute ? Contactez-nous et nous vous
                répondrons sous 24–48h par WhatsApp ou téléphone.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
              <img
                src="/fr-contact-hero.jpg"
                alt="Contact YALLA CHINA"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 text-zinc-900 sm:py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-2">
            <form className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold">Envoyer un message</h2>
              <p className="mt-2 text-sm leading-7 text-zinc-600">
                Remplissez ce formulaire et nous reviendrons vers vous rapidement.
              </p>

              <div className="mt-6 space-y-4">
                <input
                  className="w-full rounded-2xl border border-zinc-200 px-4 py-3 text-sm outline-none transition focus:border-[#8B0000] sm:text-base"
                  placeholder="Nom complet"
                />

                <input
                  className="w-full rounded-2xl border border-zinc-200 px-4 py-3 text-sm outline-none transition focus:border-[#8B0000] sm:text-base"
                  placeholder="Téléphone (WhatsApp)"
                />

                <input
                  className="w-full rounded-2xl border border-zinc-200 px-4 py-3 text-sm outline-none transition focus:border-[#8B0000] sm:text-base"
                  placeholder="Email (optionnel)"
                />

                <textarea
                  className="min-h-[160px] w-full rounded-2xl border border-zinc-200 px-4 py-3 text-sm outline-none transition focus:border-[#8B0000] sm:text-base"
                  placeholder="Votre message..."
                />

                <button className="w-full rounded-full bg-[#8B0000] px-5 py-3 font-semibold text-white transition hover:bg-[#740000] sm:w-auto">
                  Envoyer
                </button>
              </div>
            </form>

            <div className="rounded-[2rem] border border-zinc-200 bg-zinc-50 p-6 shadow-sm sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#8B0000]">
                Contact direct
              </p>

              <div className="mt-5 space-y-6">
                <div>
                  <h2 className="text-lg font-bold">WhatsApp principal</h2>
                  <p className="mt-1 text-sm text-zinc-600">Réponse rapide</p>
                  <a
                    className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#EDB80B] px-4 py-3 font-semibold text-black transition hover:opacity-90 sm:w-auto"
                    href="https://wa.me/212638335452"
                    target="_blank"
                    rel="noreferrer"
                  >
                    +212 638-335452
                  </a>
                </div>

                <div>
                  <h2 className="text-lg font-bold">Deuxième numéro</h2>
                  <a
                    className="mt-2 block text-sm text-zinc-600 transition hover:text-[#8B0000]"
                    href="https://wa.me/212707298029"
                    target="_blank"
                    rel="noreferrer"
                  >
                    +212 707-298029
                  </a>
                </div>

                <div>
                  <h2 className="text-lg font-bold">Email</h2>
                  <p className="mt-2 text-sm text-zinc-600">contact@yallachina.com</p>
                </div>

                <div className="rounded-3xl bg-black p-5 text-white">
                  <p className="text-sm font-semibold text-[#EDB80B]">
                    YALLA CHINA
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white/75">
                    Un accompagnement pensé pour les étudiants et leurs parents,
                    avec plus de clarté, de suivi et de confiance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}