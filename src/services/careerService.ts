import api from './api';

export interface CareerApplication {
  id: number;
  fullName: string;
  email: string;
  phoneNumber?: string;
  position?: string;
  coverLetter?: string;
  cvUrl: string;
  status: 'new' | 'reviewing' | 'interviewed' | 'accepted' | 'rejected';
  submittedAt: Date;
}

export interface CreateCareerApplicationData {
  fullName: string;
  email: string;
  phoneNumber?: string;
  position?: string;
  coverLetter?: string;
  cv: File;
}

export interface UpdateCareerApplicationData {
  status?: 'new' | 'reviewing' | 'interviewed' | 'accepted' | 'rejected';
}

const careerService = {
  // Tüm başvuruları getir (Admin)
  getAllApplications: async (params?: { status?: string; page?: number; limit?: number }) => {
    const response = await api.get('/careers', { params });
    return response.data;
  },

  // Başvuru detayı getir
  getApplication: async (id: number) => {
    const response = await api.get(`/careers/${id}`);
    return response.data;
  },

  // Kariyer başvurusu yap (Public - multipart/form-data)
  submitApplication: async (data: CreateCareerApplicationData) => {
    const formData = new FormData();
    formData.append('fullName', data.fullName);
    formData.append('email', data.email);
    if (data.phoneNumber) formData.append('phoneNumber', data.phoneNumber);
    if (data.position) formData.append('position', data.position);
    if (data.coverLetter) formData.append('coverLetter', data.coverLetter);
    formData.append('cv', data.cv);

    const response = await api.post('/careers/apply', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  // Başvuru durumunu güncelle (Admin)
  updateApplication: async (id: number, data: UpdateCareerApplicationData) => {
    const response = await api.patch(`/careers/${id}`, data);
    return response.data;
  },

  // Başvuruyu sil
  deleteApplication: async (id: number) => {
    const response = await api.delete(`/careers/${id}`);
    return response.data;
  },
};

export default careerService;
