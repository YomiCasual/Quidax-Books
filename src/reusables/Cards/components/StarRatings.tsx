//Custom Imports
import { QUIDAX_SVGS } from "../../constants";
import { generateArray } from "../../../utils";

// Constants
const { StarIcon } = QUIDAX_SVGS;

const StarRatings = ({ ratings = 0 }: { ratings?: number }) => {
  const convertedRating = Math.floor(ratings);

  return (
    <div className="star__class">
      {generateArray(convertedRating).map((star: number) => (
        <StarIcon className="star__class--active" key={star} />
      ))}
      {generateArray(5 - convertedRating).map((star: number) => (
        <StarIcon className="star__class--inactive" key={star} />
      ))}
    </div>
  );
};

export default StarRatings;
