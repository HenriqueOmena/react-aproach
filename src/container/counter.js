import React from "react";
import Connect from "../store/config/connect";
import { DecrementCounter, IncrementCounter } from "../store/counter";

const Counter = props => {
    console.log(props)
  const DecrementCounterHandler = () => props.dispatch(DecrementCounter());
  const IncrementCounterHandler = () => props.dispatch(IncrementCounter());

  return (
    <div>
      <p className="number">{props.counter}</p>
      <div>
        {props.children}
        <button
          aria-label="Menos 1"
          className="btn"
          onClick={DecrementCounterHandler}
        >
          -
        </button>
        <button
          aria-label="Mais 1"
          className="btn"
          onClick={IncrementCounterHandler}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Connect(Counter);
