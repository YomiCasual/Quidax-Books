import React from "react";
import { DocumentHeader } from "../../reusables";
import AllBooks from "./components/AllBooks";
import FeaturedBooks from "./components/FeaturedBooks";

const Home = ({ title = "Home" }: { title?: string }) => {
  return (
    <>
      <DocumentHeader title={title} />
      <FeaturedBooks />
      <AllBooks />
    </>
  );
};

export default Home;
