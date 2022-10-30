import React, { Suspense } from "react";
import Loading from "../components/shared-components/Loading/Loading";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Home = React.lazy(() => import("../components/Home/Home"));

const RoutesApp = () => {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          {/* <Suspense fallback={<Loading />}> */}
          <Route
            path="/"
            element={
              <React.Suspense fallback={<Loading />}>
                <Home />
              </React.Suspense>
            }
          />
          {/* </Suspense> */}
        </Routes>
      </Router>
    </>
  );
};

export default RoutesApp;
