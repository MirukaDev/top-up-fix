import React, { createContext, useContext, useState, useCallback } from 'react';
import type { Product, Game, PaymentMethod } from '@/types';

interface CartItem {
  product: Product;
  game: Game;
  userId: string;
  serverId?: string;
}

interface CartContextType {
  cartItem: CartItem | null;
  selectedPayment: PaymentMethod | null;
  useBalance: boolean;
  setCartItem: (item: CartItem | null) => void;
  setSelectedPayment: (payment: PaymentMethod | null) => void;
  setUseBalance: (use: boolean) => void;
  clearCart: () => void;
  calculateTotal: (userBalance: number) => { subtotal: number; discount: number; total: number };
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItem, setCartItem] = useState<CartItem | null>(null);
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod | null>(null);
  const [useBalance, setUseBalance] = useState(false);

  const clearCart = useCallback(() => {
    setCartItem(null);
    setSelectedPayment(null);
    setUseBalance(false);
  }, []);

  const calculateTotal = useCallback((userBalance: number) => {
    if (!cartItem) {
      return { subtotal: 0, discount: 0, total: 0 };
    }

    const subtotal = cartItem.product.price;
    let discount = 0;

    if (useBalance && userBalance > 0) {
      discount = Math.min(userBalance, subtotal);
    }

    const total = subtotal - discount;

    return { subtotal, discount, total };
  }, [cartItem, useBalance]);

  return (
    <CartContext.Provider
      value={{
        cartItem,
        selectedPayment,
        useBalance,
        setCartItem,
        setSelectedPayment,
        setUseBalance,
        clearCart,
        calculateTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
