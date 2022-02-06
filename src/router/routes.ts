import { lazy } from "react";
import APP_ROUTES from "./constants";

const Home = lazy(() => import("../pages/Home"));
const BookDetail = lazy(() => import("../pages/BookDetail"));
const SearchPage = lazy(() => import("../pages/SearchPage"));

const { HOME, BOOK_DETAIL, SEARCH } = APP_ROUTES;

export const APP_ROUTES_VIEW = [
  {
    key: "home",
    path: HOME,
    component: Home,
    title: "Home",
  },
  {
    key: "book-detail",
    path: BOOK_DETAIL,
    component: BookDetail,
    title: "Book Detail",
  },
  {
    key: "search",
    path: SEARCH,
    component: SearchPage,
    title: "Search Results",
  },
];
