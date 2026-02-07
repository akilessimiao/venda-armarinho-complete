-- ============================================================================
-- Venda Armarinho - Seed Data (Dados de Exemplo)
-- ============================================================================
-- Este arquivo contém dados de exemplo para testes

-- ============================================================================
-- 1. USUÁRIOS
-- ============================================================================
INSERT INTO users (email, password_hash, name, phone, role, is_active, is_verified) VALUES
('admin@vendaarmarinho.com.br', '$2b$10$YourHashedPasswordHere', 'Administrador', '84999999999', 'admin', TRUE, TRUE),
('operador@vendaarmarinho.com.br', '$2b$10$YourHashedPasswordHere', 'Operador', '84988888888', 'admin', TRUE, TRUE),
('cliente1@email.com', '$2b$10$YourHashedPasswordHere', 'João Silva', '84987654321', 'customer', TRUE, TRUE),
('cliente2@email.com', '$2b$10$YourHashedPasswordHere', 'Maria Santos', '84987654322', 'customer', TRUE, TRUE),
('cliente3@email.com', '$2b$10$YourHashedPasswordHere', 'Pedro Oliveira', '84987654323', 'customer', TRUE, TRUE);

-- ============================================================================
-- 2. CATEGORIAS
-- ============================================================================
INSERT INTO categories (name, slug, description, is_active, display_order) VALUES
('Linhas', 'linhas', 'Linhas de costura de todas as cores e tipos', TRUE, 1),
('Agulhas', 'agulhas', 'Agulhas para costura à mão e máquina', TRUE, 2),
('Botões', 'botoes', 'Botões em diversos tamanhos e materiais', TRUE, 3),
('Tecidos', 'tecidos', 'Tecidos de algodão, lã, seda e sintéticos', TRUE, 4),
('Zíperes', 'ziperes', 'Zíperes de diferentes comprimentos e cores', TRUE, 5),
('Fitas', 'fitas', 'Fitas decorativas e funcionais', TRUE, 6),
('Ferramentas', 'ferramentas', 'Ferramentas para costura e artesanato', TRUE, 7),
('Aviamentos', 'aviamentos', 'Aviamentos diversos para projetos', TRUE, 8);

-- ============================================================================
-- 3. PRODUTOS - LINHAS
-- ============================================================================
INSERT INTO products (sku, name, slug, description, short_description, category_id, price, cost_price, stock_quantity, is_active, is_featured) VALUES
('LIN001', 'Linha de Costura Preta 1000m', 'linha-costura-preta-1000m', 'Linha de poliéster de alta qualidade, resistente e durável', 'Linha preta 1000m', 1, 12.50, 5.00, 150, TRUE, TRUE),
('LIN002', 'Linha de Costura Branca 1000m', 'linha-costura-branca-1000m', 'Linha de poliéster branca, ideal para costura em geral', 'Linha branca 1000m', 1, 12.50, 5.00, 200, TRUE, TRUE),
('LIN003', 'Linha de Costura Vermelha 1000m', 'linha-costura-vermelha-1000m', 'Linha de poliéster vermelha, cores vibrantes', 'Linha vermelha 1000m', 1, 12.50, 5.00, 100, TRUE, FALSE),
('LIN004', 'Linha de Costura Azul 1000m', 'linha-costura-azul-1000m', 'Linha de poliéster azul, perfeita para jeans', 'Linha azul 1000m', 1, 12.50, 5.00, 120, TRUE, FALSE),
('LIN005', 'Linha de Costura Sortida Kit 10 cores', 'linha-costura-sortida-kit', 'Kit com 10 cores diferentes de linha', 'Kit 10 cores', 1, 45.00, 18.00, 80, TRUE, TRUE);

-- ============================================================================
-- 4. PRODUTOS - AGULHAS
-- ============================================================================
INSERT INTO products (sku, name, slug, description, short_description, category_id, price, cost_price, stock_quantity, is_active, is_featured) VALUES
('AGU001', 'Agulha de Costura Manual Sortida', 'agulha-costura-manual-sortida', 'Kit com 20 agulhas de diferentes tamanhos', 'Kit 20 agulhas', 2, 8.90, 3.00, 300, TRUE, TRUE),
('AGU002', 'Agulha para Máquina de Costura', 'agulha-maquina-costura', 'Pacote com 5 agulhas para máquina', 'Agulha máquina 5un', 2, 15.00, 6.00, 200, TRUE, FALSE),
('AGU003', 'Agulha Serger/Overlock', 'agulha-serger-overlock', 'Agulhas específicas para máquina serger', 'Agulha serger 3un', 2, 22.50, 9.00, 100, TRUE, FALSE),
('AGU004', 'Agulha Bordado Dourada', 'agulha-bordado-dourada', 'Agulhas especiais para bordado', 'Agulha bordado 10un', 2, 12.00, 4.50, 150, TRUE, FALSE);

