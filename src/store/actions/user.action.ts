import {Action} from 'redux'
import { AuthUser, UserEnum } from '../../types';

export interface SetCurrentUserAction extends Action {
    type: UserEnum,
    user: AuthUser
}

/**
 * 增加用户
 * @param user 
 */
export const setCurrentUser = (user: AuthUser): SetCurrentUserAction => {
  return {
    type: UserEnum.SET_CURRENT_USER,
    user,
  };
};

export type UserAction = SetCurrentUserAction;
