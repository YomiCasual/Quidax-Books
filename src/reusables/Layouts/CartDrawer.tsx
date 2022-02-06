import clsx from "clsx";

// Custom Imports
import { CartButton, CheckoutModal } from "./components/";
import { CartItem, CheckoutButton } from "../";
import AppState from "../AppState";
import { BackButton } from "../Buttons";
import { IMappedBook } from "../../apollo/types";
import useGlobalStoreProvider from "../../context";
import { CartActions } from "../../context/reducers";
import { useToggle } from "../../hooks";
import { getCartTotal } from "../../utils";

// Constants
const { TOGGLE_CART, CHECKOUT_CART } = CartActions;

const CartDrawer = () => {
  //Global store
  const {
    store: {
      cart: { showCart = true, cartItems = [] },
    },
    dispatch,
  } = useGlobalStoreProvider();

  // Toggle checkout modal
  const [openModal, toggleModal] = useToggle();

  // Dispatch Actions
  const toggleCart = () => dispatch({ type: TOGGLE_CART });

  const checkoutCart = () => {
    dispatch({ type: CHECKOUT_CART });
    toggleModal();
  };

  // Calculate cart total
  const total = getCartTotal(cartItems);

  return (
    <div className="cart">
      <div
        onClick={toggleCart}
        className={clsx("bg__overlay", showCart && "show")}
      ></div>
      <div className={clsx("cart__drawer", showCart && "show")}>
        <section className="cart__drawer--header  box-shadow navbar">
          <BackButton label="Back" onClick={toggleCart} />
          <div>
            <p>Your Cart</p>
            <CartButton />
          </div>
        </section>
        <section className="cart__drawer--body">
          {!cartItems.length ? (
            <AppState text="No Item in cart" />
          ) : (
            cartItems.map((item: IMappedBook, index: number) => (
              <CartItem key={index} item={item} />
            ))
          )}
        </section>
        {!!cartItems.length && (
          <section className="cart__drawer--checkout">
            <div className="checkout__total">
              <h5>Subtotal</h5>
              <h1>${total.toFixed(2)}</h1>
            </div>
            <CheckoutButton
              onClick={checkoutCart}
              label="Proceed to Checkout"
            />
          </section>
        )}
      </div>
      {openModal && <CheckoutModal handleClose={toggleModal} />}
    </div>
  );
};

export default CartDrawer;
