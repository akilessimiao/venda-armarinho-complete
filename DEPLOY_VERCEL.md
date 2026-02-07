# 🚀 Deploy na Vercel - Venda Armarinho

Guia completo para fazer deploy do projeto na Vercel.

## 📋 Pré-requisitos

- ✅ Conta no GitHub (já configurada)
- ✅ Conta na Vercel (criar em https://vercel.com)
- ✅ Chaves do Supabase
- ✅ Projeto no GitHub

## 🔑 Variáveis de Ambiente Necessárias

```
VITE_SUPABASE_URL=https://rqhjshztxyzxcuggitvq.supabase.co
VITE_SUPABASE_ANON_KEY=sb_publishable_QKhdw6GmnU15_TKP4MKyWQ__gttIVN5
```

## 📝 Passo a Passo

### 1️⃣ Criar Conta na Vercel

1. Acesse https://vercel.com
2. Clique em **Sign Up**
3. Escolha **GitHub** como método de login
4. Autorize a Vercel a acessar seus repositórios

### 2️⃣ Importar Projeto

1. Na dashboard da Vercel, clique em **New Project**
2. Selecione o repositório: `venda-armarinho-complete`
3. Clique em **Import**

### 3️⃣ Configurar Variáveis de Ambiente

1. Na página de configuração do projeto, vá para **Environment Variables**
2. Adicione as seguintes variáveis:

```
Nome: VITE_SUPABASE_URL
Valor: https://rqhjshztxyzxcuggitvq.supabase.co

Nome: VITE_SUPABASE_ANON_KEY
Valor: sb_publishable_QKhdw6GmnU15_TKP4MKyWQ__gttIVN5
```

3. Clique em **Save**

### 4️⃣ Configurar Build Settings

1. Em **Build & Development Settings**:
   - **Framework**: Vite
   - **Build Command**: `pnpm build`
   - **Output Directory**: `dist`
   - **Install Command**: `pnpm install`

2. Clique em **Deploy**

### 5️⃣ Aguardar Deploy

- A Vercel vai clonar o repositório
- Instalar dependências
- Fazer build do projeto
- Publicar na URL: `venda-armarinho-complete.vercel.app`

## ✅ Após o Deploy

### Verificar Status

1. Acesse https://venda-armarinho-complete.vercel.app
2. Verifique se o site está funcionando
3. Teste as funcionalidades principais

### Configurar Domínio Customizado (Opcional)

1. Em **Settings** → **Domains**
2. Clique em **Add Domain**
3. Digite seu domínio: `seu-dominio.com`
4. Siga as instruções para configurar DNS

### Ativar Proteção com Senha (Opcional)

1. Em **Settings** → **Protection**
2. Ative **Password Protection**
3. Defina uma senha

## 🔄 Atualizações Automáticas

Toda vez que você fazer push para o GitHub:

1. A Vercel detecta automaticamente
2. Faz novo build
3. Publica a nova versão

Não é necessário fazer nada manual!

## 🐛 Troubleshooting

### Erro: "Build failed"

**Solução:**
1. Verifique se todas as variáveis de ambiente estão configuradas
2. Verifique se o `pnpm-workspace.yaml` está correto
3. Verifique se não há erros de TypeScript

### Erro: "Cannot find module"

**Solução:**
1. Verifique se todas as dependências estão no `package.json`
2. Execute `pnpm install` localmente para testar
3. Faça push das mudanças

### Site em branco

**Solução:**
1. Abra o DevTools (F12)
2. Verifique a aba Console para erros
3. Verifique se as variáveis de ambiente estão corretas

## 📊 Monitoramento

### Acessar Logs

1. Na dashboard do projeto, clique em **Deployments**
2. Clique no deployment mais recente
3. Vá para **Logs** para ver detalhes

### Verificar Performance

1. Em **Analytics**, veja:
   - Tempo de carregamento
   - Taxa de erro
   - Requisições por dia

## 🔐 Segurança

### Boas Práticas

1. ✅ Nunca committar `.env` no GitHub
2. ✅ Usar variáveis de ambiente da Vercel
3. ✅ Ativar proteção com senha se necessário
4. ✅ Usar HTTPS (automático na Vercel)
5. ✅ Revisar logs regularmente

## 📞 Suporte

Se tiver problemas:

1. Verifique a documentação: https://vercel.com/docs
2. Consulte os logs de build
3. Abra uma issue no GitHub
4. Contate o suporte da Vercel

## 🎉 Pronto!

Seu projeto está online na Vercel!

**URL:** https://venda-armarinho-complete.vercel.app

Compartilhe com seus clientes e comece a vender! 🚀
