import { useState, useEffect } from "react";
import { cart } from 'CartApp/cart';

export function useCartCount() {
  const [count, setCount] = useState(cart.cartItems.length);

  useEffect(() => {
    cart.subscribe(({ cartItems }) => setCount(cartItems.length));
  }, []);

  return count;
}
