import React from "react";
import "../../assets/logo.png";
import "./Nav-Bar.css";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <div className="nav-container">
        <img src={require("../../assets/logo.png")} alt="" />
        <h1 className="shelfie">SHELFIE</h1>
      </div>
    </div>
  );
}
