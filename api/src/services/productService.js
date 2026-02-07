/**
 * Serviço de Produtos
 * Gerencia CRUD de produtos
 */

import { supabase } from '../config/supabase.js';

class ProductService {
  /**
   * Criar novo produto
   * @param {Object} productData - Dados do produto
   * @returns {Promise<Object>} Produto criado
   */
  async createProduct(productData) {
    try {
      const {
        sku,
        name,
        slug,
        description,
        short_description,
        category_id,
        price,
        cost_price,
        discount_price,
        discount_percentage,
        stock_quantity,
        low_stock_threshold,
        weight,
        dimensions,
        color,
        size,
        material,
        brand,
        is_active,
        is_featured,
      } = productData;

      // Validar dados obrigatórios
      if (!sku || !name || !category_id || !price) {
        return {
          success: false,
          message: 'SKU, nome, categoria e preço são obrigatórios',
        };
      }

      // Gerar slug se não fornecido
      const productSlug = slug || this.generateSlug(name);

      const { data, error } = await supabase
        .from('products')
        .insert([
          {
            sku,
            name,
            slug: productSlug,
            description,
            short_description,
            category_id,
            price,
            cost_price,
            discount_price,
            discount_percentage,
            stock_quantity: stock_quantity || 0,
            low_stock_threshold: low_stock_threshold || 10,
            weight,
            dimensions,
            color,
            size,
            material,
            brand,
            is_active: is_active !== false,
            is_featured: is_featured || false,
          },
        ])
        .select();

      if (error) throw error;

      return {
        success: true,
        message: 'Produto criado com sucesso',
        product: data[0],
      };
    } catch (error) {
      console.error('Erro ao criar produto:', error);
      return {
        success: false,
        message: `Erro ao criar produto: ${error.message}`,
        error: error.message,
      };
    }
  }

  /**
   * Atualizar produto
   * @param {number} id - ID do produto
   * @param {Object} productData - Dados a atualizar
   * @returns {Promise<Object>} Produto atualizado
   */
  async updateProduct(id, productData) {
    try {
      const { data, error } = await supabase
        .from('products')
        .update(productData)
        .eq('id', id)
        .select();

      if (error) throw error;

      return {
        success: true,
        message: 'Produto atualizado com sucesso',
        product: data[0],
      };
    } catch (error) {
      console.error('Erro ao atualizar produto:', error);
      return {
        success: false,
        message: `Erro ao atualizar produto: ${error.message}`,
        error: error.message,
      };
    }
  }

  /**
   * Deletar produto
   * @param {number} id - ID do produto
   * @returns {Promise<Object>} Resultado da deleção
   */
  async deleteProduct(id) {
    try {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', id);

      if (error) throw error;

      return {
        success: true,
        message: 'Produto deletado com sucesso',
      };
    } catch (error) {
      console.error('Erro ao deletar produto:', error);
      return {
        success: false,
        message: `Erro ao deletar produto: ${error.message}`,
        error: error.message,
      };
    }
  }

