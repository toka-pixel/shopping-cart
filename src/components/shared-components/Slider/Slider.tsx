import React from "react";
// import AwesomeSlider from "react-awesome-slider";
// import "react-awesome-slider/dist/styles.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Slider.scss";

type IProps = {
  children: any;
  slidesToShow: number;
  slidesToShowRes1: number;
  slidesToShowRes2: number;
  slidesToShowRes3: number;
  showArrows: boolean;
  onChangeIndex?: (index:number) => void;
};

const SliderSlick = (props: IProps) => {
  const {
    slidesToShow,
    slidesToShowRes1,
    slidesToShowRes2,
    slidesToShowRes3,
    children,
    showArrows,
    onChangeIndex,
  } = props;

  const slider: any = React.useRef();

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: slidesToShowRes1,
          slidesToScroll: slidesToShowRes1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: slidesToShowRes2,
          slidesToScroll: slidesToShowRes2,
          initialSlide: slidesToShowRes2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: slidesToShowRes3,
          slidesToScroll: slidesToShowRes3,
        },
      },
    ],
    beforeChange: (oldIndex:number, newIndex:number) => {
      if (typeof onChangeIndex === "function") {
        onChangeIndex(newIndex);
      }
    },
  };

  const renderArrows = () => {
    return (
      <div className="slider-arrow" style={{ position: "relative" }}>
        <i
          onClick={() => {
            slider?.current?.slickPrev();
          }}
          className="far fa-angle-left arrow-btn prev"
        ></i>

        <i
          onClick={() => {
            slider?.current?.slickNext();
          }}
          className="far fa-angle-right arrow-btn next"
        ></i>
      </div>
    );
  };

  return (
    <div className="slider">
      {showArrows && renderArrows()}
      <Slider ref={slider} {...settings}>
        {children}
      </Slider>
    </div>
  );
};

export default SliderSlick;
