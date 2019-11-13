import { AnyAction } from 'redux';
import { CartEnum, ShoppingItem } from '../../types';

export interface CartAction extends AnyAction {
  type: CartEnum;
}

export const toggleCartStatus = (): CartAction => {
  return {
    type: CartEnum.TOGGLE_CART_STATUS,
  };
};

export const addCartItem = (item: ShoppingItem): CartAction => {
  return {
    type: CartEnum.ADD_CART_ITEM,
    item,
  };
};

export const increaseCartItemQuantity = (updatedItem: ShoppingItem): CartAction => {
  return {
    type: CartEnum.INCREASE_CART_ITEM_QUANTITY,
    updatedItem,
  };
};

export const decreaseCartItemQuantity = (updatedItem: ShoppingItem): CartAction => {
  return {
    type: CartEnum.DECREASE_CART_ITEM_QUANTITY,
    updatedItem,
  };
};

export const removeCartItem = (removedItem: ShoppingItem): CartAction => {
  return {
    type: CartEnum.REMOVE_CART_ITEM,
    removedItem,
  };
};

export const clearCart = () => {
  return {
    type: CartEnum.CLEAR_CART,
  };
};
