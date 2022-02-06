import { QUIDAX_SVGS } from "../../constants";
import CustomModal from "../../CustomModal";

// Constants
const { SuccessSvg } = QUIDAX_SVGS;

const CheckoutModal = ({
  handleClose,
}: {
  handleClose: () => void;
}): JSX.Element => {
  return (
    <CustomModal backdropClose={handleClose}>
      <div className="checkout__modal">
        <div>
          <SuccessSvg />
        </div>
        <h3>Item successfully purchased</h3>
      </div>
    </CustomModal>
  );
};

export default CheckoutModal;
