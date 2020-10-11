import React, { useState } from "react";
import axios from "axios";
// import sample from "../images/Gintoki.png";

function CustomSlider() {
  const [file, setFile] = useState("");

  function fileSelectedHandler(e) {
    setFile(e.target.files[0]);
  }

  function fileUploadHandler() {
    const fd = new FormData();
    fd.append("file", file, file.name);
    console.log(file);
    axios.post("/predict", fd).then((res) => {
      console.log(res);
    });
  }

  return (
    <>
      <input type="file" onChange={fileSelectedHandler} />
      <button onClick={fileUploadHandler}>Upload</button>
      Files
    </>
  );
}

export default CustomSlider;
