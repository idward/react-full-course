import { takeLatest, all, call, put } from 'redux-saga/effects';
import { auth, provider, createUserProfileDocument } from '../../firebase';
import { googleSignInSuccess, googleSignInFail, emailSignInSuccess } from './index';
import { UserAction, emailSignInFail } from './user.action';
import { UserEnum, AuthUser } from '../../types';

function* googleSignInAsync() {
  try {
    const authInfo = yield auth.signInWithPopup(provider);
    const userRef = yield createUserProfileDocument(authInfo.user);
    const snapshot = yield userRef.get();
    const { displayName, email, createdAt } = snapshot.data() as AuthUser;
    const authUser: AuthUser = {
      uid: snapshot.id,
      displayName,
      email,
      createdAt,
    };
    yield put(googleSignInSuccess(authUser));
  } catch (error) {
    yield put(googleSignInFail(error.message));
  }
}

export function* googleSignInStart() {
  yield takeLatest(UserEnum.GOOGLE_SIGN_IN_START, googleSignInAsync);
}

function* emailSignInAsync(action: UserAction) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(action.email, action.password);
    const userRef = yield createUserProfileDocument(user);
    const snapshot = yield userRef.get();
    const { displayName, email, createdAt } = snapshot.data() as AuthUser;
    const authUser: AuthUser = {
      uid: snapshot.id,
      displayName,
      email,
      createdAt,
    };
    yield put(emailSignInSuccess(authUser));
  } catch (error) {
    yield put(emailSignInFail(error.message));
  }
}

export function* emailSignInStart() {
  yield takeLatest(UserEnum.EMAIL_SIGN_IN_START, emailSignInAsync);
}

export function* userSagas() {
  yield all([call(googleSignInStart), call(emailSignInStart)]);
}
