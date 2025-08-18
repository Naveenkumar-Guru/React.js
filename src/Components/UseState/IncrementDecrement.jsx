import { useState } from "react";
import "./IncrementDecrement.css";


const IncrementDecrement = () => {
  let [count, setCount] = useState(0);

  let decrement = () => {
    setCount(count - 1);
  };
  let Reset = () => {
    setCount((count = 0));
  };
  let Increment = () => {
    setCount(count + 1);
  };

  return (
    <div count-container>
      <p className="count-display">{count}</p>
      <button className="count-button" onClick={decrement}>
        Decrement
      </button>
      <button className="count-button" onClick={Reset}>
        Reset
      </button>
      <button className="count-button" onClick={Increment}>
        Increment
      </button>
    </div>
  );
};

export default IncrementDecrement;
