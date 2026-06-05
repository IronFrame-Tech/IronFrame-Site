import type { Metadata } from 'next'
import {
  Globe, Megaphone, Cpu, Layers, ArrowRight, CheckCircle, Check, X, Info,
  Layout, FileText, MessageSquare, BarChart2, MapPin, Search,
  MousePointerClick, Gauge, Lock, Users, CalendarDays, Plug,
  Lightbulb, Code2, Rocket, HandshakeIcon, GitBranch, HeadphonesIcon,
  KeyRound, TrendingUp, Shield,
} from 'lucide-react'
import Link from 'next/link'
import { SectionHeader, Badge, Button, WhatsAppIcon } from '@/components/ui'
import { WHATSAPP_URL, WHATSAPP_WEB, WHATSAPP_SAAS } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Desenvolvimento Web — IronFrame',
  description:
    'Sites institucionais, landing pages e sistemas web para pequenas e médias empresas. Processo estruturado, suporte contínuo e código que é seu.',
}

/* ─── Sections data ──────────────────────────────────────── */

const problems = [
  'Contratar uma agência grande é caro demais e impessoal',
  'Freelancers somem depois de entregar o projeto',
  'Você não tem garantia de suporte quando algo dá errado',
  'Não tem tempo para aprender a mexer em sistemas',
  'Seu site parece desatualizado e afasta clientes',
]

const solutions = [
  'Preços justos com nível de qualidade profissional e processo real',
  'Um responsável fixo: sempre alguém disponível para o seu projeto',
  'Monitoramento, manutenção e suporte inclusos',
  'Você não precisa saber nada de tecnologia — cuidamos de tudo',
  'Sites modernos, rápidos e pensados para converter visitantes',
]

const services = [
  {
    id: 'sites',
    icon: Globe,
    badge: { label: 'Mais popular', color: 'blue' as const },
    title: 'Sites Institucionais',
    description:
      'Presença digital profissional para sua empresa. Apresente seus serviços, equipe e diferenciais de forma clara e impactante para quem pesquisa no Google.',
    features: [
      { icon: Layout, text: 'Design responsivo e moderno' },
      { icon: Search, text: 'SEO otimizado desde o início' },
      { icon: Gauge, text: 'PageSpeed 90+' },
      { icon: MessageSquare, text: 'Formulário de contato' },
      { icon: Lock, text: 'SSL e HTTPS inclusos' },
      { icon: MapPin, text: 'Google Maps integrado' },
    ],
    price: 'A partir de R$ 1.500',
    whatsapp: WHATSAPP_WEB,
  },
  {
    id: 'landing',
    icon: Megaphone,
    badge: { label: 'Alta conversão', color: 'green' as const },
    title: 'Landing Pages',
    description:
      'Páginas focadas em converter visitantes em clientes. Ideal para campanhas de anúncios, lançamentos de produtos e captação de leads.',
    features: [
      { icon: MousePointerClick, text: 'Copywriting estratégico' },
      { icon: Gauge, text: 'PageSpeed 90+' },
      { icon: BarChart2, text: 'Google Analytics configurado' },
      { icon: Plug, text: 'Integração com anúncios Meta/Google' },
      { icon: FileText, text: 'Formulário de captura de leads' },
      { icon: TrendingUp, text: 'A/B testing disponível' },
    ],
    price: 'A partir de R$ 900',
    whatsapp: WHATSAPP_WEB,
  },
  {
    id: 'sistemas',
    icon: Cpu,
    badge: { label: 'Sob medida', color: 'purple' as const },
    title: 'Sistemas Web',
    description:
      'Automatize e digitalize processos internos. Agendamentos, cadastros, relatórios e muito mais — sem planilhas desorganizadas.',
    features: [
      { icon: Lock, text: 'Login e controle de permissões' },
      { icon: Users, text: 'Painel administrativo completo' },
      { icon: BarChart2, text: 'Relatórios em tempo real' },
      { icon: CalendarDays, text: 'Agendamentos integrados' },
      { icon: Plug, text: 'Integrações via API' },
      { icon: Shield, text: 'Segurança e backups automáticos' },
    ],
    price: 'Sob consulta',
    whatsapp: WHATSAPP_WEB,
  },
]

