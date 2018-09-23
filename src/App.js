
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Travel</h1>
        </header>
        <Travel
          destination="Vulcano"
          country="Italie"
          photo="http://www.eolclub.com/FRANCIA/vulcani/Le%20volcanisme%20de%20l'%C3%AEle%20de%20Vulcano_file/vulcano.jpg"
          distance="2181 km"
        />
        <Travel
          destination="New-York"
          country="États-Unis"
          photo="https://cdn.shopify.com/s/files/1/1248/6797/files/original_grande.jpg?v=1480110873"
          distance="5 834 km"
        />
      </div>
    );
  }
}

export default App;