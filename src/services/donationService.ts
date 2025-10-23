// src/services/donationService.ts
import api from './api';
import { PaginatedResponse, PaginationParams, DEFAULT_PAGE, DEFAULT_LIMIT } from '../types/pagination';

// ========== INTERFACES ==========

export interface Donation {
  id: string;
  amount: number;
  currency: string;
  paymentMethod: string;
  paymentStatus: string;
  transactionId?: string;
  paymentGateway?: string;
  donorName?: string;
  donorEmail?: string;
  donorPhone?: string;
  message?: string;
  isAnonymous: boolean;
  receiptSent: boolean;
  receiptUrl?: string;
  installment?: number;
  repeatCount?: number;
  ipAddress?: string;
  userAgent?: string;
  createdAt: string;
  updatedAt: string;
  completedAt?: string;
  failedAt?: string;

  // Adanmış Bağış (Dedicated Donations) - YENİ!
  isDedicated?: boolean;
  dedicatedTo?: string;
  dedicationType?: string; // "memory_of", "honor_of", "gift_to", "celebration"
  dedicationMessage?: string;

  // SMS Bağış - YENİ!
  smsShortCode?: string;
  smsKeyword?: string;

  // İlişkiler
  donor?: Donor;
  campaign?: DonationCampaign;
  donorId?: number;
  campaignId?: number;
  paymentTransactions?: any[];
}

export interface DonationCampaign {
  id: number;
  // YENİ: Çok dilli yapı - Backend'den gelen response
  translations?: CampaignTranslation[];

  // Mapped fields (backend'de formatlanmış hali)
  title: string;
  slug: string;
  description?: string;

  // Diğer alanlar
  targetAmount?: number;
  collectedAmount?: number;
  imageUrl?: string;
  category?: string;
  isActive: boolean;
  isFeatured: boolean;
  displayOrder: number;
  startDate?: string;
  endDate?: string;
  createdAt: string;
  updatedAt: string;

  // İstatistikler - YENİ!
  donorCount?: number;
  beneficiaryCount?: number;

  // İlişkiler
  projectId?: number;
  project?: any;
  settings?: CampaignSettings; // YENİ!
  _count?: {
    donations: number;
  };
}

// Kampanya Ayarları - YENİ INTERFACE!
export interface CampaignSettings {
  id: number;
  campaignId: number;
  presetAmounts?: number[]; // [100, 250, 500, 1000]
  minAmount?: number;
  maxAmount?: number;
  allowRepeat?: boolean;
  minRepeatCount?: number;
  maxRepeatCount?: number;
  allowOneTime?: boolean;
  allowRecurring?: boolean;
  allowedFrequencies?: string[]; // ["monthly", "quarterly", "yearly"]
  allowDedication?: boolean;
  allowAnonymous?: boolean;
  requireMessage?: boolean;
  showProgress?: boolean;
  showDonorCount?: boolean;
  showBeneficiaries?: boolean;
  impactMetrics?: any; // JSON
  successStories?: any; // JSON
  customCss?: string;
  customJs?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Donor {
  id: number;
  fullName: string;
  email: string;
  phoneNumber?: string;
  address?: string;
  city?: string;
  country?: string;
  taxNumber?: string;
  createdAt: string;
  updatedAt: string;
  donations?: Donation[];
  _count?: {
    donations: number;
  };
}

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
  createdAt: string;
  updatedAt: string;
}

export interface CreateDonationData {
  amount: number;
  currency?: string;
  paymentMethod: string;
  paymentStatus?: string;
  transactionId?: string;
  paymentGateway?: string;
  donorName?: string;
  donorEmail?: string;
  donorPhone?: string;
  message?: string;
  isAnonymous?: boolean;
  donorId?: number;
  campaignId?: number;

  // Adanmış Bağış - YENİ!
  isDedicated?: boolean;
  dedicatedTo?: string;
  dedicationType?: string; // "memory_of", "honor_of", "gift_to", "celebration"
  dedicationMessage?: string;

  // SMS Bağış - YENİ!
  smsShortCode?: string;
  smsKeyword?: string;

  // Diğer - YENİ!
  installment?: number;
  repeatCount?: number;
}

export interface CampaignTranslation {
  language: string;
  title: string;
  slug?: string;
  description?: string;
}

export interface CreateCampaignData {
  // YENİ: Çok dilli yapı
  translations: CampaignTranslation[];

  // Eski alanlar (geriye dönük uyumluluk için opsiyonel)
  title?: string;
  slug?: string;
  description?: string;

  // Diğer alanlar
  targetAmount?: number;
  imageUrl?: string;
  category?: string;
  isActive?: boolean;
  isFeatured?: boolean;
  displayOrder?: number;
  startDate?: string;
  endDate?: string;
  projectId?: number;

  // İstatistikler - YENİ!
  donorCount?: number;
  beneficiaryCount?: number;

  // Kampanya Ayarları - YENİ! (settings objesi olarak da gönderilebilir)
  settings?: Partial<CampaignSettings>;
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

export interface DonationFilters extends PaginationParams {
  status?: string;
  campaignId?: number;
  paymentMethod?: string;
}

export interface CampaignFilters extends PaginationParams {
  category?: string;
  isActive?: boolean;
}

class DonationService {
  // ========== DONATIONS ==========

