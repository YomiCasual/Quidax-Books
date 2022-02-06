import { getCartTotal } from "../../utils";
import { modifyCartQuantity } from "../constants";
import { ActionType, CartStateType } from "../types";
import { CartActions } from "./actions";

export const cartInitialState = {
  showCart: false,
  cartItems: [],
};

const {
  TOGGLE_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  REDUCE_QUANTITY,
} = CartActions;

export function CartReducer(state: CartStateType, action: ActionType) {
  const { type, payload } = action;

  switch (type) {
    case TOGGLE_CART: {
      return { ...state, showCart: !state.showCart };
    }
    case ADD_TO_CART: {
      // Check if it is already in cart
      const inCart =
        state.cartItems.filter((item) => item.id === payload.id).length > 0;

      // If it is in cart, increase the number of items in cart
      if (inCart) {
        const newCartItems = modifyCartQuantity({
          payload: payload.id,
          state,
          type: INCREASE_QUANTITY,
        });

        return {
          ...state,
          showCart: true,
          cartItems: newCartItems,
        };
      }

      // Else add to cart
      const newCartItems = [...state.cartItems, payload];

      return {
        ...state,
        showCart: true,
        cartItems: newCartItems,
      };
    }
    case REMOVE_FROM_CART: {
      // Filter item that does not have the id as the item selected and return
      const filteredCartItems = state.cartItems.filter(
        (item) => item.id !== payload
      );
      const total = getCartTotal(filteredCartItems);

      return { ...state, cartItems: filteredCartItems, total };
    }

    // Hand for both reduce and increasing quantity
    case INCREASE_QUANTITY:
    case REDUCE_QUANTITY: {
      // Ensure that there is id
      if (!payload) {
        return state;
      }

      // Get the new Cart items
      const newCartItems = modifyCartQuantity({ payload, state, type });

      return {
        ...state,
        showCart: true,
        cartItems: newCartItems,
      };
    }
    default: {
      return state;
    }
  }
}
