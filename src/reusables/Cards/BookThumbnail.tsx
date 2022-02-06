import React from "react";
import { IMappedBook } from "../../apollo/types";
import CardRatings from "./components/CardRatings";

const BookThumbnail = ({ book }: { book: IMappedBook }) => {
  const {
    image_url,
    title,
    available_copies = 0,
    mappedAuthors,
    mappedPublishedDate,
    mappedGenres,
    mappedTags,
    mappedRatings,
  } = book;

  return (
    <article className="book__thumbnail">
      <div className="book__thumbnail--container">
        <section className="book__thumbnail--cover">
          <img src={image_url} alt="book-thumbnail" />
        </section>
        <section className="book__thumbnail--overlay">
          <h5 className="available">
            {available_copies ? "Available" : "Sold Out"}
          </h5>
          <div className="book__details">
            <h4>{title}</h4>
            <h5>{mappedAuthors}</h5>
            <p>{mappedPublishedDate}</p>
          </div>
          <div className="book__details">
            <h5>Genre</h5>
            <p>{mappedGenres}</p>
          </div>
          <div className="book__details">
            <h5>Tags</h5>
            <p>{mappedTags}</p>
          </div>
          <CardRatings isWhiteIcon rating={mappedRatings} />
        </section>
      </div>
    </article>
  );
};

export default BookThumbnail;
