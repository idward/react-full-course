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

export const googleSignInSuccess = (user: AuthUser): UserAction => {
  return {
    type: UserEnum.GOOGLE_SIGN_IN_SUCCESS,
    user,
  };
};

export const googleSignInFail = (error: string): UserAction => {
  return {
    type: UserEnum.GOOGLE_SIGN_IN_FAIL,
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

export const emailSignInSuccess = (user: AuthUser): UserAction => {
  return {
    type: UserEnum.EMAIL_SIGN_IN_SUCCESS,
    user,
  };
};

export const emailSignInFail = (error: string) => {
  return {
    type: UserEnum.EMAIL_SIGN_IN_FAIL,
    error,
  };
};
