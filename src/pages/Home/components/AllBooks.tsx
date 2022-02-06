import React from "react";
import { useQuery } from "@apollo/client";

import { SectionHeader, BookCard, Loader, AppState } from "../../../reusables";
import { GET_ALL_BOOKS } from "../../../apollo/queries";
import { IGetAllBooks } from "../../../apollo/types";
import { generateMappedBooks } from "../../../utils";

const AllBooks = () => {
  const { loading, error, data } = useQuery<IGetAllBooks>(GET_ALL_BOOKS);

  if (loading) return <Loader />;
  if (error)
    return (
      <AppState
        text="An Error Occurred, Please check your internet connection or try again"
        isError
      />
    );

  const books = data?.books.map((book) => ({ ...book })) || [];

  const mappedBooks = generateMappedBooks(books);

  return (
    <article className="all__books max-width">
      <SectionHeader title="All Books" />
      <section className="all__books--container">
        {mappedBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </section>
    </article>
  );
};

export default AllBooks;
