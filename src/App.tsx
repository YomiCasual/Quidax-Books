import React, { Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { Loader } from "./components";
import AppRouter from "./router";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <HelmetProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </HelmetProvider>
    </Suspense>
  );
}

export default App;
