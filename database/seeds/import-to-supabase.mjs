#!/usr/bin/env node

/**
 * Script de Importação para Supabase
 * Importa bebidas e alimentos diretamente para o Supabase
 */

import { createClient } from '@supabase/supabase-js';

// Chaves do Supabase encontradas no repositório v3.1
const SUPABASE_URL = 'https://rqhjshztxyzxcuggitvq.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_QKhdw6GmnU15_TKP4MKyWQ__gttIVN5';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Dados dos produtos
const products = [
  // ============================================================================
  // BEBIDAS DESTILADAS
  // ============================================================================
  { name: 'Campari', quantity: 1, price: 80.00, category: 'Bebidas Destiladas', sku: 'CAMP001' },
  { name: 'Sky Vodka', quantity: 1, price: 45.00, category: 'Bebidas Destiladas', sku: 'SKY001' },
  { name: 'Jack Daniells', quantity: 1, price: 180.00, category: 'Bebidas Destiladas', sku: 'JACK001' },
  { name: 'Black With', quantity: 1, price: 80.00, category: 'Bebidas Destiladas', sku: 'BLACK001' },
  { name: 'Smirnoff', quantity: 1, price: 70.00, category: 'Bebidas Destiladas', sku: 'SMIR001' },

  // ============================================================================
  // CACHAÇAS
  // ============================================================================
  { name: 'Cachaça 51 - 1L', quantity: 3, price: 14.00, category: 'Cachaças', sku: 'CACH51001' },
  { name: 'Russov', quantity: 3, price: 14.00, category: 'Cachaças', sku: 'RUSS001' },
  { name: 'Cachaça Pitu - 1L', quantity: 5, price: 14.00, category: 'Cachaças', sku: 'PITU001' },
  { name: 'Cachaça Carangueijo Ouro - 1L', quantity: 3, price: 14.00, category: 'Cachaças', sku: 'CARAN001' },
  { name: 'Cachaça Carangueijo Ouro - 275ml', quantity: 3, price: 9.00, category: 'Cachaças', sku: 'CARAN275' },
  { name: 'Cachaça Carangueijo Prata - 1L', quantity: 1, price: 14.00, category: 'Cachaças', sku: 'CARANPRAT' },
  { name: 'Cachaça Carangueijo Limão - 1L', quantity: 1, price: 18.00, category: 'Cachaças', sku: 'CARANLIM' },
  { name: 'Cachaça São Tomé - 1L', quantity: 2, price: 22.00, category: 'Cachaças', sku: 'STOME001' },
  { name: 'Cachaça Gostosinha', quantity: 13, price: 4.00, category: 'Cachaças', sku: 'GOST001' },
  { name: 'Mansão Maromba', quantity: 1, price: 22.00, category: 'Cachaças', sku: 'MARAM001' },

  // ============================================================================
  // CERVEJAS
  // ============================================================================
  { name: 'Dreher - 1L', quantity: 1, price: 30.00, category: 'Cervejas', sku: 'DREH001' },
  { name: 'Devassa - Caixa', quantity: 1, price: 38.00, category: 'Cervejas', sku: 'DEV001' },
  { name: 'Devassa - Unidade', quantity: 1, price: 4.00, category: 'Cervejas', sku: 'DEV002' },
  { name: 'Império - Caixa', quantity: 1, price: 44.00, category: 'Cervejas', sku: 'IMP001' },
  { name: 'Império - Unidade', quantity: 1, price: 5.00, category: 'Cervejas', sku: 'IMP002' },
  { name: 'Lokal - Caixa', quantity: 1, price: 33.00, category: 'Cervejas', sku: 'LOK001' },
  { name: 'Lokal - Unidade', quantity: 1, price: 3.00, category: 'Cervejas', sku: 'LOK002' },
  { name: 'Schin - Caixa', quantity: 1, price: 35.00, category: 'Cervejas', sku: 'SCHIN001' },
  { name: 'Schin - Unidade', quantity: 1, price: 3.50, category: 'Cervejas', sku: 'SCHIN002' },
  { name: 'Itaipava - Caixa', quantity: 1, price: 36.00, category: 'Cervejas', sku: 'ITAI001' },
  { name: 'Itaipava - Unidade', quantity: 1, price: 4.00, category: 'Cervejas', sku: 'ITAI002' },
  { name: 'Amstel - Caixa', quantity: 1, price: 48.00, category: 'Cervejas', sku: 'AMST001' },
  { name: 'Amstel - Unidade', quantity: 1, price: 5.00, category: 'Cervejas', sku: 'AMST002' },
  { name: 'Budweiser - Caixa', quantity: 1, price: 50.00, category: 'Cervejas', sku: 'BUD001' },
  { name: 'Budweiser - Unidade', quantity: 1, price: 5.00, category: 'Cervejas', sku: 'BUD002' },
  { name: 'Brice Cabaré - Unidade', quantity: 1, price: 7.00, category: 'Cervejas', sku: 'BRICE001' },
  { name: 'Cereser - Caixa', quantity: 4, price: 24.00, category: 'Cervejas', sku: 'CERES001' },
  { name: 'Prestige - Caixa', quantity: 4, price: 16.00, category: 'Cervejas', sku: 'PRES001' },

  // ============================================================================
  // BEBIDAS MISTAS
  // ============================================================================
  { name: 'San Marino', quantity: 3, price: 8.00, category: 'Bebidas Mistas', sku: 'SANM001' },
  { name: 'Vinho Vermelhão', quantity: 2, price: 20.00, category: 'Bebidas Mistas', sku: 'VINV001' },
  { name: 'Preciosa do Vale', quantity: 2, price: 45.00, category: 'Bebidas Mistas', sku: 'PREC001' },
  { name: 'Matuta Bálsamo - 1L', quantity: 1, price: 46.00, category: 'Bebidas Mistas', sku: 'MATBAL' },
  { name: 'Matuta Cristal - 1L', quantity: 3, price: 45.00, category: 'Bebidas Mistas', sku: 'MATCR1' },
  { name: 'Matuta Cristal - 300ml', quantity: 3, price: 17.00, category: 'Bebidas Mistas', sku: 'MATCR300' },

  // ============================================================================
  // BEBIDAS LATAS
  // ============================================================================
  { name: 'Carangueijo Prata - Lata', quantity: 17, price: 7.00, category: 'Bebidas Latas', sku: 'CARANPRAT_L' },
  { name: 'Carangueijo Ouro - Lata', quantity: 5, price: 7.00, category: 'Bebidas Latas', sku: 'CARANOUR_L' },
  { name: 'Pitu Limão - Lata', quantity: 15, price: 7.00, category: 'Bebidas Latas', sku: 'PITULIM_L' },
  { name: 'Ypioca - Lata', quantity: 1, price: 7.00, category: 'Bebidas Latas', sku: 'YPILATA' },
  { name: '51 - Lata', quantity: 1, price: 7.00, category: 'Bebidas Latas', sku: 'CACH51_L' },

  // ============================================================================
  // REFRIGERANTES
  // ============================================================================
  { name: 'Coca Cola - 1L', quantity: 1, price: 10.00, category: 'Refrigerantes', sku: 'COCA1L' },
  { name: 'Coca Cola - Lata', quantity: 1, price: 5.00, category: 'Refrigerantes', sku: 'COCA_L' },
  { name: 'Pepsi', quantity: 1, price: 8.00, category: 'Refrigerantes', sku: 'PEPSI001' },
  { name: 'Dore Refrigerante', quantity: 1, price: 8.00, category: 'Refrigerantes', sku: 'DORE001' },

  // ============================================================================
  // BEBIDAS NÃO ALCOÓLICAS
  // ============================================================================
  { name: 'Água Mineral', quantity: 1, price: 2.00, category: 'Bebidas Não Alcoólicas', sku: 'AGUA001' },
  { name: 'Água com Gás', quantity: 1, price: 3.00, category: 'Bebidas Não Alcoólicas', sku: 'AGUAG001' },
  { name: 'Suco de Uva Del Vale', quantity: 1, price: 9.00, category: 'Bebidas Não Alcoólicas', sku: 'SUCODELV' },
  { name: 'Infinity', quantity: 1, price: 12.00, category: 'Bebidas Não Alcoólicas', sku: 'INFIN001' },

  // ============================================================================
  // DOSES
  // ============================================================================
  { name: 'Dose Pitu', quantity: 1, price: 2.00, category: 'Doses', sku: 'DOSEPITU' },
  { name: 'Dose Dreher', quantity: 1, price: 3.00, category: 'Doses', sku: 'DOSEDRE' },
  { name: 'Dose Carangueijo', quantity: 1, price: 2.00, category: 'Doses', sku: 'DOSECARAN' },

  // ============================================================================
  // ALIMENTOS - DOCES E SALGADOS
  // ============================================================================
  { name: 'Pastilha Halls', quantity: 1, price: 3.00, category: 'Alimentos', sku: 'HALLS001' },
  { name: 'Pastilha Freegels', quantity: 1, price: 2.50, category: 'Alimentos', sku: 'FREEG001' },
  { name: 'Pipoca Kro', quantity: 1, price: 3.00, category: 'Alimentos', sku: 'PIPOKRO' },
  { name: 'Pipos', quantity: 1, price: 5.00, category: 'Alimentos', sku: 'PIPOS001' },
  { name: 'Biscoitos Recheado', quantity: 1, price: 3.00, category: 'Alimentos', sku: 'BISC001' },
  { name: 'Fruit Tella', quantity: 1, price: 2.50, category: 'Alimentos', sku: 'FRUIT001' },
  { name: 'Kisuk', quantity: 1, price: 1.50, category: 'Alimentos', sku: 'KISUK001' },

  // ============================================================================
  // ALIMENTOS - MASSAS E CONDIMENTOS
  // ============================================================================
  { name: 'Miojo Nissin Carne', quantity: 1, price: 3.00, category: 'Alimentos', sku: 'MIOJOCARNE' },
  { name: 'Miojo Nissin Galinha', quantity: 1, price: 3.50, category: 'Alimentos', sku: 'MIOJOGAL' },
  { name: 'Cup Noodles', quantity: 1, price: 8.00, category: 'Alimentos', sku: 'CUPNOOD' },
  { name: 'Macarrão Espaguete', quantity: 1, price: 4.50, category: 'Alimentos', sku: 'MACARESP' },
  { name: 'Molho de Tomate', quantity: 1, price: 2.50, category: 'Alimentos', sku: 'MOLHOTOMATE' },

  // ============================================================================
  // ALIMENTOS - INGREDIENTES
  // ============================================================================
  { name: 'Café Santa Clara', quantity: 1, price: 18.00, category: 'Alimentos', sku: 'CAFESANTA' },
  { name: 'Óleo', quantity: 1, price: 10.00, category: 'Alimentos', sku: 'OLEO001' },
  { name: 'Sal', quantity: 1, price: 2.00, category: 'Alimentos', sku: 'SAL001' },
  { name: 'Açúcar', quantity: 1, price: 5.00, category: 'Alimentos', sku: 'ACUCAR001' },
  { name: 'Sazón', quantity: 1, price: 0.50, category: 'Alimentos', sku: 'SAZON001' },
  { name: 'Margarina', quantity: 1, price: 5.00, category: 'Alimentos', sku: 'MARG001' },
  { name: 'Creme de Leite', quantity: 1, price: 3.00, category: 'Alimentos', sku: 'CREMELEITE' },
  { name: 'Leite Condensado', quantity: 1, price: 5.00, category: 'Alimentos', sku: 'LEITECOND' },
  { name: 'Coloral', quantity: 1, price: 3.00, category: 'Alimentos', sku: 'COLORAL001' },
  { name: 'Dueto', quantity: 1, price: 5.00, category: 'Alimentos', sku: 'DUETO001' },
  { name: 'Maionese Quero', quantity: 1, price: 4.50, category: 'Alimentos', sku: 'MAIONESE' },
  { name: 'Kitut', quantity: 1, price: 12.00, category: 'Alimentos', sku: 'KITUT001' },
];

