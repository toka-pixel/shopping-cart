import React, { useEffect } from "react";
import { useAppSelector } from "./hooks/index";
import Layout from "./components/Layout/Layout";
import "@fortawesome/fontawesome-free/js/all.js";
import "antd/dist/antd.min.css";
import "./App.scss";

const App: React.FC = () => {
  const { isDarK, darkColor, lightColor } = useAppSelector(
    (state) => state.theme
  );

  useEffect(() => {
    document.body.style.backgroundColor = isDarK ? darkColor : lightColor;
  }, [isDarK]);

  return (
    <div className={`${isDarK ? "dark" : "light"} h-100`}>
      <title>online store</title>
      <meta name="description" content="online store" />

      <Layout />
    </div>
  );
};

export default App;
