import React from "react";
import { IMappedBook } from "../../apollo/types";
import useGlobalStoreProvider from "../../context";
import { CartActions } from "../../context/reducers";
import { QUIDAX_SVGS } from "../constants";
import CardRatings from "./components/CardRatings";

const { CartIcon } = QUIDAX_SVGS;

const { ADD_TO_CART } = CartActions;

const BookCard = ({ book }: { book: IMappedBook }) => {
  const { dispatch } = useGlobalStoreProvider();

  const {
    image_url,
    title,
    price,
    available_copies = 0,
    mappedGenres,
    mappedAuthors,
    mappedRatings,
    mappedPublishedDate,
  } = book;

  const addToCart = () => {
    dispatch({ type: ADD_TO_CART, payload: book });
  };

  return (
    <article className="book__card">
      <section className="book__card--image">
        <img src={image_url} alt={title} />
      </section>
      <section className="book__card--details">
        <div>
          <h5 className="title">{title}</h5>
          <p>
            {mappedAuthors} - {mappedPublishedDate}
          </p>
          <p className="small-space">{mappedGenres}</p>
        </div>
        <CardRatings rating={mappedRatings} />
        <div className="details__flex">
          <p>${price}</p>
          <p className="copies">{available_copies} Copies Available</p>
        </div>
        {!!available_copies && (
          <div onClick={addToCart} className="details__flex">
            <CartIcon />
            <h5 className="add-to-cart">Add to Cart</h5>
          </div>
        )}
      </section>
    </article>
  );
};

export default BookCard;
