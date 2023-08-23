import SHOP_DATA from "./shop.data";
import { ShopActionTypes, ShopState } from "./types";

const INITIAL_STATE: ShopState = {
  collections: SHOP_DATA,
};

const shopReducer = (state = INITIAL_STATE, action: ShopActionTypes) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
