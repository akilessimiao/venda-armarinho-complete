# 🚀 Guia de Setup - Venda Armarinho

Instruções passo a passo para configurar o ambiente de desenvolvimento.

## 📋 Pré-requisitos

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **Git** ([Download](https://git-scm.com/))
- **pnpm** 8+ (instale com: `npm install -g pnpm`)
- **Docker** (opcional, para containerização)

## 🔧 Setup Local

### 1. Clonar Repositório

```bash
git clone https://github.com/akilessimiao/venda-armarinho-complete.git
cd venda-armarinho-complete
```

### 2. Instalar Dependências

```bash
# Instalar dependências de cada módulo
cd api && pnpm install && cd ..
cd docs && pnpm install && cd ..
cd multiplatform && pnpm install && cd ..
```

### 3. Configurar Variáveis de Ambiente

#### API (.env)

```bash
cd api
cp CONFIG.md .env
# Editar .env com suas credenciais
nano .env
```

Variáveis necessárias:
```
PORT=3001
NODE_ENV=development
STRIPE_SECRET_KEY=sk_test_...
MERCADOPAGO_ACCESS_TOKEN=...
WHATSAPP_ACCESS_TOKEN=...
SUPABASE_URL=https://...
SUPABASE_KEY=...
```

#### Docs (.env)

```bash
cd ../docs
cat > .env << EOF
PORT=3002
NODE_ENV=development
EOF
```

#### Multiplatform (.env)

```bash
cd ../multiplatform
cat > .env << EOF
REACT_APP_API_URL=http://localhost:3001
EXPO_PUBLIC_API_URL=http://localhost:3001
SUPABASE_URL=https://...
SUPABASE_KEY=...
EOF
```

### 4. Iniciar Desenvolvimento

Abra 4 terminais:

**Terminal 1 - API**
```bash
cd api
pnpm dev
# Rodando em http://localhost:3001
```

**Terminal 2 - Documentação**
```bash
cd docs
node server.js
# Rodando em http://localhost:3002
```

**Terminal 3 - Web**
```bash
cd multiplatform
pnpm dev:web
# Rodando em http://localhost:5173
```

**Terminal 4 - Mobile**
```bash
cd multiplatform
pnpm dev:mobile
# Abra Expo Go no seu celular
```

## 🐳 Setup com Docker

### Build

```bash
docker-compose build
```

### Run

```bash
docker-compose up
```

Acessar:
- API: http://localhost:3001
- Docs: http://localhost:3002

### Stop

```bash
docker-compose down
```

## 📚 Obtendo Credenciais

### Stripe

1. Acesse [dashboard.stripe.com](https://dashboard.stripe.com)
2. Faça login ou crie uma conta
3. Vá para **Developers** → **API Keys**
4. Copie **Secret Key** (começa com `sk_test_`)
5. Cole em `api/.env` como `STRIPE_SECRET_KEY`

### MercadoPago

1. Acesse [mercadopago.com](https://mercadopago.com)
2. Faça login ou crie uma conta
3. Vá para **Configurações** → **Credenciais**
4. Copie **Access Token**
5. Cole em `api/.env` como `MERCADOPAGO_ACCESS_TOKEN`

### WhatsApp Business API

1. Acesse [developers.facebook.com](https://developers.facebook.com)
2. Crie um app
3. Adicione o produto WhatsApp Business
4. Configure o webhook
5. Copie o **Access Token**
6. Cole em `api/.env` como `WHATSAPP_ACCESS_TOKEN`

### Supabase

1. Acesse [supabase.com](https://supabase.com)
2. Crie um novo projeto
3. Vá para **Settings** → **API**
4. Copie **Project URL** e **anon key**
5. Cole em `.env` como `SUPABASE_URL` e `SUPABASE_KEY`

## ✅ Verificar Setup

### Testar API

```bash
curl http://localhost:3001/health
# Resposta: {"status":"ok","timestamp":"...","environment":"development"}
```

### Testar Documentação

Abra http://localhost:3002 no navegador

### Testar Web

Abra http://localhost:5173 no navegador

### Testar Mobile

1. Instale Expo Go no seu celular
2. Escaneie o QR code exibido no terminal
3. App abrirá no seu celular

## 🧪 Rodar Testes

```bash
# API
cd api
pnpm test

# Web
cd ../multiplatform
pnpm -F web test

# Mobile
pnpm -F mobile test
```

## 📦 Build para Produção

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

## 🚀 Deploy

### Vercel (Web + Docs)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy web
cd multiplatform/packages/web
vercel

# Deploy docs
cd ../../docs
vercel
```

### Heroku (API)

```bash
# Instalar Heroku CLI
npm i -g heroku

# Login
heroku login

# Deploy
cd api
heroku create venda-armarinho-api
git push heroku main
```

### Google Play Store (Mobile)

```bash
cd multiplatform
eas build --platform android
eas submit --platform android
```

### Apple App Store (Mobile)

```bash
cd multiplatform
eas build --platform ios
eas submit --platform ios
```

## 🐛 Troubleshooting

### Erro: "Cannot find module"

```bash
# Limpar cache e reinstalar
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Erro: "Port already in use"

```bash
# Mudar porta em .env
PORT=3003
```

### Erro: "EACCES: permission denied"

```bash
# Dar permissão
chmod +x ./api/server.js
```

### Erro: "STRIPE_SECRET_KEY not found"

```bash
# Verificar .env
cat api/.env | grep STRIPE_SECRET_KEY
# Se vazio, adicionar a chave
```

## 📞 Suporte

- 📧 Email: contato@vendaarmarinho.com.br
- 📱 WhatsApp: 84 99999-9999
- 🔗 GitHub Issues: [Abrir issue](https://github.com/akilessimiao/venda-armarinho-complete/issues)

## 📝 Próximos Passos

1. ✅ Setup completo
2. 📖 Ler [README.md](./README.md)
3. 🤝 Ler [CONTRIBUTING.md](./CONTRIBUTING.md)
4. 🚀 Começar a desenvolver!

---

**Versão**: 1.0.0  
**Última atualização**: Fevereiro 2026
