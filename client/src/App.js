import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Saved from "./components/pages/Saved";
//import GoogleLogin from "./components/pages/GoogleLogin";
//import FacebookLogin from 'react-facebook-login';

//import logo from "./logo.svg";
import "./App.css";
import "./css/style.css";
import "./css/bootstrap.min.css";
import "./css/nivo-lightbox.css";
import "./css/nivo-lightbox-theme/default/default.css";
//import "./css/owl.carousel.css";
//import "./css/owl.theme.css";
import "./css/animate.css";
import "./css/style.css";
import"./font-awesome/css/font-awesome.min.css";
import"./bodybg/bg1.css";
import"./color/default.css";

function App() {
  return (
    <Router>
      <div>
      
        <Route exact path="/" component={Home} />
        <Route exact path="/saved" component={Saved} />
  

      </div>
    </Router>
  );
}

export default App;
