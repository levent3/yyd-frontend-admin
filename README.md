# YYD Web Frontend

Yardımlaşma ve Dayanışma Derneği (YYD) admin paneli - Next.js tabanlı modern yönetim arayüzü.

## 🚀 Teknolojiler

- **Next.js 13.1.5** - React framework
- **React 18.2.0** - UI kütüphanesi
- **Node.js 20.1.0** - Runtime
- **TypeScript** - Type safety
- **Axios** - HTTP client
- **Syncfusion** - UI component library
- **ApexCharts** - Grafikler

## 📋 Özellikler

- ✅ Kullanıcı yönetimi
- ✅ Proje yönetimi (CRUD)
- ✅ Bağış kampanyaları yönetimi
- ✅ Galeri yönetimi
- ✅ Haber yönetimi
- ✅ Dashboard ve istatistikler
- ✅ Authentication (JWT)
- ✅ Responsive tasarım

## 🛠️ Kurulum

### 1. Gereksinimler

- Node.js 18+ (önerilen: 20.1.0)
- npm veya yarn
- Backend API'nin çalışıyor olması (http://localhost:5001)

### 2. Kurulum Adımları

```bash
# Bağımlılıkları yükleyin
npm install --legacy-peer-deps

# .env.local dosyasını oluşturun
cp .env.local.example .env.local

# .env.local dosyasını düzenleyin
# NEXT_PUBLIC_API_URL=http://localhost:5001/api

# Development server'ı başlatın
npm run dev
```

### 3. Erişim

- **Admin Panel**: http://localhost:3000
- **Login**: /authentication/login

## 📁 Proje Yapısı

```
src/
├── app/                 # Next.js app directory
│   ├── admin/          # Admin sayfaları
│   ├── authentication/ # Login/Register
│   └── dashboard/      # Dashboard
├── components/         # React componentler
├── services/           # API servisleri
│   ├── api.ts         # Axios instance
│   ├── authService.ts
│   ├── projectService.ts
│   └── donationService.ts
└── types/             # TypeScript type definitions
```

## 📝 Environment Variables

```env
# Backend API URL
NEXT_PUBLIC_API_URL=http://localhost:5001/api

# Frontend URL
NEXT_PUBLIC_FRONTEND_URL=http://localhost:3000

# Environment
NEXT_PUBLIC_ENV=development
```

## 🧪 Build & Deploy

```bash
# Production build
npm run build

# Production server'ı başlat
npm start
```

## 🐛 Bilinen Sorunlar

- ApexCharts dependency conflict (--legacy-peer-deps ile çözüldü)
- Syncfusion componentleri lisans uyarısı verebilir

## 👥 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun
3. Commit edin
4. Push edin
5. Pull Request açın