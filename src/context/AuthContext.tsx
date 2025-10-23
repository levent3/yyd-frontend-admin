// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import authService, { User, LoginCredentials } from '../services/authService';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  // Component mount olduğunda kullanıcı bilgisini kontrol et ve izinleri getir
  useEffect(() => {
    const initAuth = async () => {
      if (authService.isAuthenticated()) {
        try {
          // Backend'den güncel kullanıcı bilgilerini ve izinlerini al
          const userData = await authService.getMe();
          setUser(userData);
        } catch (error) {
          console.error('Failed to fetch user data:', error);
          // Token geçersizse logout yap
          await authService.logout();
          setUser(null);
        }
      }
      setLoading(false);
    };

    initAuth();
  }, []);

  const login = async (credentials: LoginCredentials) => {
    try {
      const response = await authService.login(credentials);
      // Login sonrası kullanıcı izinlerini backend'den al
      const userData = await authService.getMe();
      setUser(userData);
      toast.success('Giriş başarılı!');
      // Hard redirect - production'da router.push sorun çıkarabiliyor
      window.location.href = '/dashboard';
    } catch (error: any) {
      const message = error.response?.data?.message || 'Giriş başarısız!';
      toast.error(message);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await authService.logout();
      setUser(null);
      toast.success('Çıkış yapıldı');
      // Hard redirect - middleware ve cache sorunlarını önlemek için
      window.location.href = '/authentication/login';
    } catch (error) {
      toast.error('Çıkış sırasında hata oluştu');
      // Hata olsa bile çıkış yap
      setUser(null);
      window.location.href = '/authentication/login';
    }
  };

  const value: AuthContextType = {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook - AuthContext'i kullanmak için
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
