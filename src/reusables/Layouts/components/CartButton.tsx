// Custom Imports
import { QUIDAX_SVGS } from "../../constants";
import useGlobalStoreProvider from "../../../context";
import { CartActions } from "../../../context/reducers";

// Contants
const { CartIcon } = QUIDAX_SVGS;
const { TOGGLE_CART } = CartActions;

const CartButton = ({ canToggle = false }: { canToggle?: boolean }) => {
  const {
    store: {
      cart: { cartItems = [] },
    },
    dispatch,
  } = useGlobalStoreProvider();

  // Dispatch Action
  const toggleCart = () => dispatch({ type: TOGGLE_CART });
  return (
    <div className="cart__button" onClick={() => canToggle && toggleCart()}>
      <div className="cart__icon">
        <CartIcon />
      </div>
      <div className="badge badge-success">
        <p>{cartItems.length}</p>
      </div>
    </div>
  );
};

export default CartButton;
