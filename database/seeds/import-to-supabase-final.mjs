#!/usr/bin/env node

/**
 * Script de Importação para Supabase - Versão Final
 * Importa bebidas e alimentos para a tabela 'produtos' existente
 */

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://rqhjshztxyzxcuggitvq.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_QKhdw6GmnU15_TKP4MKyWQ__gttIVN5';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Dados dos produtos
const products = [
  // ============================================================================
  // BEBIDAS DESTILADAS
  // ============================================================================
  { nome: 'Campari', quantidade: 1, preco: 80.00, categoria: 'Bebidas Destiladas', sku: 'CAMP001' },
  { nome: 'Sky Vodka', quantidade: 1, preco: 45.00, categoria: 'Bebidas Destiladas', sku: 'SKY001' },
  { nome: 'Jack Daniells', quantidade: 1, preco: 180.00, categoria: 'Bebidas Destiladas', sku: 'JACK001' },
  { nome: 'Black With', quantidade: 1, preco: 80.00, categoria: 'Bebidas Destiladas', sku: 'BLACK001' },
  { nome: 'Smirnoff', quantidade: 1, preco: 70.00, categoria: 'Bebidas Destiladas', sku: 'SMIR001' },

  // ============================================================================
  // CACHAÇAS
  // ============================================================================
  { nome: 'Cachaça 51 - 1L', quantidade: 3, preco: 14.00, categoria: 'Cachaças', sku: 'CACH51001' },
  { nome: 'Russov', quantidade: 3, preco: 14.00, categoria: 'Cachaças', sku: 'RUSS001' },
  { nome: 'Cachaça Pitu - 1L', quantidade: 5, preco: 14.00, categoria: 'Cachaças', sku: 'PITU001' },
  { nome: 'Cachaça Carangueijo Ouro - 1L', quantidade: 3, preco: 14.00, categoria: 'Cachaças', sku: 'CARAN001' },
  { nome: 'Cachaça Carangueijo Ouro - 275ml', quantidade: 3, preco: 9.00, categoria: 'Cachaças', sku: 'CARAN275' },
  { nome: 'Cachaça Carangueijo Prata - 1L', quantidade: 1, preco: 14.00, categoria: 'Cachaças', sku: 'CARANPRAT' },
  { nome: 'Cachaça Carangueijo Limão - 1L', quantidade: 1, preco: 18.00, categoria: 'Cachaças', sku: 'CARANLIM' },
  { nome: 'Cachaça São Tomé - 1L', quantidade: 2, preco: 22.00, categoria: 'Cachaças', sku: 'STOME001' },
  { nome: 'Cachaça Gostosinha', quantidade: 13, preco: 4.00, categoria: 'Cachaças', sku: 'GOST001' },
  { nome: 'Mansão Maromba', quantidade: 1, preco: 22.00, categoria: 'Cachaças', sku: 'MARAM001' },

  // ============================================================================
  // CERVEJAS
  // ============================================================================
  { nome: 'Dreher - 1L', quantidade: 1, preco: 30.00, categoria: 'Cervejas', sku: 'DREH001' },
  { nome: 'Devassa - Caixa', quantidade: 1, preco: 38.00, categoria: 'Cervejas', sku: 'DEV001' },
  { nome: 'Devassa - Unidade', quantidade: 1, preco: 4.00, categoria: 'Cervejas', sku: 'DEV002' },
  { nome: 'Império - Caixa', quantidade: 1, preco: 44.00, categoria: 'Cervejas', sku: 'IMP001' },
  { nome: 'Império - Unidade', quantidade: 1, preco: 5.00, categoria: 'Cervejas', sku: 'IMP002' },
  { nome: 'Lokal - Caixa', quantidade: 1, preco: 33.00, categoria: 'Cervejas', sku: 'LOK001' },
  { nome: 'Lokal - Unidade', quantidade: 1, preco: 3.00, categoria: 'Cervejas', sku: 'LOK002' },
  { nome: 'Schin - Caixa', quantidade: 1, preco: 35.00, categoria: 'Cervejas', sku: 'SCHIN001' },
  { nome: 'Schin - Unidade', quantidade: 1, preco: 3.50, categoria: 'Cervejas', sku: 'SCHIN002' },
  { nome: 'Itaipava - Caixa', quantidade: 1, preco: 36.00, categoria: 'Cervejas', sku: 'ITAI001' },
  { nome: 'Itaipava - Unidade', quantidade: 1, preco: 4.00, categoria: 'Cervejas', sku: 'ITAI002' },
  { nome: 'Amstel - Caixa', quantidade: 1, preco: 48.00, categoria: 'Cervejas', sku: 'AMST001' },
  { nome: 'Amstel - Unidade', quantidade: 1, preco: 5.00, categoria: 'Cervejas', sku: 'AMST002' },
  { nome: 'Budweiser - Caixa', quantidade: 1, preco: 50.00, categoria: 'Cervejas', sku: 'BUD001' },
  { nome: 'Budweiser - Unidade', quantidade: 1, preco: 5.00, categoria: 'Cervejas', sku: 'BUD002' },
  { nome: 'Brice Cabaré - Unidade', quantidade: 1, preco: 7.00, categoria: 'Cervejas', sku: 'BRICE001' },
  { nome: 'Cereser - Caixa', quantidade: 4, preco: 24.00, categoria: 'Cervejas', sku: 'CERES001' },
  { nome: 'Prestige - Caixa', quantidade: 4, preco: 16.00, categoria: 'Cervejas', sku: 'PRES001' },

  // ============================================================================
  // BEBIDAS MISTAS
  // ============================================================================
  { nome: 'San Marino', quantidade: 3, preco: 8.00, categoria: 'Bebidas Mistas', sku: 'SANM001' },
  { nome: 'Vinho Vermelhão', quantidade: 2, preco: 20.00, categoria: 'Bebidas Mistas', sku: 'VINV001' },
  { nome: 'Preciosa do Vale', quantidade: 2, preco: 45.00, categoria: 'Bebidas Mistas', sku: 'PREC001' },
  { nome: 'Matuta Bálsamo - 1L', quantidade: 1, preco: 46.00, categoria: 'Bebidas Mistas', sku: 'MATBAL' },
  { nome: 'Matuta Cristal - 1L', quantidade: 3, preco: 45.00, categoria: 'Bebidas Mistas', sku: 'MATCR1' },
  { nome: 'Matuta Cristal - 300ml', quantidade: 3, preco: 17.00, categoria: 'Bebidas Mistas', sku: 'MATCR300' },

  // ============================================================================
  // BEBIDAS LATAS
  // ============================================================================
  { nome: 'Carangueijo Prata - Lata', quantidade: 17, preco: 7.00, categoria: 'Bebidas Latas', sku: 'CARANPRAT_L' },
  { nome: 'Carangueijo Ouro - Lata', quantidade: 5, preco: 7.00, categoria: 'Bebidas Latas', sku: 'CARANOUR_L' },
  { nome: 'Pitu Limão - Lata', quantidade: 15, preco: 7.00, categoria: 'Bebidas Latas', sku: 'PITULIM_L' },
  { nome: 'Ypioca - Lata', quantidade: 1, preco: 7.00, categoria: 'Bebidas Latas', sku: 'YPILATA' },
  { nome: '51 - Lata', quantidade: 1, preco: 7.00, categoria: 'Bebidas Latas', sku: 'CACH51_L' },

  // ============================================================================
  // REFRIGERANTES
  // ============================================================================
  { nome: 'Coca Cola - 1L', quantidade: 1, preco: 10.00, categoria: 'Refrigerantes', sku: 'COCA1L' },
  { nome: 'Coca Cola - Lata', quantidade: 1, preco: 5.00, categoria: 'Refrigerantes', sku: 'COCA_L' },
  { nome: 'Pepsi', quantidade: 1, preco: 8.00, categoria: 'Refrigerantes', sku: 'PEPSI001' },
  { nome: 'Dore Refrigerante', quantidade: 1, preco: 8.00, categoria: 'Refrigerantes', sku: 'DORE001' },

  // ============================================================================
  // BEBIDAS NÃO ALCOÓLICAS
  // ============================================================================
  { nome: 'Água Mineral', quantidade: 1, preco: 2.00, categoria: 'Bebidas Não Alcoólicas', sku: 'AGUA001' },
  { nome: 'Água com Gás', quantidade: 1, preco: 3.00, categoria: 'Bebidas Não Alcoólicas', sku: 'AGUAG001' },
  { nome: 'Suco de Uva Del Vale', quantidade: 1, preco: 9.00, categoria: 'Bebidas Não Alcoólicas', sku: 'SUCODELV' },
  { nome: 'Infinity', quantidade: 1, preco: 12.00, categoria: 'Bebidas Não Alcoólicas', sku: 'INFIN001' },

  // ============================================================================
  // DOSES
  // ============================================================================
  { nome: 'Dose Pitu', quantidade: 1, preco: 2.00, categoria: 'Doses', sku: 'DOSEPITU' },
  { nome: 'Dose Dreher', quantidade: 1, preco: 3.00, categoria: 'Doses', sku: 'DOSEDRE' },
  { nome: 'Dose Carangueijo', quantidade: 1, preco: 2.00, categoria: 'Doses', sku: 'DOSECARAN' },

  // ============================================================================
  // ALIMENTOS - DOCES E SALGADOS
  // ============================================================================
  { nome: 'Pastilha Halls', quantidade: 1, preco: 3.00, categoria: 'Alimentos', sku: 'HALLS001' },
  { nome: 'Pastilha Freegels', quantidade: 1, preco: 2.50, categoria: 'Alimentos', sku: 'FREEG001' },
  { nome: 'Pipoca Kro', quantidade: 1, preco: 3.00, categoria: 'Alimentos', sku: 'PIPOKRO' },
  { nome: 'Pipos', quantidade: 1, preco: 5.00, categoria: 'Alimentos', sku: 'PIPOS001' },
  { nome: 'Biscoitos Recheado', quantidade: 1, preco: 3.00, categoria: 'Alimentos', sku: 'BISC001' },
  { nome: 'Fruit Tella', quantidade: 1, preco: 2.50, categoria: 'Alimentos', sku: 'FRUIT001' },
  { nome: 'Kisuk', quantidade: 1, preco: 1.50, categoria: 'Alimentos', sku: 'KISUK001' },

  // ============================================================================
  // ALIMENTOS - MASSAS E CONDIMENTOS
  // ============================================================================
  { nome: 'Miojo Nissin Carne', quantidade: 1, preco: 3.00, categoria: 'Alimentos', sku: 'MIOJOCARNE' },
  { nome: 'Miojo Nissin Galinha', quantidade: 1, preco: 3.50, categoria: 'Alimentos', sku: 'MIOJOGAL' },
  { nome: 'Cup Noodles', quantidade: 1, preco: 8.00, categoria: 'Alimentos', sku: 'CUPNOOD' },
  { nome: 'Macarrão Espaguete', quantidade: 1, preco: 4.50, categoria: 'Alimentos', sku: 'MACARESP' },
  { nome: 'Molho de Tomate', quantidade: 1, preco: 2.50, categoria: 'Alimentos', sku: 'MOLHOTOMATE' },

  // ============================================================================
  // ALIMENTOS - INGREDIENTES
  // ============================================================================
  { nome: 'Café Santa Clara', quantidade: 1, preco: 18.00, categoria: 'Alimentos', sku: 'CAFESANTA' },
  { nome: 'Óleo', quantidade: 1, preco: 10.00, categoria: 'Alimentos', sku: 'OLEO001' },
  { nome: 'Sal', quantidade: 1, preco: 2.00, categoria: 'Alimentos', sku: 'SAL001' },
  { nome: 'Açúcar', quantidade: 1, preco: 5.00, categoria: 'Alimentos', sku: 'ACUCAR001' },
  { nome: 'Sazón', quantidade: 1, preco: 0.50, categoria: 'Alimentos', sku: 'SAZON001' },
  { nome: 'Margarina', quantidade: 1, preco: 5.00, categoria: 'Alimentos', sku: 'MARG001' },
  { nome: 'Creme de Leite', quantidade: 1, preco: 3.00, categoria: 'Alimentos', sku: 'CREMELEITE' },
  { nome: 'Leite Condensado', quantidade: 1, preco: 5.00, categoria: 'Alimentos', sku: 'LEITECOND' },
  { nome: 'Coloral', quantidade: 1, preco: 3.00, categoria: 'Alimentos', sku: 'COLORAL001' },
  { nome: 'Dueto', quantidade: 1, preco: 5.00, categoria: 'Alimentos', sku: 'DUETO001' },
  { nome: 'Maionese Quero', quantidade: 1, preco: 4.50, categoria: 'Alimentos', sku: 'MAIONESE' },
  { nome: 'Kitut', quantidade: 1, preco: 12.00, categoria: 'Alimentos', sku: 'KITUT001' },
];

