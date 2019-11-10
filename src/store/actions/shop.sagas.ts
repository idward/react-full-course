import { takeEvery, put } from 'redux-saga/effects';
import { getCollectionsAndDocuments, getDataFromCollections } from '../../firebase';
import { fetchCollectionsSuccess, fetchCollectionsFail } from './index';
import { ShopEnum, ShoppingList } from '../../types';

const fetchCollectionsAsyn = function* fetchCollectionsAsyn() {
  yield console.log('I am fired');
  const collectionRef = getCollectionsAndDocuments();
  try {
    // fetch collections success
    const snapshot = yield collectionRef.get();
    const collections = getDataFromCollections(snapshot);
    console.log('collections: ', collections);
    collections.sort((a: ShoppingList, b: ShoppingList) => a.title.localeCompare(b.title));
    yield put(fetchCollectionsSuccess(collections));
  } catch (error) {
    // fetch collections failed
    yield put(fetchCollectionsFail(error.message));
  }
};

/**
 * Generator function
 * Effect(Side Effect)
 */
export const fetchCollectionsStart = function* fetchCollectionsStart() {
  yield takeEvery(ShopEnum.FETCH_COLLECTIONS_START, fetchCollectionsAsyn);
};
