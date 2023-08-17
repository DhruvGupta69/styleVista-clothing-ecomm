import { TOGGLE_CART_HIDDEN, CartActionTypes } from "./types";

export function toggleCartHidden(): CartActionTypes {
  return {
    type: TOGGLE_CART_HIDDEN,
  };
}
