'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Zap, Shield } from 'lucide-react'
import Link from 'next/link'
import { WHATSAPP_URL } from '@/lib/utils'
import { WhatsAppIcon } from '@/components/ui'

const pills = [
  { icon: CheckCircle, label: 'Compromisso total', sub: 'Não desaparecemos' },
  { icon: Zap, label: 'Alta performance', sub: 'Web e redes' },
  { icon: Shield, label: 'Suporte contínuo', sub: 'Sempre disponível' },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#070d1b]">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-blue-600/8 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute top-2/3 right-0 w-[400px] h-[400px] bg-cyan-500/6 rounded-full blur-[100px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: `linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#070d1b] to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="flex flex-col lg:flex-row lg:items-center gap-14">
          {/* Left */}
          <div className="flex-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <p
                className="text-2xl sm:text-3xl font-extrabold leading-tight"
                style={{ fontFamily: 'Syne, sans-serif', letterSpacing: '-0.02em' }}
              >
                <span className="text-white">Tecnologia séria</span>{' '}
                <span className="text-gradient-blue">para negócios sérios.</span>
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-white font-extrabold mb-6"
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 'clamp(2.4rem, 4vw, 3.6rem)',
                lineHeight: 1.18,
                letterSpacing: '-0.025em',
              }}
            >
              A fundação tecnológica{' '}
              <br className="hidden sm:block" />
              <span className="text-gradient-blue">da sua empresa.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-slate-400 text-lg leading-relaxed mb-10"
            >
              Sua rede não pode cair. Seu site não pode ser genérico.
              Resolvemos os dois — com processo real, equipe fixa e{' '}
              <strong className="text-slate-200 font-medium">
                suporte que existe de verdade depois da entrega.
              </strong>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-base transition-all hover:shadow-lg hover:shadow-blue-500/30 active:scale-[0.97]"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Falar no WhatsApp
              </a>
              <Link
                href="/#servicos"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold rounded-xl text-base transition-all"
              >
                Ver serviços
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Two service pillars */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="/desenvolvimento-web"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600/10 border border-blue-500/20 hover:border-blue-400/50 rounded-xl text-sm text-blue-300 font-medium transition-all group"
              >
                <span className="w-2 h-2 bg-blue-400 rounded-full" />
                Desenvolvimento Web
                <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link
                href="/infraestrutura-redes"
                className="flex items-center gap-2 px-4 py-2 bg-cyan-600/10 border border-cyan-500/20 hover:border-cyan-400/50 rounded-xl text-sm text-cyan-300 font-medium transition-all group"
              >
                <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                Infraestrutura de Redes
                <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </motion.div>
          </div>

          {/* Right: pills (desktop only) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:flex flex-col gap-4 flex-shrink-0"
          >
            {pills.map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className="bg-[#0d1a2e]/80 backdrop-blur-sm border border-white/8 rounded-2xl p-4 flex items-center gap-3 w-64"
              >
                <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{label}</div>
                  <div className="text-slate-500 text-xs">{sub}</div>
                </div>
              </div>
            ))}

            {/* Mini stats */}
            <div className="mt-2 grid grid-cols-3 gap-2">
              {[
                { v: 'Direto', l: 'Atendimento' },
                { v: 'Brasília', l: 'Distrito Federal' },
                { v: '100%', l: 'Seu código' },
              ].map(({ v, l }) => (
                <div key={l} className="bg-[#0d1a2e]/60 border border-white/5 rounded-xl p-3 text-center">
                  <div className="text-white font-bold text-sm font-display">{v}</div>
                  <div className="text-slate-600 text-[10px]">{l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
