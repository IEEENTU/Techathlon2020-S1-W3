import React from "react";
import "../App.css";

function Platform(props) {
  return (
    <div className="icon">
      <a href={props.url} target={"_blank"}>
        <img src={props.image} alt={props.name} />
      </a>
    </div>
  );
}

export default Platform;