// Mapeamento de categorias
const categoryMap = {};

async function createCategories() {
  console.log('📁 Criando categorias...\n');
  
  const categories = [
    { name: 'Bebidas Destiladas', slug: 'bebidas-destiladas', description: 'Bebidas destiladas premium' },
    { name: 'Cachaças', slug: 'cachacas', description: 'Cachaças de qualidade' },
    { name: 'Cervejas', slug: 'cervejas', description: 'Cervejas nacionais e importadas' },
    { name: 'Bebidas Mistas', slug: 'bebidas-mistas', description: 'Bebidas mistas e vinhos' },
    { name: 'Bebidas Latas', slug: 'bebidas-latas', description: 'Bebidas em lata' },
    { name: 'Refrigerantes', slug: 'refrigerantes', description: 'Refrigerantes diversos' },
    { name: 'Bebidas Não Alcoólicas', slug: 'bebidas-nao-alcoolicas', description: 'Água, sucos e bebidas sem álcool' },
    { name: 'Doses', slug: 'doses', description: 'Doses individuais' },
    { name: 'Alimentos', slug: 'alimentos', description: 'Alimentos, condimentos e ingredientes' },
  ];

  for (const category of categories) {
    try {
      const { data, error } = await supabase
        .from('categories')
        .insert([category])
        .select();

      if (error) throw error;
      
      categoryMap[category.name] = data[0].id;
      console.log(`✅ ${category.name} criada (ID: ${data[0].id})`);
    } catch (error) {
      console.error(`❌ Erro ao criar categoria ${category.name}:`, error.message);
    }
  }
  console.log('');
}

