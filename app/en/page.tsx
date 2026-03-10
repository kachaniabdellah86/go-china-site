import Container from "@/components/Container";
import Link from "next/link";

export default function HomeEN() {
  return (
    <main>
      <section className="py-10 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
            <div className="space-y-6">
              <p className="inline-flex rounded-full bg-[#8B0000]/10 px-3 py-1 text-xs text-[#8B0000] sm:text-sm">
                YALLA CHINA • Study in China • Students & Parents
              </p>

              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Make your study project in China real with{" "}
                <span className="text-[#8B0000]">YALLA CHINA</span>.
              </h1>

              <p className="text-base leading-7 text-zinc-600 sm:text-lg">
                We support students and parents at every step: orientation,
                admission, student visa, and follow-up, to make the journey
                clear, safe, and achievable.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/en/apply"
                  className="rounded-full bg-[#8B0000] px-5 py-3 text-center text-white hover:bg-[#740000]"
                >
                  Apply now
                </Link>

                <Link
                  href="/en/services"
                  className="rounded-full border border-zinc-200 px-5 py-3 text-center hover:bg-zinc-50"
                >
                  View services
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-3 pt-4 sm:grid-cols-3 sm:pt-6">
                {[
                  { k: "Fast", v: "Reply within 24–48h" },
                  { k: "Clear", v: "Simple guidance" },
                  { k: "Reliable", v: "Support for students & parents" },
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
                <p className="text-sm text-zinc-500">How it works</p>

                <div className="rounded-2xl bg-zinc-50 p-5">
                  <p className="font-medium">1) You fill the form</p>
                  <p className="text-sm text-zinc-600">
                    Profile, city, study level, and objective.
                  </p>
                </div>

                <div className="rounded-2xl bg-zinc-50 p-5">
                  <p className="font-medium">2) We contact you</p>
                  <p className="text-sm text-zinc-600">
                    By WhatsApp or phone to understand your project.
                  </p>
                </div>

                <div className="rounded-2xl bg-zinc-50 p-5">
                  <p className="font-medium">3) We start the process</p>
                  <p className="text-sm text-zinc-600">
                    Orientation, admission, student visa, and follow-up.
                  </p>
                </div>

                <a
                  href="https://wa.me/212638335452"
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-full bg-[#EDB80B] px-5 py-3 text-center font-medium text-black hover:opacity-90"
                >
                  WhatsApp: +212 638-335452
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}