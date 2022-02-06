import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";
import clsx from "clsx";

import { SEARCH_BOOKS } from "../../../apollo/queries";
import { QUIDAX_SVGS } from "../../constants";
import useGlobalStoreProvider from "../../../context";
import { SearchBookActions } from "../../../context/reducers";
import APP_ROUTES from "../../../router/constants";
import { uniqueObjArray } from "../../../utils";

const { SearchIcon, CloseIcon, ArrowIcon } = QUIDAX_SVGS;
const { STORE_SEARCHED_BOOKS, CLEAR_SEARCHED_BOOKS, FETCHING_SEARCHED_BOOKS } =
  SearchBookActions;

const HeaderSearch = ({
  showSearch,
  toggleSearch,
}: {
  showSearch: boolean;
  toggleSearch: () => void;
}) => {
  // Lazy Query
  const [getSearchedBooks, { data }] = useLazyQuery(SEARCH_BOOKS, {});

  const navigate = useNavigate();

  // Global store
  const { dispatch } = useGlobalStoreProvider();

  // Handle local Input
  const [searchInput, setSearchInput] = useState("");

  const [startSearch, toggleStartSearch] = useState(false);

  // Handle form Submit
  const handleSubmit = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch({
      type: FETCHING_SEARCHED_BOOKS,
    });
    toggleStartSearch(true);
    getSearchedBooks({ variables: { filter: searchInput } });
    navigate(APP_ROUTES.SEARCH);
  };

  // Use Effect
  useEffect(() => {
    if (data) {
      // All searched books
      const searchedBooks = Object.values(data as object).reduce(
        (acc: any[], curr: any[]) => [...acc, ...curr],
        []
      );

      // Get unique results
      const uniqueResult = uniqueObjArray({ array: searchedBooks, key: "id" });

      dispatch({
        type: STORE_SEARCHED_BOOKS,
        payload: { books: uniqueResult, filter: searchInput },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, startSearch]);

  // Clear the search field
  const clearSearchField = () => {
    setSearchInput("");
    dispatch({
      type: CLEAR_SEARCHED_BOOKS,
    });
    navigate(APP_ROUTES.HOME);
  };

  return (
    <div className={clsx("search__container", showSearch && "show__search")}>
      <div className="arrow__icon" onClick={toggleSearch}>
        <ArrowIcon />
      </div>
      <form className="search__input" onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search books, genres, authors etc."
        />
        {searchInput ? (
          <div className="search__input--icon" onClick={clearSearchField}>
            <CloseIcon />
          </div>
        ) : (
          <div className="search__input--icon" onClick={handleSubmit}>
            <SearchIcon />
          </div>
        )}
      </form>
    </div>
  );
};

export default HeaderSearch;
