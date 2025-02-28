import React from "react";
import { useState } from "react";

const Flexiblebtn = () => {
  const [color, setcolor] = useState("white");
  const changebg = () => {
    if (color === "white") setcolor("blue");
    if (color === "blue") setcolor("white");
  };

  return (
    <div className="">
      <button
        onClick={changebg}
        className="w-40  h-8 rounded-full bg-white shadow-md hover:bg-blue-100 "
      >
        Flexible Features
      </button>
    </div>
  );
};

export default Flexiblebtn;
