import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow } from "swiper";
import Caption from "./caption.js";
import CustomSlider from "./customSlider.js";

import "swiper/swiper.scss";
import "swiper/components/effect-fade/effect-fade.scss";
import "../App.css";

import { pictureList } from "./DataList.js";
import sample from "../images/Gintoki.png";

SwiperCore.use([EffectCoverflow]);

function Slider() {
  const userIndex = 3;
  const [caption, setCaption] = useState(pictureList[userIndex].caption);

  return (
    <>
      <Swiper
        effect={"coverflow"}
        direction={"horizontal"}
        initialSlide={userIndex}
        spaceBetween={10}
        slidesPerView={5}
        onSlideChange={(swiper) => {
          if (swiper.activeIndex < pictureList.length)
            setCaption(pictureList[swiper.activeIndex].caption);
        }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        {pictureList.map((picture, index) => (
          <SwiperSlide key={picture.name}>
            <img src={picture.path} styles={{ width: "20%" }} alt="" />
          </SwiperSlide>
        ))}
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>

      <Caption caption={caption} />

      <CustomSlider />
    </>
  );
}

export default Slider;
