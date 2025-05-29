import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UserState = {
  isAuthenticated: boolean;
  setIsAuthenticated: (val: boolean) => void;
  email: string | null;
  setEmail: (email: string) => void;
  isVerified: boolean;
  setVerified: () => void;
};

export const useUserStore = create(
  persist<UserState>(
    (set) => ({
      isAuthenticated: false,
      setIsAuthenticated: (val) => set({ isAuthenticated: val }),
      email: null,
      setEmail: (email) => set({ email }),
      isVerified: false,
      setVerified: () => set({ isVerified: true }),
    }),
    {
      name: 'userStore',
    },
  ),
);
