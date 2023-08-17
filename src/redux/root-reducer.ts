import { combineReducers } from "redux";
import userReducer from "./user/user-reducer";
import cartReducer from "./cart/reducer";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
