import type { Metadata } from 'next'
import { SectionHeader } from '@/components/ui'
import { ContactForm } from './ContactForm'

export const metadata: Metadata = {
  title: 'Contato — IronFrame',
  description:
    'Fale com a IronFrame. Resposta em até 2 horas. Proposta personalizada sem compromisso para web ou infraestrutura de redes.',
}

export default function ContatoPage() {
  return (
    <div className="bg-[#070d1b] min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionHeader
            label="Contato"
            title="Vamos conversar sobre seu projeto"
            subtitle="Sem pressão, sem compromisso. Apenas uma conversa para entender como podemos ajudar — em web ou em redes."
            centered
          />
        </div>
        <ContactForm />
      </div>
    </div>
  )
}
