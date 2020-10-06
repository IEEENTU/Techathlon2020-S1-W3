import React from "react";
import "../App.css";

function Caption(props) {
  return (
    <div id="caption" className="item">
      <div id="symbol">"</div>
      <div id="caption-content">{props.caption}</div>
    </div>
  );
}

export default Caption;
