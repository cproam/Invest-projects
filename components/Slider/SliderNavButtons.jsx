import React from "react";
import { useSwiper } from "swiper/react";
import check from "./../../public/check.png";
import "./style.css";
import Image from "next/image";

export const SliderNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="btn-wrapper">
      <button onClick={() => swiper.slidePrev()} className="btnSlider">
        <Image
          src={check.src}
          alt="button-prev"
          className="arrow"
          width={10}
          height={10}
        />
      </button>
      <button onClick={() => swiper.slideNext()} className="btnSlider">
        <Image
          src={check.src}
          alt="button-next"
          className="arrow rotate"
          width={10}
          height={10}
        />
      </button>
    </div>
  );
};
