import React from 'react';
import { useCartStore } from '../app/store/cart';
import { CreateCartItemValues } from '../app/services/dto/cart.dto';
import { CartStateItem } from '../lib/getCartDetails';

export type CartReturnProps = {
  totalAmount: number;
  items: CartStateItem[];
  loading: boolean;
  fetchingLoad: boolean
  updateItemQuantity: (id: number, quantity: number) => void;
  removeCartItem: (id: number) => void;
  addCartItem: (values: CreateCartItemValues) => void;
};

export const useCart = (): CartReturnProps => {
  const cartState = useCartStore((state) => state);

  React.useEffect(() => {
    cartState.fetchCartItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return cartState;
};