import { createSelector } from 'reselect';
import { ApplicationState } from './index';
import { ShopState } from './shop.reducer';
import { ShoppingList } from '../../types';

const selectShop = (state: ApplicationState) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop: ShopState) => shop.collections,
);

export const selectCollection = (collectionName: string) => {
  return createSelector(
    [selectCollections],
    (collections: ShoppingList[]) =>
      collections.find((collection: ShoppingList) => collection.routeName === collectionName),
  );
};

export const selectIsFetching = createSelector(
  [selectShop],
  (shop: ShopState) => shop.isFetching,
);
