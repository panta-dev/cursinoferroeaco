# Cursino Ferro e Aço — Plataforma Comercial & Máquina de Aquisição

Plataforma web comercial, responsiva e de alta conversão da **Cursino Ferro e Aço** (Avenida do Cursino, 4032 — São Paulo, SP).

Desenvolvida com foco em SEO para termos de busca locais/regionais de alta conversão, Google Ads, Meta Ads, WhatsApp e funil comercial para construção civil.

---

## 🛠️ Tecnologias
- **Frontend:** React 18 + TypeScript + Vite + React Router DOM v6
- **Ícones:** Lucide React
- **Estilos:** Vanilla CSS moderno (Tokens, Grid, Flexbox, Mobile-First, Core Web Vitals)
- **Deploy & CDN:** Cloudflare Pages (com `_redirects` para SPA e `_headers` para Edge Cache)
- **SEO:** Schema.org (`LocalBusiness`, `Product`, `FAQPage`, `BreadcrumbList`), OpenGraph, Twitter Cards, Sitemap XML e Robots.txt.

---

## 🚀 Como Executar Localmente

1. Clone o repositório:
```bash
git clone https://github.com/panta-dev/cursinoferroeaco.git
cd cursinoferroeaco
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Build de produção:
```bash
npm run build
```

---

## ☁️ Deploy no Cloudflare Pages

1. Conecte o repositório GitHub `panta-dev/cursinoferroeaco` no painel do **Cloudflare Pages**.
2. Defina as configurações de build:
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version:** `>= 18` (definido automaticamente)
3. As rotas diretas funcionarão imediatamente graças ao arquivo `public/_redirects`.

---

## 📍 Informações Oficiais da Empresa
- **Endereço:** Avenida do Cursino, 4032 — São Paulo, SP, CEP 04132-002
- **Telefone / WhatsApp:** (11) 5073-0006
- **Horário:** Segunda a sexta-feira, das 08h às 18h
- **Site:** https://cursinoferroeaco.com.br