async function importProducts() {
  console.log('📦 Importando produtos...\n');

  let successCount = 0;
  let errorCount = 0;

  for (const product of products) {
    try {
      const categoryId = categoryMap[product.category];

      if (!categoryId) {
        console.error(`❌ Categoria não encontrada: ${product.category}`);
        errorCount++;
        continue;
      }

      const { data, error } = await supabase
        .from('produtos')
        .insert([
          {
            sku: product.sku,
            descricao: product.name,
            preco: product.price,
            estoque: product.quantity,
            categoria_id: categoryId,
            ativo: true,
          },
        ])
        .select();

      if (error) throw error;
      
      console.log(`✅ ${product.name} - R$ ${product.price.toFixed(2)}`);
      successCount++;
    } catch (error) {
      console.error(`❌ Erro ao importar ${product.name}:`, error.message);
      errorCount++;
    }
  }

  console.log(`\n📊 Importação concluída!`);
  console.log(`✅ Sucesso: ${successCount} produtos`);
  console.log(`❌ Erros: ${errorCount} produtos`);
}

async function main() {
  try {
    console.log('🚀 Iniciando importação de produtos para Supabase...\n');
    console.log(`📍 Supabase URL: ${SUPABASE_URL}\n`);

    // Criar categorias
    await createCategories();

    // Importar produtos
    await importProducts();

    console.log('\n✨ Importação finalizada com sucesso!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Erro fatal:', error);
    process.exit(1);
  }
}

main();
