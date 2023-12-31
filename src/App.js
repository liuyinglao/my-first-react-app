import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "Yinglao",
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.name}</p>
          <button
            onClick={() => {
              if (this.state.name === "Yinglao") {
                this.setState({ name: "Michael" });
              } else {
                this.setState({ name: "Yinglao" });
              }
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
