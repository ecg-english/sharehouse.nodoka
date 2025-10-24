import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'シェアハウス のどか | のんびりスローライフで情熱的に生きる',
  description: 'シェアハウスのどかは、のんびりスローライフの中に情熱を持って全力で人生を生きる人たちが集まる場所です。仕事や趣味など自分のやりたいことに全力な人たちと出会い、最高の生活を送りませんか？',
  keywords: 'シェアハウス, のどか, 神戸, スローライフ, 入居者募集',
  openGraph: {
    title: 'シェアハウス のどか',
    description: 'のんびりスローライフで情熱的に生きる',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
