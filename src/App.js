import React from "react";
import Header from "./components/header.js";
import Platform from "./components/platform.js";
import "./App.css";
import sample from "./images/Gintoki.png";

function App() {
  const socialMedia = [
    {
      name: "Facebook",
      image: "./images/facebook.jpg",
      url: "#",
    },
    {
      name: "Instagram",
      image: "./images/instagram.png",
      url: "#",
    },
    {
      name: "LinkedIn",
      image: "./images/linkedin.png",
      url: "#",
    },
    {
      name: "Gmail",
      image: "./images/gmail.jpg",
      url: "#",
    },
  ];

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="items">
          <br />
          <div id="title" className="item">
            Caption<span>AI</span>
          </div>

          <div id="subtitle" className="item">
            Image to Caption - Simplified!
          </div>

          <div id="gallery" className="item">
            <img src={sample} alt="" />
          </div>

          <div id="caption" className="item">
            <div id="symbol">"</div>
            <div id="caption-content">This is the caption</div>
          </div>

          <div id="social-media" className="item">
            {socialMedia.map((social) => (
              <Platform
                name={social.name}
                image={social.image}
                url={social.url}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
