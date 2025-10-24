// src/services/teamMemberService.ts
import api from './api';
import { PaginatedResponse, PaginationParams, DEFAULT_PAGE, DEFAULT_LIMIT } from '../types/pagination';

export interface TeamMember {
  id: number;
  photoUrl?: string | null;
  position: string;
  teamType: string; // "yonetim" or "denetim"
  displayOrder: number;
  isActive: boolean;
  birthYear?: number | null;
  birthCity?: string | null;
  languages?: string | null;
  createdAt: string;
  updatedAt: string;

  // Multi-language support
  translations?: TeamMemberTranslation[];

  // Mapped fields (formatted by backend)
  fullName?: string;
  biography?: string;
  education?: string;
  experience?: string;
}

export interface TeamMemberTranslation {
  language: string;
  fullName: string;
  biography?: string;
  education?: string;
  experience?: string;
}

export interface CreateTeamMemberData {
  photoUrl?: string;
  position: string;
  teamType?: string;
  displayOrder?: number;
  isActive?: boolean;
  birthYear?: number;
  birthCity?: string;
  languages?: string;
  translations: TeamMemberTranslation[];
}

export interface UpdateTeamMemberData extends Partial<CreateTeamMemberData> {}

export interface TeamMemberFilters extends PaginationParams {
  teamType?: string;
  isActive?: boolean;
}

class TeamMemberService {
  // ========== PUBLIC ENDPOINTS (No Auth Required) ==========

  // Public: Get all active team members
  async getPublicTeamMembers(filters?: TeamMemberFilters): Promise<PaginatedResponse<TeamMember>> {
    const params = new URLSearchParams();
    params.append('page', (filters?.page || DEFAULT_PAGE).toString());
    params.append('limit', (filters?.limit || DEFAULT_LIMIT).toString());

    if (filters?.teamType) params.append('teamType', filters.teamType);
    if (filters?.isActive !== undefined) params.append('isActive', filters.isActive.toString());

    const response = await api.get<any>(`/team-members?${params.toString()}`);
    return {
      data: response.data.data,
      pagination: response.data.pagination
    };
  }

  // Public: Get team members by team type (yonetim or denetim)
  async getPublicTeamMembersByType(teamType: string): Promise<TeamMember[]> {
    const response = await api.get<any>(`/team-members/team/${teamType}`);
    return response.data.data;
  }

  // ========== PROTECTED ENDPOINTS (Auth Required - Admin) ==========

  // Get all team members with pagination (ADMIN)
  async getAllTeamMembers(filters?: TeamMemberFilters): Promise<PaginatedResponse<TeamMember>> {
    const params = new URLSearchParams();
    params.append('page', (filters?.page || DEFAULT_PAGE).toString());
    params.append('limit', (filters?.limit || DEFAULT_LIMIT).toString());

    if (filters?.teamType) params.append('teamType', filters.teamType);
    if (filters?.isActive !== undefined) params.append('isActive', filters.isActive.toString());

    const response = await api.get<PaginatedResponse<TeamMember>>(`/team-members?${params.toString()}`);
    return response.data;
  }

  // Get single team member
  async getTeamMemberById(id: number): Promise<TeamMember> {
    const response = await api.get<TeamMember>(`/team-members/${id}`);
    return response.data;
  }

  // Create new team member
  async createTeamMember(data: CreateTeamMemberData): Promise<TeamMember> {
    const response = await api.post<TeamMember>('/team-members', data);
    return response.data;
  }

  // Update team member
  async updateTeamMember(id: number, data: UpdateTeamMemberData): Promise<TeamMember> {
    const response = await api.put<TeamMember>(`/team-members/${id}`, data);
    return response.data;
  }

  // Delete team member
  async deleteTeamMember(id: number): Promise<void> {
    await api.delete(`/team-members/${id}`);
  }

  // Upload photo
  async uploadPhoto(file: File): Promise<{ imageUrl: string }> {
    const formData = new FormData();
    formData.append('image', file);

    const response = await api.post<{ fileUrl: string; thumbnailUrl?: string; message: string }>(
      '/upload/image',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    return { imageUrl: response.data.fileUrl };
  }
}

export default new TeamMemberService();
