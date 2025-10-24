import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FAQHero from '@/components/faq/FAQHero'
import FAQSection from '@/components/faq/FAQSection'

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <FAQHero />
      <FAQSection />
      <Footer />
    </main>
  )
}
