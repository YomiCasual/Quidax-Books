import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { AppLayout } from "../reusables";

import { APP_ROUTES_VIEW } from "./routes";

const AppRouter = () => {
  return (
    <AppLayout>
      <Routes>
        {APP_ROUTES_VIEW.map(({ path, component: Component, key, ...rest }) => (
          <Route path={path} key={key} element={<Component />} {...rest} />
        ))}
        <Route path="*" element={<Home />} />
      </Routes>
    </AppLayout>
  );
};

export default AppRouter;
