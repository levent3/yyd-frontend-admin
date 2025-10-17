import api from './api';
import { PaginatedResponse, PaginationParams, DEFAULT_PAGE, DEFAULT_LIMIT } from '../types/pagination';

export interface Volunteer {
  id: number;
  fullName: string;
  email: string;
  phoneNumber?: string;
  message?: string;
  status: string; // "new", "contacted", "accepted", "rejected"
  submittedAt: Date;
}

export interface VolunteerFormData {
  fullName: string;
  email: string;
  phoneNumber?: string;
  message?: string;
}

export interface VolunteerUpdateData {
  status?: string;
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  message?: string;
}

export interface VolunteerFilters extends PaginationParams {
  status?: string;
}

const volunteerService = {
  // Get all volunteer applications (admin) - with pagination
  getAll: async (filters?: VolunteerFilters): Promise<PaginatedResponse<Volunteer>> => {
    const params = new URLSearchParams();
    params.append('page', (filters?.page || DEFAULT_PAGE).toString());
    params.append('limit', (filters?.limit || DEFAULT_LIMIT).toString());

    if (filters?.status) params.append('status', filters.status);

    const response = await api.get<PaginatedResponse<Volunteer>>(`/volunteers?${params.toString()}`);
    return response.data;
  },

  // Get pending applications count (admin)
  getPendingCount: async (): Promise<number> => {
    const response = await api.get<{ count: number }>('/volunteers/pending-count');
    return response.data.count;
  },

  // Get volunteer application by ID
  getById: async (id: number): Promise<Volunteer> => {
    const response = await api.get<Volunteer>(`/volunteers/${id}`);
    return response.data;
  },

  // Create volunteer application (public)
  create: async (data: VolunteerFormData): Promise<Volunteer> => {
    const response = await api.post<Volunteer>('/volunteers', data);
    return response.data;
  },

  // Update volunteer application (admin)
  update: async (id: number, data: VolunteerUpdateData): Promise<Volunteer> => {
    const response = await api.put<Volunteer>(`/volunteers/${id}`, data);
    return response.data;
  },

  // Delete volunteer application
  delete: async (id: number): Promise<void> => {
    await api.delete(`/volunteers/${id}`);
  },
};

export default volunteerService;
