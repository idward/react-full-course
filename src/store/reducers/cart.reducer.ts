import { Reducer } from 'redux';
import { CartEnum, ShoppingItem } from '../../types';
import { CartAction, AddCartItemAction, CartItemQuantityAction, RemoveCartItemAction } from '../actions/cart.action';
import { addItemToCart } from '../../utils/cart/cart.util';

export interface CartState {
  showStatus: boolean;
  cartItems: ShoppingItem[];
}

const initialState: CartState = {
  showStatus: false,
  cartItems: [],
};

const cartReducer: Reducer<CartState, CartAction> = (state = initialState, action) => {
  switch (action.type) {
    case CartEnum.TOGGLE_CART_STATUS:
      return {
        ...state,
        showStatus: !state.showStatus,
      };
    case CartEnum.ADD_CART_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, (action as AddCartItemAction).item),
      };
    case CartEnum.REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((cartItem: ShoppingItem) => {
          return cartItem.name !== (action as RemoveCartItemAction).removedItem.name;
        }),
      };
    case CartEnum.INCREASE_CART_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem: ShoppingItem) => {
          if (cartItem.name === (action as CartItemQuantityAction).updatedItem.name) {
            cartItem.quantity += 1;
          }
          return cartItem;
        }),
      };
    case CartEnum.DECREASE_CART_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem: ShoppingItem) => {
          if (cartItem.name === (action as CartItemQuantityAction).updatedItem.name) {
            if (cartItem.quantity > 1) {
              cartItem.quantity -= 1;
            } else {
              cartItem.quantity = 1;
            }
          }
          return cartItem;
        }),
      };
    default:
      return state;
  }
};

export default cartReducer;
