-- ============================================================================
-- Importação de Produtos - Bebidas e Alimentos
-- ============================================================================

-- ============================================================================
-- 1. CRIAR CATEGORIAS
-- ============================================================================
INSERT INTO categories (name, slug, description, is_active, display_order) VALUES
('Bebidas Destiladas', 'bebidas-destiladas', 'Bebidas destiladas premium', TRUE, 9),
('Cachaças', 'cachacas', 'Cachaças de qualidade', TRUE, 10),
('Cervejas', 'cervejas', 'Cervejas nacionais e importadas', TRUE, 11),
('Bebidas Mistas', 'bebidas-mistas', 'Bebidas mistas e vinhos', TRUE, 12),
('Bebidas Latas', 'bebidas-latas', 'Bebidas em lata', TRUE, 13),
('Refrigerantes', 'refrigerantes', 'Refrigerantes diversos', TRUE, 14),
('Bebidas Não Alcoólicas', 'bebidas-nao-alcoolicas', 'Água, sucos e bebidas sem álcool', TRUE, 15),
('Doses', 'doses', 'Doses individuais', TRUE, 16),
('Alimentos', 'alimentos', 'Alimentos, condimentos e ingredientes', TRUE, 17);

-- ============================================================================
-- 2. BEBIDAS DESTILADAS
-- ============================================================================
INSERT INTO products (sku, name, slug, description, short_description, category_id, price, cost_price, stock_quantity, is_active, is_featured) VALUES
('CAMP001', 'Campari', 'campari', 'Campari - Preço: R$ 80.00', 'Campari', 9, 80.00, 48.00, 1, TRUE, TRUE),
('SKY001', 'Sky Vodka', 'sky-vodka', 'Sky Vodka - Preço: R$ 45.00', 'Sky Vodka', 9, 45.00, 27.00, 1, TRUE, FALSE),
('JACK001', 'Jack Daniells', 'jack-daniells', 'Jack Daniells - Preço: R$ 180.00', 'Jack Daniells', 9, 180.00, 108.00, 1, TRUE, TRUE),
('BLACK001', 'Black With', 'black-with', 'Black With - Preço: R$ 80.00', 'Black With', 9, 80.00, 48.00, 1, TRUE, TRUE),
('SMIR001', 'Smirnoff', 'smirnoff', 'Smirnoff - Preço: R$ 70.00', 'Smirnoff', 9, 70.00, 42.00, 1, TRUE, FALSE);

-- ============================================================================
-- 3. CACHAÇAS
-- ============================================================================
INSERT INTO products (sku, name, slug, description, short_description, category_id, price, cost_price, stock_quantity, is_active, is_featured) VALUES
('CACH51001', 'Cachaça 51 - 1L', 'cachaca-51-1l', 'Cachaça 51 - 1L - Preço: R$ 14.00', 'Cachaça 51 - 1L', 10, 14.00, 8.40, 3, TRUE, FALSE),
('RUSS001', 'Russov', 'russov', 'Russov - Preço: R$ 14.00', 'Russov', 10, 14.00, 8.40, 3, TRUE, FALSE),
('PITU001', 'Cachaça Pitu - 1L', 'cachaca-pitu-1l', 'Cachaça Pitu - 1L - Preço: R$ 14.00', 'Cachaça Pitu - 1L', 10, 14.00, 8.40, 5, TRUE, FALSE),
('CARAN001', 'Cachaça Carangueijo Ouro - 1L', 'cachaca-carangueijo-ouro-1l', 'Cachaça Carangueijo Ouro - 1L - Preço: R$ 14.00', 'Cachaça Carangueijo Ouro - 1L', 10, 14.00, 8.40, 3, TRUE, FALSE),
('CARAN275', 'Cachaça Carangueijo Ouro - 275ml', 'cachaca-carangueijo-ouro-275ml', 'Cachaça Carangueijo Ouro - 275ml - Preço: R$ 9.00', 'Cachaça Carangueijo Ouro - 275ml', 10, 9.00, 5.40, 3, TRUE, FALSE),
('CARANPRAT', 'Cachaça Carangueijo Prata - 1L', 'cachaca-carangueijo-prata-1l', 'Cachaça Carangueijo Prata - 1L - Preço: R$ 14.00', 'Cachaça Carangueijo Prata - 1L', 10, 14.00, 8.40, 1, TRUE, FALSE),
('CARANLIM', 'Cachaça Carangueijo Limão - 1L', 'cachaca-carangueijo-limao-1l', 'Cachaça Carangueijo Limão - 1L - Preço: R$ 18.00', 'Cachaça Carangueijo Limão - 1L', 10, 18.00, 10.80, 1, TRUE, FALSE),
('STOME001', 'Cachaça São Tomé - 1L', 'cachaca-sao-tome-1l', 'Cachaça São Tomé - 1L - Preço: R$ 22.00', 'Cachaça São Tomé - 1L', 10, 22.00, 13.20, 2, TRUE, FALSE),
('GOST001', 'Cachaça Gostosinha', 'cachaca-gostosinha', 'Cachaça Gostosinha - Preço: R$ 4.00', 'Cachaça Gostosinha', 10, 4.00, 2.40, 13, TRUE, FALSE),
('MARAM001', 'Mansão Maromba', 'mansao-maromba', 'Mansão Maromba - Preço: R$ 22.00', 'Mansão Maromba', 10, 22.00, 13.20, 1, TRUE, FALSE);

