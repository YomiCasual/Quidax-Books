import React from "react";
import { IMappedBook } from "../../../apollo/types";
import CardRatings from "../../../reusables/Cards/components/CardRatings";
import { DETAILS_HEADER } from "../constants";

const BookSummary = ({ book }: { book: IMappedBook }) => {
  const {
    title,
    mappedRatings,
    mappedAuthors,
    mappedReleaseDate,
    full_description,
  } = book;
  return (
    <article className="book__summary">
      <section className="book__summary--header">
        <h1>{title}</h1>
        <h5 className="name">{mappedAuthors}</h5>
        <h5 className="font-normal">{mappedReleaseDate}</h5>
      </section>
      <section>
        <div className="book__summary--subheader">
          <CardRatings rating={mappedRatings} />
          {DETAILS_HEADER.map(({ label, key }) => (
            <div className="book__details" key={label}>
              <h5>{label}</h5>
              <p className="small-space">{book[key]}</p>
            </div>
          ))}
        </div>
        <p className="book__summary--body">{full_description}</p>
      </section>
    </article>
  );
};

export default BookSummary;
