import { Reducer } from 'redux';
import { AuthUser, UserEnum } from '../../types';
import { UserAction } from '../actions/user.action';

export interface UserState {
  currentUser?: AuthUser | null;
  error?: string;
}

const initialState: UserState = {
  currentUser: null,
  error: '',
};

const userReducer: Reducer<UserState, UserAction> = (state = initialState, action): UserState => {
  switch (action.type) {
    case UserEnum.GOOGLE_SIGN_IN_START:
    case UserEnum.EMAIL_SIGN_IN_START:
      return {
        ...initialState,
      };
    case UserEnum.GOOGLE_SIGN_IN_SUCCESS:
    case UserEnum.EMAIL_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.user,
      };
    case UserEnum.GOOGLE_SIGN_IN_FAIL:
    case UserEnum.EMAIL_SIGN_IN_FAIL:
      return {
        ...state,
        currentUser: null,
        error: action.error,
      };
    default:
      return state;
  }
};

export default userReducer;
