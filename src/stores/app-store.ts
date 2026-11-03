import { createStore } from "zustand/vanilla";

export type CartItem = {
  slug: string;
  /** Distinguishes options of the same product, e.g. a bundle size. */
  variant?: string;
  /** Unit price in NGN at the time it was added. */
  price: number;
  qty: number;
};

export type AppState = {
  cartOpen: boolean;
  items: CartItem[];
};

export type AppActions = {
  setCartOpen: (open: boolean) => void;
  addItem: (item: Omit<CartItem, "qty">, qty?: number) => void;
  setQty: (slug: string, variant: string | undefined, qty: number) => void;
  removeItem: (slug: string, variant: string | undefined) => void;
  clearCart: () => void;
};

export type AppStore = AppState & AppActions;

export const defaultInitState: AppState = {
  cartOpen: false,
  items: [],
};

const isLine = (item: CartItem, slug: string, variant: string | undefined) =>
  item.slug === slug && item.variant === variant;

export const createAppStore = (initState: AppState = defaultInitState) => {
  return createStore<AppStore>()((set) => ({
    ...initState,
    setCartOpen: (cartOpen) => set({ cartOpen }),
    addItem: (item, qty = 1) =>
      set((state) => {
        const existing = state.items.find((line) =>
          isLine(line, item.slug, item.variant),
        );
        const items = existing
          ? state.items.map((line) =>
              line === existing ? { ...line, qty: line.qty + qty } : line,
            )
          : [...state.items, { ...item, qty }];
        return { items, cartOpen: true };
      }),
    setQty: (slug, variant, qty) =>
      set((state) => ({
        items:
          qty <= 0
            ? state.items.filter((line) => !isLine(line, slug, variant))
            : state.items.map((line) =>
                isLine(line, slug, variant) ? { ...line, qty } : line,
              ),
      })),
    removeItem: (slug, variant) =>
      set((state) => ({
        items: state.items.filter((line) => !isLine(line, slug, variant)),
      })),
    clearCart: () => set({ items: [] }),
  }));
};

export const selectCartCount = (state: AppState) =>
  state.items.reduce((total, line) => total + line.qty, 0);

export const selectCartSubtotal = (state: AppState) =>
  state.items.reduce((total, line) => total + line.price * line.qty, 0);
