import React, { useState } from "react";
import "../App.css";

function CustomSlider(props) {
  return (
    <>
      <button
        id="uploadCustom"
        onClick={props.fileUploadHandler}
        disabled={props.buttonState}
      >
        Predict
      </button>
      <label for="file-input">
        <img
          id="imgCustom"
          style={{ width: "250px", height: "324px" }}
          src={props.image}
          alt={"UploadIMG"}
        />
      </label>
      <input id="file-input" type="file" onChange={props.fileSelectedHandler} />
    </>
  );
}

export default CustomSlider;
