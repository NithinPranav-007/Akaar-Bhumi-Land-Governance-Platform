import { create } from 'zustand';

export type OperationalTier =
  | 'Central_DoLR'
  | 'State_Revenue_Delhi'
  | 'State_Revenue_MH'
  | 'Academic_Research_Lab';

export type RightDrawerTab =
  | 'copilot'
  | 'ladm_inspector'
  | 'dossier_export';

interface UIState {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  toggleTheme: () => void;
  activeTier: OperationalTier;
  setActiveTier: (tier: OperationalTier) => void;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  isRightDrawerOpen: boolean;
  setRightDrawerOpen: (open: boolean) => void;
  toggleRightDrawer: () => void;
  rightDrawerTab: RightDrawerTab;
  setRightDrawerTab: (tab: RightDrawerTab) => void;
  isUploadSourceModalOpen: boolean;
  setUploadSourceModalOpen: (open: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  theme: 'dark',
  setTheme: (theme) => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('landgov-theme', theme);
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
          document.documentElement.classList.remove('light');
        } else {
          document.documentElement.classList.remove('dark');
          document.documentElement.classList.add('light');
        }
      } catch (_) {}
    }
    set({ theme });
  },
  toggleTheme: () =>
    set((state) => {
      const next = state.theme === 'dark' ? 'light' : 'dark';
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem('landgov-theme', next);
          if (next === 'dark') {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
          } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
          }
        } catch (_) {}
      }
      return { theme: next };
    }),
  activeTier: 'State_Revenue_Delhi',
  setActiveTier: (tier) => set({ activeTier: tier }),
  isSidebarOpen: true,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  isRightDrawerOpen: false,
  setRightDrawerOpen: (open) => set({ isRightDrawerOpen: open }),
  toggleRightDrawer: () => set((state) => ({ isRightDrawerOpen: !state.isRightDrawerOpen })),
  rightDrawerTab: 'copilot',
  setRightDrawerTab: (tab) => set({ rightDrawerTab: tab, isRightDrawerOpen: true }),
  isUploadSourceModalOpen: false,
  setUploadSourceModalOpen: (open) => set({ isUploadSourceModalOpen: open }),
}));
