import { QUIDAX_SVGS } from "../constants";
import { CustomModalProps } from "../types";

// Constants
const { CloseIcon } = QUIDAX_SVGS;

const CustomModal = ({
  children,
  backdropClose,
  width,
}: CustomModalProps): JSX.Element => {
  const styles = {
    maxWidth: width,
  };
  return (
    <div className="modal__layout">
      <div className="modal__container">
        <div className="modal__child" style={styles}>
          {!!backdropClose && (
            <div onClick={backdropClose} className="modal__close-icon">
              <CloseIcon />
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
