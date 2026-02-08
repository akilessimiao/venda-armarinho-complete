// ============================================
// CONFIGURAÇÃO SUPABASE - JAVA CONVENIÊNCIA 24H
// ============================================

// Configuração Supabase
const SUPABASE_URL = 'https://hdnktgzszesfaghwvsfk.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhkbmt0Z3pzemVzZmFnaHd2c2ZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA1MTczMDMsImV4cCI6MjA4NjA5MzMwM30.n0cJ12WoYJ3od9-BcP4sUaCPKCFGAICUpiWVwlrASTw';

// Inicializar Supabase
const supabase = window.supabase.create({
    url: SUPABASE_URL,
    key: SUPABASE_KEY
});

// ============================================
// FUNÇÕES DE AUTENTICAÇÃO
// ============================================

const auth = {
    async login(username, password) {
        try {
            const { data, error } = await supabase
                .from('usuarios')
                .select('*')
                .eq('username', username.toLowerCase().trim())
                .eq('password', password.trim())
                .single();

            if (error) {
                console.error('Erro na consulta:', error);
                return { success: false, message: 'Usuário ou senha inválidos' };
            }

            if (!data) {
                return { success: false, message: 'Usuário ou senha inválidos' };
            }

            // Salvar dados do usuário
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userRole', data.role);
            localStorage.setItem('username', data.username);
            localStorage.setItem('userName', data.name);
            localStorage.setItem('userId', data.id);
            localStorage.setItem('loginTime', new Date().toISOString());

            return { 
                success: true, 
                user: {
                    id: data.id,
                    username: data.username,
                    name: data.name,
                    role: data.role
                }
            };
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            return { success: false, message: 'Erro ao conectar com o servidor' };
        }
    },

    logout() {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userRole');
        localStorage.removeItem('username');
        localStorage.removeItem('userName');
        localStorage.removeItem('userId');
        localStorage.removeItem('loginTime');
    },

    isLoggedIn() {
        return localStorage.getItem('isLoggedIn') === 'true';
    },

    isAdmin() {
        return localStorage.getItem('userRole') === 'admin';
    },

    getCurrentUser() {
        return {
            id: localStorage.getItem('userId'),
            username: localStorage.getItem('username'),
            name: localStorage.getItem('userName'),
            role: localStorage.getItem('userRole')
        };
    },

    checkSession() {
        const loginTime = localStorage.getItem('loginTime');
        if (!loginTime) return false;

        const now = new Date();
        const loginDate = new Date(loginTime);
        const diffHours = (now - loginDate) / (1000 * 60 * 60);

        return diffHours <= 24; // Sessão válida por 24h
    }
};

// ============================================
// FUNÇÕES DE PRODUTOS
// ============================================

const produtos = {
    async getAll() {
        try {
            const { data, error } = await supabase
                .from('produtos')
                .select('*')
                .order('nome', { ascending: true });
            
            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
            return [];
        }
    },

    async getById(id) {
        try {
            const { data, error } = await supabase
                .from('produtos')
                .select('*')
                .eq('id', id)
                .single();
            
            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Erro ao buscar produto:', error);
            return null;
        }
    },

    async getByBarcode(codigo_barras) {
        try {
            const { data, error } = await supabase
                .from('produtos')
                .select('*')
                .eq('codigo_barras', codigo_barras.trim())
                .single();
            
            if (error) return null;
            return data;
        } catch (error) {
            console.error('Erro ao buscar produto por código:', error);
            return null;
        }
    },

    async create(produto) {
        try {
            const { data, error } = await supabase
                .from('produtos')
                .insert([produto])
                .select()
                .single();
            
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error('Erro ao criar produto:', error);
            return { success: false, error: error.message };
        }
    },

    async update(id, produto) {
        try {
            const { data, error } = await supabase
                .from('produtos')
                .update(produto)
                .eq('id', id)
                .select()
                .single();
            
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error('Erro ao atualizar produto:', error);
            return { success: false, error: error.message };
        }
    },

    async delete(id) {
        try {
            const { error } = await supabase
                .from('produtos')
                .delete()
                .eq('id', id);
            
            if (error) throw error;
            return { success: true };
        } catch (error) {
            console.error('Erro ao deletar produto:', error);
            return { success: false, error: error.message };
        }
    },

    async updateEstoque(id, quantidade) {
        try {
            const { data, error } = await supabase
                .from('produtos')
                .select('estoque')
                .eq('id', id)
                .single();
            
            if (error) throw error;
            
            const novoEstoque = (data.estoque || 0) + quantidade;
            
            const { data: updated, error: updateError } = await supabase
                .from('produtos')
                .update({ estoque: novoEstoque })
                .eq('id', id)
                .select()
                .single();
            
            if (updateError) throw updateError;
            return { success: true, data: updated };
        } catch (error) {
            console.error('Erro ao atualizar estoque:', error);
            return { success: false, error: error.message };
        }
    }
};

