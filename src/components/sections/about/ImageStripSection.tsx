'use client'

import Image from 'next/image'

const stripImages = [
  { src: '/images/clinic/strip-1.jpg', alt: 'Amethyst Skin Clinic treatment' },
  { src: '/images/clinic/strip-2.jpg', alt: 'Amethyst Skin Clinic procedure' },
  { src: '/images/clinic/strip-3.jpg', alt: 'Amethyst Skin Clinic interior' },
  { src: '/images/clinic/strip-4.jpg', alt: 'Amethyst Skin Clinic doctor' },
]

export default function ImageStripSection() {
  return (
    <section className="py-16 overflow-hidden" style={{ background: '#F7F3EF' }}>
      <div className="flex gap-5 px-6">
        {stripImages.map((img, i) => (
          <div key={i} className="relative flex-shrink-0 rounded-2xl overflow-hidden" style={{ width: '320px', height: '400px' }}>
            <Image src={img.src} alt={img.alt} fill className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center" style={{ background: '#EFE7DF' }}>
              <span className="text-sm font-medium" style={{ color: '#9A94A0' }}>
                Clinic Photo {i + 1}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}