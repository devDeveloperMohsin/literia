import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/slices/counterSlice";

function CounterPage() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <h1>
        Counter is <span>{count}</span>
      </h1>
      <button
        className="bg-indigo-500 px-2 py-1 text-white rounded-sm mr-2"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <button className="bg-indigo-500 px-2 py-1 text-white rounded-sm"
      onClick={() => dispatch(increment())}>
        +
      </button>
    </>
  );
}

export default CounterPage;
