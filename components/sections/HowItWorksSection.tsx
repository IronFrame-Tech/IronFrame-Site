import { MessageSquare, Palette, Rocket, CheckCircle } from 'lucide-react'
import { SectionHeader } from '@/components/ui'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Conversa inicial',
    description:
      'Você nos conta sobre seu projeto pelo WhatsApp ou formulário. Entendemos o que você precisa antes de propor qualquer solução.',
  },
  {
    number: '02',
    icon: Palette,
    title: 'Proposta e planejamento',
    description:
      'Apresentamos um orçamento claro, prazo definido e arquitetura da solução — web ou rede. Nada começa sem sua aprovação.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Execução e entrega',
    description:
      'Desenvolvemos com qualidade. Você acompanha cada etapa e aprova antes de irmos ao ar ou finalizarmos a instalação.',
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Suporte contínuo',
    description:
      'Após a entrega, cuidamos de tudo: atualizações, segurança, backups e ajustes. Você tem um parceiro de tecnologia de longo prazo.',
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#070d1b] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Como funciona"
          title="Do primeiro contato à solução no ar"
          subtitle="Processo claro, documentado e sem surpresas. Você acompanha cada etapa."
          centered
          className="mb-16"
        />

        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-blue-500/25 to-transparent" />

          {steps.map(({ number, icon: Icon, title, description }, idx) => (
            <div key={number} className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-[#0d1a2e] border-2 border-blue-500/25 rounded-2xl flex items-center justify-center mx-auto">
                  <Icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center text-xs text-white font-bold font-display">
                  {idx + 1}
                </div>
              </div>
              <h3 className="text-white font-bold mb-2 font-display">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
