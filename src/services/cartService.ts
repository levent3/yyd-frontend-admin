import api from './api';

export interface CartItem {
  id: string;
  sessionId: string;
  amount: number;
  currency: string;
  donationType: 'one_time' | 'monthly';
  repeatCount?: number;
  donorName?: string;
  donorEmail?: string;
  donorPhone?: string;
  createdAt: Date;
  expiresAt: Date;
  campaign?: {
    id: number;
    title: string;
    slug: string;
    imageUrl?: string;
  };
}

export interface AddToCartData {
  sessionId: string;
  campaignId: number;
  amount: number;
  currency?: string;
  donationType?: 'one_time' | 'monthly';
  repeatCount?: number;
  donorName?: string;
  donorEmail?: string;
  donorPhone?: string;
}

export interface CartResponse {
  items: CartItem[];
  total: number;
  itemCount: number;
}

const cartService = {
  // Sepete ekle
  addToCart: async (data: AddToCartData) => {
    const response = await api.post('/cart', data);
    return response.data;
  },

  // Sepeti getir
  getCart: async (sessionId: string) => {
    const response = await api.get<CartResponse>(`/cart/${sessionId}`);
    return response.data;
  },

  // Sepet öğesini güncelle
  updateCartItem: async (itemId: string, data: { amount?: number; repeatCount?: number }) => {
    const response = await api.patch(`/cart/item/${itemId}`, data);
    return response.data;
  },

  // Sepetten kaldır
  removeFromCart: async (itemId: string) => {
    const response = await api.delete(`/cart/item/${itemId}`);
    return response.data;
  },

  // Sepeti temizle
  clearCart: async (sessionId: string) => {
    const response = await api.delete(`/cart/${sessionId}`);
    return response.data;
  },

  // Sepeti doğrula (checkout öncesi)
  validateCart: async (sessionId: string) => {
    const response = await api.post('/cart/validate', { sessionId });
    return response.data;
  },

  // Session ID oluştur/getir (client-side utility)
  getOrCreateSessionId: (): string => {
    if (typeof window === 'undefined') return '';

    let sessionId = localStorage.getItem('yyd_cart_session_id');
    if (!sessionId) {
      sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('yyd_cart_session_id', sessionId);
    }
    return sessionId;
  },
};

export default cartService;
