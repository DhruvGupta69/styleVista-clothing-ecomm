import { Item } from "../cart/types";

export interface Collection {
  id: number;
  title: string;
  routeName: string;
  items: Array<Item>;
}

export interface ShopState {
  collections: Array<Collection>;
}

export interface DefaultAction {
  type: string;
}

export type ShopActionTypes = DefaultAction;
