import React from "react";
import "../../assets/logo.png";
import "./Nav-Bar.css";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <div className="nav-container">
        <img src="../../assets/logo.png" />
        <h1 className="shelfie">SHELFIE</h1>
      </div>
    </div>
  );
}