  /**
   * Obter produto por ID
   * @param {number} id - ID do produto
   * @returns {Promise<Object>} Dados do produto
   */
  async getProductById(id) {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*, product_images(*)')
        .eq('id', id)
        .single();

      if (error) throw error;

      return {
        success: true,
        product: data,
      };
    } catch (error) {
      console.error('Erro ao obter produto:', error);
      return {
        success: false,
        message: `Erro ao obter produto: ${error.message}`,
        error: error.message,
      };
    }
  }

  /**
   * Listar produtos com filtros
   * @param {Object} filters - Filtros (categoria, preço, etc)
   * @param {number} page - Página
   * @param {number} limit - Itens por página
   * @returns {Promise<Object>} Lista de produtos
   */
  async listProducts(filters = {}, page = 1, limit = 20) {
    try {
      let query = supabase
        .from('products')
        .select('*, product_images(*)', { count: 'exact' });

      // Aplicar filtros
      if (filters.category_id) {
        query = query.eq('category_id', filters.category_id);
      }

      if (filters.is_active !== undefined) {
        query = query.eq('is_active', filters.is_active);
      }

      if (filters.is_featured) {
        query = query.eq('is_featured', true);
      }

      if (filters.minPrice) {
        query = query.gte('price', filters.minPrice);
      }

      if (filters.maxPrice) {
        query = query.lte('price', filters.maxPrice);
      }

      if (filters.search) {
        query = query.or(
          `name.ilike.%${filters.search}%,description.ilike.%${filters.search}%`
        );
      }

      // Paginação
      const start = (page - 1) * limit;
      query = query.range(start, start + limit - 1);

      // Ordenação
      query = query.order(filters.orderBy || 'created_at', {
        ascending: filters.ascending !== true,
      });

      const { data, error, count } = await query;

      if (error) throw error;

      return {
        success: true,
        products: data,
        pagination: {
          page,
          limit,
          total: count,
          pages: Math.ceil(count / limit),
        },
      };
    } catch (error) {
      console.error('Erro ao listar produtos:', error);
      return {
        success: false,
        message: `Erro ao listar produtos: ${error.message}`,
        error: error.message,
      };
    }
  }

  /**
   * Atualizar estoque
   * @param {number} id - ID do produto
   * @param {number} quantity - Quantidade a adicionar/remover
   * @param {string} reason - Motivo da alteração
   * @returns {Promise<Object>} Resultado da atualização
   */
  async updateStock(id, quantity, reason = 'adjustment') {
    try {
      // Obter produto atual
      const { data: product, error: getError } = await supabase
        .from('products')
        .select('stock_quantity')
        .eq('id', id)
        .single();

      if (getError) throw getError;

      const newStock = product.stock_quantity + quantity;

      // Atualizar estoque
      const { data, error } = await supabase
        .from('products')
        .update({ stock_quantity: newStock })
        .eq('id', id)
        .select();

      if (error) throw error;

      // Registrar no log
      await supabase.from('inventory_logs').insert([
        {
          product_id: id,
          quantity_change: quantity,
          reason,
          reference_type: 'manual',
        },
      ]);

      return {
        success: true,
        message: 'Estoque atualizado com sucesso',
        product: data[0],
      };
    } catch (error) {
      console.error('Erro ao atualizar estoque:', error);
      return {
        success: false,
        message: `Erro ao atualizar estoque: ${error.message}`,
        error: error.message,
      };
    }
  }

  /**
   * Adicionar imagem ao produto
   * @param {number} productId - ID do produto
   * @param {string} imageUrl - URL da imagem
   * @param {string} altText - Texto alternativo
   * @param {boolean} isPrimary - É imagem principal
   * @returns {Promise<Object>} Imagem adicionada
   */
  async addProductImage(productId, imageUrl, altText = '', isPrimary = false) {
    try {
      const { data, error } = await supabase
        .from('product_images')
        .insert([
          {
            product_id: productId,
            image_url: imageUrl,
            alt_text: altText,
            is_primary: isPrimary,
          },
        ])
        .select();

      if (error) throw error;

      return {
        success: true,
        message: 'Imagem adicionada com sucesso',
        image: data[0],
      };
    } catch (error) {
      console.error('Erro ao adicionar imagem:', error);
      return {
        success: false,
        message: `Erro ao adicionar imagem: ${error.message}`,
        error: error.message,
      };
    }
  }

  /**
   * Gerar slug a partir do nome
   * @param {string} name - Nome do produto
   * @returns {string} Slug gerado
   */
  generateSlug(name) {
    return name
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }

  /**
   * Obter produtos em falta
   * @returns {Promise<Object>} Produtos com estoque baixo
   */
  async getLowStockProducts() {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .lt('stock_quantity', 'low_stock_threshold')
        .eq('is_active', true)
        .order('stock_quantity', { ascending: true });

      if (error) throw error;

      return {
        success: true,
        products: data,
        total: data.length,
      };
    } catch (error) {
      console.error('Erro ao obter produtos em falta:', error);
      return {
        success: false,
        message: `Erro: ${error.message}`,
        error: error.message,
      };
    }
  }

  /**
   * Obter produtos em destaque
   * @param {number} limit - Limite de produtos
   * @returns {Promise<Object>} Produtos em destaque
   */
  async getFeaturedProducts(limit = 10) {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*, product_images(*)')
        .eq('is_featured', true)
        .eq('is_active', true)
        .limit(limit)
        .order('created_at', { ascending: false });

      if (error) throw error;

      return {
        success: true,
        products: data,
      };
    } catch (error) {
      console.error('Erro ao obter produtos em destaque:', error);
      return {
        success: false,
        message: `Erro: ${error.message}`,
        error: error.message,
      };
    }
  }
}

export default new ProductService();
