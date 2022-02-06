import React from "react";
import useGlobalStoreProvider from "../../context";
import {
  BookCard,
  DocumentHeader,
  AppState,
  Loader,
  SectionHeader,
} from "../../reusables";
import { generateMappedBooks } from "../../utils";

const SearchPage = ({ title = "Search Results" }: { title?: string }) => {
  const {
    store: {
      searchedBooks: { books = [], filter = "", loading = false },
    },
  } = useGlobalStoreProvider();

  if (loading) {
    return <Loader />;
  }

  const mappedBooks = generateMappedBooks(books);

  const header = `${books.length} results found for "${filter}"`;
  return (
    <>
      <DocumentHeader title={title} />
      <article className="all__books max-width medium-top">
        {mappedBooks.length ? (
          <>
            <SectionHeader title={header} />
            <section className="all__books--container">
              {mappedBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </section>
          </>
        ) : (
          <AppState text="No Book found" />
        )}
      </article>
    </>
  );
};

export default SearchPage;
