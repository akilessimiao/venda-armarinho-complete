// Configuração Supabase - JAVA CONVENIÊNCIA 24H
const SUPABASE_URL = 'https://YOUR_PROJECT_ID.supabase.co';
const SUPABASE_KEY = 'YOUR_SUPABASE_ANON_KEY';

// Inicializar Supabase
const supabase = supabase.create({
    url: SUPABASE_URL,
    key: SUPABASE_KEY
});

// Funções de autenticação
const auth = {
    async login(username, password) {
        try {
            const { data, error } = await supabase
                .from('usuarios')
                .select('*')
                .eq('username', username)
                .eq('password', password)
                .single();

            if (error) throw error;
            if (!data) return null;

            // Salvar dados do usuário
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userRole', data.role);
            localStorage.setItem('username', data.username);
            localStorage.setItem('userName', data.name);
            localStorage.setItem('userId', data.id);
            localStorage.setItem('loginTime', new Date().toISOString());

            return data;
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            return null;
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

// Funções de Produtos
const produtos = {
    async getAll() {
        const { data, error } = await supabase
            .from('produtos')
            .select('*')
            .order('nome', { ascending: true });
        
        if (error) throw error;
        return data || [];
    },

    async getById(id) {
        const { data, error } = await supabase
            .from('produtos')
            .select('*')
            .eq('id', id)
            .single();
        
        if (error) throw error;
        return data;
    },

    async getByBarcode(codigo_barras) {
        const { data, error } = await supabase
            .from('produtos')
            .select('*')
            .eq('codigo_barras', codigo_barras)
            .single();
        
        if (error) return null;
        return data;
    },

    async create(produto) {
        const { data, error } = await supabase
            .from('produtos')
            .insert([produto])
            .select()
            .single();
        
        if (error) throw error;
        return data;
    },

    async update(id, produto) {
        const { data, error } = await supabase
            .from('produtos')
            .update(produto)
            .eq('id', id)
            .select()
            .single();
        
        if (error) throw error;
        return data;
    },

    async delete(id) {
        const { error } = await supabase
            .from('produtos')
            .delete()
            .eq('id', id);
        
        if (error) throw error;
        return true;
    },

    async updateEstoque(id, quantidade) {
        const { data, error } = await supabase
            .from('produtos')
            .update({ estoque: supabase.raw(`estoque + ${quantidade}`) })
            .eq('id', id)
            .select()
            .single();
        
        if (error) throw error;
        return data;
    }
};

// Funções de Vendas
const vendas = {
    async create(venda) {
        const { data, error } = await supabase
            .from('vendas')
            .insert([venda])
            .select()
            .single();
        
        if (error) throw error;
        return data;
    },

    async getAll() {
        const { data, error } = await supabase
            .from('vendas')
            .select('*')
            .order('created_at', { ascending: false });
        
        if (error) throw error;
        return data || [];
    },

    async getById(id) {
        const { data, error } = await supabase
            .from('vendas')
            .select('*')
            .eq('id', id)
            .single();
        
        if (error) throw error;
        return data;
    },

    async getByDateRange(data_inicio, data_fim) {
        const { data, error } = await supabase
            .from('vendas')
            .select('*')
            .gte('created_at', data_inicio)
            .lte('created_at', data_fim)
            .order('created_at', { ascending: false });
        
        if (error) throw error;
        return data || [];
    }
};

// Funções de Itens de Venda
const itensVenda = {
    async create(itens) {
        const { data, error } = await supabase
            .from('itens_venda')
            .insert(itens)
            .select();
        
        if (error) throw error;
        return data;
    },

    async getByVendaId(venda_id) {
        const { data, error } = await supabase
            .from('itens_venda')
            .select(`
                *,
                produtos (nome, preco_venda)
            `)
            .eq('venda_id', venda_id);
        
        if (error) throw error;
        return data || [];
    }
};

// Funções de Clientes
const clientes = {
    async getAll() {
        const { data, error } = await supabase
            .from('clientes')
            .select('*')
            .order('nome', { ascending: true });
        
        if (error) throw error;
        return data || [];
    },

    async create(cliente) {
        const { data, error } = await supabase
            .from('clientes')
            .insert([cliente])
            .select()
            .single();
        
        if (error) throw error;
        return data;
    },

    async update(id, cliente) {
        const { data, error } = await supabase
            .from('clientes')
            .update(cliente)
            .eq('id', id)
            .select()
            .single();
        
        if (error) throw error;
        return data;
    },

    async delete(id) {
        const { error } = await supabase
            .from('clientes')
            .delete()
            .eq('id', id);
        
        if (error) throw error;
        return true;
    }
};

// Funções de Sangria
const sangria = {
    async create(sangria) {
        const { data, error } = await supabase
            .from('sangria')
            .insert([sangria])
            .select()
            .single();
        
        if (error) throw error;
        return data;
    },

    async getAll() {
        const { data, error } = await supabase
            .from('sangria')
            .select('*')
            .order('created_at', { ascending: false });
        
        if (error) throw error;
        return data || [];
    }
};

// Funções de Leitura Z
const leituraZ = {
    async create(leitura) {
        const { data, error } = await supabase
            .from('leitura_z')
            .insert([leitura])
            .select()
            .single();
        
        if (error) throw error;
        return data;
    },

    async getAll() {
        const { data, error } = await supabase
            .from('leitura_z')
            .select('*')
            .order('created_at', { ascending: false });
        
        if (error) throw error;
        return data || [];
    }
};

// Backup e Restore
const backup = {
    async download() {
        try {
            // Buscar todos os dados
            const produtosData = await produtos.getAll();
            const clientesData = await clientes.getAll();
            const vendasData = await vendas.getAll();
            
            const backupData = {
                timestamp: new Date().toISOString(),
                produtos: produtosData,
                clientes: clientesData,
                vendas: vendasData
            };
            
            // Criar arquivo JSON
            const dataStr = JSON.stringify(backupData, null, 2);
            const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
            
            const exportFileDefaultName = `backup-java-conveniencia-${new Date().toISOString().split('T')[0]}.json`;
            
            const linkElement = document.createElement('a');
            linkElement.setAttribute('href', dataUri);
            linkElement.setAttribute('download', exportFileDefaultName);
            linkElement.click();
            
            return true;
        } catch (error) {
            console.error('Erro ao fazer backup:', error);
            return false;
        }
    }
};