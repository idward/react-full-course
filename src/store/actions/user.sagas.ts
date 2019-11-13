import { takeLatest, all, call, put } from 'redux-saga/effects';
import {
  auth,
  provider,
  createUserProfileDocument,
  getAuthUser as getAuthenticatedUser,
} from '../../firebase';
import { signInSuccess, signInFail, signOutSuccess, signOutFail } from './index';
import { UserAction } from './user.action';
import { UserEnum, AuthUser } from '../../types';

function* getAuthUser(user: any, additionalData?: any) {
  const userRef = yield createUserProfileDocument(user, additionalData);
  const snapshot = yield userRef.get();
  const { displayName, email, createdAt } = snapshot.data() as AuthUser;
  const authUser: AuthUser = {
    uid: snapshot.id,
    displayName,
    email,
    createdAt,
  };
  return authUser;
}

function* googleSignInAsync() {
  try {
    const { user } = yield auth.signInWithPopup(provider);
    const authUser = yield call(getAuthUser, user);
    yield put(signInSuccess(authUser));
  } catch (error) {
    yield put(signInFail(error.message));
  }
}

export function* googleSignInStart() {
  yield takeLatest(UserEnum.GOOGLE_SIGN_IN_START, googleSignInAsync);
}

function* emailSignInAsync(action: UserAction) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(action.email, action.password);
    const authUser = yield call(getAuthUser, user);
    yield put(signInSuccess(authUser));
  } catch (error) {
    yield put(signInFail(error.message));
  }
}

export function* emailSignInStart() {
  yield takeLatest(UserEnum.EMAIL_SIGN_IN_START, emailSignInAsync);
}

function* isUserAuthAsync() {
  let authUser = null;
  try {
    const user = yield getAuthenticatedUser();
    if (user) {
      authUser = yield call(getAuthUser, user);
    }
    yield put(signInSuccess(authUser));
  } catch (error) {
    yield put(signInFail(error.message));
  }
}

export function* checkUserAuth() {
  yield takeLatest(UserEnum.CHECK_USER_SESSION, isUserAuthAsync);
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFail(error.message));
  }
}

export function* userSignOut() {
  yield takeLatest(UserEnum.SIGN_OUT_START, signOut);
}

function* signUpAsync(action: UserAction) {
  yield console.log('action', action);
  const { email, password, displayName } = action;
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    const authUser = yield call(getAuthUser, user, { displayName });
    yield put(signInSuccess(authUser));
  } catch (error) {
    yield put(signInFail(error.message));
  }
}

export function* signUpStart() {
  yield takeLatest(UserEnum.SIGN_UP_START, signUpAsync);
}

export function* userSagas() {
  yield all([
    call(googleSignInStart),
    call(emailSignInStart),
    call(signUpStart),
    call(checkUserAuth),
    call(userSignOut),
  ]);
}
