import type { Metadata } from 'next'
import {
  Cable, Wifi, Network, Router, CheckCircle2, ArrowRight, Check, X,
  Sparkles, Package, ShieldCheck, UserCheck, TrendingUp, Lock,
  Target, Award, Users,
} from 'lucide-react'
import { SectionHeader, Badge, Button, WhatsAppIcon, NetworkTopology } from '@/components/ui'
import { WHATSAPP_NET } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Infraestrutura de Redes — IronFrame',
  description:
    'Cabeamento estruturado, Wi-Fi de alta performance, switches e roteadores para residências e empresas em Brasília, DF. Projeto e instalação com padrão profissional.',
}

/* ─── Data ───────────────────────────────────────────────── */

const netProblems = [
  'Rede que cai nos momentos mais críticos do dia',
  'Cabos instalados sem projeto — impossível de expandir depois',
  'Wi-Fi com pontos mortos que prejudicam o trabalho',
  'Sem responsável claro quando algo para de funcionar',
  'Equipamentos de baixa qualidade que falham cedo demais',
]

const netSolutions = [
  'Projeto técnico detalhado antes de qualquer instalação',
  'Cabeamento organizado com rack estruturado e documentado',
  'Cobertura Wi-Fi projetada especificamente para o ambiente',
  'Um responsável fixo e direto para todo o suporte',
  'Apenas equipamentos profissionais com garantia de mercado',
]

const services = [
  {
    id: 'cabeamento',
    icon: Cable,
    title: 'Cabeamento Estruturado',
    description:
      'Internet rápida e estável em todos os pontos do ambiente. Cabos Cat6/Cat6A instalados com organização impecável, sem improvisos e com documentação completa.',
    includes: [
      'Cabos Cat6 ou Cat6A de alta qualidade',
      'Passagem em canaletas e eletrodutos',
      'Identificação e etiquetagem completa',
      'Rack organizado e documentado',
      'Teste de conectividade em todos os pontos',
    ],
  },
  {
    id: 'wifi',
    icon: Wifi,
    title: 'Wi-Fi de Alta Performance',
    description:
      'Sinal forte em todos os ambientes, sem quedas e sem pontos mortos. Cobertura projetada com Access Points profissionais para o tamanho exato do seu espaço.',
    includes: [
      'Estudo de cobertura do ambiente',
      'Access Points Ubiquiti ou TP-Link Business',
      'Roaming inteligente entre APs',
      'Rede de visitantes separada (SSID)',
      'Portal captivo opcional',
    ],
  },
  {
    id: 'switches',
    icon: Network,
    title: 'Instalação de Switches',
    description:
      'Conecte dezenas de dispositivos com velocidade e sem conflitos. Configuração com priorização de tráfego e separação de redes para mais controle e segurança.',
    includes: [
      'Switches gerenciáveis e não gerenciáveis',
      'Configuração de VLANs',
      'QoS (priorização de tráfego)',
      'Monitoramento de portas',
      'Redundância de link quando necessário',
    ],
  },
  {
    id: 'roteadores',
    icon: Router,
    title: 'Configuração de Roteadores',
    description:
      'Controle total da sua rede com proteção contra invasões, acesso remoto seguro e separação entre a rede de trabalho e a rede de visitantes.',
    includes: [
      'Configuração de firewall',
      'VPN para acesso remoto seguro',
      'Segmentação de redes por VLAN',
      'Balanceamento de links múltiplos',
      'Monitoramento e alertas',
    ],
  },
]

const differentials = [
  {
    icon: Sparkles,
    title: 'Instalações limpas e organizadas',
    description:
      'Cada cabo passa pelo caminho correto. Rack etiquetado, documentação completa e acabamento visual que impressiona qualquer visitante técnico.',
  },
  {
    icon: Package,
    title: 'Equipamentos profissionais',
    description:
      'Usamos apenas marcas líderes: Cisco, Ubiquiti, MikroTik, TP-Link Business — equipamentos robustos com garantia de desempenho.',
  },
  {
    icon: ShieldCheck,
    title: 'Alta confiabilidade',
    description:
      'Infraestrutura projetada para operar sem interrupções. Redundância, proteção contra falhas e configurações que priorizam a estabilidade.',
  },
  {
    icon: UserCheck,
    title: 'Atendimento personalizado',
    description:
      'Cada projeto começa com diagnóstico completo do ambiente antes de propor qualquer solução — garantindo o que é ideal para a sua realidade.',
  },
  {
    icon: TrendingUp,
    title: 'Infra preparada para crescer',
    description:
      'Projetamos pensando no futuro. Adicionar dispositivos, expandir andares ou integrar novos sistemas — sua rede está preparada.',
  },
  {
    icon: Lock,
    title: 'Segurança e estabilidade',
    description:
      'Segmentação por VLANs, políticas de firewall, proteção contra acessos não autorizados e redes isoladas para visitantes.',
  },
]

