"use client";

import { useState } from "react";

export type FaqItem = {
  question: string;
  answer: string;
};

export default function FaqAccordion({
  items,
  dir = "ltr",
}: {
  items: FaqItem[];
  dir?: "ltr" | "rtl";
}) {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const isRtl = dir === "rtl";

  return (
    <div className="grid gap-4">
      {items.map((item, index) => {
        const isOpen = index === openIndex;

        return (
          <article
            key={item.question}
            className={`rounded-[1.8rem] border transition-all duration-200 ${
              isOpen
                ? "border-[#B17F02]/40 bg-white shadow-[0_18px_35px_rgba(15,23,42,0.05)]"
                : "border-zinc-200 bg-[#faf7f3]"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className={`flex w-full items-start justify-between gap-4 px-5 py-5 text-left ${isRtl ? "text-right" : ""}`}
              aria-expanded={isOpen}
            >
              <span className="text-base font-bold text-zinc-900 sm:text-lg">
                {item.question}
              </span>
              <span
                className={`mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-sm transition ${
                  isOpen
                    ? "border-[#B17F02] bg-[#B17F02]/10 text-[#770304]"
                    : "border-zinc-300 text-zinc-500"
                }`}
                aria-hidden="true"
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>

            {isOpen ? (
              <div className={`px-5 pb-5 ${isRtl ? "text-right" : ""}`}>
                <p className="text-sm leading-7 text-zinc-600">{item.answer}</p>
              </div>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
