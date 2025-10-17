// src/services/paymentTransactionService.ts
import api from './api';
import { PaginatedResponse, PaginationParams, DEFAULT_PAGE, DEFAULT_LIMIT } from '../types/pagination';

export interface PaymentTransaction {
  id: string;
  amount: number;
  currency: string;
  status: 'pending' | 'success' | 'failed';
  paymentGateway: string; // iyzico, paytr, stripe
  gatewayTransactionId?: string;
  gatewayResponse?: any;
  gatewayErrorCode?: string;
  gatewayErrorMessage?: string;
  threeDSecure: boolean;
  conversationId?: string;
  attemptNumber: number;
  retryable: boolean;
  ipAddress?: string;
  userAgent?: string;
  createdAt: string;
  processedAt?: string;
  donationId?: string;
  recurringDonationId?: number;
  donation?: any;
  recurringDonation?: any;
}

export interface CreatePaymentTransactionData {
  amount: number;
  currency?: string;
  status?: 'pending' | 'success' | 'failed';
  paymentGateway: string;
  gatewayTransactionId?: string;
  gatewayResponse?: any;
  threeDSecure?: boolean;
  conversationId?: string;
  attemptNumber?: number;
  ipAddress?: string;
  userAgent?: string;
  donationId?: string;
  recurringDonationId?: number;
}

export interface UpdatePaymentTransactionData {
  status?: 'pending' | 'success' | 'failed';
  gatewayTransactionId?: string;
  gatewayResponse?: any;
  gatewayErrorCode?: string;
  gatewayErrorMessage?: string;
  retryable?: boolean;
}

export interface PaymentTransactionFilters extends PaginationParams {
  status?: 'pending' | 'success' | 'failed';
  paymentGateway?: string;
  donationId?: string;
  recurringDonationId?: number;
}

export interface PaymentStatistics {
  totalTransactions: number;
  successfulTransactions: number;
  failedTransactions: number;
  pendingTransactions: number;
  totalAmount: number;
  successAmount: number;
  failedAmount: number;
  successRate: number;
  averageAmount: number;
}

export interface GatewayStatistics {
  gateway: string;
  totalTransactions: number;
  successCount: number;
  failedCount: number;
  totalAmount: number;
  successRate: number;
}

export interface MarkSuccessData {
  transactionId?: string;
  response?: any;
}

export interface MarkFailedData {
  errorCode?: string;
  errorMessage?: string;
  response?: any;
  retryable?: boolean;
}

const paymentTransactionService = {
  // Get all payment transactions (Admin) - with pagination
  getAllTransactions: async (filters?: PaymentTransactionFilters): Promise<PaginatedResponse<PaymentTransaction>> => {
    const params = new URLSearchParams();
    params.append('page', (filters?.page || DEFAULT_PAGE).toString());
    params.append('limit', (filters?.limit || DEFAULT_LIMIT).toString());

    if (filters?.status) params.append('status', filters.status);
    if (filters?.paymentGateway) params.append('paymentGateway', filters.paymentGateway);
    if (filters?.donationId) params.append('donationId', filters.donationId);
    if (filters?.recurringDonationId) params.append('recurringDonationId', filters.recurringDonationId.toString());

    const response = await api.get<PaginatedResponse<PaymentTransaction>>(`/payment-transactions?${params.toString()}`);
    return response.data;
  },

  // Get payment statistics (Admin)
  getStatistics: async (startDate?: string, endDate?: string): Promise<PaymentStatistics> => {
    const params = new URLSearchParams();
    if (startDate) params.append('startDate', startDate);
    if (endDate) params.append('endDate', endDate);

    const response = await api.get<PaymentStatistics>(`/payment-transactions/statistics?${params.toString()}`);
    return response.data;
  },

  // Get statistics by payment gateway (Admin)
  getStatisticsByGateway: async (): Promise<GatewayStatistics[]> => {
    const response = await api.get<GatewayStatistics[]>('/payment-transactions/statistics/by-gateway');
    return response.data;
  },

  // Get failed transactions (Admin)
  getFailedTransactions: async (limit: number = 50): Promise<PaymentTransaction[]> => {
    const response = await api.get<PaymentTransaction[]>(`/payment-transactions/failed?limit=${limit}`);
    return response.data;
  },

  // Get pending transactions (Admin)
  getPendingTransactions: async (): Promise<PaymentTransaction[]> => {
    const response = await api.get<PaymentTransaction[]>('/payment-transactions/pending');
    return response.data;
  },

  // Get transactions by donation (Admin)
  getByDonation: async (donationId: string): Promise<PaymentTransaction[]> => {
    const response = await api.get<PaymentTransaction[]>(`/payment-transactions/donation/${donationId}`);
    return response.data;
  },

  // Get transactions by recurring donation (Admin)
  getByRecurringDonation: async (recurringDonationId: number): Promise<PaymentTransaction[]> => {
    const response = await api.get<PaymentTransaction[]>(`/payment-transactions/recurring-donation/${recurringDonationId}`);
    return response.data;
  },

  // Get transactions by gateway (Admin)
  getByGateway: async (gateway: string): Promise<PaymentTransaction[]> => {
    const response = await api.get<PaymentTransaction[]>(`/payment-transactions/gateway/${gateway}`);
    return response.data;
  },

  // Get transaction by ID (Admin)
  getTransactionById: async (id: string): Promise<PaymentTransaction> => {
    const response = await api.get<PaymentTransaction>(`/payment-transactions/${id}`);
    return response.data;
  },

  // Create payment transaction (Admin/Internal)
  createTransaction: async (data: CreatePaymentTransactionData): Promise<PaymentTransaction> => {
    const response = await api.post<PaymentTransaction>('/payment-transactions', data);
    return response.data;
  },

  // Update payment transaction (Admin)
  updateTransaction: async (id: string, data: UpdatePaymentTransactionData): Promise<PaymentTransaction> => {
    const response = await api.put<PaymentTransaction>(`/payment-transactions/${id}`, data);
    return response.data;
  },

  // Delete payment transaction (Admin)
  deleteTransaction: async (id: string): Promise<void> => {
    await api.delete(`/payment-transactions/${id}`);
  },

  // Mark transaction as success (Admin/Webhook)
  markAsSuccess: async (id: string, data?: MarkSuccessData): Promise<PaymentTransaction> => {
    const response = await api.post<PaymentTransaction>(`/payment-transactions/${id}/mark-success`, data || {});
    return response.data;
  },

  // Mark transaction as failed (Admin/Webhook)
  markAsFailed: async (id: string, data?: MarkFailedData): Promise<PaymentTransaction> => {
    const response = await api.post<PaymentTransaction>(`/payment-transactions/${id}/mark-failed`, data || {});
    return response.data;
  },

  // Retry failed transaction (Admin)
  retryTransaction: async (id: string): Promise<PaymentTransaction> => {
    const response = await api.post<PaymentTransaction>(`/payment-transactions/${id}/retry`);
    return response.data;
  },
};

export default paymentTransactionService;
