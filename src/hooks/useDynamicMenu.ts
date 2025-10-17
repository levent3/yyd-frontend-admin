// src/hooks/useDynamicMenu.ts
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import moduleService, { Module } from '../services/moduleService';

interface MenuItem {
  title: string;
  id: number;
  icon: string;
  type: 'link' | 'sub';
  path?: string;
  pathSlice?: string;
  moduleKey?: string;
  children?: MenuItem[];
}

interface MenuSection {
  title: string;
  menucontent: string;
  Items: MenuItem[];
}

// Modül key'e göre icon eşleştirme
const getIconForModule = (moduleKey: string): string => {
  const iconMap: { [key: string]: string } = {
    dashboard: 'home',
    projects: 'briefcase',
    users: 'users',
    roles: 'shield',
    modules: 'layers',
    news: 'file-text',
    donations: 'heart',
    'donations-list': 'list',
    campaigns: 'target',
    gallery: 'image',
    volunteers: 'user-check',
    careers: 'briefcase',
    contact: 'mail',
    settings: 'settings',
    'system-settings': 'settings',
    'recurring-donations': 'repeat',
    'payment-transactions': 'credit-card',
    'bank-accounts': 'dollar-sign',
    'campaign-settings': 'sliders',
  };
  return iconMap[moduleKey] || 'circle';
};

// Modül key'e göre path eşleştirme
const getPathForModule = (moduleKey: string, isParent: boolean = false): string => {
  if (isParent) return '';

  const pathMap: { [key: string]: string } = {
    dashboard: '/dashboard',
    projects: '/admin/projects',
    users: '/admin/users',
    roles: '/admin/roles',
    modules: '/admin/modules',
    news: '/admin/news',
    donations: '/admin/donations',
    'donations-list': '/admin/donations',
    campaigns: '/admin/campaigns',
    gallery: '/admin/gallery',
    volunteers: '/admin/volunteers',
    careers: '/admin/careers',
    contact: '/admin/contact',
    settings: '/admin/system-settings',
    'system-settings': '/admin/system-settings',
    'recurring-donations': '/admin/recurring-donations',
    'payment-transactions': '/admin/payment-transactions',
    'bank-accounts': '/admin/bank-accounts',
    'campaign-settings': '/admin/campaign-settings',
  };
  return pathMap[moduleKey] || `/admin/${moduleKey}`;
};

export const useDynamicMenu = () => {
  const { user } = useAuth();
  const [menu, setMenu] = useState<MenuSection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setMenu([]);
      setLoading(false);
      return;
    }

    loadDynamicMenu();
  }, [user]);

  const loadDynamicMenu = async () => {
    try {
      setLoading(true);

      // Tüm modülleri çek
      const modules = await moduleService.getAllModules();

      // User permissions'larını al
      const userPermissions = user?.permissions || [];
      const isSuperAdmin = user?.role?.name?.toLowerCase() === 'superadmin';

      // Eğer SuperAdmin ise tüm modülleri göster
      let allowedModules = modules;

      if (!isSuperAdmin) {
        // Normal user için sadece izinli modülleri filtrele
        allowedModules = modules.filter(module => {
          const permission = userPermissions.find(p => p.moduleKey === module.moduleKey);
          return permission && permission.read; // En azından read yetkisi olmalı
        });
      }

      // Parent modülleri ve children'ları organize et
      const parentModules = allowedModules.filter(m => !m.parentId);
      const childModules = allowedModules.filter(m => m.parentId);

      // Dashboard her zaman ilk sırada
      const dashboardSection: MenuSection = {
        title: 'Ana Menü',
        menucontent: 'Dashboard',
        Items: [
          {
            title: 'Dashboard',
            id: 0,
            icon: 'home',
            path: '/dashboard',
            type: 'link',
          }
        ]
      };

      // Diğer modülleri dönüştür
      const menuItems: MenuItem[] = parentModules
        .sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0))
        .map((parent, index) => {
          const children = childModules
            .filter(child => child.parentId === parent.id)
            .sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0))
            .map(child => ({
              title: child.name,
              type: 'link' as const,
              path: getPathForModule(child.moduleKey),
              pathSlice: child.moduleKey,
              moduleKey: child.moduleKey,
            }));

          const hasChildren = children.length > 0;

          return {
            title: parent.name,
            id: index + 1,
            icon: getIconForModule(parent.moduleKey),
            type: hasChildren ? ('sub' as const) : ('link' as const),
            path: hasChildren ? undefined : getPathForModule(parent.moduleKey),
            pathSlice: parent.moduleKey,
            moduleKey: parent.moduleKey,
            children: hasChildren ? children : undefined,
          };
        });

      const managementSection: MenuSection = {
        title: 'Yönetim',
        menucontent: 'Sistem Yönetimi',
        Items: menuItems
      };

      setMenu([dashboardSection, managementSection]);
    } catch (error) {
      console.error('Dinamik menü yüklenirken hata:', error);
      setMenu([]);
    } finally {
      setLoading(false);
    }
  };

  return { menu, loading };
};
