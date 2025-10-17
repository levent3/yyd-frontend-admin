// src/services/moduleService.ts
import api from './api';

export interface Module {
  id: number;
  name: string;
  moduleKey: string;
  path?: string | null;
  icon?: string | null;
  displayOrder?: number;
  parentId?: number | null;
  parent?: Module | null;
  children?: Module[];
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateModuleData {
  name: string;
  moduleKey: string;
  path?: string | null;
  icon?: string | null;
  displayOrder?: number;
  parentId?: number | null;
}

export interface UpdateModuleData {
  name?: string;
  moduleKey?: string;
  path?: string | null;
  icon?: string | null;
  displayOrder?: number;
  parentId?: number | null;
}

class ModuleService {
  // Tüm modülleri getir
  async getAllModules(): Promise<Module[]> {
    const response = await api.get<Module[]>('/modules');
    return response.data;
  }

  // Tek bir modül getir
  async getModuleById(id: number): Promise<Module> {
    const response = await api.get<Module>(`/modules/${id}`);
    return response.data;
  }

  // Yeni modül oluştur
  async createModule(data: CreateModuleData): Promise<any> {
    const response = await api.post('/modules', data);
    return response.data;
  }

  // Modül güncelle
  async updateModule(id: number, data: UpdateModuleData): Promise<any> {
    const response = await api.put(`/modules/${id}`, data);
    return response.data;
  }

  // Modül sil
  async deleteModule(id: number): Promise<any> {
    const response = await api.delete(`/modules/${id}`);
    return response.data;
  }
}

export default new ModuleService();
