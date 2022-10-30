import React from "react";
import { Button } from "antd";
import "./Button.scss";

type IProps = {
  children: string;
};
const ButtonSubmit = (props: IProps) => {
  const { children } = props;

  return (
    <div className="custom-button">
      <Button className="">{children}</Button>
    </div>
  );
};

export default ButtonSubmit;
