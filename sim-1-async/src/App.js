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
          {routes}
          <div className="shelf-nav">
            <Link className="shelf-button" to="/shelfa">
              Shelf A
            </Link>
            <Link className="shelf-button" to="/shelfb">
              Shelf B
            </Link>
            <Link className="shelf-button" to="/shelfc">
              Shelf C
            </Link>
            <Link className="shelf-button" to="/shelfd">
              Shelf D
            </Link>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