  async getAllDonations(filters?: DonationFilters): Promise<PaginatedResponse<Donation>> {
    const params = new URLSearchParams();
    params.append('page', (filters?.page || DEFAULT_PAGE).toString());
    params.append('limit', (filters?.limit || DEFAULT_LIMIT).toString());

    if (filters?.status) params.append('status', filters.status);
    if (filters?.campaignId) params.append('campaignId', filters.campaignId.toString());
    if (filters?.paymentMethod) params.append('paymentMethod', filters.paymentMethod);

    const response = await api.get<PaginatedResponse<Donation>>(`/donations?${params.toString()}`);
    return response.data;
  }

  async getDonationById(id: string): Promise<Donation> {
    const response = await api.get<Donation>(`/donations/${id}`);
    return response.data;
  }

  async createDonation(data: CreateDonationData): Promise<any> {
    const response = await api.post('/donations/public', data);
    return response.data;
  }

  async updateDonation(id: string, data: Partial<Donation>): Promise<any> {
    const response = await api.put(`/donations/${id}`, data);
    return response.data;
  }

  async deleteDonation(id: string): Promise<any> {
    const response = await api.delete(`/donations/${id}`);
    return response.data;
  }

  // ========== CAMPAIGNS ==========

  // Public: Tüm kampanyaları getir - Cache'lenmiş
  async getAllCampaigns(filters?: CampaignFilters): Promise<PaginatedResponse<DonationCampaign>> {
    const params = new URLSearchParams();
    params.append('page', (filters?.page || DEFAULT_PAGE).toString());
    params.append('limit', (filters?.limit || DEFAULT_LIMIT).toString());

    if (filters?.category) params.append('category', filters.category);
    if (filters?.isActive !== undefined) params.append('isActive', filters.isActive.toString());

    const response = await api.get<any>(`/donations/campaigns/public?${params.toString()}`);
    // Backend cache'li response'u handle et: { success, message, data, pagination }
    return {
      data: response.data.data || response.data,
      pagination: response.data.pagination
    };
  }

  // Admin: Kampanya getir (ID ile)
  async getCampaignById(id: number): Promise<DonationCampaign> {
    const response = await api.get<DonationCampaign>(`/donations/campaigns/${id}`);
    return response.data;
  }

  // Public: Kampanya getir (Slug ile) - Cache'lenmiş
  async getCampaignBySlug(slug: string): Promise<DonationCampaign> {
    const response = await api.get<any>(`/donations/campaigns/slug/${slug}`);
    // Backend cache'li response'u handle et: { success, message, data }
    return response.data.data || response.data;
  }

  async createCampaign(data: CreateCampaignData): Promise<any> {
    const response = await api.post('/donations/campaigns', data);
    return response.data;
  }

  async updateCampaign(id: number, data: Partial<CreateCampaignData>): Promise<any> {
    const response = await api.put(`/donations/campaigns/${id}`, data);
    return response.data;
  }

  async deleteCampaign(id: number): Promise<any> {
    const response = await api.delete(`/donations/campaigns/${id}`);
    return response.data;
  }

  // ========== DONORS ==========

  async getAllDonors(pagination?: PaginationParams): Promise<PaginatedResponse<Donor>> {
    const params = new URLSearchParams();
    params.append('page', (pagination?.page || DEFAULT_PAGE).toString());
    params.append('limit', (pagination?.limit || DEFAULT_LIMIT).toString());

    const response = await api.get<PaginatedResponse<Donor>>(`/donations/donors?${params.toString()}`);
    return response.data;
  }

  async getDonorById(id: number): Promise<Donor> {
    const response = await api.get<Donor>(`/donations/donors/${id}`);
    return response.data;
  }

  async getDonorByEmail(email: string): Promise<Donor> {
    const response = await api.get<Donor>(`/donations/donors/email/${email}`);
    return response.data;
  }

  // ========== BANK ACCOUNTS ==========

  // Admin: Tüm banka hesaplarını getir
  async getAllBankAccounts(): Promise<BankAccount[]> {
    const response = await api.get<any>(`/donations/bank-accounts`);
    // Backend cache'li response'u handle et: { success, data }
    return response.data.data || response.data;
  }

  async getBankAccountById(id: number): Promise<BankAccount> {
    const response = await api.get<BankAccount>(`/donations/bank-accounts/${id}`);
    return response.data;
  }

  async createBankAccount(data: CreateBankAccountData): Promise<any> {
    const response = await api.post('/donations/bank-accounts', data);
    return response.data;
  }

  async updateBankAccount(id: number, data: Partial<CreateBankAccountData>): Promise<any> {
    const response = await api.put(`/donations/bank-accounts/${id}`, data);
    return response.data;
  }

  async deleteBankAccount(id: number): Promise<any> {
    const response = await api.delete(`/donations/bank-accounts/${id}`);
    return response.data;
  }
}

export default new DonationService();
