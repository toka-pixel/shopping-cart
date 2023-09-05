import React from "react";
import Loading from "../components/shared-components/Loading/Loading";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Home = React.lazy(() => import("../components/Home/Home"));

const Product = React.lazy(
  () => import("../components/ViewOneProduct/ViewOneProduct")
);

const Checkout = React.lazy(() => import("../components/Checkout/Index"));

const RoutesApp = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<Loading />}>
            <Home />
          </React.Suspense>
        }
      />
      <Route
        path="/product/:id"
        element={
          <React.Suspense fallback={<Loading />}>
            <Product />
          </React.Suspense>
        }
      />

      <Route
        path="/checkout"
        element={
          <React.Suspense fallback={<Loading />}>
            <Checkout />
          </React.Suspense>
        }
      />
    </Routes>
  );
};

export default RoutesApp;
