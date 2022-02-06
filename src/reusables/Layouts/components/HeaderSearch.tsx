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

  // Handle form Submit
  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch({
      type: FETCHING_SEARCHED_BOOKS,
    });

    const { value = "" } = e.target;
    getSearchedBooks({ variables: { filter: value } });
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

      if (searchInput) {
        dispatch({
          type: STORE_SEARCHED_BOOKS,
          payload: { books: uniqueResult, filter: searchInput },
        });
      } else {
        dispatch({
          type: STORE_SEARCHED_BOOKS,
          payload: { books: [], filter: searchInput },
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, searchInput]);

  // Clear the search field
  const clearSearchField = () => {
    setSearchInput("");
    dispatch({
      type: CLEAR_SEARCHED_BOOKS,
    });
  };

  return (
    <div className={clsx("search__container", showSearch && "show__search")}>
      <div className="arrow__icon" onClick={toggleSearch}>
        <ArrowIcon />
      </div>
      <div className="search__input">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
            handleSubmit(e);
          }}
          placeholder="Search books, genres, authors etc."
        />
        {searchInput ? (
          <div className="search__input--icon" onClick={clearSearchField}>
            <CloseIcon />
          </div>
        ) : (
          <div className="search__input--icon">
            <SearchIcon />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderSearch;
