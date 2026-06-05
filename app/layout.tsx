import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { LGPDBanner } from '@/components/ui'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  icons: { icon: '/images/logo.png' },
  title: 'IronFrame — Do cabo ao código',
  description:
    'Infraestrutura de redes profissional e desenvolvimento web para empresas que levam tecnologia a sério. Sites, landing pages, sistemas e cabeamento estruturado em Brasília, DF.',
  keywords:
    'infraestrutura de redes, desenvolvimento web, site para empresa, landing page, cabeamento estruturado, Wi-Fi corporativo, sistema web, Brasília',
  openGraph: {
    title: 'IronFrame — Do cabo ao código',
    description:
      'Infraestrutura de redes e desenvolvimento web. Tecnologia séria para negócios sérios.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${syne.variable} ${dmSans.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <LGPDBanner />
      </body>
    </html>
  )
}
