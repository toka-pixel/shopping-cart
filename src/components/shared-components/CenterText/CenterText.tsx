import React from "react";
import "./CenterText.scss";

type IProps = {
  text: string;
};

const CenterText = (props: IProps) => {
  const { text } = props;

  return (
    <div className="centerText">
      <p className={`text `}>{text}</p>
      <p className="line"></p>
    </div>
  );
};

export default CenterText;
