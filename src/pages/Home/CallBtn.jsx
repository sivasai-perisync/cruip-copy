import React from "react";

const CallBtn = () => {
  return (
    <div className=" items-center justify-center bg-black flex gap-4 rounded-full h-[2.25rem] px-[0.75rem] ">
      <button className="text-white text-sm font-extrabold font-custom">
        Schedule A Call
      </button>
      <img
        className="w-6 hover:w-8"
        src="https://cdn-icons-png.flaticon.com/128/14034/14034753.png"
        alt=""
      />
    </div>
  );
};

export default CallBtn;
