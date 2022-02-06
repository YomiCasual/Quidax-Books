import { IBook, IMappedBook } from "../../apollo/types";

export const generateArray = (length: number): number[] =>
  Array.from({ length }, (_, index) => index + 1);

export const generateWordsWithComma = (array: string[]) =>
  array.reduce((acc: string, curr: string, index: number, array: string[]) => {
    if (index === array.length - 1) {
      acc += curr;
    } else {
      acc += `${curr}, `;
    }
    return acc;
  }, "");

export const generateSingleMappedBook = (book: IBook): IMappedBook => {
  const {
    genres = [],
    authors = [],
    likes = 0,
    rating = 0,
    published_at,
    release_date,
    tags = [],
  } = book;
  const mappedGenres = generateWordsWithComma(
    genres.map((genre) => genre?.name)
  );
  const mappedAuthors = generateWordsWithComma(
    authors.map((author) => author?.name)
  );
  const mappedTags = generateWordsWithComma(tags.map((tag) => tag?.name));

  const mappedRatings = {
    likes,
    rating,
  };

  const mappedPublishedDate = new Date(published_at || 0).getFullYear();
  const mappedReleaseDate = new Date(release_date || 0).getFullYear();

  return {
    ...book,
    mappedGenres,
    mappedRatings,
    mappedAuthors,
    mappedPublishedDate,
    mappedReleaseDate,
    mappedTags,
    cartQuantity: 1,
  };
};

export const generateMappedBooks = (books: IBook[]): IMappedBook[] => {
  return books.map((book) => {
    return generateSingleMappedBook(book);
  });
};

export const getCartTotal = (cartItems: IMappedBook[]): number => {
  return cartItems.reduce((acc, curr) => {
    return (acc += curr?.cartQuantity * (curr?.price || 0));
  }, 0);
};

export const isEmpty = (item: Record<string, any>) => {
  return Object.keys(item).length === 0;
};

export const uniqueObjArray = ({
  array,
  key,
}: {
  array: Record<string, any>[];
  key: string;
}) => [...new Map(array.map((item) => [item[key], item])).values()];

export const getAvailableText = (copies: number = 0) =>
  copies ? `${copies} copies available` : "Out of Stock";
