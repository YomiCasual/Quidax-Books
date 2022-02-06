import clsx from "clsx";
import { getAvailableText } from "../../utils";

// Custom Imports
import { QUIDAX_SVGS } from "../constants";

// constants
const { CartIcon, ArrowIcon } = QUIDAX_SVGS;

export const CheckoutButton = ({
  label,
  onClick,
  classes = "",
}: {
  label: string;
  classes?: string;
  onClick?: () => void;
}) => (
  <button
    className={clsx("checkout__button", classes)}
    onClick={() => onClick && onClick()}
  >
    <span>
      <CartIcon />
    </span>
    <span className="checkout__button--text">{label}</span>
  </button>
);

export const CheckoutButtonSecondary = ({
  label,
  onClick,
  data,
  classes = "",
}: {
  label: string;
  onClick?: () => void;
  data: Record<string, any>;
  classes?: string;
}) => {
  const { available_copies = 0, price = 0 } = data;

  const availableText = getAvailableText(available_copies);

  return (
    <button
      className={clsx("checkout__button", classes)}
      onClick={() => onClick && onClick()}
    >
      <span>
        <CartIcon />
      </span>
      <div>
        <span className="checkout__button--text">{label}</span>
        <span className="checkout__button--subtitle">{availableText}</span>
      </div>
      <h2 className="price">${price}</h2>
    </button>
  );
};

export const BackButton = ({
  label = "Back",
  onClick,
}: {
  label?: string;
  onClick?: () => void;
}) => (
  <div onClick={onClick} className="back__button">
    <ArrowIcon />
    <p>{label}</p>
  </div>
);