// ============================================
// FUNÇÕES DE VENDAS
// ============================================

const vendas = {
    async create(venda) {
        try {
            const { data, error } = await supabase
                .from('vendas')
                .insert([venda])
                .select()
                .single();
            
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error('Erro ao criar venda:', error);
            return { success: false, error: error.message };
        }
    },

    async getAll() {
        try {
            const { data, error } = await supabase
                .from('vendas')
                .select('*')
                .order('created_at', { ascending: false })
                .limit(100);
            
            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('Erro ao buscar vendas:', error);
            return [];
        }
    },

    async getById(id) {
        try {
            const { data, error } = await supabase
                .from('vendas')
                .select('*')
                .eq('id', id)
                .single();
            
            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Erro ao buscar venda:', error);
            return null;
        }
    },

    async getByDateRange(data_inicio, data_fim) {
        try {
            const { data, error } = await supabase
                .from('vendas')
                .select('*')
                .gte('created_at', data_inicio)
                .lte('created_at', data_fim)
                .order('created_at', { ascending: false });
            
            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('Erro ao buscar vendas por data:', error);
            return [];
        }
    },

    async getToday() {
        try {
            const today = new Date().toISOString().split('T')[0];
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            const tomorrowStr = tomorrow.toISOString().split('T')[0];
            
            const { data, error } = await supabase
                .from('vendas')
                .select('*')
                .gte('created_at', `${today}T00:00:00`)
                .lt(`${tomorrowStr}T00:00:00`)
                .order('created_at', { ascending: false });
            
            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('Erro ao buscar vendas de hoje:', error);
            return [];
        }
    }
};

// ============================================
// FUNÇÕES DE ITENS DE VENDA
// ============================================

const itensVenda = {
    async create(itens) {
        try {
            const { data, error } = await supabase
                .from('itens_venda')
                .insert(itens)
                .select();
            
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error('Erro ao criar itens de venda:', error);
            return { success: false, error: error.message };
        }
    },

    async getByVendaId(venda_id) {
        try {
            const { data, error } = await supabase
                .from('itens_venda')
                .select(`
                    *,
                    produtos (nome, preco_venda)
                `)
                .eq('venda_id', venda_id);
            
            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('Erro ao buscar itens de venda:', error);
            return [];
        }
    }
};

// ============================================
// FUNÇÕES DE CLIENTES
// ============================================

const clientes = {
    async getAll() {
        try {
            const { data, error } = await supabase
                .from('clientes')
                .select('*')
                .order('nome', { ascending: true });
            
            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('Erro ao buscar clientes:', error);
            return [];
        }
    },

    async create(cliente) {
        try {
            const { data, error } = await supabase
                .from('clientes')
                .insert([cliente])
                .select()
                .single();
            
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error('Erro ao criar cliente:', error);
            return { success: false, error: error.message };
        }
    },

    async update(id, cliente) {
        try {
            const { data, error } = await supabase
                .from('clientes')
                .update(cliente)
                .eq('id', id)
                .select()
                .single();
            
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error('Erro ao atualizar cliente:', error);
            return { success: false, error: error.message };
        }
    },

    async delete(id) {
        try {
            const { error } = await supabase
                .from('clientes')
                .delete()
                .eq('id', id);
            
            if (error) throw error;
            return { success: true };
        } catch (error) {
            console.error('Erro ao deletar cliente:', error);
            return { success: false, error: error.message };
        }
    }
};