-- ============================================================================
-- 5. PRODUTOS - BOTÕES
-- ============================================================================
INSERT INTO products (sku, name, slug, description, short_description, category_id, price, cost_price, stock_quantity, is_active, is_featured) VALUES
('BOT001', 'Botão Plástico Sortido', 'botao-plastico-sortido', 'Kit com 100 botões de plástico em várias cores', 'Kit 100 botões', 3, 18.50, 7.00, 250, TRUE, TRUE),
('BOT002', 'Botão Madeira Natural', 'botao-madeira-natural', 'Botões de madeira natural, 15mm', 'Botão madeira 20un', 3, 14.00, 5.50, 180, TRUE, FALSE),
('BOT003', 'Botão Metal Prata', 'botao-metal-prata', 'Botões metálicos prateados, 18mm', 'Botão metal 12un', 3, 22.00, 8.50, 120, TRUE, FALSE),
('BOT004', 'Botão Resina Colorido', 'botao-resina-colorido', 'Botões de resina em cores variadas', 'Botão resina 30un', 3, 25.00, 9.50, 100, TRUE, FALSE);

-- ============================================================================
-- 6. PRODUTOS - TECIDOS
-- ============================================================================
INSERT INTO products (sku, name, slug, description, short_description, category_id, price, cost_price, stock_quantity, is_active, is_featured) VALUES
('TEC001', 'Tecido Algodão Estampado', 'tecido-algodao-estampado', 'Tecido 100% algodão com estampas variadas, 1,5m', 'Algodão estampado 1,5m', 4, 35.00, 14.00, 80, TRUE, TRUE),
('TEC002', 'Tecido Lã Pura', 'tecido-la-pura', 'Tecido de lã pura, ideal para roupas de inverno, 1m', 'Lã pura 1m', 4, 65.00, 26.00, 40, TRUE, FALSE),
('TEC003', 'Tecido Seda Natural', 'tecido-seda-natural', 'Seda natural de alta qualidade, 1m', 'Seda natural 1m', 4, 85.00, 34.00, 30, TRUE, FALSE),
('TEC004', 'Tecido Jeans Azul', 'tecido-jeans-azul', 'Jeans de alta qualidade, 1,5m', 'Jeans azul 1,5m', 4, 42.00, 17.00, 100, TRUE, TRUE);

-- ============================================================================
-- 7. PRODUTOS - ZÍPERES
-- ============================================================================
INSERT INTO products (sku, name, slug, description, short_description, category_id, price, cost_price, stock_quantity, is_active, is_featured) VALUES
('ZIP001', 'Zíper Nylon Sortido', 'ziper-nylon-sortido', 'Kit com 10 zíperes de nylon em cores variadas', 'Kit 10 zíperes', 5, 28.00, 11.00, 150, TRUE, TRUE),
('ZIP002', 'Zíper Metal Prateado', 'ziper-metal-prateado', 'Zíper metal prateado, 50cm', 'Zíper metal 50cm', 5, 8.50, 3.40, 200, TRUE, FALSE),
('ZIP003', 'Zíper Invisível Preto', 'ziper-invisivel-preto', 'Zíper invisível preto, 60cm', 'Zíper invisível 60cm', 5, 12.00, 4.80, 120, TRUE, FALSE),
('ZIP004', 'Zíper Grosso Colorido', 'ziper-grosso-colorido', 'Zíper grosso em cores variadas, 30cm', 'Zíper grosso 30cm', 5, 6.50, 2.60, 180, TRUE, FALSE);

-- ============================================================================
-- 8. PRODUTOS - FITAS
-- ============================================================================
INSERT INTO products (sku, name, slug, description, short_description, category_id, price, cost_price, stock_quantity, is_active, is_featured) VALUES
('FIT001', 'Fita Cetim Colorida', 'fita-cetim-colorida', 'Kit com 10 cores de fita cetim, 2m cada', 'Fita cetim 10 cores', 6, 32.00, 12.80, 100, TRUE, TRUE),
('FIT002', 'Fita Renda Branca', 'fita-renda-branca', 'Fita de renda branca, 5m', 'Fita renda 5m', 6, 18.00, 7.20, 150, TRUE, FALSE),
('FIT003', 'Fita Viés Colorida', 'fita-vies-colorida', 'Fita viés em cores variadas, 10m', 'Fita viés 10m', 6, 15.00, 6.00, 120, TRUE, FALSE),
('FIT004', 'Fita Decorativa Glitter', 'fita-decorativa-glitter', 'Fita decorativa com glitter, 3m', 'Fita glitter 3m', 6, 22.00, 8.80, 80, TRUE, FALSE);

