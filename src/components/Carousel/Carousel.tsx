import React from "react";
import SliderSlick from "../shared-components/Slider/Slider";
import FirstSlide from "./FirstSlide";
import SecondSlide from "./SecondSlide";
import "react-awesome-slider/dist/styles.css";
import "./Carousel.scss";

const Carousel = () => {
  return (
    <SliderSlick
      slidesToShow={1}
      slidesToShowRes1={1}
      slidesToShowRes2={1}
      slidesToShowRes3={1}
      showArrows={true}
    >
      <FirstSlide />
      <SecondSlide />
    </SliderSlick>
  );
};

export default Carousel;
