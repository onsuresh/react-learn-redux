import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
import { myStore } from "./store";
import { Provider, useSelector, useDispatch } from "react-redux";
import { increment, decrement } from './store/action/action';

function Apple(props) {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  let plus = (e) => {
    return dispatch(increment(5));
  }
  let minus = (e) => {
    return dispatch(decrement(3));
  }
  return (
    <div>
      <p>{counter}</p>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
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
myStore.subscribe(()=> console.log(myStore.getState().counter))
render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
