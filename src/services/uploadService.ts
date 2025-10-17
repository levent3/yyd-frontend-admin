import api from './api';

export interface UploadResponse {
  message: string;
  fileUrl: string;
  thumbnailUrl?: string;
  fileName: string;
  originalName: string;
  size: number;
  mimeType: string;
}

const uploadService = {
  // Upload single image with progress tracking
  uploadImage: async (
    file: File,
    onProgress?: (progress: number) => void
  ): Promise<UploadResponse> => {
    const formData = new FormData();
    formData.append('image', file);

    const response = await api.post<UploadResponse>('/upload/image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (progressEvent) => {
        if (onProgress && progressEvent.total) {
          const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          onProgress(progress);
        }
      },
    });

    return response.data;
  },

  // Upload multiple images
  uploadImages: async (
    files: File[],
    onProgress?: (progress: number) => void
  ): Promise<{ files: UploadResponse[] }> => {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append('images', file);
    });

    const response = await api.post<{ files: UploadResponse[] }>('/upload/images', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (progressEvent) => {
        if (onProgress && progressEvent.total) {
          const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          onProgress(progress);
        }
      },
    });

    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
    return {
      files: response.data.files.map(file => ({
        ...file,
        fileUrl: `${baseUrl}${file.fileUrl}`,
        thumbnailUrl: file.thumbnailUrl ? `${baseUrl}${file.thumbnailUrl}` : undefined,
      })),
    };
  },

  // Delete uploaded file
  deleteFile: async (fileName: string): Promise<void> => {
    await api.delete(`/upload/${fileName}`);
  },

  // Validate file before upload
  validateFile: (file: File, type: 'image' | 'video'): string | null => {
    const maxSizes = {
      image: 10 * 1024 * 1024, // 10MB
      video: 100 * 1024 * 1024, // 100MB
    };

    const allowedTypes = {
      image: ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'],
      video: ['video/mp4', 'video/avi', 'video/mov', 'video/webm'],
    };

    // Dosya tipi kontrolü
    if (!allowedTypes[type].includes(file.type)) {
      return `Geçersiz dosya tipi! ${type === 'image' ? 'Sadece JPG, PNG, GIF, WebP' : 'Sadece MP4, AVI, MOV, WebM'} dosyaları yüklenebilir.`;
    }

    // Dosya boyutu kontrolü
    if (file.size > maxSizes[type]) {
      const maxSizeMB = maxSizes[type] / (1024 * 1024);
      return `Dosya çok büyük! Maksimum ${maxSizeMB}MB olmalıdır. (Mevcut: ${(file.size / (1024 * 1024)).toFixed(2)}MB)`;
    }

    return null; // Geçerli
  },
};

export default uploadService;
