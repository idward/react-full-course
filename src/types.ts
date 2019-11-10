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
  GOOGLE_SIGN_IN_SUCCESS = 'GOOGLE_SIGN_IN_SUCCESS',
  GOOGLE_SIGN_IN_FAIL = 'GOOGLE_SIGN_IN_FAIL',
  EMAIL_SIGN_IN_START = 'EMAIL_SIGN_IN_START',
  EMAIL_SIGN_IN_SUCCESS = 'EMAIL_SIGN_IN_SUCCESS',
  EMAIL_SIGN_IN_FAIL = 'EMAIL_SIGN_IN_FAIL',
}

export enum CartEnum {
  TOGGLE_CART_STATUS = 'TOGGLE_CART_STATUS',
  ADD_CART_ITEM = 'ADD_CART_ITEM',
  REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
  INCREASE_CART_ITEM_QUANTITY = 'INCREASE_CART_ITEM_QUANTITY',
  DECREASE_CART_ITEM_QUANTITY = 'DECREASE_CART_ITEM_QUANTITY',
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
