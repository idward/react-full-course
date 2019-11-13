import { takeEvery, put, call, all } from 'redux-saga/effects';
import { getCollectionsAndDocuments, getDataFromCollections } from '../../firebase';
import { fetchCollectionsSuccess, fetchCollectionsFail } from './index';
import { ShopEnum, ShoppingList } from '../../types';

function* fetchCollectionsAsyn() {
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
}

/**
 * Generator function
 * Effect(Side Effect)
 */
export function* fetchCollectionsStart() {
  yield takeEvery(ShopEnum.FETCH_COLLECTIONS_START, fetchCollectionsAsyn);
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
