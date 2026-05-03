"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { navItems } from "@/lib/data/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`w-full fixed top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className={`max-w-6xl mx-auto px-6 flex items-center justify-between transition-all duration-500 ${scrolled ? "bg-[#F7F3EF]/90 backdrop-blur-xl rounded-full shadow-sm px-8 py-3" : ""}`}>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-xs font-medium uppercase tracking-[0.12em] text-[#2E2E2E] hover:text-[#5A2A5D] transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link href="/" className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
          <img src="/logo.svg" alt="AMETHYST logo" style={{ height: "42px", width: "auto" }} />
          <span
            className="text-xl tracking-wide"
            style={{ fontFamily: "var(--font-dm-serif), serif", color: "#5A2A5D", fontWeight: 600 }}
          >
            AMETHYST
          </span>
        </Link>

        <div className="hidden md:block ml-auto">
          <Link
            href="#appointment"
            className="inline-flex items-center gap-2 bg-[#5A2A5D] border border-[#5A2A5D] text-white text-xs font-medium uppercase tracking-[0.1em] px-5 py-2.5 rounded-full hover:bg-[#4A1F4D] hover:border-[#4A1F4D] transition-all duration-300"
          >
            <img src="/logo-cream.svg" alt="" className="h-5 w-auto" />
            Book Appointment
          </Link>
        </div>

        <button
          className="md:hidden ml-auto w-10 h-10 rounded-full bg-[#5A2A5D] text-white flex items-center justify-center transition-transform hover:scale-105"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden mx-4 mt-2 bg-[#F7F3EF] rounded-3xl border border-[#E4DFE8] px-6 py-5 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-xs font-medium uppercase tracking-[0.12em] text-[#2E2E2E]"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="#appointment" className="bg-[#5A2A5D] text-white text-xs font-medium uppercase tracking-[0.1em] px-5 py-3 rounded-full text-center hover:bg-[#4A1F4D] transition-all duration-300 flex items-center justify-center gap-2" onClick={() => setMenuOpen(false)}>
            <img src="/logo-cream.svg" alt="" className="h-5 w-auto" />
            Book Appointment
          </Link>
        </div>
      )}
    </nav>
  );
}