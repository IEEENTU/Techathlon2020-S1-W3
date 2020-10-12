import React, { useState,useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow } from "swiper";
import Caption from "./caption.js";
import CustomSlider from "./customSlider.js";
import axios from "axios";

import { pictureList } from "./DataList.js";

SwiperCore.use([EffectCoverflow]);

function Slider() {
  const userIndex = 3;
  const [caption, setCaption] = useState(pictureList[userIndex].caption);
  const [image, setImage] = useState(pictureList[userIndex].path);
  const [buttonState, setButtonState] = useState(true);   

  function fileSelectedHandler(e) {
    let currentFile = e.target.files[0];
    console.log(e.target);
    console.log(typeof currentFile);
    setImage(URL.createObjectURL(currentFile));
    setButtonState(false); 

    fileUploadHandler(currentFile);  
  }

  function fileUploadHandler(file) {
    const fd = new FormData();
    fd.append("file", file, file.name);
    console.log(file, file.name);
    setCaption("Loading...");
    pictureList[userIndex].caption = "Loading...";
    setButtonState(true);
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
                // fileUploadHandler={fileUploadHandler}
                buttonState={buttonState}
              />
            ) : (
              <img src={picture.path}  alt="" />
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
