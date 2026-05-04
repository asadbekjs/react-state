import { useState } from "react";

const NameInput = () => {
  const [name, setName] = useState("");
  const handleName = (event) => {
    // console.log(event); object {}
    setName(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Ismingizni kiriting"
        value={name}
        onChange={handleName}
      />
      {/* Real vaqtda ko'rinadi */}
      {name && <p>Salom, {name}! 👋</p>}
    </div>
  );
};

export default NameInput;
