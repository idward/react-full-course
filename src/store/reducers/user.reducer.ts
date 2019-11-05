import { Reducer } from 'redux';
import { AuthUser, UserEnum } from '../../types';
import { UserAction } from '../actions/user.action';

export interface UserState {
  currentUser: AuthUser | null;
}

const initialState: UserState = {
  currentUser: null,
};

const userReducer: Reducer<UserState, UserAction> = (state = initialState, action): UserState => {
  switch (action.type) {
    case UserEnum.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.user,
      };
    default:
      return state;
  }
};

export default userReducer;
