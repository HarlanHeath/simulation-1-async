import React, { Component } from "react";
import NavBar from "./Components/NavBar/Nav-Bar";
import ShelfA from "./Components/ShelfA/Shelf-A";
import ShelfB from "./Components/ShelfB/Shelf-B";
import ShelfC from "./Components/ShelfC/Shelf-C";
import ShelfD from "./Components/ShelfD/Shelf-D";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div>
          <button className="shelf-button">Shelf A</button>
          <button className="shelf-button">Shelf B</button>
          <button className="shelf-button">Shelf C</button>
          <button className="shelf-button">Shelf D</button>
        </div>
      </div>
    );
  }
}

export default App;
