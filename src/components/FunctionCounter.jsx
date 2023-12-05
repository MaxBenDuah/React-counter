import React, {useState} from "react";

const FunctionCounter = function () {
  const [count, setCount] = useState(0);

  const handleDecrease = () => {
    setCount(c => c - 1);
  }

  const handleIncrease = () => {
    setCount(c => c + 1);
  }

  return (
    <>
      <div>
        <p>{count}</p>
        <button onClick={handleDecrease}>Decrease Count</button>
        <button onClick={handleIncrease}>Increase Count</button>
      </div>
    </>
  );
}

export default FunctionCounter;