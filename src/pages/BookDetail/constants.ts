import { IMappedBook } from "../../apollo/types";

export const DETAILS_HEADER: {
  label: string;
  key: keyof IMappedBook;
}[] = [
  {
    label: "Genre",
    key: "mappedGenres",
  },
  {
    label: "Tags",
    key: "mappedTags",
  },
  {
    label: "Publisher",
    key: "publisher",
  },
  {
    label: "Released",
    key: "mappedReleaseDate",
  },
];
