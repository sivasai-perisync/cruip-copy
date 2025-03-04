import React from "react";
import CallBtn from "./CallBtn";

const data = [
  {
    id: 1,
    head: "Personalised Outreach",
    para: "Work is is changing faster than at any other time in history.",
  },
  {
    id: 2,
    head: "Personalised Outreach",
    para: "Work is is changing faster than at any other time in history.",
  },
  {
    id: 3,
    head: "Personalised Outreach",
    para: "Work is is changing faster than at any other time in history.",
  },
  {
    id: 4,
    head: "Personalised Outreach",
    para: "Work is is changing faster than at any other time in history.",
  },
];

const QuickExplainer = () => {
  return (
    <div className=" bg-white ">
      <p className="text-5xl font-bold text-center py-20 sm:w-full  md:max-w-7xl mx-auto font-custom">
        We support early stage startups  <br /> and leading tech giants.
      </p>
      <div className="relative">
        {" "}
       <div className="sm:w-full  md:max-w-[600px] mx-auto "> <img
          className="pb-20  "
          src="https://media.istockphoto.com/id/1481370371/photo/portrait-of-enthusiastic-hispanic-young-woman-working-on-computer-in-a-modern-bright-office.jpg?s=612x612&w=0&k=20&c=8kNce9Ruc9F2KXvnwf0stWQXCwwQTBCrW8efrqhUIa4="
          alt=""
        /></div>
        <button className="rounded-full bg-white w-[160px] h-10 flex items-center justify-center gap-1 absolute top-[45%] left-[45%]">
          <img
            className="w-4"
            src="https://cdn-icons-png.flaticon.com/128/9376/9376391.png"
            alt=""
          />{" "}
          <div>Quick Explainer</div>
        </button>
      </div>
      <div className="flex items-center justify-center sm:w-full  md:max-w-7xl mx-auto">
        {data.map((item) => (
          <div className="flex items-center justify-center flex-col">
            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center mb-4  ">
              {item.id}
            </div>
            <div className="text-center font-semibold font-custom  mb-1">{item.head}</div>
            <div className="text-center font-custom1 text-gray-400">{item.para}</div>
          </div>
        ))}
      </div>
      <div className="sm:w-full  md:max-w-[200px] mx-auto py-20">
        {" "}
        <CallBtn />
      </div>
    </div>
  );
};

export default QuickExplainer;
