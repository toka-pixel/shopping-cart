import React from "react";
import "./EmptyMenu.scss";

type IProps = {
  img: string;
  text_1?: string;
  text_2?: string;
};

const EmptyMenu = (props: IProps) => {
  const { img, text_1, text_2 } = props;
  return (
    <div className="emptyMenu">
      <div className="emptyItems">
        <img src={`/imgs/${img}`} />
        <p>{text_1}</p>
        <p> {text_2}</p>
      </div>
    </div>
  );
};

export default EmptyMenu;
