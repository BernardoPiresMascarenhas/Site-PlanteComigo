# PlanteComigo — Website Premium

Site premium de paisagismo e design verde desenvolvido com Next.js, TypeScript, TailwindCSS e Framer Motion.

## Stack

- **Next.js 14** — App Router
- **TypeScript** — tipagem estática
- **TailwindCSS** — estilização utilitária
- **Framer Motion** — animações e transições
- **Next/Font** — Cormorant Garamond + DM Sans (Google Fonts otimizadas)
- **Next/Image** — otimização automática de imagens

## Estrutura de arquivos

```
src/
├── app/
│   ├── globals.css          # Estilos globais + variáveis CSS
│   ├── layout.tsx           # Root layout + fontes + metadata SEO
│   └── page.tsx             # Página principal (montagem de seções)
├── components/
│   ├── Navbar.tsx           # Navbar transparente → blur ao scroll + mobile menu
│   ├── Hero.tsx             # Hero fullscreen com parallax + animações de entrada
│   ├── Marquee.tsx          # Barra de texto animada infinita
│   ├── About.tsx            # Seção sobre — editorial image + text
│   ├── Services.tsx         # 6 cards de serviços com hover fill
│   ├── Projects.tsx         # Grid assimétrico 12 colunas + hover overlay
│   ├── Differentials.tsx    # 4 diferenciais minimalistas
│   ├── InstagramFeed.tsx    # Feed 6 fotos com hover suave
│   ├── Contact.tsx          # Formulário elegante split layout
│   ├── Footer.tsx           # Footer escuro premium
│   └── WhatsAppButton.tsx   # Botão flutuante com pulse + tooltip
└── lib/
    ├── animations.ts        # Variants do Framer Motion reutilizáveis
    └── utils.ts             # Utility: cn() para merge de classes
```

## Como rodar

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build de produção
npm run build
npm start
```

O site estará disponível em `http://localhost:3000`.

## Identidade Visual

| Token     | Hex       | Uso                        |
|-----------|-----------|----------------------------|
| olive     | #5C6742   | CTAs, destaque, bordas     |
| moss      | #3D4A2E   | Hover, seção de contato    |
| sage      | #7A8C65   | Subtítulos, tags           |
| sand      | #C9B99A   | Acentos, títulos em escuro |
| cream     | #F5F1EA   | Background alternado       |
| ice       | #FAFAF7   | Background principal       |
| earth     | #8B7355   | Detalhes terrosos          |
| warm-gray | #9E9B94   | Textos secundários         |
| dark      | #1A1C18   | Background escuro          |
| charcoal  | #2E3028   | Footer, projetos           |

## Tipografia

- **Cormorant Garamond** — títulos, display, estética editorial
- **DM Sans** — corpo, navegação, UI

## Deploy (Vercel)

```bash
npx vercel
```

Ou conecte o repositório diretamente no [vercel.com](https://vercel.com).

## Personalização

### Trocar imagens
Substitua as URLs do Unsplash nos componentes por imagens reais do portfólio.
As imagens são carregadas via `next/image` com lazy loading automático.

### Configurar WhatsApp
No componente `WhatsAppButton.tsx` e `Footer.tsx`, substitua o número:
```
https://wa.me/5531999990000  →  https://wa.me/55SEUNUMERO
```

### Adicionar projetos
No componente `Projects.tsx`, edite o array `projects` com os dados reais.

### Integrar formulário
No componente `Contact.tsx`, substitua o `handleSubmit` por uma chamada real:
```ts
// Ex: Resend, EmailJS, Formspree, ou API Route do Next.js
const response = await fetch('/api/contact', {
  method: 'POST',
  body: JSON.stringify(form),
});
```
