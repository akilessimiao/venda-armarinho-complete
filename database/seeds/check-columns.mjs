#!/usr/bin/env node

/**
 * Script para verificar colunas da tabela produtos
 */

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://rqhjshztxyzxcuggitvq.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_QKhdw6GmnU15_TKP4MKyWQ__gttIVN5';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function checkColumns() {
  try {
    console.log('🔍 Verificando colunas da tabela produtos...\n');

    // Tentar obter um registro para ver a estrutura
    const { data, error } = await supabase
      .from('produtos')
      .select('*')
      .limit(1);

    if (error) {
      console.error('❌ Erro:', error.message);
      return;
    }

    if (data && data.length > 0) {
      console.log('📋 Colunas encontradas:\n');
      const record = data[0];
      Object.keys(record).forEach(col => {
        console.log(`  - ${col}: ${typeof record[col]}`);
      });
      
      console.log('\n📝 Exemplo de registro:\n');
      console.log(JSON.stringify(record, null, 2));
    } else {
      console.log('⚠️  Tabela vazia. Tentando obter schema via REST...\n');
      
      // Tentar via REST API
      const response = await fetch(`${SUPABASE_URL}/rest/v1/produtos?limit=0`, {
        headers: {
          'apikey': SUPABASE_ANON_KEY,
        }
      });
      
      const contentRange = response.headers.get('content-range');
      console.log('Content-Range:', contentRange);
    }
  } catch (error) {
    console.error('❌ Erro:', error.message);
  }
}

checkColumns();
