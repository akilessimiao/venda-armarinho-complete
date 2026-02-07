import React, { useState, useEffect } from 'react';
import { Download, Upload, Trash2, Plus, Loader, HardDrive, AlertCircle } from 'lucide-react';

interface Backup {
  id: string;
  filename: string;
  size: number;
  sizeFormatted: string;
  createdAt: string;
  modifiedAt: string;
  type: 'manual' | 'automatic';
}

interface BackupManagerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BackupManager({ isOpen, onClose }: BackupManagerProps) {
  const [backups, setBackups] = useState<Backup[]>([]);
  const [loading, setLoading] = useState(false);
  const [creating, setCreating] = useState(false);
  const [restoring, setRestoring] = useState<string | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      loadBackups();
    }
  }, [isOpen]);

  const loadBackups = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/admin/backup');
      const data = await response.json();
      if (data.success) {
        setBackups(data.backups);
      }
    } catch (error) {
      console.error('Erro ao carregar backups:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateBackup = async () => {
    setCreating(true);
    try {
      const response = await fetch('/api/admin/backup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'manual' }),
      });
      const data = await response.json();
      if (data.success) {
        loadBackups();
        alert('Backup criado com sucesso!');
      } else {
        alert('Erro ao criar backup: ' + data.message);
      }
    } catch (error) {
      console.error('Erro ao criar backup:', error);
      alert('Erro ao criar backup');
    } finally {
      setCreating(false);
    }
  };

  const handleRestoreBackup = async (filename: string) => {
    if (!window.confirm('Tem certeza que deseja restaurar este backup? Todos os dados atuais serão sobrescrito.')) {
      return;
    }

    setRestoring(filename);
    try {
      const response = await fetch(`/api/admin/backup/${filename}/restore`, {
        method: 'POST',
      });
      const data = await response.json();
      if (data.success) {
        alert('Backup restaurado com sucesso!');
        loadBackups();
      } else {
        alert('Erro ao restaurar backup: ' + data.message);
      }
    } catch (error) {
      console.error('Erro ao restaurar backup:', error);
      alert('Erro ao restaurar backup');
    } finally {
      setRestoring(null);
    }
  };

  const handleDeleteBackup = async (filename: string) => {
    if (!window.confirm('Tem certeza que deseja deletar este backup?')) {
      return;
    }

    setDeleting(filename);
    try {
      const response = await fetch(`/api/admin/backup/${filename}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      if (data.success) {
        loadBackups();
        alert('Backup deletado com sucesso!');
      } else {
        alert('Erro ao deletar backup: ' + data.message);
      }
    } catch (error) {
      console.error('Erro ao deletar backup:', error);
      alert('Erro ao deletar backup');
    } finally {
      setDeleting(null);
    }
  };

  const handleUploadToCloud = async (filename: string) => {
    try {
      const response = await fetch(`/api/admin/backup/${filename}/upload-cloud`, {
        method: 'POST',
      });
      const data = await response.json();
      if (data.success) {
        alert('Backup enviado para cloud com sucesso!');
      } else {
        alert('Erro ao enviar backup: ' + data.message);
      }
    } catch (error) {
      console.error('Erro ao enviar backup:', error);
      alert('Erro ao enviar backup');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <HardDrive size={24} />
            Gerenciar Backups
          </h2>
          <button
            onClick={onClose}
            className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Alert */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3">
            <AlertCircle className="text-blue-600 flex-shrink-0" size={20} />
            <div>
              <h3 className="font-semibold text-blue-900">Dica de Segurança</h3>
              <p className="text-sm text-blue-700 mt-1">
                Faça backups regularmente e armazene cópias em local seguro. Recomendamos backups diários.
              </p>
            </div>
          </div>

          {/* Create Backup Button */}
          <button
            onClick={handleCreateBackup}
            disabled={creating}
            className="w-full px-4 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium rounded-lg hover:shadow-lg transition disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {creating && <Loader size={18} className="animate-spin" />}
            <Plus size={18} />
            {creating ? 'Criando Backup...' : 'Criar Novo Backup'}
          </button>

          {/* Backups List */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Backups Disponíveis ({backups.length})
            </h3>

            {loading ? (
              <div className="flex justify-center py-8">
                <Loader className="animate-spin text-amber-500" size={32} />
              </div>
            ) : backups.length === 0 ? (
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <HardDrive className="mx-auto text-gray-400 mb-3" size={32} />
                <p className="text-gray-600">Nenhum backup disponível</p>
                <p className="text-sm text-gray-500 mt-1">Clique no botão acima para criar um novo backup</p>
              </div>
            ) : (
              <div className="space-y-3">
                {backups.map(backup => (
                  <div
                    key={backup.id}
                    className="bg-gray-50 rounded-lg p-4 flex items-center justify-between hover:bg-gray-100 transition"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <HardDrive size={18} className="text-amber-500" />
                        <span className="font-medium text-gray-900">{backup.filename}</span>
                        <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">
                          {backup.type === 'automatic' ? 'Automático' : 'Manual'}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        Tamanho: {backup.sizeFormatted} • Criado em: {new Date(backup.createdAt).toLocaleString('pt-BR')}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 ml-4">
                      <button
                        onClick={() => handleRestoreBackup(backup.filename)}
                        disabled={restoring === backup.filename}
                        className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition disabled:opacity-50"
                        title="Restaurar backup"
                      >
                        {restoring === backup.filename ? (
                          <Loader size={18} className="animate-spin" />
                        ) : (
                          <Upload size={18} />
                        )}
                      </button>

                      <button
                        onClick={() => handleUploadToCloud(backup.filename)}
                        className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition"
                        title="Enviar para cloud"
                      >
                        <Download size={18} />
                      </button>

                      <button
                        onClick={() => handleDeleteBackup(backup.filename)}
                        disabled={deleting === backup.filename}
                        className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition disabled:opacity-50"
                        title="Deletar backup"
                      >
                        {deleting === backup.filename ? (
                          <Loader size={18} className="animate-spin" />
                        ) : (
                          <Trash2 size={18} />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t pt-4 flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
