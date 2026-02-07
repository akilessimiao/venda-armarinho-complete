#!/usr/bin/env node

/**
 * Script para verificar estrutura do Supabase
 */

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://rqhjshztxyzxcuggitvq.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_QKhdw6GmnU15_TKP4MKyWQ__gttIVN5';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function checkTables() {
  try {
    console.log('🔍 Verificando tabelas do Supabase...\n');

    // Lista de tabelas a verificar
    const tablesToCheck = ['produtos', 'categorias', 'clientes', 'pedidos', 'carrinho'];

    for (const table of tablesToCheck) {
      try {
        const { data, error } = await supabase
          .from(table)
          .select('*')
          .limit(1);

        if (error) {
          console.log(`❌ ${table}: ${error.message}`);
        } else {
          console.log(`✅ ${table}: Existe`);
        }
      } catch (err) {
        console.log(`❌ ${table}: Erro ao verificar`);
      }
    }

    // Tentar listar todas as tabelas
    console.log('\n📋 Tentando listar todas as tabelas...\n');
    
    const { data: tables, error: tablesError } = await supabase
      .from('information_schema.tables')
      .select('table_name')
      .eq('table_schema', 'public');

    if (tablesError) {
      console.log('❌ Não foi possível listar tabelas via information_schema');
      console.log('Tentando abordagem alternativa...\n');
      
      // Tentar acessar tabelas conhecidas do repositório v3.1
      const knownTables = ['produtos', 'categorias', 'clientes', 'pedidos', 'carrinho', 'usuarios', 'vendas'];
      
      console.log('📊 Tabelas conhecidas do repositório v3.1:\n');
      for (const table of knownTables) {
        try {
          const { data, error } = await supabase
            .from(table)
            .select('*')
            .limit(1);

          if (!error) {
            console.log(`✅ ${table}`);
          }
        } catch (err) {
          // Ignorar erros
        }
      }
    } else {
      console.log('📊 Tabelas encontradas:\n');
      if (tables && tables.length > 0) {
        tables.forEach(t => console.log(`✅ ${t.table_name}`));
      } else {
        console.log('Nenhuma tabela encontrada');
      }
    }

  } catch (error) {
    console.error('❌ Erro ao verificar Supabase:', error);
  }
}

checkTables();
