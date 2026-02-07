# ⚡ Quick Start (5 minutos)

## 1️⃣ Clonar

```bash
git clone https://github.com/akilessimiao/venda-armarinho-complete.git
cd venda-armarinho-complete
```

## 2️⃣ Instalar

```bash
cd api && pnpm install && cd ..
cd docs && pnpm install && cd ..
cd multiplatform && pnpm install && cd ..
```

## 3️⃣ Configurar

```bash
# API
cd api
cp CONFIG.md .env
# Editar .env com suas chaves
nano .env
cd ..
```

## 4️⃣ Rodar (4 terminais)

```bash
# Terminal 1
cd api && pnpm dev

# Terminal 2
cd docs && node server.js

# Terminal 3
cd multiplatform && pnpm dev:web

# Terminal 4
cd multiplatform && pnpm dev:mobile
```

## 5️⃣ Acessar

- 🌐 Web: http://localhost:5173
- 📚 Docs: http://localhost:3002
- 💳 API: http://localhost:3001
- 📱 Mobile: Expo Go

## 🎉 Pronto!

Você tem a plataforma completa rodando localmente!

Para mais detalhes, veja [SETUP.md](./SETUP.md)
