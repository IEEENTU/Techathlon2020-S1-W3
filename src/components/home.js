import React from 'react';
import logo from "../others/logo.svg";
import {Link} from 'react-router-dom';
import "../Home.css";
import github from "../others/github.png";

function Home(){
  const myStyles = {
    width: "50px",
    margin:"10px",
    display: "inline" 
  }
    return(    
    <>
      <header className="App-header">
          <p className = "title"> IEEE Techathlon 2020</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the React Workshop.
        </p>
       <Link to = "/image-captioner">
           Image Captioner
            </Link>
            <a href="https://github.com/swankyhacker/image-captioner" target="_blank">
              <img src={github} style ={myStyles} alt=""/>
              </a>
      </header>
    </>
    )
}

export default Home;