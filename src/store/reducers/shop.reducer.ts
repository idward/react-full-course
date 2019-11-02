import { Reducer } from 'redux';
import { ShoppingList } from 'src/types';
import SHOP_DATA from '../../data';

export interface ShopState {
  collections: ShoppingList[];
}

const initialState: ShopState = {
  collections: SHOP_DATA,
};

const shopReducer: Reducer<ShopState, any> = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
