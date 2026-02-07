# 🔧 Configuração do Banco de Dados

Guia completo para configurar o banco de dados da Venda Armarinho.

## 📋 Opções de Banco de Dados

### Opção 1: Supabase (Recomendado)

**Vantagens:**
- ✅ Hospedado na nuvem
- ✅ Sem manutenção
- ✅ Backup automático
- ✅ Escalável
- ✅ Gratuito para começar

**Chaves Encontradas:**
```
SUPABASE_URL=https://rqhjshztxyzxcuggitvq.supabase.co
SUPABASE_ANON_KEY=sb_publishable_QKhdw6GmnU15_TKP4MKyWQ__gttIVN5
```

**Setup:**
1. Acesse https://supabase.com
2. Crie um novo projeto
3. Copie as chaves acima
4. Cole em `api/.env`

### Opção 2: MySQL Local

**Vantagens:**
- ✅ Controle total
- ✅ Sem custos
- ✅ Rápido para desenvolvimento

**Requisitos:**
- MySQL 5.7+
- ou MariaDB 10.3+

**Setup:**
```bash
# Instalar MySQL (macOS)
brew install mysql

# Instalar MySQL (Ubuntu)
sudo apt-get install mysql-server

# Iniciar MySQL
mysql -u root -p

# Criar banco de dados
CREATE DATABASE venda_armarinho CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

# Criar usuário
CREATE USER 'venda'@'localhost' IDENTIFIED BY 'senha-segura';
GRANT ALL PRIVILEGES ON venda_armarinho.* TO 'venda'@'localhost';
FLUSH PRIVILEGES;

# Executar schema
mysql -u venda -p venda_armarinho < database/schema.sql
```

### Opção 3: Docker

**Vantagens:**
- ✅ Isolado
- ✅ Reproducível
- ✅ Fácil de limpar

**Setup:**
```bash
# Criar arquivo docker-compose.yml
cat > docker-compose.db.yml << EOF
version: '3.8'
services:
  mysql:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: venda_armarinho
      MYSQL_USER: venda
      MYSQL_PASSWORD: senha-segura
    ports:
      - "3306:3306"
    volumes:
      - mysql_data:/var/lib/mysql
      - ./database/schema.sql:/docker-entrypoint-initdb.d/schema.sql
volumes:
  mysql_data:
EOF

# Iniciar
docker-compose -f docker-compose.db.yml up -d

# Parar
docker-compose -f docker-compose.db.yml down
```

## 🔑 Variáveis de Ambiente

### Para Supabase

```bash
# api/.env
SUPABASE_URL=https://rqhjshztxyzxcuggitvq.supabase.co
SUPABASE_ANON_KEY=sb_publishable_QKhdw6GmnU15_TKP4MKyWQ__gttIVN5
SUPABASE_SERVICE_KEY=seu-service-key-aqui
```

### Para MySQL

```bash
# api/.env
DB_HOST=localhost
DB_PORT=3306
DB_USER=venda
DB_PASSWORD=senha-segura
DB_NAME=venda_armarinho
DB_CHARSET=utf8mb4
```

## 📊 Estrutura do Schema

O banco de dados possui 18 tabelas principais:

### Usuários e Autenticação
- `users` - Usuários do sistema
- `customers` - Dados adicionais de clientes
- `addresses` - Endereços de entrega/faturamento

### Produtos
- `categories` - Categorias de produtos
- `products` - Produtos
- `product_images` - Imagens dos produtos

### Vendas
- `shopping_carts` - Carrinhos de compras
- `cart_items` - Itens do carrinho
- `orders` - Pedidos
- `order_items` - Itens dos pedidos

### Pagamentos
- `payments` - Pagamentos
- `receipts` - Cupons fiscais/não-fiscais

### Outros
- `reviews` - Avaliações de produtos
- `coupons` - Cupons de desconto
- `inventory_logs` - Log de inventário
- `notifications` - Notificações
- `activity_logs` - Log de atividades
- `settings` - Configurações

## 🌱 Seed Data (Dados de Exemplo)

Para popular o banco com dados de exemplo:

```bash
# Executar script de seed
mysql -u venda -p venda_armarinho < database/seeds/seed.sql

# Ou via Node.js
node database/seeds/seed.js
```

## 🔄 Migrations

Para aplicar mudanças no schema:

```bash
# Gerar migration
node database/migrations/create-migration.js "nome-da-migration"

# Aplicar migrations
node database/migrations/migrate.js

# Reverter última migration
node database/migrations/rollback.js
```

## 📈 Backups

### Backup Manual

```bash
# MySQL
mysqldump -u venda -p venda_armarinho > backup-$(date +%Y%m%d).sql

# Restaurar
mysql -u venda -p venda_armarinho < backup-20260207.sql
```

### Backup Automático

```bash
# Criar script de backup
cat > backup.sh << EOF
#!/bin/bash
BACKUP_DIR="./backups"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
mkdir -p $BACKUP_DIR
mysqldump -u venda -p venda_armarinho > $BACKUP_DIR/backup_$TIMESTAMP.sql
echo "Backup criado: $BACKUP_DIR/backup_$TIMESTAMP.sql"
EOF

# Tornar executável
chmod +x backup.sh

# Agendar com cron (diariamente às 2 AM)
# 0 2 * * * /path/to/backup.sh
```

## 🧪 Testes

### Verificar Conexão

```bash
# Supabase
curl -X GET https://rqhjshztxyzxcuggitvq.supabase.co/rest/v1/users \
  -H "apikey: sb_publishable_QKhdw6GmnU15_TKP4MKyWQ__gttIVN5" \
  -H "Authorization: Bearer sb_publishable_QKhdw6GmnU15_TKP4MKyWQ__gttIVN5"

# MySQL
mysql -u venda -p -e "SELECT VERSION();"
```

### Verificar Schema

```bash
# Listar tabelas
mysql -u venda -p venda_armarinho -e "SHOW TABLES;"

# Ver estrutura de uma tabela
mysql -u venda -p venda_armarinho -e "DESCRIBE users;"
```

## 🔒 Segurança

### Boas Práticas

1. **Senhas Fortes**
   - Mínimo 16 caracteres
   - Letras maiúsculas e minúsculas
   - Números e símbolos

2. **Backups Regulares**
   - Diariamente
   - Armazenar em local seguro
   - Testar restauração

3. **Acesso Restrito**
   - Usuário específico para aplicação
   - Sem acesso root
   - Firewall configurado

4. **Criptografia**
   - SSL/TLS para conexões
   - Dados sensíveis criptografados
   - Chaves seguras

## 📞 Suporte

Se tiver problemas:

1. Verifique a conexão
2. Verifique as credenciais
3. Verifique os logs
4. Abra uma issue no GitHub

---

**Versão**: 1.0.0  
**Última atualização**: Fevereiro 2026
