import Container from "@/components/Container";
import Link from "next/link";

export default function HomeAR() {
  return (
    <main>
      <section className="py-10 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
            <div className="space-y-6 text-right">
              <p className="inline-flex rounded-full bg-[#8B0000]/10 px-3 py-1 text-xs text-[#8B0000] sm:text-sm">
                YALLA CHINA • الدراسة في الصين • الطلبة والآباء
              </p>

              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                حقّق مشروعك الدراسي في الصين مع{" "}
                <span className="text-[#8B0000]">YALLA CHINA</span>.
              </h1>

              <p className="text-base leading-7 text-zinc-600 sm:text-lg">
                نرافق الطلبة وآباءهم في كل المراحل: التوجيه، القبول، فيزا
                الدراسة، والمتابعة، حتى يصبح المشروع واضحًا وآمنًا وقابلاً
                للتحقيق.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-end">
                <Link
                  href="/ar/apply"
                  className="rounded-full bg-[#8B0000] px-5 py-3 text-center text-white hover:bg-[#740000]"
                >
                  قدّم الآن
                </Link>

                <Link
                  href="/ar/services"
                  className="rounded-full border border-zinc-200 px-5 py-3 text-center hover:bg-zinc-50"
                >
                  عرض الخدمات
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-3 pt-4 sm:grid-cols-3 sm:pt-6">
                {[
                  { k: "سريع", v: "رد خلال 24–48 ساعة" },
                  { k: "واضح", v: "مرافقة بسيطة" },
                  { k: "موثوق", v: "دعم للطلبة والآباء" },
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
              <div className="space-y-4 text-right">
                <p className="text-sm text-zinc-500">كيف يتم الأمر</p>

                <div className="rounded-2xl bg-zinc-50 p-5">
                  <p className="font-medium">1) تملأ الاستمارة</p>
                  <p className="text-sm text-zinc-600">
                    الملف، المدينة، المستوى الدراسي، والهدف.
                  </p>
                </div>

                <div className="rounded-2xl bg-zinc-50 p-5">
                  <p className="font-medium">2) نتواصل معك</p>
                  <p className="text-sm text-zinc-600">
                    عبر واتساب أو الهاتف لفهم مشروعك الدراسي.
                  </p>
                </div>

                <div className="rounded-2xl bg-zinc-50 p-5">
                  <p className="font-medium">3) نبدأ الإجراءات</p>
                  <p className="text-sm text-zinc-600">
                    التوجيه، القبول، فيزا الدراسة، والمتابعة.
                  </p>
                </div>

                <a
                  href="https://wa.me/212638335452"
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-full bg-[#EDB80B] px-5 py-3 text-center font-medium text-black hover:opacity-90"
                >
                  واتساب: +212 638-335452
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}