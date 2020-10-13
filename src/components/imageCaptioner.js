import React from "react";
import Header from "./header.js";
import Title from "./title.js";
import Subtitle from "./subtitle.js";
import Tagline from "./tagline.js";
import SocialMedia from "./socialMedia.js";
import Slider from "./slider.js";

import "swiper/swiper.scss";
import "swiper/components/effect-fade/effect-fade.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";

function ImageCaptioner() {
  return (
    <>
      <Header />      
        <div className="items">
          <br />
          <Title />
          <Subtitle />
          <br />
          <Slider />
          <br />
          <SocialMedia />
          <Tagline />
        </div>      
    </>
  );
}

export default ImageCaptioner;
