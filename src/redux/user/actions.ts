import { User } from "./types";
import { SET_CURRENT_USER, UserActionTypes } from "./types";

export function setCurrentUser(newUser: User | null): UserActionTypes {
  return {
    type: SET_CURRENT_USER,
    payload: newUser,
  };
}
