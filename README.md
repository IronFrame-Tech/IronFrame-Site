# IronFrame Site

Site institucional da IronFrame — empresa de tecnologia especializada em desenvolvimento web e infraestrutura de redes, sediada em Brasília, DF.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React**

## Estrutura de páginas

| Rota | Descrição |
|---|---|
| `/` | Home |
| `/sobre` | Sobre a IronFrame |
| `/desenvolvimento-web` | Serviços de desenvolvimento web |
| `/infraestrutura-redes` | Serviços de infraestrutura de redes |
| `/contato` | Formulário de contato |
| `/faq` | Perguntas frequentes |
| `/politica-de-privacidade` | Política de privacidade |

## Estrutura do projeto

```
app/               # Páginas (App Router)
components/
  layout/          # Navbar e Footer
  sections/        # Seções reutilizáveis da home
  ui/              # Componentes base (Button, Badge, Card...)
lib/
  utils.ts         # Helpers e constantes (URLs do WhatsApp, cn())
public/
  images/          # Logo e assets estáticos
```

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse em [http://localhost:3000](http://localhost:3000).

## Deploy

O deploy é feito automaticamente via **Vercel** a cada push na branch `main`.

## Contato / WhatsApp

O número de contato e as URLs do WhatsApp estão centralizados em `lib/utils.ts`. Para alterar o número, basta atualizar a constante `WHATSAPP_NUMBER`.
