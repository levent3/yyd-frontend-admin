// src/services/systemSettingsService.ts
import api from './api';

export interface SystemSetting {
  id: number;
  settingKey: string;
  settingValue: any; // JSON değer - her türlü veri olabilir
  description?: string;
  category?: string;
  isActive: boolean;
  isPublic: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateSystemSettingData {
  settingKey: string;
  settingValue: any;
  description?: string;
  category?: string;
  isActive?: boolean;
  isPublic?: boolean;
}

export interface UpdateSystemSettingData extends Partial<Omit<CreateSystemSettingData, 'settingKey'>> {}

export interface SystemSettingsFilters {
  category?: string;
  isActive?: boolean;
  isPublic?: boolean;
}

const systemSettingsService = {
  // Get public system settings (Public)
  getPublicSettings: async (): Promise<SystemSetting[]> => {
    const response = await api.get<SystemSetting[]>('/system-settings/public');
    return response.data;
  },

  // Get all system settings (Admin)
  getAllSettings: async (filters?: SystemSettingsFilters): Promise<SystemSetting[]> => {
    const params = new URLSearchParams();
    if (filters?.category) params.append('category', filters.category);
    if (filters?.isActive !== undefined) params.append('isActive', filters.isActive.toString());
    if (filters?.isPublic !== undefined) params.append('isPublic', filters.isPublic.toString());

    const response = await api.get<SystemSetting[]>(`/system-settings?${params.toString()}`);
    return response.data;
  },

  // Initialize default settings (Admin)
  initializeDefaults: async (): Promise<any> => {
    const response = await api.post('/system-settings/initialize');
    return response.data;
  },

  // Get settings by category (Admin)
  getSettingsByCategory: async (category: string): Promise<SystemSetting[]> => {
    const response = await api.get<SystemSetting[]>(`/system-settings/category/${category}`);
    return response.data;
  },

  // Get setting by key (Admin)
  getSettingByKey: async (key: string): Promise<SystemSetting> => {
    const response = await api.get<SystemSetting>(`/system-settings/${key}`);
    return response.data;
  },

  // Create system setting (Admin)
  createSetting: async (data: CreateSystemSettingData): Promise<SystemSetting> => {
    const response = await api.post<SystemSetting>('/system-settings', data);
    return response.data;
  },

  // Update system setting (Admin)
  updateSetting: async (key: string, data: UpdateSystemSettingData): Promise<SystemSetting> => {
    const response = await api.put<SystemSetting>(`/system-settings/${key}`, data);
    return response.data;
  },

  // Upsert system setting (Admin) - Create or update
  upsertSetting: async (key: string, data: UpdateSystemSettingData): Promise<SystemSetting> => {
    const response = await api.post<SystemSetting>(`/system-settings/${key}/upsert`, data);
    return response.data;
  },

  // Delete system setting (Admin)
  deleteSetting: async (key: string): Promise<void> => {
    await api.delete(`/system-settings/${key}`);
  },
};

export default systemSettingsService;
