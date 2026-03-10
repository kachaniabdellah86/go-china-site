import Container from "@/components/Container";
import Link from "next/link";

const services = [
  {
    title: "Academic orientation",
    desc: "We help students choose the right study path in China based on their profile and goals.",
  },
  {
    title: "University admission",
    desc: "Support with preparing the application file and submitting to the right study option.",
  },
  {
    title: "Student visa guidance",
    desc: "Clear help to understand the required documents and prepare the student visa process correctly.",
  },
  {
    title: "Personal follow-up",
    desc: "We stay available to answer questions from both students and parents throughout the journey.",
  },
  {
    title: "Pre-departure advice",
    desc: "Useful guidance to prepare for departure and arrival in China with more confidence.",
  },
  {
    title: "Support for students & parents",
    desc: "A reassuring service designed for students and families who want a clear and safe process.",
  },
];

export default function ServicesEN() {
  return (
    <main className="py-8 sm:py-12 lg:py-14">
      <Container>
        <div className="space-y-4">
          <p className="text-sm text-zinc-500">Services</p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our services for studying in China.
          </h1>

          <p className="max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base">
            YALLA CHINA supports students and parents through every step of the
            study journey in China.
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
              <p className="text-sm text-zinc-500">How it works</p>
              <h2 className="mt-2 text-2xl font-semibold">Simple process.</h2>
              <p className="mt-2 text-sm leading-7 text-zinc-600 sm:text-base">
                You apply, we review your study project, then we start the guidance with you.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:col-span-2">
              {[
                { t: "1) Form", d: "Your profile + your goal" },
                { t: "2) Contact", d: "Quick WhatsApp / call" },
                { t: "3) Process", d: "Admission + student visa" },
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
              href="/en/apply"
              className="rounded-full bg-[#8B0000] px-5 py-3 text-center text-white hover:bg-[#740000]"
            >
              Apply
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