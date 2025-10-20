// src/services/dashboardService.ts
import api from './api';

export interface DonationStatistics {
  totalCount: number;
  completedCount: number;
  pendingCount: number;
  failedCount: number;
  totalAmount: number;
  completedAmount: number;
  monthlyCount: number;
}

export interface CampaignStatistics {
  totalCount: number;
  activeCount: number;
  completedCount: number;
  featuredCount: number;
}

export interface DonorStatistics {
  totalCount: number;
  monthlyNewCount: number;
}

export interface ProjectStatistics {
  totalCount: number;
  activeCount: number;
  completedCount: number;
}

export interface VolunteerStatistics {
  totalCount: number;
  pendingCount: number;
  approvedCount: number;
}

export interface ContactStatistics {
  totalCount: number;
  unreadCount: number;
}

export interface GlobalStatistics {
  donations: DonationStatistics;
  campaigns: CampaignStatistics;
  donors: DonorStatistics;
  projects: ProjectStatistics;
  volunteers: VolunteerStatistics;
  contacts: ContactStatistics;
}

export interface ChartDataPoint {
  date: string;
  count: number;
  amount: number;
}

export interface RecentActivity {
  type: 'donation' | 'volunteer' | 'contact';
  id: string;
  title: string;
  description: string;
  campaign?: string;
  subject?: string;
  timestamp: string;
}

export interface TopCampaign {
  id: number;
  title: string;
  slug: string;
  description?: string;
  targetAmount?: number;
  collectedAmount?: number;
  imageUrl?: string;
  category?: string;
  isActive: boolean;
  isFeatured: boolean;
  _count: {
    donations: number;
  };
}

export interface TopDonor {
  donor: {
    id: number;
    fullName: string;
    email: string;
  };
  totalAmount: number;
  totalDonations: number;
}

// ========== DASHBOARD ENDPOINTS ==========

/**
 * Get global dashboard statistics
 */
export const getStatistics = async (): Promise<GlobalStatistics> => {
  const response = await api.get('/dashboard/statistics');
  return response.data;
};

/**
 * Get donation chart data
 */
export const getDonationChartData = async (
  period: 'daily' | 'weekly' | 'monthly' | 'yearly' = 'monthly',
  limit: number = 30
): Promise<ChartDataPoint[]> => {
  const response = await api.get('/dashboard/chart/donations', {
    params: { period, limit },
  });
  return response.data;
};

/**
 * Get recent activities
 */
export const getRecentActivities = async (limit: number = 10): Promise<RecentActivity[]> => {
  const response = await api.get('/dashboard/recent-activities', {
    params: { limit },
  });
  return response.data;
};

/**
 * Get top performing campaigns
 */
export const getTopCampaigns = async (limit: number = 5): Promise<TopCampaign[]> => {
  const response = await api.get('/dashboard/top-campaigns', {
    params: { limit },
  });
  return response.data;
};

/**
 * Get top donors
 */
export const getTopDonors = async (limit: number = 10): Promise<TopDonor[]> => {
  const response = await api.get('/dashboard/top-donors', {
    params: { limit },
  });
  return response.data;
};

export default {
  getStatistics,
  getDonationChartData,
  getRecentActivities,
  getTopCampaigns,
  getTopDonors,
};
