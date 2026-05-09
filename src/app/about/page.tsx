import HeroAboutSection from '@/components/sections/about/HeroAboutSection'
import ImageStripSection from '@/components/sections/about/ImageStripSection'
import DoctorBioSection from '@/components/sections/about/DoctorBioSection'
import StatsSection from '@/components/sections/about/StatsSection'
import HowWeCareSection from '@/components/sections/about/HowWeCareSection'
import GalleryGridSection from '@/components/sections/about/GalleryGridSection'
import AboutCTASection from '@/components/sections/about/AboutCTASection'

export const metadata = {
  title: 'About Dr. Shruthi Pavana Janardhanan | Amethyst Skin Clinic',
  description: 'Board-certified dermatologist with 8 years of experience in clinical and aesthetic dermatology. MD from Madras Medical College, DNB, MRCP SCE Dermatology (UK).',
}

export default function AboutPage() {
  return (
    <main>
      <HeroAboutSection />
      <ImageStripSection />
      <DoctorBioSection />
      <StatsSection />
      <HowWeCareSection />
      <GalleryGridSection />
      <AboutCTASection />
    </main>
  )
}