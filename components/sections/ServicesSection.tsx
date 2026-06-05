'use client'

import { motion } from 'framer-motion'
import { Globe, Megaphone, Cpu, Layers, Cable, Wifi, Network, Router, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { SectionHeader } from '@/components/ui'

const webServices = [
  {
    icon: Globe,
    title: 'Sites Institucionais',
    description: 'Presença digital profissional para sua empresa. Design responsivo, SEO otimizado e velocidade máxima.',
    price: 'A partir de R$ 1.500',
  },
  {
    icon: Megaphone,
    title: 'Landing Pages',
    description: 'Páginas focadas em converter visitantes em clientes. Ideal para campanhas e captação de leads.',
    price: 'A partir de R$ 900',
  },
  {
    icon: Cpu,
    title: 'Sistemas Web',
    description: 'Automatize processos internos. Agendamentos, cadastros, relatórios e painéis administrativos.',
    price: 'Sob consulta',
  },
  {
    icon: Layers,
    title: 'Parceria SaaS',
    description: 'Tem uma ideia de produto digital? Entramos como sócio técnico e cuidamos de toda a tecnologia.',
    price: 'Modelo equity',
  },
]

const netServices = [
  {
    icon: Cable,
    title: 'Cabeamento Estruturado',
    description: 'Cabos Cat6/Cat6A instalados com organização impecável, documentação completa e sem improvisos.',
  },
  {
    icon: Wifi,
    title: 'Wi-Fi de Alta Performance',
    description: 'Cobertura projetada com Access Points profissionais para sinal forte em todos os ambientes.',
  },
  {
    icon: Network,
    title: 'Instalação de Switches',
    description: 'Configuração com priorização de tráfego e separação de redes para mais controle e segurança.',
  },
  {
    icon: Router,
    title: 'Configuração de Roteadores',
    description: 'Controle total da sua rede com proteção, acesso remoto seguro e segmentação por VLAN.',
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-32 lg:py-44 bg-[#070d1b] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Serviços"
          title="Uma empresa, dois pilares de tecnologia"
          subtitle="Desenvolvimento web e infraestrutura de redes — tudo com o mesmo padrão de qualidade e processo estruturado."
          centered
          className="mb-20"
        />

        {/* Web Development */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <div className="w-2 h-6 bg-blue-500 rounded-full" />
                <h3 className="text-white text-xl font-bold font-display">Desenvolvimento Web</h3>
              </div>
              <p className="text-slate-500 text-sm ml-5">Sites, landing pages, sistemas e parcerias SaaS</p>
            </div>
            <Link
              href="/desenvolvimento-web"
              className="hidden sm:flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors group"
            >
              Ver tudo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {webServices.map(({ icon: Icon, title, description, price }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group bg-[#0d1a2e] border border-white/5 hover:border-blue-500/25 rounded-2xl p-6 card-hover cursor-default"
              >
                <div className="w-11 h-11 bg-blue-600/15 group-hover:bg-blue-600/25 rounded-xl flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-5 h-5 text-blue-400" strokeWidth={1.75} />
                </div>
                <h4 className="text-white font-bold mb-2 group-hover:text-blue-300 transition-colors">
                  {title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{description}</p>
                <span className="text-blue-400 text-xs font-semibold">{price}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 sm:hidden">
            <Link
              href="/desenvolvimento-web"
              className="flex items-center gap-2 text-blue-400 text-sm font-medium"
            >
              Ver serviços de web completos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Network Infrastructure */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <div className="w-2 h-6 bg-cyan-500 rounded-full" />
                <h3 className="text-white text-xl font-bold font-display">Infraestrutura de Redes</h3>
              </div>
              <p className="text-slate-500 text-sm ml-5">Cabeamento, Wi-Fi, switches e roteadores</p>
            </div>
            <Link
              href="/infraestrutura-redes"
              className="hidden sm:flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors group"
            >
              Ver tudo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {netServices.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group bg-[#0d1a2e] border border-white/5 hover:border-cyan-500/25 rounded-2xl p-6 card-hover cursor-default"
              >
                <div className="w-11 h-11 bg-cyan-600/15 group-hover:bg-cyan-600/25 rounded-xl flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-5 h-5 text-cyan-400" strokeWidth={1.75} />
                </div>
                <h4 className="text-white font-bold mb-2 group-hover:text-cyan-300 transition-colors">
                  {title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 sm:hidden">
            <Link
              href="/infraestrutura-redes"
              className="flex items-center gap-2 text-cyan-400 text-sm font-medium"
            >
              Ver serviços de redes completos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
