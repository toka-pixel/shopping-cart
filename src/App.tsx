import React, { useEffect } from "react";
import RoutesApp from "./Routes/Routes";
import "@fortawesome/fontawesome-free/js/all.js";
import { useAppDispatch, useAppSelector } from "./hooks/index";

// import '@fortawesome/fontawesome-free/';
// import '@fortawesome/fontawesome-svg-core/index';
// import '@fortawesome/free-solid-svg-icons/attribution';
// import '@fortawesome/react-fontawesome/index'
// import 'antd/dist/antd.css';
import "antd/dist/antd.min.css";
import "./App.scss";


function App() {
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
      <RoutesApp />
    </div>
  );
}

export default App;
