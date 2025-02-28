import React from "react";
import Header from "./Header";
import Callbtn from "./Callbtn";

const Herosection = () => {
  return (
    <div className=" ">
      <img className="absolute z-[-10] w-screen" src="./public/hero-bg.png" alt="" />
      <Header />
      <p className="text-6xl max-w-[600px] mx-auto font-bold pt-28 text-white text-center font-custom">
        Hire reliable and trustworthy talents.
      </p>
      <p className="max-w-[700px] mx-auto text-center text-white pt-4 text-lg">
        Our landing page template works on all devices, so you only have to set
        it up once, and get beautiful results forever.
      </p>
      <div className="flex items-center justify-center pt-10 pb-20"><Callbtn /></div>
    </div>
  );
};

export default Herosection;
