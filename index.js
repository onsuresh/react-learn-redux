import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
import { myStore } from "./store";
import { Provider, useSelector } from "react-redux";

function Apple(props) {
  const counter = useSelector(state => state.counter);
  console.log(counter);
  return <p>{counter}</p>;
}
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
        <Apple />
      </div>
    );
  }
}

render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
