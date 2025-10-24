import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MoveInGuideHero from '@/components/movein-guide/MoveInGuideHero'
import FlowSection from '@/components/movein-guide/FlowSection'
import StepDetails from '@/components/movein-guide/StepDetails'

export default function MoveInGuidePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <MoveInGuideHero />
      <FlowSection />
      <StepDetails />
      <Footer />
    </main>
  )
}