-- ============================================================================
-- 4. CERVEJAS
-- ============================================================================
INSERT INTO products (sku, name, slug, description, short_description, category_id, price, cost_price, stock_quantity, is_active, is_featured) VALUES
('DREH001', 'Dreher - 1L', 'dreher-1l', 'Dreher - 1L - Preço: R$ 30.00', 'Dreher - 1L', 11, 30.00, 18.00, 1, TRUE, FALSE),
('DEV001', 'Devassa - Caixa', 'devassa-caixa', 'Devassa - Caixa - Preço: R$ 38.00', 'Devassa - Caixa', 11, 38.00, 22.80, 1, TRUE, FALSE),
('DEV002', 'Devassa - Unidade', 'devassa-unidade', 'Devassa - Unidade - Preço: R$ 4.00', 'Devassa - Unidade', 11, 4.00, 2.40, 1, TRUE, FALSE),
('IMP001', 'Império - Caixa', 'imperio-caixa', 'Império - Caixa - Preço: R$ 44.00', 'Império - Caixa', 11, 44.00, 26.40, 1, TRUE, FALSE),
('IMP002', 'Império - Unidade', 'imperio-unidade', 'Império - Unidade - Preço: R$ 5.00', 'Império - Unidade', 11, 5.00, 3.00, 1, TRUE, FALSE),
('LOK001', 'Lokal - Caixa', 'lokal-caixa', 'Lokal - Caixa - Preço: R$ 33.00', 'Lokal - Caixa', 11, 33.00, 19.80, 1, TRUE, FALSE),
('LOK002', 'Lokal - Unidade', 'lokal-unidade', 'Lokal - Unidade - Preço: R$ 3.00', 'Lokal - Unidade', 11, 3.00, 1.80, 1, TRUE, FALSE),
('SCHIN001', 'Schin - Caixa', 'schin-caixa', 'Schin - Caixa - Preço: R$ 35.00', 'Schin - Caixa', 11, 35.00, 21.00, 1, TRUE, FALSE),
('SCHIN002', 'Schin - Unidade', 'schin-unidade', 'Schin - Unidade - Preço: R$ 3.50', 'Schin - Unidade', 11, 3.50, 2.10, 1, TRUE, FALSE),
('ITAI001', 'Itaipava - Caixa', 'itaipava-caixa', 'Itaipava - Caixa - Preço: R$ 36.00', 'Itaipava - Caixa', 11, 36.00, 21.60, 1, TRUE, FALSE),
('ITAI002', 'Itaipava - Unidade', 'itaipava-unidade', 'Itaipava - Unidade - Preço: R$ 4.00', 'Itaipava - Unidade', 11, 4.00, 2.40, 1, TRUE, FALSE),
('AMST001', 'Amstel - Caixa', 'amstel-caixa', 'Amstel - Caixa - Preço: R$ 48.00', 'Amstel - Caixa', 11, 48.00, 28.80, 1, TRUE, FALSE),
('AMST002', 'Amstel - Unidade', 'amstel-unidade', 'Amstel - Unidade - Preço: R$ 5.00', 'Amstel - Unidade', 11, 5.00, 3.00, 1, TRUE, FALSE),
('BUD001', 'Budweiser - Caixa', 'budweiser-caixa', 'Budweiser - Caixa - Preço: R$ 50.00', 'Budweiser - Caixa', 11, 50.00, 30.00, 1, TRUE, TRUE),
('BUD002', 'Budweiser - Unidade', 'budweiser-unidade', 'Budweiser - Unidade - Preço: R$ 5.00', 'Budweiser - Unidade', 11, 5.00, 3.00, 1, TRUE, FALSE),
('BRICE001', 'Brice Cabaré - Unidade', 'brice-cabare-unidade', 'Brice Cabaré - Unidade - Preço: R$ 7.00', 'Brice Cabaré - Unidade', 11, 7.00, 4.20, 1, TRUE, FALSE),
('CERES001', 'Cereser - Caixa', 'cereser-caixa', 'Cereser - Caixa - Preço: R$ 24.00', 'Cereser - Caixa', 11, 24.00, 14.40, 4, TRUE, FALSE),
('PRES001', 'Prestige - Caixa', 'prestige-caixa', 'Prestige - Caixa - Preço: R$ 16.00', 'Prestige - Caixa', 11, 16.00, 9.60, 4, TRUE, FALSE);

