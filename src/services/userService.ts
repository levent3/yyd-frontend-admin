// src/services/userService.ts
import api from './api';
import { PaginatedResponse, PaginationParams, DEFAULT_PAGE, DEFAULT_LIMIT } from '../types/pagination';

export interface User {
  id: number;
  username: string;
  email: string;
  fullName: string | null;
  roleId: number;
  createdAt: string;
  role: {
    id: number;
    name: string;
  };
}

export interface CreateUserData {
  username: string;
  email: string;
  password: string;
  fullName?: string;
  roleId: number;
}

export interface UpdateUserData {
  username?: string;
  email?: string;
  password?: string;
  fullName?: string;
  roleId?: number;
}

export interface UserFilters extends PaginationParams {
  roleId?: number;
  email?: string;
}

class UserService {
  // Tüm kullanıcıları getir - with pagination
  async getAllUsers(filters?: UserFilters): Promise<PaginatedResponse<User>> {
    const params = new URLSearchParams();
    params.append('page', (filters?.page || DEFAULT_PAGE).toString());
    params.append('limit', (filters?.limit || DEFAULT_LIMIT).toString());

    if (filters?.roleId) params.append('roleId', filters.roleId.toString());
    if (filters?.email) params.append('email', filters.email);

    const response = await api.get<PaginatedResponse<User>>(`/users?${params.toString()}`);
    return response.data;
  }

  // Tek bir kullanıcı getir
  async getUserById(id: number): Promise<User> {
    const response = await api.get<User>(`/users/${id}`);
    return response.data;
  }

  // Yeni kullanıcı oluştur
  async createUser(data: CreateUserData): Promise<User> {
    const response = await api.post<User>('/users', data);
    return response.data;
  }

  // Kullanıcı güncelle
  async updateUser(id: number, data: UpdateUserData): Promise<User> {
    const response = await api.put<User>(`/users/${id}`, data);
    return response.data;
  }

  // Kullanıcı sil
  async deleteUser(id: number): Promise<void> {
    await api.delete(`/users/${id}`);
  }
}

export default new UserService();
