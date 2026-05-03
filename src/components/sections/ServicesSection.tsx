import Link from "next/link";
import { services } from "@/lib/data/services";
import { Reveal } from "../ui/RevealAnimation";

export default function Services() {
  return (
    <section id="services" className="py-28 bg-[#F7F3EF]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-6">
          <Reveal delay={0.1}>
            <div>
              <div className="inline-flex items-center gap-2 border border-[#E4DFE8] rounded-full px-4 py-1.5 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8E5C8F]"></span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8E5C8F]">Services</span>
              </div>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl text-[#2E2E2E]"
                style={{ fontFamily: "var(--font-dm-serif), serif" }}
              >
                Our treatments
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-[#5A2A5D] text-white text-xs font-medium uppercase tracking-[0.1em] px-6 py-3 rounded-full hover:bg-[#4A1F4D] transition-all duration-300 w-fit"
            >
              <img src="/logo-cream.svg" alt="" className="h-5 w-auto" /> View all
            </Link>
          </Reveal>
        </div>

        <div className="flex flex-col gap-4">
          {services.map((s, i) => (
            <Reveal key={i} delay={0.1 + i * 0.1}>
              <div
                className="group bg-white border border-[#E4DFE8] rounded-[32px] md:rounded-[40px] px-6 py-6 md:px-8 md:py-7 flex flex-col md:flex-row md:items-center gap-4 md:gap-6 hover:border-[#8E5C8F] hover:shadow-lg transition-all duration-500"
              >
                <div className="flex items-center justify-between w-full md:w-1/2">
                  <div className="flex items-center gap-4 md:gap-5">
                    <div className="w-12 h-12 rounded-full bg-[#F2EAF3] border border-[#E4DFE8] flex items-center justify-center text-[#8E5C8F] text-xl flex-shrink-0 group-hover:bg-[#5A2A5D] group-hover:text-white group-hover:border-[#5A2A5D] transition-all duration-300">
                      {s.icon}
                    </div>
                    <h3
                      className="text-2xl md:text-3xl text-[#2E2E2E]"
                      style={{ fontFamily: "var(--font-dm-serif), serif" }}
                    >
                      {s.title}
                    </h3>
                  </div>
                  <div className="md:hidden w-10 h-10 flex-shrink-0 rounded-full bg-white flex items-center justify-center text-[#8E5C8F] text-xl border border-[#E4DFE8]">
                    +
                  </div>
                </div>

                <div className="w-full md:w-1/2 flex flex-col md:flex-row md:items-center justify-between gap-5 md:gap-4 mt-2 md:mt-0">
                  <p className="text-[13px] md:text-sm text-[#6B6570] leading-relaxed max-w-sm md:max-w-xs">{s.description}</p>
                  <Link
                    href="#"
                    className="self-start md:self-auto flex-shrink-0 border border-[#E4DFE8] text-[#2E2E2E] text-xs font-medium uppercase tracking-[0.1em] px-6 py-2.5 rounded-full hover:bg-[#5A2A5D] hover:text-white hover:border-[#5A2A5D] transition-all duration-300"
                  >
                    View Detail
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}