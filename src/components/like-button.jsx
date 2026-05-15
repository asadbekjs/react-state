import { useState } from "react";

const LikeButton = () => {
  const [like, setLike] = useState(0);

  const handleLike = () => {
    setLike((prevLike) => prevLike + 1);
  };

  return (
    <div>
      <button onClick={handleLike}>❤️</button>
      {like > 10 && <p>Trending🔥</p>}
      <p>{like}</p>
    </div>
  );
};

export default LikeButton;
