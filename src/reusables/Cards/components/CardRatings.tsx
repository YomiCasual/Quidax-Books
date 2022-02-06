import { VerticalDivider } from "../..";
import clsx from "clsx";
import { QUIDAX_SVGS } from "../../constants";
import StarRatings from "./StarRatings";

const { PeopleIcon, HeartIcon } = QUIDAX_SVGS;

const CardRatings = ({
  isWhiteIcon = false,
  rating,
}: {
  isWhiteIcon?: boolean;
  rating?: { likes: number; rating: number };
}) => {
  // Classname
  const cardRatingItemClass = clsx(
    "card__ratings--item",
    isWhiteIcon && "path-white"
  );

  return (
    <div className="card__ratings">
      <div className={cardRatingItemClass}>
        <PeopleIcon />
        <p>31</p>
      </div>
      <div className={cardRatingItemClass}>
        <HeartIcon />
        <p>{rating?.likes}</p>
      </div>
      <VerticalDivider />
      <div className="card__ratings--rating">
        <p>Rating: {rating?.rating}</p>
        <StarRatings ratings={rating?.rating} />
      </div>
    </div>
  );
};

export default CardRatings;
