import React from "react";
import { QUIDAX_SVGS } from "../constants";

const { QuidaxLogo, SearchIcon, BooksIcon, CartIcon } = QUIDAX_SVGS;

const Navbar = () => {
  return (
    <article className="box-shadow navbar__container">
      <div className="max-width navbar">
        <div className="navbar__logo">
          <QuidaxLogo />
        </div>
        <div className="search__input">
          <input type="text" placeholder="Search books, genres, authors etc." />
          <div className="search__input--icon">
            <SearchIcon />
          </div>
        </div>
        <div className="navbar__icons">
          <div className="navbar__icons--books">
            <div className="book__icon">
              <BooksIcon />
            </div>
          </div>
          <div className="navbar__icons--books">
            <div className="cart__icon">
              <CartIcon />
            </div>
            <div className="badge badge-success">
              <p>3</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Navbar;
