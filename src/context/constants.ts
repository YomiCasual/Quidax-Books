import { CartActions } from "./reducers/actions";

const { INCREASE_QUANTITY } = CartActions;

export const modifyCartQuantity = ({
  payload,
  state,
  type,
}: {
  payload: Record<string, any>;
  state: Record<string, any>;
  type: string;
}) => {
  // Create a duplicate of the cart Items and find the item
  let newCartItems = [...state.cartItems];
  let cartItem = newCartItems.find((item) => item.id === payload);

  // If it is not in cart return
  if (!cartItem) {
    return state;
  }

  const { cartQuantity, available_copies = 1 } = cartItem;

  let newCartQuantity = cartQuantity;

  if (type === INCREASE_QUANTITY) {
    // Ensure the user does not order more than the available copies
    if (newCartQuantity < available_copies) {
      newCartQuantity += 1;
    }
  } else {
    newCartQuantity -= 1;
  }

  cartItem.cartQuantity = newCartQuantity;

  if (newCartQuantity === 0) {
    // Remove from cart once it is zero
    newCartItems = newCartItems.filter((item) => item.id !== payload);
  }

  // Return the new cart items
  return newCartItems;
};
