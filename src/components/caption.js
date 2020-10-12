import React from "react";
import Spinner from 'react-bootstrap/Spinner';


function Caption(props) {
  return (
    <div id="caption" className="item">
      <div id="symbol">"</div>
  <div id="caption-content">
    { props.caption==="Loading..." ? <><Spinner animation="border" variant="primary" /> {props.caption} </>  : (props.caption) }</div>
    </div>
  );
}

export default Caption;