const differentials = [
  {
    icon: CheckCircle,
    title: 'Continuidade garantida',
    description: 'Um responsável fixo. Sem rotatividade, sem surpresas, sem sumir depois da entrega.',
  },
  {
    icon: KeyRound,
    title: 'Você é dono de tudo',
    description: 'Domínio, hospedagem e código ficam no seu nome. Sem lock-in.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Suporte humano e direto',
    description: 'Fale com quem criou o site. Sem call center, sem tickets sem resposta.',
  },
  {
    icon: TrendingUp,
    title: 'Foco em resultados',
    description: 'Fazemos sites que geram contatos, leads e vendas mensuráveis.',
  },
  {
    icon: Shield,
    title: 'Sem fidelidade obrigatória',
    description: 'Cancele quando quiser. Sem multas nem letras miúdas.',
  },
  {
    icon: GitBranch,
    title: 'Processo estruturado',
    description: 'Briefing, design, desenvolvimento, testes. Nada improvisado.',
  },
]

const saasSteps = [
  {
    icon: Lightbulb,
    title: 'Você traz a ideia',
    desc: 'O domínio do negócio, o problema que quer resolver, a visão do produto. Não precisa saber tecnologia.',
  },
  {
    icon: HandshakeIcon,
    title: 'Entramos como sócio técnico',
    desc: 'Participamos do equity. Nosso investimento é o desenvolvimento — não cobramos hora.',
  },
  {
    icon: Code2,
    title: 'Cuidamos de toda a tecnologia',
    desc: 'Arquitetura, desenvolvimento, infraestrutura, segurança, deploy e evolução contínua.',
  },
  {
    icon: Rocket,
    title: 'Lançamos e escalamos juntos',
    desc: 'Do MVP ao produto maduro. Crescemos junto com você, com interesse real no sucesso.',
  },
]

/* ─── Component ──────────────────────────────────────────── */

