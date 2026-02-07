/**
 * Rotas Administrativas
 * Gerencia produtos, backup e configurações
 */

import express from 'express';
import productService from '../services/productService.js';
import backupService from '../services/backupService.js';

const router = express.Router();

// ============================================================================
// PRODUTOS
// ============================================================================

/**
 * POST /api/admin/products
 * Criar novo produto
 */
router.post('/products', async (req, res) => {
  try {
    const result = await productService.createProduct(req.body);
    res.status(result.success ? 201 : 400).json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao criar produto',
      error: error.message,
    });
  }
});

/**
 * GET /api/admin/products
 * Listar produtos com filtros
 */
router.get('/products', async (req, res) => {
  try {
    const { category_id, is_active, is_featured, minPrice, maxPrice, search, page = 1, limit = 20, orderBy, ascending } = req.query;

    const filters = {
      category_id: category_id ? parseInt(category_id) : undefined,
      is_active: is_active ? is_active === 'true' : undefined,
      is_featured: is_featured === 'true',
      minPrice: minPrice ? parseFloat(minPrice) : undefined,
      maxPrice: maxPrice ? parseFloat(maxPrice) : undefined,
      search,
      orderBy,
      ascending: ascending === 'true',
    };

    const result = await productService.listProducts(filters, parseInt(page), parseInt(limit));
    res.json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao listar produtos',
      error: error.message,
    });
  }
});

/**
 * GET /api/admin/products/:id
 * Obter produto por ID
 */
router.get('/products/:id', async (req, res) => {
  try {
    const result = await productService.getProductById(parseInt(req.params.id));
    res.status(result.success ? 200 : 404).json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao obter produto',
      error: error.message,
    });
  }
});

/**
 * PUT /api/admin/products/:id
 * Atualizar produto
 */
router.put('/products/:id', async (req, res) => {
  try {
    const result = await productService.updateProduct(parseInt(req.params.id), req.body);
    res.status(result.success ? 200 : 400).json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao atualizar produto',
      error: error.message,
    });
  }
});

/**
 * DELETE /api/admin/products/:id
 * Deletar produto
 */
router.delete('/products/:id', async (req, res) => {
  try {
    const result = await productService.deleteProduct(parseInt(req.params.id));
    res.status(result.success ? 200 : 400).json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao deletar produto',
      error: error.message,
    });
  }
});

/**
 * PATCH /api/admin/products/:id/stock
 * Atualizar estoque
 */
router.patch('/products/:id/stock', async (req, res) => {
  try {
    const { quantity, reason } = req.body;
    const result = await productService.updateStock(parseInt(req.params.id), quantity, reason);
    res.status(result.success ? 200 : 400).json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao atualizar estoque',
      error: error.message,
    });
  }
});

/**
 * POST /api/admin/products/:id/images
 * Adicionar imagem ao produto
 */
router.post('/products/:id/images', async (req, res) => {
  try {
    const { imageUrl, altText, isPrimary } = req.body;
    const result = await productService.addProductImage(
      parseInt(req.params.id),
      imageUrl,
      altText,
      isPrimary
    );
    res.status(result.success ? 201 : 400).json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao adicionar imagem',
      error: error.message,
    });
  }
});

/**
 * GET /api/admin/products/low-stock
 * Obter produtos com estoque baixo
 */
router.get('/products/low-stock', async (req, res) => {
  try {
    const result = await productService.getLowStockProducts();
    res.json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao obter produtos em falta',
      error: error.message,
    });
  }
});

/**
 * GET /api/admin/products/featured
 * Obter produtos em destaque
 */
router.get('/products/featured', async (req, res) => {
  try {
    const { limit = 10 } = req.query;
    const result = await productService.getFeaturedProducts(parseInt(limit));
    res.json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao obter produtos em destaque',
      error: error.message,
    });
  }
});

// ============================================================================
// BACKUP
// ============================================================================

/**
 * POST /api/admin/backup
 * Criar novo backup
 */
router.post('/backup', async (req, res) => {
  try {
    const { type = 'manual' } = req.body;
    const result = await backupService.createBackup(type);
    res.status(result.success ? 201 : 400).json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao criar backup',
      error: error.message,
    });
  }
});

/**
 * GET /api/admin/backup
 * Listar backups
 */
router.get('/backup', async (req, res) => {
  try {
    const result = await backupService.listBackups();
    res.json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao listar backups',
      error: error.message,
    });
  }
});

/**
 * GET /api/admin/backup/:filename
 * Obter informações do backup
 */
router.get('/backup/:filename', async (req, res) => {
  try {
    const result = await backupService.getBackupInfo(req.params.filename);
    res.status(result.success ? 200 : 404).json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao obter informações do backup',
      error: error.message,
    });
  }
});

/**
 * POST /api/admin/backup/:filename/restore
 * Restaurar backup
 */
router.post('/backup/:filename/restore', async (req, res) => {
  try {
    const result = await backupService.restoreBackup(req.params.filename);
    res.status(result.success ? 200 : 400).json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao restaurar backup',
      error: error.message,
    });
  }
});

/**
 * DELETE /api/admin/backup/:filename
 * Deletar backup
 */
router.delete('/backup/:filename', async (req, res) => {
  try {
    const result = await backupService.deleteBackup(req.params.filename);
    res.status(result.success ? 200 : 400).json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao deletar backup',
      error: error.message,
    });
  }
});

/**
 * POST /api/admin/backup/:filename/upload-cloud
 * Fazer upload do backup para cloud
 */
router.post('/backup/:filename/upload-cloud', async (req, res) => {
  try {
    const result = await backupService.uploadBackupToCloud(req.params.filename);
    res.status(result.success ? 200 : 400).json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao fazer upload do backup',
      error: error.message,
    });
  }
});

export default router;
