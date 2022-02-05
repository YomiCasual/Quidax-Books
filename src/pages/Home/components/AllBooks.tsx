import React from "react";

import { SectionHeader, BookCard } from "../../../reusables";
import { generateArray } from "../../../utils";

const AllBooks = () => {
  return (
    <article className="all__books max-width">
      <SectionHeader title="All Books" />
      <section className="all__books--container">
        {generateArray(30).map((thumbnail: number) => (
          <BookCard key={thumbnail} />
        ))}
      </section>
    </article>
  );
};

export default AllBooks;
