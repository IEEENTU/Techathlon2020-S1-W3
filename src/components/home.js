import React from 'react';
import logo from "../others/logo.svg";
import "../Home.css";
import {Link} from 'react-router-dom';

function Home(){
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
      </header>
    </>
    )
}

export default Home;