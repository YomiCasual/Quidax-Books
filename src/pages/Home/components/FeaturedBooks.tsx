import { useRef } from "react";
import { useQuery } from "@apollo/client";

import { Link } from "react-router-dom";
import Flickity from "react-flickity-component";

import {
  AppState,
  BookThumbnail,
  Loader,
  SectionHeader,
} from "../../../reusables";
import { generateMappedBooks } from "../../../utils";
import { IGetAllBooks } from "../../../apollo/types";
import { GET_ALL_FEATURED_BOOKS } from "../../../apollo/queries";

const FeaturedBooks = () => {
  // Setup Flickity Ref
  const flickityRef = useRef<Flickity>();

  const { loading, error, data } = useQuery<IGetAllBooks>(
    GET_ALL_FEATURED_BOOKS
  );

  if (loading) return <Loader />;
  if (error)
    return (
      <AppState
        text="An Error Occurred, Please check your internet connection or try again"
        isError
      />
    );

  const featuredBooks =
    data?.books.map((book) => ({ ...book, inCart: false })) || [];

  const mappedBooks = generateMappedBooks(featuredBooks);

  return (
    <article className="featured__books">
      <SectionHeader title="Featured Books" />
      <section className="featured__books--books featured__books--container">
        <Flickity
          options={{
            freeScroll: true,
            contain: true,
            adaptiveHeight: true,
            resize: true,
            groupCells: true,
            pageDots: true,
            prevNextButtons: true,
            cellAlign: "left",
          }}
          flickityRef={(ref) => {
            flickityRef.current = ref;
          }}
          reloadOnUpdate
        >
          {mappedBooks.map((featuredBook) => (
            <Link
              key={featuredBook.id}
              to={`/detail/${featuredBook.id}`}
              state={{ ...featuredBook }}
            >
              <BookThumbnail book={featuredBook} />
            </Link>
          ))}
        </Flickity>
      </section>
    </article>
  );
};

export default FeaturedBooks;
