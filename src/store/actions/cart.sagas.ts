import { takeLatest, put, call, all } from 'redux-saga/effects';
import { UserEnum } from '../../types';
import { clearCart } from './index';

function* clearSagaOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserEnum.SIGN_OUT_SUCCESS, clearSagaOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
