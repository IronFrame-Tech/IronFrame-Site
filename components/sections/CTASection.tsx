'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { WHATSAPP_URL, WHATSAPP_WEB, WHATSAPP_NET } from '@/lib/utils'
import { WhatsAppIcon } from '@/components/ui'

const points = [
  'Diagnóstico técnico gratuito',
  'Projeto personalizado',
  'Suporte após entrega',
]

export function CTASection() {
  return (
    <section id="contato" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-800 to-[#0d1a2e]" />
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-blue-400/15 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <div className="inline-flex items-center gap-2 mb-7 px-4 py-2 bg-white/10 border border-white/20 rounded-full">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-white/90 uppercase tracking-widest">
              Atendimento disponível
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5 font-display">
            Sua empresa merece tecnologia
            <br />
            que{' '}
            realmente funciona.
          </h2>

          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Seja um site que converte, uma rede que não cai ou ambos — entre em contato e receba uma
            avaliação técnica gratuita.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            {points.map((p) => (
              <div key={p} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-sm text-white/80">{p}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-700 font-bold rounded-2xl text-base transition-all hover:shadow-2xl hover:shadow-blue-900/40 group"
            >
              <WhatsAppIcon className="w-5 h-5 text-green-600" />
              Falar no WhatsApp
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={WHATSAPP_WEB}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 bg-blue-600/30 hover:bg-blue-600/50 border border-blue-300/20 text-white font-semibold rounded-2xl text-sm transition-all"
              >
                Preciso de um site
              </a>
              <a
                href={WHATSAPP_NET}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 bg-cyan-600/20 hover:bg-cyan-600/35 border border-cyan-300/20 text-cyan-100 font-semibold rounded-2xl text-sm transition-all"
              >
                Preciso de rede
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
