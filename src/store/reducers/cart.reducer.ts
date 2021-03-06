import { Reducer } from 'redux';
import { CartEnum, ShoppingItem } from '../../types';
import { CartAction } from '../actions/cart.action';
import { addItemToCart } from '../../utils/cart/cart.util';

export interface CartState {
  showStatus?: boolean;
  cartItems: ShoppingItem[];
}

const initialState: CartState = {
  showStatus: false,
  cartItems: [],
};

const cartReducer: Reducer<CartState, CartAction> = (state = initialState, action): CartState => {
  switch (action.type) {
    case CartEnum.TOGGLE_CART_STATUS:
      return {
        ...state,
        showStatus: !state.showStatus,
      };
    case CartEnum.ADD_CART_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.item),
      };
    case CartEnum.REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((cartItem: ShoppingItem) => {
          return action.removedItem ? cartItem.name !== action.removedItem.name : true;
        }),
      };
    case CartEnum.INCREASE_CART_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem: ShoppingItem) => {
          if (action.updatedItem && cartItem.name === action.updatedItem.name) {
            cartItem.quantity += 1;
          }
          return cartItem;
        }),
      };
    case CartEnum.DECREASE_CART_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem: ShoppingItem) => {
          if (action.updatedItem && cartItem.name === action.updatedItem.name) {
            if (cartItem.quantity > 1) {
              cartItem.quantity -= 1;
            } else {
              cartItem.quantity = 1;
            }
          }
          return cartItem;
        }),
      };
    case CartEnum.CLEAR_CART:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default cartReducer;
