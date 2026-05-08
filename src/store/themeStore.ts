import { create } from "zustand";

interface ThemeState {
  isDark: boolean;

  toggleTheme: () => void;
  setDark: () => void;
  setLight: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  isDark: false,

  toggleTheme: () =>
    set((state) => {
      return { isDark: !state.isDark };
    }),

  setDark: () => set({ isDark: true }),

  setLight: () => set({ isDark: false }),
}));
