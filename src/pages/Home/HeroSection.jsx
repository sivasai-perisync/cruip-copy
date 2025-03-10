import React from "react";
import Header from "../../Components/Header/Header"

import CallBtn from "./CallBtn";


const HeroSection = () => {
  return (
    <div className=" w-[100%] ">

      <div className="bg-[url(./public/images/hero-bg.png)] w-[100%] h-auto bg-no-repeat bg-cover bg-center p-4">
        <Header />
        <h1 className="md:text-7xl sm:text-5xl sm:w-full  md:max-w-7xl mx-auto  pt-28 font-extrabold text-white text-center font-custom">
          Hire reliable and <br /> trustworthy talents.
        </h1>
        <p className="sm:w-full  md:max-w-7xl mx-auto text-center text-white pt-4 text-lg font-custom1">
          Our landing page template works on all devices, so you only have to set
          it up once, <br /> and get beautiful results forever.
        </p>
        <div className="flex max-w-7xl mx-auto items-center justify-center pt-10 pb-20"><CallBtn /></div>
      </div></div>
  );
};

export default HeroSection;
