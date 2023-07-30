import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";

interface CartContextProp {
  items: Record<string, number>;
  add: (id: string) => void;
  remove: (id: string) => void;
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

  const remove = (id: string) => {
    let val = items[id];
    if (val === undefined) {
      return;
    }
    if (val == 1) {
      setItems(oldRecord =>
        Object.keys(oldRecord).reduce((acc, current) => {
          if (current === id) {
            return acc;
          }
          acc[current] = oldRecord[current];
          return acc
      }, {} as {[k: string]: number}))
      return;
    }
    setItems(oldRecord => ({ ...oldRecord, [id]: val - 1 }))
  }

  useEffect(() => {
    const payload = localStorage.getItem('dropItCart');
    if (payload === null) {
      return;
    }
    setItems(JSON.parse(payload));
  }, [])
  useEffect(() => {
    const tid = setInterval(() => {
      localStorage.setItem('dropItCart', JSON.stringify(items))
    }, 3000)
    return () => clearInterval(tid);
  }, [items])

  return <CartContext.Provider value={{items, add, remove}}>{children}</CartContext.Provider>
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
