// MirukaStore - Type Definitions

export interface Game {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  banner?: string;
  category: string;
  isActive: boolean;
  sortOrder: number;
}

export interface Product {
  id: string;
  gameId: string;
  productCode: string;
  name: string;
  description?: string;
  price: number;
  resellerPrice: number;
  icon?: string;
  isActive: boolean;
  sortOrder: number;
}

export interface User {
  id: string;
  username: string;
  email: string;
  role: 'user' | 'reseller' | 'admin';
  balance: number;
  phone?: string;
  fullName?: string;
  isActive: boolean;
}

export interface Transaction {
  id: string;
  orderId: string;
  userId?: string;
  gameId: string;
  productId: string;
  userGameId: string;
  serverId?: string;
  productName: string;
  gameName: string;
  price: number;
  paymentMethod: string;
  status: 'pending' | 'processing' | 'settlement' | 'success' | 'failed' | 'expired' | 'cancelled';
  apiStatus: 'pending' | 'processing' | 'success' | 'failed';
  createdAt: string;
  paidAt?: string;
}

export interface CartItem {
  product: Product;
  game: Game;
  userId: string;
  serverId?: string;
}

export interface PaymentMethod {
  id: string;
  code: string;
  name: string;
  type: 'e-wallet' | 'bank_transfer' | 'qris' | 'retail';
  fee: number;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}
