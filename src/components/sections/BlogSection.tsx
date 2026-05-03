import Link from "next/link";
import { blogPosts } from "@/lib/data/blog";

const featured = blogPosts[0];
const others = blogPosts.slice(1);

export default function Blog() {
  return (
    <section className="py-28 bg-[#F7F3EF]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 border border-[#E4DFE8] rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8E5C8F]"></span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8E5C8F]">Skin Insights</span>
          </div>
          <h2
            className="text-4xl lg:text-5xl text-[#2E2E2E]"
            style={{ fontFamily: "var(--font-dm-serif), serif" }}
          >
            Helpful tips and expert advice
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white border border-[#E4DFE8] rounded-[40px] overflow-hidden hover:shadow-lg transition-all duration-300 group">
            <div
              className="w-full h-52"
              style={{ background: "linear-gradient(135deg, #F2EAF3, #CFA1A8)" }}
            />
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-medium uppercase tracking-wider text-[#8E5C8F] border border-[#E4DFE8] rounded-full px-3 py-1">
                  {featured.category}
                </span>
                <span className="text-xs text-[#6B6570]">{featured.date}</span>
              </div>
              <h3
                className="text-2xl text-[#2E2E2E] leading-snug mb-6 group-hover:text-[#5A2A5D] transition-colors duration-300"
                style={{ fontFamily: "var(--font-dm-serif), serif" }}
              >
                {featured.title}
              </h3>
              <Link href="#" className="inline-flex items-center gap-2 text-sm font-medium text-[#2E2E2E] border border-[#E4DFE8] rounded-full px-5 py-2 hover:bg-[#5A2A5D] hover:text-white hover:border-[#5A2A5D] transition-all duration-300">
                Read article →
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {others.map((post, i) => (
              <Link
                key={i}
                href="#"
                className="group bg-white border border-[#E4DFE8] rounded-[32px] p-6 hover:border-[#8E5C8F] hover:shadow-md transition-all duration-300 flex items-center gap-4"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${i % 2 === 0 ? "#F2EAF3, #CFA1A8" : "#CFA1A8, #8E5C8F"})` }}
                />
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-medium uppercase tracking-wider text-[#8E5C8F] border border-[#E4DFE8] rounded-full px-2.5 py-0.5">
                      {post.category}
                    </span>
                    <span className="text-[10px] text-[#6B6570]">{post.date}</span>
                  </div>
                  <h3
                    className="text-sm text-[#2E2E2E] group-hover:text-[#5A2A5D] transition-colors duration-300 leading-snug"
                    style={{ fontFamily: "var(--font-dm-serif), serif" }}
                  >
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}