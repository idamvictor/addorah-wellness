import { createStore } from "zustand/vanilla";

export type AppState = {
  sidebarOpen: boolean;
};

export type AppActions = {
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
};

export type AppStore = AppState & AppActions;

export const defaultInitState: AppState = {
  sidebarOpen: false,
};

export const createAppStore = (initState: AppState = defaultInitState) => {
  return createStore<AppStore>()((set) => ({
    ...initState,
    setSidebarOpen: (sidebarOpen) => set({ sidebarOpen }),
    toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  }));
};
