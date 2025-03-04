import React from "react";
import { useState } from "react";

const FlexibleBtn = () => {
  const [color, SetColor] = useState("white");
  const ChangeBg = () => {
    if (color === "white") SetColor("blue");
    if (color === "blue") SetColor("white");
  };

  return (
    <div className="">
      <button
        onClick={ChangeBg}
        className="w-40  h-8 rounded-full bg-white shadow-md hover:bg-blue-100 font-bold font-custom "
      >
        Flexible Features
      </button>
    </div>
  );
};

export default FlexibleBtn;
