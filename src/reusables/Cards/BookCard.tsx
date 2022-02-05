import React from "react";
import { QUIDAX_BOOK_COVERS } from "..";
import { QUIDAX_SVGS } from "../constants";
import CardRatings from "./components/CardRatings";

const { CartIcon } = QUIDAX_SVGS;
const { BloodAndAsh } = QUIDAX_BOOK_COVERS;

const BookCard = () => {
  return (
    <article className="book__card">
      <section className="book__card--image">
        <img src={BloodAndAsh} alt="book-cover" />
      </section>
      <section className="book__card--details">
        <div>
          <h5 className="title">The Effective Engineer</h5>
          <p>Edmond Lau - 2009</p>
          <p>Motivational</p>
        </div>
        <CardRatings />
        <div className="details__flex">
          <p>$29.99</p>
          <p className="copies">23 Copies Available</p>
        </div>
        <div className="details__flex">
          <CartIcon />
          <h5 className="add-to-cart">Add to Cart</h5>
        </div>
      </section>
    </article>
  );
};

export default BookCard;
