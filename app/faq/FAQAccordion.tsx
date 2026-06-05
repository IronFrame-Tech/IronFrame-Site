'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  /* ── Geral ─────────────────────────────────────────── */
  {
    category: 'Geral',
    question: 'O que é a IronFrame?',
    answer:
      'A IronFrame é uma empresa de tecnologia que oferece dois pilares de serviço: desenvolvimento web (sites, landing pages, sistemas e parcerias SaaS) e infraestrutura de redes (cabeamento estruturado, Wi-Fi, switches e roteadores). Atendemos pequenas e médias empresas, consultórios, escritórios e residências de alto padrão em Brasília, DF.',
  },
  {
    category: 'Geral',
    question: 'Vocês atendem fora de Brasília?',
    answer:
      'Infraestrutura de redes exige presença física, por isso atendemos presencialmente principalmente em Brasília e região do Distrito Federal. Para desenvolvimento web, atendemos clientes de qualquer lugar do Brasil remotamente.',
  },
  /* ── Desenvolvimento Web ───────────────────────────── */
  {
    category: 'Desenvolvimento Web',
    question: 'O site vai ser meu? Sou o dono?',
    answer:
      'Sim, 100%. O site, os textos, as imagens e todos os arquivos pertencem a você. Ao final do projeto, entregamos todos os acessos (hospedagem, domínio, painel de gestão). A IronFrame cuida, mas a propriedade é sempre sua.',
  },
  {
    category: 'Desenvolvimento Web',
    question: 'Quanto tempo leva para ficar pronto?',
    answer:
      'Landing pages ficam prontas em 3 a 7 dias úteis. Sites institucionais entre 7 e 14 dias. Sistemas web mais complexos podem levar de 3 a 6 semanas. O prazo exato é definido na proposta antes de começarmos.',
  },
  {
    category: 'Desenvolvimento Web',
    question: 'Preciso pagar mensalidade? O que acontece se eu cancelar?',
    answer:
      'A mensalidade cobre a gestão técnica do site: segurança, backups, atualizações e suporte contínuo. A hospedagem e o domínio ficam no seu nome. Se cancelar, entregamos todos os acessos para você levar o site para onde quiser. Sem multas e sem complicações.',
  },
  {
    category: 'Desenvolvimento Web',
    question: 'Vocês criam o conteúdo (textos e imagens)?',
    answer:
      'Podemos sim. O ideal é que o cliente forneça informações sobre o negócio, serviços e diferenciais. Com isso, criamos os textos profissionais e o layout. Se precisar de imagens profissionais, indicamos parceiros. Caso precise de tudo do zero, incluímos criação de conteúdo na proposta.',
  },
  {
    category: 'Desenvolvimento Web',
    question: 'Meu site vai aparecer no Google?',
    answer:
      'Todo site que criamos já sai com SEO básico configurado: títulos, descrições, metatags, velocidade otimizada e estrutura correta para indexação. Para aparecer nas primeiras posições para termos competitivos, é necessária uma estratégia de SEO contínua — que também oferecemos.',
  },
  {
    category: 'Desenvolvimento Web',
    question: 'Qual a diferença entre site institucional e landing page?',
    answer:
      'Um site institucional tem várias páginas (Início, Sobre, Serviços, Contato) e apresenta completamente a empresa. Uma landing page é uma página única com um único objetivo: fazer o visitante tomar uma ação (ligar, preencher um formulário, comprar). O site é para quem quer presença digital completa. A landing page é para quem quer converter anúncios em clientes.',
  },
  {
    category: 'Desenvolvimento Web',
    question: 'Quantas revisões estão incluídas?',
    answer:
      'Revisões dentro do escopo aprovado são ilimitadas — se algo não ficou como esperado, ajustamos até ficar certo. Mudanças que alteram a direção do projeto (troca de identidade visual, adição de páginas, redesign completo) são avaliadas e orçadas separadamente.',
  },
  /* ── Infraestrutura de Redes ──────────────────────── */
  {
    category: 'Infraestrutura de Redes',
    question: 'Como funciona o processo de instalação de rede?',
    answer:
      'Começamos com um diagnóstico técnico do seu ambiente: medimos metragem, identificamos interferências, avaliamos o tráfego necessário e os pontos críticos. Com esse levantamento, elaboramos um projeto personalizado com equipamentos, pontos de instalação e orçamento detalhado. Após aprovação, executamos com organização e entregamos a documentação completa.',
  },
  {
    category: 'Infraestrutura de Redes',
    question: 'Quais equipamentos vocês utilizam?',
    answer:
      'Trabalhamos com marcas líderes de mercado: Cisco, Ubiquiti, MikroTik, TP-Link Business e parceiros especializados. A escolha do equipamento depende do ambiente e do orçamento — apresentamos sempre a melhor relação custo-benefício para a sua realidade.',
  },
  {
    category: 'Infraestrutura de Redes',
    question: 'Qual a garantia do serviço de instalação?',
    answer:
      'Os cabos e a execução da instalação têm garantia de serviço. Os equipamentos seguem a garantia do fabricante (geralmente 1 a 3 anos). Além disso, entregamos documentação completa da rede para facilitar qualquer manutenção futura.',
  },
  {
    category: 'Infraestrutura de Redes',
    question: 'É possível melhorar uma rede que já existe?',
    answer:
      'Sim! Fazemos diagnóstico de redes existentes, identificamos pontos de falha e propondo melhorias cirúrgicas ou uma reestruturação completa, dependendo do que for mais vantajoso para você.',
  },
  {
    category: 'Infraestrutura de Redes',
    question: 'Vocês instalam apenas em empresas ou também em residências?',
    answer:
      'Atendemos residências de alto padrão, consultórios médicos, escritórios corporativos e qualquer ambiente onde a conectividade é crítica. Cada projeto recebe o mesmo nível de atenção e padrão técnico.',
  },
]

const categories = ['Geral', 'Desenvolvimento Web', 'Infraestrutura de Redes']

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-white/5 rounded-2xl overflow-hidden transition-all hover:border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left bg-[#0d1a2e] hover:bg-[#112240] transition-colors"
      >
        <span className="text-white font-semibold text-base leading-snug font-display">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-blue-400 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="bg-[#070d1b] px-6 py-5 border-t border-white/5">
          <p className="text-slate-400 leading-relaxed text-sm">{answer}</p>
        </div>
      )}
    </div>
  )
}

export function FAQAccordion() {
  return (
    <div className="space-y-10">
      {categories.map((cat) => (
        <div key={cat}>
          <h3 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4 font-display">
            {cat}
          </h3>
          <div className="space-y-3">
            {faqs
              .filter((f) => f.category === cat)
              .map((faq) => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}
