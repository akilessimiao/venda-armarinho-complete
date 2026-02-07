# Sistema de Login - Venda Armarinho

## 📋 Sumário

- [Visão Geral](#visão-geral)
- [Arquivos Criados](#arquivos-criados)
- [Funcionalidades](#funcionalidades)
- [Como Usar](#como-usar)
- [Configuração](#configuração)
- [Credenciais de Teste](#credenciais-de-teste)
- [Deploy](#deploy)

---

## 🎯 Visão Geral

Este sistema de login foi implementado para proteger o acesso ao sistema de vendas **Venda Armarinho**. Ele inclui autenticação simples com armazenamento local e redirecionamento automático.

---

## 📁 Arquivos Criados

| Arquivo | Descrição |
|---------|-----------|
| `login.html` | Página de login com design moderno e responsivo |
| `index.html` | Página principal com verificação de autenticação |
| `vercel.json` | Configuração para deploy no Vercel |
| `404.html` | Página de erro personalizada |
| `README_LOGIN.md` | Documentação do sistema de login |

---

## ✨ Funcionalidades

### Login
- ✅ Design moderno e responsivo
- ✅ Validação de credenciais
- ✅ Opção "Lembrar-me"
- ✅ Mensagens de erro/sucesso
- ✅ Credenciais de demonstração

### Segurança
- ✅ Verificação de login em todas as páginas
- ✅ Sessão expira após 24 horas
- ✅ Logout com confirmação
- ✅ Proteção contra acesso direto

### UX/UI
- ✅ Animações suaves
- ✅ Loading screen
- ✅ Design responsivo (mobile-friendly)
- ✅ Ícones Font Awesome
- ✅ Cores personalizadas

---

## 🚀 Como Usar

### 1. Credenciais Padrão

| Usuário | Senha | Permissão |
|---------|-------|-----------|
| `admin` | `admin123` | Administrador |
| `operador` | `operador123` | Operador |

### 2. Primeiro Acesso

1. Acesse a página: `https://seu-dominio.vercel.app` ou `https://akilessimiao.github.io/venda-armarinho-complete/`
2. Você será redirecionado automaticamente para a página de login
3. Insira suas credenciais
4. Clique em "Entrar"

### 3. Usando o Sistema

- Após login, você será redirecionado para a página principal
- Suas informações de usuário serão exibidas no cabeçalho
- Clique em "Sair" para encerrar a sessão

---

## ⚙️ Configuração

### Alterar Credenciais

Edite o arquivo `login.html`, procure por:

```javascript
const users = {
    'admin': { 
        password: 'admin123',  // Altere aqui
        role: 'admin',
        name: 'Administrador',
        redirect: 'index.html'
    },
    'operador': { 
        password: 'operador123',  // Altere aqui
        role: 'operador',
        name: 'Operador',
        redirect: 'index.html'
    }
};
