import {
  TOGGLE_CART_HIDDEN,
  CartActionTypes,
  ADD_ITEM,
  Item,
  CartItem,
} from "./types";

export function toggleCartHidden(): CartActionTypes {
  return {
    type: TOGGLE_CART_HIDDEN,
  };
}

export function addItem(item: Item): CartActionTypes {
  return {
    type: ADD_ITEM,
    payload: item,
  };
}

export function addItemToCart(
  cartItems: Array<CartItem>,
  itemToAdd: Item
): Array<CartItem> {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.item.id === itemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.item.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { item: itemToAdd, quantity: 1 }];
}
