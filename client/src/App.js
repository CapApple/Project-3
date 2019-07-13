import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import UserPage from "./components/UserPage/UserPage";
import Navbar from "./components/Navbar.js";


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
    <div>
      <Navbar />
    <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/loggedin" component={UserPage} />
    </Router>
    </div>
  );
}

export default App;
