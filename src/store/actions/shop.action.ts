import { Action, Dispatch } from 'redux';
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

export interface FetchCollectionsStartAction extends Action {
  type: ShopEnum;
}

export interface FetchCollectionsSuccessAction extends Action {
  type: ShopEnum;
  collections: ShoppingList[];
}

export interface FetchCollectionsFailAction extends Action {
  type: ShopEnum;
  errorMsg: string;
}

const fetchCollectionsStart = (): ShopAction => {
  return {
    type: ShopEnum.FETCH_COLLECTIONS_START,
  };
};

const fetchCollectionsSuccess = (collections: ShoppingList[]): ShopAction => {
  return {
    type: ShopEnum.FETCH_COLLECTIONS_SUCCESS,
    collections,
  };
};

const fetchCollectionsFail = (errorMsg: string): ShopAction => {
  return {
    type: ShopEnum.FETCH_COLLECTIONS_FAILED,
    errorMsg,
  };
};

export const fetchCollectionsAsync = () => (dispatch: Dispatch<ShopAction>) => {
  // fetch collections start
  dispatch(fetchCollectionsStart());
  const collectionRef = getCollectionsAndDocuments();
  collectionRef
    .get()
    .then((snapshot: any) => {
      // fetch collections success
      const collections = getDataFromCollections(snapshot);
      console.log('collections: ', collections);
      collections.sort((a: ShoppingList, b: ShoppingList) => a.title.localeCompare(b.title));
      dispatch(fetchCollectionsSuccess(collections));
    })
    .catch((error: any) => {
      // fetch collections failed
      dispatch(fetchCollectionsFail(error.message));
    });
};

export type ShopAction = FetchCollectionsStartAction | FetchCollectionsSuccessAction | FetchCollectionsFailAction;