// ============================================
// FUNÇÕES DE SANGRIA
// ============================================

const sangria = {
    async create(sangria) {
        try {
            const { data, error } = await supabase
                .from('sangria')
                .insert([sangria])
                .select()
                .single();
            
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error('Erro ao criar sangria:', error);
            return { success: false, error: error.message };
        }
    },

    async getAll() {
        try {
            const { data, error } = await supabase
                .from('sangria')
                .select('*')
                .order('created_at', { ascending: false });
            
            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('Erro ao buscar sangrias:', error);
            return [];
        }
    },

    async getByDateRange(data_inicio, data_fim) {
        try {
            const { data, error } = await supabase
                .from('sangria')
                .select('*')
                .gte('created_at', data_inicio)
                .lte('created_at', data_fim)
                .order('created_at', { ascending: false });
            
            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('Erro ao buscar sangrias por data:', error);
            return [];
        }
    }
};

// ============================================
// FUNÇÕES DE LEITURA Z
// ============================================

const leituraZ = {
    async create(leitura) {
        try {
            const { data, error } = await supabase
                .from('leitura_z')
                .insert([leitura])
                .select()
                .single();
            
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error('Erro ao criar leitura Z:', error);
            return { success: false, error: error.message };
        }
    },

    async getAll() {
        try {
            const { data, error } = await supabase
                .from('leitura_z')
                .select('*')
                .order('created_at', { ascending: false });
            
            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('Erro ao buscar leituras Z:', error);
            return [];
        }
    }
};

// ============================================
// FUNÇÕES DE CUPONS
// ============================================

const cupons = {
    async getAll() {
        try {
            const { data, error } = await supabase
                .from('cupons')
                .select('*')
                .order('created_at', { ascending: false });
            
            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('Erro ao buscar cupons:', error);
            return [];
        }
    },

    async getById(id) {
        try {
            const { data, error } = await supabase
                .from('cupons')
                .select('*')
                .eq('id', id)
                .single();
            
            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Erro ao buscar cupom:', error);
            return null;
        }
    },

    async create(cupom) {
        try {
            const { data, error } = await supabase
                .from('cupons')
                .insert([cupom])
                .select()
                .single();
            
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error('Erro ao criar cupom:', error);
            return { success: false, error: error.message };
        }
    }
};

// ============================================
// BACKUP E RESTORE
// ============================================

const backup = {
    async download() {
        try {
            // Buscar todos os dados
            const produtosData = await produtos.getAll();
            const clientesData = await clientes.getAll();
            const vendasData = await vendas.getAll();
            const sangriasData = await sangria.getAll();
            const leiturasZData = await leituraZ.getAll();
            
            const backupData = {
                timestamp: new Date().toISOString(),
                empresa: 'JAVA CONVENIÊNCIA 24H',
                version: '1.0',
                dados: {
                    produtos: produtosData,
                    clientes: clientesData,
                    vendas: vendasData,
                    sangrias: sangriasData,
                    leituras_z: leiturasZData
                }
            };
            
            // Criar arquivo JSON
            const dataStr = JSON.stringify(backupData, null, 2);
            const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
            
            const exportFileDefaultName = `backup-java-conveniencia-${new Date().toISOString().split('T')[0]}.json`;
            
            const linkElement = document.createElement('a');
            linkElement.setAttribute('href', dataUri);
            linkElement.setAttribute('download', exportFileDefaultName);
            linkElement.click();
            
            return { success: true };
        } catch (error) {
            console.error('Erro ao fazer backup:', error);
            return { success: false, error: error.message };
        }
    }
};

// ============================================
// UTILITÁRIOS
// ============================================

const utils = {
    formatMoney(value) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value || 0);
    },

    formatDate(date) {
        return new Date(date).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    },

    generateCupomNumber() {
        return 'CUPOM-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
    },

    showToast(message, type = 'success') {
        // Criar toast
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-triangle'}"></i>
            ${message}
        `;
        
        document.body.appendChild(toast);
        
        // Remover após 3 segundos
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 3000);
    }
};

// ============================================
// INICIALIZAÇÃO
// ============================================

console.log('✅ Configuração Supabase carregada - JAVA CONVENIÊNCIA 24H');
