import React, { useState } from "react";
import Header from "./components/header.js";
import Title from "./components/title.js";
import Subtitle from "./components/subtitle.js";
import Tagline from "./components/tagline.js";
import SocialMedia from "./components/socialMedia.js";
import "./App.css";
import Slider from "./components/slider.js";

function App() {
  // async function logFetch(url) {
  //   try {
  //     const response = await fetch(url);
  //     console.log(await response.text());
  //   } catch (err) {
  //     console.log("fetch failed", err);
  //   }
  // }

  async function logFetch(url) {
    const settings = {
      type: "POST",
      url: "/predict",
      // data: form_data,
      contentType: false,
      cache: false,
      processData: false,
      async: true,
    };

    try {
      const data = await fetch(url, settings);
      console.log(data);
      return data;
    } catch (e) {
      return e;
    }
  }

  function callLogFetch() {
    logFetch("/predict");
  }

  return (
    <div className="App">
      <Header />

      <div className="container">
        <div className="items">
          <br />
          <Title />
          <Subtitle />
          <br />
          <Slider setCaption />
          <br />
          <SocialMedia />
          <Tagline />
        </div>
      </div>
    </div>
  );
}

export default App;
