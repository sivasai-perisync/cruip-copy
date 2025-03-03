import React from "react";

const CallBtn = () => {
  return (
    <div className=" items-center justify-center bg-black flex gap-2 rounded-full py-2 px-2 ">
      <button className="text-white text-sm font-semibold font-custom">
        Schedule A Call
      </button>
      <img
        className="w-6"
        src="https://cdn-icons-png.flaticon.com/128/14034/14034753.png"
        alt=""
      />
    </div>
  );
};

export default CallBtn;
