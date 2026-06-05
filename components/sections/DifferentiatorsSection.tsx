'use client'

import { motion } from 'framer-motion'
import {
  CheckCircle,
  KeyRound,
  HeadphonesIcon,
  TrendingUp,
  Shield,
  GitBranch,
  Sparkles,
  Package,
  UserCheck,
} from 'lucide-react'
import { SectionHeader } from '@/components/ui'

const differentials = [
  {
    icon: CheckCircle,
    title: 'Continuidade garantida',
    description:
      'Sem rotatividade, sem surpresas, sem desaparecer depois da entrega.',
    accent: 'blue',
  },
  {
    icon: KeyRound,
    title: 'Você é dono de tudo',
    description:
      'Domínio, hospedagem e código ficam no seu nome. Racks e documentação de rede são seus. Se decidir sair, leva tudo.',
    accent: 'blue',
  },
  {
    icon: HeadphonesIcon,
    title: 'Suporte humano e direto',
    description:
      'Fale com quem criou seu site ou instalou sua rede. Sem call center, sem tickets sem resposta.',
    accent: 'blue',
  },
  {
    icon: Sparkles,
    title: 'Instalações organizadas',
    description:
      'Cada cabo passa pelo caminho correto. Rack etiquetado, código limpo, documentação completa.',
    accent: 'cyan',
  },
  {
    icon: Package,
    title: 'Equipamentos profissionais',
    description:
      'Usamos marcas líderes: Cisco, Ubiquiti, MikroTik para redes. Stack moderna e escalável para web.',
    accent: 'cyan',
  },
  {
    icon: Shield,
    title: 'Segurança em tudo',
    description:
      'VLANs e firewall nas redes. HTTPS, backups e monitoramento nos sites. Nenhum atalho que comprometa a segurança.',
    accent: 'cyan',
  },
  {
    icon: TrendingUp,
    title: 'Foco em resultado real',
    description:
      'Não fazemos sites bonitos nem redes que "funcionam". Fazemos sites que convertem e redes que não caem.',
    accent: 'blue',
  },
  {
    icon: UserCheck,
    title: 'Atendimento personalizado',
    description:
      'Cada projeto começa com um diagnóstico completo. A solução é moldada para a realidade do seu ambiente.',
    accent: 'cyan',
  },
  {
    icon: GitBranch,
    title: 'Processo estruturado',
    description:
      'Briefing, arquitetura, execução e testes. Nada improvisado — da primeira reunião à entrega final.',
    accent: 'blue',
  },
]

export function DifferentiatorsSection() {
  return (
    <section className="py-32 lg:py-44 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0d1a2e] to-slate-900" />
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(59,130,246,0.1) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/6 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Por que a IronFrame"
          title="O padrão que separa\nprofissionais de improvisadores"
          subtitle="Não instalamos cabos e nem fazemos sites. Entregamos infraestrutura que funciona e presença digital que converte."
          centered
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {differentials.map(({ icon: Icon, title, description, accent }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative bg-white/4 hover:bg-white/7 border border-white/8 rounded-2xl p-6 transition-all duration-300 cursor-default ${
                accent === 'cyan'
                  ? 'hover:border-cyan-400/25'
                  : 'hover:border-blue-400/25'
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                    accent === 'cyan'
                      ? 'bg-cyan-500/15 group-hover:bg-cyan-500/25'
                      : 'bg-blue-500/15 group-hover:bg-blue-500/25'
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${accent === 'cyan' ? 'text-cyan-300' : 'text-blue-300'}`}
                    strokeWidth={1.75}
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-2">{title}</h3>
                  <p className="text-sm text-blue-100/55 leading-relaxed">{description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
