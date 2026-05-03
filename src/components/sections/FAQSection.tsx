"use client";
import { useState } from "react";
import { faqItems } from "@/lib/data/faq";
import { Reveal } from "../ui/RevealAnimation";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-28 bg-[#EFE7DF]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <Reveal delay={0.1}>
            <div className="lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 border border-[#E4DFE8] rounded-full px-4 py-1.5 mb-4 md:mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8E5C8F]"></span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8E5C8F]">FAQ</span>
              </div>
              <h2
                className="text-4xl md:text-5xl text-[#2E2E2E] mb-4 md:mb-6 leading-[1.1]"
                style={{ fontFamily: "var(--font-dm-serif), serif" }}
              >
                Still have<br />questions?
              </h2>
              <p className="text-sm text-[#6B6570] leading-relaxed mb-6 md:mb-8">
                Our team is here to help. Get in touch for personalized answers.
              </p>
              <div className="space-y-4 mb-6 md:mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white border border-[#E4DFE8] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#8E5C8F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <a href="tel:+15551234567" className="text-sm text-[#2E2E2E] hover:text-[#5A2A5D] transition-colors">+1 (555) 123-4567</a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white border border-[#E4DFE8] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#8E5C8F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <a href="mailto:example@domain.com" className="text-sm text-[#2E2E2E] hover:text-[#5A2A5D] transition-colors">example@domain.com</a>
                </div>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-[#E4DFE8] text-[#2E2E2E] text-xs font-medium uppercase tracking-[0.1em] px-6 py-3 rounded-full hover:bg-[#5A2A5D] hover:text-white hover:border-[#5A2A5D] transition-all duration-300"
              >
                Contact us
              </a>
            </div>
          </Reveal>

          <div className="space-y-3">
            {faqItems.map((faq, i) => (
              <Reveal key={i} delay={0.2 + i * 0.1}>
                <div
                  className={`rounded-[24px] md:rounded-[28px] border overflow-hidden transition-all duration-300 ${open === i ? "bg-white border-[#8E5C8F]" : "bg-white/70 border-[#E4DFE8]"}`}
                >
                  <button
                    className="w-full flex items-center justify-between px-5 md:px-7 py-4 md:py-5 text-left"
                    onClick={() => setOpen(open === i ? null : i)}
                  >
                    <span className="text-sm font-medium text-[#2E2E2E] pr-4">{faq.q}</span>
                    <span className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center border transition-all duration-300 ${open === i ? "bg-[#5A2A5D] border-[#5A2A5D]" : "bg-white border-[#E4DFE8]"}`}>
                      <svg
                        className={`w-3.5 h-3.5 transition-all duration-300 ${open === i ? "rotate-45 text-white" : "text-[#2E2E2E]"}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </button>
                  {open === i && (
                    <div className="px-5 md:px-7 pb-5 md:pb-6">
                      <p className="text-sm text-[#6B6570] leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}