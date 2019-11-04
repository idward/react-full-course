import { Reducer } from 'redux';
import { ShopAction } from '../actions/shop.action';
import { ShoppingList, ShopEnum } from '../../types';

export interface ShopState {
  collections: ShoppingList[];
}

const initialState: ShopState = {
  collections: [],
};

const shopReducer: Reducer<ShopState, any> = (state = initialState, action: ShopAction) => {
  switch (action.type) {
    case ShopEnum.ADD_COLLECTIONS:
      return { ...state, collections: action.collections };
    default:
      return state;
  }
};

export default shopReducer;
