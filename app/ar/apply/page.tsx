"use client";

import { useState } from "react";
import Container from "@/components/Container";

export default function ApplyAR() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "خطأ");

      setDone(true);
      e.currentTarget.reset();
    } catch (err: any) {
      setError(err.message || "خطأ");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="py-8 sm:py-12 lg:py-14">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2 lg:items-start lg:gap-10">
          <div className="space-y-4 text-right">
            <p className="text-sm text-zinc-500">التقديم</p>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              قدّم مع YALLA CHINA
            </h1>

            <p className="text-sm leading-7 text-zinc-600 sm:text-base">
              املأ هذا النموذج من أجل مشروعك الدراسي في الصين. سنتواصل معك خلال
              24–48 ساعة عبر واتساب أو الهاتف.
            </p>

            <div className="rounded-3xl border border-zinc-100 bg-white/80 p-5 shadow-sm sm:p-6">
              <p className="font-medium">المعلومات المطلوبة</p>

              <ul className="mt-3 list-disc space-y-2 pr-5 text-sm text-zinc-600">
                <li>معلومات الاتصال</li>
                <li>المدينة والمستوى الدراسي</li>
                <li>مشروعك الدراسي في الصين</li>
              </ul>
            </div>

            <a
              href="https://wa.me/212638335452"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-[#EDB80B] px-5 py-3 font-medium text-black hover:opacity-90"
            >
              واتساب: +212 638-335452
            </a>
          </div>

          <div className="rounded-3xl border border-zinc-100 bg-white/85 p-5 shadow-sm sm:p-6 text-right">
            {done && (
              <div className="mb-4 rounded-2xl bg-zinc-50 p-4 text-sm">
                ✅ تم إرسال طلبك بنجاح.
              </div>
            )}

            {error && (
              <div className="mb-4 rounded-2xl bg-red-50 p-4 text-sm text-red-700">
                {error}
              </div>
            )}

            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="الاسم الكامل *" name="fullName" required />
                <Field label="الهاتف *" name="phone" placeholder="+212..." required />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="واتساب" name="whatsapp" placeholder="+212..." />
                <Field label="البريد الإلكتروني" name="email" type="email" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="المدينة *" name="city" required />
                <Field label="العنوان" name="address" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="المستوى الدراسي *" name="studyLevel" required />
                <Field label="التخصص" name="fieldOfStudy" />
              </div>

              <div>
                <label className="text-sm font-medium">الهدف *</label>
                <select
                  name="objective"
                  required
                  defaultValue=""
                  className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#8B0000] sm:text-base"
                >
                  <option value="" disabled>
                    اختر…
                  </option>
                  <option value="Études">الدراسة</option>
                  <option value="Langue">اللغة</option>
                  <option value="Autre">أخرى</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">الرسالة</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="اكتب مشروعك أو أسئلتك"
                  className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#8B0000] sm:text-base"
                />
              </div>

              <button
                disabled={loading}
                className="w-full rounded-full bg-[#8B0000] px-5 py-3 text-white transition hover:bg-[#740000] disabled:opacity-60"
              >
                {loading ? "جارٍ الإرسال..." : "إرسال الطلب"}
              </button>

              <p className="text-xs leading-5 text-zinc-500">
                بإرسال هذا النموذج، فإنك توافق على أن يتم التواصل معك عبر واتساب أو الهاتف.
              </p>
            </form>
          </div>
        </div>
      </Container>
    </main>
  );
}

function Field({
  label,
  name,
  placeholder,
  required,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        name={name}
        required={required}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-[#8B0000] sm:text-base"
      />
    </div>
  );
}