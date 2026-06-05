'use client'

import { useState } from 'react'
import { Send, MessageCircle } from 'lucide-react'
import { WhatsAppIcon } from '@/components/ui'
import { WHATSAPP_URL } from '@/lib/utils'

export function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    serviceType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? '',
          subject: `Novo contato — ${form.serviceType || 'sem tipo'} — IronFrame`,
          from_name: form.name,
          ...form,
        }),
      })
      if (res.ok) setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="grid lg:grid-cols-5 gap-10">
      {/* Left info */}
      <div className="lg:col-span-2 space-y-5">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-green-600/10 border-2 border-green-500/25 hover:border-green-500/50 rounded-2xl p-6 transition-all group"
        >
          <div className="w-14 h-14 bg-green-600/20 group-hover:bg-green-600/30 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors">
            <WhatsAppIcon className="w-7 h-7 text-green-400" />
          </div>
          <div>
            <p className="text-white font-bold text-lg font-display">Prefere WhatsApp?</p>
            <p className="text-green-400 font-medium text-sm">Clique para falar agora →</p>
          </div>
        </a>

        <div className="bg-[#0d1a2e] border border-white/5 rounded-2xl p-6 space-y-5">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-600/15 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
              <MessageCircle className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm mb-1">Sem enrolação</p>
              <p className="text-slate-400 text-sm">Nada de scripts de vendas. Só uma conversa real sobre o que você precisa.</p>
            </div>
          </div>
        </div>

        <div className="bg-[#0d1a2e] border border-white/5 rounded-2xl p-6">
          <p className="text-slate-500 text-xs uppercase tracking-wider mb-3 font-semibold font-display">
            O que acontece depois?
          </p>
          <ol className="space-y-3">
            {[
              'Recebemos sua mensagem e analisamos',
              'Entramos em contato para entender melhor',
              'Enviamos uma proposta personalizada',
              'Você decide sem nenhuma pressão',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                <span className="w-5 h-5 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-400 text-xs font-bold flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Right form */}
      <div className="lg:col-span-3">
        {submitted ? (
          <div className="bg-[#0d1a2e] border border-green-500/20 rounded-3xl p-12 text-center flex flex-col items-center justify-center h-full">
            <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mb-5">
              <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-white text-2xl font-bold mb-3 font-display">Mensagem enviada!</h3>
            <p className="text-slate-400 max-w-sm">
              Recebemos seu contato e retornaremos em breve. Obrigado pelo interesse na IronFrame!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-[#0d1a2e] border border-white/5 rounded-3xl p-8">
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">
                  Nome completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="João Silva"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-[#070d1b] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/60 transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">E-mail *</label>
                <input
                  type="email"
                  required
                  placeholder="joao@empresa.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-[#070d1b] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/60 transition-colors text-sm"
                />
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-slate-300 text-sm font-medium mb-2">
                Tipo de serviço
              </label>
              <select
                value={form.serviceType}
                onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
                className="w-full bg-[#070d1b] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/60 transition-colors text-sm"
              >
                <option value="">Selecione uma opção</option>
                <option value="site">Site Institucional</option>
                <option value="landing">Landing Page</option>
                <option value="sistema">Sistema Web</option>
                <option value="saas">Parceria SaaS</option>
                <option value="cabeamento">Cabeamento Estruturado</option>
                <option value="wifi">Wi-Fi de Alta Performance</option>
                <option value="redes-geral">Infraestrutura de Redes (geral)</option>
                <option value="outro">Outro / não sei ainda</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-slate-300 text-sm font-medium mb-2">
                Conta um pouco sobre o que você precisa *
              </label>
              <textarea
                required
                rows={5}
                placeholder="Tenho um consultório e preciso de uma rede estável + site profissional..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-[#070d1b] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/60 transition-colors text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-semibold py-4 rounded-xl transition-all shadow-lg shadow-blue-500/20"
            >
              <Send className="w-4 h-4" />
              {loading ? 'Enviando...' : 'Enviar mensagem'}
            </button>

            <p className="text-slate-600 text-xs text-center mt-4">
              Seus dados são usados apenas para responder seu contato.{' '}
              <a href="/politica-de-privacidade" className="underline hover:text-slate-400 transition-colors">
                Política de Privacidade
              </a>
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
