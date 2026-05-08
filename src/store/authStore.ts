import { create } from "zustand";

export interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "customer";
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;

  login: (userData: User) => void;
  logout: () => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: false,
  error: null,

  login: (userData) =>
    set({
      user: userData,
      isLoading: false,
      error: null,
    }),

  logout: () =>
    set({
      user: null,
      isLoading: false,
      error: null,
    }),

  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),
}));
