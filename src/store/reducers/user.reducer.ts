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
    case UserEnum.SIGN_OUT_SUCCESS:
      return {
        ...initialState,
      };
    case UserEnum.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.user,
      };
    case UserEnum.SIGN_IN_FAIL:
      return {
        ...state,
        currentUser: null,
        error: action.error,
      };
    case UserEnum.SIGN_OUT_FAIL:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default userReducer;
