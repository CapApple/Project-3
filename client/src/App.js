import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Saved from "./components/pages/Saved";
//import logo from "./logo.svg";
import "./App.css";

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
