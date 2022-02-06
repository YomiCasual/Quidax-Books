import React, { Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

import { GlobalStoreProvider } from "./context";
import { Loader } from "./reusables";
import AppRouter from "./router";
import apolloClient from "./apollo";

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <GlobalStoreProvider>
        <ApolloProvider client={apolloClient}>
          <HelmetProvider>
            <BrowserRouter>
              <AppRouter />
            </BrowserRouter>
          </HelmetProvider>
        </ApolloProvider>
      </GlobalStoreProvider>
    </Suspense>
  );
};

export default App;
