export default function ContactAR() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
      <div className="glass rounded-3xl p-5 shadow-sm sm:p-8 text-right">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          اتصل بـ YALLA CHINA
        </h1>

        <p className="mt-2 text-sm leading-7 text-zinc-600 sm:text-base">
          هل لديك سؤال حول الدراسة في الصين؟ أرسل لنا رسالة وسنرد عليك خلال
          24–48 ساعة.
        </p>

        <div className="mt-6 grid gap-6 md:mt-8 md:grid-cols-2">
          <form className="space-y-4">
            <input
              className="w-full rounded-2xl border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-[#8B0000] sm:text-base"
              placeholder="الاسم الكامل"
            />

            <input
              className="w-full rounded-2xl border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-[#8B0000] sm:text-base"
              placeholder="الهاتف (واتساب)"
            />

            <input
              className="w-full rounded-2xl border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-[#8B0000] sm:text-base"
              placeholder="البريد الإلكتروني (اختياري)"
            />

            <textarea
              className="min-h-[140px] w-full rounded-2xl border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-[#8B0000] sm:text-base"
              placeholder="رسالتك..."
            />

            <button className="w-full rounded-full bg-[#8B0000] px-5 py-3 text-white hover:bg-[#740000] sm:w-auto">
              إرسال
            </button>
          </form>

          <div className="rounded-3xl border border-zinc-100 bg-white/60 p-5 sm:p-6">
            <h2 className="font-semibold">واتساب الرئيسي</h2>
            <p className="mt-1 text-sm text-zinc-600">رد سريع</p>

            <a
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#EDB80B] px-4 py-3 font-medium text-black hover:opacity-90 sm:w-auto"
              href="https://wa.me/212638335452"
              target="_blank"
              rel="noreferrer"
            >
              +212 638-335452
            </a>

            <div className="mt-6">
              <h2 className="font-semibold">الرقم الثاني</h2>
              <a
                className="mt-1 block text-sm text-zinc-600 hover:text-[#8B0000]"
                href="https://wa.me/212707298029"
                target="_blank"
                rel="noreferrer"
              >
                +212 707-298029
              </a>
            </div>

            <div className="mt-6">
              <h2 className="font-semibold">البريد الإلكتروني</h2>
              <p className="mt-1 text-sm text-zinc-600">contact@yallachina.com</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}