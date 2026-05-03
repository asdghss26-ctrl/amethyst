"use client";
import { useState } from "react";
import { Reveal } from "../ui/RevealAnimation";
import { contactInfo } from "@/lib/data/navigation";

interface FormData {
  name: string
  email: string
  phone: string
  message: string
  service: string
}

export default function Appointment() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "", message: "", service: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="appointment" className="py-28 bg-[#FBF8F5]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-[#EFE7DF] rounded-[48px] p-8 md:p-14 text-center">
            <div className="py-12">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl text-[#2E2E2E] mb-4" style={{ fontFamily: "var(--font-dm-serif), serif" }}>
                Thank You!
              </h2>
              <p className="text-[#6B6570] text-lg">
                Your appointment request has been submitted successfully.<br />
                We will contact you shortly.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="appointment" className="py-28 bg-[#FBF8F5]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-[#EFE7DF] rounded-[48px] p-8 md:p-14">
          <div className="grid lg:grid-cols-2 gap-12">
            <Reveal delay={0.1}>
              <div>
                <div className="inline-flex items-center gap-2 border border-[#E4DFE8] rounded-full px-4 py-1.5 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8E5C8F]"></span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8E5C8F]">Get in touch</span>
                </div>
                <h2
                  className="text-4xl lg:text-5xl text-[#2E2E2E] mb-5"
                  style={{ fontFamily: "var(--font-dm-serif), serif" }}
                >
                  Request an<br />appointment
                </h2>
                <p className="text-sm text-[#6B6570] leading-relaxed mb-10">
                  Fill out the form and we&apos;ll contact you shortly to confirm your consultation.
                </p>
                <div className="bg-white rounded-[32px] p-6 border border-[#E4DFE8] shadow-sm space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#2E2E2E] mb-2">General Inquiries</p>
                  {contactInfo.map((item, i) => (
                    <a key={i} href={item.href} className="flex items-start gap-3 group">
                      <span className="text-base">{item.icon}</span>
                      <span className="text-sm text-[#2E2E2E] group-hover:text-[#5A2A5D] transition-colors leading-relaxed">{item.text}</span>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { name: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
                    { name: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-xs font-medium text-[#2E2E2E] mb-1.5 uppercase tracking-wider">{field.label}</label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={form[field.name as keyof typeof form]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        required={field.name !== "phone"}
                        className="w-full bg-white border border-[#E4DFE8] rounded-2xl px-5 py-3.5 text-sm text-[#2E2E2E] placeholder-[#9A94A0] focus:outline-none focus:border-[#5A2A5D] focus:ring-1 focus:ring-[#5A2A5D]/20 transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#2E2E2E] mb-1.5 uppercase tracking-wider">Phone Number</label>
                  <input
                    type="tel" name="phone" value={form.phone} onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-white border border-[#E4DFE8] rounded-2xl px-5 py-3.5 text-sm text-[#2E2E2E] placeholder-[#9A94A0] focus:outline-none focus:border-[#5A2A5D] focus:ring-1 focus:ring-[#5A2A5D]/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#2E2E2E] mb-1.5 uppercase tracking-wider">Treatment of Interest</label>
                  <select
                    name="service" value={form.service} onChange={handleChange}
                    className="w-full bg-white border border-[#E4DFE8] rounded-2xl px-5 py-3.5 text-sm text-[#2E2E2E] focus:outline-none focus:border-[#5A2A5D] focus:ring-1 focus:ring-[#5A2A5D]/20 transition-all duration-300"
                  >
                    <option value="">Select a treatment</option>
                    <option value="acne">Acne &amp; Skin Health</option>
                    <option value="botox">Botox &amp; Fillers</option>
                    <option value="laser">Laser Treatments</option>
                    <option value="aging">Anti-Aging Solutions</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#2E2E2E] mb-1.5 uppercase tracking-wider">Message</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    placeholder="Tell us about your skin concerns..." rows={4}
                    className="w-full bg-white border border-[#E4DFE8] rounded-2xl px-5 py-3.5 text-sm text-[#2E2E2E] placeholder-[#9A94A0] focus:outline-none focus:border-[#5A2A5D] focus:ring-1 focus:ring-[#5A2A5D]/20 transition-all duration-300 resize-none"
                  />
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" id="consent" required className="mt-0.5 accent-[#5A2A5D]" />
                  <label htmlFor="consent" className="text-xs text-[#6B6570]">
                    I agree to be contacted regarding my appointment request.
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#5A2A5D] text-white py-4 rounded-full text-sm font-medium hover:bg-[#4A1F4D] transition-all duration-300 hover:-translate-y-0.5 tracking-wide disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Submitting..." : "Book an Appointment"}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}