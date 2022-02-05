import React from "react";
import { QUIDAX_BOOK_COVERS, QUIDAX_SVGS } from "../constants";

const { ArrowIcon, CartIcon, MinusIcon, PlusIcon } = QUIDAX_SVGS;
const { BloodAndAsh } = QUIDAX_BOOK_COVERS;

const CartDrawer = () => {
  return (
    <div className="cart">
      <div className="cart__overlay"></div>
      <div className="cart__drawer">
        <section className="cart__drawer--header  box-shadow navbar">
          <div className="">
            <ArrowIcon />
            <p>Back</p>
          </div>
          <div>
            <p>Your Cart</p>
            <CartIcon />
          </div>
        </section>
        <section className="cart__drawer--body">
          <div className="cart__card">
            <div className="cart__card--image">
              <img src={BloodAndAsh} alt="cart" />
            </div>
            <div className="cart__card--details">
              <div>
                <h5>The Effecive Engineer</h5>
                <p>Edmond Lau</p>
              </div>
              <button>Remove</button>
            </div>
            <div className="cart__card--pricing">
              <h5 className="single-price">$299.99</h5>
              <div className="quantity">
                <div className="quantity__icon">
                  <MinusIcon />
                </div>
                <p className="quantity__count">2</p>
                <div className="quantity__icon">
                  <PlusIcon />
                </div>
              </div>
              <h5 className="total-price">$599.98</h5>
            </div>
          </div>
        </section>
        <section className="cart__drawer--checkout">
          <div className="checkout__total">
            <h5>Subtotal</h5>
            <h1>$94.76</h1>
          </div>
          <button className="checkout__button ">
            <span>
              <CartIcon />
            </span>
            <span className="checkout__button--text">Proceed to Checkout</span>
          </button>
        </section>
      </div>
    </div>
  );
};

export default CartDrawer;
