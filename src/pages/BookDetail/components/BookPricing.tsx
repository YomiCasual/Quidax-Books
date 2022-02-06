// Custom Imports
import { IMappedBook } from "../../../apollo/types";
import useGlobalStoreProvider from "../../../context";
import { CartActions } from "../../../context/reducers";
import { CheckoutButton, CheckoutButtonSecondary } from "../../../reusables";

//Constants
const { ADD_TO_CART } = CartActions;

const BookPricing = ({ book }: { book: IMappedBook }) => {
  // Global store
  const { dispatch } = useGlobalStoreProvider();

  // Destructure properties from book propbs
  const { image_url, available_copies, price, title } = book;

  // Dispatch actions
  const addToCart = () => {
    dispatch({ type: ADD_TO_CART, payload: book });
  };

  return (
    <div className="book__pricing">
      <div className="book__pricing--image">
        <img src={image_url} alt={title} />
      </div>
      <div className="book__pricing--pricing btn hide__mobile">
        <h5 className="font-normal copies">
          {available_copies} copies available
        </h5>
        <h1 className="font-normal">${price}</h1>
        {!!available_copies && (
          <CheckoutButton
            label="Add To Cart"
            onClick={addToCart}
            classes="btn-desktop"
          />
        )}
      </div>
      {!!available_copies && (
        <CheckoutButtonSecondary
          label="Add To Cart"
          data={{ available_copies, price }}
          onClick={addToCart}
          classes="btn-mobile"
        />
      )}
    </div>
  );
};

export default BookPricing;
