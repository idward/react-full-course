import { Action } from 'redux';
import { ShoppingList, ShopEnum } from '../../types';

interface AddCollectionsAction extends Action {
  type: ShopEnum;
  collections: ShoppingList[];
}

export const addCollections = (collections: ShoppingList[]): ShopAction => {
  return {
    type: ShopEnum.ADD_COLLECTIONS,
    collections,
  };
};

export type ShopAction = AddCollectionsAction;
