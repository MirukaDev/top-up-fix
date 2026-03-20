import type { Game, Product, PaymentMethod, Transaction, User } from '@/types';

export const games: Game[] = [
  {
    id: '1',
    name: 'Mobile Legends',
    slug: 'mobile-legends',
    description: 'Top up Diamond Mobile Legends murah dan cepat',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=400&fit=crop',
    banner: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=400&fit=crop',
    category: 'MOBA',
    isActive: true,
    sortOrder: 1,
  },
  {
    id: '2',
    name: 'Free Fire',
    slug: 'free-fire',
    description: 'Top up Diamond Free Fire termurah',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=400&fit=crop',
    banner: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1200&h=400&fit=crop',
    category: 'Battle Royale',
    isActive: true,
    sortOrder: 2,
  },
  {
    id: '3',
    name: 'PUBG Mobile',
    slug: 'pubg-mobile',
    description: 'Top up UC PUBG Mobile instant',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b2b0a?w=400&h=400&fit=crop',
    banner: 'https://images.unsplash.com/photo-1552820728-8b83bb6b2b0a?w=1200&h=400&fit=crop',
    category: 'Battle Royale',
    isActive: true,
    sortOrder: 3,
  },
  {
    id: '4',
    name: 'Genshin Impact',
    slug: 'genshin-impact',
    description: 'Top up Genesis Crystal Genshin Impact',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=400&fit=crop',
    banner: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&h=400&fit=crop',
    category: 'RPG',
    isActive: true,
    sortOrder: 4,
  },
  {
    id: '5',
    name: 'Valorant',
    slug: 'valorant',
    description: 'Top up VP Valorant',
    image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=400&h=400&fit=crop',
    banner: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=1200&h=400&fit=crop',
    category: 'FPS',
    isActive: true,
    sortOrder: 5,
  },
];

export const products: Product[] = [
  // Mobile Legends
  { id: '1', gameId: '1', productCode: 'MLBB-86', name: '86 Diamonds', price: 22000, resellerPrice: 20000, isActive: true, sortOrder: 1 },
  { id: '2', gameId: '1', productCode: 'MLBB-172', name: '172 Diamonds', price: 43000, resellerPrice: 40000, isActive: true, sortOrder: 2 },
  { id: '3', gameId: '1', productCode: 'MLBB-257', name: '257 Diamonds', price: 64000, resellerPrice: 60000, isActive: true, sortOrder: 3 },
  { id: '4', gameId: '1', productCode: 'MLBB-344', name: '344 Diamonds', price: 85000, resellerPrice: 80000, isActive: true, sortOrder: 4 },
  { id: '5', gameId: '1', productCode: 'MLBB-429', name: '429 Diamonds', price: 106000, resellerPrice: 100000, isActive: true, sortOrder: 5 },
  { id: '6', gameId: '1', productCode: 'MLBB-514', name: '514 Diamonds', price: 127000, resellerPrice: 120000, isActive: true, sortOrder: 6 },
  { id: '7', gameId: '1', productCode: 'MLBB-600', name: '600 Diamonds', price: 148000, resellerPrice: 140000, isActive: true, sortOrder: 7 },
  { id: '8', gameId: '1', productCode: 'MLBB-706', name: '706 Diamonds', price: 169000, resellerPrice: 160000, isActive: true, sortOrder: 8 },
  
  // Free Fire
  { id: '9', gameId: '2', productCode: 'FF-50', name: '50 Diamonds', price: 7000, resellerPrice: 6500, isActive: true, sortOrder: 1 },
  { id: '10', gameId: '2', productCode: 'FF-100', name: '100 Diamonds', price: 14000, resellerPrice: 13000, isActive: true, sortOrder: 2 },
  { id: '11', gameId: '2', productCode: 'FF-310', name: '310 Diamonds', price: 42000, resellerPrice: 40000, isActive: true, sortOrder: 3 },
  { id: '12', gameId: '2', productCode: 'FF-520', name: '520 Diamonds', price: 70000, resellerPrice: 67000, isActive: true, sortOrder: 4 },
  { id: '13', gameId: '2', productCode: 'FF-1060', name: '1060 Diamonds', price: 140000, resellerPrice: 135000, isActive: true, sortOrder: 5 },
  { id: '14', gameId: '2', productCode: 'FF-2180', name: '2180 Diamonds', price: 280000, resellerPrice: 270000, isActive: true, sortOrder: 6 },
  
  // PUBG Mobile
  { id: '15', gameId: '3', productCode: 'PUBG-60', name: '60 UC', price: 15000, resellerPrice: 14000, isActive: true, sortOrder: 1 },
  { id: '16', gameId: '3', productCode: 'PUBG-120', name: '120 UC', price: 28000, resellerPrice: 27000, isActive: true, sortOrder: 2 },
  { id: '17', gameId: '3', productCode: 'PUBG-240', name: '240 UC', price: 55000, resellerPrice: 53000, isActive: true, sortOrder: 3 },
  { id: '18', gameId: '3', productCode: 'PUBG-360', name: '360 UC', price: 82000, resellerPrice: 79000, isActive: true, sortOrder: 4 },
  { id: '19', gameId: '3', productCode: 'PUBG-600', name: '600 UC', price: 135000, resellerPrice: 130000, isActive: true, sortOrder: 5 },
  
  // Genshin Impact
  { id: '20', gameId: '4', productCode: 'GENSHIN-60', name: '60 Genesis Crystal', price: 15000, resellerPrice: 14000, isActive: true, sortOrder: 1 },
  { id: '21', gameId: '4', productCode: 'GENSHIN-330', name: '330 Genesis Crystal', price: 79000, resellerPrice: 75000, isActive: true, sortOrder: 2 },
  { id: '22', gameId: '4', productCode: 'GENSHIN-1090', name: '1090 Genesis Crystal', price: 249000, resellerPrice: 240000, isActive: true, sortOrder: 3 },
  { id: '23', gameId: '4', productCode: 'GENSHIN-2240', name: '2240 Genesis Crystal', price: 499000, resellerPrice: 480000, isActive: true, sortOrder: 4 },
  
  // Valorant
  { id: '24', gameId: '5', productCode: 'VALO-475', name: '475 VP', price: 55000, resellerPrice: 52000, isActive: true, sortOrder: 1 },
  { id: '25', gameId: '5', productCode: 'VALO-1000', name: '1000 VP', price: 110000, resellerPrice: 105000, isActive: true, sortOrder: 2 },
  { id: '26', gameId: '5', productCode: 'VALO-2050', name: '2050 VP', price: 220000, resellerPrice: 210000, isActive: true, sortOrder: 3 },
  { id: '27', gameId: '5', productCode: 'VALO-3650', name: '3650 VP', price: 385000, resellerPrice: 370000, isActive: true, sortOrder: 4 },
];

