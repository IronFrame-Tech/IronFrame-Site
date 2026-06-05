import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Privacidade — IronFrame',
  description:
    'Saiba como a IronFrame coleta, usa e protege seus dados pessoais, em conformidade com a LGPD (Lei nº 13.709/2018).',
  robots: { index: false },
}

export default function PoliticaPrivacidadePage() {
  return (
    <div className="min-h-screen bg-[#070d1b] pt-28 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3 font-display">
            Legal
          </p>
          <h1 className="text-4xl font-bold text-white mb-4 font-display">
            Política de Privacidade
          </h1>
          <p className="text-slate-400 text-sm">Última atualização: junho de 2026</p>
        </div>

        <div className="space-y-10 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-4 font-display">1. Quem somos</h2>
            <p>
              A <strong className="text-white">IronFrame</strong> é uma empresa de tecnologia que
              presta serviços de desenvolvimento web e infraestrutura de redes, com sede no Distrito
              Federal, Brasil.
            </p>
            <p className="mt-3">
              Esta Política de Privacidade descreve como tratamos os dados pessoais coletados por
              meio do nosso site, em conformidade com a{' '}
              <strong className="text-white">
                Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD)
              </strong>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 font-display">2. Dados que coletamos</h2>
            <p>
              Coletamos apenas os dados que você nos fornece voluntariamente pelo formulário de
              contato:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-slate-400">
              <li>
                <strong className="text-slate-300">Nome completo</strong>
              </li>
              <li>
                <strong className="text-slate-300">Endereço de e-mail</strong>
              </li>
              <li>
                <strong className="text-slate-300">Tipo de serviço de interesse</strong> (opcional)
              </li>
              <li>
                <strong className="text-slate-300">Mensagem</strong> descrevendo sua necessidade
              </li>
            </ul>
            <p className="mt-4">
              Não coletamos dados de navegação, não utilizamos cookies de rastreamento e não
              integramos ferramentas de analytics de terceiros (como Google Analytics ou Meta Pixel)
              neste site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 font-display">
              3. Para que usamos seus dados
            </h2>
            <p>Os dados coletados são utilizados exclusivamente para:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-slate-400">
              <li>Responder ao seu contato e entender sua necessidade</li>
              <li>Elaborar e enviar uma proposta personalizada</li>
              <li>
                Estabelecer comunicação relacionada à prestação dos nossos serviços de desenvolvimento
                web ou infraestrutura de redes
              </li>
            </ul>
            <p className="mt-4">
              Não utilizamos seus dados para envio de publicidade não solicitada, não os vendemos e
              não os compartilhamos com terceiros para fins comerciais.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 font-display">
              4. Base legal do tratamento
            </h2>
            <p>
              O tratamento dos seus dados é fundamentado no{' '}
              <strong className="text-white">legítimo interesse</strong> (Art. 7º, IX da LGPD): você
              nos enviou um contato com interesse em contratar nossos serviços, e precisamos dos seus
              dados para responder adequadamente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 font-display">
              5. Compartilhamento com terceiros
            </h2>
            <p>
              Para receber as mensagens do formulário de contato, utilizamos o serviço{' '}
              <strong className="text-white">Web3Forms</strong> (web3forms.com), que processa e
              encaminha os dados para o nosso e-mail. Os dados são transmitidos de forma segura
              (HTTPS) e não são utilizados pela Web3Forms para nenhuma finalidade além do
              encaminhamento.
            </p>
            <p className="mt-3">
              Ao utilizar os botões de WhatsApp, você será direcionado ao aplicativo WhatsApp (Meta
              Platforms), que possui sua própria política de privacidade.
            </p>
            <p className="mt-3">
              Não compartilhamos seus dados com nenhum outro terceiro.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 font-display">
              6. Por quanto tempo guardamos seus dados
            </h2>
            <p>
              Mantemos seus dados pelo tempo necessário para atender à finalidade do contato —
              normalmente durante o período de negociação e, caso se torne cliente, enquanto durar
              nossa relação comercial.
            </p>
            <p className="mt-3">
              Se não houver contratação, os dados são eliminados em até{' '}
              <strong className="text-white">90 dias</strong> após o encerramento das tratativas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 font-display">
              7. Seus direitos como titular
            </h2>
            <p>A LGPD garante a você os seguintes direitos:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-slate-400">
              <li>
                <strong className="text-slate-300">Acesso:</strong> saber quais dados temos sobre você
              </li>
              <li>
                <strong className="text-slate-300">Correção:</strong> corrigir dados incompletos ou
                incorretos
              </li>
              <li>
                <strong className="text-slate-300">Eliminação:</strong> solicitar a exclusão dos seus
                dados
              </li>
              <li>
                <strong className="text-slate-300">Portabilidade:</strong> receber seus dados em
                formato estruturado
              </li>
              <li>
                <strong className="text-slate-300">Revogação:</strong> revogar consentimento quando
                aplicável
              </li>
              <li>
                <strong className="text-slate-300">Informação:</strong> saber com quem seus dados foram
                compartilhados
              </li>
            </ul>
            <p className="mt-4">
              Para exercer qualquer um desses direitos, entre em contato conosco pelos canais abaixo.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 font-display">8. Segurança</h2>
            <p>
              Adotamos medidas técnicas adequadas para proteger seus dados contra acesso não
              autorizado, perda ou alteração. Toda comunicação com o nosso site é realizada com
              criptografia TLS/HTTPS.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 font-display">
              9. Contato e dúvidas
            </h2>
            <p>Para exercer seus direitos ou tirar dúvidas sobre privacidade:</p>
            <div className="mt-4 bg-[#0d1a2e] border border-white/5 rounded-2xl p-6 space-y-2">
              <p className="text-white font-semibold">IronFrame</p>
              <p className="text-slate-400 text-sm">
                WhatsApp:{' '}
                <a
                  href="https://wa.me/5561999936690"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  (61) 99993-6690
                </a>
              </p>
              <p className="text-slate-400 text-sm">
                Formulário de contato:{' '}
                <Link
                  href="/contato"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  ironframe.com.br/contato
                </Link>
              </p>
              <p className="text-slate-400 text-sm">Brasília, DF — Brasil</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 font-display">
              10. Alterações nesta política
            </h2>
            <p>
              Esta política pode ser atualizada periodicamente. A data de última atualização sempre
              estará indicada no topo desta página. Recomendamos que você a consulte periodicamente.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5">
          <Link
            href="/"
            className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
          >
            ← Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  )
}
