import { createSelector } from 'reselect';
import { ApplicationState } from './index';
import { UserState } from './user.reducer';

const selectUser = (state: ApplicationState) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user: UserState) => user.currentUser,
);
