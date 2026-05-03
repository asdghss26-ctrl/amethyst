import Link from "next/link";
import { Reveal } from "../ui/RevealAnimation";

export default function CTABanner() {
  return (
    <section className="py-28 bg-[#F7F3EF]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Full-bleed rounded container with brand gradient bg */}
        <Reveal delay={0.1}>
          <div
            className="relative rounded-[32px] md:rounded-[48px] overflow-hidden min-h-[350px] md:min-h-[400px] flex items-end"
            style={{
              background: "linear-gradient(135deg, #5A2A5D 0%, #8E5C8F 40%, #CFA1A8 100%)",
            }}
          >
            {/* Overlapping large text on left */}
            <div className="relative z-10 p-6 sm:p-10 md:p-14 max-w-xl">
              <Reveal delay={0.2}>
                <h2
                  className="text-3xl sm:text-4xl md:text-5xl text-white mb-4 md:mb-5 leading-[1.1]"
                  style={{ fontFamily: "var(--font-dm-serif), serif" }}
                >
                  Transform your<br />skin with us
                </h2>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="text-[#F3DADF] text-xs sm:text-sm leading-relaxed mb-6 md:mb-8 max-w-sm">
                  Book a consultation with our dermatology specialists and take the first step toward lasting results.
                </p>
              </Reveal>
              <Reveal delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="#appointment"
                    className="inline-flex items-center justify-center gap-2 bg-white text-[#5A2A5D] px-7 py-3.5 rounded-full text-xs sm:text-sm font-medium hover:bg-[#F8F6F9] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/logo.svg" alt="" className="h-5 w-auto" /> Book an Appointment
                  </Link>
                  <Link
                    href="#services"
                    className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-7 py-3.5 rounded-full text-xs sm:text-sm font-medium hover:bg-white/30 transition-all duration-300"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/logo-cream.svg" alt="" className="h-5 w-auto" /> Our Service
                  </Link>
                </div>
              </Reveal>
            </div>

          {/* Decorative right side */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden md:block opacity-80"
            style={{
              background: "radial-gradient(ellipse at right center, rgba(255,255,255,0.15) 0%, transparent 70%)",
            }}
          />
        </div>
      </Reveal>
    </div>
    </section>
  );
}
