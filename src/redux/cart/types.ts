export interface Item {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  size?: string;
}

export interface CartItem {
  item: Item;
  quantity: number;
}

export interface CartState {
  hidden: boolean;
  cartItems: Array<CartItem>;
}
interface ToggleCartHidden {
  type: typeof TOGGLE_CART_HIDDEN;
}

interface AddItem {
  type: typeof ADD_ITEM;
  payload: Item;
}

export const TOGGLE_CART_HIDDEN = "TOGGLE_CART_HIDDEN";
export const ADD_ITEM = "ADD_ITEM";

export type CartActionTypes = ToggleCartHidden | AddItem;