export const paymentMethods: PaymentMethod[] = [
  { id: '1', code: 'qris', name: 'QRIS', type: 'qris', fee: 0.007, icon: 'QrCode' },
  { id: '2', code: 'dana', name: 'DANA', type: 'e-wallet', fee: 0.015, icon: 'Wallet' },
  { id: '3', code: 'ovo', name: 'OVO', type: 'e-wallet', fee: 0.015, icon: 'CreditCard' },
  { id: '4', code: 'gopay', name: 'GoPay', type: 'e-wallet', fee: 0.015, icon: 'Smartphone' },
  { id: '5', code: 'bca', name: 'BCA Virtual Account', type: 'bank_transfer', fee: 4000, icon: 'Building2' },
  { id: '6', code: 'bni', name: 'BNI Virtual Account', type: 'bank_transfer', fee: 4000, icon: 'Building2' },
  { id: '7', code: 'bri', name: 'BRI Virtual Account', type: 'bank_transfer', fee: 4000, icon: 'Building2' },
  { id: '8', code: 'mandiri', name: 'Mandiri Virtual Account', type: 'bank_transfer', fee: 4000, icon: 'Building2' },
];

export const mockUser: User = {
  id: '1',
  username: 'demouser',
  email: 'demo@mirukastore.com',
  role: 'user',
  balance: 50000,
  phone: '08123456789',
  fullName: 'Demo User',
  isActive: true,
};

export const mockTransactions: Transaction[] = [
  {
    id: '1',
    orderId: 'MRK202403210001',
    userId: '1',
    gameId: '1',
    productId: '1',
    userGameId: '12345678',
    serverId: '1234',
    productName: '86 Diamonds',
    gameName: 'Mobile Legends',
    price: 22000,
    paymentMethod: 'qris',
    status: 'success',
    apiStatus: 'success',
    createdAt: '2024-03-21T10:00:00Z',
    paidAt: '2024-03-21T10:05:00Z',
  },
  {
    id: '2',
    orderId: 'MRK202403200002',
    userId: '1',
    gameId: '2',
    productId: '10',
    userGameId: '87654321',
    productName: '100 Diamonds',
    gameName: 'Free Fire',
    price: 14000,
    paymentMethod: 'dana',
    status: 'success',
    apiStatus: 'success',
    createdAt: '2024-03-20T15:30:00Z',
    paidAt: '2024-03-20T15:35:00Z',
  },
  {
    id: '3',
    orderId: 'MRK202403190003',
    userId: '1',
    gameId: '3',
    productId: '15',
    userGameId: '11223344',
    productName: '60 UC',
    gameName: 'PUBG Mobile',
    price: 15000,
    paymentMethod: 'ovo',
    status: 'pending',
    apiStatus: 'pending',
    createdAt: '2024-03-19T08:00:00Z',
  },
];

export const adminStats = {
  todayRevenue: 2500000,
  todayTransactions: 45,
  totalUsers: 1250,
  totalResellers: 85,
  weekRevenue: 18500000,
  weekTransactions: 320,
  monthRevenue: 75000000,
  monthTransactions: 1450,
  pendingTransactions: 12,
};
