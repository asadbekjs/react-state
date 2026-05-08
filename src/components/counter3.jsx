import { useState } from "react";

const Counter3 = () => {
  const [count, setCount] = useState(0);

  const addThree = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    // Natija: 1 (3 emas)
  };

  // * previous state pattern
  //   Qoida: Yangi state avvalgi state ga bog'liq bo'lsa — har doim prev ishlatilsin!
  const addThreeCorrect = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    // Natija: 3 ✅
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={addThreeCorrect}>+3</button>
    </div>
  );
};

export default Counter3;
