import React from "react";
import { socialMedia } from "./DataList.js";
import Platform from "./platform.js";
import "../App.css";

function SocialMedia() {
  return (
    <div id="social-media" className="item">
      {socialMedia.map((social) => (
        <Platform
          key={social.image}
          name={social.name}
          image={social.image}
          url={social.url}
        />
      ))}
    </div>
  );
}

export default SocialMedia;
