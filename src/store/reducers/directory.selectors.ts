import { createSelector } from 'reselect';
import { ApplicationState } from './index';
import { DirectoryState } from './directory.reducer';

const selectDirectory = (state: ApplicationState) => state.directory;

export const selectDirectoryItems = createSelector(
  [selectDirectory],
  (directory: DirectoryState) => directory.sections,
);
