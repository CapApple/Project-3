import React from "react";

function Navbar() {
  return(
    <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">

    <div className="container navigation">

      <div className="navbar-header page-scroll">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
          <i className="fa fa-bars"></i>
        </button>
        <a className="navbar-brand" href="/">
          <img src={require("../img/rxr.png")} alt="" width="150" height="40" />
        </a>
      </div>

     
<div className="collapse navbar-collapse navbar-right navbar-main-collapse">
        <ul className="nav navbar-nav">
          <li className="active"><a href="#intro">Home</a></li>
          <li><a href="#register">Register/Sign In</a></li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;