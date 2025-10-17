import api from './api';
import { PaginatedResponse, PaginationParams, DEFAULT_PAGE, DEFAULT_LIMIT } from '../types/pagination';

export interface News {
  id: number;
  title: string;
  slug: string;
  summary?: string;
  content: string;
  imageUrl?: string;
  status: 'draft' | 'published' | 'archived';
  authorId: number;
  author?: {
    id: number;
    fullName: string;
    email: string;
  };
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface NewsFilters extends PaginationParams {
  status?: string;
  authorId?: number;
}

export interface CreateNewsData {
  title: string;
  slug: string;
  summary?: string;
  content: string;
  imageUrl?: string;
  status: 'draft' | 'published' | 'archived';
}

export interface UpdateNewsData {
  title?: string;
  slug?: string;
  summary?: string;
  content?: string;
  imageUrl?: string;
  status?: 'draft' | 'published' | 'archived';
}

const newsService = {
  // Get all news (admin) - with pagination
  getAllNews: async (filters?: NewsFilters): Promise<PaginatedResponse<News>> => {
    const params = new URLSearchParams();
    params.append('page', (filters?.page || DEFAULT_PAGE).toString());
    params.append('limit', (filters?.limit || DEFAULT_LIMIT).toString());

    if (filters?.status) params.append('status', filters.status);
    if (filters?.authorId) params.append('authorId', filters.authorId.toString());

    const response = await api.get<PaginatedResponse<News>>(`/news?${params.toString()}`);
    return response.data;
  },

  // Get published news (public) - with pagination
  getPublishedNews: async (pagination?: PaginationParams): Promise<PaginatedResponse<News>> => {
    const params = new URLSearchParams();
    params.append('page', (pagination?.page || DEFAULT_PAGE).toString());
    params.append('limit', (pagination?.limit || DEFAULT_LIMIT).toString());

    const response = await api.get<PaginatedResponse<News>>(`/news/published?${params.toString()}`);
    return response.data;
  },

  // Get news by ID
  getNewsById: async (id: number): Promise<News> => {
    const response = await api.get<News>(`/news/${id}`);
    return response.data;
  },

  // Get news by slug (public)
  getNewsBySlug: async (slug: string): Promise<News> => {
    const response = await api.get<News>(`/news/slug/${slug}`);
    return response.data;
  },

  // Create news
  createNews: async (data: CreateNewsData): Promise<News> => {
    const response = await api.post<News>('/news', data);
    return response.data;
  },

  // Update news
  updateNews: async (id: number, data: UpdateNewsData): Promise<News> => {
    const response = await api.put<News>(`/news/${id}`, data);
    return response.data;
  },

  // Delete news
  deleteNews: async (id: number): Promise<void> => {
    await api.delete(`/news/${id}`);
  },
};

export default newsService;
