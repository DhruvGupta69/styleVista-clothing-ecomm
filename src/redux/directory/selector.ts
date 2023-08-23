import { createSelector } from "reselect";
import { RootState } from "../root-reducer";

const selectDirectory = (state: RootState) => state.directory;

export const selectDirectorySelctions = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
