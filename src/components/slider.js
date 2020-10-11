import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow } from "swiper";
import Caption from "./caption.js";
import CustomSlider from "./customSlider.js";
import axios from "axios";

import "swiper/swiper.scss";
import "swiper/components/effect-fade/effect-fade.scss";
import "../App.css";

import { pictureList } from "./DataList.js";
import sample from "../images/Gintoki.png";

SwiperCore.use([EffectCoverflow]);

function Slider() {
  const userIndex = 3;
  const [caption, setCaption] = useState(pictureList[userIndex].caption);
  const [image, setImage] = useState(pictureList[userIndex].path);
  const [file, setFile] = useState("");
  const [buttonState, setButtonState] = useState(true);

  function fileSelectedHandler(e) {
    console.log(e.target);
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
    setImage(URL.createObjectURL(e.target.files[0]));
    setButtonState(false);
  }

  function fileUploadHandler() {
    const fd = new FormData();
    fd.append("file", file, file.name);
    console.log(file, file.name);
    setCaption("Loading...");
    pictureList[userIndex].caption = "Loading...";
    axios.post("/predict", fd).then((res) => {
      console.log(res.data);
      pictureList[userIndex].caption = res.data;
      setCaption(res.data);
    });
  }

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
            {index === userIndex ? (
              <CustomSlider
                image={image}
                userIndex={userIndex}
                fileSelectedHandler={fileSelectedHandler}
                fileUploadHandler={fileUploadHandler}
                buttonState={buttonState}
              />
            ) : (
              <img src={picture.path} styles={{ width: "20%" }} alt="" />
            )}
          </SwiperSlide>
        ))}
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>

      <Caption caption={caption} />
    </>
  );
}

export default Slider;
