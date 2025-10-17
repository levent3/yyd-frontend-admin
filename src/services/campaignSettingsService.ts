// src/services/campaignSettingsService.ts
import api from './api';
import { CampaignSettings } from './donationService';

export interface CreateCampaignSettingsData {
  campaignId: number;
  presetAmounts?: number[];
  minAmount?: number;
  maxAmount?: number;
  allowRepeat?: boolean;
  minRepeatCount?: number;
  maxRepeatCount?: number;
  allowOneTime?: boolean;
  allowRecurring?: boolean;
  allowedFrequencies?: string[];
  allowDedication?: boolean;
  allowAnonymous?: boolean;
  requireMessage?: boolean;
  showProgress?: boolean;
  showDonorCount?: boolean;
  showBeneficiaries?: boolean;
  impactMetrics?: any;
  successStories?: any;
  customCss?: string;
  customJs?: string;
}

export interface UpdateCampaignSettingsData extends Partial<Omit<CreateCampaignSettingsData, 'campaignId'>> {}

export interface CampaignSettingsResponse {
  settings: CampaignSettings;
  isDefault: boolean;
}

const campaignSettingsService = {
  // Get campaign settings by campaign ID (Public)
  getSettingsByCampaign: async (campaignId: number): Promise<CampaignSettingsResponse> => {
    const response = await api.get<CampaignSettingsResponse>(`/campaign-settings/${campaignId}`);
    return response.data;
  },

  // Create campaign settings (Admin)
  createSettings: async (data: CreateCampaignSettingsData): Promise<CampaignSettings> => {
    const response = await api.post<CampaignSettings>('/campaign-settings', data);
    return response.data;
  },

  // Update campaign settings (Admin)
  updateSettings: async (campaignId: number, data: UpdateCampaignSettingsData): Promise<CampaignSettings> => {
    const response = await api.put<CampaignSettings>(`/campaign-settings/${campaignId}`, data);
    return response.data;
  },

  // Upsert campaign settings (Admin) - Create or update
  upsertSettings: async (campaignId: number, data: UpdateCampaignSettingsData): Promise<CampaignSettings> => {
    const response = await api.post<CampaignSettings>(`/campaign-settings/${campaignId}/upsert`, data);
    return response.data;
  },

  // Delete campaign settings (Admin) - Revert to defaults
  deleteSettings: async (campaignId: number): Promise<void> => {
    await api.delete(`/campaign-settings/${campaignId}`);
  },
};

export default campaignSettingsService;
