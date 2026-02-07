# 📄 Ativar GitHub Pages

Guia para publicar a documentação no GitHub Pages.

## 📋 Passo a Passo

### 1. Preparar Documentação

A documentação está em `docs/` e já está pronta para ser publicada.

### 2. Acessar Configurações

1. Vá para: https://github.com/akilessimiao/venda-armarinho-complete
2. Clique em **Settings** (engrenagem)
3. No menu esquerdo, clique em **Pages**

### 3. Configurar Source

1. Em **Source**, selecione **Deploy from a branch**
2. Em **Branch**, selecione:
   - Branch: `main`
   - Folder: `/docs`
3. Clique em **Save**

### 4. Aguardar Deploy

- GitHub irá construir e publicar automaticamente
- Pode levar alguns minutos
- Você verá um link como: `https://akilessimiao.github.io/venda-armarinho-complete/`

### 5. Verificar

1. Vá para **Actions**
2. Procure por um workflow chamado **pages build and deployment**
3. Verifique se passou ✅

## 🌐 Acessar Documentação

Após o deploy, acesse:

```
https://akilessimiao.github.io/venda-armarinho-complete/
```

## 🔧 Configurações Avançadas

### Custom Domain

Se tiver um domínio próprio:

1. Em **Settings → Pages**
2. Em **Custom domain**, insira seu domínio
3. Configure DNS records no seu registrador
4. Clique em **Save**

### HTTPS

- GitHub Pages fornece HTTPS automaticamente
- Certificado é renovado automaticamente
- Sem custo adicional

### Proteção de Branch

Para proteger a branch main:

1. Em **Settings → Branches**
2. Clique em **Add rule**
3. Padrão: `main`
4. Ative **Require pull request reviews**
5. Clique em **Create**

## 📊 Monitorar Deploy

### Ver Status

1. Vá para **Actions**
2. Procure por **pages build and deployment**
3. Verifique o status

### Ver Logs

1. Clique no workflow
2. Clique em **pages build and deployment**
3. Veja os logs detalhados

## 🚀 Atualizar Documentação

Toda vez que você fizer push para `main`, a documentação será atualizada automaticamente.

```bash
# Fazer mudanças
cd docs
# ... editar arquivos ...

# Commit e push
git add .
git commit -m "docs: atualizar documentação"
git push origin main

# GitHub Pages será atualizado automaticamente
```

## 🔒 Segurança

- ✅ HTTPS obrigatório
- ✅ Certificado SSL automático
- ✅ Proteção contra DDoS
- ✅ Sem custo adicional

## 📱 Responsividade

A documentação é totalmente responsiva:
- ✅ Desktop
- ✅ Tablet
- ✅ Mobile

## 🎨 Customização

Para customizar a documentação:

1. Edite `docs/index.html`
2. Edite `docs/server.js` (se necessário)
3. Faça push para `main`
4. GitHub Pages será atualizado

## 🧪 Testar Localmente

```bash
cd docs
node server.js
# Acesse http://localhost:3002
```

## 📞 Suporte

Se tiver problemas:

1. Verifique se a branch está correta
2. Verifique se a pasta está correta
3. Verifique os logs do workflow
4. Abra uma issue no GitHub

---

**Versão**: 1.0.0  
**Última atualização**: Fevereiro 2026
