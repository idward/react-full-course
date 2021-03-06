import { AnyAction } from 'redux';
import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import { ShoppingList, ShopEnum } from '../../types';
import { getCollectionsAndDocuments, getDataFromCollections } from '../../firebase';

// interface AddCollectionsAction extends Action {
//   type: ShopEnum;
//   collections: ShoppingList[];
// }

// export const addCollections = (collections: ShoppingList[]): ShopAction => {
//   return {
//     type: ShopEnum.ADD_COLLECTIONS,
//     collections,
//   };
// };

export interface FetchCollectionsStartAction extends AnyAction {
  type: ShopEnum;
}

export interface FetchCollectionsSuccessAction extends AnyAction {
  type: ShopEnum;
  collections: ShoppingList[];
}

export interface FetchCollectionsFailAction extends AnyAction {
  type: ShopEnum;
  errorMsg: string;
}

export const fetchCollectionsStart = (): ShopAction => {
  return {
    type: ShopEnum.FETCH_COLLECTIONS_START,
  };
};

export const fetchCollectionsSuccess = (collections: ShoppingList[]): ShopAction => {
  return {
    type: ShopEnum.FETCH_COLLECTIONS_SUCCESS,
    collections,
  };
};

export const fetchCollectionsFail = (errorMsg: string): ShopAction => {
  return {
    type: ShopEnum.FETCH_COLLECTIONS_FAILED,
    errorMsg,
  };
};

/**
 * redux thunk
 */
export const fetchCollectionsAsync = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
): Promise<void> => {
  // fetch collections start
  await dispatch(fetchCollectionsStart());
  const collectionRef = getCollectionsAndDocuments();
  try {
    // fetch collections success
    const snapshot = await collectionRef.get();
    const collections = getDataFromCollections(snapshot);
    console.log('collections: ', collections);
    collections.sort((a: ShoppingList, b: ShoppingList) => a.title.localeCompare(b.title));
    await dispatch(fetchCollectionsSuccess(collections));
  } catch (error) {
    // fetch collections failed
    await dispatch(fetchCollectionsFail(error.message));
  }
};

export type ShopAction =
  | FetchCollectionsStartAction
  | FetchCollectionsSuccessAction
  | FetchCollectionsFailAction;
