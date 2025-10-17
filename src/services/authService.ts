// src/services/authService.ts
import api from './api';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  username: string;
  fullName?: string;
}

export interface Permission {
  moduleKey: string;
  moduleName: string;
  read: boolean;
  create: boolean;
  update: boolean;
  delete: boolean;
}

export interface Role {
  id: number;
  name: string;
}

export interface User {
  id: number;
  email: string;
  fullName?: string;
  username?: string;
  role?: Role;
  permissions?: Permission[];
}

export interface LoginResponse {
  token: string;
  user: User;
}

class AuthService {
  // Login işlemi
  async login(credentials: LoginCredentials): Promise<LoginResponse> {
    const response = await api.post<LoginResponse>('/auth/login', credentials);

    // Token'ı localStorage'e kaydet
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }

    return response.data;
  }

  // Register işlemi
  async register(data: RegisterData): Promise<any> {
    const response = await api.post('/auth/register', data);
    return response.data;
  }

  // Logout işlemi
  async logout(): Promise<void> {
    try {
      await api.post('/auth/logout');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Her durumda local storage'ı temizle
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      // Cookie'yi de temizle (client-side)
      document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    }
  }

  // Kullanıcı bilgisini al
  getCurrentUser(): User | null {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        return JSON.parse(userStr);
      } catch {
        return null;
      }
    }
    return null;
  }

  // Token kontrolü
  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  // Kullanıcı bilgilerini ve izinlerini backend'den al
  async getMe(): Promise<User> {
    const response = await api.get<User>('/auth/me');
    // Kullanıcı bilgilerini localStorage'e kaydet
    localStorage.setItem('user', JSON.stringify(response.data));
    return response.data;
  }
}

export default new AuthService();
