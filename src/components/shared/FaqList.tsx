"use client";

import { useState } from "react";

export function FaqList({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const [open, setOpen] = useState(0);

  return (
    <section className="intro-corp section-padding pt-0">
      <div className="container">
        <div className="sec-lg-head mb-50">
          <h2 className="fz-40 fw-300">FAQs</h2>
        </div>
        <div className="accordion bord">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <div className="accordion-item" key={faq.question} style={{ marginBottom: 10 }}>
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button${isOpen ? "" : " collapsed"}`}
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      background: "transparent",
                      border: "1px solid rgba(0,0,0,0.1)",
                      padding: "18px 20px",
                      borderRadius: 8,
                    }}
                  >
                    {faq.question}
                  </button>
                </h2>
                {isOpen && (
                  <div className="accordion-body" style={{ padding: "15px 20px" }}>
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
