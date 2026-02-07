# 🛍️ Venda Armarinho - Plataforma Completa

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-19+-blue.svg)](https://react.dev/)
[![React Native](https://img.shields.io/badge/React%20Native-0.73+-blue.svg)](https://reactnative.dev/)

Plataforma completa de e-commerce para venda de materiais de costura e artesanato com suporte a múltiplas plataformas (web, mobile), pagamentos integrados e API de pagamento robusta.

## 🎯 Características Principais

### 🌐 Web & Mobile
- ✅ **Desktop Responsivo** - React + Vite + Tailwind CSS
- ✅ **Mobile Nativo** - React Native + Expo (iOS/Android)
- ✅ **Sincronização Offline** - Funciona sem internet
- ✅ **Banco de Dados Local** - IndexedDB (web) e SQLite (mobile)

### 💳 Pagamentos
- ✅ **Stripe** - Cartão de Crédito/Débito
- ✅ **MercadoPago** - PIX, Cartão, Boleto
- ✅ **PIX** - QR Code automático
- ✅ **Dinheiro** - Com controle de troco
- ✅ **Webhooks** - Confirmação automática

### 📄 Cupons & Impressão
- ✅ **Cupom Fiscal** - NF-e simulada
- ✅ **Cupom Não-Fiscal** - Com QR Code
- ✅ **Impressão Térmica** - Suporte a impressoras de rede
- ✅ **PDF** - Geração automática
- ✅ **WhatsApp** - Envio automático

### 📱 Notificações
- ✅ **Push Notifications** - Mobile
- ✅ **WhatsApp API** - Mensagens automáticas
- ✅ **Email** - Confirmação de pedidos
- ✅ **SMS** - Alertas de status

### 🛒 E-commerce
- ✅ **Catálogo** - Produtos com filtros
- ✅ **Carrinho** - Persistência automática
- ✅ **Checkout** - Fluxo completo
- ✅ **Pedidos** - Histórico e rastreamento
- ✅ **Avaliações** - Sistema de reviews

## 📁 Estrutura do Projeto

```
venda-armarinho-complete/
├── api/                          # API de Pagamento (Node.js + Express)
│   ├── src/
│   │   ├── config/              # Configurações
│   │   ├── services/            # Serviços (Stripe, MercadoPago, etc)
│   │   ├── routes/              # Endpoints
│   │   └── server.js            # Servidor
│   ├── README.md
│   ├── CONFIG.md
│   ├── EXAMPLES.md
│   └── package.json
│
├── docs/                         # Documentação Web
│   ├── index.html               # Página principal
│   ├── server.js                # Servidor
│   ├── README.md
│   └── package.json
│
├── multiplatform/               # App Multiplataforma
│   ├── packages/
│   │   ├── shared/              # Código compartilhado
│   │   ├── web/                 # Desktop (React)
│   │   └── mobile/              # Mobile (React Native)
│   ├── README.md
│   ├── ARCHITECTURE.md
│   ├── IMPLEMENTATION_GUIDE.md
│   └── package.json
│
├── LICENSE                       # MIT License
├── .gitignore
└── README.md                     # Este arquivo
```

## 🚀 Quick Start

### Pré-requisitos
- Node.js 18+
- pnpm ou npm
- Git

### Instalação

```bash
# Clonar repositório
git clone https://github.com/akilessimiao/venda-armarinho-complete.git
cd venda-armarinho-complete

# Instalar dependências de cada módulo
cd api && pnpm install && cd ..
cd docs && pnpm install && cd ..
cd multiplatform && pnpm install && cd ..
```

### Desenvolvimento

```bash
# Terminal 1: API (porta 3001)
cd api
pnpm dev

# Terminal 2: Documentação (porta 3002)
cd docs
node server.js

# Terminal 3: Web (porta 5173)
cd multiplatform
pnpm dev:web

# Terminal 4: Mobile (Expo)
cd multiplatform
pnpm dev:mobile
```

### Acessar

- 🌐 **API**: http://localhost:3001
- 📚 **Documentação**: http://localhost:3002
- 💻 **Web**: http://localhost:5173
- 📱 **Mobile**: Expo Go app

## 📚 Documentação

### API de Pagamento
- [README](./api/README.md) - Guia completo
- [EXAMPLES.md](./api/EXAMPLES.md) - 13 exemplos práticos
- [CONFIG.md](./api/CONFIG.md) - Configuração

### Documentação Web
- [README](./docs/README.md) - Página de documentação
- Acesse em http://localhost:3002

### Plataforma Multiplataforma
- [README](./multiplatform/README.md) - Visão geral
- [ARCHITECTURE.md](./multiplatform/ARCHITECTURE.md) - Arquitetura técnica
- [IMPLEMENTATION_GUIDE.md](./multiplatform/IMPLEMENTATION_GUIDE.md) - Roadmap

## 🔧 Configuração

### Variáveis de Ambiente

Criar arquivo `.env` em cada módulo:

**api/.env**
```
PORT=3001
NODE_ENV=development
STRIPE_SECRET_KEY=sk_test_...
MERCADOPAGO_ACCESS_TOKEN=...
WHATSAPP_ACCESS_TOKEN=...
SUPABASE_URL=...
SUPABASE_KEY=...
```

**docs/.env**
```
PORT=3002
NODE_ENV=development
```

**multiplatform/.env**
```
REACT_APP_API_URL=http://localhost:3001
EXPO_PUBLIC_API_URL=http://localhost:3001
SUPABASE_URL=...
SUPABASE_KEY=...
```

## 💻 Tecnologias

### Backend
- **Express.js** - Framework web
- **Node.js** - Runtime
- **Stripe** - Processamento de pagamentos
- **MercadoPago** - Pagamentos alternativos
- **Supabase** - Backend as a Service
- **Drizzle ORM** - Database ORM

### Frontend Web
- **React 19** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Zustand** - State management
- **React Router** - Routing

### Frontend Mobile
- **React Native** - Mobile framework
- **Expo** - React Native platform
- **Zustand** - State management
- **SQLite** - Local database

### Infraestrutura
- **Docker** - Containerização
- **GitHub Actions** - CI/CD
- **Vercel/Netlify** - Deploy web
- **EAS Build** - Build mobile

## 📊 Endpoints Principais

### Pagamentos
```
POST   /api/payment/create              Criar pagamento
POST   /api/payment/confirm/:id         Confirmar pagamento
POST   /api/payment/receipt             Gerar cupom
GET    /api/payment/receipt/:id/pdf     Baixar PDF
GET    /api/payment/list                Listar pagamentos
```

### WhatsApp
```
POST   /api/whatsapp/send-message       Enviar mensagem
POST   /api/whatsapp/send-receipt       Enviar cupom
POST   /api/whatsapp/send-image         Enviar imagem
GET|POST /api/whatsapp/webhook          Webhook
```

### Impressora
```
POST   /api/payment/printer/test        Testar impressora
GET    /api/payment/printer/status      Status
```

## 🧪 Testes

```bash
# API
cd api
pnpm test

# Web
cd multiplatform
pnpm -F web test

# Mobile
pnpm -F mobile test
```

## 📦 Build

### Web
```bash
cd multiplatform
pnpm build:web
# Saída: packages/web/dist
```

### Mobile
```bash
cd multiplatform
pnpm build:mobile
# Gera APK/IPA via EAS Build
```

### API
```bash
cd api
pnpm build
# Saída: dist/
```

### Documentação
```bash
cd docs
pnpm build
# Saída: dist/
```

## 🐳 Docker

```bash
# Build
docker-compose build

# Run
docker-compose up

# Acessar
# API: http://localhost:3001
# Docs: http://localhost:3002
```

## 🚀 Deploy

### Vercel (Web + Docs)
```bash
vercel deploy
```

### Heroku (API)
```bash
heroku create venda-armarinho-api
git push heroku main
```

### Google Play Store (Mobile)
```bash
eas build --platform android
eas submit --platform android
```

### Apple App Store (Mobile)
```bash
eas build --platform ios
eas submit --platform ios
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

Veja [CONTRIBUTING.md](./CONTRIBUTING.md) para mais detalhes.

## 📝 Roadmap

- [ ] Sistema de avaliações e comentários
- [ ] Cupom fiscal integrado com SEFAZ
- [ ] Relatórios e analytics
- [ ] Dashboard administrativo
- [ ] Sistema de afiliados
- [ ] Integração com ERP
- [ ] App desktop (Electron)
- [ ] Suporte a múltiplas lojas

## 🐛 Reportar Bugs

Encontrou um bug? Abra uma [issue](https://github.com/akilessimiao/venda-armarinho-complete/issues) com:
- Descrição do bug
- Passos para reproduzir
- Comportamento esperado
- Screenshots (se aplicável)

## 💬 Suporte

- 📧 Email: contato@vendaarmarinho.com.br
- 📱 WhatsApp: 84 99999-9999
- 🔗 GitHub Issues: [Abrir issue](https://github.com/akilessimiao/venda-armarinho-complete/issues)

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](./LICENSE) para detalhes.

## 👥 Autores

- **Akiles Simião** - Desenvolvedor Principal
- **Manus AI** - Arquitetura e Desenvolvimento

## 🙏 Agradecimentos

- [Stripe](https://stripe.com) - Processamento de pagamentos
- [MercadoPago](https://mercadopago.com) - Pagamentos alternativos
- [Supabase](https://supabase.com) - Backend
- [React](https://react.dev) - UI Framework
- [React Native](https://reactnative.dev) - Mobile Framework

## 📊 Status

- ✅ API de Pagamento - Produção
- ✅ Documentação Web - Produção
- 🚀 Plataforma Multiplataforma - Em Desenvolvimento
- 🚧 Dashboard Administrativo - Planejamento

---

**Versão**: 1.0.0  
**Última atualização**: Fevereiro 2026  
**Status**: Ativo e em desenvolvimento

⭐ Se este projeto foi útil, considere dar uma estrela!
