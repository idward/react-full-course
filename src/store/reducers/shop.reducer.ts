import { Reducer } from 'redux';
import { ShopAction } from '../actions/shop.action';
import { ShoppingList, ShopEnum } from '../../types';

export interface ShopState {
  collections?: ShoppingList[];
  isFetching?: boolean;
  errorMsg?: string;
}

const initialState: ShopState = {
  collections: [],
  isFetching: false,
  errorMsg: '',
};

// const shopReducer: Reducer<ShopState, any> = (state = initialState, action: ShopAction) => {
//   switch (action.type) {
//     case ShopEnum.ADD_COLLECTIONS:
//       return { ...state, collections: action.collections };
//     default:
//       return state;
//   }
// };

/**
 * For redux thunk
 * @param state
 * @param action
 */
const shopReducer: Reducer<ShopState, ShopAction> = (state = initialState, action: ShopAction) => {
  switch (action.type) {
    case ShopEnum.FETCH_COLLECTIONS_START:
      return { ...initialState, isFetching: true };
    case ShopEnum.FETCH_COLLECTIONS_SUCCESS:
      return { ...state, isFetching: false, collections: action.collections };
    case ShopEnum.FETCH_COLLECTIONS_FAILED:
      return { ...state, isFetching: false, errorMsg: action.errorMsg };
    default:
      return state;
  }
};

export default shopReducer;
