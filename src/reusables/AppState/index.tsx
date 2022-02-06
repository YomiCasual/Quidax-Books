import { QUIDAX_SVGS } from "../constants";

const { EmptySvg, ErrorSvg } = QUIDAX_SVGS;

const AppState = ({
  text = "Sorry! Nothing here",
  isError = false,
}: {
  text?: string;
  isError?: boolean;
}) => {
  return (
    <div className="empty__state">
      {isError ? <ErrorSvg /> : <EmptySvg />}
      {text && <h3 className="!mt-6">{text}</h3>}
    </div>
  );
};

export default AppState;
