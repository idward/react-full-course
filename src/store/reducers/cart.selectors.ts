import { createSelector } from 'reselect';
import { ApplicationState } from './index';
import { CartState } from './cart.reducer';
import { ShoppingItem } from '../../types';

/**
 * reselect memorize功能， 提高性能
 * @param state
 */
const selectCart = (state: ApplicationState) => state.cart;

export const selectCartStatus = createSelector(
  [selectCart],
  (cart: CartState) => cart.showStatus,
);

export const selectCartItems = createSelector(
  [selectCart],
  (cart: CartState) => cart.cartItems,
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems: ShoppingItem[]) =>
    cartItems.reduce((accuQuantity: number, cartItem: ShoppingItem) => accuQuantity + cartItem.quantity, 0),
);

export const selectCartItemsTotal = createSelector(
  [selectCartItems],
  (cartItems: ShoppingItem[]) =>
    cartItems.reduce((accuTotal: number, cartItem: ShoppingItem) => accuTotal + (cartItem.price * cartItem.quantity), 0),
);
