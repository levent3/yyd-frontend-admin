import api from './api';

export interface BankAccount {
  id: number;
  bankName: string;
  accountName: string;
  iban: string;
  swift?: string;
  accountNumber?: string;
  branch?: string;
  currency: string;
  isActive: boolean;
  displayOrder: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateBankAccountData {
  bankName: string;
  accountName: string;
  iban: string;
  swift?: string;
  accountNumber?: string;
  branch?: string;
  currency?: string;
  isActive?: boolean;
  displayOrder?: number;
}

export interface UpdateBankAccountData {
  bankName?: string;
  accountName?: string;
  iban?: string;
  swift?: string;
  accountNumber?: string;
  branch?: string;
  currency?: string;
  isActive?: boolean;
  displayOrder?: number;
}

const bankAccountService = {
  // Tüm banka hesaplarını getir (Admin)
  getAllBankAccounts: async () => {
    const response = await api.get('/donations/bank-accounts');
    return response.data;
  },

  // Aktif banka hesaplarını getir (Public - auth gerektirmez)
  getActiveBankAccounts: async () => {
    const response = await api.get('/donations/bank-accounts');
    return response.data;
  },

  // Banka hesabı detayı getir
  getBankAccount: async (id: number) => {
    const response = await api.get(`/donations/bank-accounts/${id}`);
    return response.data;
  },

  // Banka hesabı oluştur
  createBankAccount: async (data: CreateBankAccountData) => {
    const response = await api.post('/donations/bank-accounts', data);
    return response.data;
  },

  // Banka hesabını güncelle
  updateBankAccount: async (id: number, data: UpdateBankAccountData) => {
    const response = await api.patch(`/donations/bank-accounts/${id}`, data);
    return response.data;
  },

  // Banka hesabını sil
  deleteBankAccount: async (id: number) => {
    const response = await api.delete(`/donations/bank-accounts/${id}`);
    return response.data;
  },

  // Banka hesabını aktif/pasif yap
  toggleBankAccountStatus: async (id: number, isActive: boolean) => {
    const response = await api.patch(`/donations/bank-accounts/${id}`, { isActive });
    return response.data;
  },
};

export default bankAccountService;
