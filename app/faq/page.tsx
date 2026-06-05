import type { Metadata } from 'next'
import { SectionHeader, Button, WhatsAppIcon } from '@/components/ui'
import { WHATSAPP_URL } from '@/lib/utils'
import { FAQAccordion } from './FAQAccordion'

export const metadata: Metadata = {
  title: 'Perguntas Frequentes — IronFrame',
  description:
    'Tire suas dúvidas sobre desenvolvimento web, infraestrutura de redes, preços, prazos e manutenção com a IronFrame.',
}

export default function FAQPage() {
  return (
    <div className="bg-[#070d1b] min-h-screen pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionHeader
            label="Perguntas frequentes"
            title="Tudo que você precisa saber"
            subtitle="Respostas diretas para as dúvidas mais comuns — sobre web e sobre redes. Sem rodeios."
            centered
          />
        </div>

        <div className="mb-16">
          <FAQAccordion />
        </div>

        <div className="bg-[#0d1a2e] border border-blue-500/20 rounded-3xl p-10 text-center">
          <h3 className="text-white text-2xl font-bold mb-3 font-display">
            Ainda ficou com dúvida?
          </h3>
          <p className="text-slate-400 mb-8 max-w-sm mx-auto">
            Manda uma mensagem. Respondemos de forma clara e sem pressão.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={WHATSAPP_URL} variant="whatsapp" size="lg" external>
              <WhatsAppIcon />
              Falar no WhatsApp
            </Button>
            <Button href="/contato" variant="secondary" size="lg">
              Enviar mensagem
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
