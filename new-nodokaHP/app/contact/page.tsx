import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactHero from '@/components/contact/ContactHero'
import ContactSection from '@/components/contact/ContactSection'

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactHero />
      <ContactSection />
      <Footer />
    </main>
  )
}
