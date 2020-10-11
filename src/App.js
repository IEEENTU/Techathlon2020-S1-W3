import React from "react";
import Header from "./components/header.js";
import Title from "./components/title.js";
import Subtitle from "./components/subtitle.js";
import Tagline from "./components/tagline.js";
import SocialMedia from "./components/socialMedia.js";
import "./App.css";
import Slider from "./components/slider.js";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="container">
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
      </div>
    </div>
  );
}

export default App;
