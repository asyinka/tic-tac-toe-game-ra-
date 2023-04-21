import { useState } from "react";

const Square = () => {
  const [value, setValue] = useState(null);

  function handleClick() {
    console.log("X");
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
};

export default Square;