async function importProducts() {
  console.log('📦 Importando produtos para Supabase...\n');
  console.log(`📍 Supabase URL: ${SUPABASE_URL}\n`);

  let successCount = 0;
  let errorCount = 0;

  for (const product of products) {
    try {
      const { data, error } = await supabase
        .from('produtos')
        .insert([
          {
            nome: product.nome,
            descricao: `${product.nome} - ${product.categoria}`,
            preco: product.preco,
            estoque: product.quantidade,
            categoria: product.categoria,
            sku: product.sku,
            ativo: true,
          },
        ])
        .select();

      if (error) throw error;
      
      console.log(`✅ ${product.nome} - R$ ${product.preco.toFixed(2)} (Estoque: ${product.quantidade})`);
      successCount++;
    } catch (error) {
      console.error(`❌ Erro ao importar ${product.nome}:`, error.message);
      errorCount++;
    }
  }

  console.log(`\n📊 Importação concluída!`);
  console.log(`✅ Sucesso: ${successCount} produtos`);
  console.log(`❌ Erros: ${errorCount} produtos`);
  console.log(`\n✨ Total de produtos: ${successCount + errorCount}`);
}

importProducts().then(() => {
  process.exit(0);
}).catch(err => {
  console.error('❌ Erro fatal:', err);
  process.exit(1);
});
