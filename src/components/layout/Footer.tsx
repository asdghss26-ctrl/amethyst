import Link from "next/link";
import { quickLinks, utilityLinks, contactInfo } from "@/lib/data/navigation";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#2E2E2E] border-t border-[#3E3E3E]">
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <img src="/logo-cream.svg" alt="AMETHYST logo" style={{ height: "40px", width: "auto" }} />
              <span className="text-white text-xl" style={{ fontFamily: "var(--font-dm-serif), serif", fontWeight: 600 }}>
                AMETHYST
              </span>
            </Link>
            <p className="text-sm text-[#9A94A0] leading-relaxed mb-6">
              Professional dermatology care focused on results, safety, and personalized treatment solutions.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 text-xs text-white border border-[#4E4E4E] rounded-full px-3 py-1.5">
                <svg className="w-3 h-3 text-[#8E5C8F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                FDA Approved
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-white border border-[#4E4E4E] rounded-full px-3 py-1.5">
                <svg className="w-3 h-3 text-[#8E5C8F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Board Certified
              </span>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white mb-5">Quick links</p>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[#9A94A0] hover:text-[#CFA1A8] transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white mb-5">Utility links</p>
            <ul className="space-y-3">
              {utilityLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[#9A94A0] hover:text-[#CFA1A8] transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white mb-5">Get in touch</p>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full border border-[#4E4E4E] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-base">{item.icon}</span>
                  </div>
                  <a href={item.href} className="text-sm text-[#9A94A0] hover:text-[#CFA1A8] transition-colors leading-relaxed">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-[#3E3E3E] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#9A94A0]">© 2026 Amethyst. All rights reserved</p>
          <p className="text-xs text-[#9A94A0]">
            Designed by <span className="text-[#CFA1A8]">Webestica</span>, Powered by <span className="text-[#CFA1A8]">Webflow</span>
          </p>
        </div>
      </div>
    </footer>
  );
}