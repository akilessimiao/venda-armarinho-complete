#!/usr/bin/env node

/**
 * Script de Importação Corrigido para Supabase
 * Usa as colunas corretas: descricao, preco_venda, quantidade
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
  { descricao: 'Campari', preco_venda: 80.00, quantidade: 1 },
  { descricao: 'Sky Vodka', preco_venda: 45.00, quantidade: 1 },
  { descricao: 'Jack Daniells', preco_venda: 180.00, quantidade: 1 },
  { descricao: 'Black With', preco_venda: 80.00, quantidade: 1 },
  { descricao: 'Smirnoff', preco_venda: 70.00, quantidade: 1 },

  // ============================================================================
  // CACHAÇAS
  // ============================================================================
  { descricao: 'Cachaça 51 - 1L', preco_venda: 14.00, quantidade: 3 },
  { descricao: 'Russov', preco_venda: 14.00, quantidade: 3 },
  { descricao: 'Cachaça Pitu - 1L', preco_venda: 14.00, quantidade: 5 },
  { descricao: 'Cachaça Carangueijo Ouro - 1L', preco_venda: 14.00, quantidade: 3 },
  { descricao: 'Cachaça Carangueijo Ouro - 275ml', preco_venda: 9.00, quantidade: 3 },
  { descricao: 'Cachaça Carangueijo Prata - 1L', preco_venda: 14.00, quantidade: 1 },
  { descricao: 'Cachaça Carangueijo Limão - 1L', preco_venda: 18.00, quantidade: 1 },
  { descricao: 'Cachaça São Tomé - 1L', preco_venda: 22.00, quantidade: 2 },
  { descricao: 'Cachaça Gostosinha', preco_venda: 4.00, quantidade: 13 },
  { descricao: 'Mansão Maromba', preco_venda: 22.00, quantidade: 1 },

  // ============================================================================
  // CERVEJAS
  // ============================================================================
  { descricao: 'Dreher - 1L', preco_venda: 30.00, quantidade: 1 },
  { descricao: 'Devassa - Caixa', preco_venda: 38.00, quantidade: 1 },
  { descricao: 'Devassa - Unidade', preco_venda: 4.00, quantidade: 1 },
  { descricao: 'Império - Caixa', preco_venda: 44.00, quantidade: 1 },
  { descricao: 'Império - Unidade', preco_venda: 5.00, quantidade: 1 },
  { descricao: 'Lokal - Caixa', preco_venda: 33.00, quantidade: 1 },
  { descricao: 'Lokal - Unidade', preco_venda: 3.00, quantidade: 1 },
  { descricao: 'Schin - Caixa', preco_venda: 35.00, quantidade: 1 },
  { descricao: 'Schin - Unidade', preco_venda: 3.50, quantidade: 1 },
  { descricao: 'Itaipava - Caixa', preco_venda: 36.00, quantidade: 1 },
  { descricao: 'Itaipava - Unidade', preco_venda: 4.00, quantidade: 1 },
  { descricao: 'Amstel - Caixa', preco_venda: 48.00, quantidade: 1 },
  { descricao: 'Amstel - Unidade', preco_venda: 5.00, quantidade: 1 },
  { descricao: 'Budweiser - Caixa', preco_venda: 50.00, quantidade: 1 },
  { descricao: 'Budweiser - Unidade', preco_venda: 5.00, quantidade: 1 },
  { descricao: 'Brice Cabaré - Unidade', preco_venda: 7.00, quantidade: 1 },
  { descricao: 'Cereser - Caixa', preco_venda: 24.00, quantidade: 4 },
  { descricao: 'Prestige - Caixa', preco_venda: 16.00, quantidade: 4 },

  // ============================================================================
  // BEBIDAS MISTAS
  // ============================================================================
  { descricao: 'San Marino', preco_venda: 8.00, quantidade: 3 },
  { descricao: 'Vinho Vermelhão', preco_venda: 20.00, quantidade: 2 },
  { descricao: 'Preciosa do Vale', preco_venda: 45.00, quantidade: 2 },
  { descricao: 'Matuta Bálsamo - 1L', preco_venda: 46.00, quantidade: 1 },
  { descricao: 'Matuta Cristal - 1L', preco_venda: 45.00, quantidade: 3 },
  { descricao: 'Matuta Cristal - 300ml', preco_venda: 17.00, quantidade: 3 },

  // ============================================================================
  // BEBIDAS LATAS
  // ============================================================================
  { descricao: 'Carangueijo Prata - Lata', preco_venda: 7.00, quantidade: 17 },
  { descricao: 'Carangueijo Ouro - Lata', preco_venda: 7.00, quantidade: 5 },
  { descricao: 'Pitu Limão - Lata', preco_venda: 7.00, quantidade: 15 },
  { descricao: 'Ypioca - Lata', preco_venda: 7.00, quantidade: 1 },
  { descricao: '51 - Lata', preco_venda: 7.00, quantidade: 1 },

  // ============================================================================
  // REFRIGERANTES
  // ============================================================================
  { descricao: 'Coca Cola - 1L', preco_venda: 10.00, quantidade: 1 },
  { descricao: 'Coca Cola - Lata', preco_venda: 5.00, quantidade: 1 },
  { descricao: 'Pepsi', preco_venda: 8.00, quantidade: 1 },
  { descricao: 'Dore Refrigerante', preco_venda: 8.00, quantidade: 1 },

  // ============================================================================
  // BEBIDAS NÃO ALCOÓLICAS
  // ============================================================================
  { descricao: 'Água Mineral', preco_venda: 2.00, quantidade: 1 },
  { descricao: 'Água com Gás', preco_venda: 3.00, quantidade: 1 },
  { descricao: 'Suco de Uva Del Vale', preco_venda: 9.00, quantidade: 1 },
  { descricao: 'Infinity', preco_venda: 12.00, quantidade: 1 },

  // ============================================================================
  // DOSES
  // ============================================================================
  { descricao: 'Dose Pitu', preco_venda: 2.00, quantidade: 1 },
  { descricao: 'Dose Dreher', preco_venda: 3.00, quantidade: 1 },
  { descricao: 'Dose Carangueijo', preco_venda: 2.00, quantidade: 1 },

  // ============================================================================
  // ALIMENTOS - DOCES E SALGADOS
  // ============================================================================
  { descricao: 'Pastilha Halls', preco_venda: 3.00, quantidade: 1 },
  { descricao: 'Pastilha Freegels', preco_venda: 2.50, quantidade: 1 },
  { descricao: 'Pipoca Kro', preco_venda: 3.00, quantidade: 1 },
  { descricao: 'Pipos', preco_venda: 5.00, quantidade: 1 },
  { descricao: 'Biscoitos Recheado', preco_venda: 3.00, quantidade: 1 },
  { descricao: 'Fruit Tella', preco_venda: 2.50, quantidade: 1 },
  { descricao: 'Kisuk', preco_venda: 1.50, quantidade: 1 },

  // ============================================================================
  // ALIMENTOS - MASSAS E CONDIMENTOS
  // ============================================================================
  { descricao: 'Miojo Nissin Carne', preco_venda: 3.00, quantidade: 1 },
  { descricao: 'Miojo Nissin Galinha', preco_venda: 3.50, quantidade: 1 },
  { descricao: 'Cup Noodles', preco_venda: 8.00, quantidade: 1 },
  { descricao: 'Macarrão Espaguete', preco_venda: 4.50, quantidade: 1 },
  { descricao: 'Molho de Tomate', preco_venda: 2.50, quantidade: 1 },

  // ============================================================================
  // ALIMENTOS - INGREDIENTES
  // ============================================================================
  { descricao: 'Café Santa Clara', preco_venda: 18.00, quantidade: 1 },
  { descricao: 'Óleo', preco_venda: 10.00, quantidade: 1 },
  { descricao: 'Sal', preco_venda: 2.00, quantidade: 1 },
  { descricao: 'Açúcar', preco_venda: 5.00, quantidade: 1 },
  { descricao: 'Sazón', preco_venda: 0.50, quantidade: 1 },
  { descricao: 'Margarina', preco_venda: 5.00, quantidade: 1 },
  { descricao: 'Creme de Leite', preco_venda: 3.00, quantidade: 1 },
  { descricao: 'Leite Condensado', preco_venda: 5.00, quantidade: 1 },
  { descricao: 'Coloral', preco_venda: 3.00, quantidade: 1 },
  { descricao: 'Dueto', preco_venda: 5.00, quantidade: 1 },
  { descricao: 'Maionese Quero', preco_venda: 4.50, quantidade: 1 },
  { descricao: 'Kitut', preco_venda: 12.00, quantidade: 1 },
];

async function importProducts() {
  console.log('📦 Importando produtos para Supabase (Versão Corrigida)...\n');
  console.log(`📍 Supabase URL: ${SUPABASE_URL}\n`);

  let successCount = 0;
  let errorCount = 0;

  for (const product of products) {
    try {
      const { data, error } = await supabase
        .from('produtos')
        .insert([product])
        .select();

      if (error) throw error;
      
      console.log(`✅ ${product.descricao} - R$ ${product.preco_venda.toFixed(2)}`);
      successCount++;
    } catch (error) {
      console.error(`❌ Erro ao importar ${product.descricao}:`, error.message);
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
