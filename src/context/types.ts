import { IMappedBook } from "../apollo/types";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type CartStateType = {
  showCart: boolean;
  cartItems: IMappedBook[];
  itemsInCart: 0;
  total: 0;
};

export type BookStateType = {
  books: IMappedBook[];
};

export type ActionType = {
  type: string;
  payload?: any;
};
