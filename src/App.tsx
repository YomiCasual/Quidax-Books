import React, { Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { Loader } from "./reusables";
import AppRouter from "./router";

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <HelmetProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </HelmetProvider>
    </Suspense>
  );
};

export default App;
