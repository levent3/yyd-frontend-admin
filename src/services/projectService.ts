// src/services/projectService.ts
import api from './api';
import { PaginatedResponse, PaginationParams, DEFAULT_PAGE, DEFAULT_LIMIT } from '../types/pagination';

export interface Project {
  id: number;
  // YENİ: Çok dilli yapı - Backend'den gelen response
  translations?: ProjectTranslation[];

  // Mapped fields (backend'de formatlanmış hali)
  title: string;
  slug: string;
  description?: string;
  content?: string;

  // Görsel alanları
  coverImage?: string | null;
  imageUrl?: string | null;

  // Diğer alanlar
  category?: string | null;
  location?: string | null;
  country?: string | null;
  status?: string;
  priority?: string;
  startDate?: string | null;
  endDate?: string | null;
  budget?: number | null;
  targetAmount?: number | null;
  collectedAmount?: number;
  beneficiaryCount?: number | null;
  isActive: boolean;
  isFeatured?: boolean;
  displayOrder?: number;
  createdAt: string;
  updatedAt: string;
}

export interface ProjectTranslation {
  language: string;
  title: string;
  slug?: string;
  description?: string;
  content?: string;
}

export interface CreateProjectData {
  // YENİ: Çok dilli yapı
  translations: ProjectTranslation[];

  // Eski alanlar (geriye dönük uyumluluk için opsiyonel)
  title?: string;
  description?: string;
  content?: string;

  // Görsel alanları
  coverImage?: string;
  imageUrl?: string;

  // Diğer alanlar
  category?: string;
  location?: string;
  country?: string;
  status?: string;
  priority?: string;
  startDate?: string;
  endDate?: string;
  budget?: number;
  targetAmount?: number;
  collectedAmount?: number;
  beneficiaryCount?: number;
  isActive?: boolean;
  isFeatured?: boolean;
  displayOrder?: number;
}

export interface UpdateProjectData extends Partial<CreateProjectData> {}

export interface ProjectFilters extends PaginationParams {
  status?: string;
  category?: string;
}

class ProjectService {
  // ========== PUBLIC ENDPOINTS (Auth GEREKMİYOR) ==========

  // Public: Tüm aktif projeleri getir - Auth gerektirmez, cache'lenmiş
  async getPublicProjects(filters?: ProjectFilters): Promise<PaginatedResponse<Project>> {
    const params = new URLSearchParams();
    params.append('page', (filters?.page || DEFAULT_PAGE).toString());
    params.append('limit', (filters?.limit || DEFAULT_LIMIT).toString());

    if (filters?.status) params.append('status', filters.status);
    if (filters?.category) params.append('category', filters.category);

    const response = await api.get<any>(`/projects/public?${params.toString()}`);
    // Backend'den gelen response format: { success, message, data, pagination }
    return {
      data: response.data.data,
      pagination: response.data.pagination
    };
  }

  // Public: Slug ile proje getir - Auth gerektirmez, cache'lenmiş
  async getPublicProjectBySlug(slug: string): Promise<Project> {
    const response = await api.get<any>(`/projects/public/${slug}`);
    // Backend'den gelen response format: { success, message, data }
    return response.data.data;
  }

  // ========== PROTECTED ENDPOINTS (Auth GEREKLİ - Admin) ==========

  // Tüm projeleri getir - with pagination (ADMIN)
  async getAllProjects(filters?: ProjectFilters): Promise<PaginatedResponse<Project>> {
    const params = new URLSearchParams();
    params.append('page', (filters?.page || DEFAULT_PAGE).toString());
    params.append('limit', (filters?.limit || DEFAULT_LIMIT).toString());

    if (filters?.status) params.append('status', filters.status);
    if (filters?.category) params.append('category', filters.category);

    const response = await api.get<PaginatedResponse<Project>>(`/projects?${params.toString()}`);
    return response.data;
  }

  // Tek bir proje getir
  async getProjectById(id: number): Promise<Project> {
    const response = await api.get<Project>(`/projects/${id}`);
    return response.data;
  }

  // Yeni proje oluştur
  async createProject(data: CreateProjectData): Promise<Project> {
    const response = await api.post<Project>('/projects', data);
    return response.data;
  }

  // Proje güncelle
  async updateProject(id: number, data: UpdateProjectData): Promise<Project> {
    const response = await api.put<Project>(`/projects/${id}`, data);
    return response.data;
  }

  // Proje sil
  async deleteProject(id: number): Promise<void> {
    await api.delete(`/projects/${id}`);
  }

  // Görsel yükle
  async uploadImage(file: File): Promise<{ imageUrl: string }> {
    const formData = new FormData();
    formData.append('image', file);

    const response = await api.post<{ imageUrl: string; message: string }>(
      '/projects/upload-image',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    return { imageUrl: response.data.imageUrl };
  }
}

export default new ProjectService();
