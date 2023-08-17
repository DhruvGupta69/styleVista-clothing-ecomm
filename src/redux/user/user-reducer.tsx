import UserState from "./state";
import { SET_CURRENT_USER, UserActionTypes } from "./types";

const INITIAL_STATE: UserState = {
  currentUser: null,
};

const userReducer = (
  state = INITIAL_STATE,
  action: UserActionTypes
): UserState => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