-- ============================================================================
-- 9. PRODUTOS - FERRAMENTAS
-- ============================================================================
INSERT INTO products (sku, name, slug, description, short_description, category_id, price, cost_price, stock_quantity, is_active, is_featured) VALUES
('FER001', 'Kit Tesoura Costura', 'kit-tesoura-costura', 'Kit com 3 tesouras de diferentes tamanhos', 'Kit 3 tesouras', 7, 45.00, 18.00, 60, TRUE, TRUE),
('FER002', 'Dedal Protetor', 'dedal-protetor', 'Dedal de metal para proteção ao costurar', 'Dedal metal', 7, 8.00, 3.20, 250, TRUE, FALSE),
('FER003', 'Alfinete Costura', 'alfinete-costura', 'Caixa com 100 alfinetes de costura', 'Alfinetes 100un', 7, 12.00, 4.80, 180, TRUE, FALSE),
('FER004', 'Régua Medição Costura', 'regua-medicao-costura', 'Régua de metal para medição, 60cm', 'Régua 60cm', 7, 28.00, 11.20, 100, TRUE, FALSE);

-- ============================================================================
-- 10. CLIENTES
-- ============================================================================
INSERT INTO customers (user_id, cpf, birth_date, gender, total_orders, total_spent, loyalty_points) VALUES
(3, '12345678900', '1990-05-15', 'M', 5, 450.00, 450),
(4, '98765432100', '1985-08-22', 'F', 3, 280.00, 280),
(5, '55555555555', '1992-12-10', 'M', 2, 150.00, 150);

-- ============================================================================
-- 11. ENDEREÇOS
-- ============================================================================
INSERT INTO addresses (user_id, type, street, number, complement, neighborhood, city, state, postal_code, is_default) VALUES
(3, 'both', 'Rua das Flores', '123', 'Apto 401', 'Centro', 'Fortaleza', 'CE', '60060-090', TRUE),
(4, 'both', 'Avenida Paulista', '1000', 'Sala 200', 'Bela Vista', 'São Paulo', 'SP', '01311-100', TRUE),
(5, 'both', 'Rua XV de Novembro', '500', 'Casa 10', 'Centro', 'Curitiba', 'PR', '80010-160', TRUE);

-- ============================================================================
-- 12. CUPONS
-- ============================================================================
INSERT INTO coupons (code, description, discount_type, discount_value, min_order_amount, usage_limit, is_active, valid_from, valid_until, created_by) VALUES
('BEMVINDO10', 'Desconto de boas-vindas 10%', 'percentage', 10.00, 50.00, 100, TRUE, NOW(), DATE_ADD(NOW(), INTERVAL 30 DAY), 1),
('PRIMEIRACOMPRA', 'Primeira compra - 15% off', 'percentage', 15.00, 100.00, 50, TRUE, NOW(), DATE_ADD(NOW(), INTERVAL 60 DAY), 1),
('DESCONTO50', 'Desconto fixo de R$ 50', 'fixed', 50.00, 200.00, 25, TRUE, NOW(), DATE_ADD(NOW(), INTERVAL 30 DAY), 1);

-- ============================================================================
-- 13. CONFIGURAÇÕES
-- ============================================================================
INSERT INTO settings (key_name, value, description, is_public) VALUES
('store_name', 'Venda Armarinho', 'Nome da loja', TRUE),
('store_email', 'contato@vendaarmarinho.com.br', 'Email de contato', TRUE),
('store_phone', '84999999999', 'Telefone de contato', TRUE),
('store_address', 'Rua das Flores, 123 - Centro - Fortaleza, CE', 'Endereço da loja', TRUE),
('tax_rate', '0.15', 'Taxa de imposto (15%)', FALSE),
('shipping_cost', '15.00', 'Custo de envio padrão', FALSE),
('free_shipping_threshold', '200.00', 'Frete grátis acima de R$ 200', FALSE),
('currency', 'BRL', 'Moeda padrão', TRUE),
('timezone', 'America/Fortaleza', 'Fuso horário', FALSE);

-- ============================================================================
-- Fim do Seed
-- ============================================================================