-- ============================================================================
-- 5. BEBIDAS MISTAS
-- ============================================================================
INSERT INTO products (sku, name, slug, description, short_description, category_id, price, cost_price, stock_quantity, is_active, is_featured) VALUES
('SANM001', 'San Marino', 'san-marino', 'San Marino - Preço: R$ 8.00', 'San Marino', 12, 8.00, 4.80, 3, TRUE, FALSE),
('VINV001', 'Vinho Vermelhão', 'vinho-vermelhao', 'Vinho Vermelhão - Preço: R$ 20.00', 'Vinho Vermelhão', 12, 20.00, 12.00, 2, TRUE, FALSE),
('PREC001', 'Preciosa do Vale', 'preciosa-do-vale', 'Preciosa do Vale - Preço: R$ 45.00', 'Preciosa do Vale', 12, 45.00, 27.00, 2, TRUE, FALSE),
('MATBAL', 'Matuta Bálsamo - 1L', 'matuta-balsamo-1l', 'Matuta Bálsamo - 1L - Preço: R$ 46.00', 'Matuta Bálsamo - 1L', 12, 46.00, 27.60, 1, TRUE, TRUE),
('MATCR1', 'Matuta Cristal - 1L', 'matuta-cristal-1l', 'Matuta Cristal - 1L - Preço: R$ 45.00', 'Matuta Cristal - 1L', 12, 45.00, 27.00, 3, TRUE, FALSE),
('MATCR300', 'Matuta Cristal - 300ml', 'matuta-cristal-300ml', 'Matuta Cristal - 300ml - Preço: R$ 17.00', 'Matuta Cristal - 300ml', 12, 17.00, 10.20, 3, TRUE, FALSE);

-- ============================================================================
-- 6. BEBIDAS LATAS
-- ============================================================================
INSERT INTO products (sku, name, slug, description, short_description, category_id, price, cost_price, stock_quantity, is_active, is_featured) VALUES
('CARANPRAT_L', 'Carangueijo Prata - Lata', 'carangueijo-prata-lata', 'Carangueijo Prata - Lata - Preço: R$ 7.00', 'Carangueijo Prata - Lata', 13, 7.00, 4.20, 17, TRUE, TRUE),
('CARANOUR_L', 'Carangueijo Ouro - Lata', 'carangueijo-ouro-lata', 'Carangueijo Ouro - Lata - Preço: R$ 7.00', 'Carangueijo Ouro - Lata', 13, 7.00, 4.20, 5, TRUE, FALSE),
('PITULIM_L', 'Pitu Limão - Lata', 'pitu-limao-lata', 'Pitu Limão - Lata - Preço: R$ 7.00', 'Pitu Limão - Lata', 13, 7.00, 4.20, 15, TRUE, TRUE),
('YPILATA', 'Ypioca - Lata', 'ypioca-lata', 'Ypioca - Lata - Preço: R$ 7.00', 'Ypioca - Lata', 13, 7.00, 4.20, 1, TRUE, FALSE),
('CACH51_L', '51 - Lata', '51-lata', '51 - Lata - Preço: R$ 7.00', '51 - Lata', 13, 7.00, 4.20, 1, TRUE, FALSE);

