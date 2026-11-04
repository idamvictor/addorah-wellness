"use client";

import { type ReactNode, createContext, useContext, useEffect, useState } from "react";
import { useStore } from "zustand";

import { type AppState, type AppStore, createAppStore } from "@/stores/app-store";

export type AppStoreApi = ReturnType<typeof createAppStore>;

export const AppStoreContext = createContext<AppStoreApi | undefined>(
  undefined,
);

export interface AppStoreProviderProps {
  children: ReactNode;
  initState?: AppState;
}

export const AppStoreProvider = ({
  children,
  initState,
}: AppStoreProviderProps) => {
  const [store] = useState(() => createAppStore(initState));

  useEffect(() => {
    void Promise.resolve(store.persist.rehydrate()).then(() => store.setState({ hydrated: true }));
  }, [store]);
  return (
    <AppStoreContext.Provider value={store}>
      {children}
    </AppStoreContext.Provider>
  );
};

export const useAppStore = <T,>(selector: (store: AppStore) => T): T => {
  const appStoreContext = useContext(AppStoreContext);
  if (!appStoreContext) {
    throw new Error("useAppStore must be used within AppStoreProvider");
  }

  return useStore(appStoreContext, selector);
};