export default function DesenvolvimentoWebPage() {
  return (
    <div className="bg-[#070d1b] min-h-screen">

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 bg-[#070d1b]">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-purple-700/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: `linear-gradient(rgba(168,85,247,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.12) 1px, transparent 1px)`,
              backgroundSize: '48px 48px',
            }}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#070d1b] to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Coluna esquerda */}
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
                <span className="text-slate-600">IronFrame</span>
                <span className="text-slate-700">›</span>
                <span className="text-blue-400">Desenvolvimento Web</span>
              </div>

              <Badge color="blue" className="mb-5">
                <Code2 className="w-3 h-3" />
                Sites · Landing Pages · Sistemas · SaaS
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
                Sites, landing pages e sistemas
                <br className="hidden sm:block" />
                feitos para{' '}
                <span className="text-gradient-blue">gerar resultado.</span>
              </h1>

              <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
                Da landing page que converte ao sistema que automatiza.{' '}
                <strong className="text-slate-200 font-medium">
                  Sem freelancer sumido, sem agência impessoal — suporte direto com quem fez o seu projeto.
                </strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button href={WHATSAPP_WEB} variant="primary" size="lg" external>
                  <WhatsAppIcon />
                  Solicitar orçamento
                </Button>
                <Button href="#servicos-web" variant="secondary" size="lg">
                  Ver serviços
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              <div className="flex flex-wrap gap-8">
                {[
                  { v: '7 dias', l: 'Entrega de landing pages' },
                  { v: '100%', l: 'Código é seu para sempre' },
                ].map(({ v, l }) => (
                  <div key={l}>
                    <div className="text-2xl text-white font-bold font-display">{v}</div>
                    <div className="text-slate-500 text-sm">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coluna direita: mockup de browser */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-600/10 rounded-3xl blur-2xl scale-110" />

                <div className="relative bg-[#0d1220] border border-white/8 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="bg-[#112040] px-4 py-3 flex items-center gap-3 border-b border-white/5">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/60" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                      <div className="w-3 h-3 rounded-full bg-green-500/60" />
                    </div>
                    <div className="flex-1 bg-[#070d1b] rounded-md h-6 mx-2 flex items-center px-3 gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      <span className="text-slate-500 text-xs">seusite.com.br</span>
                    </div>
                    <div className="w-4 h-4 rounded bg-blue-500/20 border border-blue-500/30" />
                  </div>

                  <div className="p-5 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-white/5">
                      <div className="h-4 w-24 bg-blue-500/40 rounded-md" />
                      <div className="flex gap-3">
                        {[1,2,3,4].map(i => <div key={i} className="h-2 w-10 bg-white/8 rounded" />)}
                        <div className="h-6 w-16 bg-blue-600/50 rounded-lg" />
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-600/15 to-purple-600/10 rounded-xl p-5 space-y-2.5">
                      <div className="h-5 w-3/4 bg-white/25 rounded-md" />
                      <div className="h-5 w-1/2 bg-white/20 rounded-md" />
                      <div className="h-3 w-full bg-white/8 rounded mt-1" />
                      <div className="h-3 w-4/5 bg-white/8 rounded" />
                      <div className="flex gap-2 mt-3">
                        <div className="h-8 w-24 bg-blue-500/60 rounded-lg" />
                        <div className="h-8 w-20 bg-white/10 border border-white/10 rounded-lg" />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { c: 'bg-blue-500/15', b: 'border-blue-500/20' },
                        { c: 'bg-purple-500/10', b: 'border-purple-500/15' },
                        { c: 'bg-green-500/10', b: 'border-green-500/15' },
                      ].map(({ c, b }, i) => (
                        <div key={i} className={`${c} border ${b} rounded-xl p-3 space-y-1.5`}>
                          <div className="w-6 h-6 rounded-lg bg-white/10" />
                          <div className="h-2 w-full bg-white/15 rounded" />
                          <div className="h-2 w-3/4 bg-white/10 rounded" />
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-white/5 flex justify-between items-center">
                      <div className="h-2 w-20 bg-white/8 rounded" />
                      <div className="flex gap-3">
                        {[1,2,3].map(i => <div key={i} className="h-2 w-12 bg-white/6 rounded" />)}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-[#0d1a2e] border border-green-500/25 shadow-lg rounded-xl px-3 py-2 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-green-400">96</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">PageSpeed</p>
                    <p className="text-[10px] text-slate-500">Performance</p>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-[#0d1a2e] border border-blue-500/25 shadow-lg rounded-xl px-3 py-2 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Search className="w-3 h-3 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">SEO Ready</p>
                    <p className="text-[10px] text-slate-500">Indexado no Google</p>
                  </div>
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
            title="Tecnologia não deveria ser\num obstáculo para o seu negócio"
            subtitle="Sabemos que gerenciar um site pode ser frustrante, caro e confuso. Por isso existimos."
            centered
            className="mb-20"
          />

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-950/5 border border-red-500/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-red-500/20 rounded-xl flex items-center justify-center">
                  <X className="w-4 h-4 text-red-400" />
                </div>
                <h3 className="text-white font-bold text-lg">A realidade de muitos negócios</h3>
              </div>
              <ul className="space-y-4">
                {problems.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3 h-3 text-red-400" />
                    </div>
                    <span className="text-slate-400 text-sm leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-950/5 border border-blue-500/20 rounded-2xl p-6 shadow-lg shadow-blue-500/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <Check className="w-4 h-4 text-blue-400" />
                </div>
                <h3 className="text-white font-bold text-lg">Como a IronFrame resolve isso</h3>
              </div>
              <ul className="space-y-4">
                {solutions.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-blue-400" />
                    </div>
                    <span className="text-slate-300 text-sm leading-relaxed">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-2xl md:text-3xl text-slate-200 font-light">
              "Tecnologia séria para{' '}
              <span className="text-gradient-blue font-bold">negócios sérios.</span>"
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicos-web" className="py-32 bg-[#050d1a]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Serviços"
            title="O que podemos fazer por você"
            subtitle="Soluções completas para cada fase do seu crescimento digital."
            className="mb-20"
          />

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {services.map(({ id, icon: Icon, badge, title, description, features, price, whatsapp }) => (
              <div
                id={id}
                key={title}
                className="flex flex-col bg-[#0d1a2e] border border-white/5 hover:border-blue-500/20 rounded-2xl p-6 transition-all group"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 bg-blue-600/20 group-hover:bg-blue-600/30 rounded-2xl flex items-center justify-center transition-colors">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <Badge color={badge.color}>{badge.label}</Badge>
                </div>
                <h3 className="text-white text-xl font-bold mb-3 font-display">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{description}</p>
                <ul className="space-y-2 mb-6">
                  {features.map(({ icon: FIcon, text }) => (
                    <li key={text} className="flex items-center gap-2 text-sm text-slate-300">
                      <FIcon className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                      {text}
                    </li>
                  ))}
                </ul>
                <div className="pt-5 border-t border-white/5">
                  <div className="text-blue-400 font-semibold text-sm mb-3">{price}</div>
                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-300 hover:text-white text-sm font-medium transition-colors group-hover:text-blue-400"
                  >
                    Solicitar orçamento <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SaaS Partnership */}
      <section id="saas" className="py-32 bg-[#070d1b] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-600/6 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge color="purple" className="mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 inline-block" />
                Parceria em SaaS
              </Badge>
              <h2
                className="text-white font-extrabold mb-5"
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: 'clamp(1.9rem, 3vw, 2.8rem)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                }}
              >
                Tem uma ideia de SaaS?{' '}
                <span className="text-gradient-purple">Somos seu sócio técnico.</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                Se você tem uma ideia de produto digital mas não tem equipe técnica, podemos ser seu
                CTO e time de desenvolvimento — com participação no negócio em vez de contrato por
                hora.
              </p>
              <p className="text-slate-500 leading-relaxed mb-10">
                Você domina o mercado, o problema e os clientes. Nós dominamos a tecnologia. Cada um
                entra com o que faz de melhor, e construímos algo juntos com interesse real em
                funcionar.
              </p>
              <Button href={WHATSAPP_SAAS} variant="primary" size="lg" external>
                <WhatsAppIcon />
                Conversar sobre minha ideia
              </Button>
              <div className="mt-5 flex items-start gap-2 text-sm text-slate-500">
                <Info className="w-4 h-4 flex-shrink-0 mt-0.5 text-slate-600" />
                <span>As parcerias por equity são avaliadas caso a caso. Selecionamos projetos com critério — entre em contato para uma conversa inicial sem compromisso.</span>
              </div>
              <div className="flex gap-3 mt-6 flex-wrap">
                {['Equity-based', 'MVP em semanas', 'Stack moderna'].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {saasSteps.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={title}
                  className="bg-[#0d1a2e] border border-white/5 hover:border-purple-500/20 rounded-2xl p-5 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 bg-purple-600/15 group-hover:bg-purple-600/25 rounded-xl flex items-center justify-center transition-colors flex-shrink-0">
                      <Icon className="w-4 h-4 text-purple-400" />
                    </div>
                    <span className="text-slate-600 text-xs font-bold font-display">0{i + 1}</span>
                  </div>
                  <h3 className="text-white font-bold text-sm mb-2">{title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-32 bg-[#050d1a]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Por que a IronFrame"
            title="O que nos torna diferentes"
            subtitle="Processo estruturado, comunicação direta e compromisso do início ao fim."
            centered
            className="mb-20"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {differentials.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-[#0d1a2e]/60 border border-white/5 hover:border-blue-500/20 rounded-2xl p-6 transition-all group"
              >
                <div className="w-10 h-10 bg-blue-600/15 group-hover:bg-blue-600/25 rounded-xl flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#050d1a] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[400px] bg-blue-600/8 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-blue-300 text-sm font-medium">Atendimento disponível</span>
          </div>

          <h2 className="text-4xl md:text-5xl text-white mb-6 font-extrabold font-display">
            Pronto para ter um site que{' '}
            <span className="text-gradient-blue">trabalha por você?</span>
          </h2>

          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            Fale conosco hoje e receba uma proposta personalizada sem compromisso.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={WHATSAPP_WEB} variant="whatsapp" size="lg" external>
              <WhatsAppIcon />
              Falar no WhatsApp
            </Button>
            <Button href="/contato" variant="secondary" size="lg">
              Enviar mensagem
            </Button>
          </div>

          <p className="text-slate-600 text-sm mt-6">
            Sem compromisso. Proposta gratuita. Resposta rápida.
          </p>
        </div>
      </section>
    </div>
  )
}
