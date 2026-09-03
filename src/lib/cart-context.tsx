"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  type ReactNode,
} from "react";

export type CartLine = {
  id: string;
  slug: string;
  name: string;
  variantLabel?: string;
  unitPrice: number;
  image: string;
  qty: number;
};

type CartState = {
  lines: CartLine[];
  hydrated: boolean;
};

type CartAction =
  | { type: "HYDRATE"; lines: CartLine[] }
  | { type: "ADD"; line: Omit<CartLine, "qty">; qty: number }
  | { type: "SET_QTY"; id: string; qty: number }
  | { type: "REMOVE"; id: string }
  | { type: "CLEAR" };

const STORAGE_KEY = "techne-cart";

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "HYDRATE":
      return { lines: action.lines, hydrated: true };
    case "ADD": {
      const existing = state.lines.find((l) => l.id === action.line.id);
      if (existing) {
        return {
          ...state,
          lines: state.lines.map((l) =>
            l.id === action.line.id ? { ...l, qty: l.qty + action.qty } : l
          ),
        };
      }
      return {
        ...state,
        lines: [...state.lines, { ...action.line, qty: action.qty }],
      };
    }
    case "SET_QTY":
      if (action.qty <= 0) {
        return { ...state, lines: state.lines.filter((l) => l.id !== action.id) };
      }
      return {
        ...state,
        lines: state.lines.map((l) => (l.id === action.id ? { ...l, qty: action.qty } : l)),
      };
    case "REMOVE":
      return { ...state, lines: state.lines.filter((l) => l.id !== action.id) };
    case "CLEAR":
      return { ...state, lines: [] };
    default:
      return state;
  }
}

type CartContextValue = {
  lines: CartLine[];
  hydrated: boolean;
  addItem: (line: Omit<CartLine, "qty">, qty?: number) => void;
  setQty: (id: string, qty: number) => void;
  removeItem: (id: string) => void;
  clear: () => void;
  subtotal: number;
  totalCount: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { lines: [], hydrated: false });

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      dispatch({ type: "HYDRATE", lines: raw ? JSON.parse(raw) : [] });
    } catch {
      dispatch({ type: "HYDRATE", lines: [] });
    }
  }, []);

  useEffect(() => {
    if (!state.hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.lines));
  }, [state.lines, state.hydrated]);

  const value = useMemo<CartContextValue>(() => {
    const subtotal = state.lines.reduce((sum, l) => sum + l.unitPrice * l.qty, 0);
    const totalCount = state.lines.reduce((sum, l) => sum + l.qty, 0);
    return {
      lines: state.lines,
      hydrated: state.hydrated,
      addItem: (line, qty = 1) => dispatch({ type: "ADD", line, qty }),
      setQty: (id, qty) => dispatch({ type: "SET_QTY", id, qty }),
      removeItem: (id) => dispatch({ type: "REMOVE", id }),
      clear: () => dispatch({ type: "CLEAR" }),
      subtotal,
      totalCount,
    };
  }, [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
