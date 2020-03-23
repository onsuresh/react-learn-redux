import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
import { store } from "./store";
import { Provider } from "react-redux";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>Start editing to see some magic happen :)</p>
      </div>
    );
  }
}

render(<Provider><App /></Provider>, document.getElementById("root"));
