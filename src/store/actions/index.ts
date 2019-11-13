import {
  setCurrentUser,
  googleSignInStart,
  emailSignInStart,
  signInSuccess,
  signInFail,
  checkUserSession,
  signOutStart,
  signOutSuccess,
  signOutFail,
  signupStart,
} from './user.action';
import {
  toggleCartStatus,
  addCartItem,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
  removeCartItem,
  clearCart,
} from './cart.action';
// import { addCollections } from './shop.action';
import {
  fetchCollectionsAsync,
  fetchCollectionsStart,
  fetchCollectionsSuccess,
  fetchCollectionsFail,
} from './shop.action';

export {
  setCurrentUser,
  toggleCartStatus,
  addCartItem,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
  removeCartItem,
  clearCart,
  // addCollections,
  fetchCollectionsAsync,
  fetchCollectionsStart,
  fetchCollectionsSuccess,
  fetchCollectionsFail,
  googleSignInStart,
  emailSignInStart,
  signInSuccess,
  signInFail,
  checkUserSession,
  signOutStart,
  signOutSuccess,
  signOutFail,
  signupStart,
};
