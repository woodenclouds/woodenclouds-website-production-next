"use client";

import { useState } from "react";

export function FaqList({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const [open, setOpen] = useState(0);

  return (
    <section className="wc-section bg-paper pt-0">
      <div className="wc-container max-w-4xl">
        <h2 className="mb-8 text-3xl font-light md:text-4xl">FAQs</h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <div key={faq.question} className="overflow-hidden rounded-xl border border-line-dark bg-white">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-light"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                >
                  <span>{faq.question}</span>
                  <span className="text-xl text-muted">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <div className="border-t border-line-dark px-5 py-4 text-sm leading-relaxed text-muted">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
