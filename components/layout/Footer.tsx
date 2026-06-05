import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { WHATSAPP_URL, WHATSAPP_WEB, WHATSAPP_NET } from '@/lib/utils'
import { WhatsAppIcon } from '@/components/ui'

const webLinks = [
  { label: 'Sites Institucionais', href: '/desenvolvimento-web#sites' },
  { label: 'Landing Pages', href: '/desenvolvimento-web#landing' },
  { label: 'Sistemas Web', href: '/desenvolvimento-web#sistemas' },
  { label: 'Parceria SaaS', href: '/desenvolvimento-web#saas' },
]

const netLinks = [
  { label: 'Cabeamento Estruturado', href: '/infraestrutura-redes#cabeamento' },
  { label: 'Wi-Fi Alta Performance', href: '/infraestrutura-redes#wifi' },
  { label: 'Instalação de Switches', href: '/infraestrutura-redes#switches' },
  { label: 'Configuração de Roteadores', href: '/infraestrutura-redes#roteadores' },
]

const companyLinks = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contato', href: '/contato' },
  { label: 'Política de Privacidade', href: '/politica-de-privacidade' },
]

export function Footer() {
  return (
    <footer className="bg-[#040b17] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-5 w-fit">
              <img
                src="/images/logo.png"
                alt="IronFrame"
                className="h-12 w-auto object-contain"
                style={{  }}
              />
            </Link>
            <p
              className="text-base font-bold text-slate-300 mb-1"
              style={{ fontFamily: 'Syne, sans-serif', letterSpacing: '-0.01em' }}
            >
              Tecnologia séria para negócios sérios.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed mb-5 max-w-xs">
              Do cabo ao código — infraestrutura de redes e desenvolvimento web.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Brasília, DF</span>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 px-4 py-2.5 bg-green-600/10 hover:bg-green-600/20 border border-green-600/20 hover:border-green-500/40 text-green-400 font-medium rounded-xl text-sm transition-all"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              WhatsApp disponível
            </a>
          </div>

          {/* Dev Web */}
          <div>
            <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4 font-display">
              Dev Web
            </h4>
            <ul className="space-y-2.5">
              {webLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-slate-500 hover:text-blue-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 bg-slate-700 group-hover:bg-blue-400 rounded-full transition-colors" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes */}
          <div>
            <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-4 font-display">
              Infraestrutura
            </h4>
            <ul className="space-y-2.5">
              {netLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-slate-500 hover:text-cyan-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 bg-slate-700 group-hover:bg-cyan-400 rounded-full transition-colors" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 font-display">
              Empresa
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-slate-500 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} IronFrame. Todos os direitos reservados.
          </p>
          <p className="text-xs text-slate-700">Brasília, DF — Brasil</p>
        </div>
      </div>
    </footer>
  )
}