-- ============================================================================
-- 7. REFRIGERANTES
-- ============================================================================
INSERT INTO products (sku, name, slug, description, short_description, category_id, price, cost_price, stock_quantity, is_active, is_featured) VALUES
('COCA1L', 'Coca Cola - 1L', 'coca-cola-1l', 'Coca Cola - 1L - Preço: R$ 10.00', 'Coca Cola - 1L', 14, 10.00, 6.00, 1, TRUE, FALSE),
('COCA_L', 'Coca Cola - Lata', 'coca-cola-lata', 'Coca Cola - Lata - Preço: R$ 5.00', 'Coca Cola - Lata', 14, 5.00, 3.00, 1, TRUE, FALSE),
('PEPSI001', 'Pepsi', 'pepsi', 'Pepsi - Preço: R$ 8.00', 'Pepsi', 14, 8.00, 4.80, 1, TRUE, FALSE),
('DORE001', 'Dore Refrigerante', 'dore-refrigerante', 'Dore Refrigerante - Preço: R$ 8.00', 'Dore Refrigerante', 14, 8.00, 4.80, 1, TRUE, FALSE);

-- ============================================================================
-- 8. BEBIDAS NÃO ALCOÓLICAS
-- ============================================================================
INSERT INTO products (sku, name, slug, description, short_description, category_id, price, cost_price, stock_quantity, is_active, is_featured) VALUES
('AGUA001', 'Água Mineral', 'agua-mineral', 'Água Mineral - Preço: R$ 2.00', 'Água Mineral', 15, 2.00, 1.20, 1, TRUE, FALSE),
('AGUAG001', 'Água com Gás', 'agua-com-gas', 'Água com Gás - Preço: R$ 3.00', 'Água com Gás', 15, 3.00, 1.80, 1, TRUE, FALSE),
('SUCODELV', 'Suco de Uva Del Vale', 'suco-de-uva-del-vale', 'Suco de Uva Del Vale - Preço: R$ 9.00', 'Suco de Uva Del Vale', 15, 9.00, 5.40, 1, TRUE, FALSE),
('INFIN001', 'Infinity', 'infinity', 'Infinity - Preço: R$ 12.00', 'Infinity', 15, 12.00, 7.20, 1, TRUE, FALSE);

-- ============================================================================
-- 9. DOSES
-- ============================================================================
INSERT INTO products (sku, name, slug, description, short_description, category_id, price, cost_price, stock_quantity, is_active, is_featured) VALUES
('DOSEPITU', 'Dose Pitu', 'dose-pitu', 'Dose Pitu - Preço: R$ 2.00', 'Dose Pitu', 16, 2.00, 1.20, 1, TRUE, FALSE),
('DOSEDRE', 'Dose Dreher', 'dose-dreher', 'Dose Dreher - Preço: R$ 3.00', 'Dose Dreher', 16, 3.00, 1.80, 1, TRUE, FALSE),
('DOSECARAN', 'Dose Carangueijo', 'dose-carangueijo', 'Dose Carangueijo - Preço: R$ 2.00', 'Dose Carangueijo', 16, 2.00, 1.20, 1, TRUE, FALSE);

