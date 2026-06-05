import type { Metadata } from 'next'
import { Target, Heart, Zap, Shield } from 'lucide-react'
import { SectionHeader, Badge, Button, WhatsAppIcon } from '@/components/ui'
import { WHATSAPP_URL } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Sobre — IronFrame',
  description:
    'Conheça a IronFrame: a empresa de tecnologia completa que une infraestrutura de redes e desenvolvimento web para negócios que levam TI a sério.',
}

const values = [
  {
    icon: Target,
    title: 'Foco em resultado',
    description: 'Não construímos sites para serem bonitos nem redes para parecerem complexas. Construímos para gerar resultados reais.',
  },
  {
    icon: Heart,
    title: 'Relação de confiança',
    description: 'Tratamos cada cliente como um parceiro de longo prazo. Transparência e honestidade em tudo.',
  },
  {
    icon: Zap,
    title: 'Agilidade com qualidade',
    description: 'Processos eficientes que nos permitem entregar rápido sem abrir mão do padrão de qualidade.',
  },
  {
    icon: Shield,
    title: 'Responsabilidade técnica',
    description: 'Cuidamos de cada detalhe técnico para que você nunca precise se preocupar com tecnologia.',
  },
]

export default function SobrePage() {
  return (
    <div className="bg-[#070d1b] min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero — logo + texto lado a lado */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 mb-20">
          <div className="flex-shrink-0 flex justify-center lg:justify-start">
            <img
              src="/images/logo.png"
              alt="IronFrame"
              style={{ height: '260px', width: 'auto' }}
            />
          </div>

          <div className="max-w-3xl">
          <Badge color="blue" className="mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
            Sobre a IronFrame
          </Badge>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 font-extrabold"
            style={{ fontFamily: 'Syne, sans-serif', letterSpacing: '-0.025em' }}
          >
            Tecnologia a serviço de quem{' '}
            <span className="text-gradient-blue">constrói algo real</span>
          </h1>
          <p className="text-slate-400 text-xl leading-relaxed">
            A IronFrame nasceu da convicção de que pequenos negócios merecem acesso à tecnologia de
            qualidade — com processo real, suporte de verdade e sem o custo de uma grande agência. Uma
            empresa para Web <em>e</em> para Redes.
          </p>
          </div>
        </div>

        {/* Positioning */}
        <div className="grid lg:grid-cols-3 gap-5 mb-20">
          {[
            {
              label: 'Não somos',
              title: 'Um freelancer solo',
              description: 'Sem risco de sumir após a entrega. Sem improvisação. Sem uma única pessoa responsável por tudo.',
              color: 'border-red-500/20 bg-red-950/5',
              tag: '✕',
              tagColor: 'text-red-400',
            },
            {
              label: 'Somos',
              title: 'Um parceiro especializado',
              description: 'Processo estruturado, responsabilidade definida, suporte contínuo e entrega com qualidade de engenharia — tanto em web quanto em redes.',
              color: 'border-blue-500/30 bg-blue-950/10',
              tag: '✓',
              tagColor: 'text-blue-400',
              featured: true,
            },
            {
              label: 'Mas também não somos',
              title: 'Uma grande agência',
              description: 'Sem burocracia, sem overhead, sem ser mais um número na fila. Você fala direto com quem faz.',
              color: 'border-slate-500/20 bg-slate-950/10',
              tag: '≠',
              tagColor: 'text-slate-400',
            },
          ].map(({ label, title, description, color, tag, tagColor, featured }) => (
            <div
              key={title}
              className={`border rounded-2xl p-6 ${color} ${featured ? 'ring-1 ring-blue-500/20' : ''}`}
            >
              <div className={`text-2xl font-bold mb-2 ${tagColor}`}>{tag}</div>
              <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">{label}</p>
              <h3 className="text-white font-bold text-lg mb-3 font-display">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* Two pillars */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <div className="bg-[#0d1a2e] border border-blue-500/15 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-8 bg-blue-500 rounded-full" />
              <h2 className="text-xl text-white font-bold font-display">Desenvolvimento Web</h2>
            </div>
            <p className="text-slate-400 leading-relaxed mb-5">
              Sites institucionais, landing pages e sistemas web para pequenas empresas. Com processo
              de engenharia, suporte contínuo e foco em resultados reais.
            </p>
            <div className="flex gap-3 flex-wrap">
              {['Sites', 'Landing Pages', 'Sistemas Web', 'SaaS'].map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 bg-blue-600/10 text-blue-300 rounded-lg border border-blue-500/15">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#0d1a2e] border border-cyan-500/15 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-8 bg-cyan-500 rounded-full" />
              <h2 className="text-xl text-white font-bold font-display">Infraestrutura de Redes</h2>
            </div>
            <p className="text-slate-400 leading-relaxed mb-5">
              Cabeamento estruturado, Wi-Fi de alta performance, switches e roteadores para
              residências e empresas. Padrão técnico que não fecha o olho para improvisos.
            </p>
            <div className="flex gap-3 flex-wrap">
              {['Cabeamento', 'Wi-Fi', 'Switches', 'Roteadores'].map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 bg-cyan-600/10 text-cyan-300 rounded-lg border border-cyan-500/15">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Engineering mentality */}
        <div className="grid lg:grid-cols-2 gap-10 mb-20 items-center">
          <div>
            <h2 className="text-3xl text-white font-bold mb-5 font-display">
              Mentalidade de engenharia, comunicação de parceiro
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Cada projeto passa por um processo estruturado: levantamento de requisitos, arquitetura
                de solução, execução cuidadosa e testes antes de qualquer entrega. Nada improvisado.
              </p>
              <p>
                Ao mesmo tempo, sabemos falar a língua do empresário. Sem jargão técnico desnecessário.
                Você entende o que está sendo feito em cada etapa.
              </p>
              <p>
                É o melhor dos dois mundos: rigor técnico com atenção e agilidade de quem trata cada
                cliente como prioridade.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '30+', label: 'Projetos entregues' },
              { value: '3 anos', label: 'De experiência' },
              { value: '98%', label: 'Taxa de satisfação' },
              { value: '< 2h', label: 'Tempo de resposta' },
            ].map(({ value, label }) => (
              <div key={label} className="bg-[#0d1a2e] border border-white/5 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-gradient-blue mb-1 font-display">{value}</div>
                <div className="text-slate-400 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Founder story */}
        <div className="bg-[#0d1a2e] border border-white/5 rounded-3xl p-8 md:p-12 mb-20">
          <div className="max-w-3xl">
            <Badge color="blue" className="mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
              Fundador
            </Badge>
            <h2 className="text-2xl md:text-3xl text-white font-bold mb-6 font-display">
              "Cansei de ver pequenos negócios com tecnologia improvisada, cara e sem suporte."
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                A IronFrame foi fundada por um profissional de TI com experiência em infraestrutura de
                redes e desenvolvimento de software. A percepção foi clara: as ferramentas e o nível
                de qualidade disponíveis para grandes empresas raramente chegavam aos pequenos negócios.
              </p>
              <p>
                O dono de uma clínica, de um escritório ou de uma casa de alto padrão não tem tempo
                para aprender tecnologia — e não deveria precisar. Ele precisa de um parceiro que
                cuide disso com a mesma seriedade que ele cuida do próprio negócio.
              </p>
              <p>
                Foi com essa missão que a IronFrame foi criada: ser esse parceiro. Para web. Para redes.
                Para tudo que envolve tecnologia na sua empresa.
              </p>
              <p className="text-slate-500 text-sm">Brasília, DF.</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <SectionHeader
            label="Nossos valores"
            title="O que guia cada decisão que tomamos"
            centered
            className="mb-12"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-[#0d1a2e] border border-white/5 hover:border-blue-500/20 rounded-2xl p-6 transition-all group"
              >
                <div className="w-10 h-10 bg-blue-600/15 group-hover:bg-blue-600/25 rounded-xl flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-white font-bold mb-2 font-display">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission */}
        <div className="text-center bg-gradient-to-b from-blue-900/10 to-transparent border border-blue-500/10 rounded-3xl p-12 mb-10">
          <h2 className="text-3xl md:text-4xl text-white font-bold mb-4 font-display">Nossa missão</h2>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Democratizar o acesso à tecnologia de qualidade para pequenas e médias empresas,
            permitindo que empreendedores foquem no que fazem de melhor enquanto a IronFrame
            cuida de toda a parte tecnológica — do cabo ao código.
          </p>
          <Button href={WHATSAPP_URL} variant="primary" size="lg" external>
            <WhatsAppIcon />
            Trabalhar com a IronFrame
          </Button>
        </div>
      </div>
    </div>
  )
}
