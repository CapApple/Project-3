import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../src/pages/Home"
import Saved from "../src/pages/Saved";
//import PrivateRoute from "./components/PrivateRoute";

//import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "../src/components/Profile";
import Auth from "../src/components/Auth";
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
   
        <Auth />
        <Route exact path="/" component={Home} />
        <Route exact ="/saved" component={Saved} />
        <Route path="/profile" component={Profile} />
       
        
        
      </div>
    </Router>
  );
}

export default App;
