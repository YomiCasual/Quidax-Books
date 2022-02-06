//Custom Imports
import { QUIDAX_SVGS } from "../constants";
import { IMappedBook } from "../../apollo/types";
import useGlobalStoreProvider from "../../context";
import { CartActions } from "../../context/reducers";

// Constants
const { MinusIcon, PlusIcon } = QUIDAX_SVGS;
const { REDUCE_QUANTITY, INCREASE_QUANTITY, REMOVE_FROM_CART } = CartActions;

const CartItem = ({ item }: { item: IMappedBook }) => {
  // Global store
  const { dispatch } = useGlobalStoreProvider();

  //Destructure properties from item props
  const { title, image_url, mappedAuthors, cartQuantity, price = 0 } = item;

  // Calculate the quantity price
  const quantityPrice = price * cartQuantity;

  // Dispatch actions
  const reduceQuantity = () =>
    dispatch({ type: REDUCE_QUANTITY, payload: item?.id });

  const increaseQuantity = () =>
    dispatch({ type: INCREASE_QUANTITY, payload: item?.id });

  const removeItem = () =>
    dispatch({ type: REMOVE_FROM_CART, payload: item?.id });

  return (
    <div className="cart__card">
      <div className="cart__card--image">
        <img src={image_url} alt="cart" />
      </div>
      <div className="cart__card--details">
        <div>
          <h5>{title}</h5>
          <p>{mappedAuthors}</p>
        </div>
        <button onClick={removeItem}>Remove</button>
      </div>
      <div className="cart__card--pricing">
        <h5 className="single-price">${price}</h5>
        <div className="quantity">
          <div className="quantity__icon" onClick={reduceQuantity}>
            <MinusIcon />
          </div>
          <p className="quantity__count">{cartQuantity}</p>
          <div className="quantity__icon" onClick={increaseQuantity}>
            <PlusIcon />
          </div>
        </div>
        <h5 className="total-price">${quantityPrice.toFixed(2)}</h5>
      </div>
    </div>
  );
};

export default CartItem;
