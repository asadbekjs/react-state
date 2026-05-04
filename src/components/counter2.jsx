import { useState } from "react";

const Counter2 = () => {
  // useState hook - array qaytaradi. 1 - state value, 2 - setState function
  // const [state, setState] = useState(initialState);
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    console.log("Increment");
    setCount(count + 1);
  };

  const handleDecrement = () => {
    console.log("Decrement");
    setCount(count - 1);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <span>{count}</span>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter2;
