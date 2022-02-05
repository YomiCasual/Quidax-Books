import React from "react";
import { QUIDAX_BOOK_COVERS } from "../constants";
import CardRatings from "./components/CardRatings";

const { BloodAndAsh } = QUIDAX_BOOK_COVERS;

const BookThumbnail = () => {
  return (
    <article className="book__thumbnail">
      <div className="book__thumbnail--container">
        <section className="book__thumbnail--cover">
          <img src={BloodAndAsh} alt="book-thumbnail" />
        </section>
        <section className="book__thumbnail--overlay">
          <h5 className="available">Available</h5>
          <div className="book__details">
            <h4>Big Magic</h4>
            <h5>Elizabeth Gilbert</h5>
            <p>2016</p>
          </div>
          <div className="book__details">
            <h5>Genre</h5>
            <p>Motivational</p>
          </div>
          <div className="book__details">
            <h5>Tags</h5>
            <p>Creativity, Better Living</p>
          </div>
          <CardRatings isWhiteIcon />
        </section>
      </div>
    </article>
  );
};

export default BookThumbnail;
