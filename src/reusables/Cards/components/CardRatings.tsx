import { VerticalDivider } from "../..";
import clsx from "clsx";
import { QUIDAX_SVGS } from "../../constants";

const { PeopleIcon, HeartIcon, StarIcon } = QUIDAX_SVGS;

const CardRatings = ({ isWhiteIcon = false }: { isWhiteIcon?: boolean }) => {
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
        <p>29</p>
      </div>
      <VerticalDivider />
      <div className="card__ratings--rating">
        <p>Rating: 4.0</p>
        <div>
          {[1, 2, 3, 4].map((star: number) => (
            <StarIcon key={star} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardRatings;
