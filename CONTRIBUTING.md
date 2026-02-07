# 🤝 Guia de Contribuição

Obrigado por considerar contribuir para o Venda Armarinho! Este documento fornece diretrizes e instruções para contribuir.

## 📋 Código de Conduta

Este projeto adere a um Código de Conduta que esperamos que todos os contribuidores sigam. Por favor, leia [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) antes de contribuir.

## 🚀 Como Contribuir

### Reportar Bugs

Antes de criar um relatório de bug, verifique a lista de issues, pois você pode descobrir que o bug já foi relatado. Quando estiver criando um relatório de bug, inclua o máximo de detalhes possível:

- **Use um título claro e descritivo**
- **Descreva os passos exatos para reproduzir o problema**
- **Forneça exemplos específicos para demonstrar as etapas**
- **Descreva o comportamento observado e aponte exatamente o que é o problema**
- **Explique qual era o comportamento esperado e por quê**
- **Inclua screenshots e GIFs animadas se possível**
- **Inclua seu ambiente (SO, navegador, versão do Node.js, etc)**

### Sugerir Melhorias

Sugestões de melhorias são sempre bem-vindas. Ao criar uma sugestão de melhoria, inclua:

- **Use um título claro e descritivo**
- **Forneça uma descrição passo a passo da sugestão**
- **Forneça exemplos específicos para demonstrar as etapas**
- **Descreva o comportamento atual e o comportamento esperado**
- **Explique por quê essa melhoria seria útil**

### Pull Requests

- Preencha o template de PR fornecido
- Siga o guia de estilo do projeto
- Inclua testes apropriados
- Atualize a documentação conforme necessário
- Termine todos os arquivos com uma nova linha

## 📝 Processo de Desenvolvimento

### Setup Inicial

```bash
# 1. Fork o repositório
# 2. Clone seu fork
git clone https://github.com/seu-usuario/venda-armarinho-complete.git
cd venda-armarinho-complete

# 3. Adicione o repositório original como upstream
git remote add upstream https://github.com/akilessimiao/venda-armarinho-complete.git

# 4. Instale dependências
pnpm install
```

### Criando uma Branch

```bash
# Atualize a branch main
git fetch upstream
git checkout main
git merge upstream/main

# Crie uma nova branch para sua feature/fix
git checkout -b feature/sua-feature-nome
```

### Commits

- Use commits atômicos (um conceito por commit)
- Use mensagens de commit descritivas
- Siga o padrão: `tipo(escopo): descrição`

Exemplos:
```
feat(api): adicionar endpoint de pagamento PIX
fix(web): corrigir bug de sincronização offline
docs(readme): atualizar instruções de instalação
style(mobile): formatar código com prettier
test(payment): adicionar testes para Stripe
```

Tipos de commit:
- `feat` - Nova funcionalidade
- `fix` - Correção de bug
- `docs` - Mudanças na documentação
- `style` - Formatação de código
- `refactor` - Refatoração de código
- `test` - Adição ou atualização de testes
- `chore` - Tarefas de manutenção

### Testes

Antes de fazer push, certifique-se de que:

```bash
# Rode os testes
pnpm test

# Verifique o linting
pnpm lint

# Build bem-sucedido
pnpm build
```

### Push e Pull Request

```bash
# Push para seu fork
git push origin feature/sua-feature-nome

# Abra um PR no GitHub
# Preencha o template de PR
# Aguarde a revisão
```

## 🎨 Guia de Estilo

### JavaScript/TypeScript

- Use `const` por padrão, `let` quando necessário, nunca `var`
- Use async/await em vez de callbacks
- Use arrow functions quando apropriado
- Adicione tipos TypeScript quando possível

### React

- Use functional components com hooks
- Nomeie componentes com PascalCase
- Use props destructuring
- Adicione PropTypes ou TypeScript

### CSS/Tailwind

- Use classes Tailwind em vez de CSS customizado quando possível
- Mantenha a especificidade baixa
- Use variáveis CSS para cores e espaçamento

### Documentação

- Use Markdown para documentação
- Mantenha linhas com menos de 80 caracteres
- Use exemplos de código quando apropriado

## 🔍 Revisão de Código

Todos os PRs serão revisados por um ou mais mantenedores. Durante a revisão:

- O código será verificado quanto à qualidade e estilo
- Testes serão executados automaticamente
- Documentação será verificada
- Compatibilidade será testada

Feedback será fornecido como comentários no PR.

## 📚 Estrutura do Projeto

```
venda-armarinho-complete/
├── api/                    # API de Pagamento
├── docs/                   # Documentação Web
├── multiplatform/          # App Multiplataforma
├── LICENSE
├── README.md
└── CONTRIBUTING.md
```

## 🐛 Áreas de Contribuição

### API
- Novos métodos de pagamento
- Melhorias em segurança
- Otimização de performance
- Testes unitários

### Web
- Novas funcionalidades
- Melhorias de UI/UX
- Testes E2E
- Acessibilidade

### Mobile
- Novas funcionalidades
- Otimização de performance
- Testes
- Suporte a novos dispositivos

### Documentação
- Melhorias no README
- Exemplos adicionais
- Tradução para outros idiomas
- Guias de integração

## ✅ Checklist para PR

Antes de submeter seu PR, verifique:

- [ ] Meu código segue o guia de estilo do projeto
- [ ] Executei `pnpm lint` e não há erros
- [ ] Executei `pnpm test` e todos os testes passam
- [ ] Adicionei testes para novas funcionalidades
- [ ] Atualizei a documentação conforme necessário
- [ ] Meus commits têm mensagens descritivas
- [ ] Não há conflitos com a branch main

## 🎯 Prioridades

Estamos particularmente interessados em:

1. **Correções de bugs** - Sempre bem-vindas
2. **Testes** - Melhorar cobertura de testes
3. **Documentação** - Melhorar guias e exemplos
4. **Performance** - Otimizações
5. **Acessibilidade** - Melhorias de a11y
6. **Novas funcionalidades** - Alinhadas com o roadmap

## 📞 Contato

- 📧 Email: contato@vendaarmarinho.com.br
- 📱 WhatsApp: 84 99999-9999
- 💬 GitHub Discussions: [Abrir discussão](https://github.com/akilessimiao/venda-armarinho-complete/discussions)

## 📜 Licença

Ao contribuir, você concorda que suas contribuições serão licenciadas sob a Licença MIT.

---

Obrigado por contribuir! 🙌
