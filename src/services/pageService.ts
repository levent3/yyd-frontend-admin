// src/services/pageService.ts
import api from './api';

export interface Page {
  id: number;
  title: string;
  slug: string;
  content?: string;
  excerpt?: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  pageType: 'about' | 'terms' | 'privacy' | 'faq' | 'contact' | 'team' | 'general';
  status: 'draft' | 'published';
  isPublic: boolean;
  isActive: boolean;
  displayOrder: number;
  featuredImage?: string;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
  author?: {
    id: number;
    fullName: string;
    email: string;
  };
}

export interface PageListResponse {
  pages: Page[];
  total: number;
  page: number;
  limit: number;
}

// ========== PUBLIC OPERATIONS (No auth required) ==========

/**
 * Get all published public pages
 */
export const getPublicPages = async (pageType?: string): Promise<Page[]> => {
  const params = pageType ? { pageType } : {};
  const response = await api.get('/pages/public', { params });
  return response.data;
};

/**
 * Get a published page by slug (Public)
 */
export const getPublicPageBySlug = async (slug: string): Promise<Page> => {
  const response = await api.get(`/pages/public/slug/${slug}`);
  return response.data;
};

/**
 * Get all pages by page type (Public)
 */
export const getPublicPagesByType = async (pageType: string): Promise<Page[]> => {
  const response = await api.get(`/pages/public/type/${pageType}`);
  return response.data;
};

// ========== ADMIN OPERATIONS (Auth required) ==========

/**
 * Get all pages with filters (Admin)
 */
export const getAllPages = async (filters?: {
  status?: 'draft' | 'published';
  pageType?: string;
  isActive?: boolean;
  isPublic?: boolean;
  search?: string;
  page?: number;
  limit?: number;
}): Promise<PageListResponse> => {
  const response = await api.get('/pages', { params: filters });
  return response.data;
};

/**
 * Get page by ID (Admin)
 */
export const getPageById = async (id: number): Promise<Page> => {
  const response = await api.get(`/pages/${id}`);
  return response.data;
};

/**
 * Get page by slug (Admin)
 */
export const getPageBySlug = async (slug: string): Promise<Page> => {
  const response = await api.get(`/pages/slug/${slug}`);
  return response.data;
};

/**
 * Create a new page (Admin)
 */
export const createPage = async (data: Partial<Page>): Promise<Page> => {
  const response = await api.post('/pages', data);
  return response.data;
};

/**
 * Update a page (Admin)
 */
export const updatePage = async (id: number, data: Partial<Page>): Promise<Page> => {
  const response = await api.put(`/pages/${id}`, data);
  return response.data;
};

/**
 * Delete a page (Admin)
 */
export const deletePage = async (id: number): Promise<void> => {
  await api.delete(`/pages/${id}`);
};

export default {
  // Public
  getPublicPages,
  getPublicPageBySlug,
  getPublicPagesByType,
  // Admin
  getAllPages,
  getPageById,
  getPageBySlug,
  createPage,
  updatePage,
  deletePage,
};
