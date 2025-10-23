// src/services/timelineService.ts
import api from './api';
import { PaginatedResponse, PaginationParams, DEFAULT_PAGE, DEFAULT_LIMIT } from '../types/pagination';

export interface Timeline {
  id: number;
  year: number;
  displayOrder: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;

  // Multi-language support
  translations?: TimelineTranslation[];

  // Mapped fields (formatted by backend)
  title?: string;
  description?: string;
  content?: string;
}

export interface TimelineTranslation {
  language: string;
  title: string;
  description?: string;
  content?: string;
}

export interface CreateTimelineData {
  year: number;
  displayOrder?: number;
  isActive?: boolean;
  translations: TimelineTranslation[];
}

export interface UpdateTimelineData extends Partial<CreateTimelineData> {}

export interface TimelineFilters extends PaginationParams {
  year?: number;
  isActive?: boolean;
}

class TimelineService {
  // ========== PUBLIC ENDPOINTS (No Auth Required) ==========

  // Public: Get all active timeline items - No auth required
  async getPublicTimeline(filters?: TimelineFilters): Promise<PaginatedResponse<Timeline>> {
    const params = new URLSearchParams();
    params.append('page', (filters?.page || DEFAULT_PAGE).toString());
    params.append('limit', (filters?.limit || DEFAULT_LIMIT).toString());

    if (filters?.year) params.append('year', filters.year.toString());
    if (filters?.isActive !== undefined) params.append('isActive', filters.isActive.toString());

    const response = await api.get<any>(`/timelines?${params.toString()}`);
    return {
      data: response.data.data,
      pagination: response.data.pagination
    };
  }

  // Public: Get timeline items by specific year
  async getPublicTimelineByYear(year: number): Promise<Timeline[]> {
    const response = await api.get<any>(`/timelines/year/${year}`);
    return response.data.data;
  }

  // ========== PROTECTED ENDPOINTS (Auth Required - Admin) ==========

  // Get all timeline items with pagination (ADMIN)
  async getAllTimelines(filters?: TimelineFilters): Promise<PaginatedResponse<Timeline>> {
    const params = new URLSearchParams();
    params.append('page', (filters?.page || DEFAULT_PAGE).toString());
    params.append('limit', (filters?.limit || DEFAULT_LIMIT).toString());

    if (filters?.year) params.append('year', filters.year.toString());
    if (filters?.isActive !== undefined) params.append('isActive', filters.isActive.toString());

    const response = await api.get<PaginatedResponse<Timeline>>(`/timelines?${params.toString()}`);
    return response.data;
  }

  // Get single timeline item
  async getTimelineById(id: number): Promise<Timeline> {
    const response = await api.get<Timeline>(`/timelines/${id}`);
    return response.data;
  }

  // Create new timeline item
  async createTimeline(data: CreateTimelineData): Promise<Timeline> {
    const response = await api.post<Timeline>('/timelines', data);
    return response.data;
  }

  // Update timeline item
  async updateTimeline(id: number, data: UpdateTimelineData): Promise<Timeline> {
    const response = await api.put<Timeline>(`/timelines/${id}`, data);
    return response.data;
  }

  // Delete timeline item
  async deleteTimeline(id: number): Promise<void> {
    await api.delete(`/timelines/${id}`);
  }
}

export default new TimelineService();
