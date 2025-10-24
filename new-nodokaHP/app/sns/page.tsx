import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SNSHero from '@/components/sns/SNSHero'
import SNSSection from '@/components/sns/SNSSection'

export default function SNSPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SNSHero />
      <SNSSection />
      <Footer />
    </main>
  )
}
