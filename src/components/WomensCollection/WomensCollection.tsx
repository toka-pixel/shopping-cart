import React from "react";
import ButtonSubmit from "../shared-components/Button/Button";
import CenterText from "../shared-components/CenterText/CenterText";
import "./WomensCollection.scss";

const WomensCollection = () => {
  return (
    <div className="womensCollection">
      <p>new trend</p>
      <CenterText text={"Women‘s Collection"} />
      <p>big sale for this week</p>
      <ButtonSubmit children={"SHow NOW"} />
    </div>
  );
};

export default WomensCollection;
