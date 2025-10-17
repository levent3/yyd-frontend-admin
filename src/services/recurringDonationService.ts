import api from './api';

export interface RecurringDonation {
  id: number;
  amount: number;
  currency: string;
  frequency: 'monthly' | 'quarterly' | 'yearly';
  paymentMethod: string;
  paymentGateway?: string;
  cardMask?: string;
  cardBrand?: string;
  status: 'active' | 'paused' | 'cancelled' | 'completed';
  nextPaymentDate?: Date;
  lastPaymentDate?: Date;
  totalPaymentsMade: number;
  totalPaymentsPlanned?: number;
  failedAttempts: number;
  lastFailureReason?: string;
  startedAt: Date;
  endedAt?: Date;
  pausedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  donor: {
    id: number;
    fullName: string;
    email: string;
  };
  campaign?: {
    id: number;
    title: string;
    slug: string;
  };
  paymentTransactions?: any[];
}

export interface CreateRecurringDonationData {
  donorId: number;
  campaignId?: number;
  amount: number;
  currency?: string;
  frequency: 'monthly' | 'quarterly' | 'yearly';
  paymentMethod: string;
  paymentGateway?: string;
  cardToken?: string;
  totalPaymentsPlanned?: number;
}

export interface UpdateRecurringDonationData {
  status?: 'active' | 'paused' | 'cancelled' | 'completed';
  amount?: number;
  frequency?: 'monthly' | 'quarterly' | 'yearly';
  nextPaymentDate?: string;
}

const recurringDonationService = {
  // Tüm düzenli bağışları getir
  getAllRecurringDonations: async (params?: {
    status?: string;
    frequency?: string;
    donorId?: number;
    page?: number;
    limit?: number;
  }) => {
    const response = await api.get('/recurring-donations', { params });
    return response.data;
  },

  // Düzenli bağış detayı getir
  getRecurringDonation: async (id: number) => {
    const response = await api.get(`/recurring-donations/${id}`);
    return response.data;
  },

  // Düzenli bağış oluştur
  createRecurringDonation: async (data: CreateRecurringDonationData) => {
    const response = await api.post('/recurring-donations', data);
    return response.data;
  },

  // Düzenli bağışı güncelle
  updateRecurringDonation: async (id: number, data: UpdateRecurringDonationData) => {
    const response = await api.patch(`/recurring-donations/${id}`, data);
    return response.data;
  },

  // Düzenli bağışı duraklat
  pauseRecurringDonation: async (id: number) => {
    const response = await api.patch(`/recurring-donations/${id}`, { status: 'paused' });
    return response.data;
  },

  // Düzenli bağışı yeniden başlat
  resumeRecurringDonation: async (id: number) => {
    const response = await api.patch(`/recurring-donations/${id}`, { status: 'active' });
    return response.data;
  },

  // Düzenli bağışı iptal et
  cancelRecurringDonation: async (id: number) => {
    const response = await api.patch(`/recurring-donations/${id}`, { status: 'cancelled' });
    return response.data;
  },

  // Düzenli bağışı sil
  deleteRecurringDonation: async (id: number) => {
    const response = await api.delete(`/recurring-donations/${id}`);
    return response.data;
  },

  // Bağışçıya göre düzenli bağışlar
  getByDonor: async (donorId: number) => {
    const response = await api.get('/recurring-donations', { params: { donorId } });
    return response.data;
  },

  // Kampanyaya göre düzenli bağışlar
  getByCampaign: async (campaignId: number) => {
    const response = await api.get('/recurring-donations', { params: { campaignId } });
    return response.data;
  },
};

export default recurringDonationService;
