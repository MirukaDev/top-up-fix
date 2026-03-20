# MirukaStore - Platform Top Up Game

MirukaStore adalah platform top up game modern yang dibangun dengan React, TypeScript, dan Tailwind CSS.

## 🚀 Fitur

### User Features
- ✅ Login & Register
- ✅ Browse Game
- ✅ Top Up dengan berbagai nominal
- ✅ Multiple Payment Methods (QRIS, DANA, OVO, GoPay, Bank Transfer)
- ✅ Riwayat Transaksi
- ✅ Cek Status Transaksi
- ✅ Sistem Saldo

### Admin Features
- ✅ Dashboard dengan statistik
- ✅ Manajemen Game
- ✅ Manajemen Produk
- ✅ Manajemen Transaksi
- ✅ Manajemen Users

## 🛠️ Teknologi

- **Framework:** React + TypeScript + Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **State Management:** React Context
- **Routing:** React Router DOM
- **Icons:** Lucide React

## 📦 Instalasi

```bash
# Clone repository
git clone https://github.com/username/mirukastore.git

# Masuk ke folder
cd mirukastore

# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build
```

## 🔧 Konfigurasi

### Default Login
- **Email:** demo@mirukastore.com
- **Password:** password

### Admin Access
- Login dengan role admin untuk mengakses dashboard admin

## 📁 Struktur Folder

```
src/
├── components/       # Reusable components
│   ├── Navbar.tsx
│   └── Footer.tsx
├── contexts/         # React Context
│   ├── AuthContext.tsx
│   └── CartContext.tsx
├── data/            # Mock data
│   └── games.ts
├── pages/           # Page components
│   ├── Home.tsx
│   ├── GameDetail.tsx
│   ├── Login.tsx
│   ├── Register.tsx
│   ├── CekTransaksi.tsx
│   ├── OrderHistory.tsx
│   ├── Invoice.tsx
│   ├── Kontak.tsx
│   └── AdminDashboard.tsx
├── types/           # TypeScript types
│   └── index.ts
├── utils/           # Utility functions
│   └── format.ts
├── App.tsx          # Main App component
└── index.css        # Global styles
```

## 🎨 Warna Tema

- **Primary:** Purple (#7c3aed)
- **Background Dark:** #0f0a1e
- **Background Light:** #1a1429
- **Border:** Purple dengan opacity 20%

## 📞 Kontak

- **WhatsApp:** 0812-1974-8457
- **Email:** support@mirukastore.com

## 📝 Lisensi

MIT License

---

Dibuat dengan ❤️ oleh MirukaStore Team