const segments = [
  { icon: '🏥', label: 'Consultórios médicos' },
  { icon: '🏢', label: 'Escritórios corporativos' },
  { icon: '🏠', label: 'Residências de alto padrão' },
  { icon: '🏪', label: 'Pequenas e médias empresas' },
  { icon: '🏫', label: 'Espaços educacionais' },
  { icon: '🏨', label: 'Hotéis e pousadas' },
]

const ctaPoints = [
  'Diagnóstico técnico gratuito',
  'Orçamento em 24h',
  'Projeto personalizado',
  'Suporte após instalação',
]

const values = [
  {
    icon: Target,
    title: 'Precisão técnica',
    description: 'Cada projeto começa com levantamento técnico detalhado para garantir a solução ideal.',
  },
  {
    icon: Award,
    title: 'Padrão premium',
    description: 'Usamos os melhores materiais, os processos corretos e entregamos o que prometemos.',
  },
  {
    icon: Users,
    title: 'Parceiro de longo prazo',
    description: 'Somos o parceiro de TI que você pode chamar antes, durante e depois do projeto.',
  },
]

/* ─── Component ──────────────────────────────────────────── */

export default function InfraestruturaRedesPage() {
  return (
    <div className="bg-[#070d1b] min-h-screen">

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 bg-[#04111a]">
          <div className="absolute top-0 left-0 w-[650px] h-[650px] bg-cyan-600/14 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.22]"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(6,182,212,0.2) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#070d1b] to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
                <span className="text-slate-600">IronFrame</span>
                <span className="text-slate-700">›</span>
                <span className="text-cyan-400">Infraestrutura de Redes</span>
              </div>

              <Badge color="cyan" className="mb-5">
                <Cable className="w-3 h-3" />
                Cabeamento · Wi-Fi · Switches · Roteadores
              </Badge>

              <h1
                className="text-white font-extrabold mb-6"
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.025em',
                }}
              >
                Rede que não cai.
                <br />
                Cabo que não{' '}
                <span className="text-gradient-cyan">vira bagunça.</span>
                <br />
                Sinal em todo lugar.
              </h1>

              <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
                Projetamos e instalamos infraestrutura de redes com{' '}
                <strong className="text-slate-200">padrão técnico real</strong> —
                sem improvisos, com documentação completa e equipamentos de mercado.
                Para quem não pode depender de uma rede instável.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  { text: 'Padrão profissional de instalação' },
                  { text: 'Wi-Fi de alta performance' },
                  { text: 'Residências e empresas' },
                ].map(({ text }) => (
                  <div key={text} className="flex items-center gap-2 text-sm text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button href={WHATSAPP_NET} variant="cyan" size="lg" external>
                  <WhatsAppIcon />
                  Solicitar orçamento
                </Button>
                <Button href="#servicos-rede" variant="outline-cyan" size="lg">
                  Ver serviços
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Right: network card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-radial from-cyan-500/12 to-transparent rounded-3xl blur-2xl" />
              <div className="relative bg-[#0d1a2e]/70 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-6 lg:p-8 shadow-xl shadow-cyan-500/8">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                    <span className="text-xs font-medium text-slate-400">Rede Operacional</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                    <div className="w-2 h-2 bg-cyan-300 rounded-full opacity-70" />
                    <div className="w-2 h-2 bg-teal-200 rounded-full opacity-40" />
                  </div>
                </div>

                <div className="h-64 lg:h-72">
                  <NetworkTopology />
                </div>

                <div className="mt-4 pt-4 border-t border-white/5 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-sm font-bold text-slate-200">Projeto</p>
                    <p className="text-xs text-slate-500">Personalizado</p>
                  </div>
                  <div className="text-center border-x border-white/5">
                    <p className="text-sm font-bold text-slate-200">Cabos</p>
                    <p className="text-xs text-slate-500">Organizados</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-bold text-cyan-400">Docs</p>
                    <p className="text-xs text-slate-500">Completos</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-[#0d1a2e] border border-cyan-500/25 shadow-lg rounded-2xl px-3 py-2 flex items-center gap-2 animate-[floatUp_4s_ease-in-out_infinite]">
                <div className="w-7 h-7 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <Wifi className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Wi-Fi 6</p>
                  <p className="text-[10px] text-slate-500">Cobertura total</p>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-[#0d1a2e] border border-cyan-500/25 shadow-lg rounded-2xl px-3 py-2 flex items-center gap-2 animate-[floatDown_4s_ease-in-out_infinite]">
                <div className="w-7 h-7 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Documentação</p>
                  <p className="text-[10px] text-slate-500">Completa e organizada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-32 bg-[#070d1b]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="O problema"
            title="Uma rede ruim custa mais\ndo que uma rede boa"
            subtitle="Rede instável significa tempo perdido, clientes insatisfeitos e problemas que aparecem sempre na hora errada."
            centered
            labelColor="cyan"
            className="mb-20"
          />

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-950/5 border border-red-500/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-red-500/20 rounded-xl flex items-center justify-center">
                  <X className="w-4 h-4 text-red-400" />
                </div>
                <h3 className="text-white font-bold text-lg">O que acontece sem infraestrutura profissional</h3>
              </div>
              <ul className="space-y-4">
                {netProblems.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3 h-3 text-red-400" />
                    </div>
                    <span className="text-slate-400 text-sm leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-cyan-950/5 border border-cyan-500/20 rounded-2xl p-6 shadow-lg shadow-cyan-500/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                  <Check className="w-4 h-4 text-cyan-400" />
                </div>
                <h3 className="text-white font-bold text-lg">Como a IronFrame resolve isso</h3>
              </div>
              <ul className="space-y-4">
                {netSolutions.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-cyan-400" />
                    </div>
                    <span className="text-slate-300 text-sm leading-relaxed">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-2xl md:text-3xl text-slate-200 font-light">
              "Rede que não cai começa com{' '}
              <span className="text-gradient-cyan font-bold">projeto, não com improviso.</span>"
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicos-rede" className="py-32 bg-[#050d1a]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Serviços"
            title="Soluções completas de infraestrutura"
            subtitle="Do cabeamento estruturado ao Wi-Fi corporativo — projetos com padrão técnico elevado, organização e garantia de desempenho."
            centered
            labelColor="cyan"
            className="mb-20"
          />

          <div className="grid sm:grid-cols-2 gap-5">
            {services.map(({ id, icon: Icon, title, description, includes }) => (
              <div
                id={id}
                key={title}
                className="group bg-[#0d1a2e] border border-white/5 hover:border-cyan-500/30 rounded-2xl p-7 transition-all"
              >
                <div className="w-12 h-12 bg-cyan-600/20 group-hover:bg-cyan-600/30 rounded-2xl flex items-center justify-center mb-5 transition-colors">
                  <Icon className="w-6 h-6 text-cyan-400" strokeWidth={1.75} />
                </div>
                <h3 className="text-white text-xl font-bold mb-3 font-display">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{description}</p>

                <ul className="space-y-2">
                  {includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-5 border-t border-white/5">
                  <a
                    href={WHATSAPP_NET}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors group"
                  >
                    Solicitar orçamento <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0d1a2e] to-slate-900" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(20,184,166,0.12) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/6 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Por que IronFrame"
            title="O padrão que separa profissionais"
            subtitle="Não instalamos apenas cabos e roteadores. Entregamos uma infraestrutura que funciona, é bonita e dura."
            centered
            labelColor="cyan"
            className="mb-20"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {differentials.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group bg-white/4 hover:bg-white/7 border border-white/8 hover:border-cyan-400/30 rounded-2xl p-6 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-cyan-500/18 group-hover:bg-cyan-500/28 rounded-xl flex items-center justify-center transition-colors">
                    <Icon className="w-5 h-5 text-cyan-300" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-2">{title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Button href={WHATSAPP_NET} variant="cyan" size="lg" external>
              Solicitar avaliação gratuita
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="py-32 bg-[#070d1b]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Quem atendemos"
            title="Ambientes onde a conectividade não pode falhar"
            subtitle="Atendemos principalmente quem não pode se dar ao luxo de ter uma rede instável."
            centered
            labelColor="cyan"
            className="mb-12"
          />

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {segments.map(({ icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 px-5 py-3 bg-[#0d1a2e] border border-cyan-500/10 rounded-2xl text-slate-300 text-sm font-medium hover:border-cyan-500/25 transition-colors"
              >
                <span className="text-lg">{icon}</span>
                {label}
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="grid sm:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col items-center text-center gap-3 p-6 bg-cyan-500/5 border border-cyan-500/12 rounded-2xl"
              >
                <div className="w-11 h-11 bg-[#0d1a2e] border border-cyan-500/25 rounded-xl flex items-center justify-center">
                  <Icon className="w-5 h-5 text-cyan-400" strokeWidth={1.75} />
                </div>
                <h4 className="text-sm font-bold text-white font-display">{title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-700 via-cyan-800 to-[#0d1a2e]" />
        <div
          className="absolute inset-0 opacity-12"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-cyan-400/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-7 px-4 py-2 bg-white/10 border border-white/20 rounded-full">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-white/90 uppercase tracking-widest">
              Atendimento disponível
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5 font-display">
            Sua infraestrutura precisa funcionar com padrão profissional.
          </h2>

          <p className="text-lg text-teal-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Não deixe a instabilidade da rede prejudicar o seu dia a dia. Entre em contato agora e
            receba uma avaliação técnica gratuita do seu ambiente.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            {ctaPoints.map((p) => (
              <div key={p} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="text-sm text-white/80">{p}</span>
              </div>
            ))}
          </div>

          <Button href={WHATSAPP_NET} variant="primary" size="lg" external>
            <WhatsAppIcon />
            Falar no WhatsApp agora
          </Button>
        </div>
      </section>
    </div>
  )
}
