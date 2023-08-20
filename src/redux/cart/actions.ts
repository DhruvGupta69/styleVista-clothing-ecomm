import {
  TOGGLE_CART_HIDDEN,
  CartActionTypes,
  ADD_ITEM,
  Item,
  CartItem,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM,
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

export function removeItem(item: Item): CartActionTypes {
  return {
    type: REMOVE_ITEM,
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

export function removeItemFromCart(
  cartItems: Array<CartItem>,
  itemToRemove: Item
): Array<CartItem> {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.item.id === itemToRemove.id
  );

  if (existingCartItem?.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.item.id !== itemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.item.id === itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
}

export function clearItemFromCart(item: Item): CartActionTypes {
  return {
    type: CLEAR_ITEM_FROM_CART,
    payload: item,
  };
}
