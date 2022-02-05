import { lazy } from "react";
import APP_ROUTES from "./constants";

const Home = lazy(() => import("../pages/Home/"));

const { HOME } = APP_ROUTES;

export const APP_ROUTES_VIEW = [
  {
    key: "home",
    path: HOME,
    component: Home,
    title: "Home",
  },
];
