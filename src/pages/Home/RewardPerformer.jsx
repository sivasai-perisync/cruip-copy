import React from "react";
import data from "../../../Data/RewardPerformer.json";

const RewardPerformer = () => {
  return (
    <div className="">
      <div className="bg-[url(./public/images/hero-bg.png)] w-[100%] h-auto bg-no-repeat bg-cover bg-center p-4">
        <p className="max-w-7xl mx-auto text-5xl font-extrabold py-16 text-white font-custom">
          We bring you high-quality talents <br /> from 72+ countries
        </p>
        <div className="pb-40 flex items-center justify-center overflow-hidden gap-6">
          {" "}
          <img
            className="w-[500px] "
            src="https://cdn.pixabay.com/photo/2023/09/11/06/03/building-8246151_640.jpg"
            alt=""
          />
          <img
            className="w-[500px] "
            src="https://cdn.pixabay.com/photo/2018/01/11/21/27/desk-3076954_640.jpg"
            alt=""
          />
          <img
            className="w-[500px] "
            src="https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181960_640.jpg"
            alt=""
          />
          <img
            className="w-[500px] "
            src="https://cdn.pixabay.com/photo/2017/06/09/07/37/notebook-2386034_640.jpg"
            alt=""
          />
          <img
            className="w-[500px] "
            src="https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_640.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-10 sm:w-full  md:max-w-7xl mx-auto pb-20 text-white">
          {data.map((item, i) => (
            <div className="flex flex-col max-w-[200px]" key={i}>
              <div>
                <img className="w-10 invert" src={item.img} alt="" />
              </div>

              <div className="font-bold pt-4 font-custom">{item.head}</div>
              <div className="font-custom1">{item.para}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RewardPerformer;
