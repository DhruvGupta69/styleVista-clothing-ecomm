import { User } from "./data";

export const SET_CURRENT_USER = "SET_CURRENT_USER";

interface SetCurrentUserAction {
  type: typeof SET_CURRENT_USER;
  payload: User | null;
}

export type UserActionTypes = SetCurrentUserAction;
