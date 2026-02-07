/**
 * Serviço de Backup do Banco de Dados
 * Gerencia backups automáticos e manuais do banco de dados
 */

import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';
import { supabase } from '../config/supabase.js';

const execAsync = promisify(exec);

class BackupService {
  constructor() {
    this.backupDir = path.join(process.cwd(), 'backups');
    this.ensureBackupDir();
  }

  /**
   * Garante que o diretório de backups existe
   */
  ensureBackupDir() {
    if (!fs.existsSync(this.backupDir)) {
      fs.mkdirSync(this.backupDir, { recursive: true });
    }
  }

  /**
   * Criar backup do banco de dados
   * @param {string} type - Tipo de backup: 'manual' ou 'automatic'
   * @returns {Promise<Object>} Informações do backup criado
   */
  async createBackup(type = 'manual') {
    try {
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const filename = `backup_${type}_${timestamp}.sql`;
      const filepath = path.join(this.backupDir, filename);

      // Usar mysqldump para criar backup
      const command = `mysqldump -u ${process.env.DB_USER} -p${process.env.DB_PASSWORD} ${process.env.DB_NAME} > ${filepath}`;
      
      await execAsync(command);

      // Obter informações do arquivo
      const stats = fs.statSync(filepath);
      const backupInfo = {
        id: filename,
        filename,
        filepath,
        type,
        size: stats.size,
        sizeFormatted: this.formatFileSize(stats.size),
        createdAt: new Date(),
        timestamp,
      };

      // Registrar no banco de dados
      await this.registerBackup(backupInfo);

      return {
        success: true,
        message: `Backup criado com sucesso: ${filename}`,
        backup: backupInfo,
      };
    } catch (error) {
      console.error('Erro ao criar backup:', error);
      return {
        success: false,
        message: `Erro ao criar backup: ${error.message}`,
        error: error.message,
      };
    }
  }

  /**
   * Restaurar backup do banco de dados
   * @param {string} filename - Nome do arquivo de backup
   * @returns {Promise<Object>} Resultado da restauração
   */
  async restoreBackup(filename) {
    try {
      const filepath = path.join(this.backupDir, filename);

      if (!fs.existsSync(filepath)) {
        return {
          success: false,
          message: `Arquivo de backup não encontrado: ${filename}`,
        };
      }

      // Restaurar backup
      const command = `mysql -u ${process.env.DB_USER} -p${process.env.DB_PASSWORD} ${process.env.DB_NAME} < ${filepath}`;
      
      await execAsync(command);

      return {
        success: true,
        message: `Backup restaurado com sucesso: ${filename}`,
      };
    } catch (error) {
      console.error('Erro ao restaurar backup:', error);
      return {
        success: false,
        message: `Erro ao restaurar backup: ${error.message}`,
        error: error.message,
      };
    }
  }

  /**
   * Listar todos os backups
   * @returns {Promise<Array>} Lista de backups
   */
  async listBackups() {
    try {
      const files = fs.readdirSync(this.backupDir);
      const backups = files
        .filter(file => file.endsWith('.sql'))
        .map(file => {
          const filepath = path.join(this.backupDir, file);
          const stats = fs.statSync(filepath);
          return {
            id: file,
            filename: file,
            size: stats.size,
            sizeFormatted: this.formatFileSize(stats.size),
            createdAt: stats.birthtime,
            modifiedAt: stats.mtime,
          };
        })
        .sort((a, b) => b.createdAt - a.createdAt);

      return {
        success: true,
        backups,
        total: backups.length,
      };
    } catch (error) {
      console.error('Erro ao listar backups:', error);
      return {
        success: false,
        message: `Erro ao listar backups: ${error.message}`,
        error: error.message,
      };
    }
  }

  /**
   * Deletar backup
   * @param {string} filename - Nome do arquivo de backup
   * @returns {Promise<Object>} Resultado da deleção
   */
  async deleteBackup(filename) {
    try {
      const filepath = path.join(this.backupDir, filename);

      if (!fs.existsSync(filepath)) {
        return {
          success: false,
          message: `Arquivo de backup não encontrado: ${filename}`,
        };
      }

      fs.unlinkSync(filepath);

      return {
        success: true,
        message: `Backup deletado com sucesso: ${filename}`,
      };
    } catch (error) {
      console.error('Erro ao deletar backup:', error);
      return {
        success: false,
        message: `Erro ao deletar backup: ${error.message}`,
        error: error.message,
      };
    }
  }

  /**
   * Fazer backup automático diário
   * @returns {Promise<Object>} Resultado do backup
   */
  async dailyBackup() {
    console.log('[Backup] Iniciando backup automático diário...');
    return this.createBackup('automatic');
  }

  /**
   * Registrar backup no banco de dados
   * @param {Object} backupInfo - Informações do backup
   */
  async registerBackup(backupInfo) {
    try {
      const { data, error } = await supabase
        .from('backups')
        .insert([
          {
            filename: backupInfo.filename,
            size: backupInfo.size,
            type: backupInfo.type,
            created_at: backupInfo.createdAt,
          },
        ]);

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Erro ao registrar backup no banco:', error);
    }
  }

  /**
   * Formatar tamanho de arquivo
   * @param {number} bytes - Tamanho em bytes
   * @returns {string} Tamanho formatado
   */
  formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  }

  /**
   * Obter informações de backup
   * @param {string} filename - Nome do arquivo
   * @returns {Promise<Object>} Informações do backup
   */
  async getBackupInfo(filename) {
    try {
      const filepath = path.join(this.backupDir, filename);

      if (!fs.existsSync(filepath)) {
        return {
          success: false,
          message: `Arquivo não encontrado: ${filename}`,
        };
      }

      const stats = fs.statSync(filepath);
      return {
        success: true,
        info: {
          filename,
          size: stats.size,
          sizeFormatted: this.formatFileSize(stats.size),
          createdAt: stats.birthtime,
          modifiedAt: stats.mtime,
        },
      };
    } catch (error) {
      console.error('Erro ao obter informações do backup:', error);
      return {
        success: false,
        message: `Erro: ${error.message}`,
        error: error.message,
      };
    }
  }

  /**
   * Fazer backup para cloud (Supabase)
   * @param {string} filename - Nome do arquivo de backup
   * @returns {Promise<Object>} Resultado do upload
   */
  async uploadBackupToCloud(filename) {
    try {
      const filepath = path.join(this.backupDir, filename);

      if (!fs.existsSync(filepath)) {
        return {
          success: false,
          message: `Arquivo não encontrado: ${filename}`,
        };
      }

      const fileContent = fs.readFileSync(filepath);
      const { data, error } = await supabase.storage
        .from('backups')
        .upload(`backups/${filename}`, fileContent, {
          cacheControl: '3600',
          upsert: false,
        });

      if (error) throw error;

      return {
        success: true,
        message: `Backup enviado para cloud: ${filename}`,
        data,
      };
    } catch (error) {
      console.error('Erro ao fazer upload do backup:', error);
      return {
        success: false,
        message: `Erro ao fazer upload: ${error.message}`,
        error: error.message,
      };
    }
  }
}

export default new BackupService();
