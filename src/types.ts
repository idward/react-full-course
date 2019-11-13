export interface ShoppingList {
  id?: number;
  title: string;
  routeName: string;
  items: ShoppingItem[];
}

export interface ShoppingItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
}

export interface DirectoryItem {
  id: number;
  title: string;
  imageUrl: string;
  linkUrl: string;
  size?: string;
}

export interface AuthUser {
  uid: string;
  displayName: string;
  email: string;
  createdAt: Date;
}

export enum UserEnum {
  SET_CURRENT_USER = 'SET_CURRENT_USER',
  GOOGLE_SIGN_IN_START = 'GOOGLE_SIGN_IN_START',
  EMAIL_SIGN_IN_START = 'EMAIL_SIGN_IN_START',
  SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
  SIGN_IN_FAIL = 'SIGN_IN_FAIL',
  CHECK_USER_SESSION = 'CHECK_USER_SESSION',
  SIGN_OUT_START = 'SIGN_OUT_START',
  SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS',
  SIGN_OUT_FAIL = 'SIGN_OUT_FAIL',
  SIGN_UP_START = 'SIGN_UP_START',
  SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS',
  SIGN_UP_FAIL = 'SIGN_UP_FAIL'
}

export enum CartEnum {
  TOGGLE_CART_STATUS = 'TOGGLE_CART_STATUS',
  ADD_CART_ITEM = 'ADD_CART_ITEM',
  REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
  INCREASE_CART_ITEM_QUANTITY = 'INCREASE_CART_ITEM_QUANTITY',
  DECREASE_CART_ITEM_QUANTITY = 'DECREASE_CART_ITEM_QUANTITY',
  CLEAR_CART = 'CLEAR_CART'
}

// export enum ShopEnum {
//   ADD_COLLECTIONS = 'ADD_COLLECTIONS'
// }

/**
 * For redux thunk
 */
export enum ShopEnum {
  FETCH_COLLECTIONS_START = 'FETCH_COLLECTIONS_START',
  FETCH_COLLECTIONS_SUCCESS = 'FETCH_COLLECTIONS_SUCCESS',
  FETCH_COLLECTIONS_FAILED = 'FETCH_COLLECTIONS_FAILED',
}
