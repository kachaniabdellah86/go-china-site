import Container from "@/components/Container";
import Link from "next/link";

const services = [
  {
    title: "التوجيه الأكاديمي",
    desc: "نساعد الطلبة على اختيار المسار الدراسي المناسب في الصين حسب ملفهم وأهدافهم.",
  },
  {
    title: "القبول الجامعي",
    desc: "مرافقة في إعداد ملف التقديم واختيار الفرصة الدراسية المناسبة.",
  },
  {
    title: "إرشاد فيزا الدراسة",
    desc: "شرح واضح للوثائق المطلوبة ومساعدة على تحضير ملف فيزا الدراسة بشكل صحيح.",
  },
  {
    title: "متابعة شخصية",
    desc: "نبقى متاحين للإجابة عن أسئلة الطلبة والآباء خلال مختلف مراحل المشروع.",
  },
  {
    title: "نصائح قبل السفر",
    desc: "معلومات عملية تساعد على الاستعداد الجيد للسفر والوصول إلى الصين.",
  },
  {
    title: "دعم للطلبة والآباء",
    desc: "خدمة مطمئنة موجهة للطلبة وعائلاتهم من أجل مسار واضح وآمن.",
  },
];

export default function ServicesAR() {
  return (
    <main className="py-8 sm:py-12 lg:py-14">
      <Container>
        <div className="space-y-4 text-right">
          <p className="text-sm text-zinc-500">الخدمات</p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            خدماتنا للدراسة في الصين.
          </h1>

          <p className="max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base">
            YALLA CHINA ترافق الطلبة وآباءهم في كل مراحل مشروع الدراسة في الصين.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-3xl border border-zinc-100 bg-white/85 p-5 text-right shadow-sm sm:p-6"
            >
              <h3 className="text-base font-semibold sm:text-lg">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-zinc-100 bg-white/85 p-5 shadow-sm sm:mt-12 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="text-right">
              <p className="text-sm text-zinc-500">كيف يتم الأمر</p>
              <h2 className="mt-2 text-2xl font-semibold">مسار بسيط.</h2>
              <p className="mt-2 text-sm leading-7 text-zinc-600 sm:text-base">
                تقوم بالتقديم، نراجع مشروعك الدراسي، ثم نبدأ المرافقة معك.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:col-span-2">
              {[
                { t: "1) الاستمارة", d: "ملفك + هدفك" },
                { t: "2) التواصل", d: "واتساب / اتصال سريع" },
                { t: "3) الإجراءات", d: "القبول + فيزا الدراسة" },
              ].map((x) => (
                <div key={x.t} className="rounded-2xl bg-zinc-50 p-4 text-right sm:p-5">
                  <p className="font-medium">{x.t}</p>
                  <p className="text-sm text-zinc-600">{x.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:justify-end">
            <Link
              href="/ar/apply"
              className="rounded-full bg-[#8B0000] px-5 py-3 text-center text-white hover:bg-[#740000]"
            >
              قدّم الآن
            </Link>

            <a
              href="https://wa.me/212638335452"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-zinc-200 px-5 py-3 text-center hover:bg-zinc-50"
            >
              واتساب
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
}