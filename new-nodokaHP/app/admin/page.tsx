import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AdminPanel from '@/components/admin/AdminPanel'

export default function AdminPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AdminPanel />
      <Footer />
    </main>
  )
}
