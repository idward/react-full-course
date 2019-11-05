import { setCurrentUser } from './user.action';
import {
  toggleCartStatus,
  addCartItem,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
  removeCartItem,
} from './cart.action';
// import { addCollections } from './shop.action';
import {fetchCollectionsAsync} from './shop.action'

export {
  setCurrentUser,
  toggleCartStatus,
  addCartItem,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
  removeCartItem,
  // addCollections,
  fetchCollectionsAsync
};
