import React from "react";
import Header from "./components/header.js";
import Platform from "./components/platform.js";
import "./App.css";
import sample from "./images/Gintoki.png";
import FbPic from "./images/facebook.jpg";
import IgPic from "./images/instagram.png";
import LiPic from "./images/linkedin.png";
import GmPic from "./images/gmail.jpg";

function App() {
  const socialMedia = [
    {
      name: "Facebook",
      image: FbPic,
      url: "#",
    },
    {
      name: "Instagram",
      image: IgPic,
      url: "#",
    },
    {
      name: "LinkedIn",
      image: LiPic,
      url: "#",
    },
    {
      name: "Gmail",
      image: GmPic,
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
            <img id="pic1" src={sample} alt="" />
            <img id="pic2" src={sample} alt="" />
            <img id="pic3" src={sample} alt="" />
            <img id="pic4" src={sample} alt="" />
            <img id="pic5" src={sample} alt="" />
            <img id="pic6" src={sample} alt="" />
            <img id="pic7" src={sample} alt="" />
          </div>

          <div id="caption" className="item">
            <div id="symbol">"</div>
            <div id="caption-content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
              architecto ea blanditiis sunt sint atque magnam, qui,
              necessitatibus totam, saepe modi. Cum commodi reprehenderit
              molestiae deleniti aut odio voluptatem error?
            </div>
          </div>
          <br />

          <div id="social-media" className="item">
            {socialMedia.map((social) => (
              <Platform
                name={social.name}
                image={social.image}
                url={social.url}
              />
            ))}
          </div>

          <div id="tagline" className="item">
            Check out our social media pages for more cool projects by IEEE NTU
            Student Branch!
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
