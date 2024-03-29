import React from 'react';
import logo from "../others/logo.svg";
import {Link} from 'react-router-dom';
import "../Home.css";
import github from "../others/github.png";
import club2 from '../others/club-logo2.png';

function Home(){
  const myStyles = [{
    
    width: "50px",
    margin:"10px",
    display: "inline" 
  },
   {
    width: "150px",
    marginTop:"20px",
    display: "inline" 

  }
    ]
  
    return(    
    <>
      <header className="App-header">
        <img src={club2} style = {myStyles[1]} alt=""/>
        <p id = "sub">NTU STUDENT BRANCH</p>
          <p className = "title"> IEEE Techathlon 2020</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the React Workshop.
        </p>
       <Link to = "/image-captioner">
           Image Captioner
            </Link>
            <a href="https://github.com/IEEENTU/Techathlon2020-W3" target="_blank">
              <img src={github} style ={myStyles[0]} alt=""/>
              </a>
      </header>
    </>
    )
}

export default Home;