import api from './api';
import { PaginatedResponse, PaginationParams, DEFAULT_PAGE, DEFAULT_LIMIT } from '../types/pagination';

export interface GalleryItem {
  id: number;
  title?: string;
  mediaType: 'image' | 'video';
  fileUrl: string;
  projectId?: number;
  project?: {
    id: number;
    title: string;
  };
  uploaderId?: number;
  uploader?: {
    id: number;
    fullName: string;
    email: string;
  };
  createdAt: Date;
}

export interface GalleryFilters extends PaginationParams {
  mediaType?: 'image' | 'video';
  projectId?: number;
}

export interface CreateGalleryItemData {
  title?: string;
  mediaType: 'image' | 'video';
  fileUrl: string;
  projectId?: number;
}

export interface UpdateGalleryItemData {
  title?: string;
  mediaType?: 'image' | 'video';
  fileUrl?: string;
  projectId?: number;
}

const galleryService = {
  // Get all gallery items (admin) - with pagination
  getAllGalleryItems: async (filters?: GalleryFilters): Promise<PaginatedResponse<GalleryItem>> => {
    const params = new URLSearchParams();
    params.append('page', (filters?.page || DEFAULT_PAGE).toString());
    params.append('limit', (filters?.limit || DEFAULT_LIMIT).toString());

    if (filters?.mediaType) params.append('mediaType', filters.mediaType);
    if (filters?.projectId) params.append('projectId', filters.projectId.toString());

    const response = await api.get<PaginatedResponse<GalleryItem>>(`/gallery?${params.toString()}`);
    return response.data;
  },

  // Get public gallery items - with pagination
  getPublicGallery: async (filters?: GalleryFilters): Promise<PaginatedResponse<GalleryItem>> => {
    const params = new URLSearchParams();
    params.append('page', (filters?.page || DEFAULT_PAGE).toString());
    params.append('limit', (filters?.limit || DEFAULT_LIMIT).toString());

    if (filters?.mediaType) params.append('mediaType', filters.mediaType);
    if (filters?.projectId) params.append('projectId', filters.projectId.toString());

    const response = await api.get<PaginatedResponse<GalleryItem>>(`/gallery/public?${params.toString()}`);
    return response.data;
  },

  // Get gallery item by ID
  getGalleryItemById: async (id: number): Promise<GalleryItem> => {
    const response = await api.get<GalleryItem>(`/gallery/${id}`);
    return response.data;
  },

  // Create gallery item
  createGalleryItem: async (data: CreateGalleryItemData): Promise<GalleryItem> => {
    const response = await api.post<GalleryItem>('/gallery', data);
    return response.data;
  },

  // Update gallery item
  updateGalleryItem: async (id: number, data: UpdateGalleryItemData): Promise<GalleryItem> => {
    const response = await api.put<GalleryItem>(`/gallery/${id}`, data);
    return response.data;
  },

  // Delete gallery item
  deleteGalleryItem: async (id: number): Promise<void> => {
    await api.delete(`/gallery/${id}`);
  },
};

export default galleryService;
