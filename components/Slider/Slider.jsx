"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { SliderNavButtons } from "./SliderNavButtons";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";
import Image from "next/image";

export default function Slider(props) {
  const images = props.images.filter((image) => {
    if (image.url !== null) {
      return image;
    }
  });

  return (
    <Swiper
      pagination={{
        dynamicBullets: false,
        clickable: true,
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper"
      style={{
        "--swiper-pagination-color": "rgb(255, 255, 255)",
        "--swiper-pagination-bullet-inactive-color": "rgb(255, 255, 255)",
        "--swiper-pagination-bullet-inactive-opacity": "0.3",
        "--swiper-pagination-bullet-size": "10px",
      }}
    >
      {images.map((image) => (
        <SwiperSlide key={image.url}>
          <Image
            src={image.url}
            alt="слайдер"
            width={100}
            height={350}
            layout="responsive"
            priority={true}
          />
        </SwiperSlide>
      ))}

      {images.length > 1 ? <SliderNavButtons /> : <></>}
    </Swiper>
  );
}
