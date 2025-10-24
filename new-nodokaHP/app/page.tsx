import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/sections/HeroSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import GallerySection from '@/components/sections/GallerySection'
import PhotoShowcaseSection from '@/components/sections/PhotoShowcaseSection'
import InstagramStyleSection from '@/components/sections/InstagramStyleSection'
import MoveInSection from '@/components/sections/MoveInSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import AccessSection from '@/components/sections/AccessSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <GallerySection />
      <PhotoShowcaseSection />
      <InstagramStyleSection />
      <MoveInSection />
      <TestimonialsSection />
      <AccessSection />
      <Footer />
    </main>
  )
}
