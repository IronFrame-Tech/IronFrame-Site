'use client'

import { useState, useEffect } from 'react'
import { X, ShieldCheck } from 'lucide-react'

const STORAGE_KEY = 'ironframe_lgpd_v2'

export function LGPDBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true)
    }
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-[#0d1a2e] border border-white/10 rounded-2xl shadow-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-shrink-0 w-9 h-9 bg-blue-600/20 rounded-xl flex items-center justify-center">
          <ShieldCheck className="w-5 h-5 text-blue-400" strokeWidth={1.75} />
        </div>

        <p className="flex-1 text-sm text-slate-300 leading-relaxed">
          Este site pode coletar dados fornecidos voluntariamente por você (formulário de contato). Ao
          usar o botão de WhatsApp, você será redirecionado ao aplicativo WhatsApp (Meta). Leia nossa{' '}
          <a
            href="/politica-de-privacidade"
            className="underline text-blue-400 hover:text-blue-300 transition-colors"
          >
            Política de Privacidade
          </a>{' '}
          para saber como tratamos seus dados conforme a{' '}
          <strong className="text-slate-200">LGPD</strong>.
        </p>

        <div className="flex items-center gap-3 flex-shrink-0 w-full sm:w-auto">
          <button
            onClick={accept}
            className="flex-1 sm:flex-none px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl transition-colors"
          >
            Entendi
          </button>
          <button
            onClick={accept}
            aria-label="Fechar aviso de privacidade"
            className="p-2 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
