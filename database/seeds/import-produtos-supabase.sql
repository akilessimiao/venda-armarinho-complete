-- ============================================================================
-- IMPORTAÇÃO DE PRODUTOS - SUPABASE
-- Execute este arquivo no SQL Editor do Supabase
-- ============================================================================

-- Desabilitar RLS temporariamente
ALTER TABLE produtos DISABLE ROW LEVEL SECURITY;

-- ============================================================================
-- BEBIDAS DESTILADAS
-- ============================================================================
INSERT INTO produtos (descricao, preco_venda, quantidade) VALUES
('Campari', 80.00, 1),
('Sky Vodka', 45.00, 1),
('Jack Daniells', 180.00, 1),
('Black With', 80.00, 1),
('Smirnoff', 70.00, 1);

-- ============================================================================
-- CACHAÇAS
-- ============================================================================
INSERT INTO produtos (descricao, preco_venda, quantidade) VALUES
('Cachaça 51 - 1L', 14.00, 3),
('Russov', 14.00, 3),
('Cachaça Pitu - 1L', 14.00, 5),
('Cachaça Carangueijo Ouro - 1L', 14.00, 3),
('Cachaça Carangueijo Ouro - 275ml', 9.00, 3),
('Cachaça Carangueijo Prata - 1L', 14.00, 1),
('Cachaça Carangueijo Limão - 1L', 18.00, 1),
('Cachaça São Tomé - 1L', 22.00, 2),
('Cachaça Gostosinha', 4.00, 13),
('Mansão Maromba', 22.00, 1);

-- ============================================================================
-- CERVEJAS
-- ============================================================================
INSERT INTO produtos (descricao, preco_venda, quantidade) VALUES
('Dreher - 1L', 30.00, 1),
('Devassa - Caixa', 38.00, 1),
('Devassa - Unidade', 4.00, 1),
('Império - Caixa', 44.00, 1),
('Império - Unidade', 5.00, 1),
('Lokal - Caixa', 33.00, 1),
('Lokal - Unidade', 3.00, 1),
('Schin - Caixa', 35.00, 1),
('Schin - Unidade', 3.50, 1),
('Itaipava - Caixa', 36.00, 1),
('Itaipava - Unidade', 4.00, 1),
('Amstel - Caixa', 48.00, 1),
('Amstel - Unidade', 5.00, 1),
('Budweiser - Caixa', 50.00, 1),
('Budweiser - Unidade', 5.00, 1),
('Brice Cabaré - Unidade', 7.00, 1),
('Cereser - Caixa', 24.00, 4),
('Prestige - Caixa', 16.00, 4);

-- ============================================================================
-- BEBIDAS MISTAS
-- ============================================================================
INSERT INTO produtos (descricao, preco_venda, quantidade) VALUES
('San Marino', 8.00, 3),
('Vinho Vermelhão', 20.00, 2),
('Preciosa do Vale', 45.00, 2),
('Matuta Bálsamo - 1L', 46.00, 1),
('Matuta Cristal - 1L', 45.00, 3),
('Matuta Cristal - 300ml', 17.00, 3);

-- ============================================================================
-- BEBIDAS LATAS
-- ============================================================================
INSERT INTO produtos (descricao, preco_venda, quantidade) VALUES
('Carangueijo Prata - Lata', 7.00, 17),
('Carangueijo Ouro - Lata', 7.00, 5),
('Pitu Limão - Lata', 7.00, 15),
('Ypioca - Lata', 7.00, 1),
('51 - Lata', 7.00, 1);

-- ============================================================================
-- REFRIGERANTES
-- ============================================================================
INSERT INTO produtos (descricao, preco_venda, quantidade) VALUES
('Coca Cola - 1L', 10.00, 1),
('Coca Cola - Lata', 5.00, 1),
('Pepsi', 8.00, 1),
('Dore Refrigerante', 8.00, 1);

-- ============================================================================
-- BEBIDAS NÃO ALCOÓLICAS
-- ============================================================================
INSERT INTO produtos (descricao, preco_venda, quantidade) VALUES
('Água Mineral', 2.00, 1),
('Água com Gás', 3.00, 1),
('Suco de Uva Del Vale', 9.00, 1),
('Infinity', 12.00, 1);

-- ============================================================================
-- DOSES
-- ============================================================================
INSERT INTO produtos (descricao, preco_venda, quantidade) VALUES
('Dose Pitu', 2.00, 1),
('Dose Dreher', 3.00, 1),
('Dose Carangueijo', 2.00, 1);

-- ============================================================================
-- ALIMENTOS - DOCES E SALGADOS
-- ============================================================================
INSERT INTO produtos (descricao, preco_venda, quantidade) VALUES
('Pastilha Halls', 3.00, 1),
('Pastilha Freegels', 2.50, 1),
('Pipoca Kro', 3.00, 1),
('Pipos', 5.00, 1),
('Biscoitos Recheado', 3.00, 1),
('Fruit Tella', 2.50, 1),
('Kisuk', 1.50, 1);

-- ============================================================================
-- ALIMENTOS - MASSAS E CONDIMENTOS
-- ============================================================================
INSERT INTO produtos (descricao, preco_venda, quantidade) VALUES
('Miojo Nissin Carne', 3.00, 1),
('Miojo Nissin Galinha', 3.50, 1),
('Cup Noodles', 8.00, 1),
('Macarrão Espaguete', 4.50, 1),
('Molho de Tomate', 2.50, 1);

-- ============================================================================
-- ALIMENTOS - INGREDIENTES
-- ============================================================================
INSERT INTO produtos (descricao, preco_venda, quantidade) VALUES
('Café Santa Clara', 18.00, 1),
('Óleo', 10.00, 1),
('Sal', 2.00, 1),
('Açúcar', 5.00, 1),
('Sazón', 0.50, 1),
('Margarina', 5.00, 1),
('Creme de Leite', 3.00, 1),
('Leite Condensado', 5.00, 1),
('Coloral', 3.00, 1),
('Dueto', 5.00, 1),
('Maionese Quero', 4.50, 1),
('Kitut', 12.00, 1);

-- ============================================================================
-- Re-ativar RLS
-- ============================================================================
ALTER TABLE produtos ENABLE ROW LEVEL SECURITY;

-- ============================================================================
-- Verificação: Contar produtos importados
-- ============================================================================
SELECT COUNT(*) as total_produtos FROM produtos;
