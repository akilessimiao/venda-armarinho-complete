# 🔐 Configurar Secrets no GitHub

Este guia explica como configurar as variáveis de ambiente (secrets) no GitHub para CI/CD.

## 📋 Passo a Passo

### 1. Acessar Configurações

1. Vá para: https://github.com/akilessimiao/venda-armarinho-complete
2. Clique em **Settings** (engrenagem)
3. No menu esquerdo, clique em **Secrets and variables**
4. Clique em **Actions**

### 2. Adicionar Secrets

Clique em **New repository secret** e adicione cada um:

#### STRIPE_SECRET_KEY
- **Nome**: `STRIPE_SECRET_KEY`
- **Valor**: Sua chave secreta do Stripe (começa com `sk_test_` ou `sk_live_`)
- **Onde obter**: https://dashboard.stripe.com/apikeys

#### STRIPE_PUBLISHABLE_KEY
- **Nome**: `STRIPE_PUBLISHABLE_KEY`
- **Valor**: Sua chave pública do Stripe (começa com `pk_test_` ou `pk_live_`)
- **Onde obter**: https://dashboard.stripe.com/apikeys

#### MERCADOPAGO_ACCESS_TOKEN
- **Nome**: `MERCADOPAGO_ACCESS_TOKEN`
- **Valor**: Seu token de acesso do MercadoPago
- **Onde obter**: https://www.mercadopago.com.br/developers/pt/docs/checkout-api/additional-content/your-integrations/credentials

#### WHATSAPP_ACCESS_TOKEN
- **Nome**: `WHATSAPP_ACCESS_TOKEN`
- **Valor**: Seu token de acesso da WhatsApp Business API
- **Onde obter**: https://developers.facebook.com/docs/whatsapp/cloud-api/get-started

#### WHATSAPP_BUSINESS_PHONE_ID
- **Nome**: `WHATSAPP_BUSINESS_PHONE_ID`
- **Valor**: ID do seu número de telefone do WhatsApp Business
- **Onde obter**: https://developers.facebook.com/docs/whatsapp/cloud-api/reference/phone-numbers

#### SUPABASE_URL
- **Nome**: `SUPABASE_URL`
- **Valor**: URL do seu projeto Supabase (ex: `https://xxxxx.supabase.co`)
- **Onde obter**: https://app.supabase.com → Project Settings → API

#### SUPABASE_KEY
- **Nome**: `SUPABASE_KEY`
- **Valor**: Chave anon do Supabase
- **Onde obter**: https://app.supabase.com → Project Settings → API

## ✅ Verificar Secrets

Após adicionar todos os secrets:

1. Vá para **Actions**
2. Selecione o workflow **CI**
3. Clique em **Run workflow**
4. Verifique se o workflow passa

## 🔒 Segurança

- ✅ Secrets são criptografados
- ✅ Não aparecem nos logs
- ✅ Não são visíveis no repositório
- ✅ Apenas você e colaboradores podem gerenciar
- ✅ Cada secret é isolado

## 🚨 Boas Práticas

1. **Nunca compartilhe secrets** em mensagens ou comentários
2. **Rotacione secrets regularmente** (a cada 90 dias)
3. **Use secrets diferentes** para dev, staging e produção
4. **Monitore o acesso** aos secrets
5. **Revogue secrets** se comprometidos

## 📝 Secrets por Ambiente

### Development
- Use chaves de teste (test keys)
- Prefixo: `sk_test_`, `pk_test_`

### Production
- Use chaves de produção (live keys)
- Prefixo: `sk_live_`, `pk_live_`
- Adicione sufixo: `_PROD`

Exemplo:
```
STRIPE_SECRET_KEY_PROD=sk_live_...
STRIPE_PUBLISHABLE_KEY_PROD=pk_live_...
```

## 🔄 Atualizar Secrets

Para atualizar um secret:

1. Vá para **Settings → Secrets and variables → Actions**
2. Clique no secret que deseja atualizar
3. Clique em **Update secret**
4. Insira o novo valor
5. Clique em **Update secret**

## 🗑️ Deletar Secrets

Para deletar um secret:

1. Vá para **Settings → Secrets and variables → Actions**
2. Clique no secret que deseja deletar
3. Clique em **Delete**
4. Confirme a deleção

## 🧪 Testar Secrets

Para verificar se os secrets estão funcionando:

1. Vá para **Actions**
2. Selecione o workflow **CI**
3. Clique em **Run workflow**
4. Verifique os logs

## 📞 Suporte

Se tiver problemas:

1. Verifique se o nome do secret está correto
2. Verifique se o valor está correto
3. Verifique se o workflow está usando o secret corretamente
4. Abra uma issue no GitHub

---

**Versão**: 1.0.0  
**Última atualização**: Fevereiro 2026
