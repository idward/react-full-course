import { AnyAction } from 'redux';
import { AuthUser, UserEnum } from '../../types';

export interface UserAction extends AnyAction {
  type: UserEnum;
}

/**
 * 增加用户
 * @param user
 */
export const setCurrentUser = (user: AuthUser): UserAction => {
  return {
    type: UserEnum.SET_CURRENT_USER,
    user,
  };
};

export const googleSignInStart = (): UserAction => {
  return {
    type: UserEnum.GOOGLE_SIGN_IN_START,
  };
};

export const signInSuccess = (user: AuthUser): UserAction => {
  return {
    type: UserEnum.SIGN_IN_SUCCESS,
    user,
  };
};

export const signInFail = (error: string): UserAction => {
  return {
    type: UserEnum.SIGN_IN_FAIL,
    error,
  };
};

export const emailSignInStart = (email: string, password: string): UserAction => {
  return {
    type: UserEnum.EMAIL_SIGN_IN_START,
    email,
    password,
  };
};

export const checkUserSession = (): UserAction => {
  return {
    type: UserEnum.CHECK_USER_SESSION,
  };
};

export const signOutStart = (): UserAction => {
  return {
    type: UserEnum.SIGN_OUT_START,
  };
};

export const signOutSuccess = (): UserAction => {
  return {
    type: UserEnum.SIGN_OUT_SUCCESS,
  };
};

export const signOutFail = (error: string): UserAction => {
  return {
    type: UserEnum.SIGN_OUT_FAIL,
    error,
  };
};

export const signupStart = (email: string, password: string, displayName: string): UserAction => {
  return {
    type: UserEnum.SIGN_UP_START,
    email,
    password,
    displayName,
  };
};
