import React, { createContext, useContext, useState, useCallback } from 'react';
import type { User } from '@/types';
import { mockUser } from '@/data/games';

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (data: RegisterData) => Promise<boolean>;
  logout: () => void;
  updateBalance: (amount: number) => void;
}

interface RegisterData {
  username: string;
  email: string;
  password: string;
  fullName?: string;
  phone?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = useCallback(async (email: string, password: string): Promise<boolean> => {
    // Mock login - in real app, this would call an API
    if (email === 'demo@mirukastore.com' && password === 'password') {
      setUser(mockUser);
      return true;
    }
    // Allow any login for demo
    setUser(mockUser);
    return true;
  }, []);

  const register = useCallback(async (data: RegisterData): Promise<boolean> => {
    // Mock register
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      username: data.username,
      email: data.email,
      role: 'user',
      balance: 0,
      phone: data.phone,
      fullName: data.fullName,
      isActive: true,
    };
    setUser(newUser);
    return true;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const updateBalance = useCallback((amount: number) => {
    if (user) {
      setUser({ ...user, balance: user.balance + amount });
    }
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        login,
        register,
        logout,
        updateBalance,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
