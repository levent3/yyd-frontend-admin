import api from './api';

export interface ContactMessage {
  id: number;
  fullName: string;
  email: string;
  phoneNumber?: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'replied' | 'archived';
  submittedAt: Date;
  updatedAt: Date;
}

export interface CreateContactData {
  fullName: string;
  email: string;
  phoneNumber?: string;
  subject: string;
  message: string;
}

export interface UpdateContactData {
  status?: 'new' | 'read' | 'replied' | 'archived';
}

const contactService = {
  // Tüm iletişim mesajlarını getir (Admin)
  getAllMessages: async (params?: { status?: string; page?: number; limit?: number }) => {
    const response = await api.get('/contact', { params });
    return response.data;
  },

  // Mesaj detayı getir
  getMessage: async (id: number) => {
    const response = await api.get(`/contact/${id}`);
    return response.data;
  },

  // İletişim formu gönder (Public - auth gerektirmez)
  submitContact: async (data: CreateContactData) => {
    const response = await api.post('/contact', data);
    return response.data;
  },

  // Mesaj durumunu güncelle (Admin)
  updateMessage: async (id: number, data: UpdateContactData) => {
    const response = await api.patch(`/contact/${id}`, data);
    return response.data;
  },

  // Mesajı sil
  deleteMessage: async (id: number) => {
    const response = await api.delete(`/contact/${id}`);
    return response.data;
  },
};

export default contactService;
