import React, { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { BackButton, DocumentHeader, Loader } from "../../reusables";
import APP_ROUTES from "../../router/constants";
import { generateSingleMappedBook, isEmpty } from "../../utils";
import { BookPricing, BookSummary } from "./components";
import { GETBOOK_BY_ID } from "../../apollo/queries";
import { IBook } from "../../apollo/types";

const BookDetail = ({ title = "Book Detail" }: { title?: string }) => {
  // Lazy Query
  const [getBookById, { loading, error, data }] = useLazyQuery(
    GETBOOK_BY_ID,
    {}
  );

  // React router hooks
  const navigate = useNavigate();
  const location = useLocation();

  // Get the id from the params
  const { id = "" } = useParams();

  // If there is no id , return to home page
  if (!id) {
    navigate(APP_ROUTES.HOME);
  }

  //Check if there is book in the router state, use that
  let routerStateBook = (location?.state || {}) as Record<string, any>;

  useEffect(() => {
    // if the router stateBook is Empty, fetch new data, but if not use router state
    if (isEmpty(routerStateBook)) {
      getBookById({ variables: { id } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <Loader />;
  if (error) return <div>Error</div>;

  if (data) {
    routerStateBook = data.book;
  }

  const mappedBook = generateSingleMappedBook(routerStateBook as IBook);

  return (
    <>
      <DocumentHeader title={title} />
      <div className="max-width book__detail">
        <BackButton onClick={() => navigate(APP_ROUTES.HOME)} />
        <div className="book__detail--container">
          <BookPricing book={mappedBook} />
          <BookSummary book={mappedBook} />
        </div>
      </div>
    </>
  );
};

export default BookDetail;
