import React from "react";
import clsx from "clsx";
import useGlobalStoreProvider from "../../context";
import { CartActions } from "../../context/reducers";
import { getCartTotal } from "../../utils";
import { CartItem, CheckoutButton } from "../";
import { BackButton } from "../Buttons";
import { IMappedBook } from "../../apollo/types";
import CartButton from "./components/CartButton";
import AppState from "../AppState";

const { TOGGLE_CART } = CartActions;

const CartDrawer = () => {
  const {
    store: {
      cart: { showCart = true, cartItems = [] },
    },
    dispatch,
  } = useGlobalStoreProvider();

  const toggleCart = () => dispatch({ type: TOGGLE_CART });

  const total = getCartTotal(cartItems);

  return (
    <div className="cart">
      <div
        onClick={toggleCart}
        className={clsx("cart__overlay", showCart && "show")}
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
            <CheckoutButton label="Proceed to Checkout" />
          </section>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
