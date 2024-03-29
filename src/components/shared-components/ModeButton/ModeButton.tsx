import React from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { changeMode } from "../../../store/Theme/themeSlice";
import "./ModeButton.scss";

const ModeButton = () => {
  const { isDarK } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  const handleMode = () => {
    const mode = !isDarK;
    dispatch(changeMode(!isDarK));
    localStorage.setItem("darktheme", mode.toString());
  };

  return (
    <>
      {isDarK ? (
        <img
          className="modeImg"
          title="night-mode"
          onClick={handleMode}
          src="/imgs/night-mode.png"
        />
      ) : (
        <img
          className="modeImg"
          title="light-mode"
          onClick={handleMode}
          src="/imgs/light-mode.png"
        />
      )}
    </>
  );
};

export default ModeButton;