-- ============================================================================
-- 10. ALIMENTOS
-- ============================================================================
INSERT INTO products (sku, name, slug, description, short_description, category_id, price, cost_price, stock_quantity, is_active, is_featured) VALUES
('HALLS001', 'Pastilha Halls', 'pastilha-halls', 'Pastilha Halls - Preço: R$ 3.00', 'Pastilha Halls', 17, 3.00, 1.80, 1, TRUE, FALSE),
('FREEG001', 'Pastilha Freegels', 'pastilha-freegels', 'Pastilha Freegels - Preço: R$ 2.50', 'Pastilha Freegels', 17, 2.50, 1.50, 1, TRUE, FALSE),
('PIPOKRO', 'Pipoca Kro', 'pipoca-kro', 'Pipoca Kro - Preço: R$ 3.00', 'Pipoca Kro', 17, 3.00, 1.80, 1, TRUE, FALSE),
('PIPOS001', 'Pipos', 'pipos', 'Pipos - Preço: R$ 5.00', 'Pipos', 17, 5.00, 3.00, 1, TRUE, FALSE),
('BISC001', 'Biscoitos Recheado', 'biscoitos-recheado', 'Biscoitos Recheado - Preço: R$ 3.00', 'Biscoitos Recheado', 17, 3.00, 1.80, 1, TRUE, FALSE),
('FRUIT001', 'Fruit Tella', 'fruit-tella', 'Fruit Tella - Preço: R$ 2.50', 'Fruit Tella', 17, 2.50, 1.50, 1, TRUE, FALSE),
('KISUK001', 'Kisuk', 'kisuk', 'Kisuk - Preço: R$ 1.50', 'Kisuk', 17, 1.50, 0.90, 1, TRUE, FALSE),
('MIOJOCARNE', 'Miojo Nissin Carne', 'miojo-nissin-carne', 'Miojo Nissin Carne - Preço: R$ 3.00', 'Miojo Nissin Carne', 17, 3.00, 1.80, 1, TRUE, FALSE),
('MIOJOGAL', 'Miojo Nissin Galinha', 'miojo-nissin-galinha', 'Miojo Nissin Galinha - Preço: R$ 3.50', 'Miojo Nissin Galinha', 17, 3.50, 2.10, 1, TRUE, FALSE),
('CUPNOOD', 'Cup Noodles', 'cup-noodles', 'Cup Noodles - Preço: R$ 8.00', 'Cup Noodles', 17, 8.00, 4.80, 1, TRUE, FALSE),
('MACARESP', 'Macarrão Espaguete', 'macarrao-espaguete', 'Macarrão Espaguete - Preço: R$ 4.50', 'Macarrão Espaguete', 17, 4.50, 2.70, 1, TRUE, FALSE),
('MOLHOTOMATE', 'Molho de Tomate', 'molho-de-tomate', 'Molho de Tomate - Preço: R$ 2.50', 'Molho de Tomate', 17, 2.50, 1.50, 1, TRUE, FALSE),
('CAFESANTA', 'Café Santa Clara', 'cafe-santa-clara', 'Café Santa Clara - Preço: R$ 18.00', 'Café Santa Clara', 17, 18.00, 10.80, 1, TRUE, FALSE),
('OLEO001', 'Óleo', 'oleo', 'Óleo - Preço: R$ 10.00', 'Óleo', 17, 10.00, 6.00, 1, TRUE, FALSE),
('SAL001', 'Sal', 'sal', 'Sal - Preço: R$ 2.00', 'Sal', 17, 2.00, 1.20, 1, TRUE, FALSE),
('ACUCAR001', 'Açúcar', 'acucar', 'Açúcar - Preço: R$ 5.00', 'Açúcar', 17, 5.00, 3.00, 1, TRUE, FALSE),
('SAZON001', 'Sazón', 'sazon', 'Sazón - Preço: R$ 0.50', 'Sazón', 17, 0.50, 0.30, 1, TRUE, FALSE),
('MARG001', 'Margarina', 'margarina', 'Margarina - Preço: R$ 5.00', 'Margarina', 17, 5.00, 3.00, 1, TRUE, FALSE),
('CREMELEITE', 'Creme de Leite', 'creme-de-leite', 'Creme de Leite - Preço: R$ 3.00', 'Creme de Leite', 17, 3.00, 1.80, 1, TRUE, FALSE),
('LEITECOND', 'Leite Condensado', 'leite-condensado', 'Leite Condensado - Preço: R$ 5.00', 'Leite Condensado', 17, 5.00, 3.00, 1, TRUE, FALSE),
('COLORAL001', 'Coloral', 'coloral', 'Coloral - Preço: R$ 3.00', 'Coloral', 17, 3.00, 1.80, 1, TRUE, FALSE),
('DUETO001', 'Dueto', 'dueto', 'Dueto - Preço: R$ 5.00', 'Dueto', 17, 5.00, 3.00, 1, TRUE, FALSE),
('MAIONESE', 'Maionese Quero', 'maionese-quero', 'Maionese Quero - Preço: R$ 4.50', 'Maionese Quero', 17, 4.50, 2.70, 1, TRUE, FALSE),
('KITUT001', 'Kitut', 'kitut', 'Kitut - Preço: R$ 12.00', 'Kitut', 17, 12.00, 7.20, 1, TRUE, FALSE);

-- ============================================================================
-- Fim da Importação
-- ============================================================================
