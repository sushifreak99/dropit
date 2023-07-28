import { PropsWithChildren, createContext, useContext, useState } from "react";

interface CartContextProp {
  items: Record<string, number>;
  add: (id: string) => void;
}
const CartContext = createContext<CartContextProp | undefined>(undefined);

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<Record<string,number>>({})
  const add = (id: string) => {
    let val = items[id];
    if (val === undefined) {
      val = 0;
    }
    setItems(oldRecord => ({ ...oldRecord, [id]: val + 1 }))
  }
  return <CartContext.Provider value={{items, add}}>{children}</CartContext.Provider>
}

export function useCart() {
  const cartCtx = useContext(CartContext);
  if (cartCtx === undefined) {
    throw new Error("useCart must be within a CartProvider")
  }
  return cartCtx;
}

export function computeCartQuantity() {
  const { items } = useContext(CartContext) ?? { items: 0 };
  return Object.values(items).reduce((sum, current) => sum + current, 0)
}
