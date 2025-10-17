// src/services/roleService.ts
import api from './api';

export interface Role {
  id: number;
  name: string;
  _count?: {
    users: number;
    accessibleModules: number;
  };
}

export interface Module {
  id: number;
  name: string;
  moduleKey: string;
  path?: string;
  icon?: string;
  displayOrder?: number;
}

export interface RolePermission {
  roleId: number;
  moduleId: number;
  permissions: {
    read: boolean;
    create: boolean;
    update: boolean;
    delete: boolean;
  };
  module: Module;
}

class RoleService {
  // Tüm rolleri getir
  async getAllRoles(): Promise<Role[]> {
    const response = await api.get<Role[]>('/roles');
    return response.data;
  }

  // Tek bir rol getir
  async getRoleById(id: number): Promise<Role> {
    const response = await api.get<Role>(`/roles/${id}`);
    return response.data;
  }

  // Yeni rol oluştur
  async createRole(name: string): Promise<any> {
    const response = await api.post('/roles', { name });
    return response.data;
  }

  // Rol güncelle
  async updateRole(id: number, name: string): Promise<any> {
    const response = await api.put(`/roles/${id}`, { name });
    return response.data;
  }

  // Rol sil
  async deleteRole(id: number): Promise<any> {
    const response = await api.delete(`/roles/${id}`);
    return response.data;
  }

  // Rolün izinlerini getir
  async getRolePermissions(roleId: number): Promise<RolePermission[]> {
    const response = await api.get<RolePermission[]>(`/roles/${roleId}/permissions`);
    return response.data;
  }

  // Role izin ata
  async assignPermission(roleId: number, moduleId: number, permissions: any): Promise<any> {
    const response = await api.put(`/roles/${roleId}/permissions/${moduleId}`, permissions);
    return response.data;
  }

  // Tüm modülleri getir
  async getAllModules(): Promise<Module[]> {
    const response = await api.get<Module[]>('/modules');
    return response.data;
  }
}

export default new RoleService();
