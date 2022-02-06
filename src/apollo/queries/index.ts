import { gql } from "@apollo/client";

const similarQuery = `
      id
      title
      release_date
      authors {
        id
        name
      }
      rating
      price
      currency
      likes
      genres {
        id
        name
      }
      tags {
        id
        name
      }
      published_at
      image_url
      available_copies,
      publisher,
     full_description
`;

export const GET_ALL_FEATURED_BOOKS = gql`
  query GetAllFeaturedBooks {
    books(where: { featured: true }) {
        ${similarQuery}
    }
  }
`;
export const GETBOOK_BY_ID = gql`
  query GetAllFeaturedBooks($id: ID!) {
    book(id: $id) {
      ${similarQuery}
    }
  }
`;

export const GET_ALL_BOOKS = gql`
  query GetAllBooks {
    books(limit: 24) {
        ${similarQuery}
    }
  }
`;

export const SEARCH_BOOKS = gql`
  query SearchBooks($filter: String) {
    book1: books(where: { title_contains: $filter }) {
        ${similarQuery}
    },
    book2: books(where: {genres: {name_contains: $filter},}) {
        ${similarQuery}
    },
    book3: books(where: {authors: {name_contains: $filter},}) {
        ${similarQuery}
    }
    book4: books(where: {tags: {name_contains: $filter},}) {
        ${similarQuery}
    }
  }
`;
