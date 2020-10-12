import React from "react";

function CustomSlider(props) {
  return (
    <>
      
      <label for="file-input">
        <img
          id="imgCustom"
          style={{ width: "250px", height: "324px" , }}
          src={props.image}
          alt={"UploadIMG"}
        />
      </label>
      <input id="file-input" type="file" onChange={props.fileSelectedHandler} />
    </>
  );
}

export default CustomSlider;
