import { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

// Custom Imports
import { CartButton, HeaderSearch } from "./components";
import { QUIDAX_SVGS } from "../constants";
import APP_ROUTES from "../../router/constants";

// Constants
const { QuidaxLogo, BooksIcon, SearchIcon } = QUIDAX_SVGS;

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => setShowSearch(!showSearch);

  return (
    <article className="box-shadow navbar__container">
      <div className={clsx("bg__overlay", showSearch && "show")}></div>
      <div className="max-width navbar">
        <div className="navbar__logo">
          <Link to={APP_ROUTES.HOME}>
            <QuidaxLogo />
          </Link>
        </div>
        <HeaderSearch showSearch={showSearch} toggleSearch={toggleSearch} />
        <div className="navbar__icons">
          <div className="navbar__icons--books">
            <div className="search__icon">
              <SearchIcon onClick={toggleSearch} />
            </div>
          </div>
          <div className="navbar__icons--books">
            <div className="book__icon">
              <BooksIcon />
            </div>
          </div>
          <CartButton canToggle />
        </div>
      </div>
    </article>
  );
};

export default Navbar;
