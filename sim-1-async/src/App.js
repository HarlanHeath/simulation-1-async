import React, { Component } from "react";
import NavBar from "./Components/NavBar/Nav-Bar";
import { HashRouter, Link } from "react-router-dom";
import routes from "./routes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <NavBar />
          <br />
          <h1> title page</h1>
          <Link to="/shelfa">Shelf A</Link>
          <Link to="/shelfb">Shelf B</Link>
          <Link to="/shelfc">Shelf C</Link>
          <Link to="/shelfd">Shelf D</Link>
          {routes}
          {/* <button className="shelf-button">Shelf A</button>
          <button className="shelf-button">Shelf B</button>
          <button className="shelf-button">Shelf C</button>
          <button className="shelf-button">Shelf D</button> */}
        </div>
      </HashRouter>
    );
  }
}

export default App;
