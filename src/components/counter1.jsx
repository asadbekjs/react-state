const Counter1 = () => {
  let counter = 0;

  const handleIncrement = () => {
    counter += 1;
    console.log(counter);
  };

  const handleDecrement = () => {
    counter -= 1;
    console.log(counter);
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
      <span>{counter}</span>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter1;
