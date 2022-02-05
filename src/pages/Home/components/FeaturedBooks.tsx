import React, { useRef } from "react";
import Flickity from "react-flickity-component";

import { BookThumbnail, SectionHeader } from "../../../reusables";
import { generateArray } from "../../../utils";

const FeaturedBooks = () => {
  // Setup Flickity Ref
  const flickityRef = useRef<Flickity>();

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
          {generateArray(30).map((thumbnail: number) => (
            <BookThumbnail key={thumbnail} />
          ))}
        </Flickity>
      </section>
    </article>
  );
};

export default FeaturedBooks;
