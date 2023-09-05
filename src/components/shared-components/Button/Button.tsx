import React from "react";
import { Button } from "antd";
import "./Button.scss";

type IProps = {
  children: string;
  onClick?:Function  ,
};
const ButtonSubmit = (props: IProps) => {
  const { children , onClick} = props;

  return (
    <div className="custom-button">
      <Button className="" htmlType="submit" onClick={onClick ?()=>onClick() : ()=>{}}>{children}</Button>
    </div>
  );
};

export default ButtonSubmit;
