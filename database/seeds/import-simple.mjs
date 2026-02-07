#!/usr/bin/env node

/**
 * Script de Importação Simples para Supabase
 * Importa apenas com os campos básicos
 */

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://rqhjshztxyzxcuggitvq.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_QKhdw6GmnU15_TKP4MKyWQ__gttIVN5';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Dados dos produtos
const products = [
  { nome: 'Campari', preco: 80.00 },
  { nome: 'Sky Vodka', preco: 45.00 },
  { nome: 'Jack Daniells', preco: 180.00 },
  { nome: 'Black With', preco: 80.00 },
  { nome: 'Smirnoff', preco: 70.00 },
  { nome: 'Cachaça 51 - 1L', preco: 14.00 },
  { nome: 'Russov', preco: 14.00 },
  { nome: 'Cachaça Pitu - 1L', preco: 14.00 },
  { nome: 'Cachaça Carangueijo Ouro - 1L', preco: 14.00 },
  { nome: 'Cachaça Carangueijo Ouro - 275ml', preco: 9.00 },
  { nome: 'Cachaça Carangueijo Prata - 1L', preco: 14.00 },
  { nome: 'Cachaça Carangueijo Limão - 1L', preco: 18.00 },
  { nome: 'Cachaça São Tomé - 1L', preco: 22.00 },
  { nome: 'Cachaça Gostosinha', preco: 4.00 },
  { nome: 'Mansão Maromba', preco: 22.00 },
  { nome: 'Dreher - 1L', preco: 30.00 },
  { nome: 'Devassa - Caixa', preco: 38.00 },
  { nome: 'Devassa - Unidade', preco: 4.00 },
  { nome: 'Império - Caixa', preco: 44.00 },
  { nome: 'Império - Unidade', preco: 5.00 },
  { nome: 'Lokal - Caixa', preco: 33.00 },
  { nome: 'Lokal - Unidade', preco: 3.00 },
  { nome: 'Schin - Caixa', preco: 35.00 },
  { nome: 'Schin - Unidade', preco: 3.50 },
  { nome: 'Itaipava - Caixa', preco: 36.00 },
  { nome: 'Itaipava - Unidade', preco: 4.00 },
  { nome: 'Amstel - Caixa', preco: 48.00 },
  { nome: 'Amstel - Unidade', preco: 5.00 },
  { nome: 'Budweiser - Caixa', preco: 50.00 },
  { nome: 'Budweiser - Unidade', preco: 5.00 },
  { nome: 'Brice Cabaré - Unidade', preco: 7.00 },
  { nome: 'Cereser - Caixa', preco: 24.00 },
  { nome: 'Prestige - Caixa', preco: 16.00 },
  { nome: 'San Marino', preco: 8.00 },
  { nome: 'Vinho Vermelhão', preco: 20.00 },
  { nome: 'Preciosa do Vale', preco: 45.00 },
  { nome: 'Matuta Bálsamo - 1L', preco: 46.00 },
  { nome: 'Matuta Cristal - 1L', preco: 45.00 },
  { nome: 'Matuta Cristal - 300ml', preco: 17.00 },
  { nome: 'Carangueijo Prata - Lata', preco: 7.00 },
  { nome: 'Carangueijo Ouro - Lata', preco: 7.00 },
  { nome: 'Pitu Limão - Lata', preco: 7.00 },
  { nome: 'Ypioca - Lata', preco: 7.00 },
  { nome: '51 - Lata', preco: 7.00 },
  { nome: 'Coca Cola - 1L', preco: 10.00 },
  { nome: 'Coca Cola - Lata', preco: 5.00 },
  { nome: 'Pepsi', preco: 8.00 },
  { nome: 'Dore Refrigerante', preco: 8.00 },
  { nome: 'Água Mineral', preco: 2.00 },
  { nome: 'Água com Gás', preco: 3.00 },
  { nome: 'Suco de Uva Del Vale', preco: 9.00 },
  { nome: 'Infinity', preco: 12.00 },
  { nome: 'Dose Pitu', preco: 2.00 },
  { nome: 'Dose Dreher', preco: 3.00 },
  { nome: 'Dose Carangueijo', preco: 2.00 },
  { nome: 'Pastilha Halls', preco: 3.00 },
  { nome: 'Pastilha Freegels', preco: 2.50 },
  { nome: 'Pipoca Kro', preco: 3.00 },
  { nome: 'Pipos', preco: 5.00 },
  { nome: 'Biscoitos Recheado', preco: 3.00 },
  { nome: 'Fruit Tella', preco: 2.50 },
  { nome: 'Kisuk', preco: 1.50 },
  { nome: 'Miojo Nissin Carne', preco: 3.00 },
  { nome: 'Miojo Nissin Galinha', preco: 3.50 },
  { nome: 'Cup Noodles', preco: 8.00 },
  { nome: 'Macarrão Espaguete', preco: 4.50 },
  { nome: 'Molho de Tomate', preco: 2.50 },
  { nome: 'Café Santa Clara', preco: 18.00 },
  { nome: 'Óleo', preco: 10.00 },
  { nome: 'Sal', preco: 2.00 },
  { nome: 'Açúcar', preco: 5.00 },
  { nome: 'Sazón', preco: 0.50 },
  { nome: 'Margarina', preco: 5.00 },
  { nome: 'Creme de Leite', preco: 3.00 },
  { nome: 'Leite Condensado', preco: 5.00 },
  { nome: 'Coloral', preco: 3.00 },
  { nome: 'Dueto', preco: 5.00 },
  { nome: 'Maionese Quero', preco: 4.50 },
  { nome: 'Kitut', preco: 12.00 },
];

async function importProducts() {
  console.log('📦 Importando produtos para Supabase (Versão Simples)...\n');
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
            preco: product.preco,
          },
        ])
        .select();

      if (error) throw error;
      
      console.log(`✅ ${product.nome} - R$ ${product.preco.toFixed(2)}`);
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
