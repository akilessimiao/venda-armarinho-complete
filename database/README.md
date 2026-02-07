# 📊 Banco de Dados - Venda Armarinho

Documentação completa sobre o banco de dados da plataforma.

## 📋 Conteúdo

- **schema.sql** - Estrutura completa do banco (18 tabelas)
- **seeds/seed.sql** - Dados de exemplo para testes
- **CONFIG.md** - Guia de configuração
- **README.md** - Este arquivo

## 🚀 Quick Start

### 1. Supabase (Recomendado)

```bash
# Chaves já configuradas:
SUPABASE_URL=https://rqhjshztxyzxcuggitvq.supabase.co
SUPABASE_ANON_KEY=sb_publishable_QKhdw6GmnU15_TKP4MKyWQ__gttIVN5
```

Basta usar estas chaves em `api/.env`

### 2. MySQL Local

```bash
# 1. Criar banco
mysql -u root -p -e "CREATE DATABASE venda_armarinho CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"

# 2. Criar usuário
mysql -u root -p -e "CREATE USER 'venda'@'localhost' IDENTIFIED BY 'senha'; GRANT ALL PRIVILEGES ON venda_armarinho.* TO 'venda'@'localhost'; FLUSH PRIVILEGES;"

# 3. Aplicar schema
mysql -u venda -p venda_armarinho < database/schema.sql

# 4. Aplicar dados de exemplo
mysql -u venda -p venda_armarinho < database/seeds/seed.sql
```

### 3. Docker

```bash
# Iniciar MySQL no Docker
docker run -d \
  --name mysql-venda \
  -e MYSQL_ROOT_PASSWORD=root \
  -e MYSQL_DATABASE=venda_armarinho \
  -e MYSQL_USER=venda \
  -e MYSQL_PASSWORD=senha \
  -p 3306:3306 \
  mysql:8.0

# Aplicar schema
mysql -h 127.0.0.1 -u venda -p venda_armarinho < database/schema.sql
```

## 📊 Estrutura das Tabelas

### Usuários (3 tabelas)
- `users` - Usuários do sistema
- `customers` - Dados adicionais de clientes
- `addresses` - Endereços

### Produtos (3 tabelas)
- `categories` - Categorias
- `products` - Produtos
- `product_images` - Imagens

### Vendas (4 tabelas)
- `shopping_carts` - Carrinhos
- `cart_items` - Itens do carrinho
- `orders` - Pedidos
- `order_items` - Itens dos pedidos

### Pagamentos (2 tabelas)
- `payments` - Pagamentos
- `receipts` - Cupons

### Outros (6 tabelas)
- `reviews` - Avaliações
- `coupons` - Cupons de desconto
- `inventory_logs` - Log de inventário
- `notifications` - Notificações
- `activity_logs` - Log de atividades
- `settings` - Configurações

## 🔍 Diagrama de Relacionamentos

```
users (1) ──── (N) customers
users (1) ──── (N) addresses
users (1) ──── (N) orders
users (1) ──── (N) reviews
users (1) ──── (N) shopping_carts

categories (1) ──── (N) products
products (1) ──── (N) product_images
products (1) ──── (N) order_items
products (1) ──── (N) reviews

shopping_carts (1) ──── (N) cart_items
cart_items (N) ──── (1) products

orders (1) ──── (N) order_items
orders (1) ──── (N) payments
orders (1) ──── (N) receipts
orders (1) ──── (1) addresses (billing)
orders (1) ──── (1) addresses (shipping)

payments (1) ──── (N) receipts
```

## 📈 Dados de Exemplo

O arquivo `seeds/seed.sql` contém:

- ✅ 5 usuários (2 admin, 3 clientes)
- ✅ 8 categorias
- ✅ 20 produtos
- ✅ 3 clientes com dados
- ✅ 3 endereços
- ✅ 3 cupons de desconto
- ✅ 9 configurações

## 🔐 Segurança

### Boas Práticas Implementadas

- ✅ Senhas com hash (bcrypt)
- ✅ Soft delete (deleted_at)
- ✅ Timestamps automáticos
- ✅ Índices para performance
- ✅ Foreign keys com cascade
- ✅ Validação de dados
- ✅ Auditoria de atividades

## 📝 Queries Úteis

### Produtos Mais Vendidos

```sql
SELECT 
  p.name,
  COUNT(oi.id) as total_sold,
  SUM(oi.quantity) as total_quantity,
  SUM(oi.subtotal) as total_revenue
FROM products p
LEFT JOIN order_items oi ON p.id = oi.product_id
LEFT JOIN orders o ON oi.order_id = o.id
WHERE o.status != 'cancelled'
GROUP BY p.id
ORDER BY total_quantity DESC
LIMIT 10;
```

### Clientes Mais Ativos

```sql
SELECT 
  u.name,
  COUNT(o.id) as total_orders,
  SUM(o.total) as total_spent,
  AVG(o.total) as avg_order
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.role = 'customer'
GROUP BY u.id
ORDER BY total_spent DESC
LIMIT 10;
```

### Vendas por Categoria

```sql
SELECT 
  c.name,
  COUNT(DISTINCT o.id) as total_orders,
  SUM(oi.subtotal) as total_revenue
FROM categories c
LEFT JOIN products p ON c.id = p.category_id
LEFT JOIN order_items oi ON p.id = oi.product_id
LEFT JOIN orders o ON oi.order_id = o.id
WHERE o.status != 'cancelled'
GROUP BY c.id
ORDER BY total_revenue DESC;
```

### Estoque Baixo

```sql
SELECT 
  id,
  name,
  stock_quantity,
  low_stock_threshold
FROM products
WHERE stock_quantity <= low_stock_threshold
ORDER BY stock_quantity ASC;
```

## 🧪 Testes

### Verificar Integridade

```sql
-- Verificar foreign keys
SELECT CONSTRAINT_NAME, TABLE_NAME, REFERENCED_TABLE_NAME
FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS
WHERE CONSTRAINT_SCHEMA = 'venda_armarinho';

-- Verificar índices
SHOW INDEXES FROM products;

-- Verificar views
SHOW FULL TABLES WHERE TABLE_TYPE LIKE 'VIEW';
```

## 📊 Views Disponíveis

### sales_by_category
Vendas agrupadas por categoria

### top_selling_products
Produtos mais vendidos

### top_customers
Clientes que mais gastaram

## 🔄 Backups

### Criar Backup

```bash
mysqldump -u venda -p venda_armarinho > backup-$(date +%Y%m%d).sql
```

### Restaurar Backup

```bash
mysql -u venda -p venda_armarinho < backup-20260207.sql
```

## 📞 Suporte

Se tiver dúvidas:

1. Leia [CONFIG.md](./CONFIG.md)
2. Verifique os logs
3. Abra uma issue no GitHub

---

**Versão**: 1.0.0  
**Última atualização**: Fevereiro 2026
