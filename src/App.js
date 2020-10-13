import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./components/home.js";
import ImageCaptioner from "./components/imageCaptioner.js";

function App() {
  return (     
    <Router>
      <Switch>
  <div className="App">
    <Route path = '/' component = {Home} exact />    
    <Route path = '/image-captioner' component = {ImageCaptioner}  />
  </div>;
  </Switch>
  </Router>
  )
}

export default App;
