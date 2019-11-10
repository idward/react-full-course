import {
  setCurrentUser,
  googleSignInStart,
  googleSignInSuccess,
  googleSignInFail,
  emailSignInStart,
  emailSignInSuccess,
  emailSignInFail,
} from './user.action';
import {
  toggleCartStatus,
  addCartItem,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
  removeCartItem,
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
  // addCollections,
  fetchCollectionsAsync,
  fetchCollectionsStart,
  fetchCollectionsSuccess,
  fetchCollectionsFail,
  googleSignInStart,
  googleSignInSuccess,
  googleSignInFail,
  emailSignInStart,
  emailSignInSuccess,
  emailSignInFail,
};
